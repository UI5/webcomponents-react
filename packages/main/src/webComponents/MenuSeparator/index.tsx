'use client';

import '@ui5/webcomponents/dist/MenuSeparator.js';
import type { ListItemBaseClickEventDetail } from '@ui5/webcomponents/dist/ListItemBase.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface MenuSeparatorAttributes {}

interface MenuSeparatorDomRef extends Required<MenuSeparatorAttributes>, Ui5DomRef {}

interface MenuSeparatorPropTypes extends MenuSeparatorAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled` property is set to `true`.
   *
   * **Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<MenuSeparatorDomRef, ListItemBaseClickEventDetail>) => void;
}

/**
 * The `MenuSeparator` represents a horizontal line to separate menu items inside a `Menu`.
 *
 * __Note:__ This is a UI5 Web Component! [MenuSeparator UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/MenuSeparator) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const MenuSeparator = withWebComponent<MenuSeparatorPropTypes, MenuSeparatorDomRef>(
  'ui5-menu-separator',
  [],
  [],
  [],
  ['click'],
);

MenuSeparator.displayName = 'MenuSeparator';

export { MenuSeparator };
export type { MenuSeparatorDomRef, MenuSeparatorPropTypes };
