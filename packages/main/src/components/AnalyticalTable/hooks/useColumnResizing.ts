import type { MouseEvent, TouchEvent } from 'react';
import { useCallback } from 'react';
import { actions, defaultColumn, makePropGetter, useGetLatest, useMountedLayoutEffect } from 'react-table';
import type { ColumnType, ReactTableHooks, TableInstance } from '../types/index.js';

// Default Column
defaultColumn.canResize = true;

// Actions
actions.columnStartResizing = 'columnStartResizing';
actions.columnResizing = 'columnResizing';
actions.columnDoneResizing = 'columnDoneResizing';
actions.resetResize = 'resetResize';

/**
 * Computes the projected column width after a resize drag.
 *
 * Uses the same percentage-based formula as react-table's `columnResizing` reducer:
 * the drag delta is expressed as a percentage of the original column width, then
 * applied multiplicatively. RTL inverts the delta direction.
 */
export function getProjectedWidth(rawDeltaX: number, originalWidth: number, isRtl: boolean): number {
  const deltaX = isRtl ? -rawDeltaX : rawDeltaX;
  const percentageDeltaX = deltaX / originalWidth;
  return Math.max(originalWidth + originalWidth * percentageDeltaX, 0);
}

/**
 * UI5WCR custom column resizing plugin — a fork of react-table v7's useResizeColumns hook.
 * Original source: https://github.com/TanStack/table/blob/v7/src/plugin-hooks/useResizeColumns.js
 *
 * This is a fork of react-table's `useResizeColumns` with the following changes:
 * - Deferred resize: CSS transform feedback during drag (zero renders), single state dispatch on mouseup
 * - RTL delta inversion inlined into the reducer (previously handled in `stateReducer.ts`)
 * - Removed `columnWidth` from reducer state destructuring — uses per-header width via `getProjectedWidth`
 * - Removed `ensurePluginOrder` check for `useAbsoluteLayout` (not used by AnalyticalTable)
 * - Removed `getLeafHeaders` (AnalyticalTable does not support grouped column headers)
 * - Moved `getHeaderProps` inline `position: relative` style to `.th` in `AnalyticalTable.module.css`
 * - Added `e.preventDefault()` on mousedown to prevent text selection in Firefox during drag
 * - Split mouse/touch into separate branches (touch needs `{ passive: false }` for `preventDefault()`)
 * - Added 3px dead zone and `data-active-resizer` attribute for double-click compatibility
 * - Removed `cursor: col-resize` style (AnalyticalTable provides its own resizer styling)
 * - Clamped resize width to `minWidth` in both the visual drag and the reducer (original clamps to 0)
 * - Fixed falsy `0` bug: replaced `||` with `??` in `useInstanceBeforeDimensions` width assignment
 */
export const useColumnResizing = (hooks: ReactTableHooks) => {
  // UI5WCR: replaced default RAF-throttled getResizerProps with deferred version
  hooks.getResizerProps = [deferredGetResizerProps];
  // UI5WCR: removed getHeaderProps push for `position: relative` — moved to CSS
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
  hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
};

useColumnResizing.pluginName = 'useColumnResizing';

