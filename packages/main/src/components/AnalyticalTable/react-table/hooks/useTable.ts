import { useCallback, useMemo, useReducer, useRef } from 'react';
import type { ReactTableHooks, TableInstance, ColumnType, RowType, CellType, PluginHook } from '../../types/index.js';
import makeDefaultPluginHooks from '../makeDefaultPluginHooks.js';
import { useGetLatest, reduceHooks, actions, loopHooks, makePropGetter, makeRenderer } from '../publicUtils.js';
import {
  linkColumnStructure,
  flattenColumns,
  assignColumnAccessor,
  unpreparedAccessWarning,
  makeHeaderGroups,
  decorateColumn,
} from '../utils.js';
import { useColumnVisibility } from './useColumnVisibility.js';

const defaultInitialState = {};
const defaultColumnInstance = {};
const defaultReducer: NonNullable<TableInstance['stateReducer']> = (state) => state;
const defaultGetSubRows = (row: Record<string, any>, _index: number) => row.subRows || [];
const defaultGetRowId = (row: Record<string, any>, index: number, parent?: RowType) =>
  `${parent ? [parent.id, index].join('.') : index}`;
const defaultUseControlledState = (d: TableInstance['state']) => d;

function applyDefaults(props: any) {
  const {
    initialState = defaultInitialState,
    defaultColumn = defaultColumnInstance,
    getSubRows = defaultGetSubRows,
    getRowId = defaultGetRowId,
    stateReducer = defaultReducer,
    useControlledState = defaultUseControlledState,
    ...rest
  } = props;

  return {
    ...rest,
    initialState,
    defaultColumn,
    getSubRows,
    getRowId,
    stateReducer,
    useControlledState,
  };
}

