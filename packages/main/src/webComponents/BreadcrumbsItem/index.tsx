'use client';

import '@ui5/webcomponents/dist/BreadcrumbsItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface BreadcrumbsItemAttributes {
  /**
   * Defines the accessible ARIA name of the item.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the link href.
   *
   * **Note:** Standard hyperlink behavior is supported.
   * @default undefined
   */
  href?: string | undefined;

  /**
   * Defines the link target.
   *
   * Available options are:
   *
   * - `_self`
   * - `_top`
   * - `_blank`
   * - `_parent`
   * - `_search`
   *
   * **Note:** This property must only be used when the `href` property is set.
   * @default undefined
   */
  target?: string | undefined;
}

interface BreadcrumbsItemDomRef extends Required<BreadcrumbsItemAttributes>, Ui5DomRef {}

interface BreadcrumbsItemPropTypes
  extends BreadcrumbsItemAttributes,
    Omit<CommonProps, keyof BreadcrumbsItemAttributes | 'children'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   *
   * __Supported Node Type/s:__ `Node`
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `BreadcrumbsItem` component defines the content of an item in `Breadcrumbs`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/UI5/webcomponents) | [Documentation](https://ui5.github.io/webcomponents/)
 * @abstract
 */
const BreadcrumbsItem = withWebComponent<BreadcrumbsItemPropTypes, BreadcrumbsItemDomRef>(
  'ui5-breadcrumbs-item',
  ['accessibleName', 'href', 'target'],
  [],
  [],
  [],
);

BreadcrumbsItem.displayName = 'BreadcrumbsItem';

export { BreadcrumbsItem };
export type { BreadcrumbsItemDomRef, BreadcrumbsItemPropTypes };
