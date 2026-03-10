import { useI18nBundle } from '@ui5/webcomponents-react-base';
import type { Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { FocusEventHandler, KeyboardEventHandler } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { INCLUDES_X, MOVE_TO_CONTENT_F2 } from '../../../i18n/i18n-defaults.js';
import type { CellInstance, CellType, ColumnType, ReactTableHooks, TableInstance } from '../types/index.js';
import { NAVIGATION_KEYS } from '../util/index.js';

const NON_STANDARD_INTERACTIVE_ELEMENTS = [
  '[ui5-checkbox]',
  '[ui5-switch]',
  '[ui5-radio-button]',
  '[ui5-rating-indicator]',
  '[ui5-segmented-button]',
  '[ui5-select]',
  '[ui5-slider]',
  '[ui5-split-button]',
  '[ui5-icon][mode="Interactive"]',
];

/**
 * A plugin hook that enables F2-based cell editing for interactive elements inside a cell.
 *
 * To __ensure the hook works correctly__, make sure that:
 *
 * - Each column containing interactive elements has the `interactiveElementName` property set. __Note:__ This property is also used to describe the cell's content for screen readers.
 * - The callback Ref returned by `useF2CellEdit.useCallbackRef` is attached to every interactive element within the cell.
 *
 * It manages focus, keyboard navigation, and `tabindex` for cells with interactive content:
 * - Pressing `F2` moves focus between the cell container and its first interactive element.
 * - Pressing `Tab` on a focused header cell moves focus to the body cell in the same column at the last focused body row (or the first row if none was focused).
 * - Pressing `Shift+Tab` on a focused body cell moves focus back to the header cell of the same column.
 * - Updates the cell's `aria-label` with the interactive element's name for accessibility.
 * - Prevents standard navigation keys from interfering when editing a cell.
 *
 * @example
 * ```tsx
 * import type {
 *   AnalyticalTableCellInstance,
 *   AnalyticalTableColumnDefinition,
 *   InputDomRef,
 *   AnalyticalTablePropTypes,
 * } from '@ui5/webcomponents-react';
 * import { AnalyticalTableHooks, AnalyticalTable, Input } from '@ui5/webcomponents-react';
 *
 * const columns: AnalyticalTableColumnDefinition[] = [
 *   {
 *     Header: 'Input',
 *     id: 'input',
 *     Cell: (props: AnalyticalTableCellInstance) => {
 *       const callbackRef = AnalyticalTableHooks.useF2CellEdit.useCallbackRef<InputDomRef>(props);
 *       return <Input ref={callbackRef} />;
 *     },
 *     interactiveElementName: 'Input',
 *   },
 * ];
 *
 * const tableHooks: AnalyticalTablePropTypes['tableHooks'] = [AnalyticalTableHooks.useF2CellEdit];
 *
 * function TableWithInput() {
 *   return <AnalyticalTable data={data} columns={columns} tableHooks={tableHooks} />;
 * }
 * ```
 *
 * @since 2.14.0
 */
export const useF2CellEdit = (hooks: ReactTableHooks) => {
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const lastFocusedBodyRowRef = useRef<number | null>(null);

  const setCellProps = useCallback(
    (props, { cell, instance }: { cell: CellType; instance: TableInstance }) => {
      const { dispatch, state, webComponentsReactProperties } = instance;
      const { tableRef } = webComponentsReactProperties;
      const { interactiveElementName } = cell.column;
      const inputName =
        typeof interactiveElementName === 'function' ? interactiveElementName(cell) : interactiveElementName;
      const ariaLabel =
        (interactiveElementName ? i18nBundle.getText(INCLUDES_X, inputName) : '') + ' ' + props['aria-label'];

      const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (state.cellContentTabIndex === 0 && NAVIGATION_KEYS.has(e.key) && !e.key.includes('Arrow')) {
          e.preventDefault();
        }

        if (e.key === 'F2') {
          if (e.currentTarget === e.target && interactiveElementName) {
            const interactiveElement = findFirstFocusableInside(e.target as HTMLElement);
            if (interactiveElement) {
              dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: 0 });
              e.currentTarget.tabIndex = -1;
              requestAnimationFrame(() => {
                interactiveElement.focus();
              });
            }
          }
          if (e.currentTarget !== e.target) {
            dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: -1 });
            e.currentTarget.tabIndex = 0;
            e.currentTarget.focus();
          }
        }

        // Shift+Tab on body cell -> focus same column header cell
        if (e.key === 'Tab' && e.shiftKey && e.currentTarget === e.target) {
          const rowIndex = parseInt(e.currentTarget.dataset.rowIndex, 10);
          const columnIndex = parseInt(e.currentTarget.dataset.columnIndex, 10);

          if (rowIndex > 0) {
            lastFocusedBodyRowRef.current = rowIndex;
            const headerCell: HTMLElement | null = tableRef.current.querySelector(
              `div[data-column-index="${columnIndex}"][data-row-index="0"]`,
            );
            if (headerCell) {
              e.preventDefault();
              e.currentTarget.tabIndex = -1;
              headerCell.tabIndex = 0;
              headerCell.focus();
            }
          }
        }
      };

      const handleFocus: FocusEventHandler<HTMLDivElement> = (e) => {
        if (typeof props.onFocus === 'function') {
          props.onFocus(e);
        }

        if (e.currentTarget !== e.target) {
          dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: 0 });
        } else {
          dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: -1 });
        }

        const rowIndex = parseInt(e.currentTarget.dataset.rowIndex, 10);
        if (rowIndex > 0) {
          lastFocusedBodyRowRef.current = rowIndex;
        }
      };

      return [props, { onKeyDown: handleKeyDown, onFocus: handleFocus, 'aria-label': ariaLabel }];
    },
    [i18nBundle],
  );

  const setHeaderProps = useCallback((headerProps, { instance }: { instance: TableInstance; column: ColumnType }) => {
    const { webComponentsReactProperties } = instance;
    const { tableRef } = webComponentsReactProperties;

    // Tab on header cell -> focus same column body cell
    const handleKeyDown: KeyboardEventHandler<HTMLElement> = (e) => {
      if (typeof headerProps.onKeyDown === 'function') {
        headerProps.onKeyDown(e);
      }

      if (e.key === 'Tab' && !e.shiftKey && e.currentTarget === e.target) {
        const columnIndex = parseInt(e.currentTarget.dataset.columnIndex, 10);
        const targetRowIndex = lastFocusedBodyRowRef.current ?? 1;
        let targetCell: HTMLElement | null = tableRef.current.querySelector(
          `div[data-column-index="${columnIndex}"][data-row-index="${targetRowIndex}"]`,
        );
        if (!targetCell) {
          targetCell = tableRef.current.querySelector(
            `div[data-column-index="${columnIndex}"][data-visible-row-index="1"]`,
          );
        }
        if (targetCell) {
          e.preventDefault();
          e.currentTarget.tabIndex = -1;
          targetCell.tabIndex = 0;
          targetCell.focus();
          targetCell.scrollIntoView({ block: 'nearest' });
        }
      }
    };

    return [headerProps, { onKeyDown: handleKeyDown }];
  }, []);

  const setTableProps = useCallback(
    (tableProps) => {
      const f2Description = i18nBundle.getText(MOVE_TO_CONTENT_F2);
      const existingDescription = tableProps['aria-description'];
      const ariaDescription = existingDescription ? `${existingDescription} ${f2Description}` : f2Description;

      return [tableProps, { 'aria-description': ariaDescription }];
    },
    [i18nBundle],
  );

  hooks.getTableProps.push(setTableProps);
  hooks.getCellProps.push(setCellProps);
  hooks.getHeaderProps.push(setHeaderProps);
  hooks.stateReducers.push(stateReducer);
  hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
};
useF2CellEdit.pluginName = 'useF2CellEdit';

