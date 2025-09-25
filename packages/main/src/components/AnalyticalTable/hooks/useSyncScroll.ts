import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

export function useSyncScroll(refContent: RefObject<HTMLElement>, refScrollbar: RefObject<HTMLElement>) {
  const ticking = useRef(false);
  const isProgrammatic = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const content = refContent.current;
    const scrollbar = refScrollbar.current;

    if (!content || !scrollbar || !isMounted) {
      setIsMounted(true);
      return;
    }

    scrollbar.scrollTop = content.scrollTop;

    const sync = (source: 'content' | 'scrollbar') => {
      if (ticking.current) {
        return;
      }
      ticking.current = true;

      requestAnimationFrame(() => {
        const sourceEl = source === 'content' ? content : scrollbar;
        const targetEl = source === 'content' ? scrollbar : content;

        if (!isProgrammatic.current && targetEl.scrollTop !== sourceEl.scrollTop) {
          isProgrammatic.current = true;
          targetEl.scrollTop = sourceEl.scrollTop;
          // Clear the flag on next frame
          requestAnimationFrame(() => (isProgrammatic.current = false));
        }

        ticking.current = false;
      });
    };

    const onScrollContent = () => sync('content');
    const onScrollScrollbar = () => sync('scrollbar');

    content.addEventListener('scroll', onScrollContent, { passive: true });
    scrollbar.addEventListener('scroll', onScrollScrollbar, { passive: true });

    return () => {
      content.removeEventListener('scroll', onScrollContent);
      scrollbar.removeEventListener('scroll', onScrollScrollbar);
    };
  }, [isMounted, refContent, refScrollbar]);
}
