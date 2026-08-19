---
name: analytical-table
description: Use ALWAYS for AnalyticalTable internals — react-table v7 plugin architecture, vendored react-table code at packages/main/src/components/AnalyticalTable/react-table/, tableHooks, AnalyticalTableHooks, useDynamicColumnWidths, useColumnResizing, useRowSelect, useF2CellEdit, useManualRowSelect, useIndeterminateRowSelection, useOnColumnResize, selectionMode, selectionBehavior, onRowSelect, onRowClick, onRowContextMenu, scaleWidthMode, infiniteScroll, isTreeTable, renderRowSubComponent, columnResizing, dynamic column widths, row virtualization, scroll-to-row freezes, deferred selection events, ARIA roles on grid/treegrid, aria-rowindex under virtualization, custom Cell/Header/Filter/Popover render-prop columns. Apply on ANY task that reads or modifies files under packages/main/src/components/AnalyticalTable/. SKIP for plain prop / event / ref-method / column-property lookups — those are in the ui5-wcr MCP `get_component_api`.
---

# AnalyticalTable Expert

Start with **Key Behaviors** below; jump to a reference file only when its topic comes up.

## react-table v7 is vendored, not a dependency

react-table v7 lives at `packages/main/src/components/AnalyticalTable/react-table/` — in-tree, not a node_modules dependency. Imports are relative (`./react-table/index.js`). Grepping `node_modules/react-table` returns nothing — search the vendored tree. For the re-export list, the structure of the vendored copy, and the upstream-fallback path when the in-tree copy doesn't answer a question, see [REACT-TABLE-PIPELINE.md](references/REACT-TABLE-PIPELINE.md).

---

## Key Behaviors

### autoReset Defaults

react-table defaults all `autoReset*` options to `true`. Most reset on `data` changes: `autoResetSelectedRows`, `autoResetSortBy`, `autoResetFilters`, `autoResetGlobalFilter`, `autoResetGroupBy`, `autoResetExpanded`, `autoResetHiddenColumns`. The exception is `autoResetResize`, which resets on `columns` changes (not `data`).

**Not used by AnalyticalTable:** `autoResetPage` (no `usePagination` plugin) and `autoResetRowState` (no `useRowState` plugin) have no effect.

Hooks that need stable state across data changes (e.g., `useManualRowSelect`) must set `autoResetSelectedRows = false` on the instance. The main `stateReducer` also handles `SET_SELECTED_ROW_IDS` for programmatic overrides.

### Selection Mechanics

**UI5 tag blocklist:** `useSingleRowStateSelection` checks `tagNamesWhichShouldNotSelectARow` — a Set of UI5 Web Component tag names (Button, Link, Input, CheckBox, Select, etc.) defined at `util/index.ts:21-56`. Clicking these inside a cell does NOT trigger row selection. The check uses `getTagNameWithoutScopingSuffix(e.target.tagName)` (`packages/main/src/internal/utils.ts:52-55`) so scoped tag names like `ui5-button-foo123` still match.

**`markerAllowTableRowSelection`:** Checked on both `e` and `e.nativeEvent`. When `true`, overrides the blocklist and allows the click to trigger selection.

**Native HTML elements** are NOT in the blocklist. A `<button>`, `<input>`, or `<a>` inside a cell WILL trigger row selection unless `e.stopPropagation()` is called.

**`onRowSelect` is deferred, not synchronous.** `useSingleRowStateSelection` and `useRowSelectionColumn` store `instance.pendingSelectEvent` and a `useEffect` in `useSelectionChangeCallback` consumes it after `selectedRowIds` actually changes (`hooks/useSingleRowStateSelection.ts:53`, `hooks/useSelectionChangeCallback.ts:21-67`, `hooks/useRowSelectionColumn.tsx:70`). Two consequences: (1) `e.preventDefault()`/`e.stopPropagation()` inside `onRowClick` does **not** suppress `onRowSelect`; (2) `onRowSelect` is **skipped entirely** if the click did not actually change `selectedRowIds` (e.g., re-clicking the already-selected row in single-select mode).

