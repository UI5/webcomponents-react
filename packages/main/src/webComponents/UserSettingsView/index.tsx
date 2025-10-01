'use client';

import '@ui5/webcomponents-fiori/dist/UserSettingsView.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface UserSettingsViewAttributes {
  /**
   * Indicates whether the view is secondary. It is relevant only if the view is used in `pages` slot of `UserSettingsItem`
   * and controls the visibility of the back button.
   * @default false
   */
  secondary?: boolean;

  /**
   * Defines whether the view is selected. There can be just one selected view at a time.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the title text of the user settings view.
   * @default undefined
   */
  text?: string | undefined;
}

interface UserSettingsViewDomRef extends Required<UserSettingsViewAttributes>, Ui5DomRef {}

interface UserSettingsViewPropTypes
  extends UserSettingsViewAttributes,
    Omit<CommonProps, keyof UserSettingsViewAttributes | 'children'> {
  /**
   * Defines the content of the view.
   *
   * __Supported Node Type/s:__ `HTMLElement`
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `UserSettingsView` represents a view displayed in the `UserSettingsItem`.
 *
 * __Note:__ This is a UI5 Web Component! [UserSettingsView UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserSettingsView) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.8.0](https://github.com/UI5/webcomponents/releases/tag/v2.8.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const UserSettingsView = withWebComponent<UserSettingsViewPropTypes, UserSettingsViewDomRef>(
  'ui5-user-settings-view',
  ['text'],
  ['secondary', 'selected'],
  [],
  [],
);

UserSettingsView.displayName = 'UserSettingsView';

export { UserSettingsView };
export type { UserSettingsViewDomRef, UserSettingsViewPropTypes };
