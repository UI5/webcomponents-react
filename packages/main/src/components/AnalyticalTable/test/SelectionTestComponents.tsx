import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnalyticalTableSelectionBehavior } from '../../../enums/AnalyticalTableSelectionBehavior.js';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import { IndicationColor } from '../../../enums/IndicationColor.js';
import { Button } from '../../../webComponents/Button/index.js';
import { Input } from '../../../webComponents/Input/index.js';
import { AnalyticalTable } from '../index.js';
import * as AnalyticalTableHooks from '../pluginHooks/AnalyticalTableHooks.js';
import type {
  AnalyticalTableColumnDefinition,
  AnalyticalTablePropTypes,
  AnalyticalTableDomRef,
} from '../types/index.js';
import { columns as defaultColumns, data as defaultData, generateMoreData } from './test-utils/data.js';

/**
 * Mock first-names used by the `select-all with filtered rows` test. Mirrors the first four entries
 * of the cypress `mockNames` array (line 5143) — only the first four are needed since the test
 * slices `mockNames.slice(0, 4)`. Inlined per the "do not modify test-utils" constraint.
 */
const mockNames = ['John', 'Jane', 'Bob', 'Alice'];

/**
 * Builds the deeply-nested `dataTree` fixture used by the two `useIndeterminateRowSelection`
 * tests. Cypress definition lives at `AnalyticalTable.cy.tsx:5418-6905` and is ~1500 lines of
 * hand-written nested data. We rebuild it programmatically here:
 *   - 2 roots × 4 children × 4 grandchildren × 4 leaves = 170 rows total.
 *   - The cypress assertion `selectedRowIds` lists the 170 row IDs from `0` through `1.3.3.3`
 *     (`{"0":true,"1":true,"0.0":true,...,"1.3.3.3":true}`); shape is what matters, names are not
 *     asserted there.
 *   - The cypress test DOES assert by name for 5 specific rows in row 1's leftmost branch:
 *       row 1       = Katy Bradshaw
 *       row 1.0     = Mae Dixon
 *       row 1.0.0   = Diann Alvarado
 *       row 1.0.0.0 = Wiggins Cotton
 *       row 1.0.0.1 = Herring Flores
 *       row 1.0.0.2 = Allen Kidd
 *       row 1.0.0.3 = Selma Kaufman
 *     The test also clicks `Diann Alvarado` via `cy.findByText('Diann Alvarado').click()` to
 *     select the parent of those leaves. All other branches just need to exist with stable
 *     `name`/`age`/`friend.name`/`friend.age` accessors.
 *
 * NOTE for orchestrator: the cypress fixture is a candidate for promotion to `test-utils/data.tsx`
 * if other waves end up needing it. As of wave 2 it's only used here.
 */
type TreeRow = {
  name: string;
  age: number;
  friend: { name: string; age: number };
  subRows?: TreeRow[];
};

const SPECIAL_NAMES: Record<string, string> = {
  '1': 'Katy Bradshaw',
  '1.0': 'Mae Dixon',
  '1.0.0': 'Diann Alvarado',
  '1.0.0.0': 'Wiggins Cotton',
  '1.0.0.1': 'Herring Flores',
  '1.0.0.2': 'Allen Kidd',
  '1.0.0.3': 'Selma Kaufman',
};

const buildBranch = (path: number[], remainingDepth: number): TreeRow => {
  const id = path.join('.');
  const name = SPECIAL_NAMES[id] ?? `Person ${id}`;
  const row: TreeRow = {
    name,
    age: 20 + (path.reduce((acc, p) => acc + p, 0) % 60),
    friend: { name: `Friend ${id}`, age: 30 + (path.length % 50) },
  };
  if (remainingDepth > 0) {
    row.subRows = [0, 1, 2, 3].map((i) => buildBranch([...path, i], remainingDepth - 1));
  }
  return row;
};

export const dataTree: TreeRow[] = [0, 1].map((rootIndex) => buildBranch([rootIndex], 3));

/* -------------------------------------------------------------------------------------------- */
/* `programmatic and user selection + filtering` — cypress L735                                   */
/* -------------------------------------------------------------------------------------------- */

type ProgSelectFilterProps = {
  onRowSelectSpy: (e: any) => void;
  onFilterSpy: (e: any) => void;
};

