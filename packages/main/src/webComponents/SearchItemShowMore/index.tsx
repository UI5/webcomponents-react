'use client';

import '@ui5/webcomponents-fiori/dist/SearchItemShowMore.js';
import type { ShowMoreItemClickEventDetail } from '@ui5/webcomponents-fiori/dist/SearchItemShowMore.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SearchItemShowMoreAttributes {
  /**
   * Specifies the number of additional items available to show.
   * This value replaces the placeholder (N) in the "Show more (N)" text.
   * If not set, the placeholder will remain as (N).
   * @default undefined
   */
  itemsToShowCount?: number | undefined;

  /**
   * Defines whether the show more item is selected.
   * @default false
   */
  selected?: boolean;
}

interface SearchItemShowMoreDomRef extends Required<SearchItemShowMoreAttributes>, Ui5DomRef {}

interface SearchItemShowMorePropTypes
  extends SearchItemShowMoreAttributes,
    Omit<CommonProps, keyof SearchItemShowMoreAttributes | 'onClick'> {
  /**
   * Fired when the component is activated, either with a mouse/tap
   * or by pressing the Enter or Space keys.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onClick?: (event: Ui5CustomEvent<SearchItemShowMoreDomRef, ShowMoreItemClickEventDetail>) => void;
}

/**
 * A `SearchItemShowMore` is a special type of ui5-li that acts as a button to progressively reveal additional (overflow) items within a group.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [SearchItemShowMore UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/SearchItemShowMore) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const SearchItemShowMore = withWebComponent<SearchItemShowMorePropTypes, SearchItemShowMoreDomRef>(
  'ui5-search-item-show-more',
  ['itemsToShowCount'],
  ['selected'],
  [],
  ['click'],
);

SearchItemShowMore.displayName = 'SearchItemShowMore';

export { SearchItemShowMore };
export type { SearchItemShowMoreDomRef, SearchItemShowMorePropTypes };
