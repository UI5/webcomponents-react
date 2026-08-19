# Vendored react-table v7 Pipeline & Hook Architecture

react-table v7 is in-tree at `packages/main/src/components/AnalyticalTable/react-table/`, not a node_modules dependency. All references below point to the in-tree copy.

## Contents

- [Vendored layout](#vendored-layout) — directory structure of the in-tree copy + public re-exports
- [The Cascading Pipeline](#the-cascading-pipeline) — diagram + why it matters
- [Core Patterns (Not Typical React)](#core-patterns-not-typical-react) — plugins-aren't-hooks, reduceHooks vs loopHooks, prop-getter accumulation, single mutable instance, dynamic dependency injection
- [Hook Points (Execution Order)](#hook-points-execution-order) — every hook point in the order `useTable.ts` invokes them
- [`decorateColumn` Behavior](#decoratecolumn-behavior) — what gets mutated when
- [The Safe Mutation Pattern](#the-safe-mutation-pattern) — the two-hook sandwich (THE canonical example)
- [Plugin Registration](#plugin-registration) — `pluginName` requirement; initialize-vs-append semantics
- [`webComponentsReactProperties`](#webcomponentsreactproperties) — the AT config bag passed through `useTable` options
- [Last resort: consult upstream react-table v7](#last-resort-consult-upstream-react-table-v7) — escalation path when the in-tree copy + this skill genuinely don't answer the question

## Vendored layout

```
packages/main/src/components/AnalyticalTable/react-table/
├── index.ts                     # public re-exports
├── aggregations.ts
├── filterTypes.ts
├── makeDefaultPluginHooks.ts    # the canonical list of hook arrays
├── publicUtils.tsx              # makePropGetter, ensurePluginOrder, mergeProps, reduceHooks/loopHooks impls
├── sortTypes.ts
├── utils.ts                     # decorateColumn, getBy, flattenBy, expandRows, makeHeaderGroups, etc.
├── hooks/
│   ├── useColumnVisibility.ts   # auto-prepended to plugins by useTable
│   └── useTable.ts              # the orchestration entry point
└── plugin-hooks/
    ├── useColumnOrder.ts
    ├── useExpanded.ts
    ├── useFilters.ts
    ├── useGlobalFilter.ts
    ├── useGroupBy.ts
    └── useSortBy.ts
```

Public re-exports from `react-table/index.ts` include `actions`, `defaultColumn`, `makePropGetter`, `useGetLatest`, `ensurePluginOrder`, `decorateColumn`, `getFirstDefined`, `flexRender`, `useAsyncDebounce`, `safeUseLayoutEffect`, `getBy`, `flattenBy`, `expandRows`, `getElementDimensions`, `assignColumnAccessor`, `makeHeaderGroups`. Absent (relative to upstream react-table): `useRowSelect` — UI5WCR has a fork at `hooks/useRowSelect.ts` registered directly in `index.tsx`. See [HOOK-REFERENCE.md](HOOK-REFERENCE.md) for the full plugin list.

## The Cascading Pipeline

react-table v7 builds its instance in fixed order. Each stage depends on the previous — **returning new objects from an early stage re-runs the entire downstream pipeline.**

Stages (data structures and hook fire points, in order):

1. `columns` — input transformed by `hooks.columns`
2. `allColumns` — flattened via `hooks.allColumns`
3. `rows` — data materialized (most expensive stage; O(n) allocations)
4. ↳ `hooks.useInstanceAfterData` fires
5. `visibleColumns` — filtered/reordered by `hooks.visibleColumns`. `decorateColumn` runs inside this `useMemo` and mutates each column in place — sets `width=150` from `defaultColumn` on any column without an explicit width
6. `headerGroups` — built via `makeHeaderGroups(visibleColumns, ...)`
7. `headers` — `headerGroups[0].headers`
8. `flatHeaders` — all header-group headers flattened
9. ↳ `hooks.useInstanceBeforeDimensions` fires (mutate `header.width`/`header.originalWidth` here)

### Why This Matters

If a `hooks.columns` callback returns **new column objects** (even with identical data), react-table treats them as changed and re-runs the entire pipeline. With 1000+ rows, step 3 (`rows` materialization) is the dominant cost.

**The #1 performance trap** in AnalyticalTable development. The fix is the [Safe Mutation Pattern](#the-safe-mutation-pattern) — capture in `hooks.columns` (step 1), mutate in `hooks.useInstanceBeforeDimensions` (step 9). For pre-decoration widths, capture them in step 1 before the pipeline reaches step 5.

## Core Patterns (Not Typical React)

react-table v7 uses several patterns that contradict standard React conventions. Understanding these explains why things work the way they do and why common React intuitions lead to bugs.

### Plugins Are NOT React Hooks (But Their Callbacks Can Use Them)

Despite the `use*` naming, plugin registration functions are **plain functions** called in a `forEach` loop. Each plugin receives the `hooks` object and pushes callbacks into its arrays.

```javascript
// Pseudocode equivalent of react-table/hooks/useTable.ts:70-72
plugins.filter(Boolean).forEach((plugin) => {
  plugin(getInstance().hooks);
});
```

However, the callbacks pushed into side-effect hooks (`useInstance`, `useInstanceAfterData`, `useInstanceBeforeDimensions`, `useFinalInstance`) **are called during React's render phase** (inside `useTable`) in stable order via `loopHooks`. Because the call order is stable across renders, these callbacks **can use React hooks** (`useEffect`, `useRef`, `useState`, etc.) — and many internal hooks do (e.g., `useSelectionChangeCallback` uses `useEffect` inside its `useInstance` callback).

### Two Invocation Patterns: `reduceHooks` vs `loopHooks`

react-table has exactly two ways to invoke hook callbacks. Using the wrong return convention causes errors.

**`reduceHooks`** — Pipeline/fold pattern. Each callback receives the previous result and MUST return the next value:

```javascript
// Pseudocode (real impl: react-table/publicUtils.tsx:69-90):
// hooks.reduce((prev, next) => next(prev, meta), initial)
// Used by: columns, allColumns, visibleColumns, headerGroups, stateReducers, useOptions, etc.
```

If a callback returns `undefined`, react-table throws in dev mode: _"A reducer hook just returned undefined!"_

**`loopHooks`** — Side-effect pattern. Each callback receives the same context and must NOT return anything:

```javascript
// Pseudocode (real impl: react-table/publicUtils.tsx:69-90):
// hooks.forEach(hook => hook(context, meta))
// Used by: useInstance, useInstanceAfterData, useInstanceBeforeDimensions, useFinalInstance, prepareRow
```

If a callback returns a value, react-table throws in dev mode: _"A loop-type hook just returned a value!"_ In production the return is silently ignored.

**Exception:** `stateReducers` uses its own reduce pattern with a falsy fallback: `handler(s, action, state, getInstance()) || s`. If a reducer returns `undefined`/falsy, the previous state is preserved instead of throwing.

### Prop Getter Accumulation (`makePropGetter`)

Prop getters (`getRowProps`, `getCellProps`, etc.) are NOT simple functions. They are **reduce pipelines** that accumulate props from multiple hooks:

```javascript
// Inside makePropGetter:
return (userProps = {}) => [...hooks, userProps].reduce((prev, next) => handlePropGetter(prev, next, meta), {});
```

Each hook callback receives `(accumulatedProps, meta)` and returns either:

- A **props object** — merged via shallow spread (except `style` which is deep-merged, and `className` which is concatenated with spaces)
- A **`[props, extraProps]` tuple** — both elements are merged sequentially

User-supplied props (from `row.getRowProps({ className: 'foo' })`) are always the **last** item in the reduce, so they win for simple properties. For `style`, user styles merge on top; for `className`, user classes are appended.

### Single Mutable Instance

The table instance is a **single object** created once via `useRef({})` and never recreated:

```javascript
const instanceRef = React.useRef({})
const getInstance = useGetLatest(instanceRef.current)

// Throughout useTable:
Object.assign(getInstance(), { columns, rows, ... })
```

Plugins in `useInstance` overwrite properties directly — e.g., `useSortBy` replaces `instance.rows` with sorted rows. The next plugin in the chain sees the modified data. This is the opposite of React's immutability principle, but it works because:

- The render is synchronous — all mutations happen in predictable order within a single `useTable` call
- Change detection uses `useMemo` on specific values (the `columns` array, the `data` prop), not on the instance object itself
- Column objects are shared across `allColumns`, `visibleColumns`, `flatHeaders`, and cells — mutation ensures all references see the same decorated state without rebuilding every data structure

### Dynamic Dependency Injection

Plugins can inject additional dependencies into `useMemo` arrays via `*Deps` hooks:

```javascript
// Inside useTable:
const columns = React.useMemo(
  () => reduceHooks(getHooks().columns, userColumns, meta),
  [userColumns, ...reduceHooks(getHooks().columnsDeps, [], meta)],
  //            ^^^ deps hooks are evaluated EVERY render to produce the dependency array
);
```

If a `columnsDeps` hook returns `[instance.state.hiddenColumns]`, the `columns` memo recomputes whenever `hiddenColumns` changes. This is how plugins extend the reactivity system without modifying core memoization logic. The `useColumnsDeps` internal hook uses this to add `webComponentsReactProperties` as a dependency.

## Hook Points (Execution Order)

Order in `react-table/hooks/useTable.ts` (line refs are approximate):

### Setup phase

0. **`useColumnVisibility`** — auto-prepended at `useTable.ts:53` before user plugins run.
1. **`hooks.useOptions`** — runs at `useTable.ts:80`. Reduce-style; transforms the options bag.
2. **`hooks.useControlledState`** — runs at `useTable.ts:119`. Reduce-style; lets plugins override state per render.

### Column phase

3. **`hooks.columns`** — Transform column definitions. Receives `(columns, meta)`. Must return columns array.
4. **`hooks.columnsDeps`** — Add dependencies that trigger column recalculation.
5. **`hooks.allColumns`** — Transform flattened column list.
6. **`hooks.allColumnsDeps`** — Dependencies for allColumns.

### Data phase

7. **Rows materialize** (`useTable.ts:168-191`).
8. **`hooks.useInstanceAfterData`** — runs at `useTable.ts:200`, **before** visibleColumns. Safe for data-dependent logic.
9. **`hooks.accessValue`** — reduce-style, called per-cell during row materialization (`useTable.ts:549-558`); receives `{ row, column, instance }`.

### Visible columns phase

10. **`hooks.visibleColumns`** — runs in a `useMemo` at `useTable.ts:205-221`. Filter/reorder. `decorateColumn` runs inside this useMemo on each column.
11. **`hooks.visibleColumnsDeps`** — Dependencies for visibleColumns.
12. **`hooks.headerGroups` / `hooks.headerGroupsDeps`** — runs at `useTable.ts:254-278`. Builds headerGroups + flatHeaders.

### Instance phase (after dimensions are knowable)

13. **`hooks.useInstanceBeforeDimensions`** — runs at `useTable.ts:280`, **after** flatHeaders. **This is where you mutate header widths.**
14. **`hooks.useInstance`** — runs at `useTable.ts:304`. Instance setup. Add methods, compute derived state.
15. **`hooks.useFinalInstance`** — runs at `useTable.ts:421`. After all other instance hooks.

### Render-time

16. **`hooks.prepareRow`** — Called per-row during render. Mutate row properties here.
17. **Prop getters**: `getTableProps`, `getTableBodyProps`, `getHeaderGroupProps`, `getHeaderProps`, `getRowProps`, `getCellProps`, `getFooterGroupProps`, `getFooterProps`, `getResizerProps`, `getToggleRowSelectedProps`, `getToggleAllRowsSelectedProps`, `getToggleAllPageRowsSelectedProps`, `getToggleRowExpandedProps`, `getToggleAllRowsExpandedProps`, `getSortByToggleProps`, `getGroupByToggleProps`, `getToggleHiddenProps`, `getToggleHideAllColumnsProps`.

### State

18. **`hooks.stateReducers`** — Array of reducer functions. Each receives `(currentReducedState, action, originalState, instance)`. The `originalState` arg is the pre-reduce baseline (not the previous reducer's output). Falsy return preserves the previous state (no throw, unlike other reduceHooks).

**Note on `materializedColumns` / `materializedColumnsDeps`:** declared in `makeDefaultPluginHooks` but **never invoked** inside the vendored `useTable.ts`. Don't rely on them.

## `decorateColumn` Behavior

The vendored `decorateColumn` (at `react-table/utils.ts:69-87`) runs inside the `visibleColumns` useMemo (after `hooks.visibleColumns`, before headerGroups are built). It **mutates columns in place**:

```javascript
// Actual decorateColumn implementation (Object.assign with spread):
Object.assign(column, {
  Header: emptyRenderer,
  Footer: emptyRenderer,
  ...defaultColumn, // library defaults: { Cell: defaultRenderer, width: 150, minWidth: 0, maxWidth: MAX_SAFE_INTEGER }
  ...userDefaultColumn, // consumer-provided defaults
  ...column, // column-specific properties win (highest priority)
});
Object.assign(column, { originalWidth: column.width });
```

This means: after `visibleColumns` are computed, any column without explicit `width` gets `width: 150`. If you need the **original** width (before decoration), you must capture it in `hooks.columns` — which runs well before `decorateColumn`.

## The Safe Mutation Pattern

```typescript
// Step 1: Capture raw values in hooks.columns (BEFORE decorateColumn)
const captureRawValues = (columns, { instance }) => {
  instance.rawColumnSizing = new Map(); // NOTE: actual property name on the instance
  for (const col of columns) {
    instance.rawColumnSizing.set(col.id ?? col.accessor, {
      width: col.width,
      minWidth: col.minWidth,
      maxWidth: col.maxWidth,
    });
  }
  return columns; // UNCHANGED — no cascade
};

// Step 2: Mutate in useInstanceBeforeDimensions (AFTER decoration)
const applyCalculatedWidths = (instance) => {
  const { flatHeaders, rawColumnSizing } = instance;
  for (const header of flatHeaders) {
    const raw = rawColumnSizing.get(header.id);
    // ... calculate new width ...
    header.width = calculatedWidth;
    header.originalWidth = calculatedWidth; // MUST keep in sync
  }
};

hooks.columns.push(captureRawValues);
hooks.useInstanceBeforeDimensions.push(applyCalculatedWidths);
```

## Plugin Registration

Plugins are functions that receive `hooks` and push into hook arrays:

```typescript
const myPlugin = (hooks: ReactTableHooks) => {
  hooks.stateReducers.push(myReducer);
  hooks.useInstance.push(myInstanceHook);
  hooks.getCellProps.push(myCellProps);
};
myPlugin.pluginName = 'myPlugin'; // REQUIRED — ensurePluginOrder throws without it
```

**Initialize vs append:**

- `hooks.someArray.push(fn)` — APPENDS to the chain (most common).
- `hooks.someArray = [fn]` — INITIALIZES a chain that has no defaults. Used by `useColumnResizing` for `getResizerProps` and by `useRowSelect` for `getToggleRowSelectedProps`/`getToggleAllRowsSelectedProps`/`getToggleAllPageRowsSelectedProps` — these prop-getter chains are NOT created by `makeDefaultPluginHooks`. The `=` assignment creates a new chain so later plugins (`useAutoResize`, `useOnColumnResize`) can `.push` onto it.

## `webComponentsReactProperties`

UI5WCR passes a custom config bag through useTable options:

```typescript
webComponentsReactProperties: {
  // Selection & interaction
  selectionMode, selectionBehavior, tagNamesWhichShouldNotSelectARow,
  onRowSelect, onRowClick, onRowExpandChange, onAutoResize, onColumnsReorder,
  onGroup, onSort, onFilter,
  // Structure
  isTreeTable, subRowsKey, renderRowSubComponent, alwaysShowSubComponent,
  // Layout & display
  scaleWidthMode, alternateRowColor, loading, showOverlay,
  withRowHighlight, highlightField, withNavigationHighlight, markNavigatedRow,
  // Environment
  isFirefox, canUseVoiceOver, fontsReady,
  // Internals
  tableRef, uniqueId, classes,
  a11yElementIds: { /* 5 element IDs */ },
  translatableTexts: { /* 13 i18n text keys */ },
}
```

**Note:** `isRtl` is NOT in `webComponentsReactProperties`. It is obtained via `useIsRTL(analyticalTableRef)` at the component level, dispatched to state via `IS_RTL` action, and accessed by hooks through `instance.state.isRtl`.

All internal hooks access this via `instance.webComponentsReactProperties`.

## Last resort: consult upstream react-table v7

Only when reading the in-tree copy plus this skill plus its references genuinely doesn't answer the question — e.g., you need an example consumer not present in this repo, want to confirm a vendoring divergence, or are tracking down an upstream issue thread.

- **Use the npm package `react-table`.** That npm name is v7 — the version this codebase forked from.
- **It's acceptable to install it as a devDependency at the monorepo root** for local source access (grep, jump-to-definition) — `react-table` is not currently in any `package.json` here. This is a Yarn-workspaces monorepo, so install at the root (e.g., `yarn add -D -W react-table`), not inside `packages/main` or any other workspace — the dep is for investigation tooling, not part of any package's runtime/build. Remove it again after the investigation, and never import it at runtime — runtime imports stay relative to the in-tree `react-table/` copy.
- **Do NOT consult `@tanstack/react-table`.** That is v8+, a complete rewrite under a different package name with a different API (`createColumnHelper`, `useReactTable`, no `hooks.*` plugin pipeline, different prop-getter conventions). v8 docs and source will actively mislead an agent debugging v7-based code.
- **Upstream source:** `https://github.com/TanStack/table` — check the `v7` branch / tag.
- **Upstream docs:** `https://react-table-v7.tanstack.com/`.
- **Conflict resolution:** when upstream contradicts the in-tree copy, **the in-tree copy wins**. UI5WCR forks plugins (e.g., `useRowSelect` at `hooks/useRowSelect.ts` has no upstream counterpart in the vendored tree because it diverged); divergences are deliberate.
