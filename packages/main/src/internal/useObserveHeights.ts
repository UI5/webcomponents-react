import type { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

declare const ResizeObserver;

export const useObserveHeights = (
  pageRef,
  topHeaderRef,
  headerContentRef,
  [headerCollapsed, setHeaderCollapsed]: [boolean, Dispatch<SetStateAction<boolean>>],
  {
    noHeader,
    fixedHeader = false,
    scrollTimeout = { current: 0 },
    preserveHeaderStateOnScroll,
  }: {
    noHeader: boolean;
    fixedHeader?: boolean;
    scrollTimeout?: MutableRefObject<number>;
    preserveHeaderStateOnScroll?: boolean;
  },
) => {
  const [topHeaderHeight, setTopHeaderHeight] = useState(0);
  const [headerContentHeight, setHeaderContentHeight] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(true);

  const prevScrollTop = useRef(0);
  const onScroll = useCallback(
    // ToDo: Check how to properly memoize this callback so it supports React Compiler
    // eslint-disable-next-line react-hooks/preserve-manual-memoization
    (e) => {
      const scrollDown = prevScrollTop.current <= e.target.scrollTop;
      prevScrollTop.current = e.target.scrollTop;
      if (scrollTimeout.current >= performance.now()) {
        return;
      }

      if (scrollDown && e.target.scrollTop >= headerContentHeight && !headerCollapsed) {
        setIsIntersecting(false);
        setHeaderCollapsed(true);
      } else if (
        !scrollDown &&
        e.target.scrollTop <= topHeaderHeight + Math.max(0, headerContentHeight - topHeaderHeight) &&
        headerCollapsed
      ) {
        setIsIntersecting(true);
        setHeaderCollapsed(false);
      }
    },
    [headerContentHeight, topHeaderHeight, headerCollapsed],
  );

  useEffect(() => {
    if (headerContentRef.current && headerCollapsed !== undefined) {
      setHeaderContentHeight(headerContentRef.current.getBoundingClientRect().height);
    }
  }, [headerCollapsed]);

  useEffect(() => {
    const page = pageRef.current;
    if (!fixedHeader && !preserveHeaderStateOnScroll) {
      page.addEventListener('scroll', onScroll);
    }
    return () => {
      page.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, fixedHeader, preserveHeaderStateOnScroll]);

  // top header
  useEffect(() => {
    const headerContentResizeObserver = new ResizeObserver(([entry]) => {
      const { blockSize } = entry.borderBoxSize[0];
      setTopHeaderHeight(blockSize);
    });
    if (topHeaderRef?.current) {
      headerContentResizeObserver.observe(topHeaderRef.current);
    }
    return () => {
      headerContentResizeObserver.disconnect();
    };
  }, []);

  // header content
  useEffect(() => {
    const headerContentResizeObserver = new ResizeObserver(([entry]) => {
      if (isIntersecting || fixedHeader) {
        const { blockSize } = entry.borderBoxSize[0];
        setHeaderContentHeight(blockSize);
      }
    });

    if (headerContentRef?.current) {
      headerContentResizeObserver.observe(headerContentRef.current);
    }
    return () => {
      headerContentResizeObserver.disconnect();
    };
  }, [isIntersecting, fixedHeader]);
  const totalHeaderHeight = noHeader ? 0 : topHeaderHeight + headerContentHeight;

  return { topHeaderHeight, headerContentHeight, totalHeaderHeight, headerCollapsed };
};
