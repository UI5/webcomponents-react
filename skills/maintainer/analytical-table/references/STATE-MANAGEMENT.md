# AnalyticalTable State Management

Companion docs: [HOOK-REFERENCE.md](HOOK-REFERENCE.md) for hook registration points; [REACT-TABLE-PIPELINE.md](REACT-TABLE-PIPELINE.md) for `stateReducers` invocation semantics.

## State Shape

```typescript
interface AnalyticalTableState {
  // --- react-table built-in ---
  columnOrder: string[]; // Column display order
  columnResizing: {
    isResizingColumn: string | null; // Column ID being resized
    columnWidths: Record<string, number>; // User-resized widths (persisted)
    columnWidth?: number; // Singular — width snapshot at resize start (`useColumnResizing.ts:204`)
    headerIdWidths?: [string, number, number, number][]; // [id, width, min, max] during drag
    startX?: number; // Drag start X coordinate
  };
  expanded: Record<string | number, any>; // Expanded row IDs
  filters: Filter[]; // Column filter state
  groupBy: string[]; // Grouped column IDs
  hiddenColumns: string[]; // Hidden column IDs
  selectedRowIds: Record<string | number, any>; // Selected row IDs (values typically boolean)
  sortBy: Record<string | number, any>[]; // Sort state (typically { id: string; desc: boolean })

  // --- UI5WCR custom ---
  tableClientWidth?: number; // Table container width (Math.floor'd)
  popInColumns?: PopInColumnsState[]; // Responsive pop-in columns
  interactiveRowsHavePopIn?: boolean; // Flag for interactive row pop-in
  isRtl?: boolean; // Right-to-left mode
  isScrollable?: boolean; // Whether table can scroll
  subComponentsHeight?: Record<string, { rowId: string; subComponentHeight?: number }>;
  visibleRows?: number; // Number of visible rows
  bodyHeight?: number; // Read in `index.tsx` but no reducer writes it (legacy/dead).
  triggerScroll?: TriggerScrollState; // Programmatic scroll target
  tableColResized?: true; // User has manually resized a column (set to `true` or cleared to `undefined`)
  rowCollapsed?: boolean; // Flag to prevent scroll-to-top on collapse
  dndColumn?: string; // Column being dragged
  cellContentTabIndex?: number; // Tab index for cell content (used by useF2CellEdit plugin)
  indeterminateRows?: Record<string, boolean>; // Set by useIndeterminateRowSelection's INDETERMINATE_ROW_IDS action

  // --- react-table built-in (vendored) — listed here because the type lives in the same shape ---
  globalFilter?: string; // Managed by vendored useGlobalFilter, not custom
}
```

## Custom Action Types

### Container & Layout

| Action                    | Payload                | Effect                                                                                                                                                                                                                             | Notes                                                                                                                           |
| ------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `TABLE_RESIZE`            | `{ tableClientWidth }` | `Math.floor`-normalizes width. Early-returns when `nextWidth === state.tableClientWidth` (`stateReducer.ts:28-31`). Updates `tableClientWidth`. Clears `columnResizing.columnWidths` if delta > 20px AND `!state.tableColResized`. | 20px dead zone prevents reset on scrollbar flicker. Sub-20px shrinks keep stale resized widths when `retainColumnWidth` is off. |
| `VISIBLE_ROWS`            | `{ visibleRows }`      | Updates `visibleRows`.                                                                                                                                                                                                             |                                                                                                                                 |
| `TABLE_SCROLLING_ENABLED` | `{ isScrollable }`     | Updates `isScrollable`.                                                                                                                                                                                                            | Tracks whether vertical scrollbar is active.                                                                                    |
| `IS_RTL`                  | `{ isRtl }`            | Updates `isRtl`.                                                                                                                                                                                                                   | Used by resize delta inversion.                                                                                                 |

### Selection

| Action                  | Payload              | Effect                                   | Notes                                                      |
| ----------------------- | -------------------- | ---------------------------------------- | ---------------------------------------------------------- |
| `SET_SELECTED_ROW_IDS`  | `{ selectedRowIds }` | Replaces `selectedRowIds`.               | For programmatic/controlled selection.                     |
| `toggleRowSelected`     | (built-in)           | Updates `selectedRowIds`.                | Handled by `useRowSelect` reducer. Recursive for sub-rows. |
| `toggleAllRowsSelected` | (built-in)           | Selects/deselects all non-grouped rows.  | Only considers `nonGroupedRowsById`.                       |
| `resetSelectedRows`     | (built-in)           | Resets to `initialState.selectedRowIds`. |                                                            |

