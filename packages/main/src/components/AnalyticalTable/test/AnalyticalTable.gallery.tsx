import { useCallback, useMemo, useRef, useState } from 'react';
import type { AnalyticalTableStickyColumnsChangeDetail } from '../hooks/useStickyColumns.js';
import { AnalyticalTable } from '../index.js';
import type { AnalyticalTableColumnDefinition, AnalyticalTableInstance, AnalyticalTablePropTypes } from '../index.js';
import * as AnalyticalTableHooks from '../pluginHooks/AnalyticalTableHooks.js';

const data = Array.from({ length: 12 }, (_, i) => ({
  name: `Name-${i}`,
  age: i,
  friend: { name: `Friend-${i}`, age: i + 100 },
  status: i % 2 === 0 ? 'even' : 'odd',
}));

const treeData = Array.from({ length: 6 }, (_, i) => ({
  name: `Parent-${i}`,
  age: i,
  friend: { name: `PFriend-${i}`, age: i + 100 },
  status: 'even',
  subRows: [{ name: `Child-${i}`, age: i + 50, friend: { name: `CFriend-${i}`, age: i + 200 }, status: 'odd' }],
}));

const noData: typeof data = [];

interface StickyHarnessProps extends Pick<
  AnalyticalTablePropTypes,
  | 'sortable'
  | 'groupable'
  | 'withRowHighlight'
  | 'highlightField'
  | 'selectionMode'
  | 'scaleWidthMode'
  | 'visibleRows'
  | 'infiniteScroll'
  | 'infiniteScrollThreshold'
  | 'reactTableOptions'
> {
  columns: AnalyticalTableColumnDefinition[];
  /** When set, renders a "toggle" button that programmatically pins/unpins this column id. */
  toggleId?: string;
  /** Include the `useStickyColumns` plugin (default `true`). */
  withHook?: boolean;
  containerWidth?: string;
  tree?: boolean;
  empty?: boolean;
}

export const StickyHarness = ({
  columns,
  toggleId,
  withHook = true,
  containerWidth = '500px',
  tree,
  empty,
  ...tableProps
}: StickyHarnessProps) => {
  const tableInstanceRef = useRef<AnalyticalTableInstance>(null);
  const [changeCount, setChangeCount] = useState(0);
  const [lastDetail, setLastDetail] = useState('');
  const [loadMoreCount, setLoadMoreCount] = useState(0);

  const handleStickyChange = useCallback((detail: AnalyticalTableStickyColumnsChangeDetail) => {
    setChangeCount((c) => c + 1);
    setLastDetail(JSON.stringify({ sticky: detail.sticky, stickyColumns: detail.stickyColumns }));
  }, []);
  const handleLoadMore = useCallback(() => {
    setLoadMoreCount((c) => c + 1);
  }, []);

  const tableHooks = useMemo(
    // eslint-disable-next-line react-hooks/rules-of-hooks -- factory, not a React hook
    () => (withHook ? [AnalyticalTableHooks.useStickyColumns(handleStickyChange)] : []),
    [withHook, handleStickyChange],
  );
  const style = useMemo(() => ({ width: containerWidth }), [containerWidth]);

  return (
    <>
      {toggleId && (
        <button
          type="button"
          data-testid="toggle"
          onClick={() => tableInstanceRef.current?.toggleStickyColumn(toggleId)}
        >
          toggle
        </button>
      )}
      <AnalyticalTable
        tableInstance={tableInstanceRef}
        style={style}
        data={empty ? noData : tree ? treeData : data}
        columns={columns}
        tableHooks={tableHooks}
        isTreeTable={tree}
        onLoadMore={handleLoadMore}
        {...tableProps}
      />
      <span data-testid="sticky-change-count">{changeCount}</span>
      <span data-testid="sticky-last">{lastDetail}</span>
      <span data-testid="load-more-count">{loadMoreCount}</span>
    </>
  );
};