const deferredGetResizerProps: ReactTableHooks['getResizerProps'][0] = (props, { instance, header }) => {
  const { dispatch } = instance;

  const startResize = (resizerElement: HTMLDivElement, startClientX: number, isTouchEvent: boolean) => {
    // UI5WCR: use header directly instead of getLeafHeaders (no grouped columns)
    const headerIdWidths = [[header.id, header.totalWidth, header.minWidth]];
    const columnWidth = header.totalWidth;
    const minWidth = header.minWidth;
    const columnId = header.id;
    const isRtl = instance.state.isRtl;

    dispatch({
      type: actions.columnStartResizing,
      columnId,
      columnWidth,
      headerIdWidths,
      clientX: startClientX,
    });

    // UI5WCR: capture original transform so it can be restored on mouseup
    const originalTransform = resizerElement.style.transform;

    // UI5WCR: data attribute replaces :active (which stops when cursor leaves the 5px resizer)
    resizerElement.dataset.activeResizer = '';
    let deltaX = 0;
    let isDragging = false;

    const finishResize = () => {
      delete resizerElement.dataset.activeResizer;
      // UI5WCR: restore transform to keep resizer centered (prevents double-click detection issues)
      resizerElement.style.transform = originalTransform;

      // UI5WCR: only dispatch columnResizing if user dragged past dead zone
      if (isDragging) {
        dispatch({ type: actions.columnResizing, clientX: startClientX + deltaX });
      }
      dispatch({ type: actions.columnDoneResizing });
    };

    // UI5WCR: 3px dead zone prevents transform shifts during double-click sequences
    const applyDrag = (clientX: number) => {
      deltaX = clientX - startClientX;
      // UI5WCR: clamp so resizer can't be dragged past minWidth boundary
      if (isRtl) {
        deltaX = Math.min(deltaX, columnWidth - minWidth);
      } else {
        deltaX = Math.max(deltaX, minWidth - columnWidth);
      }
      if (!isDragging && Math.abs(deltaX) < 3) {
        return;
      }
      isDragging = true;
      resizerElement.style.transform = `${originalTransform} translateX(${deltaX}px)`;
    };

    // UI5WCR: separate mouse/touch branches (touch needs { passive: false } for preventDefault)
    if (isTouchEvent) {
      const handleTouchMove = (moveEvent: globalThis.TouchEvent) => {
        if (moveEvent.cancelable) {
          moveEvent.preventDefault();
          moveEvent.stopPropagation();
        }
        applyDrag(moveEvent.touches[0].clientX);
      };

      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        finishResize();
      };

      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: false });
    } else {
      const handleMouseMove = (moveEvent: globalThis.MouseEvent) => {
        applyDrag(moveEvent.clientX);
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        finishResize();
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  return {
    ...props,
    role: 'separator',
    draggable: false,
    'aria-hidden': 'true',
    onMouseDown: (e: MouseEvent<HTMLDivElement>) => {
      // UI5WCR: prevent text selection during drag in Firefox
      e.preventDefault();
      startResize(e.currentTarget, e.clientX, false);
    },
    onTouchStart: (e: TouchEvent<HTMLDivElement>) => {
      // lets not respond to multiple touches (e.g. 2 or 3 fingers)
      if (e.touches && e.touches.length > 1) {
        return;
      }
      startResize(e.currentTarget, Math.round(e.touches[0].clientX), true);
    },
  };
};

const reducer: TableInstance['stateReducer'] = (state, action) => {
  if (action.type === actions.init) {
    return {
      columnResizing: {
        columnWidths: {},
      },
      ...state,
    };
  }

  if (action.type === actions.resetResize) {
    return {
      ...state,
      columnResizing: {
        columnWidths: {},
      },
    };
  }

  if (action.type === actions.columnStartResizing) {
    const { clientX, columnId, columnWidth, headerIdWidths } = action;

    return {
      ...state,
      columnResizing: {
        ...state.columnResizing,
        startX: clientX,
        headerIdWidths,
        columnWidth,
        isResizingColumn: columnId,
      },
    };
  }

  if (action.type === actions.columnResizing) {
    const { clientX } = action;
    // UI5WCR: removed `columnWidth` from destructuring — uses per-header width via getProjectedWidth
    const { startX, headerIdWidths = [] } = state.columnResizing;

    // UI5WCR: RTL delta inversion inlined (previously in stateReducer.ts)
    const rawDeltaX = clientX - startX;

    const newColumnWidths: Record<string, number> = {};

    headerIdWidths.forEach(([headerId, headerWidth, headerMinWidth]: [string, number, number]) => {
      // UI5WCR: clamp to minWidth (original only clamps to 0)
      const projected = getProjectedWidth(rawDeltaX, headerWidth, state.isRtl);
      newColumnWidths[headerId] = Math.max(projected, headerMinWidth);
    });

    return {
      ...state,
      columnResizing: {
        ...state.columnResizing,
        columnWidths: {
          ...state.columnResizing.columnWidths,
          ...newColumnWidths,
        },
      },
    };
  }

  if (action.type === actions.columnDoneResizing) {
    return {
      ...state,
      columnResizing: {
        ...state.columnResizing,
        startX: null,
        isResizingColumn: null,
      },
    };
  }
};

// Replaces react-table's internal `getFirstDefined` from `utils.js` (not publicly exported)
function getFirstDefined<T>(...args: (T | undefined)[]): T | undefined {
  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] !== 'undefined') {
      return args[i];
    }
  }
}

const useInstanceBeforeDimensions = (instance: TableInstance) => {
  const {
    flatHeaders,
    disableResizing,
    getHooks,
    state: { columnResizing },
  } = instance;

  const getInstance = useGetLatest(instance);

  flatHeaders.forEach((header: ColumnType) => {
    const canResize = getFirstDefined(
      header.disableResizing === true ? false : undefined,
      disableResizing === true ? false : undefined,
      true,
    );

    header.canResize = canResize;
    // UI5WCR: use ?? instead of || (original uses ||, which treats 0 as falsy)
    header.width = columnResizing.columnWidths[header.id] ?? header.originalWidth ?? header.width;
    header.isResizing = columnResizing.isResizingColumn === header.id;

    if (canResize) {
      header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
        instance: getInstance(),
        header,
      });
    }
  });
};

function useInstance(instance: TableInstance) {
  const { dispatch, autoResetResize = true, columns } = instance;

  const getAutoResetResize = useGetLatest(autoResetResize);
  useMountedLayoutEffect(() => {
    if (getAutoResetResize()) {
      dispatch({ type: actions.resetResize });
    }
  }, [columns]);

  const resetResizing = useCallback(() => dispatch({ type: actions.resetResize }), [dispatch]);

  Object.assign(instance, {
    resetResizing,
  });
}
