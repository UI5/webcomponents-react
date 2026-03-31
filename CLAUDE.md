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

### Controlled Components (MUST KNOW)

UI5 Web Components update internal state **before** firing events. For fully controlled components, call `e.preventDefault()` in the handler to prevent internal state updates (e.g., `Input.onInput`, `CheckBox.onChange`, `Select.onChange`, `Dialog.onBeforeClose`).

### Ref Handling (MUST KNOW)

When a component needs **both** a forwarded ref and internal access to the same DOM node, use `useSyncRef()` instead of `useRef()`:

```tsx
import { useSyncRef } from '@ui5/webcomponents-react-base/internal/hooks';

const MyComponent = forwardRef((props, ref) => {
  const [componentRef, internalRef] = useSyncRef(ref);

  useEffect(() => {
    // internalRef gives stable access to the DOM node inside the component
    internalRef.current?.focus();
  }, []);

  // componentRef is passed to the DOM element so both the forwarded ref and internalRef stay in sync
  return <div ref={componentRef} />;
});
```

If the ref is just passed through without internal usage, forward it directly - no `useSyncRef` needed.

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

## Tests (Cypress Component Tests)

### File Structure

Tests are co-located with components: `ComponentName.cy.tsx` next to `index.tsx`.

```
src/components/ActionSheet/
├── index.tsx
├── ActionSheet.cy.tsx      # Component tests
├── ActionSheet.stories.tsx # Storybook stories
└── ActionSheet.mdx         # Docs page
```

### Running Tests

```bash
yarn test                              # All tests
yarn cypress run --spec <path>         # Single file
yarn cypress open                      # Interactive mode
```

### Test Pattern

```tsx
import { ComponentName } from './index.js';

describe('ComponentName', () => {
  it('description', () => {
    cy.mount(<ComponentName prop="value" />);
    cy.get('[ui5-button]').should('be.visible');
    cy.findByText('Click').click();
  });
});
```

### Key Patterns

- **Shadow DOM enabled:** `includeShadowDom: true` in config - queries pierce shadow DOM automatically
- **Use web component selectors:** `[ui5-button]`, `[ui5-dialog]`, `[ui5-responsive-popover]`
- **Use existing data attributes:** `[data-component-name="..."]`, `[data-row-index="0"]` (don't create new ones just for tests)
- **Spy on events:** `const onEvent = cy.spy().as('onEvent')`, then `cy.get('@onEvent').should('have.been.calledOnce')`
- **Keyboard testing:** `cy.realPress('ArrowDown')`, `cy.realPress('Enter')`

### Cypress Commands Package

`@ui5/webcomponents-cypress-commands` provides helpers for web components:

```tsx
cy.get('[ui5-input]').typeIntoUi5Input('text');
cy.get('[ui5-select]').ui5SelectOption('Option 1');
```

## Stories (Storybook)

### File Structure

Stories are co-located: `ComponentName.stories.tsx` next to component. MDX docs pages (`ComponentName.mdx`) provide additional documentation.

### Running Storybook

```bash
yarn start    # Opens localhost:6006
```

### Story Pattern (CSF 3)

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentName } from './index.js';

const meta = {
  title: 'Category / ComponentName', // e.g., 'Inputs / Button'
  component: ComponentName,
  argTypes: {
    children: { control: { disable: true } }, // Disable controls for complex props
    slotProp: { control: { disable: true } },
  },
  args: {
    // Default prop values
    design: SomeEnum.Default,
  },
  tags: ['package:@ui5/webcomponents'], // Metadata tags
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}; // Uses args from meta

export const WithCustomRender: Story = {
  render(args) {
    const [state, setState] = useState(false);
    return <ComponentName {...args} open={state} />;
  },
};
```

### MDX Docs Pages

```mdx
import { ControlsWithNote, DocsHeader, Footer } from '@sb/components';
import { Canvas, Meta } from '@storybook/addon-docs/blocks';
import * as ComponentStories from './ComponentName.stories';

<Meta of={ComponentStories} />
<DocsHeader of={ComponentStories} subComponents={['ChildComponent']} />

## Example

<Canvas of={ComponentStories.Default} />

## Properties

<ControlsWithNote of={ComponentStories.Default} />

<Footer />
```

### Story Tags

- `package:@ui5/webcomponents` - Web component wrapper
- `package:@ui5/webcomponents-react` - Custom component
- `extends:@ui5/webcomponents` + `cem-module:ModuleName` - Extended web component

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
badge?: UI5WCSlotsNode;
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
