import NoDataIllustration from '@ui5/webcomponents-fiori/dist/illustrations/NoData.js';
import NoFilterResults from '@ui5/webcomponents-fiori/dist/illustrations/NoFilterResults.js';
import type { ComponentClass, ComponentProps } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import { AnalyticalTableVisibleRowCountMode } from '../../../enums/AnalyticalTableVisibleRowCountMode.js';
import { Button } from '../../../webComponents/Button/index.js';
import { IllustratedMessage } from '../../../webComponents/IllustratedMessage/index.js';
import { Input } from '../../../webComponents/Input/index.js';
import { AnalyticalTable } from '../index.js';
import type {
  AnalyticalTableColumnDefinition,
  AnalyticalTableDomRef,
  AnalyticalTablePropTypes,
} from '../types/index.js';
import { columns, data, generateMoreData } from './test-utils/data.js';

// Two-root tree dataset (matches the shape of cypress `dataTree` for the empty-rows test).
// Root 0 has no subRows; root 1 has enough subRows that expanding it pushes the visible row
// count above the default `minRows` of 5, so no empty-row placeholders remain.
const treeData = [
  { name: 'Flowers Mcfarland', age: 82, friend: { name: 'Gardner Chang', age: 38 } },
  {
    name: 'Head Hardy',
    age: 35,
    friend: { name: 'Mcmillan Bray', age: 85 },
    subRows: [
      { name: 'Deann Thompson', age: 42, friend: { name: 'Meghan Talley', age: 40 } },
      { name: 'Barker Perkins', age: 24, friend: { name: 'Gallegos Morin', age: 77 } },
      { name: 'Marquez Fletcher', age: 51, friend: { name: 'Mia Conway', age: 37 } },
      { name: 'Holman Shannon', age: 75, friend: { name: 'Cleo Newman', age: 77 } },
      { name: 'Letitia Blackburn', age: 46, friend: { name: 'Helena Johnson', age: 37 } },
    ],
  },
];

/**
 * Stateful harness for the cypress `row count modes` test (line 285). Switches between every
 * visibleRowCountMode + outer-container size combination via buttons so the test can run inside a
 * single Playwright `mount()`.
 */
type RowCountMode =
  | 'auto-200-small'
  | 'auto-with-empty-200-small'
  | 'auto-200data-4400'
  | 'auto-with-empty-200data-4400'
  | 'auto-4data-4400'
  | 'auto-with-empty-4data-4400'
  | 'auto-visiblerows-ignored'
  | 'auto-with-empty-visiblerows-ignored'
  | 'fixed-default'
  | 'fixed-20'
  | 'interactive-10';

const moreData200 = generateMoreData(200);
const moreData50 = generateMoreData(50);

