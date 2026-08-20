import iconPushpinOff from '@ui5/webcomponents-icons/dist/pushpin-off.js';
import iconPushpinOn from '@ui5/webcomponents-icons/dist/pushpin-on.js';
import { isDesktop } from '@ui5/webcomponents-react-base/Device';
import { useCallback } from 'react';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column/index.js';
import { actions, functionalUpdate } from '../react-table/index.js';
import type {
  AnalyticalTableColumnHeaderModalItem,
  ColumnType,
  ReactTableHooks,
  TableInstance,
} from '../types/index.js';

const INTERNAL_START_COLUMNS = new Set(['__ui5wcr__internal_highlight_column', '__ui5wcr__internal_selection_column']);

// Mimics sap.ui.table (48 desktop / 88 mobile).
const MOBILE_MIN_NON_STICKY_COL_WIDTH = 88;
const getMinNonStickyColWidth = () => (isDesktop() ? DEFAULT_COLUMN_WIDTH : MOBILE_MIN_NON_STICKY_COL_WIDTH);

// Actions
actions.setStickyColumns = 'setStickyColumns';
actions.toggleStickyColumn = 'toggleStickyColumn';
actions.resetStickyColumns = 'resetStickyColumns';

// `state.stickyColumns` is the source of truth; the `sticky: 'start'` column option only seeds it at init.
function reducer(
  state: TableInstance['state'],
  action: {
    type: string;
    stickyColumns?: string[] | ((old: string[]) => string[]);
    columnId?: string;
    value?: boolean;
  },
  _previousState: TableInstance['state'],
  instance: TableInstance,
) {
  if (action.type === actions.init) {
    // Seed from `sticky: 'start'` (consumer `initialState.stickyColumns` wins); `instance.columns` are raw defs.
    if (state.stickyColumns) {
      return state;
    }
    const stickyColumns = (instance.columns ?? [])
      .filter((col) => col.sticky === 'start')
      .map((col) => (col.id ?? col.accessor) as string)
      .filter(Boolean);
    return { ...state, stickyColumns };
  }

  if (action.type === actions.setStickyColumns) {
    return { ...state, stickyColumns: functionalUpdate(action.stickyColumns, state.stickyColumns ?? []) };
  }

  if (action.type === actions.toggleStickyColumn) {
    const current = state.stickyColumns ?? [];
    const has = current.includes(action.columnId);
    const should = typeof action.value !== 'undefined' ? action.value : !has;
    const stickyColumns = should
      ? has
        ? current
        : [...current, action.columnId]
      : current.filter((id: string) => id !== action.columnId);
    return { ...state, stickyColumns };
  }

  if (action.type === actions.resetStickyColumns) {
    return { ...state, stickyColumns: instance.initialState.stickyColumns ?? [] };
  }
}

// Effective sticky set = user-pinned columns (`state.stickyColumns`) ∪ grouped columns (`state.groupBy`).
const getStickySet = (state: TableInstance['state']) =>
  new Set<string>([...(state?.stickyColumns ?? []), ...(state?.groupBy ?? [])]);

const isStickyStart = (col: ColumnType, stickySet: Set<string>) =>
  stickySet.has(col.id) || INTERNAL_START_COLUMNS.has(col.id);

const visibleColumns = (currentVisibleColumns: ColumnType[], { instance }: { instance: TableInstance }) => {
  const stickySet = getStickySet(instance.state);
  // Internal start columns (selection, highlight) only pin when a user/grouped column is sticky.
  const hasUserSticky = currentVisibleColumns.some(
    (col) => stickySet.has(col.id) && !INTERNAL_START_COLUMNS.has(col.id),
  );
  if (!hasUserSticky) {
    return currentVisibleColumns;
  }

  const stickyStart: ColumnType[] = [];
  const nonSticky: ColumnType[] = [];
  for (const col of currentVisibleColumns) {
    if (isStickyStart(col, stickySet)) {
      stickyStart.push(col);
    } else {
      nonSticky.push(col);
    }
  }

  return [...stickyStart, ...nonSticky];
};