export const useTable = (
  props: any,
  ...plugins: Array<PluginHook | ((hooks: ReactTableHooks) => void)>
): TableInstance => {
  // Apply default props
  props = applyDefaults(props);

  // Add core plugins
  plugins = [useColumnVisibility, ...plugins];

  // Create the table instance
  const instanceRef = useRef<Record<string, any>>({});

  // Create a getter for the instance (helps avoid a lot of potential memory leaks)
  // eslint-disable-next-line react-hooks/refs
  const getInstance = useGetLatest(instanceRef.current) as () => any;

  // Assign the props, plugins and hooks to the instance
  Object.assign(getInstance(), {
    ...props,
    plugins,
    hooks: makeDefaultPluginHooks(),
  });

  // Allow plugins to register hooks as early as possible
  plugins.filter(Boolean).forEach((plugin) => {
    plugin(getInstance().hooks);
  });

  // Consume all hooks and make a getter for them
  const getHooks = useGetLatest(getInstance().hooks);
  getInstance().getHooks = getHooks;
  delete getInstance().hooks;

  // Allow useOptions hooks to modify the options coming into the table
  Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));

  const {
    data,
    columns: userColumns,
    initialState,
    defaultColumn,
    getSubRows,
    getRowId,
    stateReducer,
    useControlledState,
  } = getInstance();

  // Setup user reducer ref
  const getStateReducer = useGetLatest(stateReducer);

  // Build the reducer
  const reducer = useCallback(
    (state: any, action: { type: string; [key: string]: any }) => {
      // Detect invalid actions
      if (!action.type) {
        console.info({ action });
        throw new Error('Unknown Action 👆');
      }

      // Reduce the state from all plugin reducers
      return [
        ...getHooks().stateReducers,
        // Allow the user to add their own state reducer(s)
        ...(Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()]),
      ].reduce((s: any, handler: any) => handler(s, action, state, getInstance()) || s, state);
    },
    [getHooks, getStateReducer, getInstance],
  );

  // Start the reducer
  const [reducerState, dispatch] = useReducer(reducer, undefined, () => reducer(initialState, { type: actions.init }));

  // Allow the user to control the final state with hooks
  const state = reduceHooks([...getHooks().useControlledState, useControlledState], reducerState, {
    instance: getInstance(),
  });

  Object.assign(getInstance(), {
    state,
    dispatch,
  });

  // Decorate All the columns
  const columns = useMemo(
    () =>
      linkColumnStructure(
        reduceHooks(getHooks().columns, userColumns, {
          instance: getInstance(),
        }),
      ),
    // eslint-disable-next-line react-hooks/use-memo
    [
      getHooks,
      getInstance,
      userColumns,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...reduceHooks(getHooks().columnsDeps, [], { instance: getInstance() }),
    ],
  );
  getInstance().columns = columns;

  // Get the flat list of all columns and allow hooks to decorate
  // those columns (and trigger this memoization via deps)
  let allColumns: ColumnType[] = useMemo(
    () =>
      reduceHooks(getHooks().allColumns, flattenColumns(columns), {
        instance: getInstance(),
      }).map(assignColumnAccessor),
    // eslint-disable-next-line react-hooks/use-memo
    [
      columns,
      getHooks,
      getInstance,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...reduceHooks(getHooks().allColumnsDeps, [], {
        instance: getInstance(),
      }),
    ],
  );
  getInstance().allColumns = allColumns;

  // Access the row model using initial columns
  const [rows, flatRows, rowsById] = useMemo(() => {
    const rows: RowType[] = [];
    const flatRows: RowType[] = [];
    const rowsById: Record<string, RowType> = {};

    const allColumnsQueue = [...allColumns];

    while (allColumnsQueue.length) {
      const column = allColumnsQueue.shift();
      accessRowsForColumn({
        data,
        rows,
        flatRows,
        rowsById,
        column,
        getRowId,
        getSubRows,
        accessValueHooks: getHooks().accessValue,
        getInstance,
      });
    }

    return [rows, flatRows, rowsById];
  }, [allColumns, data, getRowId, getSubRows, getHooks, getInstance]);

  Object.assign(getInstance(), {
    rows,
    initialRows: [...rows],
    flatRows,
    rowsById,
  });

  loopHooks(getHooks().useInstanceAfterData, getInstance());

  // Get the flat list of all columns AFTER the rows
  // have been access, and allow hooks to decorate
  // those columns (and trigger this memoization via deps)
  let visibleColumns: ColumnType[] = useMemo(
    () =>
      reduceHooks(getHooks().visibleColumns, allColumns, {
        instance: getInstance(),
      }).map((d: ColumnType) => decorateColumn(d, defaultColumn)),
    // eslint-disable-next-line react-hooks/use-memo
    [
      getHooks,
      allColumns,
      getInstance,
      defaultColumn,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...reduceHooks(getHooks().visibleColumnsDeps, [], {
        instance: getInstance(),
      }),
    ],
  );

  // Combine new visible columns with all columns
  // eslint-disable-next-line react-hooks/immutability,react-hooks/preserve-manual-memoization
  allColumns = useMemo(() => {
    const columns = [...visibleColumns];

    allColumns.forEach((column) => {
      if (!columns.find((d) => d.id === column.id)) {
        columns.push(column);
      }
    });

    return columns;
  }, [allColumns, visibleColumns]);
  getInstance().allColumns = allColumns;

  if (process.env.NODE_ENV !== 'production') {
    const duplicateColumns = allColumns.filter((column, i) => {
      return allColumns.findIndex((d) => d.id === column.id) !== i;
    });

    if (duplicateColumns.length) {
      console.info(allColumns);
      throw new Error(
        `Duplicate columns were found with ids: "${duplicateColumns
          .map((d) => d.id)
          .join(', ')}" in the columns array above`,
      );
    }
  }

  // Make the headerGroups
  const headerGroups = useMemo(
    () => reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns, defaultColumn), getInstance()),
    // eslint-disable-next-line react-hooks/use-memo
    [
      getHooks,
      visibleColumns,
      defaultColumn,
      getInstance,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...reduceHooks(getHooks().headerGroupsDeps, [], {
        instance: getInstance(),
      }),
    ],
  );
  getInstance().headerGroups = headerGroups;

  // Get the first level of headers
  const headers = useMemo(() => (headerGroups.length ? headerGroups[0].headers : []), [headerGroups]);
  getInstance().headers = headers;

  // Provide a flat header list for utilities
  getInstance().flatHeaders = headerGroups.reduce(
    (all: ColumnType[], headerGroup: any) => [...all, ...headerGroup.headers],
    [],
  );

  loopHooks(getHooks().useInstanceBeforeDimensions, getInstance());

  // Filter columns down to visible ones
  const visibleColumnsDep = visibleColumns
    .filter((d: ColumnType) => d.isVisible)
    .map((d) => d.id)
    .sort()
    .join('_');

  // eslint-disable-next-line react-hooks/immutability
  visibleColumns = useMemo(
    () => visibleColumns.filter((d: ColumnType) => d.isVisible),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleColumns, visibleColumnsDep],
  );
  getInstance().visibleColumns = visibleColumns;

  // Header Visibility is needed by this point
  const [totalColumnsMinWidth, totalColumnsWidth, totalColumnsMaxWidth] = calculateHeaderWidths(headers);

  getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
  getInstance().totalColumnsWidth = totalColumnsWidth;
  getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;

  loopHooks(getHooks().useInstance, getInstance());

  // Each materialized header needs to be assigned a render function and other
  // prop getter properties here.
  [...getInstance().flatHeaders, ...getInstance().allColumns].forEach((column: ColumnType) => {
    // Give columns/headers rendering power
    column.render = makeRenderer(getInstance(), column);

    // Give columns/headers a default getHeaderProps
    column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
      instance: getInstance(),
      column,
    });

    // Give columns/headers a default getFooterProps
    column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
      instance: getInstance(),
      column,
    });
  });

  getInstance().headerGroups = useMemo(
    () =>
      headerGroups.filter((headerGroup: any, i: number) => {
        // Filter out any headers and headerGroups that don't have visible columns
        headerGroup.headers = headerGroup.headers.filter((column: ColumnType) => {
          const recurse = (headers: ColumnType[]): number =>
            headers.filter((column: ColumnType) => {
              if (column.headers) {
                return recurse(column.headers);
              }
              return column.isVisible;
            }).length;
          if (column.headers) {
            return recurse(column.headers);
          }
          return column.isVisible;
        });

        // Give headerGroups getRowProps
        if (headerGroup.headers.length) {
          headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
            instance: getInstance(),
            headerGroup,
            index: i,
          });

          headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
            instance: getInstance(),
            headerGroup,
            index: i,
          });

          return true;
        }

        return false;
      }),
    [headerGroups, getInstance, getHooks],
  );

  getInstance().footerGroups = [...getInstance().headerGroups].reverse();

  // The prepareRow function is absolutely necessary and MUST be called on
  // any rows the user wishes to be displayed.

  getInstance().prepareRow = useCallback(
    (row: RowType) => {
      row.getRowProps = makePropGetter(getHooks().getRowProps, {
        instance: getInstance(),
        row,
      });

      // Build the visible cells for each row
      row.allCells = allColumns.map((column) => {
        const value = row.values[column.id];

        const cell: CellType = {
          column,
          row,
          value,
        } as CellType;

        // Give each cell a getCellProps base
        cell.getCellProps = makePropGetter(getHooks().getCellProps, {
          instance: getInstance(),
          cell,
        });

        // Give each cell a renderer function (supports multiple renderers)
        cell.render = makeRenderer(getInstance(), column, {
          row,
          cell,
          value,
        });

        return cell;
      });

      row.cells = visibleColumns.map((column) =>
        row.allCells.find((cell) => cell.column.id === column.id),
      ) as CellType[];

      // need to apply any row specific hooks (useExpanded requires this)
      loopHooks(getHooks().prepareRow, row, { instance: getInstance() });
    },
    [getHooks, getInstance, allColumns, visibleColumns],
  );

  getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
    instance: getInstance(),
  });

  getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
    instance: getInstance(),
  });

  loopHooks(getHooks().useFinalInstance, getInstance());

  return getInstance();
};

