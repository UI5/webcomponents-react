import { useMemo, useState } from 'react';
import { AnalyticalTable } from '../index.js';
import * as AnalyticalTableHooks from '../pluginHooks/AnalyticalTableHooks.js';
import type { AnalyticalTableColumnDefinition, AnalyticalTablePropTypes } from '../types/index.js';
import { columns as defaultColumns, data as defaultData } from './test-utils/data.js';

type SortDetail = {
  column: { id: string };
  sortDirection: 'asc' | 'desc' | 'clear';
};

interface SortingSingleColumnTestCompProps {
  initialMode?: 'unsortable' | 'flat' | 'tree';
}

const treeData = [
  {
    category: 'Number',
    subRows: [{ category: '2' }, { category: '1' }, { category: '3' }],
  },
  {
    category: 'Alphabet',
    subRows: [{ category: 'B' }, { category: 'A' }, { category: 'C' }],
  },
];

const treeColumns: AnalyticalTableColumnDefinition[] = [{ Header: 'Category', accessor: 'category' }];

export const SortingSingleColumnTestComp = ({ initialMode = 'unsortable' }: SortingSingleColumnTestCompProps) => {
  const [mode, setMode] = useState<'unsortable' | 'flat' | 'tree'>(initialMode);
  const [lastSort, setLastSort] = useState<SortDetail | null>(null);
  const [callCount, setCallCount] = useState(0);

  const handleSort: AnalyticalTablePropTypes['onSort'] = (e) => {
    const { column, sortDirection } = e.detail as unknown as SortDetail;
    setLastSort({ column: { id: column.id }, sortDirection });
    setCallCount((c) => c + 1);
  };

  const flatColumns = useMemo(() => defaultColumns, []);
  const flatData = useMemo(() => defaultData, []);

  return (
    <>
      <button
        type="button"
        data-testid="mode-unsortable"
        onClick={() => {
          setMode('unsortable');
        }}
      >
        unsortable
      </button>
      <button
        type="button"
        data-testid="mode-flat"
        onClick={() => {
          setMode('flat');
        }}
      >
        flat
      </button>
      <button
        type="button"
        data-testid="mode-tree"
        onClick={() => {
          setMode('tree');
        }}
      >
        tree
      </button>
      <button
        type="button"
        data-testid="reset-calls"
        onClick={() => {
          setLastSort(null);
          setCallCount(0);
        }}
      >
        reset
      </button>
      <span data-testid="last-sort">{lastSort ? `${lastSort.column.id}:${lastSort.sortDirection}` : ''}</span>
      <span data-testid="call-count">{callCount}</span>
      {mode === 'unsortable' && (
        <AnalyticalTable key="unsortable" data={flatData} columns={flatColumns} onSort={handleSort} />
      )}
      {mode === 'flat' && (
        <AnalyticalTable key="flat" data={flatData} columns={flatColumns} onSort={handleSort} sortable />
      )}
      {mode === 'tree' && (
        <AnalyticalTable key="tree" data={treeData} columns={treeColumns} sortable isTreeTable onSort={handleSort} />
      )}
    </>
  );
};

const multiSortColumns: AnalyticalTableColumnDefinition[] = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true,
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true,
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
  },
];

const multiSortData = [
  { name: 'A', age: 40, name2: 'Y', age2: 18 },
  { name: 'B', age: 40, name2: 'X', age2: 21 },
  { name: 'A', age: 30, name2: 'Z', age2: 90 },
  { name: 'A', age: 70, name2: 'Z', age2: 15 },
  { name: 'B', age: 60, name2: 'Q', age2: 80 },
  { name: 'B', age: 20, name2: 'Y', age2: 80 },
  { name: 'C', age: 40, name2: 'Y', age2: 80 },
];

/**
 * Multi-sort harness. Two columns (Name, Age) have `enableMultiSort` set; Name2 does not.
 * Used to verify both that multi-sort accumulates across columns AND that sorting on a
 * non-multi-sort column replaces the existing sort.
 */
export const SortingMultiSortTestComp = () => {
  const columns = useMemo(() => multiSortColumns, []);
  const data = useMemo(() => multiSortData, []);
  return <AnalyticalTable columns={columns} data={data} sortable />;
};

const orderedMultiSortColumns: AnalyticalTableColumnDefinition[] = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true,
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true,
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true,
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true,
  },
];

const orderedMultiSortData = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 },
];

/**
 * Plugin-hook harness for `AnalyticalTableHooks.useOrderedMultiSort`. The `orderedIds` prop
 * defines the priority order of multi-sort columns regardless of the order in which the user
 * clicked them. The harness exposes a button that switches `orderedIds` to a different
 * priority list and forces the table to remount via `key`, mirroring the cypress test that
 * called `cy.mount` twice with different `orderedIds`.
 */
export const SortingOrderedMultiSortTestComp = ({
  initialOrderedIds = ['name', 'name2', 'age', 'age2'],
  alternateOrderedIds = ['name2'],
}: {
  initialOrderedIds?: string[];
  alternateOrderedIds?: string[];
}) => {
  const [orderedIds, setOrderedIds] = useState<string[]>(initialOrderedIds);
  const columns = useMemo(() => orderedMultiSortColumns, []);
  const data = useMemo(() => orderedMultiSortData, []);
  // useOrderedMultiSort is a react-table plugin factory, not a React hook — memoizing per AnalyticalTable guidance.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const tableHooks = useMemo(() => [AnalyticalTableHooks.useOrderedMultiSort(orderedIds)], [orderedIds]);
  // `key` forces the table to remount when orderedIds changes — equivalent to the cypress
  // test calling cy.mount() a second time with different props.
  const tableKey = orderedIds.join('|');
  return (
    <>
      <button
        type="button"
        data-testid="switch-ordered-ids"
        onClick={() => {
          setOrderedIds(alternateOrderedIds);
        }}
      >
        switch
      </button>
      <AnalyticalTable key={tableKey} columns={columns} data={data} sortable tableHooks={tableHooks} />
    </>
  );
};