export const RowCountModesTestComp = () => {
  const [mode, setMode] = useState<RowCountMode>('auto-200-small');

  const renderTable = () => {
    switch (mode) {
      case 'auto-200-small': {
        return (
          <div style={{ height: '200px' }} data-testid="wrap">
            <AnalyticalTable
              data={data}
              columns={columns}
              visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto}
              overscanCount={10}
            />
          </div>
        );
      }
      case 'auto-with-empty-200-small': {
        return (
          <div style={{ height: '200px' }} data-testid="wrap">
            <AnalyticalTable
              data={data}
              columns={columns}
              visibleRowCountMode={AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows}
              overscanCount={10}
            />
          </div>
        );
      }
      case 'auto-200data-4400': {
        return (
          <AnalyticalTable
            style={{ height: '4400px' }}
            data={moreData200}
            columns={columns}
            visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto}
          />
        );
      }
      case 'auto-with-empty-200data-4400': {
        return (
          <AnalyticalTable
            style={{ height: '4400px' }}
            data={moreData200}
            columns={columns}
            visibleRowCountMode={AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows}
          />
        );
      }
      case 'auto-4data-4400': {
        return (
          <AnalyticalTable
            style={{ height: '4400px' }}
            data={data}
            columns={columns}
            visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto}
          />
        );
      }
      case 'auto-with-empty-4data-4400': {
        return (
          <AnalyticalTable
            style={{ height: '4400px' }}
            data={data}
            columns={columns}
            visibleRowCountMode={AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows}
          />
        );
      }
      case 'auto-visiblerows-ignored': {
        return (
          <AnalyticalTable
            style={{ height: '200px' }}
            data={data}
            columns={columns}
            visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto}
            visibleRows={1337}
          />
        );
      }
      case 'auto-with-empty-visiblerows-ignored': {
        return (
          <AnalyticalTable
            style={{ height: '200px' }}
            data={data}
            columns={columns}
            visibleRowCountMode={AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows}
            visibleRows={1337}
          />
        );
      }
      case 'fixed-default': {
        return (
          <AnalyticalTable
            data={moreData50}
            columns={columns}
            visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Fixed}
          />
        );
      }
      case 'fixed-20': {
        return (
          <AnalyticalTable
            data={moreData50}
            columns={columns}
            visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Fixed}
            visibleRows={20}
          />
        );
      }
      case 'interactive-10': {
        return (
          <AnalyticalTable
            data={moreData50}
            columns={columns}
            visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Interactive}
            visibleRows={10}
          />
        );
      }
    }
  };

  return (
    <>
      <Button data-testid="mode-auto-200-small" onClick={() => setMode('auto-200-small')}>
        auto-200-small
      </Button>
      <Button data-testid="mode-auto-with-empty-200-small" onClick={() => setMode('auto-with-empty-200-small')}>
        auto-with-empty-200-small
      </Button>
      <Button data-testid="mode-auto-200data-4400" onClick={() => setMode('auto-200data-4400')}>
        auto-200data-4400
      </Button>
      <Button data-testid="mode-auto-with-empty-200data-4400" onClick={() => setMode('auto-with-empty-200data-4400')}>
        auto-with-empty-200data-4400
      </Button>
      <Button data-testid="mode-auto-4data-4400" onClick={() => setMode('auto-4data-4400')}>
        auto-4data-4400
      </Button>
      <Button data-testid="mode-auto-with-empty-4data-4400" onClick={() => setMode('auto-with-empty-4data-4400')}>
        auto-with-empty-4data-4400
      </Button>
      <Button data-testid="mode-auto-visiblerows-ignored" onClick={() => setMode('auto-visiblerows-ignored')}>
        auto-visiblerows-ignored
      </Button>
      <Button
        data-testid="mode-auto-with-empty-visiblerows-ignored"
        onClick={() => setMode('auto-with-empty-visiblerows-ignored')}
      >
        auto-with-empty-visiblerows-ignored
      </Button>
      <Button data-testid="mode-fixed-default" onClick={() => setMode('fixed-default')}>
        fixed-default
      </Button>
      <Button data-testid="mode-fixed-20" onClick={() => setMode('fixed-20')}>
        fixed-20
      </Button>
      <Button data-testid="mode-interactive-10" onClick={() => setMode('interactive-10')}>
        interactive-10
      </Button>
      <div key={mode}>{renderTable()}</div>
    </>
  );
};

/**
 * Mounts a wide RTL table for the cypress `horizontal scrolling - rtl` test (line 586). 200 rows
 * × 100 columns of `${i}-${j}` strings; only the cell at the right edge after a horizontal scroll
 * to `-10000, 0` is asserted.
 */
const rtlData = (() => {
  const out: Record<string, string>[] = [];
  for (let i = 1; i <= 200; i++) {
    const row: Record<string, string> = {};
    for (let j = 1; j <= 200; j++) {
      row[`column${j}`] = `${i}-${j}`;
    }
    out.push(row);
  }
  return out;
})();

const rtlColumns: AnalyticalTableColumnDefinition[] = new Array(100)
  .fill('')
  .map((_, i) => ({ accessor: `column${i + 1}`, Header: `${i + 1} Column`, width: 100 }));

export const HorizontalRtlTestComp = () => {
  const memoData = useMemo(() => rtlData, []);
  const memoCols = useMemo(() => rtlColumns, []);
  return <AnalyticalTable dir="rtl" columns={memoCols} data={memoData} />;
};

/**
 * Controlled rowHeight + headerRowHeight harness for cypress `row & header height` (line 959).
 */
