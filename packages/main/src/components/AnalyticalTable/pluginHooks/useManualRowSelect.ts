'use client';

import { useEffect } from 'react';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import type { ReactTableHooks, TableInstance } from '../types/index.js';

//todo: reuse `manualRowSelectedKey` react-table option (currently noop, add type again) and remove manualRowSelectedKey param here in v3.

/**
 * A plugin hook for manual row selection.
 *
 * @param {string} [manualRowSelectedKey='isSelected'] - If this key is found on the original data row, and it is true, this row will be manually selected.
 *
 * __Note:__ Per default, this hook sets `reactTableOptions.autoResetSelectedRows = false` if not defined.
 */
export const useManualRowSelect = (manualRowSelectedKey = 'isSelected') => {
  const useInstanceAfterData = (instance: TableInstance) => {
    const { flatRows, toggleRowSelected, webComponentsReactProperties } = instance;
    const { selectionMode } = webComponentsReactProperties;

    if (!('autoResetSelectedRows' in instance)) {
      // `instance` is mutable
      // eslint-disable-next-line react-hooks/immutability
      instance.autoResetSelectedRows = false;
    }

    useEffect(() => {
      if (selectionMode === AnalyticalTableSelectionMode.None) {
        return;
      }

      flatRows.forEach(({ id, original, isSelected }) => {
        if (manualRowSelectedKey in original) {
          const shouldBeSelected = !!original[manualRowSelectedKey];
          if (shouldBeSelected !== isSelected) {
            toggleRowSelected(id, shouldBeSelected);
          }
        }
      });
    }, [flatRows, toggleRowSelected, selectionMode]);
  };

  const manualRowSelect = (hooks: ReactTableHooks) => {
    hooks.useInstanceAfterData.push(useInstanceAfterData);
  };

  manualRowSelect.pluginName = 'useManualRowSelect';

  return manualRowSelect;
};
