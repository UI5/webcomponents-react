import { isIOS, isMac } from '@ui5/webcomponents-react-base/Device';
import { useEffect, useState } from 'react';

/**
 * SSR ready check for macOS or iOS (Apple VoiceOver support).
 */
export function useCanUseVoiceOver() {
  const [canUseVoiceOver, setCanUseVoiceOver] = useState(false);

  useEffect(() => {
    setCanUseVoiceOver(isIOS() || isMac());
  }, []);

  return canUseVoiceOver;
}