**`onRowClick` always fires before `onRowSelect`.** The sole exception is clicking the checkbox itself (`e.target?.dataset?.name === 'internal_selection_column'`). Cell-level `data-selection-cell="true"` does NOT suppress `onRowClick` (`hooks/useSingleRowStateSelection.ts:29-31`). `data-selection-cell` is also a string, so compare `=== 'true'`, never just truthy.

### Keyboard Navigation Pattern

Keyboard nav splits across two hooks:

- **`useKeyboardNavigation`** (always on) — Arrow keys, Home, End, PageUp, PageDown. Uses `findParentCell()` recursion (`hooks/useKeyboardNavigation.ts:41`) and `currentlyFocusedCell.current` to track focus, NOT a `currentTarget !== target` guard.
- **`useF2CellEdit`** (opt-in via `tableHooks`) — F2, Tab/Shift+Tab. Gates with the **positive** form `e.currentTarget === e.target` (`pluginHooks/useF2CellEdit.ts:87,97,105,129,156`) to detect cell-level events vs. interactive-child events.

**End/Home:** Uses `data-column-index` (absolute) to find the target cell. If the cell is already in DOM, focus is synchronous. Only when the cell is outside the virtualization window does the handler scroll `tableRef.current.scrollLeft` and focus after `requestAnimationFrame` (`hooks/useKeyboardNavigation.ts:66-79,199-228`).

**onKeyDown is short-circuited during F2 edit mode:** When `state.cellContentTabIndex === 0`, the table's main `onKeyDown` skips arrow/Home/End/PageUp/PageDown and only forwards to user-supplied `tableProps.onKeyDown` (`hooks/useKeyboardNavigation.ts:352-366`). Don't add nav-key handlers expecting them to coexist with edit mode.

**PageUp/PageDown** read `[data-component-name="AnalyticalTableBody"].children[0].children.length` (`hooks/useKeyboardNavigation.ts:237-238`). PageDown jumps to the last _currently rendered virtual_ row, not the last data row.

**Cell data attributes:** Each cell has two column index attributes:

- `data-column-index` — **absolute** index (`virtualColumn.index`). Use this for `querySelector`.
- `data-visible-column-index` — **relative** index within currently rendered virtual items. Never use this for `querySelector` after scrolling.

Sibling row attrs: `data-row-index` (header = 0, body = `virtualRow.index + 1`), `data-visible-row-index` (1-based viewport index, header = 0). Sub-component cells use `data-row-index-sub` / `data-column-index-sub`; sub-component wrappers must carry `data-subcomponent`; interactive elements inside need `data-subcomponent-active-element` to bypass focus stealing (`hooks/useKeyboardNavigation.ts:31-39,290-340`).

**`tableRef` vs user-facing ref:** `tableRef` (from `webComponentsReactProperties`) is the inner scroll container div — use `tableRef.current.scrollLeft` for direct scroll manipulation. The user-facing DOM ref (`<AnalyticalTable ref={...}>`) is the root wrapper div, extended with imperative scroll methods via `useScrollToRef`. **Programmatic `ref.scrollTo*()` calls dispatch `TRIGGER_PROG_SCROLL` and are processed via `state.triggerScroll`** (`index.tsx:401-409`, `tableReducer/stateReducer.ts:80-81`) — back-to-back calls within one render coalesce because the effect observes the final state value.

### `AnalyticalTableHooks` namespace

User-facing plugins ship under one namespace import:

```tsx
import { AnalyticalTable, AnalyticalTableHooks } from '@ui5/webcomponents-react';

const tableHooks = useMemo(() => [AnalyticalTableHooks.useManualRowSelect('selected')], []);
<AnalyticalTable tableHooks={tableHooks} columns={columns} data={data} />;
```

