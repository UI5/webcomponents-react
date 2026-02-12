import { useCallback, useMemo } from 'react';
import { actions, makePropGetter, ensurePluginOrder, useGetLatest, useMountedLayoutEffect } from 'react-table';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import type { ReactTableHooks, RowType, TableInstance } from '../types/index.js';

const pluginName = 'useRowSelect';

// Actions
actions.resetSelectedRows = 'resetSelectedRows';
actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
actions.toggleRowSelected = 'toggleRowSelected';
actions.toggleAllPageRowsSelected = 'toggleAllPageRowsSelected';

const noopToggle = () => {};
const noopGetProps = () => ({});
const emptyArray: RowType[] = [];

/**
 * UI5WCR optimized version of react-table v7's useRowSelect hook.
 * Original source: https://github.com/TanStack/table/blob/v7/src/plugin-hooks/useRowSelect.js
 *
 * This is a fork of react-table's `useRowSelect` with performance optimizations:
 * - Early exit when `selectionMode` is 'None' or loading/showOverlay is `true`
 * - Skips `selectedFlatRows` computation, `isAllRowsSelected` checks, and `prepareRow` overhead when selection is disabled
 * - `isAllRowsSelected` computation is memoized
 * - Uses stable noop references when disabled
 * - Fixes select-all indeterminate state considering filtered-out rows (now only visible rows are considered)
 */
export const useRowSelect = (hooks: ReactTableHooks) => {
  hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
  hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
  hooks.getToggleAllPageRowsSelectedProps = [defaultGetToggleAllPageRowsSelectedProps];
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
  hooks.prepareRow.push(prepareRow);
};

useRowSelect.pluginName = pluginName;

const defaultGetToggleRowSelectedProps = (
  props: Record<string, unknown>,
  { instance, row }: { instance: TableInstance; row: RowType },
) => {
  const { manualRowSelectedKey = 'isSelected' } = instance;
  let checked = false;

  if (row.original && row.original[manualRowSelectedKey]) {
    checked = true;
  } else {
    checked = row.isSelected;
  }

  return [
    props,
    {
      onChange: (e: { target: { checked: boolean } }) => {
        row.toggleRowSelected(e.target.checked);
      },
      style: { cursor: 'pointer' },
      checked,
      title: 'Toggle Row Selected',
      indeterminate: row.isSomeSelected,
    },
  ];
};

const defaultGetToggleAllRowsSelectedProps = (
  props: Record<string, unknown>,
  { instance }: { instance: TableInstance },
) => [
  props,
  {
    onChange: (e: { target: { checked: boolean } }) => {
      instance.toggleAllRowsSelected?.(e.target.checked);
    },
    style: { cursor: 'pointer' },
    checked: instance.isAllRowsSelected,
    title: 'Toggle All Rows Selected',
    indeterminate: Boolean(!instance.isAllRowsSelected && instance.selectedFlatRows?.length),
  },
];

const defaultGetToggleAllPageRowsSelectedProps = (
  props: Record<string, unknown>,
  { instance }: { instance: TableInstance },
) => [
  props,
  {
    onChange: (e: { target: { checked: boolean } }) => {
      instance.toggleAllPageRowsSelected?.(e.target.checked);
    },
    style: { cursor: 'pointer' },
    checked: instance.isAllPageRowsSelected,
    title: 'Toggle All Current Page Rows Selected',
    indeterminate: Boolean(
      !instance.isAllPageRowsSelected &&
      instance.page?.some(({ id }: { id: string }) => instance.state.selectedRowIds[id]),
    ),
  },
];

function reducer(
  state: TableInstance['state'],
  action: { type: string; value?: boolean; id?: string },
  _previousState: TableInstance['state'],
  instance: TableInstance,
) {
  if (action.type === actions.init) {
    return {
      selectedRowIds: {},
      ...state,
    };
  }

  if (action.type === actions.resetSelectedRows) {
    return {
      ...state,
      selectedRowIds: instance.initialState.selectedRowIds || {},
    };
  }

  if (action.type === actions.toggleAllRowsSelected) {
    const { value: setSelected } = action;
    const { isAllRowsSelected, rowsById, nonGroupedRowsById = rowsById } = instance;

    const selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllRowsSelected;

    const selectedRowIds = { ...state.selectedRowIds };

    if (selectAll) {
      Object.keys(nonGroupedRowsById).forEach((rowId) => {
        selectedRowIds[rowId] = true;
      });
    } else {
      Object.keys(nonGroupedRowsById).forEach((rowId) => {
        delete selectedRowIds[rowId];
      });
    }

    return { ...state, selectedRowIds };
  }

  if (action.type === actions.toggleRowSelected) {
    const { id, value: setSelected } = action;
    const { rowsById, selectSubRows = true, getSubRows } = instance;
    const isSelected = state.selectedRowIds[id];
    const shouldExist = typeof setSelected !== 'undefined' ? setSelected : !isSelected;

    if (isSelected === shouldExist) {
      return state;
    }

    const newSelectedRowIds = { ...state.selectedRowIds };

    const handleRowById = (rowId: string) => {
      const row = rowsById[rowId];

      if (row) {
        if (!row.isGrouped) {
          if (shouldExist) {
            newSelectedRowIds[rowId] = true;
          } else {
            delete newSelectedRowIds[rowId];
          }
        }

        if (selectSubRows && getSubRows(row)) {
          getSubRows(row).forEach((r: RowType) => handleRowById(r.id));
        }
      }
    };

    handleRowById(id);

    return { ...state, selectedRowIds: newSelectedRowIds };
  }

  if (action.type === actions.toggleAllPageRowsSelected) {
    const { value: setSelected } = action;
    const { page, rowsById, selectSubRows = true, isAllPageRowsSelected, getSubRows } = instance;

    const selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllPageRowsSelected;

    const newSelectedRowIds = { ...state.selectedRowIds };

    const handleRowById = (rowId: string) => {
      const row = rowsById[rowId];

      if (!row.isGrouped) {
        if (selectAll) {
          newSelectedRowIds[rowId] = true;
        } else {
          delete newSelectedRowIds[rowId];
        }
      }

      if (selectSubRows && getSubRows(row)) {
        getSubRows(row).forEach((r: RowType) => handleRowById(r.id));
      }
    };

    page?.forEach((row: RowType) => handleRowById(row.id));

    return { ...state, selectedRowIds: newSelectedRowIds };
  }

  return state;
}

