'use client';

import '@ui5/webcomponents/dist/AvatarBadge.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface AvatarBadgeAttributes {
  /**
   * Defines the color scheme of the badge using the indication color palette.
   *
   * Available options are `"1"` through `"10"`, matching the indication colors.
   *
   * **Note:** `state` takes precedence - when `state` is set to any value other than `None`,
   * the semantic state styling applies and `colorScheme` is ignored.
   *
   * **Note:** Available since [v2.27.0](https://github.com/UI5/webcomponents/releases/tag/v2.27.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  colorScheme?: string | undefined;

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
   *
   * **Note:** `state` takes precedence over `colorScheme`. When `state` is set
   * to any value other than `None`, the semantic styling applies and `colorScheme` is ignored.
   * @default "None"
   */
  state?: ValueState | keyof typeof ValueState;

  /**
   * Defines the tooltip text of the badge icon.
   *
   * **Note:** If not provided, the badge uses the icon accessible name.
   * If no icon accessible name is available, a generic fallback text is used.
   *
   * **Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  tooltip?: string | undefined;
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
  ['colorScheme', 'icon', 'state', 'tooltip'],
  [],
  [],
  [],
);

AvatarBadge.displayName = 'AvatarBadge';

export { AvatarBadge };
export type { AvatarBadgeDomRef, AvatarBadgePropTypes };