/**
 * Wraps the table in a controlled `selectedRowIds` state with a button that programmatically
 * overrides the selection, a global-filter `<input>` (note: native HTML input, matching cypress),
 * and four payload mirrors rendered as `<span data-testid="...">` for the spec to assert on.
 *
 * Cypress: `programmatic and user selection + filtering` (L735).
 */
const progFilterData = [
  ...generateMoreData(20),
  {
    name: 'Name-7',
    age: 22,
    friend: { name: 'FriendName-X', age: 32 },
  },
];

export const ProgrammaticSelectionAndFilteringTestComp = ({ onRowSelectSpy, onFilterSpy }: ProgSelectFilterProps) => {
  const [selectedRowIds, setSelectedRowIds] = useState<Record<string, boolean>>({});
  const [selectedFlatRows, setSelectedFlatRows] = useState<string[]>([]);
  const [selectedRowIdsCb, setSelectedRowIdsCb] = useState<Record<string, boolean>>({});
  const [allRowsSelected, setAllRowsSelected] = useState(false);
  const [allVisibleRowsSelected, setAllVisibleRowsSelected] = useState(false);
  const [globalFilterVal, setGlobalFilterVal] = useState('');

  const programmaticSelected = useMemo(() => ({ 2: true, 3: false }), []);

  const onRowSelect: AnalyticalTablePropTypes['onRowSelect'] = (e: any) => {
    const { selectedRowIds: ids, rowsById } = e.detail;
    const flatMapped = Object.keys(ids).reduce<any[]>((acc, key) => {
      if (ids[key]) {
        acc.push(rowsById[key]);
      }
      return acc;
    }, []);
    setSelectedFlatRows(flatMapped.map((item) => item.id));
    setSelectedRowIdsCb(e.detail.selectedRowIds);
    setAllRowsSelected(e.detail.allRowsSelected);
    setAllVisibleRowsSelected(e.detail.allVisibleRowsSelected);
    onRowSelectSpy(e);
  };

  return (
    <>
      <Button data-testid="set-selected" onClick={() => setSelectedRowIds(programmaticSelected)}>
        Set selected rows
      </Button>
      <input
        data-testid="input"
        value={globalFilterVal}
        onInput={(e) => setGlobalFilterVal((e.target as HTMLInputElement).value)}
      />
      <AnalyticalTable
        filterable
        data={progFilterData}
        columns={defaultColumns}
        globalFilterValue={globalFilterVal}
        onRowSelect={onRowSelect}
        onFilter={onFilterSpy}
        selectionMode={AnalyticalTableSelectionMode.Multiple}
        selectedRowIds={selectedRowIds}
      />
      <span data-testid="payload">{JSON.stringify(selectedFlatRows)}</span>
      <span data-testid="payloadRowsById">{JSON.stringify(selectedRowIdsCb)}</span>
      <span data-testid="payloadAllRowsSelected">{`${allRowsSelected}`}</span>
      <span data-testid="payloadAllVisibleRowsSelected">{`${allVisibleRowsSelected}`}</span>
    </>
  );
};

/* -------------------------------------------------------------------------------------------- */
/* `GroupBy selection` — cypress L1008                                                            */
/* -------------------------------------------------------------------------------------------- */

const groupableData = [
  { name: 'GroupMe', age: 25, friend: { name: 'Peter', age: 42 } },
  { name: 'GroupMe', age: 56, friend: { name: 'ASD', age: 42 } },
  { name: 'GroupMe', age: 13, friend: { name: 'QWE', age: 42 } },
  { name: 'GroupMe', age: 25, friend: { name: 'ZXC', age: 42 } },
  { name: 'GroupMe2', age: 25, friend: { name: 'Peter', age: 42 } },
  { name: 'GroupMe2', age: 25, friend: { name: 'ASD', age: 42 } },
  { name: 'GroupMe2', age: 55, friend: { name: 'Peter', age: 42 } },
  { name: 'GroupMe2', age: 55, friend: { name: 'ZXC', age: 42 } },
];

type GroupBySelectionProps = {
  onRowSelectSpy: (e: any) => void;
};

/**
 * Cypress: `GroupBy selection` (L1008). Uses `tableInstance` ref to call
 * `toggleAllRowsExpanded(true)` after mount, simulating the cypress strict-mode `useEffect` setup.
 */
