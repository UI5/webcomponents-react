'use client';

import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import { forwardRef, useMemo } from 'react';
import type { CommonProps } from '../../types/index.js';
import { classNames, styleData } from './ObjectPageHeader.module.css.js';
import { useStylesheet } from '@ui5/webcomponents-react-base';

export interface ObjectPageHeaderPropTypes extends CommonProps {
  /**
   * Content of the `ObjectPageHeader`.
   */
  children?: ReactNode | ReactNode[];
}

export interface InternalProps extends ObjectPageHeaderPropTypes {
  /**
   * Determines if the header is pinned.
   */
  headerPinned?: boolean;
  /**
   * Determines the height of the top header (`ObjectPageTitle`).
   */
  topHeaderHeight?: number;
}

/**
 * The `ObjectPageHeader` component is used to serve as header section of the `ObjectPage`. It can hold any layout control and has two states - expanded and collapsed.
 *
 * __Note:__
 * - When used inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!
 * - The `ObjectPageHeader` is essentially the `DynamicPageHeader` recommended by SAP Design. It was renamed in v2 to avoid conflicts with the `DynamicPageHeader` from `@ui5/webcomponents`.
 */
const ObjectPageHeader = forwardRef<HTMLDivElement, InternalProps>((props, ref) => {
  const { children, headerPinned, topHeaderHeight, className, style, ...rest } = props;

  const headerStyles = useMemo(() => {
    if (headerPinned) {
      return {
        ...style,
        top: `${topHeaderHeight}px`,
        zIndex: 1,
      };
    }
    return style;
  }, [headerPinned, topHeaderHeight, style]);

  useStylesheet(styleData, ObjectPageHeader.displayName);

  return (
    <div
      ref={ref}
      {...rest}
      className={clsx(classNames.header, className)}
      data-component-name="ObjectPageHeader"
      style={headerStyles}
    >
      {children}
    </div>
  );
});

ObjectPageHeader.displayName = 'ObjectPageHeader';

export { ObjectPageHeader };
