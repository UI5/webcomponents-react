import { enrichEventWithDetails, useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { MutableRefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { AnalyticalTablePropTypes, TableInstance } from '../types/index.js';

interface VirtualTableBodyContainerProps {
  tableBodyHeight: number;
  totalColumnsWidth: number;
  children: any;
  parentRef: MutableRefObject<HTMLDivElement>;
  classes: Record<string, string>;
  infiniteScroll?: AnalyticalTablePropTypes['infiniteScroll'];
  infiniteScrollThreshold?: AnalyticalTablePropTypes['infiniteScrollThreshold'];
  onLoadMore: AnalyticalTablePropTypes['onLoadMore'];
  rows: TableInstance['rows'];
  internalRowHeight: number;
  handleExternalScroll: AnalyticalTablePropTypes['onTableScroll'];
  visibleRows: number;
  popInRowHeight: number;
  rowCollapsedFlag?: boolean;
  dispatch: (e: { type: string; payload?: any }) => void;
  isGrouped: boolean;
  nativeScrollbar: boolean;
  hasStickyColumns?: boolean;
  scrollContainerRef?: MutableRefObject<HTMLDivElement>;
}

export const VirtualTableBodyContainer = (props: VirtualTableBodyContainerProps) => {
  const {
    tableBodyHeight,
    totalColumnsWidth,
    children,
    parentRef,
    classes,
    infiniteScroll,
    infiniteScrollThreshold,
    onLoadMore,
    rows,
    internalRowHeight,
    handleExternalScroll,
    visibleRows,
    popInRowHeight,
    rowCollapsedFlag,
    isGrouped,
    nativeScrollbar,
    dispatch,
    hasStickyColumns,
    scrollContainerRef,
  } = props;
  const [isMounted, setIsMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (parentRef.current) {
      // Run before paint so rows appear with the body container (avoids empty-body flash).

      setIsMounted(true);
    }
  }, [parentRef]);

  const dataLength = rows.length;

  const lastScrollTop = useRef(0);
  const firedInfiniteLoadEvents = useRef(new Set());
  const prevDataLength = useRef(dataLength);

  useEffect(() => {
    if (prevDataLength.current > dataLength) {
      // if prevData is larger because a row was collapsed, no scroll should be executed
      if (rowCollapsedFlag) {
        dispatch({
          type: 'ROW_COLLAPSED_FLAG',
          payload: false,
        });
      } else {
        firedInfiniteLoadEvents.current.clear();
        parentRef.current.scrollTop = 0;
        lastScrollTop.current = 0;
      }
    }
    prevDataLength.current = dataLength;
  }, [dataLength, rowCollapsedFlag]);

  const onScroll = useCallback(
    (event) => {
      if (typeof handleExternalScroll === 'function') {
        // In sticky mode the scroll target is the outer table, so derive the row elements from
        // the body container (parentRef) rather than event.target.
        handleExternalScroll(
          enrichEventWithDetails(event, { rows, rowElements: parentRef.current?.children[0]?.children }),
        );
      }
      const scrollOffset = event.target.scrollTop;
      const isScrollingDown = lastScrollTop.current < scrollOffset;
      const target = event.target;
      const scrolledToBottom = target.scrollHeight - target.scrollTop === target.clientHeight;
      // For a grouped table, it is possible that no new groups (rows) are added since new rows are added to existing groups.
      // Because of this, the table should trigger the `onLoadMore` event every time a user scrolls to the bottom.
      const applyGroupingLogic = scrolledToBottom && isGrouped;

      if ((isScrollingDown || applyGroupingLogic) && infiniteScroll) {
        lastScrollTop.current = scrollOffset;
        const currentLastRow =
          Math.floor(scrollOffset / popInRowHeight) +
          (popInRowHeight === internalRowHeight ? visibleRows : Math.floor(tableBodyHeight / popInRowHeight));
        if (rows.length - currentLastRow < infiniteScrollThreshold || applyGroupingLogic) {
          if (!firedInfiniteLoadEvents.current.has(rows.length) || applyGroupingLogic) {
            onLoadMore(event);
          }
          firedInfiniteLoadEvents.current.add(rows.length);
        }
      }
    },
    [
      handleExternalScroll,
      infiniteScroll,
      infiniteScrollThreshold,
      internalRowHeight,
      isGrouped,
      onLoadMore,
      popInRowHeight,
      rows,
      tableBodyHeight,
      visibleRows,
    ],
  );

  // Keep the latest onScroll in a ref so the listener below can stay stable (see effect note).
  const onScrollRef = useRef(onScroll);
  useIsomorphicLayoutEffect(() => {
    onScrollRef.current = onScroll;
  }, [onScroll]);

  useEffect(() => {
    if (!hasStickyColumns || !scrollContainerRef?.current) return;
    const el = scrollContainerRef.current;
    // Stable listener that reads the latest onScroll via ref. Must NOT depend on `onScroll`:
    // scrolling triggers the virtualizer's own listener → synchronous flushSync re-render → if this
    // effect re-ran it would remove this listener mid-dispatch (DOM skips removed listeners), so it
    // would never fire. Attaching once keeps it alive across the scroll-driven re-render.
    const handler = (e: Event) => onScrollRef.current(e);
    el.addEventListener('scroll', handler);
    return () => el.removeEventListener('scroll', handler);
  }, [hasStickyColumns, scrollContainerRef]);

  return (
    <div
      className={clsx(classes.tbody, nativeScrollbar && !hasStickyColumns && classes.nativeScrollbar)}
      ref={parentRef}
      onScroll={hasStickyColumns ? undefined : onScroll}
      style={
        hasStickyColumns
          ? {
              position: 'relative',
              width: `${totalColumnsWidth}px`,
            }
          : {
              position: 'relative',
              overflowY: 'auto',
              height: `${tableBodyHeight}px`,
              width: `${totalColumnsWidth}px`,
            }
      }
      data-component-name="AnalyticalTableBody"
      tabIndex={-1}
      role="rowgroup"
    >
      {isMounted && children}
    </div>
  );
};
