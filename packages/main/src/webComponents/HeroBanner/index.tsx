'use client';

import '@ui5/webcomponents-fiori/dist/HeroBanner.js';
import type HeroBannerActionsPlacement from '@ui5/webcomponents-fiori/dist/types/HeroBannerActionsPlacement.js';
import type HeroBannerColumnsRatio from '@ui5/webcomponents-fiori/dist/types/HeroBannerColumnsRatio.js';
import type HeroBannerHeaderBlockPlacement from '@ui5/webcomponents-fiori/dist/types/HeroBannerHeaderBlockPlacement.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface HeroBannerAttributes {
  /**
   * Defines the placement of the actions slot within the hero banner header.
   *
   * - **TopEnd** (default) - Actions are displayed to the right of the header text, at the top of the header row.
   * - **BottomStart** - Actions are displayed below the header text, left-aligned, regardless of `columnsRatio` or slot usage.
   * @default "TopEnd"
   */
  actionsPlacement?: HeroBannerActionsPlacement | keyof typeof HeroBannerActionsPlacement;

  /**
   * Defines the ratio between the two content columns inside the hero banner.
   *
   * Takes effect only when `endContent` is provided. When no `endContent` is present, the content spans the full width (single column).
   *
   * - **Equal** - Two equal columns. Both content blocks share the available width equally.
   *   On smaller screens, both slots stack vertically.
   * - **FirstWider** - Two unequal columns. The start content takes two-thirds of the width, the end content one-third.
   *   On smaller screens, both slots stack vertically.
   * @default "FirstWider"
   */
  columnsRatio?: HeroBannerColumnsRatio | keyof typeof HeroBannerColumnsRatio;

  /**
   * Defines the vertical placement of the header block within the content area.
   *
   * - **Top** (default) - Header block is placed at the top of the content area.
   * - **Bottom** - Header block is pushed to the bottom of column 1. Only takes effect when `columnsRatio`
   *   is `Equal` or `FirstWider` and only `endContent` is provided (no default slot content).
   *   When `actionsPlacement` is also `BottomStart`, the `endContent` slot spans the full height.
   * @default "Top"
   */
  headerBlockPlacement?: HeroBannerHeaderBlockPlacement | keyof typeof HeroBannerHeaderBlockPlacement;

  /**
   * Defines the header text displayed in the hero banner.
   *
   * This is the main greeting header, typically a personalized message
   * such as "Hello, John".
   * @default undefined
   */
  headerText?: string | undefined;

  /**
   * Defines text displayed above the heading as an overline.
   * Can be used to show the current date, a status message, or any other relevant contextual information.
   * @default undefined
   */
  overlineText?: string | undefined;
}

interface HeroBannerDomRef extends Required<HeroBannerAttributes>, Ui5DomRef {}

interface HeroBannerPropTypes
  extends HeroBannerAttributes, Omit<CommonProps, keyof HeroBannerAttributes | 'actions' | 'children' | 'endContent'> {
  /**
   * Defines action buttons displayed to the right of the header area.
   * Typically used to display actions buttons in the top right corner.
   *
   * Can contain buttons, links, or other interactive elements that provide
   * quick access to relevant actions directly from the hero banner header.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="actions"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  actions?: UI5WCSlotsNode;

  /**
   * Defines the first (default) free content block of the hero banner.
   *
   * This is the default slot — content placed directly inside `<HeroBanner>`
   * without a slot attribute lands here.
   * Can contain KPI cards, search input fields, text, buttons, and more.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the second free content block of the hero banner.
   *
   * Used alongside `startContent` when `columnsRatio` is set (`Equal`, `FirstWider`).
   * Can contain cards, buttons, and other interactive elements.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="endContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  endContent?: UI5WCSlotsNode;
}

/**
 * The `HeroBanner` is a flexible, full-width banner designed for placement at the top of a page.
 * It provides a personalized greeting and quick access to key information or actions.
 *
 * ### Structure
 *
 * The HeroBanner consists of the following building blocks:
 *
 * - **Banner Canvas** - the visual base with a background color, optional background image and shadow.
 * - **Overline** (optional) - contextual text at the top, e.g. the current date or a status message.
 * - **Header** (optional) - the main greeting header below the overline, e.g. "Hello, John".
 * - **Free Slots** (optional) - customizable content areas that can contain KPI cards, search components, text, buttons, etc.
 *
 * The banner is not sticky — it scrolls away with the page content when the user scrolls down.
 *
 * ### Usage
 *
 * Place the `HeroBanner` at the top of a page to welcome the user and surface relevant
 * information or shortcuts at a glance.
 *
 * The hero banner itself is non-interactive. However, interactive elements such as buttons, cards,
 * or search fields can be placed inside the free content slots and will follow their own
 * interactive states.
 *
 * ### Responsive Behavior
 *
 * The hero banner adapts to different screen sizes:
 * - On smaller screens, split layouts (Equal, FirstWider) collapse to a single stacked column.
 * - The heading text wraps to multiple lines as needed.
 * - Buttons in the headerAction slot will wrap.
 * - On screens ≤1024px, the header text is wrapped to a maximum of 3 lines.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [HeroBanner UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/HeroBanner) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const HeroBanner = withWebComponent<HeroBannerPropTypes, HeroBannerDomRef>(
  'ui5-hero-banner',
  ['actionsPlacement', 'columnsRatio', 'headerBlockPlacement', 'headerText', 'overlineText'],
  [],
  ['actions', 'endContent'],
  [],
);

HeroBanner.displayName = 'HeroBanner';

export { HeroBanner };
export type { HeroBannerDomRef, HeroBannerPropTypes };