function calculateHeaderWidths(headers: ColumnType[], left = 0): [number, number, number, number] {
  let sumTotalMinWidth = 0;
  let sumTotalWidth = 0;
  let sumTotalMaxWidth = 0;
  let sumTotalFlexWidth = 0;

  headers.forEach((header) => {
    const { headers: subHeaders } = header;

    header.totalLeft = left;

    if (subHeaders && subHeaders.length) {
      const [totalMinWidth, totalWidth, totalMaxWidth, totalFlexWidth] = calculateHeaderWidths(subHeaders, left);
      header.totalMinWidth = totalMinWidth;
      header.totalWidth = totalWidth;
      header.totalMaxWidth = totalMaxWidth;
      header.totalFlexWidth = totalFlexWidth;
    } else {
      header.totalMinWidth = header.minWidth;
      header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
      header.totalMaxWidth = header.maxWidth;
      header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
    }
    if (header.isVisible) {
      left += header.totalWidth;
      sumTotalMinWidth += header.totalMinWidth;
      sumTotalWidth += header.totalWidth;
      sumTotalMaxWidth += header.totalMaxWidth;
      sumTotalFlexWidth += header.totalFlexWidth;
    }
  });

  return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth, sumTotalFlexWidth];
}

interface AccessRowsForColumnOptions {
  data: Record<string, any>[];
  rows: RowType[];
  flatRows: RowType[];
  rowsById: Record<string, RowType>;
  column: ColumnType;
  getRowId: (row: Record<string, any>, index: number, parent?: RowType) => string;
  getSubRows: (row: Record<string, any>, index: number) => Record<string, any>[];
  accessValueHooks: any[];
  getInstance: () => TableInstance;
}

