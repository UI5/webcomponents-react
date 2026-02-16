import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/internal/utils';
import { useEffect, useRef } from 'react';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import type { AnalyticalTablePropTypes, ReactTableHooks, TableInstance } from '../types/index.js';

type OnRowSelectEvent = Parameters<NonNullable<AnalyticalTablePropTypes['onRowSelect']>>[0];
type OnRowSelectDetail = OnRowSelectEvent['detail'];

const useInstance = (instance: TableInstance) => {
  const { webComponentsReactProperties, rowsById, preFilteredRowsById, state } = instance;
  const { selectedRowIds, filters, globalFilter } = state;
  const { onRowSelect, selectionMode } = webComponentsReactProperties;

  const prevSelectedRowIdsRef = useRef(selectedRowIds);

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
      } else {
        onRowSelect?.(enrichEventWithDetails(e as Event & { detail?: OnRowSelectDetail }, payload) as OnRowSelectEvent);
      }
    }

    prevSelectedRowIdsRef.current = selectedRowIds;
  }, [selectedRowIds, rowsById, preFilteredRowsById, filters, globalFilter, selectionMode, instance, onRowSelect]);
};

export const useSelectionChangeCallback = (hooks: ReactTableHooks) => {
  hooks.useInstance.push(useInstance);
};

useSelectionChangeCallback.pluginName = 'useSelectionChangeCallback';