The namespace is the only public way to reach the plugin functions. `tableHooks` is typed opaquely as `((hooks) => void)[]` in MCP, but the namespace itself carries proper types — import it and TypeScript will infer the rest.

Available members (all set `pluginName`):

- **`useManualRowSelect(manualRowSelectedKey = 'isSelected')`** — Syncs selection from a data property. Registers on `hooks.useInstanceAfterData`. Sets `autoResetSelectedRows = false` on instance **only if not already defined**. Skips `toggleRowSelected` when `shouldBeSelected === isSelected` (perf fix; `pluginHooks/useManualRowSelect.ts:24-32`).
- **`useOrderedMultiSort(orderedIds: string[])`** — Reorders `sortBy` by priority. Registers on `hooks.stateReducers`.
- **`useIndeterminateRowSelection(callback?: (rowsById, instance) => void)`** — Marks parent rows indeterminate when some children selected. **No-op unless `isTreeTable && selectionMode === 'Multiple' && selectionBehavior !== 'RowOnly'`** (`pluginHooks/useIndeterminateRowSelection.tsx:167-173`). Auto-selects parents when all siblings selected (mutates `selectedRowIds` in `stateReducer`, lines 110-130) — `onRowSelect.detail.selectedRowIds` then differs from the clicked row.
- **`useF2CellEdit`** — F2 cell editing **plus header↔body Tab/Shift+Tab navigation**. Registers on `getTableProps` (adds `aria-description` "Press F2 to move to content"), `getCellProps`, `getHeaderProps`, `stateReducers` (`CELL_CONTENT_TAB_INDEX`), `useInstanceBeforeDimensions`. Tab from header lands on the body cell at `lastFocusedBodyRowRef`/row 1 same column; Shift+Tab from body returns to the header. F2 only fires when `e.currentTarget === e.target && interactiveElementName` is set (`pluginHooks/useF2CellEdit.ts:87`).
  - **`AnalyticalTableHooks.useF2CellEdit.useCallbackRef<T>(props)`** is mandatory for every interactive element in a cell with `interactiveElementName` — it manages `tabindex` 0/-1 from `state.cellContentTabIndex` and walks `getFocusDomRefAsync()` to reach the focusable node inside UI5 web components (`pluginHooks/useF2CellEdit.ts:214-244`). Wrapping the input in a div and attaching the callback ref to the wrapper sets the wrapper's `tabindex`, not the input's — attach it directly to the focusable element.
  - **`interactiveElementName` overrides `aria-label`** — when set, the cell's `aria-label` becomes `"Includes <name> <previous label>"` and `aria-labelledby` is dropped (`pluginHooks/useF2CellEdit.ts:75-79,141`; `hooks/useA11y.ts:90-97`).
- **`useRowDisableSelection(accessor: string | (row) => boolean)`** — Disables selection on specific rows. **Deprecated; no replacement.** Don't suggest a swap-in for new code; either keep using it as-is or implement disable logic in `useManualRowSelect` callbacks.
- **`useOnColumnResize(callback, { liveUpdate?: boolean; wait?: number = 100 })`** — Fires callback on column resize. Registers on `hooks.useFinalInstance`. With `liveUpdate: true`, also registers on `hooks.getResizerProps` to fire continuously during drag (debounced by `wait`).
- **`useAnnounceEmptyCells`** — Appends `cellEmptyDescId` to **`aria-labelledby`** (not `aria-label`) on cells whose value is `''`/`null`/`undefined`/`false`. `0` is **not** treated as empty. Falsy JSX returned from a custom `Cell` is announced as empty (`pluginHooks/useAnnounceEmptyCells.ts:22-23`).

---

## Key Rules

1. **Never cause cascading re-renders** — Returning new objects from `hooks.columns` triggers the full react-table pipeline (`columns → allColumns → rows → visibleColumns → headers`). With 1000+ rows this causes freezes/OOM in dev mode. Mutate in `hooks.useInstanceBeforeDimensions` instead.

