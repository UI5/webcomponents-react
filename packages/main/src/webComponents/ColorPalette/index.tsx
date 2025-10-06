'use client';

import '@ui5/webcomponents/dist/ColorPalette.js';
import type { ColorPaletteItemClickEventDetail } from '@ui5/webcomponents/dist/ColorPalette.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface ColorPaletteAttributes {}

interface ColorPaletteDomRef extends Required<ColorPaletteAttributes>, Ui5DomRef {}

interface ColorPalettePropTypes extends ColorPaletteAttributes, Omit<CommonProps, 'children' | 'onItemClick'> {
  /**
   * Defines the `ColorPaletteItem` elements.
   *
   * __Supported Node Type/s:__ `Array<IColorPaletteItem>`
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user selects a color.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onItemClick?: (event: Ui5CustomEvent<ColorPaletteDomRef, ColorPaletteItemClickEventDetail>) => void;
}

/**
 * The `ColorPalette` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.
 *
 * ### Usage
 *
 * The `ColorPalette` is meant for users that need to select a color from a predefined set.
 * To define the colors, use the `ColorPaletteItem` component inside the default slot of the `ColorPalette`.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [ColorPalette UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ColorPalette) | [Repository](https://github.com/UI5/webcomponents)
 */
const ColorPalette = withWebComponent<ColorPalettePropTypes, ColorPaletteDomRef>(
  'ui5-color-palette',
  [],
  [],
  [],
  ['item-click'],
);

ColorPalette.displayName = 'ColorPalette';

export { ColorPalette };
export type { ColorPaletteDomRef, ColorPalettePropTypes };
