# @ui5/webcomponents-react

React wrappers for SAP UI5 Web Components plus custom Fiori-compliant React components.

## Installation

```bash
npm install @ui5/webcomponents-react @ui5/webcomponents @ui5/webcomponents-fiori
```

## Setup

Wrap your application with `ThemeProvider`:

```tsx
import { ThemeProvider } from '@ui5/webcomponents-react';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

**ThemeProvider Props:**

- `children` - Application content
- `staticCssInjected` - Set to `true` when you've imported static CSS (required for SSR/Next.js)

**SSR/Next.js Setup:**

```tsx
// layout.tsx or _app.tsx
import '@ui5/webcomponents-react/styles.css';

<ThemeProvider staticCssInjected>{children}</ThemeProvider>;
```

## TypeScript

### Type Import Patterns

The package provides its own types AND re-uses types from `@ui5/webcomponents`. Follow these patterns:

**Component Props and DOM Refs - import from `@ui5/webcomponents-react`:**

```tsx
// ✅ Props types and DomRef types - from the React package
import type { ButtonPropTypes, ButtonDomRef } from '@ui5/webcomponents-react/Button';
import type { DialogPropTypes, DialogDomRef } from '@ui5/webcomponents-react/Dialog';
import type { SideNavigationPropTypes } from '@ui5/webcomponents-react';

// Usage
const buttonRef = useRef<ButtonDomRef>(null);

// Event handlers - use the prop type's event property (includes detail types)
const handleClick: ButtonPropTypes['onClick'] = (e) => {
  // e.detail is fully typed
};
const handleSelectionChange: SideNavigationPropTypes['onSelectionChange'] = (e) => {
  console.log(e.detail.item.text); // fully typed
};
```

**Enums and Type Constants - import from `@ui5/webcomponents`:**

```tsx
// ✅ Enums/types - from the web components package directly
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';
import NavigationLayoutMode from '@ui5/webcomponents-fiori/dist/types/NavigationLayoutMode.js';

// Usage
<Button design={ButtonDesign.Emphasized}>Click</Button>
<ListItemStandard type={ListItemType.Navigation} />
<MessageStrip design={MessageStripDesign.Information} />
```

### Complete Example

```tsx
import { useState, useRef } from 'react';
import { Button, Dialog, SideNavigation, SideNavigationItem } from '@ui5/webcomponents-react';
import type { ButtonPropTypes, DialogDomRef, SideNavigationPropTypes } from '@ui5/webcomponents-react';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import homeIcon from '@ui5/webcomponents-icons/dist/home.js';

function MyComponent() {
  const dialogRef = useRef<DialogDomRef>(null);
  const [open, setOpen] = useState(false);

  const handleClick: ButtonPropTypes['onClick'] = (e) => {
    setOpen(true);
  };

  const handleSelectionChange: SideNavigationPropTypes['onSelectionChange'] = (e) => {
    console.log(e.detail.item.text);
  };

  return (
    <>
      <Button design={ButtonDesign.Emphasized} onClick={handleClick}>
        Open Dialog
      </Button>
      <Dialog ref={dialogRef} open={open} onClose={() => setOpen(false)}>
        Content
      </Dialog>
      <SideNavigation onSelectionChange={handleSelectionChange}>
        <SideNavigationItem text="Home" icon={homeIcon} />
      </SideNavigation>
    </>
  );
}
```

## Side-Effect Imports (Icons, Assets, Features)

UI5 Web Components require certain side-effect imports to function. These register components/assets at runtime.

### ⚠️ CRITICAL: Import Order

**Feature and asset imports MUST come BEFORE any component imports.** They register functionality at module load time - importing them after components means the registration happens too late.

```tsx
// ✅ CORRECT - assets FIRST
import '@ui5/webcomponents-react/dist/Assets.js';
import { Button } from '@ui5/webcomponents-react/Button'; // components after

// ❌ WRONG - components imported before assets
import { Button } from '@ui5/webcomponents-react/Button';
import '@ui5/webcomponents-react/dist/Assets.js'; // TOO LATE!
```

**For SSR/Next.js:** Use a separate file that is imported first:

```tsx
// ui5-config.ts - create this file
import '@ui5/webcomponents-react/dist/Assets.js';

