'use client';

import type { MutableRefObject } from 'react';
import { createRef, useEffect, useRef, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { getRandomId } from '../../internal/getRandomId.js';
import { ModalStore } from '../../internal/ModalStore.js';
import type { DialogDomRef, DialogPropTypes } from '../../webComponents/Dialog/index.js';
import { Dialog } from '../../webComponents/Dialog/index.js';
import type { MenuDomRef, MenuPropTypes } from '../../webComponents/Menu/index.js';
import { Menu } from '../../webComponents/Menu/index.js';
import type { PopoverDomRef, PopoverPropTypes } from '../../webComponents/Popover/index.js';
import { Popover } from '../../webComponents/Popover/index.js';
import type {
  ResponsivePopoverDomRef,
  ResponsivePopoverPropTypes,
} from '../../webComponents/ResponsivePopover/index.js';
import { ResponsivePopover } from '../../webComponents/ResponsivePopover/index.js';
import type { ToastDomRef, ToastPropTypes } from '../../webComponents/Toast/index.js';
import { Toast } from '../../webComponents/Toast/index.js';
import type { MessageBoxPropTypes } from '../MessageBox/index.js';
import { MessageBox } from '../MessageBox/index.js';

/**
 * @since 2.19.0
 */
interface ModalConfig {
  /**
   * Optional container where the component should be mounted.
   *
   * @default `document.body`
   */
  container?: Element | DocumentFragment;
}

/**
 * @since 2.19.0
 */
interface ModalConfigPopover extends ModalConfig {
  /**
   * If set to `true`, opening a new Popover will automatically close all currently opened Popovers that share the __same opener__.
   *
   * __Note:__
   * - This only affects `Popover`, `Menu`, and `ResponsivePopover`.
   * - Only closes open Popovers with the __same opener__.
   */
  autoClosePopovers?: boolean;
}

type ModalReturnType<DomRef> = {
  ref: MutableRefObject<DomRef>;
};

type ClosableModalReturnType<DomRef> = ModalReturnType<DomRef> & {
  close: () => void;
};

function autoClose(props: { opener?: PopoverPropTypes['opener'] }) {
  const openPopovers = ModalStore.getPopoversWithSameOpener(props.opener);
  openPopovers.forEach((popover) => {
    const popoverRef = popover.ref as MutableRefObject<HTMLElement & { open: boolean }>;
    if (popoverRef.current) {
      popoverRef.current.open = false;
    }
  });
}

function showDialogFn(props: DialogPropTypes, config?: ModalConfig): ClosableModalReturnType<DialogDomRef>;
/**
 * @deprecated Passing `container` directly is deprecated. Use the `config` object with `config.container` instead.
 */
function showDialogFn(
  props: DialogPropTypes,
  container?: Element | DocumentFragment,
): ClosableModalReturnType<DialogDomRef>;
function showDialogFn(
  props: DialogPropTypes,
  containerOrConfig?: Element | DocumentFragment | ModalConfig,
): ClosableModalReturnType<DialogDomRef> {
  const isContainer = containerOrConfig instanceof Element || containerOrConfig instanceof DocumentFragment;
  const id = getRandomId();
  const ref = createRef<DialogDomRef>();
  ModalStore.addModal({
    Component: Dialog,
    props: {
      ...props,
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      },
    },
    ref,
    container: isContainer ? containerOrConfig : containerOrConfig?.container,
    id,
  });

  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    },
  };
}

function showPopoverFn(props: PopoverPropTypes, config?: ModalConfigPopover): ClosableModalReturnType<PopoverDomRef>;
/**
 * @deprecated Passing `container` directly is deprecated. Use the `config` object with `config.container` instead.
 */
function showPopoverFn(
  props: PopoverPropTypes,
  container?: Element | DocumentFragment,
): ClosableModalReturnType<PopoverDomRef>;
function showPopoverFn(
  props: PopoverPropTypes,
  containerOrConfig?: Element | DocumentFragment | ModalConfigPopover,
): ClosableModalReturnType<PopoverDomRef> {
  const isContainer = containerOrConfig instanceof Element || containerOrConfig instanceof DocumentFragment;
  const id = getRandomId();
  const ref = createRef<PopoverDomRef>();
  if (!isContainer && containerOrConfig?.autoClosePopovers) {
    autoClose(props);
  }
  ModalStore.addModal({
    Component: Popover,
    props: {
      ...props,
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      },
    },
    ref,
    container: isContainer ? containerOrConfig : containerOrConfig?.container,
    id,
  });

  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    },
  };
}

function showResponsivePopoverFn(
  props: ResponsivePopoverPropTypes,
  config?: ModalConfigPopover,
): ClosableModalReturnType<ResponsivePopoverDomRef>;
/**
 * @deprecated Passing `container` directly is deprecated. Use the `config` object with `config.container` instead.
 */
