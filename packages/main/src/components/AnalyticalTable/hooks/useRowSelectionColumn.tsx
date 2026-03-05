import { CssSizeVariablesNames } from '@ui5/webcomponents-react-base/CssSizeVariables';
import { AnalyticalTableSelectionBehavior } from '../../../enums/AnalyticalTableSelectionBehavior.js';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import { CheckBox } from '../../../webComponents/CheckBox/index.js';
import type { ReactTableHooks, TableInstance } from '../types/index.js';
/*
 * COMPONENTS
 */

const Header = (instance: TableInstance) => {
  const {
    getToggleAllRowsSelectedProps,
    rows,
    webComponentsReactProperties: { selectionMode, translatableTexts, classes },
  } = instance;

  if (selectionMode === AnalyticalTableSelectionMode.Single || !rows.length) {
    return null;
  }
  const checkBoxProps = getToggleAllRowsSelectedProps();
  return (
    <>
      <CheckBox
        {...checkBoxProps}
        tabIndex={-1}
        onChange={undefined}
        checked={checkBoxProps.indeterminate ? true : checkBoxProps.checked}
        aria-hidden="true"
      />
      <span className={classes.hiddenA11yText}>{translatableTexts.selectAllText}</span>
    </>
  );
};

const Cell = ({ row, webComponentsReactProperties: { selectionMode } }) => {
  if (selectionMode === AnalyticalTableSelectionMode.Single || row.isGrouped) {
    return null;
  }

  return (
    <CheckBox
      {...row.getToggleRowSelectedProps()}
      tabIndex={-1}
      aria-hidden="true"
      data-name="internal_selection_column"
    />
  );
};

const headerProps = (props, { instance }: { instance: TableInstance }) => {
  const {
    webComponentsReactProperties: {
      onRowSelect,
      selectionMode,
      translatableTexts: { selectAllText, deselectAllText },
    },
    toggleAllRowsSelected,
    isAllRowsSelected,
  } = instance;
  const style = { ...props.style, cursor: 'pointer', display: 'flex', justifyContent: 'center' };
  if (
    props.key === 'header___ui5wcr__internal_selection_column' &&
    selectionMode === AnalyticalTableSelectionMode.Multiple
  ) {
    const onClick = (e) => {
      if (typeof props.onClick === 'function') {
        props.onClick(e);
      }
      if (typeof onRowSelect === 'function') {
        instance.pendingSelectEvent = { event: e, row: undefined, selectAll: true };
      }
      toggleAllRowsSelected(!isAllRowsSelected);
    };

    const onKeyDown = (e) => {
      if (typeof props.onKeyDown === 'function') {
        props.onKeyDown(e);
      }
      if (e.code === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        if (e.code === 'Enter') {
          onClick(e);
        }
      }
    };

    const onKeyUp = (e) => {
      if (typeof props.onKeyUp === 'function') {
        props.onKeyUp(e);
      }
      if (e.code === 'Space') {
        e.preventDefault();
        onClick(e);
      }
    };

    return [props, { onClick, onKeyDown, onKeyUp, style, title: isAllRowsSelected ? deselectAllText : selectAllText }];
  }
  return props;
};

const visibleColumns = (
  currentVisibleColumns,
  { instance: { webComponentsReactProperties } }: { instance: TableInstance },
) => {
  if (
    webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.None ||
    webComponentsReactProperties.selectionBehavior === AnalyticalTableSelectionBehavior.RowOnly
  ) {
    return currentVisibleColumns;
  }

  const selectionColumn = currentVisibleColumns.find(({ id }) => id === '__ui5wcr__internal_selection_column');
  return [selectionColumn, ...currentVisibleColumns.filter(({ id }) => id !== '__ui5wcr__internal_selection_column')];
};
const columns = (currentColumns, { instance }: { instance: TableInstance }) => {
  const { webComponentsReactProperties } = instance;
  const { selectionMode, selectionBehavior, tableRef } = webComponentsReactProperties;

  if (
    selectionMode === AnalyticalTableSelectionMode.None ||
    selectionBehavior === AnalyticalTableSelectionBehavior.RowOnly
  ) {
    return currentColumns;
  }
  const tableSelectionColumnWidth =
    tableRef.current &&
    parseInt(
      getComputedStyle(tableRef.current).getPropertyValue(
        CssSizeVariablesNames.ui5WcrAnalyticalTableSelectionColumnWidth,
      ),
      10,
    );
  const selectionColumnWidth = !isNaN(tableSelectionColumnWidth) ? tableSelectionColumnWidth : 47;

  return [
    {
      id: '__ui5wcr__internal_selection_column',
      disableFilters: true,
      disableSortBy: true,
      disableGroupBy: true,
      disableResizing: true,
      disableDragAndDrop: true,
      width: selectionColumnWidth,
      minWidth: selectionColumnWidth,
      maxWidth: selectionColumnWidth,
      Header,
      Cell,
    },
    ...currentColumns,
  ];
};

const getCellProps = (props, { cell }: { cell: TableInstance['cell'] }) => {
  if (cell.column.id === '__ui5wcr__internal_selection_column') {
    const style = { ...props.style, cursor: 'pointer', justifyContent: 'center' };
    return [props, { style }];
  }
  return props;
};

export const useRowSelectionColumn = (hooks: ReactTableHooks) => {
  hooks.getCellProps.push(getCellProps);
  hooks.getHeaderProps.push(headerProps);
  hooks.columns.push(columns);
  hooks.visibleColumns.push(visibleColumns);
};
useRowSelectionColumn.pluginName = 'useRowSelectionColumn';
