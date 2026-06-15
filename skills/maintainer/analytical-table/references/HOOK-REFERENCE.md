# AnalyticalTable Hook Reference

Companion docs: [REACT-TABLE-PIPELINE.md](REACT-TABLE-PIPELINE.md) for hook execution order, prop-getter accumulation, and the safe two-hook mutation pattern; [STATE-MANAGEMENT.md](STATE-MANAGEMENT.md) for the actions each hook dispatches; [PERFORMANCE-PATTERNS.md](PERFORMANCE-PATTERNS.md) for the perf rationale behind `useDynamicColumnWidths` / `useColumnResizing` / `useRowSelect`.

## Plugin Order in `useTable()`

`useTable.ts:53` auto-prepends `useColumnVisibility` to whatever plugin list is passed. The full effective order is:

```typescript
useTable(
  config,
  // --- Auto-prepended by useTable itself ---
  // useColumnVisibility (vendored: react-table/hooks/useColumnVisibility.ts)

  // --- Vendored react-table plugins (must come first) ---
  useFilters, // 1. Column filtering
  useGlobalFilter, // 2. Global search
  useColumnOrder, // 3. Column reorder state
  useGroupBy, // 4. Row grouping
  useSortBy, // 5. Column sorting
  useExpanded, // 6. Row expand/collapse

  // --- UI5WCR fork (replaces upstream useRowSelect) ---
  useRowSelect, // 7. UI5WCR fork — no upstream useRowSelect is vendored

  // --- UI5WCR internal hooks (order matters) ---
  useColumnResizing, // 8. Deferred column resize (replaces react-table's)
  useColumnsDeps, // 9. Column dependency tracking
  useRowSelectionColumn, // 10. Adds selection checkbox column
  useAutoResize, // 11. Double-click auto-resize
  useSingleRowStateSelection, // 12. Click/keyboard row selection (all modes)
  useSelectionChangeCallback, // 13. Fires onRowSelect callback (deferred)
  useRowHighlight, // 14. Status indicator column
  useRowNavigationIndicators, // 15. Navigation arrow column
  useDynamicColumnWidths, // 16. Smart/Grow width calculation
  useStyling, // 17. CSS classes and inline styles
  useToggleRowExpand, // 18. Row expand tracking + callback + InvisibleMessage
  useA11y, // 19. ARIA attributes
  usePopIn, // 20. Responsive column pop-in
  useVisibleColumnsWidth, // 21. Total visible width calculation
  useKeyboardNavigation, // 22. Arrow/Home/End/PageUp/PageDown navigation
  useColumnDragAndDrop, // 23. Column drag-and-drop reorder
  ...tableHooks, // 24+. User-provided plugins (LAST — can clobber prior hooks)
);
```

**`pluginName` is required.** `ensurePluginOrder` (vendored at `react-table/publicUtils.tsx:92-123`) throws if a plugin lacks it. Examples in source: `hooks/useDynamicColumnWidths.ts:489` ensures `useColumnResizing` runs first; `hooks/useSelectionChangeCallback.ts:14` ensures `useRowSelect` runs first. Future plugins can use `ensurePluginOrder` against any internal hook by name.

## Internal Hooks (22 files in `hooks/`)

### Column & Layout Hooks

