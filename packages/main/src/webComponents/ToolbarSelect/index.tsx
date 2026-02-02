'use client';

import '@ui5/webcomponents/dist/ToolbarSelect.js';
import type { ToolbarSelectChangeEventDetail } from '@ui5/webcomponents/dist/ToolbarSelect.js';
import type ToolbarItemOverflowBehavior from '@ui5/webcomponents/dist/types/ToolbarItemOverflowBehavior.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';

interface ToolbarSelectAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the select.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
   * the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
   * @default "Default"
   */
  overflowPriority?: ToolbarItemOverflowBehavior | keyof typeof ToolbarItemOverflowBehavior;

  /**
   * Defines if the toolbar overflow popup should close upon intereaction with the item.
   * It will close by default.
   * @default false
   */
  preventOverflowClosing?: boolean;

  /**
   * Defines the value of the component:
   *
   * **Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.
   */
  value?: string | undefined;

  /**
   * Defines the value state of the component.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;

  /**
   * Defines the width of the select.
   *
   * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
   * @default undefined
   */
  width?: string | undefined;
}

interface ToolbarSelectDomRef extends Required<ToolbarSelectAttributes>, Ui5DomRef {}

interface ToolbarSelectPropTypes
  extends
    ToolbarSelectAttributes,
    Omit<CommonProps, keyof ToolbarSelectAttributes | 'children' | 'label' | 'onChange' | 'onClose' | 'onOpen'> {
  /**
   * Defines the component options.
   *
   * **Note:** Only one selected option is allowed.
   * If more than one option is defined as selected, the last one would be considered as the selected one.
   *
   * **Note:** Use the `ToolbarSelectOption` component to define the desired options.
   *
   * __Supported Node Type/s:__ `Array<ToolbarSelectOption>`
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the HTML element that will be displayed in the component input part,
   * representing the selected option.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="label"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  label?: UI5WCSlotsNode;
  /**
   * Fired when the selected option changes.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onChange?: (event: Ui5CustomEvent<ToolbarSelectDomRef, ToolbarSelectChangeEventDetail>) => void;

  /**
   * Fired after the component's dropdown menu closes.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onClose?: (event: Ui5CustomEvent<ToolbarSelectDomRef>) => void;

  /**
   * Fired after the component's dropdown menu opens.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onOpen?: (event: Ui5CustomEvent<ToolbarSelectDomRef>) => void;
}

/**
 * The `ToolbarSelect` component is used to create a toolbar drop-down list.
 * The items inside the `ToolbarSelect` define the available options by using the `ToolbarSelectOption` component.
 *
 *
 *
 * `import "@ui5/webcomponents/dist/ToolbarSelectOption.js";` (comes with `ToolbarSelect`)
 *
 * __Note:__ This is a UI5 Web Component! [ToolbarSelect UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSelect) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.17.0](https://github.com/UI5/webcomponents/releases/tag/v1.17.0) of __@ui5/webcomponents__.
 * @abstract
 */
const ToolbarSelect = withWebComponent<ToolbarSelectPropTypes, ToolbarSelectDomRef>(
  'ui5-toolbar-select',
  ['accessibleName', 'accessibleNameRef', 'overflowPriority', 'value', 'valueState', 'width'],
  ['disabled', 'preventOverflowClosing'],
  ['label'],
  ['change', 'close', 'open'],
);

ToolbarSelect.displayName = 'ToolbarSelect';

export { ToolbarSelect };
export type { ToolbarSelectDomRef, ToolbarSelectPropTypes };