export const RowHeightTestComp = () => {
  const [rowHeight, setRowHeight] = useState<number>();
  const [headerRowHeight, setHeaderRowHeight] = useState<number>();
  return (
    <>
      <Input
        data-testid="rowHeight"
        onInput={(e) => {
          const value = (e.target as HTMLInputElement).value;
          if (value === '') {
            setRowHeight(undefined);
          } else {
            setRowHeight(parseInt(value));
          }
        }}
      />
      <Input
        data-testid="headerRowHeight"
        onInput={(e) => {
          const value = (e.target as HTMLInputElement).value;
          if (value === '') {
            setHeaderRowHeight(undefined);
          } else {
            setHeaderRowHeight(parseInt(value));
          }
        }}
      />
      <AnalyticalTable data={data} columns={columns} rowHeight={rowHeight} headerRowHeight={headerRowHeight} />
    </>
  );
};

const filterData500 = new Array(500).fill('').map((_, index) => ({ name: `Row-${index}`, age: index }));

/**
 * Reproducer for the layout-effect that re-syncs the virtualizer's cached `scrollOffset` after a
 * data swap clamps `scrollTop`. See cypress `first virtual row offset matches scrollTop after
 * loading cycle` (line 1613). The test clicks the filter button after scrolling and asserts the
 * first body row's translateY tracks the body's scrollTop within an overscan window.
 */
export const FirstVirtualRowOffsetTestComp = () => {
  const [tableData, setTableData] = useState(filterData500);
  const [loading, setLoading] = useState(false);
  const reactTableOptions = useMemo(() => ({ manualFilters: true }), []);
  const triggerFilter = () => {
    setTableData([]);
    setLoading(true);
    setTimeout(() => {
      setTableData(filterData500.filter((item) => item.age < 5));
      setLoading(false);
    }, 100);
  };
  return (
    <>
      <Button data-testid="filter" onClick={triggerFilter}>
        Filter
      </Button>
      <AnalyticalTable
        data={tableData}
        columns={columns}
        loading={loading}
        reactTableOptions={reactTableOptions}
        visibleRows={15}
        minRows={20}
      />
    </>
  );
};

const infiniteScrollData = new Array(500).fill('').map((_, index) => ({ name: `Name${index}` }));

type InfiniteScrollProps = {
  additionalEmptyRowsCount?: number;
};

/**
 * Flat infinite-scroll harness. Programmatic scroll via the input + three buttons to mutate the
 * data set externally. The running `onLoadMore` call count is recorded into `load-more-count`.
 */
export const InfiniteScrollTestComp = ({ additionalEmptyRowsCount }: InfiniteScrollProps) => {
  const tableRef = useRef<AnalyticalTableDomRef>(null);
  const [internalData, setInternalData] = useState(infiniteScrollData.slice(0, 50));
  const [loadMoreCount, setLoadMoreCount] = useState(0);
  const offset = useRef(50);

  const onLoadMore = useCallback(() => {
    setLoadMoreCount((c) => c + 1);
    setInternalData((prev) => [...prev, ...infiniteScrollData.slice(offset.current, offset.current + 50)]);
    offset.current += 50;
  }, []);

  return (
    <>
      <Input
        data-testid="scrollInput"
        onChange={(e) => {
          const value = Number((e.target as HTMLInputElement).value);
          tableRef.current?.scrollToItem(value);
        }}
      >
        Scroll Down
      </Input>
      <Button
        data-testid="data-110"
        onClick={() => {
          setInternalData(infiniteScrollData.slice(0, 110));
        }}
      >
        Data 110
      </Button>
      <Button
        data-testid="data-100"
        onClick={() => {
          setInternalData(infiniteScrollData.slice(0, 100));
        }}
      >
        Data 100
      </Button>
      <Button
        data-testid="data-10"
        onClick={() => {
          setInternalData(infiniteScrollData.slice(0, 10));
        }}
      >
        Data 10
      </Button>
      <AnalyticalTable
        ref={tableRef}
        data-testid="at"
        data={internalData}
        columns={columns}
        infiniteScroll
        infiniteScrollThreshold={10}
        onLoadMore={onLoadMore}
        additionalEmptyRowsCount={additionalEmptyRowsCount}
      />
      <span data-testid="row-count">{`Rows: ${internalData.length}`}</span>
      <span data-testid="load-more-count">{loadMoreCount}</span>
    </>
  );
};

/**
 * Cypress `Alternate Row Color` (line 2041). Sorting is enabled so the test can apply
 * "Sort Ascending" before re-checking the alternating colors.
 */
