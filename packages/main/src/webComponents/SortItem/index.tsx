'use client';

import '@ui5/webcomponents-fiori/dist/SortItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SortItemAttributes {
  /**
   * Defines if the component is selected.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the component.
   * @default undefined
   */
  text?: string | undefined;
}

interface SortItemDomRef extends Required<SortItemAttributes>, Ui5DomRef {}

interface SortItemPropTypes extends SortItemAttributes, Omit<CommonProps, keyof SortItemAttributes> {}

/**
 * ### Usage
 *
 * For the `SortItem`
 *
 *
 * __Note:__ This is a UI5 Web Component! [SortItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/SortItem) | [Repository](https://github.com/UI5/webcomponents)
 * @abstract
 */
const SortItem = withWebComponent<SortItemPropTypes, SortItemDomRef>('ui5-sort-item', ['text'], ['selected'], [], []);

SortItem.displayName = 'SortItem';

export { SortItem };
export type { SortItemDomRef, SortItemPropTypes };
