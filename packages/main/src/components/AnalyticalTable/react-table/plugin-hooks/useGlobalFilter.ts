import { useCallback, useMemo } from 'react';
import type { ReactTableHooks, TableInstance, ColumnType, RowType, PluginHook } from '../../types/index.js';
import * as filterTypes from '../filterTypes.js';
import { actions, useMountedLayoutEffect, functionalUpdate, useGetLatest } from '../publicUtils.js';
import { getFilterMethod, shouldAutoRemoveFilter, getFirstDefined } from '../utils.js';

// Actions
actions.resetGlobalFilter = 'resetGlobalFilter';
actions.setGlobalFilter = 'setGlobalFilter';

export const useGlobalFilter: PluginHook = (hooks: ReactTableHooks) => {
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
};
useGlobalFilter.pluginName = 'useGlobalFilter';

function reducer(
  state: TableInstance['state'],
  action: { type: string; filterValue?: any },
  _previousState: TableInstance['state'],
  instance: TableInstance,
) {
  if (action.type === actions.resetGlobalFilter) {
    return {
      ...state,
      globalFilter: instance.initialState.globalFilter || undefined,
    };
  }

  if (action.type === actions.setGlobalFilter) {
    const { filterValue } = action;
    const { userFilterTypes } = instance;

    const filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {}, filterTypes);

    const newFilter = functionalUpdate(filterValue, state.globalFilter);

    if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
      const { globalFilter: _gf, ...stateWithoutGlobalFilter } = state;
      return stateWithoutGlobalFilter;
    }

    return {
      ...state,
      globalFilter: newFilter,
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
    globalFilter,
    manualGlobalFilter,
    state: { globalFilter: globalFilterValue },
    dispatch,
    autoResetGlobalFilter = true,
    disableGlobalFilter,
  } = instance;

  const setGlobalFilter = useCallback(
    (filterValue: any) => {
      dispatch({ type: actions.setGlobalFilter, filterValue });
    },
    [dispatch],
  );

  const [globalFilteredRows, globalFilteredFlatRows, globalFilteredRowsById] = useMemo(() => {
    if (manualGlobalFilter || typeof globalFilterValue === 'undefined') {
      return [rows, flatRows, rowsById];
    }

    const filteredFlatRows: RowType[] = [];
    const filteredRowsById: Record<string, RowType> = {};

    const filterMethod = getFilterMethod(globalFilter, userFilterTypes || {}, filterTypes);

    if (!filterMethod) {
      console.warn(`Could not find a valid 'globalFilter' option.`);
      return rows;
    }

    allColumns.forEach((column: ColumnType) => {
      const { disableGlobalFilter: columnDisableGlobalFilter } = column;

      column.canFilter = getFirstDefined(
        columnDisableGlobalFilter === true ? false : undefined,
        disableGlobalFilter === true ? false : undefined,
        true,
      );
    });

    const filterableColumns = allColumns.filter((c: ColumnType) => c.canFilter === true);

    // Filters top level and nested rows
    const filterRows = (filteredRows: RowType[]): RowType[] => {
      filteredRows = filterMethod(
        filteredRows,
        filterableColumns.map((d: ColumnType) => d.id),
        globalFilterValue,
      );

      filteredRows.forEach((row) => {
        filteredFlatRows.push(row);
        filteredRowsById[row.id] = row;

        row.subRows = row.subRows && row.subRows.length ? filterRows(row.subRows) : row.subRows;
      });

      return filteredRows;
    };

    return [filterRows(rows), filteredFlatRows, filteredRowsById];
  }, [
    manualGlobalFilter,
    globalFilterValue,
    globalFilter,
    userFilterTypes,
    allColumns,
    rows,
    flatRows,
    rowsById,
    disableGlobalFilter,
  ]);

  const getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);

  useMountedLayoutEffect(() => {
    if (getAutoResetGlobalFilter()) {
      dispatch({ type: actions.resetGlobalFilter });
    }
  }, [dispatch, manualGlobalFilter ? null : data]);

  Object.assign(instance, {
    preGlobalFilteredRows: rows,
    preGlobalFilteredFlatRows: flatRows,
    preGlobalFilteredRowsById: rowsById,
    globalFilteredRows,
    globalFilteredFlatRows,
    globalFilteredRowsById,
    rows: globalFilteredRows,
    flatRows: globalFilteredFlatRows,
    rowsById: globalFilteredRowsById,
    setGlobalFilter,
    disableGlobalFilter,
  });
}