export const GroupBySelectionTestComp = ({ onRowSelectSpy }: GroupBySelectionProps) => {
  const tableInstance = useRef<any>(null);
  const hasRun = useRef(false);
  const [payload, setPayload] = useState<Record<string, any>>({});

  useEffect(() => {
    if (tableInstance.current && !hasRun.current) {
      const t = setTimeout(() => {
        tableInstance.current.toggleAllRowsExpanded(true);
      }, 100);
      hasRun.current = true;
      return () => clearTimeout(t);
    }
  }, []);

  const onRowSelect: AnalyticalTablePropTypes['onRowSelect'] = (e: any) => {
    const { allRowsSelected, allVisibleRowsSelected, isSelected, row, rowsById, selectedRowIds } = e.detail;
    const flatMapped = Object.keys(selectedRowIds).reduce<any[]>((acc, key) => {
      if (selectedRowIds[key]) {
        acc.push(rowsById[key]);
      }
      return acc;
    }, []);
    setPayload({
      allRowsSelected,
      allVisibleRowsSelected,
      isSelected,
      row: row?.id,
      selectedFlatRows: flatMapped.map((item) => ({ id: item?.id })),
      selectedRowIds,
    });
    onRowSelectSpy(e);
  };

  const reactTableOptions = useMemo(() => ({ initialState: { groupBy: ['name'] } }), []);

  return (
    <>
      <AnalyticalTable
        groupable
        columns={defaultColumns}
        tableInstance={tableInstance}
        onRowSelect={onRowSelect}
        data={groupableData}
        reactTableOptions={reactTableOptions}
        selectionMode={AnalyticalTableSelectionMode.Multiple}
      />
      <div data-testid="selectedFlatRowsLength">
        {JSON.stringify(payload?.selectedFlatRows?.filter(Boolean).length)}
      </div>
      <div data-testid="selectedRowIds">{JSON.stringify(payload?.selectedRowIds)}</div>
      <div data-testid="isSelected">{`${payload.isSelected}`}</div>
      <div data-testid="allRowsSelected">{`${payload.allRowsSelected}`}</div>
      <div data-testid="allVisibleRowsSelected">{`${payload.allVisibleRowsSelected}`}</div>
    </>
  );
};

/* -------------------------------------------------------------------------------------------- */
/* `useIndeterminateRowSelection - select subRows` — cypress L1126                                */
/* `useIndeterminateRowSelection`               — cypress L1235                                   */
/* -------------------------------------------------------------------------------------------- */

type IndeterminateProps = {
  onIndeterminateChange: (rowsById: any, instance: any) => void;
  selectSubRows: boolean;
};

/**
 * Tree table with `useIndeterminateRowSelection`. The `selectSubRows` prop toggles between the
 * two cypress variants:
 *  - true  → "useIndeterminateRowSelection - select subRows" (L1126): selecting a parent cascades.
 *  - false → "useIndeterminateRowSelection" (L1235): selecting a parent does NOT cascade.
 */
export const IndeterminateRowSelectionTestComp = ({ onIndeterminateChange, selectSubRows }: IndeterminateProps) => {
  const [selectedRowIds, setSelectedRowIds] = useState<Record<string, boolean>>({});

  // useIndeterminateRowSelection is a react-table plugin factory, not a React hook — memoizing per AnalyticalTable guidance.
  const tableHooks = useMemo(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    () => [AnalyticalTableHooks.useIndeterminateRowSelection(onIndeterminateChange)],
    [onIndeterminateChange],
  );
  const reactTableOptions = useMemo(() => ({ selectSubRows }), [selectSubRows]);

  const onRowSelect: AnalyticalTablePropTypes['onRowSelect'] = (e: any) => {
    setSelectedRowIds(e.detail.selectedRowIds);
  };

  return (
    <>
      <AnalyticalTable
        selectionMode={AnalyticalTableSelectionMode.Multiple}
        data={dataTree}
        columns={defaultColumns}
        isTreeTable
        tableHooks={tableHooks}
        reactTableOptions={reactTableOptions}
        onRowSelect={onRowSelect}
      />
      <p data-testid="selectedRows">{JSON.stringify(selectedRowIds)}</p>
    </>
  );
};

