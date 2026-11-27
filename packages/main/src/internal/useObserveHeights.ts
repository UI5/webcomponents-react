import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/internal/hooks';
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
    manuallyCollapsed = { current: false },
    suppressScrollCollapse = false,
    collapseOnScroll,
    reconcileScrollGeometry,
    previousScrollTopRef,
  }: {
    noHeader: boolean;
    fixedHeader?: boolean;
    scrollTimeout?: MutableRefObject<number>;
    preserveHeaderStateOnScroll?: boolean;
    manuallyCollapsed?: MutableRefObject<boolean>;
    suppressScrollCollapse?: boolean;
    collapseOnScroll: () => void;
    reconcileScrollGeometry?: () => void;
    previousScrollTopRef: MutableRefObject<number>;
  },
) => {
  const [topHeaderHeight, setTopHeaderHeight] = useState(0);
  const [headerContentHeight, setHeaderContentHeight] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const reconcileScrollGeometryRef = useRef(reconcileScrollGeometry);
  useIsomorphicLayoutEffect(() => {
    // Keep the observer on the same node across collapses, using only the latest committed geometry.
    reconcileScrollGeometryRef.current = reconcileScrollGeometry;
  }, [reconcileScrollGeometry]);

  const onScroll = useCallback(
    // ToDo: Check how to properly memoize this callback so it supports React Compiler

    (e) => {
      if (e.target.scrollTop < previousScrollTopRef.current) {
        reconcileScrollGeometry?.();
      }
      const scrollDown = previousScrollTopRef.current <= e.target.scrollTop;
      previousScrollTopRef.current = e.target.scrollTop;
      if (scrollTimeout.current >= performance.now()) {
        return;
      }
      // Manually collapsed headers re-expand at scrollTop 0 via the ObjectPage scroll handler, skip the scroll-driven toggle here.
      if (manuallyCollapsed.current) {
        return;
      }

      if (scrollDown && e.target.scrollTop >= headerContentHeight && !headerCollapsed) {
        // Skip the collapse only when it can't be sustained: the section is flagged too short to keep the top spacer
        // and the scroll range left after collapse would clamp back toward the top and re-expand in a loop.
        const reExpandThreshold = topHeaderHeight + Math.max(0, headerContentHeight - topHeaderHeight);
        if (
          suppressScrollCollapse &&
          e.target.scrollHeight - e.target.clientHeight - headerContentHeight <= reExpandThreshold
        ) {
          return;
        }
        setIsIntersecting(false);
        collapseOnScroll();
      } else if (
        !scrollDown &&
        e.target.scrollTop <= topHeaderHeight + Math.max(0, headerContentHeight - topHeaderHeight) &&
        headerCollapsed
      ) {
        setIsIntersecting(true);
        setHeaderCollapsed(false);
      }
    },
    [
      headerContentHeight,
      topHeaderHeight,
      headerCollapsed,
      suppressScrollCollapse,
      collapseOnScroll,
      reconcileScrollGeometry,
      previousScrollTopRef,
      setHeaderCollapsed,
    ],
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
      // Repair any scroll clamp before updating React's measurements. The geometry hook shares this observer.
      reconcileScrollGeometryRef.current?.();
      setTopHeaderHeight(blockSize);
    });
    if (topHeaderRef?.current) {
      headerContentResizeObserver.observe(topHeaderRef.current);
    }
    return () => {
      headerContentResizeObserver.disconnect();
    };
  }, [topHeaderRef]);

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