2. **Two-hook sandwich pattern** — Capture original values in `hooks.columns` (before `decorateColumn` mutates), then mutate `header.width`/`header.originalWidth` in `hooks.useInstanceBeforeDimensions`. This is how `useDynamicColumnWidths` works. The instance Map is `instance.rawColumnSizing` (no leading underscores).

3. **Deferred rendering during drag** — Column resize uses CSS `transform` during drag with a single state dispatch on `mouseup`. Zero renders during drag.

4. **Selection mode handling** — When `selectionMode === 'None'`, `useRowSelect` returns stable noop references and skips all computation (incl. `prepareRow` short-circuiting `row.toggleRowSelected`/`row.getToggleRowSelectedProps`/`row.isSomeSelected`). When selection IS enabled, `selectedFlatRows` is memoized via `useMemo` with deps `[rows, selectSubRows, selectedRowIds, getSubRows, isSelectionEnabled]`. `isAllRowsSelected` is NOT memoized (O(keys), acceptable cost). `useSingleRowStateSelection` registers on `hooks.getRowProps` and adds click/keyboard handlers across all selection modes; it checks grouped rows, the UI5 tag blocklist, `markerAllowTableRowSelection`, fires `onRowClick` synchronously, and `toggleRowSelected` (which then triggers the deferred `onRowSelect` via `pendingSelectEvent`).

5. **`originalWidth` must stay in sync** — `useColumnResizing.useInstanceBeforeDimensions` reads `header.originalWidth` as fallback (via `??`). Always set both `header.width` and `header.originalWidth` when mutating.

6. **Plugin order matters** — Plugins in `useTable()` run in registration order. `pluginName` is required (not just convention) — `ensurePluginOrder` throws if missing. User `tableHooks` are appended LAST (`index.tsx:333`), so a custom hook writing `header.width` in `useInstanceBeforeDimensions` overwrites `useDynamicColumnWidths`. See [HOOK-REFERENCE.md](references/HOOK-REFERENCE.md).

## Synthetic Columns

Three internal columns are injected by hooks:

| Column ID                              | Hook                       | Position  |
| -------------------------------------- | -------------------------- | --------- |
| `__ui5wcr__internal_selection_column`  | useRowSelectionColumn      | Prepended |
| `__ui5wcr__internal_highlight_column`  | useRowHighlight            | Prepended |
| `__ui5wcr__internal_navigation_column` | useRowNavigationIndicators | Appended  |

These columns are not in user-provided `columnOrder`; react-table handles unknown columns gracefully (appends them). `useA11y.setHeaderProps` keys off this `__ui5wcr__internal_*` prefix to inject translated header `aria-label`s — custom hooks must not reuse the prefix or they'll inherit those branches.

The selection column reads its width from CSS variable `--_ui5wcr-AnalyticalTable-SelectionColumnWidth` (44px fallback, `util/index.ts:8,64-75`). Setting it via `reactTableOptions.columns` won't stick because the column is re-injected at `hooks/useRowSelectionColumn.tsx:128-143`.

## High-Impact Gotchas

Non-obvious behaviors. Every entry has a code reference.

### Width / resize

