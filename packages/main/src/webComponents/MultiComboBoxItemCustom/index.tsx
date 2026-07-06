'use client';

import '@ui5/webcomponents/dist/MultiComboBoxItemCustom.js';
import type { MultiComboBoxItemCustomClickEventDetail } from '@ui5/webcomponents/dist/MultiComboBoxItemCustom.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface MultiComboBoxItemCustomAttributes {
  /**
   * Defines the text of the component.
   * Used for filtering and token display.
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the value of the component.
   * Used for programmatic selection via selectedValues property.
   * @default undefined
   */
  value?: string | undefined;
}

interface MultiComboBoxItemCustomDomRef extends Required<MultiComboBoxItemCustomAttributes>, Ui5DomRef {}

interface MultiComboBoxItemCustomPropTypes
  extends
    MultiComboBoxItemCustomAttributes,
    Omit<CommonProps, keyof MultiComboBoxItemCustomAttributes | 'children' | 'onClick'> {
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
  onClick?: (event: Ui5CustomEvent<MultiComboBoxItemCustomDomRef, MultiComboBoxItemCustomClickEventDetail>) => void;
}

/**
 * The `MultiComboBoxItemCustom` is a multi-combobox item component
 * that allows placing custom content inside a multi-combobox item.
 * The `text` property is used for filtering and token display.
 * For highlighting functionality, see `@ui5/webcomponents-base/dist/util/generateHighlightedMarkup.js`.
 *
 * __Note:__ This is a UI5 Web Component! [MultiComboBoxItemCustom UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/MultiComboBoxItemCustom) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.24.0](https://github.com/UI5/webcomponents/releases/tag/v2.24.0) of __@ui5/webcomponents__.
 */
const MultiComboBoxItemCustom = withWebComponent<MultiComboBoxItemCustomPropTypes, MultiComboBoxItemCustomDomRef>(
  'ui5-mcb-item-custom',
  ['text', 'value'],
  [],
  [],
  ['click'],
);

MultiComboBoxItemCustom.displayName = 'MultiComboBoxItemCustom';

export { MultiComboBoxItemCustom };
export type { MultiComboBoxItemCustomDomRef, MultiComboBoxItemCustomPropTypes };
