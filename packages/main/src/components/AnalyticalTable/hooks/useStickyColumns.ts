import type { ColumnType, ReactTableHooks, TableInstance } from '../types/index.js';

const INTERNAL_START_COLUMNS = new Set(['__ui5wcr__internal_highlight_column', '__ui5wcr__internal_selection_column']);

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

// TODO: Drag-and-drop interaction with sticky columns is unconstrained. A user can drag a sticky
// column out of the start region (snaps back on next render via re-sort) or drag a non-sticky
// column into it (gets pushed back out). No UX feedback either way. Either disable drag for
// sticky columns, or constrain drag boundaries at the sticky/non-sticky boundary.

const computeStickyMetadata = (instance: TableInstance) => {
  const { visibleColumns: visCols } = instance;

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

  Object.assign(instance, { stickyStartIndices, totalStickyStartWidth });
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
 * @experimental The API and behavior may change without notice.
 */
export const useStickyColumns = (hooks: ReactTableHooks) => {
  hooks.visibleColumns.push(visibleColumns);
  hooks.useInstance.push(computeStickyMetadata);
};
useStickyColumns.pluginName = 'useStickyColumns';
