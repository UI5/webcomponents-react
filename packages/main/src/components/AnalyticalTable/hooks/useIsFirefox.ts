// When reused, move to base pkg
import { useEffect, useState } from 'react';
import { isFirefox as isFirefoxFn } from '@ui5/webcomponents-react-base/Device';

/**
 * SSR ready `isFirefox` check.
 */
export function useIsFirefox() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    setIsFirefox(isFirefoxFn());
  }, []);

  return isFirefox;
}
