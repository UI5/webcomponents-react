'use client';

import '@ui5/webcomponents/dist/SuggestionItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SuggestionItemAttributes {
  /**
   * Defines the `additionalText`, displayed in the end of the item.
   * @default undefined
   */
  additionalText?: string | undefined;

  /**
   * Defines the text of the component.
   * @default undefined
   */
  text?: string | undefined;
}

interface SuggestionItemDomRef extends Required<SuggestionItemAttributes>, Ui5DomRef {}

interface SuggestionItemPropTypes extends SuggestionItemAttributes, Omit<CommonProps, keyof SuggestionItemAttributes> {}

/**
 * The `SuggestionItem` represents the suggestion item of the `Input`.
 *
 * __Note:__ This is a UI5 Web Component! [SuggestionItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/SuggestionItem) | [Repository](https://github.com/UI5/webcomponents)
 * @abstract
 */
const SuggestionItem = withWebComponent<SuggestionItemPropTypes, SuggestionItemDomRef>(
  'ui5-suggestion-item',
  ['additionalText', 'text'],
  [],
  [],
  [],
);

SuggestionItem.displayName = 'SuggestionItem';

export { SuggestionItem };
export type { SuggestionItemDomRef, SuggestionItemPropTypes };
