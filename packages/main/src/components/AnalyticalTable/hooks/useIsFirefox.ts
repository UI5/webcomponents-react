// When reused, move to base pkg
import { isFirefox as isFirefoxFn } from '@ui5/webcomponents-react-base/Device';
import { useEffect, useState } from 'react';

/**
 * SSR ready `isFirefox` check.
 */
export function useIsFirefox() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    // safe here because we only update state after mount for SSR hydration
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsFirefox(isFirefoxFn());
  }, []);

  return isFirefox;
}
