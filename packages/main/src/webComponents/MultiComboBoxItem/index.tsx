'use client';

import '@ui5/webcomponents/dist/MultiComboBoxItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface MultiComboBoxItemAttributes {
  /**
   * Defines the additional text of the component.
   * @default undefined
   */
  additionalText?: string | undefined;

  /**
   * Defines the selected state of the component.
   * @default false
   * @deprecated Set the `value` property on items and use the `selectedValues` property on the parent `ui5-multi-combobox` instead for programmatic selection.
   */
  selected?: boolean;

  /**
   * Defines the text of the component.
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the value of the component.
   *
   * Use this property to associate a unique identifier with the item,
   * separate from the display text. This enables selecting items
   * programmatically via `selectedValues` on the parent MultiComboBox.
   *
   * **Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  value?: string | undefined;
}

interface MultiComboBoxItemDomRef extends Required<MultiComboBoxItemAttributes>, Ui5DomRef {}

interface MultiComboBoxItemPropTypes
  extends MultiComboBoxItemAttributes, Omit<CommonProps, keyof MultiComboBoxItemAttributes> {}

/**
 * The `MultiComboBoxItem` represents the item for a `MultiComboBox`.
 *
 * __Note:__ This is a UI5 Web Component! [MultiComboBoxItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/MultiComboBoxItem) | [Repository](https://github.com/UI5/webcomponents)
 */
const MultiComboBoxItem = withWebComponent<MultiComboBoxItemPropTypes, MultiComboBoxItemDomRef>(
  'ui5-mcb-item',
  ['additionalText', 'text', 'value'],
  ['selected'],
  [],
  [],
);

MultiComboBoxItem.displayName = 'MultiComboBoxItem';

export { MultiComboBoxItem };
export type { MultiComboBoxItemDomRef, MultiComboBoxItemPropTypes };
