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
   */
  selected?: boolean;

  /**
   * Defines the text of the component.
   * @default undefined
   */
  text?: string | undefined;
}

interface MultiComboBoxItemDomRef extends Required<MultiComboBoxItemAttributes>, Ui5DomRef {}

interface MultiComboBoxItemPropTypes
  extends MultiComboBoxItemAttributes,
    Omit<CommonProps, keyof MultiComboBoxItemAttributes> {}

/**
 * The `MultiComboBoxItem` represents the item for a `MultiComboBox`.
 *
 * __Note:__ This is a UI5 Web Component! [MultiComboBoxItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/MultiComboBoxItem) | [Repository](https://github.com/UI5/webcomponents)
 */
const MultiComboBoxItem = withWebComponent<MultiComboBoxItemPropTypes, MultiComboBoxItemDomRef>(
  'ui5-mcb-item',
  ['additionalText', 'text'],
  ['selected'],
  [],
  [],
);

MultiComboBoxItem.displayName = 'MultiComboBoxItem';

export { MultiComboBoxItem };
export type { MultiComboBoxItemDomRef, MultiComboBoxItemPropTypes };
