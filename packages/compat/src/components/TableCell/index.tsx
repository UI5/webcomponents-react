'use client';

import '@ui5/webcomponents-compat/dist/TableCell.js';
import { getCompatCustomElementsScopingSuffix } from '@ui5/webcomponents-compat/dist/utils/CompatCustomElementsScope.js';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import { withWebComponent } from '@ui5/webcomponents-react-base/withWebComponent';
import type { ReactNode } from 'react';

const compatScopingSuffix = getCompatCustomElementsScopingSuffix();
const tagSuffix = compatScopingSuffix ? `-${compatScopingSuffix}` : '';

interface TableCellAttributes {}

interface TableCellDomRef extends Required<TableCellAttributes>, Ui5DomRef {}

interface TableCellPropTypes extends TableCellAttributes, Omit<CommonProps, 'children'> {
  /**
   * Specifies the content of the component.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement> | undefined`
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableCell` component defines the structure of the data in a single `Table` cell.
 *
 * __Note:__ This is a UI5 Web Component! [TableCell UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/compat/TableCell) | [Repository](https://github.com/UI5/webcomponents)
 * @deprecated Deprecated as of version 2.12.0, use `@ui5/webcomponents/dist/TableCell.js` instead.
 */
const TableCell = withWebComponent<TableCellPropTypes, TableCellDomRef>(`ui5-table-cell${tagSuffix}`, [], [], [], []);

TableCell.displayName = 'TableCell';

export { TableCell };
export type { TableCellDomRef, TableCellPropTypes };