- **`useDynamicColumnWidths` skips ALL recalculation while `columnResizing.columnWidths` is non-empty** — A single double-click `AUTO_RESIZE` writes one entry and disables dynamic widths for **every** column until `actions.resetResize` fires (only on `columns` reference change) or container resizes >20px. Newly-shown columns won't get dynamic widths. Code: `hooks/useDynamicColumnWidths.ts:494-507`, `hooks/useAutoResize.tsx:34-37`, `hooks/useColumnResizing.ts:287-291`.
- **`useDynamicColumnWidths` early-returns when `fontsReady` is false** — Width calc is gated on `document.fonts.ready` resolving. Environments without `document.fonts` keep columns at the react-table default of 150. Tests must `await` font ready or stub. Code: `hooks/useDynamicColumnWidths.ts:494-501`, `index.tsx:200`.
- **Horizontal column virtualization is OFF in Smart/Grow scaleWidthMode and in RTL** — `overscan: Infinity` (i.e. all columns rendered) when `isRtl || scaleWidthMode !== Default`. The "default 10" overscan only applies to `Default` mode in LTR. Don't assume the table column-virtualizes uniformly. Code: `index.tsx:377`.
- **`scaleWidthMode: Smart`/`Grow` ignores columns without `accessor`** — Width sampling reads `item.values?.[id]`; missing accessor collapses to header-only width or ~60px if header is also empty. Workaround: `scaleWidthModeOptions.cellString`. Code: `hooks/useDynamicColumnWidths.ts:97-105,272-283`.
- **`TABLE_RESIZE` 20px dead zone** — Sub-20px container shrinks (e.g., a scrollbar appearing) keep stale resized widths when `retainColumnWidth` is off. Code: `tableReducer/stateReducer.ts:36-43`.
- **`autoResetResize` resets on `columns` reference, not data** — In addition to the standard "memoize columns" rule, an unstable `columns` reference also nukes resize state. Code: `hooks/useColumnResizing.ts:283-291`.

### Selection / events

- **Header indeterminate uses `selectedFlatRows.length`, NOT `selectedRowIds`** — Filtered-out selected rows do NOT trigger indeterminate (UI5WCR fork divergence from upstream). Code: `hooks/useRowSelect.ts:86`.
- **`onRowContextMenu`'s `column` is undefined on right-clicks landing in row padding** — The handler walks `closest('[data-column-index]')`; right-click on whitespace yields `undefined`. Code: `hooks/useSingleRowStateSelection.ts:90-96`.
- **`useToggleRowExpand`'s click handler stops propagation by default** — `noPropagation = true` means clicking the chevron does NOT bubble to `onRowClick`. F4 and Space/Enter pass `false`, so keyboard expansion DOES fire `onRowClick`. Code: `hooks/useToggleRowExpand.ts:18-21,49,56`.
- **`useExpanded` runs before `useRowSelect`, and `selectSubRows` defaults to `false`** — Toggling a parent does not cascade selection to children. Set `reactTableOptions={{ selectSubRows: true }}` for cascading. Code: `index.tsx:252,315-316`.
- **`onAutoResize` is cancelable** — `if (e.defaultPrevented) return;` skips the dispatch. Use `e.preventDefault()` for custom auto-resize logic. Code: `hooks/useAutoResize.tsx:31-37`.
- **`onLoadMore`/`onTableScroll`'s `rowElements` is a live `HTMLCollection`** — Storing it across renders surfaces different DOM nodes after virtual scroll. Code: `TableBody/VirtualTableBodyContainer.tsx:83`.
- **`subRowsKey` falls back to BOTH user key AND `'subRows'`** — `getSubRowsByString` returns `row.subRows || row[subRowsKey]` for non-dotted keys. Data with both `children` (custom key) and an unrelated `subRows` field uses `subRows`. Dotted keys (e.g., `'values.subRows'`) skip the fallback. Code: `util/index.ts:138-143`.

### State / refs

- **`tableInstance` prop is mutated synchronously during render** — `index.tsx:418-423` checks `hasOwnProperty(tableInstance, 'current')` and assigns during render, not in an effect. Reading the instance inside a `useEffect` captures a stale snapshot — read it inline or via a ref synced each render.
- **Switching `visibleRowCountMode` from Auto to Fixed dispatches an extra `VISIBLE_ROWS` action with `undefined`** — Tests asserting render counts trip on this. Code: `index.tsx:545-552`, `tableReducer/stateReducer.ts:48-52`.
- **Loading overlay swaps the keyboard target** — When `showOverlay`, the overlay div takes `tabIndex={0} role="region"` and the grid drops to `tabIndex={-1}`; `useKeyboardNavigation` no-ops. Code: `index.tsx:776-794`, `hooks/useKeyboardNavigation.ts:90-95,348-350`.
- **`alwaysShowBusyIndicator` is irrelevant when `rows.length === 0`** — Without it set, an empty data array shows the skeleton placeholder, not the busy indicator. Code: `index.tsx:768,835-840`.