const useStickyMetadata = (instance: TableInstance) => {
  const { visibleColumns: visCols, state, dispatch, flatHeaders } = instance;
  // Native vertical-scrollbar width (0 on overlay systems); reserved in the fit check below.
  const scrollbarSize = instance.webComponentsReactProperties?.scrollbarWidth ?? 0;

  // Instance methods + per-column toggle (mirrors useColumnOrder / useColumnVisibility).
  // eslint-disable-next-line react-hooks/immutability
  instance.setStickyColumns = useCallback(
    (stickyColumns: string[] | ((old: string[]) => string[])) =>
      dispatch({ type: actions.setStickyColumns, stickyColumns }),
    [dispatch],
  );
  // eslint-disable-next-line react-hooks/immutability
  instance.toggleStickyColumn = useCallback(
    (columnId: string, value?: boolean) => dispatch({ type: actions.toggleStickyColumn, columnId, value }),
    [dispatch],
  );
  flatHeaders?.forEach((column: ColumnType) => {
    column.toggleSticky = (value?: boolean) =>
      dispatch({ type: actions.toggleStickyColumn, columnId: column.id, value });
  });

  const stickySet = getStickySet(state);
  const hasUserSticky = visCols.some((col) => stickySet.has(col.id) && !INTERNAL_START_COLUMNS.has(col.id));
  if (!hasUserSticky) {
    Object.assign(instance, { stickyStartIndices: [], totalStickyStartWidth: 0 });
    return;
  }

  const stickyStartIndices: number[] = [];
  let totalStickyStartWidth = 0;

  for (let i = 0; i < visCols.length; i++) {
    const col = visCols[i];
    if (isStickyStart(col, stickySet)) {
      stickyStartIndices.push(i);
      totalStickyStartWidth += col.totalWidth ?? 0;
    } else {
      break;
    }
  }

  // Disable sticky when columns no longer fit. Skipped on first render before measurement.
  const tableClientWidth = state?.tableClientWidth ?? 0;
  if (tableClientWidth > 0) {
    const reservedScrollable = getMinNonStickyColWidth() + scrollbarSize;
    const fits = tableClientWidth - reservedScrollable > totalStickyStartWidth;
    if (!fits) {
      Object.assign(instance, { stickyStartIndices: [], totalStickyStartWidth: 0 });
      return;
    }
  }

  Object.assign(instance, { stickyStartIndices, totalStickyStartWidth });
};

const NAVIGATION_COLUMN = '__ui5wcr__internal_navigation_column';

export interface AnalyticalTableStickyColumnsChangeDetail {
  /** The column that was frozen or unfrozen. */
  column: ColumnType;
  /** `true` if the column is now frozen (sticky), `false` if it was unfrozen. */
  sticky: boolean;
  /** The resulting list of user-frozen column ids after the toggle. */
  stickyColumns: string[];
}

/** Fired only when a column is frozen/unfrozen via the popover; programmatic pinning does not trigger it. */
type OnStickyColumnsChange = (detail: AnalyticalTableStickyColumnsChangeDetail) => void;