| Hook                       | Registration Points                                                                                                | Notes                                                                                                                                                                                                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **useDynamicColumnWidths** | `hooks.columns`, `hooks.useInstanceBeforeDimensions`                                                               | Two-hook sandwich: captures raw sizing into `instance.rawColumnSizing` (Map; no leading underscore), then mutates header widths. Three modes: Default, Smart, Grow. Canvas-based text measurement, samples first 20 rows. Calls `ensurePluginOrder(['useColumnResizing'])`. Gated on `fontsReady`. |
| **useColumnResizing**      | `hooks.getResizerProps` (creates), `hooks.stateReducers`, `hooks.useInstance`, `hooks.useInstanceBeforeDimensions` | Deferred resize with CSS transforms during drag, single dispatch on mouseup. 3px dead zone. RTL delta inversion. Clamps to minWidth/maxWidth. `getResizerProps` is **created** here (not in defaults).                                                                                             |
| **useColumnsDeps**         | `hooks.columnsDeps`, `hooks.visibleColumnsDeps`                                                                    | Adds `webComponentsReactProperties` slice (`selectionMode`, `selectionBehavior`, `withRowHighlight`, `highlightField`, `withNavigationHighlight`, `updateOnSortClear`) as column dependency so columns re-run when these flip.                                                                     |
| **useVisibleColumnsWidth** | `hooks.useInstance`                                                                                                | Computes `instance.visibleColumnsWidth` array for layout calculations.                                                                                                                                                                                                                             |
| **usePopIn**               | `hooks.visibleColumns`, `hooks.visibleColumnsDeps`                                                                 | Filters columns by `responsiveMinWidth` vs `tableClientWidth`. Hidden columns pop into first column (Block/Inline display). Updates `popInColumns` state.                                                                                                                                          |
| **useAutoResize**          | `hooks.getResizerProps`, `hooks.getCellProps`                                                                      | Handles double-click on column resizer to auto-fit content width. Dispatches `AUTO_RESIZE` action. Adds `data-column-id-cell` via `getCellProps` for DOM measurement. Cancelable via `onAutoResize` `e.preventDefault()`.                                                                          |

### Row & Selection Hooks

| Hook                           | Registration Points                                                                                                                                                                                               | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **useRowSelect**               | `hooks.getToggleRowSelectedProps` (creates), `hooks.getToggleAllRowsSelectedProps` (creates), `hooks.getToggleAllPageRowsSelectedProps` (creates), `hooks.stateReducers`, `hooks.useInstance`, `hooks.prepareRow` | UI5WCR **fork** of react-table's `useRowSelect` (no upstream copy is vendored). `selectedFlatRows` is memoized via `useMemo` (deps: `[rows, selectSubRows, selectedRowIds, getSubRows, isSelectionEnabled]`). Stable noop references when disabled (`emptyArray`, `noopToggle`, `noopGetProps`). Indeterminate uses `selectedFlatRows.length` (visible only) — diverges from upstream which counts all selected rows including filtered. `isAllRowsSelected` NOT memoized. |
| **useRowSelectionColumn**      | `hooks.columns`, `hooks.visibleColumns`, `hooks.getHeaderProps`, `hooks.getCellProps`                                                                                                                             | Adds selection checkbox column. Width from CSS variable `--_ui5wcr-AnalyticalTable-SelectionColumnWidth`. Header CheckBox stores `pendingSelectEvent` for the deferred `onRowSelect` callback.                                                                                                                                                                                                                                                                             |
| **useSingleRowStateSelection** | `hooks.getRowProps`                                                                                                                                                                                               | Click/keyboard handlers across **all** selection modes (not just single). Calls `toggleRowSelected` directly, stores `pendingSelectEvent` on instance for `useSelectionChangeCallback`. Fires `onRowContextMenu` from `onContextMenu` prop. Tag blocklist uses `getTagNameWithoutScopingSuffix`.                                                                                                                                                                           |
| **useSelectionChangeCallback** | `hooks.useInstance`                                                                                                                                                                                               | Fires `onRowSelect` callback in a `useEffect` watching `selectedRowIds`. Consumes `instance.pendingSelectEvent`. **Skipped if `selectedRowIds` did not actually change.** Calls `ensurePluginOrder(['useRowSelect'])`.                                                                                                                                                                                                                                                     |
| **useRowHighlight**            | `hooks.columns`, `hooks.visibleColumns`                                                                                                                                                                           | Adds a highlight/status indicator column (colored bar).                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **useRowNavigationIndicators** | `hooks.columns`, `hooks.visibleColumns`                                                                                                                                                                           | Adds navigation arrow column for row-level navigation indication.                                                                                                                                                                                                                                                                                                                                                                                                          |
| **useToggleRowExpand**         | `hooks.getToggleRowExpandedProps`                                                                                                                                                                                 | Tracks expand/collapse and fires `onRowExpandChange` callback. Also calls `InvisibleMessage.announce()` (debounced 200ms; the only live-region announcement in the table). Default `noPropagation: true` — chevron click does NOT bubble to `onRowClick`; F4/Space/Enter pass `false`.                                                                                                                                                                                     |

### Styling & Accessibility Hooks