/* -------------------------------------------------------------------------------------------- */
/* `navigated row` — cypress L2209                                                                */
/* -------------------------------------------------------------------------------------------- */

/**
 * Controlled-selection wrapper that derives `markNavigatedRow` from the most recently selected
 * row. Cypress: `navigated row` (L2209).
 */
export const NavigatedRowTestComp = () => {
  const [selectedRow, setSelectedRow] = useState<{ id?: string }>({});
  const onRowSelect: AnalyticalTablePropTypes['onRowSelect'] = (e: any) => {
    setSelectedRow(e.detail.row);
  };
  const markNavigatedRow = useCallback(
    (row: any) => {
      return selectedRow?.id === row.id;
    },
    [selectedRow],
  );
  return (
    <AnalyticalTable
      data={defaultData}
      columns={defaultColumns}
      withNavigationHighlight
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      markNavigatedRow={markNavigatedRow}
      onRowSelect={onRowSelect}
    />
  );
};

/* -------------------------------------------------------------------------------------------- */
/* `select row with custom row key` — cypress L2246                                               */
/* -------------------------------------------------------------------------------------------- */

/**
 * Table with a custom `getRowId` based on `row.name`, and `selectedRowIds={{ A: true }}` so that
 * the row keyed by name `A` should render selected.
 *
 * Cypress: `select row with custom row key` (L2246).
 */
export const CustomRowKeyTestComp = () => {
  const reactTableOptions = useMemo(
    () => ({
      getRowId: (row: any, relativeIndex: number) => `${row.name ?? relativeIndex}`,
    }),
    [],
  );
  const selectedRowIds = useMemo(() => ({ A: true }), []);
  return (
    <AnalyticalTable
      selectionMode={AnalyticalTableSelectionMode.Single}
      data={defaultData}
      columns={defaultColumns}
      reactTableOptions={reactTableOptions}
      selectedRowIds={selectedRowIds}
    />
  );
};

/* -------------------------------------------------------------------------------------------- */
/* `onRowClick` — cypress L2266                                                                   */
/* -------------------------------------------------------------------------------------------- */

type RowClickProps = {
  onRowClick: AnalyticalTablePropTypes['onRowClick'];
  onRowSelect: AnalyticalTablePropTypes['onRowSelect'];
};

/** Cypress: `onRowClick` (L2266) — phase 1 of 2 (default behavior). */
export const RowClickDefaultTestComp = ({ onRowClick, onRowSelect }: RowClickProps) => {
  return (
    <AnalyticalTable
      header="Table Title"
      data={defaultData}
      columns={defaultColumns}
      selectionBehavior={AnalyticalTableSelectionBehavior.Row}
      selectionMode={AnalyticalTableSelectionMode.Single}
      onRowClick={onRowClick}
      onRowSelect={onRowSelect}
    />
  );
};

/**
 * Cypress: `onRowClick` (L2266) — phase 2 of 2. The `onRowClick` wrapper checks
 * `e.target.dataset.selectionCell !== 'true'` and only forwards in that case, mimicking the
 * cypress test's filter that ignores selection-cell clicks.
 */
export const RowClickFilterSelCellTestComp = ({ onRowClick, onRowSelect }: RowClickProps) => {
  const wrappedRowClick: AnalyticalTablePropTypes['onRowClick'] = useCallback(
    (e: any) => {
      if (e.target.dataset.selectionCell !== 'true') {
        onRowClick?.(e);
      }
    },
    [onRowClick],
  );
  return (
    <AnalyticalTable
      header="Table Title"
      data={defaultData}
      columns={defaultColumns}
      selectionBehavior={AnalyticalTableSelectionBehavior.Row}
      selectionMode={AnalyticalTableSelectionMode.Single}
      onRowClick={wrappedRowClick}
      onRowSelect={onRowSelect}
    />
  );
};

/* -------------------------------------------------------------------------------------------- */
/* `onRowContextMenu` — cypress L2317                                                             */
/* -------------------------------------------------------------------------------------------- */

type RowContextMenuProps = {
  onRowContextMenu: AnalyticalTablePropTypes['onRowContextMenu'];
};