// Contributes a Freeze/Unfreeze menu item to the column header popover (generic `columnHeaderModalItems` hook).
const getColumnHeaderModalItems = (
  items: AnalyticalTableColumnHeaderModalItem[],
  { instance, column }: { instance: TableInstance; column: ColumnType },
  onStickyColumnsChange?: OnStickyColumnsChange,
) => {
  // Internal columns pin implicitly; don't expose a toggle for them.
  if (INTERNAL_START_COLUMNS.has(column.id) || column.id === NAVIGATION_COLUMN) {
    return items;
  }
  // Grouped columns are force-pinned by grouping — a toggle here couldn't take effect.
  if (instance.state?.groupBy?.includes(column.id) || typeof column.toggleSticky !== 'function') {
    return items;
  }
  const isFrozen = (instance.state?.stickyColumns ?? []).includes(column.id);
  const { freezeColumnText, unfreezeColumnText } = instance.webComponentsReactProperties?.translatableTexts ?? {};
  return [
    ...items,
    {
      id: 'ui5wcr-sticky-toggle',
      text: isFrozen ? unfreezeColumnText : freezeColumnText,
      icon: isFrozen ? iconPushpinOff : iconPushpinOn,
      onClick: ({ instance: inst, column: clickedColumn }) => {
        const current = inst.state?.stickyColumns ?? [];
        const sticky = !current.includes(clickedColumn.id);
        const stickyColumns = sticky
          ? [...current, clickedColumn.id]
          : current.filter((id: string) => id !== clickedColumn.id);
        clickedColumn.toggleSticky?.(sticky);
        // Popover-only callback — programmatic toggleStickyColumn/setStickyColumns intentionally skip this.
        onStickyColumnsChange?.({ column: clickedColumn, sticky, stickyColumns });
      },
    },
  ];
};

const setHeaderProps = (
  headerProps,
  { column, instance }: { column: TableInstance['column']; instance: TableInstance },
) => {
  const stickyActive = (instance.stickyStartIndices?.length ?? 0) > 0;
  const stickySet = getStickySet(instance.state);
  if (!stickyActive || !column || !stickySet.has(column.id)) {
    return headerProps;
  }
  const fixedColumnText = instance.webComponentsReactProperties?.translatableTexts?.fixedColumnText;
  if (!fixedColumnText) {
    return headerProps;
  }
  const existingLabel = headerProps?.['aria-label'] ?? '';
  return [headerProps, { 'aria-label': existingLabel ? `${existingLabel} ${fixedColumnText}` : fixedColumnText }];
};

/**
 * Plugin hook that pins columns to the inline-start of the table, keeping them visible while the user
 * scrolls horizontally. Internal columns rendered before the sticky region (selection, highlight) are
 * auto-pinned alongside.
 *
 * Pass via `tableHooks` to opt in:
 *
 * ```tsx
 * import { AnalyticalTable, AnalyticalTableHooks } from '@ui5/webcomponents-react';
 *
 * const tableHooks = [AnalyticalTableHooks.useStickyColumns()];
 *
 * <AnalyticalTable tableHooks={tableHooks} columns={columns} data={data} />
 * ```
 *
 * Mark columns with `sticky: 'start'` in the column definition to pin them initially, and/or toggle at
 * runtime via the `tableInstance` ref (`tableInstance.current.setStickyColumns(...)` /
 * `tableInstance.current.toggleStickyColumn(id)`). The `sticky: 'start'` option only seeds the initial
 * state; `state.stickyColumns` is authoritative.
 *
 * Auto-disables when the container is too narrow to fit the sticky columns plus a usable scrollable
 * area; re-enables when the container grows again.
 *
 * @param {OnStickyColumnsChange=} onStickyColumnsChange Fired when a column is frozen/unfrozen via the
 * column header popover. Programmatic pinning (`tableInstance.toggleStickyColumn`/`setStickyColumns`) does
 * not trigger it, since the app developer already controls those calls.
 *
 * @experimental The API and behavior may change without notice.
 */
export const useStickyColumns = (onStickyColumnsChange?: OnStickyColumnsChange) => {
  const useStickyColumnsHooks = (hooks: ReactTableHooks) => {
    hooks.stateReducers.push(reducer);
    hooks.visibleColumnsDeps.push((deps, { instance }) => [
      ...deps,
      instance.state.stickyColumns,
      instance.state.groupBy,
    ]);
    hooks.visibleColumns.push(visibleColumns);
    hooks.useInstance.push(useStickyMetadata);
    hooks.getHeaderProps.push(setHeaderProps);
    hooks.columnHeaderModalItems.push((items, meta) => getColumnHeaderModalItems(items, meta, onStickyColumnsChange));
  };
  useStickyColumnsHooks.pluginName = 'useStickyColumns';
  return useStickyColumnsHooks;
};
