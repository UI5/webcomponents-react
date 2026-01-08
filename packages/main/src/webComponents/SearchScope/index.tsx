'use client';

import '@ui5/webcomponents-fiori/dist/SearchScope.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SearchScopeAttributes {
  /**
   * Defines the text of the component.
   */
  text?: string;

  /**
   * Defines the value of the `SearchScope`.
   * Used for selection in Search scopes.
   * @default undefined
   */
  value?: string | undefined;
}

interface SearchScopeDomRef extends Required<SearchScopeAttributes>, Ui5DomRef {}

interface SearchScopePropTypes extends SearchScopeAttributes, Omit<CommonProps, keyof SearchScopeAttributes> {}

/**
 * The `SearchScope` represents the options for the scope in `Search`.
 *
 * __Note:__ This is a UI5 Web Component! [SearchScope UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/SearchScope) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of __@ui5/webcomponents-fiori__.
 * @abstract
 * @experimental
 */
const SearchScope = withWebComponent<SearchScopePropTypes, SearchScopeDomRef>(
  'ui5-search-scope',
  ['text', 'value'],
  [],
  [],
  [],
);

SearchScope.displayName = 'SearchScope';

export { SearchScope };
export type { SearchScopeDomRef, SearchScopePropTypes };
