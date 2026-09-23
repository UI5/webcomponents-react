'use client';

import '@ui5/webcomponents-fiori/dist/UserSettingsNotificationsView.js';
import type { UserSettingsNotificationsViewItemClickEventDetail } from '@ui5/webcomponents-fiori/dist/UserSettingsNotificationsView.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface UserSettingsNotificationsViewAttributes {
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

interface UserSettingsNotificationsViewDomRef extends Required<UserSettingsNotificationsViewAttributes>, Ui5DomRef {}

interface UserSettingsNotificationsViewPropTypes
  extends
    UserSettingsNotificationsViewAttributes,
    Omit<
      CommonProps,
      keyof UserSettingsNotificationsViewAttributes | 'additionalContent' | 'children' | 'headerItems' | 'onItemClick'
    > {
  /**
   * Defines additional content displayed above the items list.
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
   * Defines the items of the component. Can be a mix of
   * `UserSettingsNotificationsViewItem` and
   * `UserSettingsNotificationsViewGroup` elements.
   *
   * __Supported Node Type/s:__ `Array<UserSettingsNotificationsViewGroup | UserSettingsNotificationsViewItem>`
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines header items rendered above the grouped items list.
   * Each item is wrapped in a `role="form"` landmark — a separate Tab stop.
   * Use this slot for product-level toggles (e.g. "Allow Notifications") that appear
   * above the notification-type groups.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="headerItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<UserSettingsNotificationsViewItem>`
   */
  headerItems?: UI5WCSlotsNode;
  /**
   * Fired when a navigable item in the list is clicked.
   *
   * The event is cancelable: preventing it skips the built-in drill-in to the
   * parent's secondary view, allowing the application to take over.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onItemClick?: (
    event: Ui5CustomEvent<UserSettingsNotificationsViewDomRef, UserSettingsNotificationsViewItemClickEventDetail>,
  ) => void;
}

/**
 * The `UserSettingsNotificationsView` represents a view displayed in the
 * `UserSettingsItem` that lists notification preferences. Individual settings
 * are represented by `UserSettingsNotificationsViewItem` elements, optionally
 * grouped by `UserSettingsNotificationsViewGroup`.
 *
 * When a navigable item is clicked, the view drills into a sibling secondary view of
 * its parent `UserSettingsItem`. When an item's `item-key` matches a target
 * view's `id`, that view is opened and keeps its own `text`. Otherwise the first
 * sibling marked as `secondary` is opened and its `text` is set to the clicked
 * item's `text` so the drill-in header reflects the origin.
 *
 * Apps can override this behavior by preventing the `item-click` event.
 *
 * Applications should listen to the item's `switch-change` event (which bubbles) to
 * be notified when a switch is toggled.
 *
 * Additional content (e.g. an information message strip) can be placed via the
 * `additionalContent` slot, which is rendered above the list.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [UserSettingsNotificationsView UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserSettingsNotificationsView) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.27.0](https://github.com/UI5/webcomponents/releases/tag/v2.27.0) of __@ui5/webcomponents-fiori__.
 */
const UserSettingsNotificationsView = withWebComponent<
  UserSettingsNotificationsViewPropTypes,
  UserSettingsNotificationsViewDomRef
>(
  'ui5-user-settings-notifications-view',
  ['text'],
  ['secondary', 'selected'],
  ['additionalContent', 'headerItems'],
  ['item-click'],
);

UserSettingsNotificationsView.displayName = 'UserSettingsNotificationsView';

export { UserSettingsNotificationsView };
export type { UserSettingsNotificationsViewDomRef, UserSettingsNotificationsViewPropTypes };
