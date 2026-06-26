import { isDesktop } from '@ui5/webcomponents-react-base/Device';
import { useScrollbarSize } from '../../../internal/useScrollbarSize.js';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column/index.js';
import type { ColumnType, ReactTableHooks, TableInstance } from '../types/index.js';

const INTERNAL_START_COLUMNS = new Set(['__ui5wcr__internal_highlight_column', '__ui5wcr__internal_selection_column']);

// Mimics sap.ui.table (48 desktop / 88 mobile).
const MOBILE_MIN_NON_STICKY_COL_WIDTH = 88;
const getMinNonStickyColWidth = () => (isDesktop() ? DEFAULT_COLUMN_WIDTH : MOBILE_MIN_NON_STICKY_COL_WIDTH);

const visibleColumns = (currentVisibleColumns: ColumnType[], { instance: _instance }: { instance: TableInstance }) => {
  const hasStickyStart = currentVisibleColumns.some(
    (col) => col.sticky === 'start' && !INTERNAL_START_COLUMNS.has(col.id),
  );
  if (!hasStickyStart) {
    return currentVisibleColumns;
  }

  const stickyStart: ColumnType[] = [];
  const nonSticky: ColumnType[] = [];

  for (const col of currentVisibleColumns) {
    if (col.sticky === 'start' || INTERNAL_START_COLUMNS.has(col.id)) {
      stickyStart.push(col);
    } else {
      nonSticky.push(col);
    }
  }

  return [...stickyStart, ...nonSticky];
};

const useStickyMetadata = (instance: TableInstance) => {
  const scrollbarSize = useScrollbarSize();
  Object.assign(instance, { scrollbarSize });

  const { visibleColumns: visCols, state } = instance;

  const hasStickyStart = visCols.some((col) => col.sticky === 'start' && !INTERNAL_START_COLUMNS.has(col.id));
  if (!hasStickyStart) {
    Object.assign(instance, { stickyStartIndices: [], totalStickyStartWidth: 0 });
    return;
  }

  const stickyStartIndices: number[] = [];
  let totalStickyStartWidth = 0;

  for (let i = 0; i < visCols.length; i++) {
    const col = visCols[i];
    if (col.sticky === 'start' || INTERNAL_START_COLUMNS.has(col.id)) {
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

const setHeaderProps = (
  headerProps,
  { column, instance }: { column: TableInstance['column']; instance: TableInstance },
) => {
  const stickyActive = (instance.stickyStartIndices?.length ?? 0) > 0;
  if (!stickyActive || !column || column.sticky !== 'start') {
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
 * Plugin hook that pins columns marked with `sticky: 'start'` to the inline-start of the table,
 * keeping them visible while the user scrolls horizontally. Internal columns rendered before
 * the sticky region (selection, highlight) are auto-pinned alongside.
 *
 * Pass via `tableHooks` to opt in:
 *
 * ```tsx
 * import { AnalyticalTable, AnalyticalTableHooks } from '@ui5/webcomponents-react';
 *
 * const tableHooks = [AnalyticalTableHooks.useStickyColumns];
 *
 * <AnalyticalTable tableHooks={tableHooks} columns={columns} data={data} />
 * ```
 *
 * Mark columns with `sticky: 'start'` in the column definition.
 *
 * Auto-disables when the container is too narrow to fit the sticky columns plus a usable
 * scrollable area; re-enables when the container grows again.
 *
 * @experimental The API and behavior may change without notice.
 */
export const useStickyColumns = (hooks: ReactTableHooks) => {
  hooks.visibleColumns.push(visibleColumns);
  hooks.useInstance.push(useStickyMetadata);
  hooks.getHeaderProps.push(setHeaderProps);
};
useStickyColumns.pluginName = 'useStickyColumns';