// app entry point (index.tsx, main.tsx, layout.tsx)
import './ui5-config'; // MUST be the first import!
import { ThemeProvider } from '@ui5/webcomponents-react/ThemeProvider';
// ... other imports
```

**SSR/Next.js Critical:** These imports must be in **client components** (`'use client'` directive). In server components, they do nothing.

### Icon Imports

Icons must be imported before use. **Use named imports for better maintainability:**

```tsx
// ✅ Recommended - named imports
import addIcon from '@ui5/webcomponents-icons/dist/add.js';
import deleteIcon from '@ui5/webcomponents-icons/dist/delete.js';
import editIcon from '@ui5/webcomponents-icons/dist/edit.js';

// Use with the imported variable
<Button icon={addIcon}>Add Item</Button>
<Button icon={deleteIcon}>Delete</Button>

// ❌ Avoid - side-effect imports with magic strings
import '@ui5/webcomponents-icons/dist/add.js';
<Button icon="add">Add Item</Button>
```

### Asset Imports (i18n, Theming, CLDR)

**⚠️ ESSENTIAL:** Assets MUST be imported if you need **any** of these features:

- **Translations (i18n)** - Component UI texts in different languages
- **Theme switching** - Changing themes at runtime (Horizon, Fiori 3, dark modes, high contrast)
- **CLDR locale data** - Locale-specific date/time formatting, number formatting, calendar data

Without asset imports, components display English text only, theme switching won't work, and date/time components won't format correctly for different locales.

```tsx
// Standard installation (includes fiori package assets)
import '@ui5/webcomponents-react/dist/Assets.js';

// Minimal installation (without @ui5/webcomponents-fiori)
import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-react/dist/json-imports/i18n.js';
```

Test translations with URL param: `?sap-ui-language=de`

### Feature Imports

Optional features are loaded dynamically on demand. Available features include:

- `InputSuggestions` - Input suggestions while typing
- `ColorPaletteMoreColors` - "More colors" dialog in color palette
- Calendar types: Buddhist, Islamic, Japanese, Persian

See [UI5 Web Components Features](https://ui5.github.io/webcomponents/docs/advanced/using-features/) for details.

## Import Pattern

Use subpath imports for tree-shaking (especially in development):

```tsx
// ✅ Recommended - tree-shakeable
import { Button } from '@ui5/webcomponents-react/Button';
import { Input } from '@ui5/webcomponents-react/Input';
import { Dialog } from '@ui5/webcomponents-react/Dialog';
import { AnalyticalTable } from '@ui5/webcomponents-react/AnalyticalTable';

// ❌ Avoid - imports entire bundle
import { Button, Input, Dialog } from '@ui5/webcomponents-react';
```

**Convert existing imports:**

```bash
npx @ui5/webcomponents-react-cli codemod --transform export-maps --src ./src
```

## Critical: Event Handling

Web components emit **CustomEvents** with data in `e.detail`:

```tsx
// ❌ WRONG - won't work
const handleChange = (e) => {
  console.log(e.selectedOption);  // undefined!
};

// ✅ CORRECT - use e.detail
const handleChange = (e) => {
  console.log(e.detail.selectedOption);
};

// Common event patterns
<Input onInput={(e) => setValue(e.target.value)} />
<Select onChange={(e) => setSelected(e.detail.selectedOption)} />
<List onSelectionChange={(e) => handleSelection(e.detail.selectedItems)} />
<DatePicker onChange={(e) => setDate(e.detail.value)} />
```

## Critical: Slot Props

Custom components in slots **must forward the `slot` prop**:

```tsx
// ❌ WRONG - slot won't render
const CustomHeader = ({ children }) => <div>{children}</div>;

// ✅ CORRECT - forward slot prop
const CustomHeader = ({ children, slot }) => <div slot={slot}>{children}</div>;

