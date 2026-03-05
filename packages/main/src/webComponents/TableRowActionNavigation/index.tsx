'use client';

import '@ui5/webcomponents/dist/TableRowActionNavigation.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface TableRowActionNavigationAttributes {
  /**
* Defines the interactive state of the navigation action.
* @default false
* @deprecated As of version 2.20.0, the navigation icon is deprecated.
For better accessibility, the interactive mode which renders a button, must be used instead. To handle the action, attach a listener to the `click` event.
If the navigation should be triggered when a row is pressed, set the row's `interactive` property and use the `row-click` event of the `ui5-table`.
This property will be removed in a future release.
*/
  interactive?: boolean;

  /**
   * Defines the visibility of the row action.
   *
   * **Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.
   * @default false
   */
  invisible?: boolean;
}

interface TableRowActionNavigationDomRef extends Required<TableRowActionNavigationAttributes>, Ui5DomRef {}

interface TableRowActionNavigationPropTypes
  extends TableRowActionNavigationAttributes, Omit<CommonProps, keyof TableRowActionNavigationAttributes | 'onClick'> {
  /**
   * Fired when a row action is clicked.
   *
   * **Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<TableRowActionNavigationDomRef>) => void;
}

/**
 * The `TableRowActionNavigation` component defines a navigation action for table rows.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [TableRowActionNavigation UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableRowActionNavigation) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of __@ui5/webcomponents__.
 */
const TableRowActionNavigation = withWebComponent<TableRowActionNavigationPropTypes, TableRowActionNavigationDomRef>(
  'ui5-table-row-action-navigation',
  [],
  ['interactive', 'invisible'],
  [],
  ['click'],
);

TableRowActionNavigation.displayName = 'TableRowActionNavigation';

export { TableRowActionNavigation };
export type { TableRowActionNavigationDomRef, TableRowActionNavigationPropTypes };