| Hook                      | Registration Points                                                                            | Notes                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **useStyling**            | `hooks.getHeaderGroupProps`, `hooks.getHeaderProps`, `hooks.getRowProps`, `hooks.getCellProps` | CSS classes for alignment, borders, selection state, group headers. Sets `role="row"` on rows. Firefox-specific layout tweaks. NOT an a11y hook.                                                                                                                                                                                                                                                                  |
| **useA11y**               | `hooks.getHeaderProps`, `hooks.getCellProps`, `hooks.getHeaderGroupProps`                      | Builds `aria-labelledby` ID chain for cells (NOT `aria-label`); appends pop-in IDs and VoiceOver header IDs. Sets `aria-selected` (cell) / `aria-expanded` (first cell of expandable rows) — these are **mutually exclusive** (`if/else if`). Sets `aria-rowindex: 1` on header group only. Does NOT set `tabIndex` on cells (keyboard nav does, imperatively) and does NOT set `role="row"` (`useStyling` does). |
| **useKeyboardNavigation** | `hooks.getTableProps`, `hooks.getHeaderProps`                                                  | Arrow keys, Home, End, PageUp, PageDown. Does **NOT** handle F2 or Tab/Shift+Tab — those are in `useF2CellEdit` (opt-in). `getHeaderProps` adds Shift+Arrow column resize (dispatches `columnStartResizing`/`columnResizing` ±16px/`columnDoneResizing` — `headerIdWidths` is `[id, width, min, max]`). Short-circuits when `state.cellContentTabIndex === 0`.                                                    |

### Drag & Drop

| Hook                                         | Registration Points    | Notes                                                                                                                                                                                   |
| -------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **useColumnDragAndDrop** (useDragAndDrop.ts) | `hooks.getHeaderProps` | Column reorder via drag-and-drop. Uses `dispatch` for `COLUMN_DND_START`/`COLUMN_DND_END` + `setColumnOrder`. No global disable knob — only per-column `disableDragAndDrop` is honored. |

### Utility Hooks (no `useTable` plugin registration)

| Hook                   | Notes                                                                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **useScrollToRef**     | Provides imperative scrolling API on the user-facing ref. Routes through dispatched `TRIGGER_PROG_SCROLL` state — back-to-back calls in one render coalesce. |
| **useSyncScroll**      | Syncs vertical scrollbar position with table body via `useEffect`.                                                                                           |
| **useFontsReady**      | Detects when fonts finish loading. `useDynamicColumnWidths` is gated on this — without `document.fonts`, columns stay at the 150 default.                    |
| **useCanUseVoiceOver** | Detects macOS/iOS VoiceOver. `useA11y` appends column header IDs to cell `aria-labelledby` when true.                                                        |
| **useIsFirefox**       | Browser detection. Drives layout/scroll tweaks only — NOT an a11y branch.                                                                                    |

## Plugin Hooks (7 in `pluginHooks/` plus the `AnalyticalTableHooks` namespace export)

User-facing plugins passed via `tableHooks`. Imported as `AnalyticalTableHooks.<name>` from `@ui5/webcomponents-react`.

