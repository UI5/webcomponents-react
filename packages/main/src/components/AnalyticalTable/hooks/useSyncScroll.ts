import type { MutableRefObject } from 'react';
import { useEffect, useState } from 'react';

export function useSyncScroll(
  refContent: MutableRefObject<HTMLElement>,
  refScrollbar: MutableRefObject<HTMLElement>,
  isScrollable: boolean,
  disabled = false,
) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (disabled || !isScrollable) {
      return;
    }

    const content = refContent.current;
    const scrollbar = refScrollbar.current;

    if (!content || !scrollbar || !isMounted) {
      // Forces a second effect run so refs are populated
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMounted(true);
      return;
    }

    // Is a React ref
    // eslint-disable-next-line react-hooks/immutability
    scrollbar.scrollTop = content.scrollTop;

    // Remember the value we write so the resulting echo `scroll` event is consumed instead of synced back.
    const lastWritten = new WeakMap<Element, number>();

    const sync = (source: 'content' | 'scrollbar') => {
      const sourceEl = source === 'content' ? content : scrollbar;
      const targetEl = source === 'content' ? scrollbar : content;
      const value = sourceEl.scrollTop;

      if (lastWritten.get(sourceEl) === value) {
        lastWritten.delete(sourceEl);
        return;
      }

      if (targetEl.scrollTop !== value) {
        const prev = targetEl.scrollTop;
        targetEl.scrollTop = value;
        // Skip clamped no-op writes: they fire no echo, so a recorded value would never be consumed.
        if (targetEl.scrollTop !== prev) {
          lastWritten.set(targetEl, targetEl.scrollTop);
        }
      }
    };

    const onScrollContent = () => sync('content');
    const onScrollScrollbar = () => sync('scrollbar');

    content.addEventListener('scroll', onScrollContent, { passive: true });
    scrollbar.addEventListener('scroll', onScrollScrollbar, { passive: true });

    return () => {
      content.removeEventListener('scroll', onScrollContent);
      scrollbar.removeEventListener('scroll', onScrollScrollbar);
    };
  }, [isMounted, refContent, refScrollbar, disabled, isScrollable]);
}
