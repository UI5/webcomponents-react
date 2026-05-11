'use client';

import '@ui5/webcomponents-fiori/dist/ViewSettingsDialogCustomTab.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface ViewSettingsDialogCustomTabAttributes {
  /**
   * Defines the icon of the custom tab button in the segmented button.
   * @default "action-settings"
   */
  icon?: string;

  /**
   * Defines the title text of the custom tab.
   *
   * **Note:** It is displayed in the dialog header when this tab is selected.
   */
  titleText?: string;

  /**
   * Defines the tooltip of the custom tab button.
   *
   * **Note:** It is shown on the segmented button item.
   */
  tooltip?: string;
}

interface ViewSettingsDialogCustomTabDomRef extends Required<ViewSettingsDialogCustomTabAttributes>, Ui5DomRef {}

interface ViewSettingsDialogCustomTabPropTypes
  extends
    ViewSettingsDialogCustomTabAttributes,
    Omit<CommonProps, keyof ViewSettingsDialogCustomTabAttributes | 'children'> {
  /**
   * Defines the custom tab content.
   *
   * __Supported Node Type/s:__ `Array<Node>`
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `ViewSettingsDialogCustomTab` component allows defining custom tabs for the `ViewSettingsDialog`.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [ViewSettingsDialogCustomTab UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/ViewSettingsDialogCustomTab) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of __@ui5/webcomponents-fiori__.
 * @abstract
 */
const ViewSettingsDialogCustomTab = withWebComponent<
  ViewSettingsDialogCustomTabPropTypes,
  ViewSettingsDialogCustomTabDomRef
>('ui5-view-settings-dialog-custom-tab', ['icon', 'titleText', 'tooltip'], [], [], []);

ViewSettingsDialogCustomTab.displayName = 'ViewSettingsDialogCustomTab';

export { ViewSettingsDialogCustomTab };
export type { ViewSettingsDialogCustomTabDomRef, ViewSettingsDialogCustomTabPropTypes };