| Plugin                           | Factory                                  | Registration                                                                                                                               | Notes (beyond MCP)                                                                                                                                                                                                                                                       |
| -------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **useManualRowSelect**           | `useManualRowSelect(key = 'isSelected')` | `hooks.useInstanceAfterData`                                                                                                               | Sets `autoResetSelectedRows = false` **only if not already defined** on instance. Skips `toggleRowSelected` when state would not change.                                                                                                                                 |
| **useOrderedMultiSort**          | `useOrderedMultiSort(orderedIds)`        | `hooks.stateReducers`                                                                                                                      | Reorders `sortBy` array by priority on `toggleSortBy`.                                                                                                                                                                                                                   |
| **useIndeterminateRowSelection** | `useIndeterminateRowSelection(callback)` | `hooks.getToggleRowSelectedProps`, `hooks.stateReducers`, `hooks.useInstanceAfterData`                                                     | No-op unless `isTreeTable && Multiple && selectionBehavior !== RowOnly`. Auto-selects parents when all siblings selected. Callback signature: `(rowsById, instance) => void`.                                                                                            |
| **useF2CellEdit**                | Direct plugin (not a factory)            | `hooks.getTableProps`, `hooks.getCellProps`, `hooks.getHeaderProps`, `hooks.stateReducers`, `hooks.useInstanceBeforeDimensions`            | Adds `aria-description` "Press F2 to move to content" on the table. Tab from header → body cell same column at `lastFocusedBodyRowRef`/row 1; Shift+Tab body → header. Static method `useF2CellEdit.useCallbackRef<T>(props)` is mandatory for interactive cell content. |
| **useRowDisableSelection**       | `useRowDisableSelection(accessor)`       | `hooks.getHeaderProps`, `hooks.getRowProps`, `hooks.columns`, `hooks.columnsDeps`, `hooks.getCellProps`, `hooks.getToggleRowSelectedProps` | `accessor: string \| (row) => boolean`. **Deprecated.**                                                                                                                                                                                                                  |
| **useOnColumnResize**            | `useOnColumnResize(callback, opts?)`     | `hooks.useFinalInstance`, conditionally `hooks.getResizerProps`                                                                            | Options: `{ liveUpdate?: boolean; wait?: number = 100 }`. `getResizerProps` registration is gated on `liveUpdate: true`.                                                                                                                                                 |
| **useAnnounceEmptyCells**        | Direct plugin                            | `hooks.getCellProps`                                                                                                                       | Appends `cellEmptyDescId` to **`aria-labelledby`** (not `aria-label`). Treats `0` as non-empty; `''`/`null`/`undefined`/`false` as empty.                                                                                                                                |

## Factory Pattern for Plugin Hooks

Plugin hooks that accept configuration use a factory pattern:

```typescript
// Factory: returns the actual plugin function
export const useManualRowSelect = (manualRowSelectedKey = 'isSelected') => {
  const useInstanceAfterData = (instance) => { /* uses manualRowSelectedKey */ };
  const manualRowSelect = (hooks) => {
    hooks.useInstanceAfterData.push(useInstanceAfterData);
  };
  manualRowSelect.pluginName = 'useManualRowSelect';
  return manualRowSelect;
};

// Usage in tableHooks prop (memoize for stable closures):
const tableHooks = useMemo(() => [useManualRowSelect('selected')], []);
<AnalyticalTable tableHooks={tableHooks} />
```

The factory call returns a new function reference each time, but react-table rebuilds hook arrays from scratch every render (`makeDefaultPluginHooks()` + `plugin(hooks)` loop). Unmemoized factory plugins do NOT cause state resets or cascading re-renders — plugin functions are never in `useMemo` dependency arrays. Memoize only to keep closure-captured args stable.

## Creating a New Internal Hook

Canonical real-world references:

- **Two-hook sandwich (capture + mutate):** `hooks/useDynamicColumnWidths.ts`
- **Custom prop-getter chain replacing react-table defaults:** `hooks/useColumnResizing.ts` (`getResizerProps`) and `hooks/useRowSelect.ts` (`getToggleRowSelectedProps`)
- **`useEffect`-based callback firing:** `hooks/useSelectionChangeCallback.ts`
- **Factory plugin (user-facing via `tableHooks`):** `pluginHooks/useManualRowSelect.ts`

Skeleton below — replace placeholder names with real ones from your hook.

### 1. Create the hook file

Place it in `packages/main/src/components/AnalyticalTable/hooks/` (internal) or `pluginHooks/` (consumer-facing via `tableHooks`).

Real-world skeleton (excerpted from `hooks/useSelectionChangeCallback.ts` — a `useInstance`-only hook that fires a callback when state changes):

```typescript
import { useEffect, useRef } from 'react';
import { ensurePluginOrder } from '../react-table/index.js';
import type { ReactTableHooks, TableInstance } from '../types/index.js';

const useInstance = (instance: TableInstance) => {
  const { webComponentsReactProperties, state, plugins } = instance;
  const { selectedRowIds } = state;
  const { onRowSelect } = webComponentsReactProperties;

  // Order requirement — throws at registration if violated.
  ensurePluginOrder(plugins, ['useRowSelect'], 'useSelectionChangeCallback');

  const prevSelectedRowIdsRef = useRef(selectedRowIds);

  // Hook callbacks are called every render in stable order — useEffect/useRef are safe here.
  useEffect(() => {
    if (prevSelectedRowIdsRef.current !== selectedRowIds) {
      onRowSelect?.(/* ... */);
    }
    prevSelectedRowIdsRef.current = selectedRowIds;
  }, [selectedRowIds, onRowSelect]);
};

export const useSelectionChangeCallback = (hooks: ReactTableHooks) => {
  hooks.useInstance.push(useInstance);
};
useSelectionChangeCallback.pluginName = 'useSelectionChangeCallback'; // required
```