export const AlternateRowColorTestComp = () => {
  return <AnalyticalTable data={data} columns={columns} alternateRowColor minRows={7} sortable />;
};

type OverlayMode = 'no-overlay' | 'with-overlay';

/**
 * Cypress `overlay` (line 2472). One mount that toggles between `showOverlay` on/off so the test
 * can compare both visual states. The `data-testid="click-target"` cell mirrors the cypress
 * `findByText('A')` element — we use a dedicated overlay-friendly element to check pointer
 * blocking instead of `shouldNotBeClickable` (Playwright equivalent below).
 */
export const OverlayTestComp = () => {
  const [mode, setMode] = useState<OverlayMode>('no-overlay');
  return (
    <>
      <Button data-testid="mode-no-overlay" onClick={() => setMode('no-overlay')}>
        no-overlay
      </Button>
      <Button data-testid="mode-with-overlay" onClick={() => setMode('with-overlay')}>
        with-overlay
      </Button>
      <AnalyticalTable key={mode} data={data} columns={columns} showOverlay={mode === 'with-overlay'} />
    </>
  );
};

type EmptyRowsMode = 'empty-data' | 'doubled-data' | 'tree-expanded' | 'min-rows-15' | 'tree-default' | 'show-selected';

/**
 * Cypress `empty rows` (line 3094). Six configurations selectable via buttons; the last
 * (`show-selected`) mounts the original `ShowSelectedComp` (tableInstance ref + click-to-snapshot
 * selectedRowIds) and lets the test verify that clicking an empty row does not add it to the
 * selection.
 */
export const EmptyRowsTestComp = () => {
  const [mode, setMode] = useState<EmptyRowsMode>('empty-data');
  const instance = useRef<Record<string, unknown> | null>(null);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const memoTreeData = useMemo(() => treeData, []);
  const treeReactOptions = useMemo(() => ({ initialState: { expanded: { 1: true } } }), []);

  const renderTable = () => {
    switch (mode) {
      case 'empty-data': {
        return <AnalyticalTable data={[]} columns={columns} />;
      }
      case 'doubled-data': {
        return <AnalyticalTable data={[...data, ...data]} columns={columns} />;
      }
      case 'tree-expanded': {
        return (
          <AnalyticalTable data={memoTreeData} columns={columns} isTreeTable reactTableOptions={treeReactOptions} />
        );
      }
      case 'min-rows-15': {
        return <AnalyticalTable data={data} columns={columns} minRows={15} />;
      }
      case 'tree-default': {
        return <AnalyticalTable data={memoTreeData} columns={columns} isTreeTable />;
      }
      case 'show-selected': {
        return (
          <>
            <Button
              data-testid="show-selected"
              onClick={() => {
                const current = instance.current as { state?: { selectedRowIds?: Record<string, boolean> } } | null;
                setSelected(current?.state?.selectedRowIds ?? {});
              }}
            >
              Show Selected
            </Button>
            <AnalyticalTable
              selectionMode={AnalyticalTableSelectionMode.Multiple}
              data={data}
              columns={columns}
              tableInstance={instance}
            />
            <span data-testid="selected-text">Selected: {JSON.stringify(selected)}</span>
          </>
        );
      }
    }
  };

  return (
    <>
      <Button data-testid="mode-empty-data" onClick={() => setMode('empty-data')}>
        empty-data
      </Button>
      <Button data-testid="mode-doubled-data" onClick={() => setMode('doubled-data')}>
        doubled-data
      </Button>
      <Button data-testid="mode-tree-expanded" onClick={() => setMode('tree-expanded')}>
        tree-expanded
      </Button>
      <Button data-testid="mode-min-rows-15" onClick={() => setMode('min-rows-15')}>
        min-rows-15
      </Button>
      <Button data-testid="mode-tree-default" onClick={() => setMode('tree-default')}>
        tree-default
      </Button>
      <Button data-testid="mode-show-selected" onClick={() => setMode('show-selected')}>
        show-selected
      </Button>
      <div key={mode}>{renderTable()}</div>
    </>
  );
};

/**
 * Cypress `controlled bodyHeight` (line 4167). Button bumps the body height to 800px via a
 * `useControlledState` override.
 */
