# @ui5/webcomponents-react-base

Core utilities, hooks, and infrastructure for UI5 Web Components React wrappers. This package is primarily used internally by `@ui5/webcomponents-react` but exports useful hooks and utilities for consumers.

## Import Pattern

Subpath imports are recommended for clarity:

```tsx
// ✅ Recommended - subpath imports
import { useI18nBundle, useViewportRange } from '@ui5/webcomponents-react-base/hooks';
import * as Device from '@ui5/webcomponents-react-base/Device';
import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';

// Also works - root import
import { useI18nBundle, useViewportRange } from '@ui5/webcomponents-react-base';
```

## Public API

### Hooks (`@ui5/webcomponents-react-base/hooks`)

#### `useI18nBundle(bundleName: string)`

Access internationalization bundles for translated text.

```tsx
import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks';

function MyComponent() {
  const i18n = useI18nBundle('@ui5/webcomponents-react');
  const label = i18n.getText('BUTTON_LABEL');
  // With placeholders: i18n.getText('ITEMS_SELECTED', 5, 20) -> "5 of 20 items selected"

  return <span>{label}</span>;
}
```

#### `useViewportRange()`

Get current viewport size range for responsive layouts.

```tsx
import { useViewportRange } from '@ui5/webcomponents-react-base/hooks';

function ResponsiveComponent() {
  const range = useViewportRange();
  // Returns: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop'

  return range === 'Phone' ? <MobileView /> : <DesktopView />;
}
```

### Device Utilities (`@ui5/webcomponents-react-base/Device`)

Re-exports from `@ui5/webcomponents-base/dist/Device.js` plus additional resize/orientation handlers.

```tsx
import * as Device from '@ui5/webcomponents-react-base/Device';

// From @ui5/webcomponents-base - check capabilities
Device.supportsTouch();

// Resize handling
Device.attachResizeHandler((windowSize) => {
  console.log(windowSize.width, windowSize.height);
});
Device.detachResizeHandler(handler);

// Orientation handling
Device.getOrientation(); // { landscape: boolean, portrait: boolean }
Device.attachOrientationChangeHandler((orientation) => {
  console.log(orientation.landscape, orientation.portrait);
});
Device.detachOrientationChangeHandler(handler);

// Media range queries
Device.getCurrentRange(); // Current viewport range
Device.attachMediaHandler(handler);
Device.detachMediaHandler(handler);
```

### ThemingParameters (`@ui5/webcomponents-react-base/ThemingParameters`)

TypeScript-friendly mappings for SAP theming CSS variables. Useful for **inline styles** or **CSS-in-JS** solutions.

```tsx
import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';

// CSS-in-JS / inline styles
const style = {
  backgroundColor: ThemingParameters.sapBackgroundColor, // 'var(--sapBackgroundColor)'
  color: ThemingParameters.sapTextColor, // 'var(--sapTextColor)'
  borderRadius: ThemingParameters.sapElement_BorderCornerRadius,
  fontFamily: ThemingParameters.sapFontFamily,
};

// Semantic colors
ThemingParameters.sapPositiveColor; // success/positive
ThemingParameters.sapNegativeColor; // error/negative
ThemingParameters.sapCriticalColor; // warning
ThemingParameters.sapInformativeColor; // info
```

**For standard CSS files**, use the CSS variables directly (e.g., `var(--sapBackgroundColor)`).

See the full list of available CSS variables: https://experience.sap.com/fiori-design-web/theming-base-content/

### Types (`@ui5/webcomponents-react-base/types`)

```tsx
import type { UI5WCSlotsNode } from '@ui5/webcomponents-react-base/types';

// UI5WCSlotsNode - Type for slot content (ReactNode | ReactNode[])
```

## Internal APIs

The following exports exist for sharing between packages of this library. **They are not intended for consumer use** and may change without notice:

- `./internal/hooks` - Internal hooks (`useSyncRef`, `useStylesheet`, `useIsRTL`, `useCurrentTheme`, `useIsomorphicLayoutEffect`)
- `./internal/utils` - Internal utilities (`debounce`, `throttle`, `enrichEventWithDetails`)
- `./internal/types` - Internal types (`CommonProps`, `Ui5CustomEvent`, `Ui5DomRef`)
- `./withWebComponent` - HOC for wrapping web components