function useInstance(instance: TableInstance) {
  const {
    data,
    rows,
    getHooks,
    plugins,
    rowsById,
    nonGroupedRowsById = rowsById,
    autoResetSelectedRows = true,
    state: { selectedRowIds },
    selectSubRows = true,
    dispatch,
    page,
    getSubRows,
    webComponentsReactProperties,
  } = instance;

  const { selectionMode, loading, showOverlay } = webComponentsReactProperties ?? {};
  const isSelectionEnabled = selectionMode !== AnalyticalTableSelectionMode.None && !loading && !showOverlay;

  ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded', 'usePagination'], 'useRowSelect');

  const selectedFlatRows = useMemo(() => {
    if (!isSelectionEnabled) {
      return emptyArray;
    }

    const result: RowType[] = [];

    rows.forEach((row) => {
      const isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
      row.isSelected = !!isSelected;
      row.isSomeSelected = isSelected === null;

      if (isSelected) {
        result.push(row);
      }
    });

    return result;
  }, [rows, selectSubRows, selectedRowIds, getSubRows, isSelectionEnabled]);

  const isAllRowsSelected = useMemo(() => {
    if (!isSelectionEnabled) {
      return false;
    }

    const rowCount = Object.keys(nonGroupedRowsById).length;
    const selectedCount = Object.keys(selectedRowIds).length;

    if (!rowCount || !selectedCount) {
      return false;
    }

    return !Object.keys(nonGroupedRowsById).some((id) => !selectedRowIds[id]);
  }, [nonGroupedRowsById, selectedRowIds, isSelectionEnabled]);

  const isAllPageRowsSelected = useMemo(() => {
    if (!isSelectionEnabled) {
      return false;
    }
    if (!page || !page.length) {
      return false;
    }
    if (isAllRowsSelected) {
      return true;
    }

    return !page.some(({ id }: { id: string }) => !selectedRowIds[id]);
  }, [page, selectedRowIds, isAllRowsSelected, isSelectionEnabled]);

  const getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);

  useMountedLayoutEffect(() => {
    if (getAutoResetSelectedRows()) {
      dispatch({ type: actions.resetSelectedRows });
    }
  }, [dispatch, data]);

  const toggleAllRowsSelected = useCallback(
    (value?: boolean) => dispatch({ type: actions.toggleAllRowsSelected, value }),
    [dispatch],
  );

  const toggleAllPageRowsSelected = useCallback(
    (value?: boolean) => dispatch({ type: actions.toggleAllPageRowsSelected, value }),
    [dispatch],
  );

  const toggleRowSelected = useCallback(
    (id: string, value?: boolean) => dispatch({ type: actions.toggleRowSelected, id, value }),
    [dispatch],
  );

  const getInstance = useGetLatest(instance);

  const getToggleAllRowsSelectedProps = isSelectionEnabled
    ? makePropGetter(getHooks().getToggleAllRowsSelectedProps, { instance: getInstance() })
    : noopGetProps;

  const getToggleAllPageRowsSelectedProps = isSelectionEnabled
    ? makePropGetter(getHooks().getToggleAllPageRowsSelectedProps, { instance: getInstance() })
    : noopGetProps;

  Object.assign(instance, {
    selectedFlatRows,
    isAllRowsSelected,
    isAllPageRowsSelected,
    toggleRowSelected,
    toggleAllRowsSelected,
    getToggleAllRowsSelectedProps,
    getToggleAllPageRowsSelectedProps,
    toggleAllPageRowsSelected,
  });
}

function prepareRow(row: RowType, { instance }: { instance: TableInstance }) {
  const { selectionMode, loading, showOverlay } = instance.webComponentsReactProperties ?? {};
  const isSelectionEnabled = selectionMode !== AnalyticalTableSelectionMode.None && !loading && !showOverlay;

  if (!isSelectionEnabled) {
    row.isSelected = false;
    row.isSomeSelected = false;
    row.toggleRowSelected = noopToggle;
    row.getToggleRowSelectedProps = noopGetProps;
    return;
  }

  row.toggleRowSelected = (set?: boolean) => instance.toggleRowSelected?.(row.id, set);

  row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, { instance, row });
}

function getRowIsSelected(
  row: RowType,
  selectedRowIds: Record<string, boolean>,
  getSubRows: (row: RowType) => RowType[],
): boolean | null {
  if (selectedRowIds[row.id]) {
    return true;
  }

  const subRows = getSubRows(row);

  if (subRows && subRows.length) {
    let allChildrenSelected = true;
    let someSelected = false;

    subRows.forEach((subRow) => {
      // Bail out early if we know both of these
      if (someSelected && !allChildrenSelected) {
        return;
      }

      if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    });
    return allChildrenSelected ? true : someSelected ? null : false;
  }

  return false;
}
