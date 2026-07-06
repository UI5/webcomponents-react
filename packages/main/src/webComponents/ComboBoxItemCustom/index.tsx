'use client';

import '@ui5/webcomponents/dist/ComboBoxItemCustom.js';
import type { ComboBoxItemCustomClickEventDetail } from '@ui5/webcomponents/dist/ComboBoxItemCustom.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface ComboBoxItemCustomAttributes {
  /**
   * Defines the text of the component.
   * Used for filtering, autocomplete, and mobile rendering.
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the value of the component.
   * Used for programmatic selection via the `selectedValue` property.
   * @default undefined
   */
  value?: string | undefined;
}

interface ComboBoxItemCustomDomRef extends Required<ComboBoxItemCustomAttributes>, Ui5DomRef {}

interface ComboBoxItemCustomPropTypes
  extends ComboBoxItemCustomAttributes, Omit<CommonProps, keyof ComboBoxItemCustomAttributes | 'children' | 'onClick'> {
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
   * **Note:** Available since [v2.24.0](https://github.com/UI5/webcomponents/releases/tag/v2.24.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<ComboBoxItemCustomDomRef, ComboBoxItemCustomClickEventDetail>) => void;
}

/**
 * The `ComboBoxItemCustom` is a combobox item component
 * that allows placing custom content inside a combobox item.
 * The `text` property is used for filtering and auto-complete.
 * For highlighting functionality, see `@ui5/webcomponents-base/dist/util/generateHighlightedMarkup.js`.
 *
 * __Note:__ This is a UI5 Web Component! [ComboBoxItemCustom UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ComboBoxItemCustom) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.24.0](https://github.com/UI5/webcomponents/releases/tag/v2.24.0) of __@ui5/webcomponents__.
 */
const ComboBoxItemCustom = withWebComponent<ComboBoxItemCustomPropTypes, ComboBoxItemCustomDomRef>(
  'ui5-cb-item-custom',
  ['text', 'value'],
  [],
  [],
  ['click'],
);

ComboBoxItemCustom.displayName = 'ComboBoxItemCustom';

export { ComboBoxItemCustom };
export type { ComboBoxItemCustomDomRef, ComboBoxItemCustomPropTypes };
