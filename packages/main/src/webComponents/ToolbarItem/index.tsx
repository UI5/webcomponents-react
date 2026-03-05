'use client';

import '@ui5/webcomponents/dist/ToolbarItem.js';
import type ToolbarItemOverflowBehavior from '@ui5/webcomponents/dist/types/ToolbarItemOverflowBehavior.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface ToolbarItemAttributes {
  /**
   * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
   * the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
   * @default "Default"
   */
  overflowPriority?: ToolbarItemOverflowBehavior | keyof typeof ToolbarItemOverflowBehavior;

  /**
   * Defines if the toolbar overflow popup should close upon interaction with the item.
   * It will close by default.
   * @default false
   */
  preventOverflowClosing?: boolean;
}

interface ToolbarItemDomRef extends Required<ToolbarItemAttributes>, Ui5DomRef {}

interface ToolbarItemPropTypes
  extends ToolbarItemAttributes, Omit<CommonProps, keyof ToolbarItemAttributes | 'children'> {
  /**
   * Wrapped component slot.
   *
   * **Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.
   *
   * __Supported Node Type/s:__ `Array<IToolbarItemContent>`
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `ToolbarItem` is a wrapper component used to integrate UI5 Web Components into the `Toolbar`.
 * It renders within the toolbar's shadow DOM and manages the lifecycle
 * and overflow behavior of its child component.
 *
 * ### Structure
 * The toolbar item wraps a single UI5 Web Component (such as CheckBox, Title, etc.) and handles:
 * - Overflow management (determining if the item should be displayed in the main toolbar or overflow popover)
 * - Automatic popover closing on interaction
 * - CSS custom state exposure for styling based on overflow state
 *
 * ### Usage
 * The `ToolbarItem` is typically used implicitly when adding components to a toolbar,
 * but specialized wrappers like `ToolbarButton` provide
 * component-specific functionality and should be preferred when available.
 *
 * __Note:__ This is a UI5 Web Component! [ToolbarItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarItem) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of __@ui5/webcomponents__.
 */
const ToolbarItem = withWebComponent<ToolbarItemPropTypes, ToolbarItemDomRef>(
  'ui5-toolbar-item',
  ['overflowPriority'],
  ['preventOverflowClosing'],
  [],
  [],
);

ToolbarItem.displayName = 'ToolbarItem';

export { ToolbarItem };
export type { ToolbarItemDomRef, ToolbarItemPropTypes };
