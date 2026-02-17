# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Overview

UI5 Web Components for React is a React wrapper library for SAP's UI5 Web Components. It provides Fiori-compliant React components by wrapping native UI5 Web Components with React-specific implementations. The project is a monorepo managed with Lerna and Yarn workspaces.

## Critical: Working with Web Components

### Event Handling (MUST KNOW)

Web components emit **CustomEvents** with data in the `detail` property:

```tsx
// ❌ WRONG - won't work with web components
const handleChange = (e) => {
  console.log(e.selectedOption); // undefined!
  console.log(e.value); // undefined!
};

// ✅ CORRECT - access via e.detail
const handleChange = (e) => {
  console.log(e.detail.selectedOption);
  console.log(e.detail.value);
};
```

For enriching events with additional data (internal use):

```tsx
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/internal/utils';

onLoadMore(enrichEventWithDetails(e, { rowCount, totalRowCount }));
```

### Ref Handling (MUST KNOW)

**Never use `useRef()` directly for forwarded refs** - use `useSyncRef()`:

```tsx
import { useSyncRef } from '@ui5/webcomponents-react-base/internal/hooks';

const MyComponent = forwardRef((props, ref) => {
  // ✅ CORRECT - syncs forwarded ref with internal ref
  const [componentRef, internalRef] = useSyncRef(ref);

  return <div ref={componentRef} />;
});
```

### Slot Props (MUST KNOW)

When passing custom React components to slot props, they **must forward the `slot` prop**:

```tsx
// ❌ WRONG - slot won't render correctly
const CustomHeader = ({ children }) => <div>{children}</div>;

// ✅ CORRECT - forwards slot prop to root element
const CustomHeader = ({ children, slot }) => <div slot={slot}>{children}</div>;

// Usage
<Dialog header={<CustomHeader>Title</CustomHeader>} />;
```

**Note:** React Portals are NOT supported in slot props (will log warning).

### CSS and Shadow DOM Styling

Web component internals are in Shadow DOM. Use `::part()` pseudo-element:

```css
/* ❌ WRONG - can't pierce shadow DOM */
.myButton button {
  background: red;
}

/* ✅ CORRECT - use ::part() for shadow DOM */
.myCheckbox::part(root) {
  display: flex;
  width: unset;
}

.actionSheet::part(content) {
  padding: 0.1875rem 0.375rem;
}
```

Use SAP CSS variables directly:

```css
.myComponent {
  background: var(--sapBackgroundColor);
  color: var(--sapTextColor);
  border-radius: var(--sapElement_BorderCornerRadius);
  font-family: var(--sapFontFamily);

  /* Semantic colors */
  --success: var(--sapPositiveColor);
  --error: var(--sapNegativeColor);
  --warning: var(--sapCriticalColor);
  --info: var(--sapInformativeColor);
}
```

Internal component variables use `--_ui5wcr*` prefix:

```tsx
const style = {
  '--_ui5wcr-AnalyticalTableRowHeight': `${rowHeight}px`,
} as CSSProperties;
```

### SSR Compatibility

Components must work in both SPA and SSR environments. Wrappers use `suppressHydrationWarning` because web component internal state doesn't serialize consistently.

## Core Architecture

### Base Package Imports

The `@ui5/webcomponents-react-base` package uses subpath exports. Always use the specific subpath, not the root import:

```tsx
// ❌ WRONG - don't use root import
import { useSyncRef } from '@ui5/webcomponents-react-base';

// ✅ CORRECT - use subpath exports
import { useI18nBundle, useViewportRange } from '@ui5/webcomponents-react-base/hooks';
import {
  useSyncRef,
  useStylesheet,
  useIsRTL,
  useIsomorphicLayoutEffect,
  useCurrentTheme,
} from '@ui5/webcomponents-react-base/internal/hooks';
import { debounce, throttle, enrichEventWithDetails } from '@ui5/webcomponents-react-base/internal/utils';
import { Device } from '@ui5/webcomponents-react-base/Device';
```

**Available subpath exports:**

- `./hooks` - Public hooks: `useI18nBundle`, `useViewportRange`
- `./internal/hooks` - Internal hooks: `useSyncRef`, `useStylesheet`, `useIsRTL`, `useIsomorphicLayoutEffect`, `useCurrentTheme`
- `./internal/utils` - Utilities: `debounce`, `throttle`, `enrichEventWithDetails`
- `./Device` - Device detection utilities
- `./types` - TypeScript types

### Package Structure

