// When reused, move to base pkg
import { isFirefox as isFirefoxFn } from '@ui5/webcomponents-react-base/Device';
import { useEffect, useState } from 'react';

/**
 * Creates an invisible element for measuring scrollbar width.
 *
 * __Note:__ Overlay scrollbars don't have a width.
 */
function getScrollbarWidth() {
  const el = document.createElement('div');
  el.style.cssText = 'overflow:scroll;position:absolute;top:-9999px;width:100px;height:100px';
  document.body.appendChild(el);
  const width = el.offsetWidth - el.clientWidth;
  el.remove();
  return width;
}

interface NativeScrollbarInfo {
  nativeScrollbar: boolean;
  scrollbarWidth: number;
}

/**
 * SSR ready hook that determines whether the table uses the browser's native scrollbar.
 *
 * The native scrollbar is used for overlay scrollbars and Firefox, otherwise the custom `VerticalScrollbar` replaces the classic scrollbar with the styled one.
 *
 * __Note:__ Measured once on mount, a mode change (OS setting or (dis)connecting a mouse) requires a page refresh.
 */
export function useNativeScrollbar(): NativeScrollbarInfo {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    // only update state after mount for SSR hydration
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsFirefox(isFirefoxFn());
    setScrollbarWidth(getScrollbarWidth());
  }, []);

  return { nativeScrollbar: isFirefox || scrollbarWidth === 0, scrollbarWidth };
}