// Usage
<Dialog header={<CustomHeader>Title</CustomHeader>} />
<Card header={<CustomHeader>Card Title</CustomHeader>} />
```

**Note:** React Portals are **not supported** in slot props.

## Styling

### CSS Variables (Recommended)

Use SAP CSS variables directly:

```css
.myComponent {
  background: var(--sapBackgroundColor);
  color: var(--sapTextColor);
  border-color: var(--sapField_BorderColor);
  border-radius: var(--sapElement_BorderCornerRadius);
  font-family: var(--sapFontFamily);

  /* Semantic colors */
  --success: var(--sapPositiveColor);
  --error: var(--sapNegativeColor);
  --warning: var(--sapCriticalColor);
  --info: var(--sapInformativeColor);
}
```

### Shadow DOM Styling

Web component internals use Shadow DOM. Use `::part()`:

```css
/* ❌ Can't pierce Shadow DOM */
.myButton button {
  background: red;
}

/* ✅ Use ::part() */
.myCheckbox::part(root) {
  display: flex;
  width: unset;
}

.myDialog::part(content) {
  padding: 1rem;
}
```

---

## Complex Components - Important Details

### Modals

**Critical:** Only mount ONE `<Modals />` component per application, otherwise multiple dialogs/popovers will display.

```tsx
import { Modals } from '@ui5/webcomponents-react/Modals';
import { ThemeProvider } from '@ui5/webcomponents-react/ThemeProvider';

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <Modals />
    <App />
  </ThemeProvider>,
);
```

**Available methods:**

- `Modals.showDialog(props, config)` - Returns `{ ref, close }`
- `Modals.showPopover(props, config)` - Returns `{ ref, close }`
- `Modals.showResponsivePopover(props, config)` - Returns `{ ref, close }`
- `Modals.showMenu(props, config)` - Returns `{ ref, close }`
- `Modals.showMessageBox(props, config)` - Returns `{ ref, close }`
- `Modals.showToast(props, config)` - Returns `{ ref }`

---

### AnalyticalTable

High-performance virtualized data table.

#### ⚠️ CRITICAL: Memoization Requirements

The AnalyticalTable is highly sensitive to reference changes. **Non-memoized props cause full re-renders and destroy performance.** The following MUST be memoized:

| Prop/Option             | Memoize With     | Impact if Not Memoized                     |
| ----------------------- | ---------------- | ------------------------------------------ |
| `columns`               | `useMemo`        | **Critical** - full table re-render        |
| `data`                  | `useMemo`        | **Critical** - full table re-render        |
| `tableHooks`            | `useMemo`        | Re-initializes all plugin hooks            |
| `selectedRowIds`        | `useMemo`        | Resets selection state on every render     |
| `markNavigatedRow`      | `useCallback`    | Re-renders navigation column               |
| `onTableScroll`         | `useCallback`    | **Critical** - fires on EVERY scroll event |
| `sortType` (in columns) | `useCallback`    | Re-sorts on every render                   |
| `Cell` component        | `memo`/`useMemo` | Re-renders all cells                       |
| `renderRowSubComponent` | `useCallback`    | Re-renders all subcomponents               |

```tsx
// ❌ WRONG - causes constant re-renders
<AnalyticalTable
  columns={[{ accessor: 'name' }]}
  data={fetchedData}
  tableHooks={[useAnnounceEmptyCells]}
  markNavigatedRow={(row) => row.original.id === selectedId}
  onTableScroll={(e) => console.log(e)}
/>;

// ✅ CORRECT - properly memoized
const columns = useMemo(
  () => [
    {
      accessor: 'name',
      Header: 'Name',
      Cell: memo(({ value }) => <span>{value}</span>), // memo for custom Cell
      sortType: useCallback((a, b) => a.localeCompare(b), []), // memoize if function
    },
  ],
  [],
);

const data = useMemo(() => fetchedData, [fetchedData]);

const tableHooks = useMemo(() => [useAnnounceEmptyCells], []);

const markNavigatedRow = useCallback((row) => row.original.id === selectedId, [selectedId]);

const handleTableScroll = useCallback((e) => {
  // Use throttle/debounce for expensive operations!
  console.log(e.detail.rows);
}, []);

<AnalyticalTable
  columns={columns}
  data={data}
  tableHooks={tableHooks}
  markNavigatedRow={markNavigatedRow}
  onTableScroll={handleTableScroll}
