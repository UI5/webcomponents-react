'use client';

import { getEffectiveScopingSuffixForTag } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import type { ComponentType, ReactElement, ReactNode, Ref } from 'react';
import { cloneElement, forwardRef, Fragment, isValidElement, useEffect, useState, version } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect.js';
import { useSyncRef } from '../hooks/useSyncRef.js';
import type { CommonProps, Ui5DomRef } from '../types/index.js';
import { camelToKebabCase, capitalizeFirstLetter, kebabToCamelCase, parseSemVer } from '../utils/index.js';

const createEventPropName = (eventName: string) => `on${capitalizeFirstLetter(kebabToCamelCase(eventName))}`;

const isPrimitiveAttribute = (value: unknown): boolean => {
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
};

type EventHandler = (event: CustomEvent<unknown>) => void;

export interface WithWebComponentPropTypes {
  /**
   * Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.
   *
   * __Note:__ This adds a rendering cycle to your component.
   */
  waitForDefine?: boolean;
}

const definedWebComponents = new Set<ComponentType>([]);

/**
 * ⚠️ __INTERNAL__ use only! This function is not part of the public API.
 */
export const withWebComponent = <Props extends Record<string, any>, RefType = Ui5DomRef>(
  tagName: string,
  regularProperties: string[],
  booleanProperties: string[],
  slotProperties: string[],
  eventProperties: string[],
) => {
  const webComponentsSupported = parseSemVer(version).major >= 19;
  const regularKebabNames = regularProperties.map(camelToKebabCase);
  const booleanKebabNames = booleanProperties.map(camelToKebabCase);
  const eventPropNames = eventProperties.map(createEventPropName);
  const knownKeys = new Set<string>([...regularProperties, ...slotProperties, ...booleanProperties, ...eventPropNames]);
  const tagNameSuffix: string = getEffectiveScopingSuffixForTag(tagName);
  const Component = (tagNameSuffix ? `${tagName}-${tagNameSuffix}` : tagName) as unknown as ComponentType<
    CommonProps & { class?: string; ref?: Ref<RefType> }
  >;

  // displayName will be assigned in the individual files
  // eslint-disable-next-line react/display-name
  return forwardRef<RefType, Props & WithWebComponentPropTypes>((props, wcRef) => {
    const { className, children, waitForDefine, ...rest } = props;
    const [componentRef, ref] = useSyncRef<RefType>(wcRef);
    const [isDefined, setIsDefined] = useState(definedWebComponents.has(Component));
    // regular props (no booleans, no slots and no events)
    const regularProps: Record<string, unknown> = {};
    for (let i = 0; i < regularProperties.length; i++) {
      const name = regularProperties[i];
      if (Object.prototype.hasOwnProperty.call(rest, name) && isPrimitiveAttribute(rest[name])) {
        regularProps[regularKebabNames[i]] = rest[name];
      }
    }

    // boolean properties - only attach if they are truthy
    const booleanProps: Record<string, unknown> = {};
    for (let i = 0; i < booleanProperties.length; i++) {
      const name = booleanProperties[i];
      if (webComponentsSupported) {
        booleanProps[booleanKebabNames[i]] = rest[name];
      } else {
        if (rest[name] === true || rest[name] === 'true') {
          booleanProps[booleanKebabNames[i]] = true;
        }
      }
    }

    const slots = slotProperties.reduce((acc, name) => {
      const slotValue = rest[name] as ReactElement;

      if (!slotValue) {
        return acc;
      }

      if (rest[name]?.$$typeof === Symbol.for('react.portal')) {
        console.warn('ReactPortal is not supported for slot props.');
        return acc;
      }

      const slottedChildren = [];
      let index = 0;
      const removeFragments = (element: ReactNode) => {
        if (!isValidElement(element)) return;
        if (element.type === Fragment) {
          const elementChildren = (element as ReactElement<{ children?: ReactNode | ReactNode[] }>).props?.children;
          if (Array.isArray(elementChildren)) {
            elementChildren.forEach((item) => {
              if (Array.isArray(item)) {
                item.forEach(removeFragments);
              } else {
                removeFragments(item);
              }
            });
          } else {
            removeFragments(elementChildren);
          }
        } else {
          slottedChildren.push(
            cloneElement<Partial<HTMLElement>>(element, {
              key: element.key ?? `${name}-${index}`,
              slot: name,
            }),
          );
          index++;
        }
      };

      if (Array.isArray(slotValue)) {
        slotValue.forEach((item) => {
          removeFragments(item);
        });
      } else {
        removeFragments(slotValue);
      }
      return [...acc, ...slottedChildren];
    }, []);

    // event binding - React 19 supports this natively
    if (!webComponentsSupported) {
      // React version never changes between renders
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useIsomorphicLayoutEffect(() => {
        const localRef = ref.current;
        const eventRegistry: Record<string, EventHandler> = {};
        if (!waitForDefine || isDefined) {
          eventProperties.forEach((eventName, i) => {
            const eventHandler = rest[eventPropNames[i]] as EventHandler;
            if (typeof eventHandler === 'function') {
              eventRegistry[eventName] = eventHandler;
              // @ts-expect-error: all custom events can be passed here, so `keyof HTMLElementEventMap` isn't sufficient
              localRef?.addEventListener(eventName, eventRegistry[eventName]);
            }
          });

          return () => {
            for (const eventName in eventRegistry) {
              // @ts-expect-error: all custom events can be passed here, so `keyof HTMLElementEventMap` isn't sufficient
              localRef?.removeEventListener(eventName, eventRegistry[eventName]);
            }
          };
        }
      }, [...eventPropNames.map((propName) => rest[propName]), isDefined, waitForDefine]);
    }

    const eventHandlers: Record<string, unknown> = {};
    if (webComponentsSupported) {
      for (let i = 0; i < eventProperties.length; i++) {
        const eventHandlerProp = rest[eventPropNames[i]];
        if (eventHandlerProp) {
          eventHandlers[`on${eventProperties[i]}`] = eventHandlerProp;
        }
      }
    }

    // In React 19 events aren't correctly attached after hydration
    const [attachEvents, setAttachEvents] = useState(!webComponentsSupported || !Object.keys(eventHandlers).length); // apply workaround only for React19 and if event props are defined

    // non web component related props, just pass them
    const nonWebComponentRelatedProps: Record<string, unknown> = {};
    for (const key in rest) {
      if (Object.prototype.hasOwnProperty.call(rest, key) && !knownKeys.has(key)) {
        const val = rest[key];
        if (!key.startsWith('aria-') && !key.startsWith('data-') && val === false) {
          continue;
        }
        nonWebComponentRelatedProps[key] = val;
      }
    }

    useEffect(() => {
      if (waitForDefine && !isDefined) {
        void customElements.whenDefined(Component as unknown as string).then(() => {
          setIsDefined(true);
          definedWebComponents.add(Component);
        });
      }
    }, [waitForDefine, isDefined]);

    const regularPropValues = regularProperties.map((prop) => props[prop]);
    useEffect(() => {
      void customElements.whenDefined(Component as unknown as string).then(() => {
        for (let i = 0; i < regularProperties.length; i++) {
          const value = regularPropValues[i];
          if (value != null && !isPrimitiveAttribute(value)) {
            if (ref.current) {
              ref.current[regularProperties[i]] = value;
            }
          }
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, regularPropValues);

    useIsomorphicLayoutEffect(() => {
      setAttachEvents(true);
    }, []);

    if (waitForDefine && !isDefined) {
      return null;
    }

    // compatibility wrapper for ExpandableText - remove in v3
    if (tagName === 'ui5-expandable-text') {
      const renderWhiteSpace = nonWebComponentRelatedProps['renderWhitespace'] ? true : undefined;
      const { ['overflow-mode']: overflowMode, text, ...restRegularProps } = regularProps;
      const showOverflowInPopover = nonWebComponentRelatedProps['showOverflowInPopover'];
      return (
        <Component
          ref={componentRef}
          {...booleanProps}
          {...restRegularProps}
          {...(attachEvents ? eventHandlers : {})}
          {...nonWebComponentRelatedProps}
          overflow-mode={overflowMode ?? (showOverflowInPopover ? 'Popover' : 'InPlace')}
          // @ts-expect-error: text is available
          text={text ?? children}
          class={className}
          suppressHydrationWarning
          data-_render-whitespace={renderWhiteSpace}
        >
          {slots}
        </Component>
      );
    }

    return (
      <Component
        ref={componentRef}
        {...booleanProps}
        {...regularProps}
        {...(attachEvents ? eventHandlers : {})}
        {...nonWebComponentRelatedProps}
        class={className}
        suppressHydrationWarning
      >
        {slots}
        {children}
      </Component>
    );
  });
};
