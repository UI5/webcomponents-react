import announce from '@ui5/webcomponents-base/dist/util/InvisibleMessage.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks';
import { debounce, enrichEventWithDetails } from '@ui5/webcomponents-react-base/internal/utils';
import { useEffect, useRef } from 'react';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import {
  ALL_ROWS_DESELECTED,
  ALL_ROWS_DESELECTED_FILTERED,
  ALL_ROWS_SELECTED,
  ALL_ROWS_SELECTED_FILTERED,
  ROW_DESELECTED,
  ROW_DESELECTED_MULTI,
  ROW_DESELECTED_MULTI_FILTERED,
  ROW_SELECTED,
  ROW_SELECTED_MULTI,
  ROW_SELECTED_MULTI_FILTERED,
} from '../../../i18n/i18n-defaults.js';
import { ensurePluginOrder } from '../react-table/index.js';
import type { AnalyticalTablePropTypes, ReactTableHooks, TableInstance } from '../types/index.js';

type OnRowSelectEvent = Parameters<NonNullable<AnalyticalTablePropTypes['onRowSelect']>>[0];
type OnRowSelectDetail = OnRowSelectEvent['detail'];

// debounce announce to prevent excessive successive announcements
const debouncedAnnounce = debounce((announcement: string) => {
  announce(announcement, 'Polite');
}, 200);

const useInstance = (instance: TableInstance) => {
  const { webComponentsReactProperties, rowsById, preFilteredRowsById, state, plugins } = instance;
  const { selectedRowIds, filters, globalFilter } = state;
  const { onRowSelect, selectionMode } = webComponentsReactProperties;

  ensurePluginOrder(plugins, ['useRowSelect'], 'useSelectionChangeCallback');

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const prevSelectedRowIdsRef = useRef(selectedRowIds);

  // react-table instance is intentionally mutable
  // eslint-disable-next-line react-hooks/immutability
  useEffect(() => {
    const pendingEvent = instance.pendingSelectEvent;

    // Only fire callback if there's a pending event and selection changed
    if (pendingEvent && prevSelectedRowIdsRef.current !== selectedRowIds) {
      // Clear pending event - instance is mutable
      // eslint-disable-next-line react-hooks/immutability
      instance.pendingSelectEvent = undefined;

      const { event: e, row: eventRow, selectAll } = pendingEvent;
      const row = eventRow ? rowsById[eventRow.id] : undefined;
      const isFiltered = filters?.length > 0 || !!globalFilter;
      const _rowsById = isFiltered ? preFilteredRowsById : rowsById;

      const payload: Partial<OnRowSelectDetail> = {
        row,
        rowsById: _rowsById,
        isSelected: row?.isSelected,
        allRowsSelected: false,
        allVisibleRowsSelected: !!instance.isAllRowsSelected,
        selectedRowIds,
      };

      if (selectionMode === AnalyticalTableSelectionMode.Multiple) {
        // Check if all rows (including filtered) are selected
        if (Object.keys(selectedRowIds).length === Object.keys(_rowsById).length) {
          payload.allRowsSelected = true;
        }
      }

      if (selectAll) {
        // For select-all click, don't include row-specific fields
        onRowSelect?.(
          enrichEventWithDetails(e as Event & { detail?: OnRowSelectDetail }, {
            rowsById: payload.rowsById,
            allRowsSelected: payload.allRowsSelected,
            allVisibleRowsSelected: payload.allVisibleRowsSelected,
            selectedRowIds: payload.selectedRowIds,
          }) as OnRowSelectEvent,
        );
        let allRowsMsgKey;
        if (instance.isAllRowsSelected) {
          allRowsMsgKey = isFiltered ? ALL_ROWS_SELECTED_FILTERED : ALL_ROWS_SELECTED;
        } else {
          allRowsMsgKey = isFiltered ? ALL_ROWS_DESELECTED_FILTERED : ALL_ROWS_DESELECTED;
        }
        debouncedAnnounce(i18nBundle.getText(allRowsMsgKey));
      } else {
        onRowSelect?.(enrichEventWithDetails(e as Event & { detail?: OnRowSelectDetail }, payload) as OnRowSelectEvent);

        if (row) {
          const isSelected = row.isSelected;
          if (selectionMode === AnalyticalTableSelectionMode.Multiple) {
            const count = instance.selectedFlatRows.length;
            let rowMsgKey;
            if (isSelected) {
              rowMsgKey = isFiltered ? ROW_SELECTED_MULTI_FILTERED : ROW_SELECTED_MULTI;
            } else {
              rowMsgKey = isFiltered ? ROW_DESELECTED_MULTI_FILTERED : ROW_DESELECTED_MULTI;
            }
            debouncedAnnounce(i18nBundle.getText(rowMsgKey, count));
          } else if (selectionMode === AnalyticalTableSelectionMode.Single) {
            debouncedAnnounce(i18nBundle.getText(isSelected ? ROW_SELECTED : ROW_DESELECTED));
          }
        }
      }
    }

    prevSelectedRowIdsRef.current = selectedRowIds;
  }, [
    selectedRowIds,
    rowsById,
    preFilteredRowsById,
    filters,
    globalFilter,
    selectionMode,
    instance,
    onRowSelect,
    i18nBundle,
  ]);
};

export const useSelectionChangeCallback = (hooks: ReactTableHooks) => {
  hooks.useInstance.push(useInstance);
};

useSelectionChangeCallback.pluginName = 'useSelectionChangeCallback';
