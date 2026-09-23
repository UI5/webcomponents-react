'use client';

import '@ui5/webcomponents/dist/OptionGroup.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface OptionGroupAttributes {
  /**
   * Defines the header text of the group.
   * @default undefined
   */
  headerText?: string | undefined;
}

interface OptionGroupDomRef extends Required<OptionGroupAttributes>, Ui5DomRef {}

interface OptionGroupPropTypes
  extends OptionGroupAttributes, Omit<CommonProps, keyof OptionGroupAttributes | 'children'> {
  /**
   * Defines the options of the group.
   *
   * **Note:** Use the `Option` component to define the desired options.
   *
   * __Supported Node Type/s:__ `Array<Option>`
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `OptionGroup` component is used to group options within a `Select`.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [OptionGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/OptionGroup) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.26.0](https://github.com/UI5/webcomponents/releases/tag/v2.26.0) of __@ui5/webcomponents__.
 */
const OptionGroup = withWebComponent<OptionGroupPropTypes, OptionGroupDomRef>(
  'ui5-option-group',
  ['headerText'],
  [],
  [],
  [],
);

OptionGroup.displayName = 'OptionGroup';

export { OptionGroup };
export type { OptionGroupDomRef, OptionGroupPropTypes };