For prop-getter callbacks (`getRowProps`, `getCellProps`, etc.), the signature is `(accumulatedProps, { instance, row, ... }) => props | [props, extraProps]`. See `hooks/useStyling.ts` for a hook that pushes to four prop-getter chains.

### 2. Register in `useTable()` (internal hooks only)

Add the hook to the `useTable()` call in `packages/main/src/components/AnalyticalTable/index.tsx`. **Order matters** — hooks that depend on state/instance set by earlier hooks must come after them. See the plugin order block above. User `tableHooks` are appended LAST, so internal hooks cannot block a user hook from clobbering them.

### 3. Understand the invocation patterns

react-table has two ways of calling hook callbacks. See [REACT-TABLE-PIPELINE.md](REACT-TABLE-PIPELINE.md) for full details.

- **`reduceHooks`** (pipeline hooks: `columns`, `visibleColumns`, `stateReducers`, etc.) — callback receives previous result, MUST return next value. Returning `undefined` throws.
- **`loopHooks`** (side-effect hooks: `useInstance`, `useInstanceAfterData`, `useInstanceBeforeDimensions`, `prepareRow`, `useFinalInstance`) — callback receives the instance, must NOT return a value. Returning anything throws in dev mode.
- **Prop getters** (`getRowProps`, `getCellProps`, etc.) — callback receives `(accumulatedProps, meta)`, returns a props object or `[props, extraProps]` tuple. Props are accumulated via reduce; `style` is deep-merged, `className` is concatenated.

### 4. Performance constraints

- **Never return new objects from `hooks.columns` or `hooks.visibleColumns`** — this triggers the full cascading pipeline. Use the two-hook sandwich: capture in `hooks.columns`, mutate in `hooks.useInstanceBeforeDimensions`. See [REACT-TABLE-PIPELINE.md](REACT-TABLE-PIPELINE.md).
- **Side-effect hooks must not return a value.**
- **`hooks.someArray = [fn]` initializes a chain that has no defaults** (e.g., `useColumnResizing` does this for `getResizerProps`, `useRowSelect` for `getToggleRowSelectedProps`/`getToggleAllRowsSelectedProps`/`getToggleAllPageRowsSelectedProps`). Use `hooks.someArray.push(fn)` to add to an existing chain.

### 5. Accessing AnalyticalTable configuration

All AT-specific UI config lives on `instance.webComponentsReactProperties`:

```typescript
const { selectionMode, isTreeTable, tableRef, onRowClick } = instance.webComponentsReactProperties;
```

This bag keeps AT options separate from react-table's. Hooks that need react-table-level options (e.g., `autoResetSelectedRows`, `manualFilters`) add those directly to the `useTable` options as normal.

### Available hook points (full list)

**Pipeline hooks** (transform data, must return value):
`useOptions`, `columns`, `columnsDeps`, `allColumns`, `allColumnsDeps`, `visibleColumns`, `visibleColumnsDeps`, `headerGroups`, `headerGroupsDeps`, `materializedColumns` (declared but never invoked by vendored `useTable`), `materializedColumnsDeps` (same), `accessValue` (per-cell during row materialization), `stateReducers`, `useControlledState`

**Side-effect hooks** (must NOT return value):
`useInstanceAfterData`, `useInstanceBeforeDimensions`, `useInstance`, `useFinalInstance`, `prepareRow`

**Prop getter hooks** (return props or `[props, extraProps]`):
`getTableProps`, `getTableBodyProps`, `getHeaderGroupProps`, `getFooterGroupProps`, `getHeaderProps`, `getFooterProps`, `getRowProps`, `getCellProps`, `getResizerProps`, `getToggleRowSelectedProps`, `getToggleAllRowsSelectedProps`, `getToggleAllPageRowsSelectedProps`, `getToggleRowExpandedProps`, `getToggleAllRowsExpandedProps`, `getSortByToggleProps`, `getGroupByToggleProps`, `getToggleHiddenProps`, `getToggleHideAllColumnsProps`
