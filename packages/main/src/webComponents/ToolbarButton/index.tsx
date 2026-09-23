'use client';

import '@ui5/webcomponents/dist/ToolbarButton.js';
import type { ToolbarButtonAccessibilityAttributes } from '@ui5/webcomponents/dist/ToolbarButton.js';
import type ButtonAccessibleRole from '@ui5/webcomponents/dist/types/ButtonAccessibleRole.js';
import type ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import type ToolbarItemOverflowBehavior from '@ui5/webcomponents/dist/types/ToolbarItemOverflowBehavior.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import { withWebComponent } from '@ui5/webcomponents-react-base';

interface ToolbarButtonAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   *
   * The following fields are supported:
   *
   * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
   * Accepts the following string values: `true` or `false`
   *
   * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
   * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
   *
   * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
   * Accepts a lowercase string value.
   * @default {}
   */
  accessibilityAttributes?: ToolbarButtonAccessibilityAttributes;

  /**
   * Defines the accessible description of the component.
   *
   * **Note:** Available since [v2.27.0](https://github.com/UI5/webcomponents/releases/tag/v2.27.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleDescription?: string | undefined;

  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines the ARIA role of the component.
   *
   * **Note:** Use `ButtonAccessibleRole.Link` role only with a press handler that performs navigation.
   * In all other scenarios the default button semantics are recommended.
   *
   * **Note:** Available since [v2.27.0](https://github.com/UI5/webcomponents/releases/tag/v2.27.0) of **@ui5/webcomponents**.
   * @default "Button"
   */
  accessibleRole?: ButtonAccessibleRole | keyof typeof ButtonAccessibleRole;

  /**
   * Defines the action design.
   * @default "Default"
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;

  /**
   * Defines if the action is disabled.
   *
   * **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the icon, displayed as graphical element within the component after the button text.
   *
   * **Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.
   * Usage of `endIcon` only should be avoided.
   *
   * The SAP-icons font provides numerous options.
   *
   * Example:
   * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  endIcon?: string | undefined;

  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
   * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

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

  /**
   * Defines whether the button text should only be displayed in the overflow popover.
   *
   * When set to `true`, the button appears as icon-only in the main toolbar,
   * but shows both icon and text when moved to the overflow popover.
   *
   * **Note:** This property only takes effect when the `text` property is also set.
   *
   * **Note:** Available since [v2.17.0](https://github.com/UI5/webcomponents/releases/tag/v2.17.0) of **@ui5/webcomponents**.
   * @default false
   */
  showOverflowText?: boolean;

  /**
   * Button text
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the tooltip of the component.
   *
   * **Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines the width of the button.
   *
   * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
   * @default undefined
   */
  width?: string | undefined;
}

interface ToolbarButtonDomRef extends Required<ToolbarButtonAttributes>, Ui5DomRef {}

interface ToolbarButtonPropTypes
  extends ToolbarButtonAttributes, Omit<CommonProps, keyof ToolbarButtonAttributes | 'onClick'> {
  /**
   * Fired when the component is activated either with a
   * mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled`
   * property is set to `true`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onClick?: (event: Ui5CustomEvent<ToolbarButtonDomRef>) => void;
}

/**
 * The `ToolbarButton` represents an abstract action,
 * used in the `Toolbar`.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [ToolbarButton UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarButton) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.17.0](https://github.com/UI5/webcomponents/releases/tag/v1.17.0) of __@ui5/webcomponents__.
 * @abstract
 */
const ToolbarButton = withWebComponent<ToolbarButtonPropTypes, ToolbarButtonDomRef>(
  'ui5-toolbar-button',
  [
    'accessibilityAttributes',
    'accessibleDescription',
    'accessibleName',
    'accessibleNameRef',
    'accessibleRole',
    'design',
    'endIcon',
    'icon',
    'overflowGroup',
    'overflowPriority',
    'text',
    'tooltip',
    'width',
  ],
  ['disabled', 'preventOverflowClosing', 'showOverflowText'],
  [],
  ['click'],
);

ToolbarButton.displayName = 'ToolbarButton';

export { ToolbarButton };
export type { ToolbarButtonDomRef, ToolbarButtonPropTypes };