function showResponsivePopoverFn(
  props: ResponsivePopoverPropTypes,
  container?: Element | DocumentFragment,
): ClosableModalReturnType<ResponsivePopoverDomRef>;
function showResponsivePopoverFn(
  props: ResponsivePopoverPropTypes,
  containerOrConfig?: Element | DocumentFragment | ModalConfigPopover,
): ClosableModalReturnType<ResponsivePopoverDomRef> {
  const isContainer = containerOrConfig instanceof Element || containerOrConfig instanceof DocumentFragment;
  const id = getRandomId();
  const ref = createRef<ResponsivePopoverDomRef>();
  if (!isContainer && containerOrConfig?.autoClosePopovers) {
    autoClose(props);
  }
  ModalStore.addModal({
    Component: ResponsivePopover,
    props: {
      ...props,
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      },
    },
    ref,
    container: isContainer ? containerOrConfig : containerOrConfig?.container,
    id,
  });

  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    },
  };
}

function showMenuFn(props: MenuPropTypes, config?: ModalConfigPopover): ClosableModalReturnType<MenuDomRef>;
/**
 * @deprecated Passing `container` directly is deprecated. Use the `config` object with `config.container` instead.
 */
function showMenuFn(props: MenuPropTypes, container?: Element | DocumentFragment): ClosableModalReturnType<MenuDomRef>;
function showMenuFn(
  props: MenuPropTypes,
  containerOrConfig?: Element | DocumentFragment | ModalConfigPopover,
): ClosableModalReturnType<MenuDomRef> {
  const isContainer = containerOrConfig instanceof Element || containerOrConfig instanceof DocumentFragment;
  const id = getRandomId();
  const ref = createRef<MenuDomRef>();
  if (!isContainer && containerOrConfig?.autoClosePopovers) {
    autoClose(props);
  }
  ModalStore.addModal({
    Component: Menu,
    props: {
      ...props,
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      },
    },
    ref,
    container: isContainer ? containerOrConfig : containerOrConfig?.container,
    id,
  });

  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    },
  };
}

function showMessageBoxFn(props: MessageBoxPropTypes, config?: ModalConfig): ClosableModalReturnType<DialogDomRef>;
/**
 * @deprecated Passing `container` directly is deprecated. Use the `config` object with `config.container` instead.
 */
function showMessageBoxFn(
  props: MessageBoxPropTypes,
  container?: Element | DocumentFragment,
): ClosableModalReturnType<DialogDomRef>;
function showMessageBoxFn(
  props: MessageBoxPropTypes,
  containerOrConfig?: Element | DocumentFragment | ModalConfig,
): ClosableModalReturnType<DialogDomRef> {
  const isContainer = containerOrConfig instanceof Element || containerOrConfig instanceof DocumentFragment;
  const id = getRandomId();
  const ref = createRef<DialogDomRef>();
  ModalStore.addModal({
    // @ts-expect-error: props type safety is covered by the `props` property
    Component: MessageBox,
    props: {
      ...props,
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      },
    },
    ref,
    container: isContainer ? containerOrConfig : containerOrConfig?.container,
    id,
  });

  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    },
  };
}

function showToastFn(props: ToastPropTypes, config?: ModalConfig): ModalReturnType<ToastDomRef>;
/**
 * @deprecated Passing `container` directly is deprecated. Use the `config` object with `config.container` instead.
 */
function showToastFn(props: ToastPropTypes, container?: Element | DocumentFragment): ModalReturnType<ToastDomRef>;
function showToastFn(
  props: ToastPropTypes,
  containerOrConfig?: Element | DocumentFragment | ModalConfig,
): ModalReturnType<ToastDomRef> {
  const isContainer = containerOrConfig instanceof Element || containerOrConfig instanceof DocumentFragment;
  const ref = createRef<ToastDomRef>();
  const id = getRandomId();
  ModalStore.addModal({
    Component: Toast,
    props: {
      ...props,
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      },
    },
    ref,
    container: isContainer ? containerOrConfig : containerOrConfig?.container,
    id,
  });

  return {
    ref,
  };
}

/**
 * Utility class for opening modals in an imperative way.
 *
 * These static helper methods might be useful for showing e.g. Toasts or MessageBoxes after successful or failed
 * network calls.
 *
 * **In order to use these helpers, please make sure to render the `Modals` component somewhere in your application tree.**
 *
 * @since 0.22.2
 */
export function Modals() {
  const modals = useSyncExternalStore(ModalStore.subscribe, ModalStore.getSnapshot, ModalStore.getServerSnapshot);
  const modalsRef = useRef(modals);
  modalsRef.current = modals;

  useEffect(() => {
    return () => {
      modalsRef.current.forEach((modal) => {
        ModalStore.removeModal(modal.id);
      });
    };
  }, []);

  return (
    <>
      {modals.map((modal) => {
        if (modal?.Component) {
          if (modal.container) {
            return createPortal(
              // @ts-expect-error: ref is supported by all supported modals
              <modal.Component {...modal.props} ref={modal.ref} key={modal.id} data-id={modal.id} />,
              modal.container,
            );
          }
          // @ts-expect-error: ref is supported by all supported modals
          return <modal.Component {...modal.props} ref={modal.ref} key={modal.id} data-id={modal.id} />;
        }
      })}
    </>
  );
}

Modals.displayName = 'Modals';

Modals.showDialog = showDialogFn;
Modals.showPopover = showPopoverFn;
Modals.showResponsivePopover = showResponsivePopoverFn;
Modals.showMenu = showMenuFn;
Modals.showMessageBox = showMessageBoxFn;
Modals.showToast = showToastFn;
