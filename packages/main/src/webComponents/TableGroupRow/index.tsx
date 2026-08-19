'use client';

import '@ui5/webcomponents/dist/TableGroupRow.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface TableGroupRowAttributes {
  /**
   * Defines the interactive state of the row.
   * @default false
   */
  interactive?: boolean;

  /**
   * Defines whether the row is movable.
   *
   * **Note:** Available since [v2.6.0](https://github.com/UI5/webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents**.
   * @default false
   */
  movable?: boolean;

  /**
   * Defines the navigated state of the row.
   * @default false
   */
  navigated?: boolean;

  /**
   * Defines the 0-based position of the row related to the total number of rows within the table when the `TableVirtualizer` feature is used.
   *
   * **Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  position?: number | undefined;

  /**
   * Unique identifier of the row.
   *
   * **Note:** For selection features to work properly, this property is mandatory, and its value must not contain spaces.
   * @default undefined
   */
  rowKey?: string | undefined;
}

interface TableGroupRowDomRef extends Required<TableGroupRowAttributes>, Ui5DomRef {}

interface TableGroupRowPropTypes
  extends TableGroupRowAttributes, Omit<CommonProps, keyof TableGroupRowAttributes | 'actions' | 'children'> {
  /**
   * Defines the actions of the component.
   *
   * **Note:** Use `TableRowAction` or `TableRowActionNavigation` for the intended design.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="actions"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.
   *
   * __Supported Node Type/s:__ `Array<TableRowActionBase>`
   */
  actions?: UI5WCSlotsNode;

  /**
   * Defines the cells of the component.
   *
   * **Note:** Use `TableCell` for the intended design.
   *
   * __Supported Node Type/s:__ `Array<TableCell>`
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableGroupRow` component represents a group header row in the `Table`.
 * It is used to visually group rows and spans across all visible table columns.
 *
 * ### Usage
 *
 * The `TableGroupRow` is placed as a direct child of `Table`, alongside `TableRow` elements.
 * Rows following a group row are considered part of that group until the next group row.
 *
 * ```html
 * <Table>
 *   <TableHeaderRow>...</TableHeaderRow>
 *   <TableGroupRow>Country: Germany</TableGroupRow>
 *   <TableRow>...</TableRow>
 *   <TableRow>...</TableRow>
 *   <TableGroupRow>Country: France</TableGroupRow>
 *   <TableRow>...</TableRow>
 * </Table>
 * ```
 *
 * ### Unsupported Features
 *
 * The following features of `TableRow` are currently not supported by `TableGroupRow` and have no effect:
 *
 * - **Cells** (`cells` slot): Group rows render a single spanning cell with a text. Any slotted `TableCell` elements are ignored.
 * - **Actions** (`actions` slot): Row actions such as `TableRowAction` or `TableRowActionNavigation` are not rendered.
 * - **Navigation** (`navigated` property): The navigated indicator is not rendered on group rows.
 * - **Interactive** (`interactive` property): Group rows do not support click/activation behavior.
 * - **Selection** (`rowKey` property`): Group rows cannot be selected. They are excluded from select all and range selection operations.
 * - **Virtualizer** (`position` property`): Group rows are not supported by the `TableVirtualizer`.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [TableGroupRow UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableGroupRow) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of __@ui5/webcomponents__.
 */
const TableGroupRow = withWebComponent<TableGroupRowPropTypes, TableGroupRowDomRef>(
  'ui5-table-group-row',
  ['position', 'rowKey'],
  ['interactive', 'movable', 'navigated'],
  ['actions'],
  [],
);

TableGroupRow.displayName = 'TableGroupRow';

export { TableGroupRow };
export type { TableGroupRowDomRef, TableGroupRowPropTypes };
