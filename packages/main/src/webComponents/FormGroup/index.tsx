'use client';

import '@ui5/webcomponents/dist/FormGroup.js';
import type TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface FormGroupAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines id (or many ids) of the element (or elements) that label the component.
   *
   * **Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines column span of the component,
   * e.g how many columns the group should span to.
   * @default undefined
   */
  columnSpan?: number | undefined;

  /**
   * Defines the compoennt heading level,
   * set by the `headerText`.
   *
   * **Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.
   * @default "H3"
   */
  headerLevel?: TitleLevel | keyof typeof TitleLevel;

  /**
   * Defines header text of the component.
   * @default undefined
   */
  headerText?: string | undefined;
}

interface FormGroupDomRef extends Required<FormGroupAttributes>, Ui5DomRef {}

interface FormGroupPropTypes extends FormGroupAttributes, Omit<CommonProps, keyof FormGroupAttributes | 'children'> {
  /**
   * Defines the items of the component.
   *
   * __Supported Node Type/s:__ `Array<FormItem>`
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The FormGroup (ui5-form-group) represents a group inside the Form (ui5-form) component
 * and it consists of FormItem (ui5-form-item) components.
 *
 * The layout of the FormGroup is mostly defined and controlled by the overarching Form (ui5-form) component.
 * Still, one can influence the layout via the FormGroup's `columnSpan` property,
 * that defines how many columns the group should expand to.
 *
 * ### Usage
 *
 * Тhe FormGroup (ui5-form-group) allows to split a Form into groups,
 * e.g to group FormItems that logically belong together.
 *
 * ### ES6 Module Import
 *
 * - import @ui5/webcomponents/dist/FormGroup.js";
 *
 * __Note:__ This is a UI5 Web Component! [FormGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/FormGroup) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const FormGroup = withWebComponent<FormGroupPropTypes, FormGroupDomRef>(
  'ui5-form-group',
  ['accessibleName', 'accessibleNameRef', 'columnSpan', 'headerLevel', 'headerText'],
  [],
  [],
  [],
);

FormGroup.displayName = 'FormGroup';

export { FormGroup };
export type { FormGroupDomRef, FormGroupPropTypes };
