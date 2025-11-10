import { useCallback } from 'react';
import type { CellType, ReactTableHooks, TableInstance } from '../types/index.js';

/**
 * The `useAnnounceEmptyCells` plugin hook adds screen reader announcements for empty cells.
 *
 * **Note:** Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells.
 */
export const useAnnounceEmptyCells = (hooks: ReactTableHooks) => {
  const setCellProps = useCallback(
    (
      cellProps,
      {
        cell: { value },
        instance: {
          webComponentsReactProperties: {
            a11yElementIds: { cellEmptyDescId },
          },
        },
      }: { cell: CellType; instance: TableInstance },
    ) => {
      if (typeof value !== 'number' && !value) {
        return [cellProps, { 'aria-labelledby': `${cellProps['aria-labelledby']} ${cellEmptyDescId}` }];
      }
      return cellProps;
    },
    [],
  );

  hooks.getCellProps.push(setCellProps);
};
useAnnounceEmptyCells.pluginName = 'useAnnounceEmptyCells';