/>;
```

**Additional memoization tips:**

- `renderRowSubComponent` - memoize with `useCallback`, and consider memoizing the returned component for tree tables
- Custom `Filter` components in columns should be memoized
- `Popover` component in columns should be memoized

#### Features Without Design Specification / Limitations

The AnalyticalTable has features that do not have a defined UX design specification. To follow UXC guidelines:

| Feature                        | Status                                                                                                     |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| No sticky columns/rows         | Not supported due to technical limitations                                                                 |
| Pop-in behavior                | `sap.ui.table` doesn't support pop-in (unlike `sap.m.Table`); unclear if this should be part of design     |
| `visibleRowCountMode: "Auto"`  | `"AutoWithEmptyRows"` is preferred. `"Auto"` can lead to inconsistent table heights depending on container |
| `alwaysShowBusyIndicator`      | Should generally be `true`. Only if loading times are over 1 second is the default skeleton sufficient     |
| `scaleWidthMode`               | Only default mode is available out of the box for `sap.m.Table`                                            |
| `renderRowSubComponent`        | **No design/UX concept** for this functionality                                                            |
| `useIndeterminateRowSelection` | **No design/UX concept** for this functionality                                                            |
| `useRowDisableSelection`       | **Deprecated** - table rows should not be disabled                                                         |

#### Limitations

- **Grouping disabled with subcomponents:** When `renderRowSubComponent` is set, `grouping` is disabled.
- **IncludeHeight modes:** `AnalyticalTableSubComponentsBehavior.IncludeHeight` and `IncludeHeightExpandable` do not support `AnalyticalTableVisibleRowCountMode.Interactive`.
- **Custom Cell scaling:** Automatic scaling of custom cells is not supported with `scaleWidthMode: Grow` or `Smart`. Use `scaleWidthModeOptions` column option to pass strings for width calculation.
- **Pop-in columns:** When using `responsivePopIn`, at least one column must remain visible at all times. It's recommended to only offer sorting/filtering/grouping for columns that are always displayed.
- **Hidden columns state reset:** React-table resets hidden column state - set `autoResetHiddenColumns: false` in `reactTableOptions` to prevent this.

#### Preventing Table State Reset on Data Changes

By default, the table resets sorters, filters, grouping, selected rows when data changes:

```tsx
const skipPageResetRef = useRef(false);

const updateData = (newData) => {
  skipPageResetRef.current = true;
  setData(newData);
};

useEffect(() => {
  skipPageResetRef.current = false;
});

<AnalyticalTable
  data={data}
  columns={columns}
  retainColumnWidth // prevent column width reset
  reactTableOptions={{
    autoResetSelectedRows: !skipPageResetRef.current,
    autoResetSortBy: !skipPageResetRef.current,
    autoResetFilters: !skipPageResetRef.current,
    autoResetGroupBy: !skipPageResetRef.current,
    autoResetExpanded: !skipPageResetRef.current,
    autoResetHiddenColumns: !skipPageResetRef.current,
  }}
/>;
```

#### Row Selection with Active Elements

UI5 Web Components (Button, Link, Input, etc.) block row selection by default. To allow selection when clicking these elements:

```tsx
<Link
  onClick={(e) => {
    e.markerAllowTableRowSelection = true;
  }}
>
  My Link Text
</Link>
```

For other elements, call `event.stopPropagation()` or check the target.

#### Distinguishing onRowClick vs onRowSelect

When clicking a selectable cell, both events fire. Check for the selection cell:

```tsx
const onRowClick = (e) => {
  if (e.target.dataset.selectionCell === 'true') {
    // selection cell clicked
  } else {
    // other cell clicked
  }
};
```

#### Subcomponents with Active Elements

Add `data-subcomponent-active-element` attribute for consistent focus behavior:

```tsx
const renderRowSubComponent = (row) => (
  <div>
    <Button data-subcomponent-active-element>Click</Button>
  </div>
);
```

#### Server-side Sorting/Filtering/Grouping

```tsx
<AnalyticalTable
  reactTableOptions={{
    manualSortBy: true,
    manualFilters: true,
    manualGroupBy: true,
  }}
