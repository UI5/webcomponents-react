import { useState, useEffect } from 'react';
import { isSSR } from '../../../internal/utils.js';

// If reused, think about implementing the behavior via useSyncExternalStore

const isClient = !isSSR() && document.fonts?.status === 'loaded';

/**
 * Hook that returns whether the fonts are loaded and ready to use.
 *
 * @returns boolean
 */
export function useFontsReady(): boolean {
  const [fontsReady, setFontsReady] = useState(isClient && document.fonts?.status === 'loaded');
  useEffect(() => {
    if (!document.fonts) {
      return;
    }

    if (document.fonts.status === 'loading') {
      let mounted = true;

      void document.fonts.ready.then(() => {
        if (mounted) {
          setFontsReady(true);
        }
      });

      return () => {
        mounted = false;
      };
    }
  }, []);

  return fontsReady;
}
