'use client';

import '@ui5/webcomponents-fiori/dist/GroupItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface GroupItemAttributes {
  /**
   * Defines if the group item is selected.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the group item.
   * @default undefined
   */
  text?: string | undefined;
}

interface GroupItemDomRef extends Required<GroupItemAttributes>, Ui5DomRef {}

interface GroupItemPropTypes extends GroupItemAttributes, Omit<CommonProps, keyof GroupItemAttributes> {}

/**
 * The `GroupItem` component defines the grouping criteria for data in `ViewSettingsDialog`.
 * It represents a single group option that users can select to organize data into logical groups.
 *
 * ### Usage
 *
 * The `GroupItem` is used within the `ViewSettingsDialog` to provide grouping options.
 * Each group item represents a column or field by which data can be grouped.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [GroupItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/GroupItem) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of __@ui5/webcomponents-fiori__.
 * @abstract
 */
const GroupItem = withWebComponent<GroupItemPropTypes, GroupItemDomRef>(
  'ui5-group-item',
  ['text'],
  ['selected'],
  [],
  [],
);

GroupItem.displayName = 'GroupItem';

export { GroupItem };
export type { GroupItemDomRef, GroupItemPropTypes };