/>
```

#### Custom Cell Ellipsis

For custom `Cell` renderers returning React elements, use `webComponentsReactProperties.classes.textEllipsis`:

```tsx
Cell: ({ value, webComponentsReactProperties }) => (
  <span className={webComponentsReactProperties.classes.textEllipsis} title={value}>
    {value}
  </span>
);
```

#### Dialogs/Popovers in Custom Cells

Mount modals outside the table when possible. If inside a cell:

- Use conditional rendering
- Call `event.stopPropagation()` for focus/keyboard events:

```tsx
<Dialog
  onFocus={(e) => e.stopPropagation()}
>
```

#### Inputs in Cells - Arrow Key Navigation

Stop arrow key propagation to allow caret movement:

```tsx
<Input
  onKeyDown={(e) => {
    if (e.key.startsWith('Arrow')) {
      e.stopPropagation();
    }
  }}
/>
```

#### Scrolling Methods

Available on DOM ref:

- `scrollTo(offset, align?)` - Scroll to pixel offset
- `scrollToItem(index, align?)` - Scroll to row index
- `horizontalScrollTo(offset, align?)`
- `horizontalScrollToItem(index, align?)`

---

### ObjectPage

**Limitation:** In iframes, smooth scrolling is disabled.

**Toggling header programmatically:**

```tsx
const objectPageRef = useRef<ObjectPageDomRef>(null);
objectPageRef.current.toggleHeaderArea(); // toggle
objectPageRef.current.toggleHeaderArea(true); // snap
objectPageRef.current.toggleHeaderArea(false); // expand
```

**Fullscreen section (TabBar mode only):**

```tsx
<ObjectPageSection titleText="Section" id="section" style={{ height: '100%', overflow: 'auto' }}>
  {/* Content */}
</ObjectPageSection>
```

**Note:** Using multiple sections with `height: 100%` will break your layout.

---

### FilterBar

#### Identifying Event Origin

When filters should only update from FilterBar (not FiltersDialog), check the dataset:

```tsx
const handleInput = (e) => {
  const firedInFilterBar = !!e.currentTarget.parentElement.dataset.inFilterBar;
  const firedInFiltersDialog = !!e.currentTarget.parentElement.dataset.inFiltersDialog;
};
```

#### Reordering

Enable with `enableReordering={true}`. Handle `onFiltersDialogSave` to persist order:

```tsx
const handleFiltersDialogSave = (e) => {
  setOrderedFilterKeys(e.detail.reorderedFilterKeys);
  setVisibleFilters(e.detail.selectedFilterKeys);
};
```

---

### VariantManagement

#### Custom Input Validation

Prevent internal save logic by marking the event as invalid:

```tsx
const handleSaveViewInput = (e) => {
  if (!e.target.value.match(/^[a-z0-9\s]+$/i)) {
    e.isInvalid = true; // prevents save
    setValueState(ValueState.Negative);
  } else {
    e.isInvalid = false;
    setValueState(undefined);
  }
};

<VariantItem
  saveViewInputProps={{
    valueState: valueState,
    valueStateMessage: <div>Error message</div>,
    onInput: handleSaveViewInput,
  }}
>
  Variant Name
</VariantItem>;
```

---

### MessageView

**Navigation pattern in Dialog/Popover:**

Don't set `showDetailsPageHeader`. Instead, listen to `onItemSelect` and use `navigateBack()`:

```tsx
const messageViewRef = useRef<MessageViewDomRef>(null);
const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);

<Dialog
  onClose={() => messageViewRef.current.navigateBack()}
  header={
    <Bar
      startContent={
        isOnDetailsPage && (
          <Button
            icon="slim-arrow-left"
            onClick={() => {
              setIsOnDetailsPage(false);
              messageViewRef.current.navigateBack();
            }}
          />
        )
      }
    />
  }
>
  <MessageView ref={messageViewRef} showDetailsPageHeader={false} onItemSelect={() => setIsOnDetailsPage(true)} />
</Dialog>;
```

---

### SplitterLayout

**Reset options via `options` prop:**

| Property                  | Description                             |
| ------------------------- | --------------------------------------- |
| `resetOnSizeChange`       | Reset when container size changes       |
| `resetOnChildrenChange`   | Reset when children change              |
| `resetOnCustomDepsChange` | Custom dependency list to trigger reset |
