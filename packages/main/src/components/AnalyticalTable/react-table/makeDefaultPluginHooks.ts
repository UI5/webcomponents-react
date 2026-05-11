import type { ReactTableHooks, RowType, ColumnType, CellType } from '../types/index.js';

const defaultGetTableProps = (props: Record<string, any>) => ({
  role: 'table',
  ...props,
});

const defaultGetTableBodyProps = (props: Record<string, any>) => ({
  role: 'rowgroup',
  ...props,
});

const defaultGetHeaderProps = (props: Record<string, any>, { column }: { column: ColumnType }) => ({
  key: `header_${column.id}`,
  colSpan: column.totalVisibleHeaderCount,
  role: 'columnheader',
  ...props,
});

const defaultGetFooterProps = (props: Record<string, any>, { column }: { column: ColumnType }) => ({
  key: `footer_${column.id}`,
  colSpan: column.totalVisibleHeaderCount,
  ...props,
});

const defaultGetHeaderGroupProps = (props: Record<string, any>, { index }: { index: number }) => ({
  key: `headerGroup_${index}`,
  role: 'row',
  ...props,
});

const defaultGetFooterGroupProps = (props: Record<string, any>, { index }: { index: number }) => ({
  key: `footerGroup_${index}`,
  ...props,
});

const defaultGetRowProps = (props: Record<string, any>, { row }: { row: RowType }) => ({
  key: `row_${row.id}`,
  role: 'row',
  ...props,
});

const defaultGetCellProps = (props: Record<string, any>, { cell }: { cell: CellType }) => ({
  key: `cell_${cell.row.id}_${cell.column.id}`,
  role: 'cell',
  ...props,
});

export default function makeDefaultPluginHooks(): ReactTableHooks {
  return {
    useOptions: [],
    stateReducers: [],
    useControlledState: [],
    columns: [],
    columnsDeps: [],
    allColumns: [],
    allColumnsDeps: [],
    accessValue: [],
    materializedColumns: [],
    materializedColumnsDeps: [],
    useInstanceAfterData: [],
    visibleColumns: [],
    visibleColumnsDeps: [],
    headerGroups: [],
    headerGroupsDeps: [],
    useInstanceBeforeDimensions: [],
    useInstance: [],
    prepareRow: [],
    getTableProps: [defaultGetTableProps],
    getTableBodyProps: [defaultGetTableBodyProps],
    getHeaderGroupProps: [defaultGetHeaderGroupProps],
    getFooterGroupProps: [defaultGetFooterGroupProps],
    getHeaderProps: [defaultGetHeaderProps],
    getFooterProps: [defaultGetFooterProps],
    getRowProps: [defaultGetRowProps],
    getCellProps: [defaultGetCellProps],
    useFinalInstance: [],
  };
}