| Package            | npm Name                              | Description                                   |
| ------------------ | ------------------------------------- | --------------------------------------------- |
| `main`             | `@ui5/webcomponents-react`            | React wrappers + custom components            |
| `base`             | `@ui5/webcomponents-react-base`       | Core utilities, hooks, wrapper infrastructure |
| `charts`           | `@ui5/webcomponents-react-charts`     | Chart components (recharts-based)             |
| `compat`           | `@ui5/webcomponents-react-compat`     | Legacy components                             |
| `cli`              | `@ui5/webcomponents-react-cli`        | Wrapper generation, codemods                  |
| `cypress-commands` | `@ui5/webcomponents-cypress-commands` | Testing utilities                             |
| `ai`               | `@ui5/webcomponents-ai-react`         | AI component wrappers                         |

### Main Package Structure

- `src/webComponents/`: **Auto-generated** wrappers (Button, Input, Dialog, etc.)
- `src/components/`: **Custom** React components (AnalyticalTable, ObjectPage, FilterBar)
- `src/enums/`: TypeScript enums
- `src/i18n/`: Internationalization

### Wrapper Architecture

The `withWebComponent` HOC (`packages/base/src/internal/wrapper/withWebComponent.tsx`):

```typescript
withWebComponent<Props, RefType>(
  tagName: string,           // 'ui5-button'
  regularProperties: string[], // String/number attributes
  booleanProperties: string[], // Boolean attributes (React 18 vs 19 handling)
  slotProperties: string[],    // Named slots
  eventProperties: string[]    // Custom events
)
```

**React version handling:**

- **React 19+**: Native JSX event attributes, direct boolean passing
- **React 18**: Manual `addEventListener`, conditional boolean attributes

## Working in This Repo

Use **yarn** (not pnpm). For tools, use project binaries via yarn (e.g., `yarn cypress`, `yarn eslint`, `yarn tsc`).

**Run prettier on edited files after changes.**

**Testing single files:** Try `yarn test` first. If that doesn't work, use `yarn cypress run --spec <path>`. If still stuck, ask.

```bash
yarn start           # Storybook (localhost:6006)
yarn test            # Cypress component tests
yarn lint            # ESLint
yarn prettier:all    # Format all files
```

## Testing Patterns

### Data Attributes

Components use `data-*` attributes for functional purposes (not just testing). Use existing attributes for selectors:

```tsx
cy.get('[data-component-name="AnalyticalTableContainer"]');
cy.get('[data-row-index="0"]');
```

**Do not create data attributes solely for testing.**

### Cypress Commands

`packages/cypress-commands` provides commands for interacting with web components in tests (typing into inputs, selecting options, etc.).

## TypeScript Patterns

### Component Interface Pattern

```typescript
// Three-tier pattern used consistently:
interface ButtonAttributes {
  /* web component props */
}
interface ButtonDomRef extends Required<ButtonAttributes>, Ui5DomRef {
  // DOM methods like focus(), click()
}
interface ButtonPropTypes extends ButtonAttributes, Omit<CommonProps, keyof ButtonAttributes> {
  // React additions: slots, children
}
```

### Slot Type

```typescript
badge?: UI5WCSlotsNode;  // ReactNode | ReactNode[]
```

## Internationalization

```tsx
import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks';

const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
const text = i18nBundle.getText(CLEAR);

// Also available for web components bundle
const wcBundle = useI18nBundle('@ui5/webcomponents');
```

Import assets for translations:

```typescript
import '@ui5/webcomponents-react/dist/Assets.js';
```

Test with URL param: `?sap-ui-language=de`

## Breaking Changes

If a change could be considered breaking, inform the user.

## Accessibility

See [UI5 Web Components Accessibility](https://ui5.github.io/webcomponents/docs/advanced/accessibility/).

**Web component wrappers:** Accessibility handled by UI5 Web Components. Wrappers pass through `accessibleName`, `accessibleNameRef`, ARIA props.

**Custom components** (AnalyticalTable, ObjectPage, FilterBar, etc.) combine web components with standard HTML elements (`div`, `span`, etc.). These require manual accessibility implementation:

- ARIA roles/attributes on standard HTML elements
- Keyboard navigation
- Screen reader announcements
- Focus management

## Abstract Components

Components marked with `@abstract` in JSDoc (e.g., `SuggestionItem`, `Tab`, `WizardStep`, `ToolbarButton`) are placeholders that pass props to their parent's shadow root. They don't render their own DOM.

**Implications:**

- **Not stylable** - `style`, `className` have no visual effect
- **Native HTML attributes** - `title`, `data-*`, etc. apply to the placeholder, not the rendered element
- **Native events** - registered on the placeholder element, not the actual rendered component
- **`getDomRef()`** - returns the parent's DOM element representing this item, not the placeholder itself
