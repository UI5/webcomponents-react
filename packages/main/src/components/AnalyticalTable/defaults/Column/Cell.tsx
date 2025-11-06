import type { CellInstance } from '../../types/index.js';

export const Cell = (props: CellInstance) => {
  const {
    cell: { value = '', isGrouped },
    column,
    row,
    webComponentsReactProperties,
  } = props;
  let cellContent = `${value ?? ''}`;
  if (isGrouped) {
    cellContent += ` (${row.subRows.length})`;
  }

  return (
    <span
      id={`${webComponentsReactProperties.uniqueId}${column.id}${row.id}`}
      title={cellContent}
      className={webComponentsReactProperties.classes.tableText}
      data-column-id-cell-text={column.id}
      // VoiceOver announces blank because of `aria-hidden` although `aria-labelledby` is set on the `gridcell` element - this is a known bug and there's no workaround
      aria-hidden="true"
    >
      {cellContent}
    </span>
  );
};

Cell.displayName = 'CellContent';
