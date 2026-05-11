import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import type { DependencyList, ReactNode } from 'react';

const renderErr = 'Renderer Error ☝️';

export const actions: Record<string, string> = {
  init: 'init',
};

export const defaultRenderer = ({ value = '' }: { value?: any }) => value;
export const emptyRenderer = () => <>&nbsp;</>;

export const defaultColumn: Record<string, unknown> = {
  Cell: defaultRenderer,
  width: 150,
  minWidth: 0,
  maxWidth: Number.MAX_SAFE_INTEGER,
};

function mergeProps(...propList: Record<string, any>[]): Record<string, any> {
  return propList.reduce((props, next) => {
    const { style, className, ...rest } = next;

    props = {
      ...props,
      ...rest,
    };

    if (style) {
      props.style = props.style ? { ...(props.style || {}), ...(style || {}) } : style;
    }

    if (className) {
      props.className = props.className ? props.className + ' ' + className : className;
    }

    if (props.className === '') {
      delete props.className;
    }

    return props;
  }, {});
}

function handlePropGetter(prevProps: Record<string, any>, userProps: any, meta?: any): Record<string, any> {
  if (typeof userProps === 'function') {
    return handlePropGetter({}, userProps(prevProps, meta));
  }

  if (Array.isArray(userProps)) {
    return mergeProps(prevProps, ...userProps);
  }

  return mergeProps(prevProps, userProps);
}

export const makePropGetter = (hooks: any[], meta: Record<string, any> = {}) => {
  return (userProps: Record<string, any> = {}) =>
    [...hooks, userProps].reduce(
      (prev, next) =>
        handlePropGetter(prev, next, {
          ...meta,
          userProps,
        }),
      {},
    );
};

export const reduceHooks = (hooks: any[], initial: any, meta: Record<string, any> = {}, allowUndefined?: boolean) =>
  hooks.reduce((prev: any, next: any) => {
    const nextValue = next(prev, meta);
    if (process.env.NODE_ENV !== 'production') {
      if (!allowUndefined && typeof nextValue === 'undefined') {
        console.info(next);
        throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
      }
    }
    return nextValue;
  }, initial);

export const loopHooks = (hooks: any[], context: any, meta: Record<string, any> = {}) =>
  hooks.forEach((hook: any) => {
    const nextValue = hook(context, meta);
    if (process.env.NODE_ENV !== 'production') {
      if (typeof nextValue !== 'undefined') {
        console.info(hook, nextValue);
        throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
      }
    }
  });

export function ensurePluginOrder(
  plugins: Array<{ pluginName?: string } & ((...args: any[]) => void)>,
  befores: string[],
  pluginName: string,
  afters?: string[],
) {
  if (process.env.NODE_ENV !== 'production' && afters) {
    throw new Error(
      `Defining plugins in the "after" section of ensurePluginOrder is no longer supported (see plugin ${pluginName})`,
    );
  }
  const pluginIndex = plugins.findIndex((plugin) => plugin.pluginName === pluginName);

  if (pluginIndex === -1) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(`The plugin "${pluginName}" was not found in the plugin list!
This usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:

  ${pluginName}.pluginName = '${pluginName}'
`);
    }
  }

  befores.forEach((before) => {
    const beforeIndex = plugins.findIndex((plugin) => plugin.pluginName === before);
    if (beforeIndex > -1 && beforeIndex > pluginIndex) {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error(`React Table: The ${pluginName} plugin hook must be placed after the ${before} plugin hook!`);
      }
    }
  });
}

export function functionalUpdate(updater: any, old: any) {
  return typeof updater === 'function' ? updater(old) : updater;
}

export function useGetLatest<T>(obj: T): () => T {
  const ref = useRef<T>(obj);
  // eslint-disable-next-line react-hooks/refs
  ref.current = obj;

  return useCallback(() => ref.current, []);
}

export const safeUseLayoutEffect = typeof document !== 'undefined' ? useLayoutEffect : useEffect;

export function useMountedLayoutEffect(fn: () => void, deps: DependencyList) {
  const mountedRef = useRef(false);

  // eslint-disable-next-line react-hooks/refs
  safeUseLayoutEffect(() => {
    if (mountedRef.current) {
      fn();
    }
    mountedRef.current = true;
  }, deps);
}

export function useAsyncDebounce(defaultFn: (...args: any[]) => any, defaultWait = 0) {
  const debounceRef = useRef<any>({});

  const getDefaultFn = useGetLatest(defaultFn);
  const getDefaultWait = useGetLatest(defaultWait);

  return useCallback(
    // eslint-disable-next-line @typescript-eslint/require-await
    async (...args: any[]) => {
      if (!debounceRef.current.promise) {
        debounceRef.current.promise = new Promise((resolve, reject) => {
          debounceRef.current.resolve = resolve;
          debounceRef.current.reject = reject;
        });
      }

      if (debounceRef.current.timeout) {
        clearTimeout(debounceRef.current.timeout);
      }

      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      debounceRef.current.timeout = setTimeout(async () => {
        delete debounceRef.current.timeout;
        try {
          debounceRef.current.resolve(await getDefaultFn()(...args));
        } catch (err) {
          debounceRef.current.reject(err);
        } finally {
          delete debounceRef.current.promise;
        }
      }, getDefaultWait());

      return debounceRef.current.promise;
    },
    [getDefaultFn, getDefaultWait],
  );
}

export function makeRenderer(instance: any, column: any, meta: Record<string, any> = {}) {
  return (type: any, userProps: Record<string, any> = {}): ReactNode => {
    const Comp = typeof type === 'string' ? column[type] : type;

    if (typeof Comp === 'undefined') {
      console.info(column);
      throw new Error(renderErr);
    }

    return flexRender(Comp, { ...instance, column, ...meta, ...userProps });
  };
}

export function flexRender(Comp: any, props: Record<string, any>): ReactNode {
  return isReactComponent(Comp) ? <Comp {...props} /> : Comp;
}

function isReactComponent(component: any): boolean {
  return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
}

function isClassComponent(component: any): boolean {
  return (
    typeof component === 'function' &&
    (() => {
      const proto = Object.getPrototypeOf(component);
      return proto.prototype && proto.prototype.isReactComponent;
    })()
  );
}

function isExoticComponent(component: any): boolean {
  return (
    typeof component === 'object' &&
    typeof component.$$typeof === 'symbol' &&
    ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description)
  );
}