export const ControlledBodyHeightTestComp = () => {
  const [bodyHeight, setBodyHeight] = useState<number | undefined>(undefined);
  const useControlledState = useCallback(
    (state: Record<string, unknown>) => {
      return { ...state, bodyHeight };
    },
    [bodyHeight],
  );
  const reactTableOptions = useMemo(() => ({ useControlledState }), [useControlledState]);
  return (
    <>
      <Button
        data-testid="set-body-height"
        onClick={() => {
          setBodyHeight(800);
        }}
      >
        Set Body Height 800
      </Button>
      <AnalyticalTable data={data} columns={columns} reactTableOptions={reactTableOptions} />
    </>
  );
};

type AdditionalEmptyRowsMode = 'none' | 'one' | 'five';

/**
 * Cypress `additionalEmptyRowsCount` (line 4257). The cypress test mounts three tables back to
 * back; this harness multiplexes them with a single mount.
 */
export const AdditionalEmptyRowsCountTestComp = () => {
  const [mode, setMode] = useState<AdditionalEmptyRowsMode>('none');
  const additionalEmptyRowsCount = mode === 'none' ? undefined : mode === 'one' ? 1 : 5;
  return (
    <>
      <Button data-testid="mode-none" onClick={() => setMode('none')}>
        none
      </Button>
      <Button data-testid="mode-one" onClick={() => setMode('one')}>
        one
      </Button>
      <Button data-testid="mode-five" onClick={() => setMode('five')}>
        five
      </Button>
      <AnalyticalTable
        key={mode}
        data={data}
        columns={columns}
        minRows={4}
        additionalEmptyRowsCount={additionalEmptyRowsCount}
      />
    </>
  );
};

type VerticalScrollSyncMode = 'standard' | 'delayed-data';

/**
 * Cypress `vertical scroll sync` (line 5024). Two phases: a standard 100-row table, then a
 * delayed-data variant where `setData` runs after a 100ms timeout (covers the visibleRowCountMode
 * `AutoWithEmptyRows` path with a `header` slot).
 */
const verticalScrollData = generateMoreData(100);

export const VerticalScrollSyncTestComp = () => {
  const [mode, setMode] = useState<VerticalScrollSyncMode>('standard');
  const [delayed, setDelayed] = useState<Array<{ name: string; age: number; friend: { name: string; age: number } }>>(
    [],
  );

  useEffect(() => {
    if (mode === 'delayed-data') {
      const t = setTimeout(() => {
        setDelayed(verticalScrollData);
      }, 100);
      return () => clearTimeout(t);
    }
  }, [mode]);

  return (
    <>
      <Button data-testid="mode-standard" onClick={() => setMode('standard')}>
        standard
      </Button>
      <Button
        data-testid="mode-delayed-data"
        onClick={() => {
          setDelayed([]);
          setMode('delayed-data');
        }}
      >
        delayed-data
      </Button>
      {mode === 'standard' && <AnalyticalTable columns={columns} data={verticalScrollData} />}
      {mode === 'delayed-data' && (
        <div style={{ height: '500px' }}>
          <AnalyticalTable
            columns={columns}
            data={delayed}
            header={<div>Header</div>}
            visibleRowCountMode={AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows}
          />
        </div>
      )}
    </>
  );
};

type NoDataHeightMode =
  'data-default' | 'empty-default' | 'data-auto' | 'empty-auto' | 'data-auto-with-empty' | 'empty-auto-with-empty';

const CustomNoDataComponent = (
  props: ComponentProps<Exclude<AnalyticalTablePropTypes['NoDataComponent'], ComponentClass<unknown>>>,
) => {
  return props.noDataReason === 'Filtered' ? (
    <IllustratedMessage role={props.accessibleRole} name={NoFilterResults} />
  ) : (
    <IllustratedMessage role={props.accessibleRole} name={NoDataIllustration} />
  );
};

/**
 * Cypress `NoDataComponent` (line 1977) — the parts that exercise the per-`rowCountMode` body
 * height assertions. Multiplexes the six original mounts.
 */
