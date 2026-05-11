import { useCallback, useMemo } from 'react';
import type { ReactTableHooks, TableInstance, ColumnType, RowType, PluginHook } from '../../types/index.js';
import * as filterTypes from '../filterTypes.js';
import { actions, useGetLatest, functionalUpdate, useMountedLayoutEffect } from '../publicUtils.js';
import { getFirstDefined, getFilterMethod, shouldAutoRemoveFilter } from '../utils.js';

// Actions
actions.resetFilters = 'resetFilters';
actions.setFilter = 'setFilter';
actions.setAllFilters = 'setAllFilters';

export const useFilters: PluginHook = (hooks: ReactTableHooks) => {
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
};
useFilters.pluginName = 'useFilters';

function reducer(
  state: TableInstance['state'],
  action: { type: string; columnId?: string; filterValue?: any; filters?: any },
  _previousState: TableInstance['state'],
  instance: TableInstance,
) {
  if (action.type === actions.init) {
    return {
      filters: [],
      ...state,
    };
  }

  if (action.type === actions.resetFilters) {
    return {
      ...state,
      filters: instance.initialState.filters || [],
    };
  }

  if (action.type === actions.setFilter) {
    const { columnId, filterValue } = action;
    const { allColumns, filterTypes: userFilterTypes } = instance;

    const column = allColumns.find((d: ColumnType) => d.id === columnId);

    if (!column) {
      throw new Error(`React-Table: Could not find a column with id: ${columnId}`);
    }

    const filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

    const previousfilter = state.filters.find((d) => d.id === columnId);

    const newFilter = functionalUpdate(filterValue, previousfilter && previousfilter.value);

    if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) {
      return {
        ...state,
        filters: state.filters.filter((d) => d.id !== columnId),
      };
    }

    if (previousfilter) {
      return {
        ...state,
        filters: state.filters.map((d) => {
          if (d.id === columnId) {
            return { id: columnId, value: newFilter };
          }
          return d;
        }),
      };
    }

    return {
      ...state,
      filters: [...state.filters, { id: columnId, value: newFilter }],
    };
  }

  if (action.type === actions.setAllFilters) {
    const { filters } = action;
    const { allColumns, filterTypes: userFilterTypes } = instance;

    return {
      ...state,
      // Filter out undefined values
      filters: functionalUpdate(filters, state.filters).filter((filter: any) => {
        const column = allColumns.find((d: ColumnType) => d.id === filter.id);
        const filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

        if (shouldAutoRemoveFilter(filterMethod.autoRemove, filter.value, column)) {
          return false;
        }
        return true;
      }),
    };
  }
}

function useInstance(instance: TableInstance) {
  const {
    data,
    rows,
    flatRows,
    rowsById,
    allColumns,
    filterTypes: userFilterTypes,
    manualFilters,
    defaultCanFilter = false,
    disableFilters,
    state: { filters },
    dispatch,
    autoResetFilters = true,
  } = instance;

  const setFilter = useCallback(
    (columnId: string, filterValue: any) => {
      dispatch({ type: actions.setFilter, columnId, filterValue });
    },
    [dispatch],
  );

  const setAllFilters = useCallback(
    (filters: any) => {
      dispatch({
        type: actions.setAllFilters,
        filters,
      });
    },
    [dispatch],
  );

  allColumns.forEach((column: ColumnType) => {
    const { id, accessor, defaultCanFilter: columnDefaultCanFilter, disableFilters: columnDisableFilters } = column;

    // Determine if a column is filterable
    column.canFilter = accessor
      ? getFirstDefined(
          columnDisableFilters === true ? false : undefined,
          disableFilters === true ? false : undefined,
          true,
        )
      : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false);

    // Provide the column a way of updating the filter value
    column.setFilter = (val: any) => setFilter(column.id, val);

    // Provide the current filter value to the column for
    // convenience
    const found = filters.find((d) => d.id === id);
    column.filterValue = found && found.value;
  });

  const [filteredRows, filteredFlatRows, filteredRowsById] = useMemo(() => {
    if (manualFilters || !filters.length) {
      return [rows, flatRows, rowsById];
    }

    const filteredFlatRows: RowType[] = [];
    const filteredRowsById: Record<string, RowType> = {};

    // Filters top level and nested rows
    const filterRows = (rows: RowType[], depth = 0): RowType[] => {
      let filteredRows = rows;

      filteredRows = (filters as any[]).reduce(
        (filteredSoFar: RowType[], { id: columnId, value: filterValue }: any) => {
          // Find the filters column
          const column = allColumns.find((d: ColumnType) => d.id === columnId);

          if (!column) {
            return filteredSoFar;
          }

          if (depth === 0) {
            column.preFilteredRows = filteredSoFar;
          }

          const filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

          if (!filterMethod) {
            console.warn(`Could not find a valid 'column.filter' for column with the ID: ${column.id}.`);
            return filteredSoFar;
          }

          // Pass the rows, id, filterValue and column to the filterMethod
          // to get the filtered rows back
          column.filteredRows = filterMethod(filteredSoFar, [columnId], filterValue);

          return column.filteredRows;
        },
        rows,
      );

      // Apply the filter to any subRows
      filteredRows.forEach((row) => {
        filteredFlatRows.push(row);
        filteredRowsById[row.id] = row;
        if (!row.subRows) {
          return;
        }

        row.subRows = row.subRows && row.subRows.length > 0 ? filterRows(row.subRows, depth + 1) : row.subRows;
      });

      return filteredRows;
    };

    return [filterRows(rows), filteredFlatRows, filteredRowsById];
  }, [manualFilters, filters, rows, flatRows, rowsById, allColumns, userFilterTypes]);

  useMemo(() => {
    // Now that each filtered column has it's partially filtered rows,
    // lets assign the final filtered rows to all of the other columns
    const nonFilteredColumns = allColumns.filter((column: ColumnType) => !filters.find((d) => d.id === column.id));

    // This essentially enables faceted filter options to be built easily
    // using every column's preFilteredRows value
    nonFilteredColumns.forEach((column: ColumnType) => {
      column.preFilteredRows = filteredRows;
      column.filteredRows = filteredRows;
    });
  }, [filteredRows, filters, allColumns]);

  const getAutoResetFilters = useGetLatest(autoResetFilters);

  useMountedLayoutEffect(() => {
    if (getAutoResetFilters()) {
      dispatch({ type: actions.resetFilters });
    }
  }, [dispatch, manualFilters ? null : data]);

  Object.assign(instance, {
    preFilteredRows: rows,
    preFilteredFlatRows: flatRows,
    preFilteredRowsById: rowsById,
    filteredRows,
    filteredFlatRows,
    filteredRowsById,
    rows: filteredRows,
    flatRows: filteredFlatRows,
    rowsById: filteredRowsById,
    setFilter,
    setAllFilters,
  });
}
