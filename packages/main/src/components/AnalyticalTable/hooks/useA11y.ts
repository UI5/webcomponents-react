import type { KeyboardEventHandler } from 'react';
import { AnalyticalTableSelectionBehavior } from '../../../enums/AnalyticalTableSelectionBehavior.js';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import type { ReactTableHooks, TableInstance } from '../types/index.js';

interface UpdatedCellProptypes {
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  'aria-expanded'?: string;
  'aria-label'?: string;
  'aria-colindex': number;
  'aria-describedby'?: string;
  'aria-labelledby': string;
  role: string;
}

const setCellProps = (cellProps, { cell, instance }: { cell: TableInstance['cell']; instance: TableInstance }) => {
  const { column, row, value } = cell;
  const columnIndex = instance.visibleColumns.findIndex(({ id }) => id === column.id);
  const { alwaysShowSubComponent, renderRowSubComponent, selectionMode, selectionBehavior, a11yElementIds, uniqueId } =
    instance.webComponentsReactProperties;
  const updatedCellProps: UpdatedCellProptypes = {
    // aria index is 1 based, not 0
    'aria-colindex': columnIndex + 1,
    role: 'gridcell',
    // header label
    'aria-labelledby': `${uniqueId}${column.id} ${uniqueId}${column.id}${row.id}`,
  };

  const RowSubComponent = typeof renderRowSubComponent === 'function' ? renderRowSubComponent(row) : undefined;
  const rowIsExpandable = row.canExpand || (RowSubComponent && !alwaysShowSubComponent);

  const userCols = instance.visibleColumns.filter(
    ({ id }) =>
      id !== '__ui5wcr__internal_selection_column' &&
      id !== '__ui5wcr__internal_highlight_column' &&
      id !== '__ui5wcr__internal_navigation_column',
  );

  const isFirstUserCol = userCols[0]?.id === column.id || userCols[0]?.accessor === column.accessor;
  updatedCellProps['data-is-first-column'] = isFirstUserCol;

  if ((isFirstUserCol && rowIsExpandable) || (row.isGrouped && row.canExpand)) {
    updatedCellProps.onKeyDown = row.getToggleRowExpandedProps?.()?.onKeyDown;
    if (row.isExpanded) {
      updatedCellProps['aria-expanded'] = 'true';
      updatedCellProps['aria-describedby'] = ' ' + a11yElementIds.cellCollapseDescId;
    } else {
      updatedCellProps['aria-expanded'] = 'false';
      updatedCellProps['aria-describedby'] = ' ' + a11yElementIds.cellExpandDescId;
    }
  } else if (
    (selectionMode !== AnalyticalTableSelectionMode.None &&
      selectionBehavior !== AnalyticalTableSelectionBehavior.RowSelector &&
      !row.isGrouped) ||
    column.id === '__ui5wcr__internal_selection_column'
  ) {
    if (row.isSelected) {
      updatedCellProps['aria-selected'] = 'true';
      updatedCellProps['aria-describedby'] = ' ' + a11yElementIds.cellUnselectDescId;
    } else {
      updatedCellProps['aria-selected'] = 'false';
      updatedCellProps['aria-describedby'] = ' ' + a11yElementIds.cellSelectDescId;
    }
  }
  const { cellLabel } = cell.column;
  if (typeof cellLabel === 'function') {
    const cellHeaderLabel = column.headerLabel || (typeof column.Header === 'string' ? column.Header : '');
    const cellValueLabel = value || value === 0 ? `${value} ` : '';
    cell.cellLabel = `${cellHeaderLabel} ${cellValueLabel}`;
    updatedCellProps['aria-label'] = cellLabel({ cell, instance });
    updatedCellProps['aria-labelledby'] = undefined;
  }

  return [cellProps, updatedCellProps];
};

const setHeaderProps = (
  headerProps,
  { column, instance }: { column: TableInstance['column']; instance: TableInstance },
) => {
  const { translatableTexts, selectionMode } = instance.webComponentsReactProperties;

  if (!column) {
    return headerProps;
  }
  const isFiltered = column?.filterValue && column?.filterValue.length > 0;

  const updatedProps = {};
  updatedProps['aria-label'] = column.headerLabel ??= '';

  if (updatedProps['aria-label']) {
    updatedProps['aria-label'] += ' ';
  }

  if (column.isSorted) {
    updatedProps['aria-sort'] = column.isSortedDesc ? 'descending' : 'ascending';
  }
  if (isFiltered) {
    updatedProps['aria-label'] += translatableTexts.filteredA11yText;
  }
  if (column.isGrouped) {
    if (updatedProps['aria-label']) {
      updatedProps['aria-label'] += ` ${translatableTexts.groupedA11yText}`;
    } else {
      updatedProps['aria-label'] += translatableTexts.groupedA11yText;
    }
  }

  if (selectionMode === AnalyticalTableSelectionMode.Multiple && column.id === '__ui5wcr__internal_selection_column') {
    updatedProps['aria-label'] += instance.isAllRowsSelected
      ? translatableTexts.deselectAllA11yText
      : translatableTexts.selectAllA11yText;
  }

  if (column.id === '__ui5wcr__internal_selection_column') {
    updatedProps['aria-label'] += translatableTexts.selectionHeaderCellText;
  }

  if (column.id === '__ui5wcr__internal_highlight_column') {
    updatedProps['aria-label'] += translatableTexts.highlightHeaderCellText;
  }

  if (column.id === '__ui5wcr__internal_navigation_column') {
    updatedProps['aria-label'] += translatableTexts.navigationHeaderCellText;
  }

  updatedProps['aria-label'] ||= undefined;

  return [headerProps, { isFiltered, ...updatedProps }];
};

export const useA11y = (hooks: ReactTableHooks) => {
  hooks.getCellProps.push(setCellProps);
  hooks.getHeaderProps.push(setHeaderProps);
};
useA11y.pluginName = 'useA11y';