### Column Resize

| Action                | Payload                                 | Effect                                                                                                                                               | Notes                                                                                                                                                                                                             |
| --------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `columnStartResizing` | `{ clientX, columnId, headerIdWidths }` | Sets `startX`, `headerIdWidths`, `isResizingColumn`.                                                                                                 | Records [id, width, minWidth, maxWidth] per header.                                                                                                                                                               |
| `columnResizing`      | `{ clientX }`                           | Updates `columnWidths` via `getProjectedWidth`.                                                                                                      | Clamps to min/max. RTL inversion applied here.                                                                                                                                                                    |
| `columnDoneResizing`  | —                                       | Clears `isResizingColumn` and `startX`; keeps `columnWidths`, `headerIdWidths`, and `columnWidth`.                                                   |                                                                                                                                                                                                                   |
| `resetResize`         | —                                       | `useColumnResizing`'s reducer clears the `columnResizing` state slice. The **main** `stateReducer.ts:70-72` clears `tableColResized` on this action. | Fired by `useColumnResizing` when `columns` change (if `autoResetResize` is `true`). Also imperative via `instance.resetResizing()`. The two-reducer split makes `retainColumnWidth` recompute on column changes. |
| `AUTO_RESIZE`         | `{ [columnId]: width }`                 | Merges into `columnResizing.columnWidths`.                                                                                                           | From double-click auto-resize. `useDynamicColumnWidths` short-circuits ALL recalculation while `columnResizing.columnWidths` is non-empty.                                                                        |
| `TABLE_COL_RESIZED`   | boolean                                 | Sets `tableColResized`.                                                                                                                              | Prevents TABLE_RESIZE from clearing user widths.                                                                                                                                                                  |

### Row Expand

| Action                  | Payload     | Effect                                                                                                                                                                                                 | Notes                                                       |
| ----------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `toggleRowExpanded`     | `{ id }`    | Built-in expand logic. The **main `stateReducer.ts:18-26`** intercepts this action and additionally sets `rowCollapsed: true` (the `useToggleRowExpand` hook itself only handles props/announcements). | `rowCollapsed` flag prevents scroll-to-top when collapsing. |
| `ROW_COLLAPSED_FLAG`    | boolean     | Sets `rowCollapsed`.                                                                                                                                                                                   | Reset after scroll adjustment.                              |
| `SUB_COMPONENTS_HEIGHT` | height data | Updates `subComponentsHeight`.                                                                                                                                                                         | For virtualization height estimation.                       |

### F2 Cell Edit

| Action                   | Payload     | Effect                         | Notes                                                                                                                                                                                |
| ------------------------ | ----------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `CELL_CONTENT_TAB_INDEX` | `0` \| `-1` | Updates `cellContentTabIndex`. | Handled by `useF2CellEdit` reducer (`pluginHooks/useF2CellEdit.ts:249-250`). When `0`, `useKeyboardNavigation` disables nav-key handlers so interactive elements receive arrow keys. |

### Indeterminate Selection (tree tables)

| Action                  | Payload                   | Effect                       | Notes                                                                                                           |
| ----------------------- | ------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `INDETERMINATE_ROW_IDS` | `Record<string, boolean>` | Updates `indeterminateRows`. | Handled by `useIndeterminateRowSelection` reducer (`pluginHooks/useIndeterminateRowSelection.tsx:133,174-176`). |

### Responsive & Pop-In

| Action                        | Payload       | Effect                              | Notes                                     |
| ----------------------------- | ------------- | ----------------------------------- | ----------------------------------------- |
| `SET_POPIN_COLUMNS`           | columns array | Updates `popInColumns`.             | Tracks which columns are in pop-in state. |
| `INTERACTIVE_ROWS_HAVE_POPIN` | boolean       | Updates `interactiveRowsHavePopIn`. |                                           |

### Drag & Drop

| Action             | Payload   | Effect                      | Notes                                 |
| ------------------ | --------- | --------------------------- | ------------------------------------- |
| `COLUMN_DND_START` | column id | Sets `dndColumn`.           | Used for visual feedback during drag. |
| `COLUMN_DND_END`   | —         | Clears `dndColumn` to `''`. |                                       |

