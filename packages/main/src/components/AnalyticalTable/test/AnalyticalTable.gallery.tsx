import { useCallback, useMemo, useRef, useState } from 'react';
import { AnalyticalTable } from '../index.js';
import type { AnalyticalTableColumnDefinition, AnalyticalTableInstance, AnalyticalTablePropTypes } from '../index.js';
import * as AnalyticalTableHooks from '../pluginHooks/AnalyticalTableHooks.js';
import type {
  AnalyticalTableStickyAutoToggleDetail,
  AnalyticalTableStickyColumnsChangeDetail,
} from '../pluginHooks/useStickyColumns.js';

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
  /** When set, renders `set-narrow`/`set-wide` buttons that switch the container width at runtime. */
  resizable?: boolean;
  narrowWidth?: string;
  wideWidth?: string;
  tree?: boolean;
  empty?: boolean;
}

export const StickyHarness = ({
  columns,
  toggleId,
  withHook = true,
  containerWidth = '500px',
  resizable,
  narrowWidth = '180px',
  wideWidth = '600px',
  tree,
  empty,
  ...tableProps
}: StickyHarnessProps) => {
  const tableInstanceRef = useRef<AnalyticalTableInstance>(null);
  const [changeCount, setChangeCount] = useState(0);
  const [lastDetail, setLastDetail] = useState('');
  const [loadMoreCount, setLoadMoreCount] = useState(0);
  const [autoToggleCount, setAutoToggleCount] = useState(0);
  const [autoToggleLast, setAutoToggleLast] = useState('');
  const [width, setWidth] = useState(containerWidth);

  const handleStickyChange = useCallback((detail: AnalyticalTableStickyColumnsChangeDetail) => {
    setChangeCount((c) => c + 1);
    setLastDetail(JSON.stringify({ sticky: detail.sticky, stickyColumns: detail.stickyColumns }));
  }, []);
  const handleAutoToggle = useCallback((detail: AnalyticalTableStickyAutoToggleDetail) => {
    setAutoToggleCount((c) => c + 1);
    setAutoToggleLast(JSON.stringify({ enabled: detail.enabled, stickyColumns: detail.stickyColumns }));
  }, []);
  const handleLoadMore = useCallback(() => {
    setLoadMoreCount((c) => c + 1);
  }, []);

  const tableHooks = useMemo(
    () =>
      withHook
        ? [
            // eslint-disable-next-line react-hooks/rules-of-hooks -- factory, not a React hook
            AnalyticalTableHooks.useStickyColumns({
              onStickyColumnsChange: handleStickyChange,
              onAutoToggleSticky: handleAutoToggle,
            }),
          ]
        : [],
    [withHook, handleStickyChange, handleAutoToggle],
  );
  const style = useMemo(() => ({ width }), [width]);

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
      {resizable && (
        <>
          <button type="button" data-testid="set-narrow" onClick={() => setWidth(narrowWidth)}>
            narrow
          </button>
          <button type="button" data-testid="set-wide" onClick={() => setWidth(wideWidth)}>
            wide
          </button>
        </>
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
      <span data-testid="auto-toggle-count">{autoToggleCount}</span>
      <span data-testid="auto-toggle-last">{autoToggleLast}</span>
      <span data-testid="load-more-count">{loadMoreCount}</span>
    </>
  );
};
