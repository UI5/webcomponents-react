'use client';

import '@ui5/webcomponents/dist/ToolbarItem.js';
import type ToolbarItemOverflowBehavior from '@ui5/webcomponents/dist/types/ToolbarItemOverflowBehavior.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface ToolbarItemAttributes {
  /**
   * Co-overflow tag. Items in the same `Toolbar` whose `overflowGroup` is the same
   * non-empty string overflow as one atomic unit: either all visible in the bar, or all
   * in the overflow popover, never split. The empty string (the default) means "no group" —
   * the item participates in overflow independently.
   *
   * The tag is a free-form, case-sensitive string label (e.g. `"filters"`, `"search"`). It is
   * layout-only and carries no ARIA, keyboard, or visual-cluster semantics. Items in a
   * non-empty group must have `overflowPriority = "Default"`; `AlwaysOverflow` and
   * `NeverOverflow` are forbidden inside a group — setting one of those on a grouped item
   * emits a one-shot `console.warn` and the item's priority is treated as `Default` for
   * the layout pass. Spacers (`ToolbarSpacer`) do not participate in grouping; setting
   * a non-empty `overflowGroup` on a spacer emits a one-shot `console.warn` and the spacer's
   * existing overflow behavior is unchanged.
   *
   * The visible bar always preserves slot order — ungrouped items between group members
   * keep their slot positions and the toolbar never reorders DOM children. In the popover
   * group members appear adjacent in slot order.
   *
   * **Note:** Available since [v2.27.0](https://github.com/UI5/webcomponents/releases/tag/v2.27.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  overflowGroup?: string | undefined;

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
  ['overflowGroup', 'overflowPriority'],
  ['preventOverflowClosing'],
  [],
  [],
);

ToolbarItem.displayName = 'ToolbarItem';

export { ToolbarItem };
export type { ToolbarItemDomRef, ToolbarItemPropTypes };
