'use client';

import '@ui5/webcomponents-fiori/dist/DynamicPageHeader.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface DynamicPageHeaderAttributes {
  /**
   * Defines the accessible ARIA label for the header region.
   * Overrides the default "Header Expanded" / "Header Snapped" text.
   *
   * **Note:** Available since [v2.24.0](https://github.com/UI5/webcomponents/releases/tag/v2.24.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  accessibleName?: string | undefined;
}

interface DynamicPageHeaderDomRef extends Required<DynamicPageHeaderAttributes>, Ui5DomRef {}

interface DynamicPageHeaderPropTypes
  extends DynamicPageHeaderAttributes, Omit<CommonProps, keyof DynamicPageHeaderAttributes | 'children'> {
  /**
   * Defines the content of the Dynamic Page Header.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  children?: ReactNode | ReactNode[];
}

/**
 * Header of the DynamicPage.
 *
 * The DynamicPageHeader `DynamicPageHeader` is part of the DynamicPage family
 * and is used to serve as header of the `DynamicPage`.
 *
 * ### Usage
 *
 * The `DynamicPageHeader` can hold any layout control and has two states - expanded
 * and collapsed (snapped). The switching between these states happens when:
 * - the user scrolls below its bottom margin
 * - the user clicks on the `DynamicPageTitle`
 * - through the `DynamicPage` property `headerSnapped`
 *
 * ### Responsive Behavior
 *
 * The responsive behavior of the `DynamicPageHeader` depends on the behavior of the
 * content that is displayed.
 *
 * ### Accessibility
 *
 * The `DynamicPageHeader` provides an accessible label for the header region.
 *
 * __Note:__ This is a UI5 Web Component! [DynamicPageHeader UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/DynamicPageHeader) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents-fiori__.
 */
const DynamicPageHeader = withWebComponent<DynamicPageHeaderPropTypes, DynamicPageHeaderDomRef>(
  'ui5-dynamic-page-header',
  ['accessibleName'],
  [],
  [],
  [],
);

DynamicPageHeader.displayName = 'DynamicPageHeader';

export { DynamicPageHeader };
export type { DynamicPageHeaderDomRef, DynamicPageHeaderPropTypes };
