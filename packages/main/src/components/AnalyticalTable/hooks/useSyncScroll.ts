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

    // Tracks written values to recognize their echo `scroll` events.
    const lastWritten = new WeakMap<Element, number>();

    const prevScrollbar = scrollbar.scrollTop;
    // Is a React ref
    // eslint-disable-next-line react-hooks/immutability
    scrollbar.scrollTop = content.scrollTop;
    if (scrollbar.scrollTop !== prevScrollbar) {
      lastWritten.set(scrollbar, scrollbar.scrollTop);
    }

    const sync = (source: 'content' | 'scrollbar') => {
      const sourceEl = source === 'content' ? content : scrollbar;
      const targetEl = source === 'content' ? scrollbar : content;
      const value = sourceEl.scrollTop;

      // Consume our own echo; drop stale records so a genuine scroll is never mistaken for one.
      const isEcho = lastWritten.get(sourceEl) === value;
      lastWritten.delete(sourceEl);
      if (isEcho) {
        return;
      }

      if (targetEl.scrollTop !== value) {
        const prev = targetEl.scrollTop;
        targetEl.scrollTop = value;
        // A clamped no-op write fires no echo, so only record when the value actually changed.
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