/**
 * Returns a callback ref for a cell's interactive element, setting its `tabindex` based on the cell state.
 *
 * **Must be attached to every interactive element inside the cell!**
 *
 * @param props - The table cell props containing state.
 *
 * @example
 * ```tsx
 *  Cell: (props: AnalyticalTableCellInstance) => {
 *    const callbackRef = useF2CellEdit.useCallbackRef(props);
 *    return <Input ref={callbackRef} />;
 *  },
 * ```
 */
useF2CellEdit.useCallbackRef = <T extends HTMLElement = HTMLElement>(props: CellInstance) => {
  const cellContentTabIndex = props.state.cellContentTabIndex === -1 ? '-1' : '0';
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useCallback(
    (node: T | null) => {
      if (node) {
        const setTabIndex = (el: Element | Ui5DomRef) => {
          if (typeof (el as Ui5DomRef).getFocusDomRefAsync === 'function') {
            void (el as Ui5DomRef)
              .getFocusDomRefAsync()
              .then((resolved) => {
                if (resolved && resolved !== el) {
                  setTabIndex(resolved);
                } else {
                  el.setAttribute('tabindex', cellContentTabIndex);
                }
              })
              .catch(() => {
                // fail silently
              });
          } else {
            el.setAttribute('tabindex', cellContentTabIndex);
          }
        };

        setTabIndex(node);
      }
    },
    [cellContentTabIndex],
  );
};

const stateReducer: TableInstance['stateReducer'] = (state, action, _prevState) => {
  const { payload, type } = action;

  if (type === 'CELL_CONTENT_TAB_INDEX') {
    return { ...state, cellContentTabIndex: payload };
  }
  return state;
};

function findFirstFocusableInside(element: HTMLElement) {
  if (!element) return null;

  function recursiveFindInteractiveElement(el) {
    for (const child of el.children) {
      const style = getComputedStyle(child);
      if (child.disabled || style.display === 'none' || style.visibility === 'hidden') {
        continue;
      }

      const focusableSelectors = [
        'a[href]',
        'button',
        'input',
        'textarea',
        'select',
        '[tabindex]:not([tabindex="-1"])',
        ...NON_STANDARD_INTERACTIVE_ELEMENTS,
      ];

      if (child.matches(focusableSelectors.join(','))) {
        return child;
      }

      if (child.shadowRoot) {
        const shadowFocusable = recursiveFindInteractiveElement(child.shadowRoot);
        if (shadowFocusable) return shadowFocusable;
      }

      const nestedFocusable = recursiveFindInteractiveElement(child);
      if (nestedFocusable) return nestedFocusable;
    }
    return null;
  }

  return recursiveFindInteractiveElement(element);
}

/**
 * Init `cellContentTabIndex` if the plugin hook is used.
 */
function useInstanceBeforeDimensions(instance: TableInstance) {
  const { dispatch } = instance;
  useEffect(() => {
    dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: -1 });
  }, [dispatch]);
}
