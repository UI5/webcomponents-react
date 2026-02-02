'use client';

import '@ui5/webcomponents-fiori/dist/UserSettingsAccountView.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';

interface UserSettingsAccountViewAttributes {
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
   * Defines if the User Menu shows the `Manage Account` option.
   * @default false
   */
  showManageAccount?: boolean;

  /**
   * Defines the title text of the user settings view.
   * @default undefined
   */
  text?: string | undefined;
}

interface UserSettingsAccountViewDomRef extends Required<UserSettingsAccountViewAttributes>, Ui5DomRef {}

interface UserSettingsAccountViewPropTypes
  extends
    UserSettingsAccountViewAttributes,
    Omit<
      CommonProps,
      keyof UserSettingsAccountViewAttributes | 'account' | 'children' | 'onEditAccountsClick' | 'onManageAccountClick'
    > {
  /**
   * Defines the user account.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="account"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<UserMenuAccount> | undefined`
   */
  account?: UI5WCSlotsNode;

  /**
   * Defines the content of the view.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the `Edit Accounts` button is selected.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onEditAccountsClick?: (event: Ui5CustomEvent<UserSettingsAccountViewDomRef>) => void;

  /**
   * Fired when the `Manage Account` button is selected.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onManageAccountClick?: (event: Ui5CustomEvent<UserSettingsAccountViewDomRef>) => void;
}

/**
 * The `UserSettingsAccountView` represents a view displayed in the `UserSettingsItem`.
 *
 * __Note:__ This is a UI5 Web Component! [UserSettingsAccountView UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserSettingsAccountView) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.17.0](https://github.com/UI5/webcomponents/releases/tag/v2.17.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const UserSettingsAccountView = withWebComponent<UserSettingsAccountViewPropTypes, UserSettingsAccountViewDomRef>(
  'ui5-user-settings-account-view',
  ['text'],
  ['secondary', 'selected', 'showManageAccount'],
  ['account'],
  ['edit-accounts-click', 'manage-account-click'],
);

UserSettingsAccountView.displayName = 'UserSettingsAccountView';

export { UserSettingsAccountView };
export type { UserSettingsAccountViewDomRef, UserSettingsAccountViewPropTypes };