export const RowContextMenuTestComp = ({ onRowContextMenu }: RowContextMenuProps) => {
  return <AnalyticalTable data={defaultData} columns={defaultColumns} onRowContextMenu={onRowContextMenu} />;
};

/* -------------------------------------------------------------------------------------------- */
/* `withRowHighlight` — cypress L2340                                                             */
/* -------------------------------------------------------------------------------------------- */

/**
 * Four mount variants, exposed as four named test components so the spec can mount each in turn.
 *
 *  - `WithRowHighlightStatusTestComp`  — uses `status` field (default `highlightField`).
 *  - `WithRowHighlightCustomFieldTestComp` — uses `highlight` field via `highlightField` prop.
 *  - `WithRowHighlightIndicationTestComp` — 9 rows with `status` cycling through `IndicationColor`.
 *  - `WithRowHighlightFnTestComp` — `highlightField` is a function returning mixed values.
 */
const highlightRowData = defaultData.map((item, index) => {
  if ((index + 1) % 2) {
    return { ...item, status: ValueState.Negative };
  }
  return { ...item, highlight: ValueState.Positive };
});

export const WithRowHighlightStatusTestComp = () => (
  <AnalyticalTable header="Table Title" data={highlightRowData} columns={defaultColumns} withRowHighlight />
);

export const WithRowHighlightCustomFieldTestComp = () => (
  <AnalyticalTable
    header="Table Title"
    data={highlightRowData}
    columns={defaultColumns}
    withRowHighlight
    highlightField="highlight"
  />
);

const indicationData = new Array(9)
  .fill('')
  .map((_, index) => ({ status: IndicationColor[`Indication0${index}` as keyof typeof IndicationColor] }));

export const WithRowHighlightIndicationTestComp = () => (
  <AnalyticalTable data={indicationData} columns={defaultColumns} withRowHighlight />
);

export const WithRowHighlightFnTestComp = () => {
  const highlightField = useCallback((row: any) => {
    switch (row.name) {
      case 'A':
        return ValueState.Negative;
      case 'B':
        return 'Positive';
      case 'X':
        return IndicationColor.Indication01;
      case 'C':
        return 'Indication08';
      default:
        return ValueState.None;
    }
  }, []);
  return (
    <AnalyticalTable
      header="Table Title"
      data={defaultData}
      columns={defaultColumns}
      withRowHighlight
      highlightField={highlightField}
    />
  );
};

/* -------------------------------------------------------------------------------------------- */
/* `select-all` — cypress L3455                                                                   */
/* -------------------------------------------------------------------------------------------- */

type SelectAllProps = {
  onRowSelectSpy: (e: any) => void;
};

export const SelectAllTestComp = ({ onRowSelectSpy }: SelectAllProps) => {
  const [stringifiedPl, setStringifiedPl] = useState('');
  const handleSelect: AnalyticalTablePropTypes['onRowSelect'] = (e: any) => {
    const { allRowsSelected, allVisibleRowsSelected, rowsById, selectedRowIds } = e.detail;
    const flatMapped = Object.keys(selectedRowIds).reduce<any[]>((acc, key) => {
      if (selectedRowIds[key]) {
        acc.push(rowsById[key]);
      }
      return acc;
    }, []);
    setStringifiedPl(
      JSON.stringify({
        selectedRowIds,
        selectedFlatRows: flatMapped.map((item) => ({ id: item?.id })),
        allRowsSelected,
        allVisibleRowsSelected,
      }),
    );
    onRowSelectSpy(e);
  };
  return (
    <>
      <AnalyticalTable
        columns={defaultColumns}
        data={defaultData}
        selectionMode={AnalyticalTableSelectionMode.Multiple}
        onRowSelect={handleSelect}
      />
      <span data-testid="payload">{stringifiedPl}</span>
    </>
  );
};

/* -------------------------------------------------------------------------------------------- */
/* `select-all with filtered rows` — cypress L3530                                                */
/* -------------------------------------------------------------------------------------------- */

type SelectAllFilteredProps = {
  onRowSelectSpy: (e: any) => void;
};

const filteredData = mockNames.map((name) => ({ name }));
const filteredColumns: AnalyticalTableColumnDefinition[] = [{ Header: 'Name', accessor: 'name' }];

