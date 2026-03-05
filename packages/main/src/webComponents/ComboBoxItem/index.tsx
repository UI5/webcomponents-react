'use client';

import '@ui5/webcomponents/dist/ComboBoxItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface ComboBoxItemAttributes {
  /**
   * Defines the additional text of the component.
   * @default undefined
   */
  additionalText?: string | undefined;

  /**
   * Defines the text of the component.
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the value of the `ComboBoxItem`.
   *
   * Use this property to associate a unique identifier or machine-readable value with the item,
   * separate from the display text. This enables:
   * - Selecting items programmatically via `selectedValue` on the ComboBox
   * - Submitting machine-readable values in forms
   * - Distinguishing between items with identical display text
   *
   * **When to use:**
   * - **Recommended:** Use the `value` property on items together with `selectedValue` on the ComboBox when you need unique identifiers
   * - Omit `value` if the display text (`text` property) is sufficient for your use case
   *
   * **Example:**
   * ```html
   * <ComboBox selected-value="DE">
   *   <ComboBoxItem text="Germany" value="DE"></ComboBoxItem>
   *   <ComboBoxItem text="France" value="FR"></ComboBoxItem>
   * </ComboBox>
   * ```
   *
   * **Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  value?: string | undefined;
}

interface ComboBoxItemDomRef extends Required<ComboBoxItemAttributes>, Ui5DomRef {}

interface ComboBoxItemPropTypes extends ComboBoxItemAttributes, Omit<CommonProps, keyof ComboBoxItemAttributes> {}

/**
 * The `ComboBoxItem` represents the item for a `ComboBox`.
 *
 * __Note:__ This is a UI5 Web Component! [ComboBoxItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ComboBoxItem) | [Repository](https://github.com/UI5/webcomponents)
 */
const ComboBoxItem = withWebComponent<ComboBoxItemPropTypes, ComboBoxItemDomRef>(
  'ui5-cb-item',
  ['additionalText', 'text', 'value'],
  [],
  [],
  [],
);

ComboBoxItem.displayName = 'ComboBoxItem';

export { ComboBoxItem };
export type { ComboBoxItemDomRef, ComboBoxItemPropTypes };