### Pipeline / hooks

- **`useColumnsDeps` re-runs the column pipeline on selection/highlight prop flips** — Toggling `selectionMode`, `selectionBehavior`, `withRowHighlight`, `highlightField`, `withNavigationHighlight`, or (tree only) `updateOnSortClear` forces `hooks.columns` to re-run. Code: `hooks/useColumnsDeps.ts:10-19`.
- **`renderRowSubComponent` silently disables grouping in Expandable mode** — `disableGroupBy = isTreeTable || (!alwaysShowSubComponent && renderRowSubComponent)`. With `subComponentsBehavior` `Visible`/`IncludeHeight`, grouping stays enabled. Code: `index.tsx:251`.
- **Table-wide `disableSortBy: !sortable` overrides per-column `disableSortBy: false`** — react-table OR-s these flags, so individual columns cannot re-enable sorting when `sortable={false}`. Same for `filterable`. Code: `index.tsx:249-250`.
- **There is no global drag-and-drop disable knob** — Drag wiring is unconditional; only per-column `column.disableDragAndDrop` is honored. To "lock all columns", annotate every column. Code: `hooks/useDragAndDrop.ts:84-87`, `ColumnHeader/ColumnHeaderContainer.tsx:75`.

## Accessibility

### ARIA roles

- Root: `role="grid"` (`role="treegrid"` when `isTreeTable`), `aria-rowcount={rows.length}`, `aria-colcount={visibleColumns.length}`, `aria-multiselectable={selectionMode === 'Multiple'}` (`index.tsx:794-798`). Counts reflect post-pipeline shape — popped-in columns reduce `aria-colcount`; group rows count as ordinary rows.
- **Tree-grid omits `aria-level`/`aria-setsize`/`aria-posinset`** — Depth is communicated only by visual padding plus `aria-expanded` on the first user cell. Authors of tree-table cells should not assume hierarchy attrs are emitted (`index.tsx:794`, `defaults/Column/Expandable.tsx:14-27`).
- `aria-rowindex` is **data-row position**, not DOM position. Body rows get `virtualRow.index + 2` (header is row 1). With virtualization the rendered DOM is sparse; never derive position from DOM order. Code: `TableBody/VirtualTableBody.tsx:163`, `hooks/useA11y.ts:157-159`.

### Cell labelling

Cell `aria-label` is **not** set by `useA11y`. Instead, `useA11y` builds an `aria-labelledby` ID chain referencing the cell value `<span id="${uniqueId}${columnId}${rowId}">` and (under VoiceOver via `useCanUseVoiceOver`) the column header span (`hooks/useA11y.ts:34-36,53-65`). Two implications:

1. Custom `Cell` renderers must keep that value `<span id=…>` discoverable, OR pass `cellLabel: (cell) => string` on the column to populate `aria-label` (which then nulls `aria-labelledby`).
2. Setting `interactiveElementName` on a column makes the cell `aria-label = "Includes ${name} ${prevLabel}"` and drops `aria-labelledby` entirely.

**Pop-in cells** require stable IDs `popin-h-${id}-${rowId}` / `popin-v-${id}-${rowId}` on the header and value spans. `useA11y` extends the first user cell's `aria-labelledby` with these IDs. Custom `PopInHeader` or `Cell` renderers that drop the IDs produce empty announcements. Pop-in wrappers themselves are `aria-hidden="true"`, but `aria-labelledby` references _IDs_ and traverses `aria-hidden`. Code: `defaults/Column/PopIn.tsx:80-91`, `hooks/useA11y.ts:51-65`.