export const SelectAllFilteredTestComp = ({ onRowSelectSpy }: SelectAllFilteredProps) => {
  const [filter, setFilter] = useState('');
  const [payload, setPayload] = useState<{
    allRowsSelected?: boolean;
    allVisibleRowsSelected?: boolean;
    selectedRowIds?: Record<string, boolean>;
  }>({});
  const handleRowSelect: AnalyticalTablePropTypes['onRowSelect'] = (e: any) => {
    const { allRowsSelected, allVisibleRowsSelected, selectedRowIds } = e.detail;
    setPayload({ allRowsSelected, allVisibleRowsSelected, selectedRowIds });
    onRowSelectSpy(e);
  };
  return (
    <>
      <Input data-testid="filterInput" onInput={(e) => setFilter((e.target as HTMLInputElement).value)} />
      <AnalyticalTable
        columns={filteredColumns}
        data={filteredData}
        selectionMode={AnalyticalTableSelectionMode.Multiple}
        globalFilterValue={filter}
        onRowSelect={handleRowSelect}
      />
      <div data-testid="allRowsSelected">{`${payload.allRowsSelected}`}</div>
      <div data-testid="allVisibleRowsSelected">{`${payload.allVisibleRowsSelected}`}</div>
      <div data-testid="selectedRowIds">{JSON.stringify(payload.selectedRowIds)}</div>
    </>
  );
};

/* -------------------------------------------------------------------------------------------- */
/* `selection state preserved during loading/overlay` — cypress L3621                             */
/* -------------------------------------------------------------------------------------------- */

export const SelectionPreservedLoadingOverlayTestComp = () => {
  const [loading, setLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
      <Button data-testid="toggleLoading" onClick={() => setLoading((prev) => !prev)}>
        Toggle Loading
      </Button>
      <Button data-testid="toggleOverlay" onClick={() => setShowOverlay((prev) => !prev)}>
        Toggle Overlay
      </Button>
      <AnalyticalTable
        columns={defaultColumns}
        data={defaultData}
        selectionMode={AnalyticalTableSelectionMode.Multiple}
        loading={loading}
        showOverlay={showOverlay}
      />
    </>
  );
};

/* -------------------------------------------------------------------------------------------- */
/* `manualGroupBy - backend grouping` — cypress L3674                                             */
/* -------------------------------------------------------------------------------------------- */

const manualGroupCols: AnalyticalTableColumnDefinition[] = [
  {
    accessor: 'values.name',
    Header: 'Name',
    Cell: ({ value }: any) => value,
    RepeatedValue: (instance: any) => {
      if (instance.manualGroupBy) {
        if (instance.row.id.includes('.')) {
          return null;
        }
        return instance.value;
      }
      return null;
    },
  },
  { accessor: 'values.age', Header: 'Age' },
];

const SERVER_DATA = [
  { values: { name: 'Simon', age: '72', children: undefined } },
  { values: { name: 'Peter', age: '25', children: [] as any[] } },
  { values: { name: 'Martha', age: '30', children: [] as any[] } },
];
const SERVER_DATA_AGGREGATED = [
  { values: { name: 'Simon', age: '72', children: undefined } },
  { values: { name: 'Peter', age: 'Aggregated', children: [] as any[] } },
  { values: { name: 'Martha', age: 'Aggregated', children: [] as any[] } },
];
const SERVER_DATA_PETER = [
  { values: { name: 'Simon', age: '72', children: undefined } },
  {
    values: {
      name: 'Peter',
      age: 'Aggregated',
      children: [
        { values: { age: '25' } },
        { values: { age: '25' } },
        { values: { age: '30' } },
        { values: { age: '30' } },
        { values: { age: '30' } },
      ],
    },
  },
  { values: { name: 'Martha', age: 'Aggregated', children: [] as any[] } },
];
const SERVER_DATA_MARTHA = [
  { values: { name: 'Simon', age: '72', children: undefined } },
  { values: { name: 'Peter', age: 'Aggregated', children: [] as any[] } },
  {
    values: {
      name: 'Martha',
      age: 'Aggregated',
      children: [
        { values: { name: 'Martha', age: '30' } },
        { values: { name: 'Martha', age: '25' } },
        { values: { name: 'Martha', age: '25' } },
      ],
    },
  },
];

