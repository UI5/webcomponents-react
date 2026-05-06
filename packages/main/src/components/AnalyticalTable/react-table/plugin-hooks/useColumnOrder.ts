import { useCallback } from 'react';
import type { ReactTableHooks, TableInstance, ColumnType, PluginHook } from '../../types/index.js';
import { functionalUpdate, actions } from '../publicUtils.js';

// Actions
actions.resetColumnOrder = 'resetColumnOrder';
actions.setColumnOrder = 'setColumnOrder';

export const useColumnOrder: PluginHook = (hooks: ReactTableHooks) => {
  hooks.stateReducers.push(reducer);
  hooks.visibleColumnsDeps.push((deps, { instance }) => {
    return [...deps, instance.state.columnOrder];
  });
  hooks.visibleColumns.push(visibleColumns);
  hooks.useInstance.push(useInstance);
};
useColumnOrder.pluginName = 'useColumnOrder';

function reducer(
  state: TableInstance['state'],
  action: { type: string; columnOrder?: string[] | ((order: string[]) => string[]) },
  _previousState: TableInstance['state'],
  instance: TableInstance,
) {
  if (action.type === actions.init) {
    return {
      columnOrder: [],
      ...state,
    };
  }

  if (action.type === actions.resetColumnOrder) {
    return {
      ...state,
      columnOrder: instance.initialState.columnOrder || [],
    };
  }

  if (action.type === actions.setColumnOrder) {
    return {
      ...state,
      columnOrder: functionalUpdate(action.columnOrder, state.columnOrder),
    };
  }
}

function visibleColumns(
  columns: ColumnType[],
  {
    instance: {
      state: { columnOrder },
    },
  }: { instance: TableInstance },
): ColumnType[] {
  // If there is no order, return the normal columns
  if (!columnOrder || !columnOrder.length) {
    return columns;
  }

  // If there is an order, make a copy of the columns
  const columnOrderCopy = [...columnOrder];
  const columnsCopy = [...columns];
  // And make a new ordered array of the columns
  const columnsInOrder: ColumnType[] = [];

  // Loop over the columns and place them in order into the new array
  while (columnsCopy.length && columnOrderCopy.length) {
    const targetColumnId = columnOrderCopy.shift();
    const foundIndex = columnsCopy.findIndex((d) => d.id === targetColumnId);
    if (foundIndex > -1) {
      columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
    }
  }

  // If there are any columns left, add them to the end
  return [...columnsInOrder, ...columnsCopy];
}

function useInstance(instance: TableInstance) {
  const { dispatch } = instance;

  // eslint-disable-next-line react-hooks/immutability
  instance.setColumnOrder = useCallback(
    (columnOrder: string[] | ((order: string[]) => string[])) => {
      return dispatch({ type: actions.setColumnOrder, columnOrder });
    },
    [dispatch],
  );
}