function accessRowsForColumn({
  data,
  rows,
  flatRows,
  rowsById,
  column,
  getRowId,
  getSubRows,
  accessValueHooks,
  getInstance,
}: AccessRowsForColumnOptions) {
  // Access the row's data column-by-column
  // We do it this way so we can incrementally add materialized
  // columns after the first pass and avoid excessive looping
  const accessRow = (
    originalRow: Record<string, any>,
    rowIndex: number,
    depth = 0,
    parent?: RowType,
    parentRows?: RowType[],
  ) => {
    // Keep the original reference around
    const original = originalRow;

    const id = getRowId(originalRow, rowIndex, parent);

    let row = rowsById[id];

    // If the row hasn't been created, let's make it
    if (!row) {
      row = {
        id,
        original,
        index: rowIndex,
        depth,
        cells: [{}] as any, // This is a dummy cell
        values: {},
      };

      // Override common array functions (and the dummy cell's getCellProps function)
      // to show an error if it is accessed without calling prepareRow
      row.cells.map = unpreparedAccessWarning;
      row.cells.filter = unpreparedAccessWarning;
      row.cells.forEach = unpreparedAccessWarning;
      row.cells[0].getCellProps = unpreparedAccessWarning;

      // Push this row into the parentRows array
      parentRows.push(row);
      // Keep track of every row in a flat array
      flatRows.push(row);
      // Also keep track of every row by its ID
      rowsById[id] = row;

      // Get the original subrows
      row.originalSubRows = getSubRows(originalRow, rowIndex);

      // Then recursively access them
      if (row.originalSubRows) {
        const subRows: RowType[] = [];
        row.originalSubRows.forEach((d: Record<string, any>, i: number) => accessRow(d, i, depth + 1, row, subRows));
        // Keep the new subRows array on the row
        row.subRows = subRows;
      }
    } else if (row.subRows) {
      // If the row exists, then it's already been accessed
      // Keep recursing, but don't worry about passing the
      // accumlator array (those rows already exist)
      row.originalSubRows.forEach((d: Record<string, any>, i: number) => accessRow(d, i, depth + 1, row));
    }

    // If the column has an accessor, use it to get a value
    if (column.accessor) {
      row.values[column.id] = column.accessor(originalRow, rowIndex, row, parentRows, data);
    }

    // Allow plugins to manipulate the column value
    row.values[column.id] = reduceHooks(
      accessValueHooks,
      row.values[column.id],
      {
        row,
        column,
        instance: getInstance(),
      },
      true,
    );
  };

  data.forEach((originalRow: Record<string, any>, rowIndex: number) =>
    accessRow(originalRow, rowIndex, 0, undefined, rows),
  );
}
