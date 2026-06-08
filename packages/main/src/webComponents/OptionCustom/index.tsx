'use client';

import '@ui5/webcomponents/dist/OptionCustom.js';
import type { ListItemBaseClickEventDetail } from '@ui5/webcomponents/dist/ListItemBase.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface OptionCustomAttributes {
  /**
   * Defines the text, displayed inside the `Select` input filed
   * when the option gets selected.
   * @default undefined
   */
  displayText?: string | undefined;

  /**
   * Defines the selected state of the component.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the tooltip of the option.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines the value of the `Select` inside an HTML Form element when this component is selected.
   * For more information on HTML Form support, see the `name` property of `Select`.
   * @default undefined
   */
  value?: string | undefined;
}

interface OptionCustomDomRef extends Required<OptionCustomAttributes>, Ui5DomRef {}

interface OptionCustomPropTypes
  extends OptionCustomAttributes, Omit<CommonProps, keyof OptionCustomAttributes | 'children' | 'onClick'> {
  /**
   * Defines the content of the component.
   *
   * __Supported Node Type/s:__ `Array<Node>`
   */
  children?: ReactNode | ReactNode[];
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
  onClick?: (event: Ui5CustomEvent<OptionCustomDomRef, ListItemBaseClickEventDetail>) => void;
}

/**
 * The `OptionCustom` component defines a custom content of an option in the `Select`.
 * A component to be the same way as the standard `Option`.
 * The component accepts arbitrary HTML content to allow full customization.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [OptionCustom UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/OptionCustom) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const OptionCustom = withWebComponent<OptionCustomPropTypes, OptionCustomDomRef>(
  'ui5-option-custom',
  ['displayText', 'tooltip', 'value'],
  ['selected'],
  [],
  ['click'],
);

OptionCustom.displayName = 'OptionCustom';

export { OptionCustom };
export type { OptionCustomDomRef, OptionCustomPropTypes };
