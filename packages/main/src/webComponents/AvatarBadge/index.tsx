'use client';

import '@ui5/webcomponents/dist/AvatarBadge.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface AvatarBadgeAttributes {
  /**
   * Defines the icon name to be displayed inside the badge.
   *
   * **Note:** You should import the desired icon first, then use its name as "icon".
   *
   * `import "@ui5/webcomponents-icons/dist/{icon_name}.js"`
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines the state of the badge, which determines its styling.
   *
   * Available options:
   * - `None` (default) - Standard appearance
   * - `Positive` - Green, used for success/approved states
   * - `Critical` - Orange, used for warning states
   * - `Negative` - Red, used for error/rejected states
   * - `Information` - Blue, used for informational states
   * @default "None"
   */
  state?: ValueState | keyof typeof ValueState;
}

interface AvatarBadgeDomRef extends Required<AvatarBadgeAttributes>, Ui5DomRef {}

interface AvatarBadgePropTypes extends AvatarBadgeAttributes, Omit<CommonProps, keyof AvatarBadgeAttributes> {}

/**
 * The `AvatarBadge` component is used to display a badge on top of `Avatar` component.
 * The badge can display an icon and supports different states for visual affordance.
 *
 * ### Usage
 *
 * The badge should be used as a child element of `Avatar` in the `badge` slot.
 *
 * ```html
 * <Avatar>
 *   <AvatarBadge icon="edit" slot="badge"></AvatarBadge>
 * </Avatar>
 * ```
 *
 * ### Keyboard Handling
 *
 * The badge does not receive keyboard focus.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [AvatarBadge UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/AvatarBadge) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.19.0](https://github.com/UI5/webcomponents/releases/tag/v2.19.0) of __@ui5/webcomponents__.
 */
const AvatarBadge = withWebComponent<AvatarBadgePropTypes, AvatarBadgeDomRef>(
  'ui5-avatar-badge',
  ['icon', 'state'],
  [],
  [],
  [],
);

AvatarBadge.displayName = 'AvatarBadge';

export { AvatarBadge };
export type { AvatarBadgeDomRef, AvatarBadgePropTypes };
