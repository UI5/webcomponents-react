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

export const useStickyColumns = (hooks: ReactTableHooks) => {
  hooks.visibleColumns.push(visibleColumns);
  hooks.useInstance.push(computeStickyMetadata);
};
useStickyColumns.pluginName = 'useStickyColumns';