### Scrolling

| Action                | Payload       | Effect                | Notes                                  |
| --------------------- | ------------- | --------------------- | -------------------------------------- |
| `TRIGGER_PROG_SCROLL` | scroll target | Sets `triggerScroll`. | For programmatic scroll-to-row/column. |

### Filtering

| Action      | Payload                     | Effect                                                                                                                              | Notes                                                                                                           |
| ----------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `setFilter` | `{ filterValue, columnId }` | Built-in `useFilters` reducer updates `state.filters`. Custom stateReducer fires `onFilter` callback without further state changes. | The filter state change happens in the built-in reducer; the custom reducer only adds the callback side-effect. |

## State Reducer Chain

Reducers run in registration order (`useTable.ts:106-110`). The order in `index.tsx:310-333` is:

**Internal hooks (in `useTable()`):**

1. **Vendored react-table built-in reducers** (`useFilters`, `useGlobalFilter`, `useColumnOrder`, `useGroupBy`, `useSortBy`, `useExpanded`).
2. **`useRowSelect`** reducer (registered BEFORE `useColumnResizing`) — selection actions; visible-only `selectedFlatRows`.
3. **`useColumnResizing`** reducer — column resize actions (`columnStartResizing`, `columnResizing`, `columnDoneResizing`, `resetResize` clearing only the `columnResizing` slice).

**Plugin hooks (user-provided, via `tableHooks`, appended LAST in registration order):**

4. **`useOrderedMultiSort`** reducer — Reorders `sortBy` by priority on `toggleSortBy`.
5. **`useIndeterminateRowSelection`** reducer — Handles `INDETERMINATE_ROW_IDS`; mutates `selectedRowIds` to auto-select parents on `toggleRowSelected` when all siblings selected.
6. **`useF2CellEdit`** reducer — Handles `CELL_CONTENT_TAB_INDEX`.

**Main table reducer (passed as the `useTable` `stateReducer` option, runs after all `hooks.stateReducers`):**

7. **`stateReducer` (`tableReducer/stateReducer.ts`)** — Handles all custom UI5WCR actions (`TABLE_RESIZE`, `SET_SELECTED_ROW_IDS`, `COLUMN_DND_START`/`END`, `IS_RTL`, `VISIBLE_ROWS`, `TABLE_SCROLLING_ENABLED`, `SET_POPIN_COLUMNS`, `INTERACTIVE_ROWS_HAVE_POPIN`, `SUB_COMPONENTS_HEIGHT`, `TRIGGER_PROG_SCROLL`, `AUTO_RESIZE`, `TABLE_COL_RESIZED`); intercepts `toggleRowExpanded` to dispatch `rowCollapsed`; clears `tableColResized` on `resetResize`; calls `setFilter` callback as side-effect.

**Note:** `useSingleRowStateSelection`, `useSelectionChangeCallback`, `useToggleRowExpand`, and `useColumnDragAndDrop` do NOT have state reducers — they work through props getters or `useInstance`/`useEffect`.

## State Persistence Gotchas

1. **`selectedRowIds` uses string keys** — Row IDs are stringified. `{ '0': true }` not `{ 0: true }`.
2. **`autoResetSelectedRows`** — Defaults to `true` in react-table (clears selection on data change). [`useManualRowSelect`](HOOK-REFERENCE.md#plugin-hooks-7-in-pluginhooks-plus-the-analyticaltablehooks-namespace-export) sets it to `false` automatically. Without that hook, consumers using the controlled `selectedRowIds` prop must set `autoResetSelectedRows: false` in `reactTableOptions` — the `useEffect` in `index.tsx` that dispatches `SET_SELECTED_ROW_IDS` won't re-fire on `data` change because its dep is the `selectedRowIds` prop reference, not `data`.
3. **`columnOrder` reconciliation** — Both vendored `useColumnOrder.visibleColumns` AND `useDragAndDrop.handleOnDrop` reconcile stale IDs. The DnD handler uses the same algorithm: iterates `columnOrder`, keeps only IDs that exist in current columns, appends new columns at end.

(For `columnWidths` retention, `tableColResized` gating, and `rowCollapsed` semantics, see the action tables above.)