export const NoDataComponentHeightTestComp = () => {
  const [mode, setMode] = useState<NoDataHeightMode>('data-default');

  const renderTable = () => {
    switch (mode) {
      case 'data-default': {
        return <AnalyticalTable data={data} columns={columns} NoDataComponent={CustomNoDataComponent} />;
      }
      case 'empty-default': {
        return <AnalyticalTable data={[]} columns={columns} NoDataComponent={CustomNoDataComponent} />;
      }
      case 'data-auto': {
        return (
          <div style={{ height: '400px' }}>
            <AnalyticalTable
              data={[...data, ...data]}
              columns={columns}
              NoDataComponent={CustomNoDataComponent}
              visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto}
            />
          </div>
        );
      }
      case 'empty-auto': {
        return (
          <div style={{ height: '400px' }}>
            <AnalyticalTable
              data={[]}
              columns={columns}
              NoDataComponent={CustomNoDataComponent}
              visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto}
            />
          </div>
        );
      }
      case 'data-auto-with-empty': {
        return (
          <div style={{ height: '400px' }}>
            <AnalyticalTable
              data={data}
              columns={columns}
              NoDataComponent={CustomNoDataComponent}
              visibleRowCountMode={AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows}
            />
          </div>
        );
      }
      case 'empty-auto-with-empty': {
        return (
          <div style={{ height: '400px' }}>
            <AnalyticalTable
              data={[]}
              columns={columns}
              NoDataComponent={CustomNoDataComponent}
              visibleRowCountMode={AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows}
            />
          </div>
        );
      }
    }
  };

  return (
    <>
      <Button data-testid="mode-data-default" onClick={() => setMode('data-default')}>
        data-default
      </Button>
      <Button data-testid="mode-empty-default" onClick={() => setMode('empty-default')}>
        empty-default
      </Button>
      <Button data-testid="mode-data-auto" onClick={() => setMode('data-auto')}>
        data-auto
      </Button>
      <Button data-testid="mode-empty-auto" onClick={() => setMode('empty-auto')}>
        empty-auto
      </Button>
      <Button data-testid="mode-data-auto-with-empty" onClick={() => setMode('data-auto-with-empty')}>
        data-auto-with-empty
      </Button>
      <Button data-testid="mode-empty-auto-with-empty" onClick={() => setMode('empty-auto-with-empty')}>
        empty-auto-with-empty
      </Button>
      <div key={mode}>{renderTable()}</div>
    </>
  );
};

/**
 * Empty-data + Multiple selection mode: verifies the default no-data copy renders and no
 * selection-column checkbox is present in the empty state.
 */
export const LoadingEmptyMultiSelectTestComp = () => {
  return <AnalyticalTable data={[]} columns={columns} selectionMode={AnalyticalTableSelectionMode.Multiple} />;
};

/**
 * Data + a non-matching `globalFilterValue`: the body renders the filter-no-results copy and drops
 * the selection-column checkbox.
 */
export const LoadingFilteredNoResultsTestComp = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      filterable
      globalFilterValue="test123"
      selectionMode={AnalyticalTableSelectionMode.Multiple}
    />
  );
};

/**
 * Cypress `Loading & No Data` (line 1919) — the filter-driven transition portion.
 * `filterable` + `selectionMode=Multiple`; the test types `test123` into the column-header default
 * filter input and asserts the body switches from rendering data rows to the filtered-empty state
 * (which also drops the select-all checkbox in the synthetic selection column).
 */
export const FilteredEmptyStateTestComp = () => {
  return (
    <AnalyticalTable data={data} columns={columns} filterable selectionMode={AnalyticalTableSelectionMode.Multiple} />
  );
};

interface HorizontalScrollToProps {
  scrollFn: 'horizontalScrollTo' | 'horizontalScrollToItem';
  args: Array<string | number>;
}

/**
 * Horizontal-scroll harness for the Virtualization spec. `scrollFn` + `args` are supplied as
 * serializable mount props so the spec can exercise both `horizontalScrollTo` and
 * `horizontalScrollToItem`.
 */
export const HorizontalScrollToTestComp = ({ scrollFn, args }: HorizontalScrollToProps) => {
  const tableRef = useRef<AnalyticalTableDomRef>(null);
  const handleScroll = () => {
    const ref = tableRef.current as unknown as Record<string, (...rest: Array<string | number>) => void> | null;
    ref?.[scrollFn](...args);
  };
  return (
    <>
      <Button data-testid="scroll-btn" onClick={handleScroll}>
        Click
      </Button>
      <AnalyticalTable
        data-testid="table"
        style={{ width: '170px' }}
        ref={tableRef}
        header="Table Title"
        data={data}
        columns={columns}
        visibleRows={1}
        minRows={1}
      />
    </>
  );
};
