import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import type { ColumnType, ReactTableHooks, TableInstance } from '../types/index.js';

// Custom drag data type set on column drags so they can be distinguished from foreign drags (e.g. files, text).
const COLUMN_DND_TYPE = 'application/x-ui5wcr-columndnd';
const isColumnDrag = (e) => !!e.dataTransfer?.types?.includes(COLUMN_DND_TYPE);

function getHeaderProps(
  props: Record<string, unknown>,
  {
    instance: { dispatch, state, columns, setColumnOrder, webComponentsReactProperties },
    column,
  }: { instance: TableInstance; column: ColumnType },
) {
  const { columnOrder, columnResizing, isRtl, dndColumn } = state;
  const { onColumnsReorder } = webComponentsReactProperties;
  const isStickyTarget = column?.sticky === 'start';

  const handleDragStart = (e) => {
    if (columnResizing.isResizingColumn || !e.target.draggable) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('text', e.currentTarget.dataset.columnId);
    e.dataTransfer.setData(COLUMN_DND_TYPE, '');
  };

  const handleDragOver = (e) => {
    if (isStickyTarget || !isColumnDrag(e)) {
      return;
    }
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    if (isStickyTarget || !isColumnDrag(e)) {
      return;
    }
    dispatch({ type: 'COLUMN_DND_START', payload: e.currentTarget.dataset.columnId });
  };

  const handleDragLeave = (e) => {
    // dragleave also fires when moving onto a child element; ignore those to avoid clearing the highlight prematurely.
    if (e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    dispatch({ type: 'COLUMN_DND_END' });
  };

  const handleOnDragEnd = () => {
    dispatch({ type: 'COLUMN_DND_END' });
  };

  const handleOnDrop = (e) => {
    dispatch({ type: 'COLUMN_DND_END' });
    if (isStickyTarget) {
      return;
    }

    if (!isColumnDrag(e)) {
      return;
    }

    const droppedColId = e.currentTarget.dataset.columnId;
    const draggedColId = e.dataTransfer.getData('text');
    if (droppedColId === draggedColId) return;

    // Reconciliation uses same approach as visibleColumns in plugin-hooks/useColumnOrder.js of react-table
    const columnOrderCopy = [...columnOrder];
    const columnsCopy = [...columns];
    const columnsInOrder: ColumnType[] = [];

    while (columnsCopy.length && columnOrderCopy.length) {
      const targetId = columnOrderCopy.shift();
      const foundIndex = columnsCopy.findIndex((col) => col.id === targetId);
      if (foundIndex > -1) {
        columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
      }
    }
    const internalColumnOrder = [...columnsInOrder, ...columnsCopy].map((col) => col.id);
    const droppedColIdx = internalColumnOrder.findIndex((col) => col === droppedColId);
    const draggedColIdx = internalColumnOrder.findIndex((col) => col === draggedColId);

    const tempCols = [...internalColumnOrder];
    const targetIndex = droppedColIdx > draggedColIdx ? (isRtl ? droppedColIdx : droppedColIdx - 1) : droppedColIdx;

    tempCols.splice(targetIndex, 0, tempCols.splice(draggedColIdx, 1)[0]);
    setColumnOrder(tempCols);

    if (typeof onColumnsReorder === 'function') {
      const columnsNewOrder = tempCols.map((tempColId) => columns.find((col) => col.id === tempColId));
      onColumnsReorder(
        enrichEventWithDetails(e, {
          columnsNewOrder,
          column: columns[draggedColIdx],
        }),
      );
    }
  };

  return [
    props,
    {
      onDragStart: handleDragStart,
      onDragEnter: handleDragEnter,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDragEnd: handleOnDragEnd,
      onDrop: handleOnDrop,
      dragOver: dndColumn === props.id,
    },
  ];
}

export function useColumnDragAndDrop(hooks: ReactTableHooks) {
  hooks.getHeaderProps.push(getHeaderProps);
}
useColumnDragAndDrop.pluginName = 'useColumnDragAndDrop';
