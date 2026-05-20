import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/internal/hooks';
import { useState } from 'react';

/**
 * Detects the system scrollbar size (width = height) by measuring a hidden probe element.
 * Returns 0 on systems with overlay scrollbars (e.g., macOS default), 15-17 on systems with
 * always-visible scrollbars. Measured once per mount; the value is constant for a given OS/browser session.
 */
export const useScrollbarSize = (): number => {
  const [size, setSize] = useState(0);
  useIsomorphicLayoutEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    const probe = document.createElement('div');
    probe.style.cssText = 'overflow:scroll;width:30px;height:30px;position:absolute;top:-9999px;visibility:hidden;';
    document.body.appendChild(probe);
    setSize(probe.offsetHeight - probe.clientHeight);
    document.body.removeChild(probe);
  }, []);
  return size;
};