/**
 * Cypress: `manualGroupBy - backend grouping` (L3674). Simulates a backend driver that swaps the
 * `data` prop in response to `onGroup` (grouping started/cleared) and `onRowExpandChange` (Peter
 * or Martha row expanded).
 */
export const ManualGroupByBackendTestComp = () => {
  const [groupedCols, setGroupedCols] = useState<string[]>([]);
  const [serverData, setServerData] = useState<any>(SERVER_DATA);

  const handleRowExpandChange: AnalyticalTablePropTypes['onRowExpandChange'] = (e: any) => {
    const { isExpanded, original } = e.detail.row;
    const { column } = e.detail;
    if (!isExpanded) {
      if (groupedCols.includes(column.id)) {
        switch (original.values.name) {
          case 'Peter':
            setServerData(SERVER_DATA_PETER);
            break;
          case 'Martha':
            setServerData(SERVER_DATA_MARTHA);
            break;
          default:
            break;
        }
      }
    }
  };

  const handleGrouping: AnalyticalTablePropTypes['onGroup'] = (e: any) => {
    const { groupedColumns } = e.detail;
    setGroupedCols(groupedColumns);
    if (groupedColumns.includes('values.name')) {
      setServerData(SERVER_DATA_AGGREGATED);
    } else {
      setServerData(SERVER_DATA);
    }
  };

  const reactTableOptions = useMemo(
    () => ({ autoResetGroupBy: false, autoResetExpanded: false, manualGroupBy: true }),
    [],
  );

  return (
    <AnalyticalTable
      data={serverData}
      groupable
      columns={manualGroupCols}
      reactTableOptions={reactTableOptions}
      subRowsKey="values.children"
      onRowExpandChange={handleRowExpandChange}
      onGroup={handleGrouping}
    />
  );
};

/* -------------------------------------------------------------------------------------------- */
/* `custom cell (with markerAllowTableRowSelection) & header` — cypress L1859                     */
/* -------------------------------------------------------------------------------------------- */

type CustomCellHeaderProps = {
  onCellClick: (e: any) => void;
  onHeaderClick: (e: any) => void;
  onRowSelect: AnalyticalTablePropTypes['onRowSelect'];
};

/**
 * Combined test component covering both phases of the cypress
 * `custom cell (with markerAllowTableRowSelection) & header` test (L1859). Exposes a
 * `set-marker` button on `data-testid="set-marker"` to flip into Phase 2, remounting the
 * table via `key={mode}` so react-table's internal state resets between phases.
 *
 * Phase 1 (`markerAllow=false`): clicking the in-cell Button should NOT trigger row selection
 * (UI5 Button is on the blocklist). Header Button click is exempt.
 * Phase 2 (`markerAllow=true`): the cell click sets `e.markerAllowTableRowSelection = true`,
 * so clicking the in-cell Button DOES trigger row selection.
 */
export const CustomCellHeaderTestComp = ({ onCellClick, onHeaderClick, onRowSelect }: CustomCellHeaderProps) => {
  const [markerAllow, setMarkerAllow] = useState(false);
  const cellClickHandler = useCallback(
    (e: any) => {
      if (markerAllow) {
        e.markerAllowTableRowSelection = true;
      }
      onCellClick(e);
    },
    [markerAllow, onCellClick],
  );
  const columns: AnalyticalTableColumnDefinition[] = useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      {
        Header: 'Age',
        accessor: 'age',
        Cell: () => <Button onClick={cellClickHandler}>Custom Cell Button</Button>,
      },
      {
        Header: () => <Button onClick={onHeaderClick}>Custom Header Button</Button>,
        accessor: 'friend.name',
      },
    ],
    [cellClickHandler, onHeaderClick],
  );
  const data = useMemo(() => defaultData.slice(0, 2), []);
  return (
    <>
      <Button data-testid="set-marker" onClick={() => setMarkerAllow(true)}>
        Enable markerAllow
      </Button>
      <AnalyticalTable
        key={`${markerAllow}`}
        selectionMode={AnalyticalTableSelectionMode.Single}
        data={data}
        columns={columns}
        onRowSelect={onRowSelect}
      />
    </>
  );
};

// Re-export AnalyticalTableDomRef so the spec doesn't need a separate import path. (eslint quiet.)
export type { AnalyticalTableDomRef };
