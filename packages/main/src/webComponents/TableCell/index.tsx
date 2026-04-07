'use client';

import '@ui5/webcomponents/dist/TableCell.js';
import type TableCellHorizontalAlign from '@ui5/webcomponents/dist/types/TableCellHorizontalAlign.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface TableCellAttributes {
  /**
   * Determines the horizontal alignment of table cells.
   * @default undefined
   */
  horizontalAlign?: TableCellHorizontalAlign | undefined | keyof typeof TableCellHorizontalAlign;

  /**
   * Defines whether the cell is visually merged with the cell directly above it.
   *
   * This is useful when consecutive cells in a column have the same value and should visually appear as a single merged cell.
   * Although the cell is visually merged with the previous one, its content must still be provided for accessibility purposes.
   * **Note:** This feature is disabled when cells are rendered as popin, and should remain `false` for interactive cell content.
   *
   * **Note:** Available since [v2.21.0](https://github.com/UI5/webcomponents/releases/tag/v2.21.0) of **@ui5/webcomponents**.
   * @default false
   */
  merged?: boolean;
}

interface TableCellDomRef extends Required<TableCellAttributes>, Ui5DomRef {}

interface TableCellPropTypes extends TableCellAttributes, Omit<CommonProps, keyof TableCellAttributes | 'children'> {
  /**
   * Defines the content of the component.
   *
   * __Supported Node Type/s:__ `Array<Node>`
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableCell` represents a cell inside of a `Table`.
 * It is tightly coupled to the `Table` and thus should only be used in the table component.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [TableCell UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableCell) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const TableCell = withWebComponent<TableCellPropTypes, TableCellDomRef>(
  'ui5-table-cell',
  ['horizontalAlign'],
  ['merged'],
  [],
  [],
);

TableCell.displayName = 'TableCell';

export { TableCell };
export type { TableCellDomRef, TableCellPropTypes };
