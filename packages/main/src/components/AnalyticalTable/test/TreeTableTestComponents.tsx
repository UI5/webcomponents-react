import { useRef, useState } from 'react';
import { Button } from '../../../webComponents/Button/index.js';
import { Input } from '../../../webComponents/Input/index.js';
import { AnalyticalTable } from '../index.js';
import type { AnalyticalTableDomRef } from '../types/index.js';
import { columns } from './test-utils/data.js';

/**
 * A minimal hierarchical dataset that preserves the row IDs the cypress
 * `tree selection & filtering` test asserts against:
 *   - `0`     → Flowers Mcfarland (top-level)
 *   - `0.2`   → Robin Moreno (3rd subRow of Flowers, index 2)
 *   - `0.2.0` → Judith Mathews (1st subRow of Robin Moreno)
 *   - `1`     → Katy Bradshaw (top-level)
 *
 * Plus a few sibling rows so the structure mirrors the real fixture and the
 * `AnalyticalTableNonExpandableCellSpacer` count assertion stays valid (every
 * top-level row in this dataset has subRows). Considered extracting a
 * `generateTreeData` helper into `test-utils/`; inlined here per the
 * "don't modify test-utils/" constraint — orchestrator can extract later.
 */
export const treeData = [
  {
    name: 'Flowers Mcfarland',
    age: 82,
    friend: { name: 'Gardner Chang', age: 38 },
    subRows: [
      { name: 'Sibling A', age: 30, friend: { name: 'Friend A', age: 30 } },
      { name: 'Sibling B', age: 31, friend: { name: 'Friend B', age: 31 } },
      {
        name: 'Robin Moreno',
        age: 60,
        friend: { name: 'Kristin Warner', age: 33 },
        subRows: [
          { name: 'Judith Mathews', age: 50, friend: { name: 'Norton Guzman', age: 38 } },
          { name: 'Sibling C', age: 51, friend: { name: 'Friend C', age: 28 } },
        ],
      },
    ],
  },
  {
    name: 'Katy Bradshaw',
    age: 74,
    friend: { name: 'Griffin Carpenter', age: 39 },
    subRows: [{ name: 'Bradshaw Child A', age: 20, friend: { name: 'Friend D', age: 25 } }],
  },
];

/**
 * Tree table with one extra leaf row appended. Verifies the
 * `AnalyticalTableNonExpandableCellSpacer` is rendered exactly once — only
 * for the row without `subRows`.
 *
 * Cypress: `tree - no subrows spacer` (AnalyticalTable.cy.tsx:611-615).
 */
export const TreeNoSubrowsSpacerTestComp = () => {
  const data = [...treeData, { name: 'No Subrows', age: 1337 }];
  return <AnalyticalTable columns={columns} data={data} isTreeTable />;
};

type TreeSelectFilterPayload = {
  allRowsSelected?: boolean;
  allVisibleRowsSelected?: boolean;
  isSelected?: boolean;
  row?: string;
  selectedFlatRows?: Array<{ id?: string }>;
  selectedRowIds?: Record<string, boolean>;
};

type TreeSelectFilterProps = {
  onRowSelectSpy: (e: any) => void;
  onFilterSpy: (e: any) => void;
};

/**
 * Tree table with `selectionMode="Multiple"` + `filterable` + a global filter
 * input. Captures the relevant slice of the `onRowSelect` event detail into
 * data-testid containers so the spec can assert against rendered text.
 *
 * Cypress: `tree selection & filtering` (AnalyticalTable.cy.tsx:617-733).
 */
export const TreeSelectFilterTestComp = ({ onRowSelectSpy, onFilterSpy }: TreeSelectFilterProps) => {
  const [filter, setFilter] = useState('');
  const [payload, setPayload] = useState<TreeSelectFilterPayload>({});

  return (
    <>
      <Input data-testid="input" onInput={(e) => setFilter((e.target as HTMLInputElement).value)} />
      <AnalyticalTable
        isTreeTable
        filterable
        columns={columns}
        data={treeData}
        globalFilterValue={filter}
        selectionMode="Multiple"
        onFilter={onFilterSpy}
        onRowSelect={(e) => {
          const { allRowsSelected, allVisibleRowsSelected, isSelected, row, rowsById, selectedRowIds } = e.detail;
          const selectedFlatRows = Object.keys(selectedRowIds).reduce<Array<{ id?: string }>>((acc, key) => {
            if (selectedRowIds[key]) {
              acc.push({ id: rowsById[key]?.id });
            }
            return acc;
          }, []);
          setPayload({
            allRowsSelected,
            allVisibleRowsSelected,
            isSelected,
            row: row?.id,
            selectedFlatRows,
            selectedRowIds,
          });
          onRowSelectSpy(e);
        }}
      />
      <div data-testid="payloadHelper">
        {JSON.stringify(payload?.selectedFlatRows?.filter(Boolean).length)}
        {JSON.stringify(payload?.selectedRowIds)}
      </div>
      <div data-testid="payloadAllRowsSelected">{`${payload?.allRowsSelected ?? false}`}</div>
      <div data-testid="payloadAllVisibleRowsSelected">{`${payload?.allVisibleRowsSelected ?? false}`}</div>
    </>
  );
};

/**
 * Generates a synthetic flat sub-row list used by the InfiniteScroll: Tree
 * test. Mirrors the cypress fixture: 500 rows each with `{ name: 'Name<i>' }`.
 */
const generateTreeInfiniteSubRows = (count: number) => {
  return new Array(count).fill('').map((_, index) => ({ name: `Name${index}` }));
};

type TreeInfiniteScrollProps = {
  onLoadMoreSpy: (e: any) => void;
};

/**
 * Infinite-scroll tree harness: one root row with a growing list of subRows.
 * The user can scroll programmatically via the input and switch between
 * snapshot-like row counts via the two buttons.
 *
 * Cypress: `InfiniteScroll: Tree` (AnalyticalTable.cy.tsx:1767-1857).
 */
export const TreeInfiniteScrollTestComp = ({ onLoadMoreSpy }: TreeInfiniteScrollProps) => {
  const subRows = generateTreeInfiniteSubRows(500);
  const rootData = { name: 'Root' };
  const tableRef = useRef<AnalyticalTableDomRef>(null);
  const [internalSubRows, setInternalSubRows] = useState(subRows.slice(0, 50));
  const offset = useRef(50);

  const onLoadMore = (e: any) => {
    onLoadMoreSpy(e);
    setInternalSubRows((prev) => [...prev, ...subRows.slice(offset.current, offset.current + 50)]);
    offset.current += 50;
  };

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
        data-testid="data-111"
        onClick={() => {
          setInternalSubRows(subRows.slice(0, 110));
        }}
      >
        Data 111
      </Button>
      <Button
        data-testid="data-101"
        onClick={() => {
          setInternalSubRows(subRows.slice(0, 100));
        }}
      >
        Data 101
      </Button>
      <AnalyticalTable
        ref={tableRef}
        data-testid="at"
        data={[{ ...rootData, subRows: internalSubRows }]}
        columns={columns}
        infiniteScroll={true}
        infiniteScrollThreshold={10}
        onLoadMore={onLoadMore}
        isTreeTable
        reactTableOptions={{ autoResetExpanded: false }}
        minRows={1}
      />
      <span data-testid="row-count">{`Rows: ${internalSubRows.length + 1}`}</span>
    </>
  );
};
