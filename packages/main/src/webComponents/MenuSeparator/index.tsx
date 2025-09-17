'use client';

import '@ui5/webcomponents/dist/MenuSeparator.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface MenuSeparatorAttributes {}

interface MenuSeparatorDomRef extends Required<MenuSeparatorAttributes>, Ui5DomRef {}

interface MenuSeparatorPropTypes extends MenuSeparatorAttributes, CommonProps {}

/**
 * The `MenuSeparator` represents a horizontal line to separate menu items inside a `Menu`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/UI5/webcomponents) | [Documentation](https://ui5.github.io/webcomponents/)
 *
 * @since [2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const MenuSeparator = withWebComponent<MenuSeparatorPropTypes, MenuSeparatorDomRef>(
  'ui5-menu-separator',
  [],
  [],
  [],
  [],
);

MenuSeparator.displayName = 'MenuSeparator';

export { MenuSeparator };
export type { MenuSeparatorDomRef, MenuSeparatorPropTypes };
