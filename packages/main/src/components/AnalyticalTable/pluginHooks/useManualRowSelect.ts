'use client';

import { useEffect } from 'react';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import type { ReactTableHooks, TableInstance } from '../types/index.js';

/**
 * A plugin hook for manual row selection.
 *
 * @param {string} manualRowSelectedKey - If this key is found on the original data row, and it is true, this row will be manually selected. __Defaults to `"isSelected"`__.
 */
export const useManualRowSelect = (manualRowSelectedKey = 'isSelected') => {
  const instanceAfterData = ({
    flatRows,
    toggleRowSelected,
    webComponentsReactProperties,
  }: {
    flatRows: TableInstance['flatRows'];
    toggleRowSelected: TableInstance['toggleRowSelected'];
    webComponentsReactProperties: TableInstance['webComponentsReactProperties'];
  }) => {
    const { selectionMode } = webComponentsReactProperties;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (selectionMode === AnalyticalTableSelectionMode.None) {
        return;
      }

      flatRows.forEach(({ id, original }) => {
        if (manualRowSelectedKey in original) {
          toggleRowSelected(id, original.isSelected);
        }
      });
    }, [flatRows, toggleRowSelected, selectionMode]);
  };

  const manualRowSelect = (hooks: ReactTableHooks) => {
    hooks.useInstanceAfterData.push(instanceAfterData);
  };

  manualRowSelect.pluginName = 'useManualRowSelect';

  return manualRowSelect;
};
