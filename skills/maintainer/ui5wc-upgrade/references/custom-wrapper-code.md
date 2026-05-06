# Custom Code in Generated Wrappers

These wrappers have hand-written customizations that the generator overwrites on every run.
After running the wrapper generator, restore the custom code described below.

If the generated output changed for any of these components (new props, renamed events, etc.),
**merge** the custom code with the new generated base. If the merge is not possible (e.g.,
a type the custom code depends on was removed), **STOP and inform the user**.

---

## ExpandableText (`packages/main/src/webComponents/ExpandableText/index.tsx`)

### Custom import

Add after the other imports:

```tsx
import { addCustomCSSWithScoping } from '@ui5/webcomponents-react-base/internal/utils';
```

### Custom CSS injection (top-level, after imports)

```tsx
//todo: remove once ExpandableText supports setting white-space
addCustomCSSWithScoping(
  'ui5-expandable-text',
  `
:host([data-_render-whitespace]) [ui5-text]{
white-space: pre-wrap;
}`,
);
```

### DeprecatedExpandableTextProps interface (before ExpandableTextAttributes)

```tsx
interface DeprecatedExpandableTextProps {
  /**
   * Text of the component.
   *
   * @deprecated: Please use `text` instead.
   */
  children?: string;
  /**
   * Determines if the full text should be displayed inside a `ResponsivePopover` or in-place.
   *
   * @deprecated: Please use `overflowMode` instead.
   */
  showOverflowInPopover?: boolean;
  //todo: deprecate once white-space can be applied w/o addCustomCSS
  /**
   * Defines how white-space inside <code>Text</code> is handled. If set to true, sequences of white space are preserved.
   */
  renderWhitespace?: boolean;
}
```

### Modified PropTypes interface

The `ExpandableTextPropTypes` must extend `DeprecatedExpandableTextProps` and exclude
`children` from `CommonProps`:

```tsx
interface ExpandableTextPropTypes
  extends
    ExpandableTextAttributes,
    Omit<CommonProps, keyof ExpandableTextAttributes | 'children'>,
    DeprecatedExpandableTextProps {}
```

The generator will produce:

```tsx
interface ExpandableTextPropTypes extends ExpandableTextAttributes, Omit<CommonProps, keyof ExpandableTextAttributes> {}
```

### Modified JSDoc

Add to the component JSDoc, before the `__Note:__ This is a UI5 Web Component!` line:

```
 * __Note:__ For compatibility reasons, `children`, `showOverflowInPopover`, and `renderWhitespace` are added by the UI5 Web Components for React wrapper and are not part of the underlying web component (`ui5-expandable-text`).
 * These props will be removed in the next major release (not yet planned); see their deprecation notices for alternatives.
```

---

## Compat Table Components

All 5 compat table components share the same custom code pattern for MFE scoping support.

**Affected files:**

- `packages/compat/src/components/Table/index.tsx`
- `packages/compat/src/components/TableCell/index.tsx`
- `packages/compat/src/components/TableColumn/index.tsx`
- `packages/compat/src/components/TableGroupRow/index.tsx`
- `packages/compat/src/components/TableRow/index.tsx`

### Custom import

Add after the other `@ui5/webcomponents-compat` imports:

```tsx
import { getCompatCustomElementsScopingSuffix } from '@ui5/webcomponents-compat/dist/utils/CompatCustomElementsScope.js';
```

### Scoping suffix constants (top-level, after imports, before interfaces)

```tsx
const compatScopingSuffix = getCompatCustomElementsScopingSuffix();
const tagSuffix = compatScopingSuffix ? `-${compatScopingSuffix}` : '';
```

### Modified `withWebComponent` tag name

The generator produces a plain string tag name:

```tsx
const Table = withWebComponent<TablePropTypes, TableDomRef>(
  'ui5-table',
```

Replace with template literal using the suffix:

```tsx
const Table = withWebComponent<TablePropTypes, TableDomRef>(
  `ui5-table${tagSuffix}`,
```

Apply the same pattern for each component:

- `Table` → `` `ui5-table${tagSuffix}` ``
- `TableCell` → `` `ui5-table-cell${tagSuffix}` ``
- `TableColumn` → `` `ui5-table-column${tagSuffix}` ``
- `TableGroupRow` → `` `ui5-table-group-row${tagSuffix}` ``
- `TableRow` → `` `ui5-table-row${tagSuffix}` ``