### Selection ARIA — what is and isn't there

- **No `role="checkbox"`/`aria-checked` on the selection cell.** The inner `CheckBox` web component is `aria-hidden="true"`. Selection state is exposed solely via `aria-selected` on the cell + `aria-multiselectable` on the grid. Code: `hooks/useRowSelectionColumn.tsx:23-32,41-47`.
- **No `aria-checked="mixed"`.** `useIndeterminateRowSelection` only toggles the visual `indeterminate` attribute on the inner CheckBox; there is no ARIA mapping. Code: `pluginHooks/useIndeterminateRowSelection.tsx:97-104`.
- **`aria-expanded` and `aria-selected` are mutually exclusive on the first cell** — `useA11y` uses `if/else if`, so a row that is both expandable and selected won't announce its selection state on the first cell. Code: `hooks/useA11y.ts:67-89`.

### Keyboard / focus

`tabIndex` on cells is mutated imperatively by `useKeyboardNavigation.setFocus` / `getFirstVisibleCell`, NOT by `useA11y`. `role="row"` is set by `useStyling.getRowProps` and the default plugin hook. Sort/filter/group popovers use `accessibleRole={ListAccessibleRole.Menu}` on the inner `List` and `accessibleRole={PopupAccessibleRole.None}` on the wrapping `Popover`, with `aria-haspopup="menu"` / `aria-expanded` / `aria-controls` on the header cell (`defaults/Column/ColumnHeaderModal.tsx:190-262`, `ColumnHeader/index.tsx:203-205`). Custom column `Popover`s bypass this and must be authored with menu semantics manually.

Header sort/filter/group annotations: `useA11y` mutates `column.headerLabel ??= ''` and appends i18n strings. `aria-sort` is `"ascending"`/`"descending"` only when sorted; the unsorted state has no `aria-sort` (no `"none"`). Code: `hooks/useA11y.ts:108-138`.

### Live regions

The only live-region announcement is row expand/collapse — `useToggleRowExpand` calls `InvisibleMessage.announce(text, 'Polite')` debounced 200ms. There is no announcement for sort, filter, group, loading, or selection changes. Code: `hooks/useToggleRowExpand.ts:1-8,42-44`.

`useF2CellEdit` adds `aria-description` to the table announcing the F2 affordance. Multiple registrations compound. Code: `pluginHooks/useF2CellEdit.ts:180-189`.

`useAnnounceEmptyCells` extends `aria-labelledby` (NOT `aria-label`) on cells whose value is `''`/`null`/`undefined`/`false`. `0` is non-empty.

### Empty state

`NoDataComponent` uses `accessibleRole="gridcell"`, wrapped in `<div role="row" tabIndex={0}>` so the table stays focusable. Custom NoDataComponents must render `role={accessibleRole}`. Code: `index.tsx:827-852`, `defaults/NoDataComponent/index.tsx:1-12`.

## Reference Files

Loaded on demand. Pick by topic:

- [REACT-TABLE-PIPELINE.md](references/REACT-TABLE-PIPELINE.md) — Read when authoring or debugging anything that returns from `hooks.columns`/`visibleColumns`, when you need the exact hook execution order, when modifying the vendored `react-table/` files, or when you need the safe two-hook mutation pattern.
- [HOOK-REFERENCE.md](references/HOOK-REFERENCE.md) — Read when adding a new internal hook or `tableHooks` plugin, when you need a hook's exact registration points, or when looking up which hook owns a given behavior.
- [PERFORMANCE-PATTERNS.md](references/PERFORMANCE-PATTERNS.md) — Read when investigating render storms / scroll jank / dev-mode freezes, working on virtualization, or debugging selection performance.
- [STATE-MANAGEMENT.md](references/STATE-MANAGEMENT.md) — Read when working with the table reducer, custom action types, controlled state, or `selectedRowIds`/`columnResizing`/`expanded` persistence.
