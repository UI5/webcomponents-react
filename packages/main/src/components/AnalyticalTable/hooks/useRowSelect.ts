import { useCallback } from 'react';
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
 * - Early exit when `selectionMode` is 'None'
 * - Skips `selectedFlatRows` computation, `isAllRowsSelected` checks, and `prepareRow` overhead when selection is disabled
 * - `isAllRowsSelected` computation is memoized
 * - Uses stable noop references when disabled
 * - Fixes select-all indeterminate state considering filtered-out rows (now only visible rows are considered)
 *
 * _Pagination specific implementation where adjusted as well, although they are currently not being used_
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
  const { manualRowSelectedKey = 'isSelected', webComponentsReactProperties } = instance;
  // UI5WCR: use className instead of inline style
  const { classes } = webComponentsReactProperties;
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
      // UI5WCR: removed style/title, added className
      className: classes.checkBox,
      checked,
      indeterminate: row.isSomeSelected,
    },
  ];
};

const defaultGetToggleAllRowsSelectedProps = (
  props: Record<string, unknown>,
  { instance }: { instance: TableInstance },
) => {
  // UI5WCR: use className instead of inline style
  const { classes } = instance.webComponentsReactProperties;
  return [
    props,
    {
      onChange: (e: { target: { checked: boolean } }) => {
        instance.toggleAllRowsSelected?.(e.target.checked);
      },
      // UI5WCR: removed style/title, added className
      className: classes.checkBox,
      checked: instance.isAllRowsSelected,
      // UI5WCR: use selectedFlatRows (visible rows only) instead of selectedRowIds
      indeterminate: Boolean(!instance.isAllRowsSelected && instance.selectedFlatRows?.length),
    },
  ];
};

const defaultGetToggleAllPageRowsSelectedProps = (
  props: Record<string, unknown>,
  { instance }: { instance: TableInstance },
) => {
  // UI5WCR: use className instead of inline style
  const { classes } = instance.webComponentsReactProperties;
  return [
    props,
    {
      onChange: (e: { target: { checked: boolean } }) => {
        instance.toggleAllPageRowsSelected?.(e.target.checked);
      },
      // UI5WCR: removed style/title, added className
      className: classes.checkBox,
      checked: instance.isAllPageRowsSelected,
      indeterminate: Boolean(
        !instance.isAllPageRowsSelected &&
        instance.page?.some(({ id }: { id: string }) => instance.state.selectedRowIds[id]),
      ),
    },
  ];
};

const reducer: TableInstance['stateReducer'] = (state, action, _previousState, instance) => {
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

    for (const rowId in nonGroupedRowsById) {
      if (selectAll) {
        selectedRowIds[rowId] = true;
      } else {
        delete selectedRowIds[rowId];
      }
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

        if (selectSubRows) {
          const subRows = getSubRows(row);
          if (subRows) {
            subRows.forEach((r: RowType) => {
              handleRowById(r.id);
            });
          }
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

      if (selectSubRows) {
        const subRows = getSubRows(row);

        if (subRows) {
          subRows.forEach((r: RowType) => {
            handleRowById(r.id);
          });
        }
      }
    };

    if (page) {
      page.forEach((row: RowType) => {
        handleRowById(row.id);
      });
    }

    return { ...state, selectedRowIds: newSelectedRowIds };
  }

  return state;
};

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

  const { selectionMode } = webComponentsReactProperties;
  const isSelectionEnabled = selectionMode !== AnalyticalTableSelectionMode.None;

  ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded', 'usePagination'], 'useRowSelect');

  // UI5WCR: early exit when selection disabled
  let selectedFlatRows: RowType[] = emptyArray;
  let isAllRowsSelected = false;
  let isAllPageRowsSelected = false;

  if (isSelectionEnabled) {
    selectedFlatRows = [];
    rows.forEach((row) => {
      const isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
      row.isSelected = !!isSelected;
      row.isSomeSelected = isSelected === null;

      if (isSelected) {
        selectedFlatRows.push(row);
      }
    });

    // isAllRowsSelected
    const rowIds = Object.keys(nonGroupedRowsById);
    const selectedIds = Object.keys(selectedRowIds);
    if (rowIds.length && selectedIds.length) {
      isAllRowsSelected = rowIds.every((id) => selectedRowIds[id]);
    }

    // isAllPageRowsSelected
    if (page?.length) {
      isAllPageRowsSelected = isAllRowsSelected || page.every((row) => selectedRowIds[row.id]);
    }
  }

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

  // UI5WCR: use noop when selection disabled
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
  const { selectionMode } = instance.webComponentsReactProperties;
  const isSelectionEnabled = selectionMode !== AnalyticalTableSelectionMode.None;

  // UI5WCR: skip per-row setup when selection disabled
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

    for (const subRow of subRows) {
      // Bail out early if we know both of these
      if (someSelected && !allChildrenSelected) {
        break;
      }

      if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    }
    return allChildrenSelected ? true : someSelected ? null : false;
  }

  return false;
}
