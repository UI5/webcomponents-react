'use client';

import '@ui5/webcomponents-fiori/dist/UserSettingsAppearanceView.js';
import type { UserSettingsAppearanceViewItemSelectEventDetail } from '@ui5/webcomponents-fiori/dist/UserSettingsAppearanceView.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface UserSettingsAppearanceViewAttributes {
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

interface UserSettingsAppearanceViewDomRef extends Required<UserSettingsAppearanceViewAttributes>, Ui5DomRef {}

interface UserSettingsAppearanceViewPropTypes
  extends
    UserSettingsAppearanceViewAttributes,
    Omit<
      CommonProps,
      keyof UserSettingsAppearanceViewAttributes | 'additionalContent' | 'children' | 'onSelectionChange'
    > {
  /**
   * Defines additional content displayed below the items list.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="additionalContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  additionalContent?: UI5WCSlotsNode;

  /**
   * Defines the items of the component.
   *
   * __Supported Node Type/s:__ `Array<UserSettingsAppearanceViewGroup | UserSettingsAppearanceViewItem>`
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when an item is selected.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onSelectionChange?: (
    event: Ui5CustomEvent<UserSettingsAppearanceViewDomRef, UserSettingsAppearanceViewItemSelectEventDetail>,
  ) => void;
}

/**
 * The `UserSettingsAppearanceView` represents a view displayed in the `UserSettingsItem`.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [UserSettingsAppearanceView UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserSettingsAppearanceView) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.17.0](https://github.com/UI5/webcomponents/releases/tag/v2.17.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const UserSettingsAppearanceView = withWebComponent<
  UserSettingsAppearanceViewPropTypes,
  UserSettingsAppearanceViewDomRef
>(
  'ui5-user-settings-appearance-view',
  ['text'],
  ['secondary', 'selected'],
  ['additionalContent'],
  ['selection-change'],
);

UserSettingsAppearanceView.displayName = 'UserSettingsAppearanceView';

export { UserSettingsAppearanceView };
export type { UserSettingsAppearanceViewDomRef, UserSettingsAppearanceViewPropTypes };
