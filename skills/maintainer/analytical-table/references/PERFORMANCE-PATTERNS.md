# AnalyticalTable Performance Patterns

Companion docs: [REACT-TABLE-PIPELINE.md](REACT-TABLE-PIPELINE.md) for the cascading-pipeline trap and safe mutation pattern; [HOOK-REFERENCE.md](HOOK-REFERENCE.md) for hook registration points; [STATE-MANAGEMENT.md](STATE-MANAGEMENT.md) for actions referenced below.

## Virtualization

### Row Virtualization (`@tanstack/react-virtual`)

- Only visible rows + overscan are rendered
- Overscan configurable via `overscanCount` prop (default: `Math.floor(visibleRows / 2)`)
- `estimateSize` callback for dynamic heights (subcomponents)
- `measureElement` for precise row measurement
- Virtualizer range stored on `tableInstanceRef.current.virtualRowsRange`

### Column Virtualization (`@tanstack/react-virtual`)

- Separate horizontal virtualizer
- Default overscan: 10 columns (`overscanCountHorizontal`) — but see SKILL.md "High-Impact Gotchas" for when virtualization is disabled (`scaleWidthMode !== Default` or RTL forces `overscan: Infinity`).
- RTL handled via `translateX` transforms

## Deferred Column Resize (Zero Renders During Drag)

The `useColumnResizing` hook uses a deferred pattern:

1. **mousedown**: Record start position, set `isDragging` (3px dead zone)
2. **mousemove**: Apply CSS `transform: translateX(deltaX)` to resizer element. **No state dispatch. No React render.**
3. **mouseup**: Single `dispatch({ type: 'columnDoneResizing', columnWidths })`. One render.

### RTL Resize

Delta sign is inverted for RTL: `const deltaX = isRtl ? -rawDeltaX : rawDeltaX`. Inlined in the resize reducer.

## Selection Performance

### `selectedFlatRows` Memoization

The `selectedFlatRows` computation is wrapped in `useMemo` with deps `[rows, selectSubRows, selectedRowIds, getSubRows, isSelectionEnabled]`. `useInstance` fires on **every render** (via `loopHooks` at `react-table/hooks/useTable.ts:304`), including renders from `TABLE_RESIZE`, scroll events, layout changes, and parent re-renders that don't change `rows` or `selectedRowIds`.

All deps are referentially stable during scroll-only re-renders:

- `rows`: memoized through the pipeline (`useFilters` → `useGlobalFilter` → `useGroupBy` → `useSortBy` → `useExpanded`, each wrapped in `useMemo`)
- `selectedRowIds`: part of `useReducer` state, only changes on selection actions
- `getSubRows`: wrapped in `useCallback` with `[subRowsKey]` dep at `index.tsx:224`
- `selectSubRows`: boolean option, stable
- `isSelectionEnabled`: derived from `selectionMode` prop, stable

Without this memoization, each scroll frame would iterate all rows (O(n)) AND produce a new array reference that cascades re-renders through child components (Header, ColumnHeaderContainer, CheckBox).

### Disabled Fast Path

When `selectionMode === 'None'`:

- `selectedFlatRows` returns **stable empty array** via useMemo (cached `emptyArray` reference)
- `toggleRowSelected` returns **stable noop function**
- `isAllRowsSelected` computation skipped entirely
- `prepareRow` sets `row.isSelected = false`, `row.isSomeSelected = false`, `row.toggleRowSelected = noopToggle`, `row.getToggleRowSelectedProps = noopGetProps` — all without computing (`hooks/useRowSelect.ts:338-344`)

### Indeterminate State (Visible-Only)

The fork's select-all indeterminate check uses `selectedFlatRows?.length` (visible/filtered rows only) instead of the original react-table's `Object.keys(selectedRowIds).length` (all selected rows including filtered-out ones). Prevents the select-all checkbox from showing indeterminate state due to rows that are selected but hidden by filters.

### `isAllRowsSelected` Is NOT Memoized

The `isAllRowsSelected` computation runs bare on every render when selection is enabled — `Object.keys(nonGroupedRowsById).every(...)`. O(keys) not O(rows), and `nonGroupedRowsById` is itself memoized via `useGroupBy`.

### Single-Select Optimization

`useSingleRowStateSelection` registers on `hooks.getRowProps` and calls `toggleRowSelected` directly from click/keyboard handlers. It does not use a state reducer.

## Mutation Patterns

### Row Property Mutation

`prepareRow` mutates row objects directly:

```typescript
row.isSelected = !!isSelected;
row.isSomeSelected = isSelected === null;
row.toggleRowSelected = (...) => {...};
```

Avoids creating new row objects per render cycle.

### Header Width Mutation

`useInstanceBeforeDimensions` hooks mutate `header.width` and `header.originalWidth` directly on the existing header objects in `flatHeaders`. No new objects created.

### Instance Property Mutation

Hooks attach properties directly to `instance`:

```typescript
instance.virtualRowsRange = rowVirtualizer.range;
instance.rawColumnSizing = new Map(); // see REACT-TABLE-PIPELINE.md "Safe Mutation Pattern"
instance.visibleColumnsWidth = [...];
instance.pendingSelectEvent = { event, row }; // consumed by useSelectionChangeCallback's useEffect
```

## Canvas-Based Text Measurement

`useDynamicColumnWidths` uses a singleton `<canvas>` for measuring text width:

- Avoids DOM layout thrashing
- Canvas element cached at module level; `getComputedStyle` calls run fresh each invocation
- Samples only first 20 rows per column (`ROW_SAMPLE_SIZE = 20`)
- Triggered by `useFontsReady` hook when web fonts finish loading; the entire `adjustColumnWidths` callback is gated on `fontsReady` (see SKILL.md "High-Impact Gotchas").

## Subcomponent Rendering

`renderRowSubComponent(row)` is called for every visible row. The result is passed as `children` to the `<RowSubComponent>` wrapper which returns `null` for collapsed rows — the JSX is never mounted. The wrapper must always mount so its `useIsomorphicLayoutEffect` can dispatch `subComponentHeight: 0` on collapse. Do not short-circuit the `renderRowSubComponent` call.

## Dead Zones & Thresholds

| Component           | Threshold                                              | Purpose                                                    |
| ------------------- | ------------------------------------------------------ | ---------------------------------------------------------- |
| Column resizer      | 3px                                                    | Prevents accidental drag; allows double-click detection    |
| TABLE_RESIZE action | 20px delta                                             | Prevents column width reset when scrollbar briefly appears |
| Infinite scroll     | `infiniteScrollThreshold` remaining rows (default: 20) | Fires `onLoadMore`                                         |

## Anti-Patterns to Avoid

### 1. New Objects in `hooks.columns`

Returning new objects from `hooks.columns` triggers the cascading pipeline (see [REACT-TABLE-PIPELINE.md](REACT-TABLE-PIPELINE.md)). Mutate in `hooks.useInstanceBeforeDimensions` instead:

```typescript
// WRONG - triggers full cascade
hooks.columns.push((columns) => columns.map((col) => ({ ...col, width: 200 })));

// CORRECT - mutate in useInstanceBeforeDimensions; keep originalWidth in sync (Key Rule #5)
hooks.useInstanceBeforeDimensions.push((instance) => {
  instance.flatHeaders.forEach((h) => {
    h.width = 200;
    h.originalWidth = 200;
  });
});
```

### 2. Dispatching State During Drag

```typescript
// WRONG - causes render per mousemove frame
onMouseMove: () => dispatch({ type: 'resize', width: newWidth });

// CORRECT - CSS transform only, dispatch on mouseup
onMouseMove: () => {
  resizerEl.style.transform = `translateX(${delta}px)`;
};
onMouseUp: () => dispatch({ type: 'columnDoneResizing', columnWidths });
```

## Debugging Performance Issues

1. **Check `hooks.columns` first** - Are any hooks returning new column objects?
2. **Check render count** - Use React DevTools Profiler. More than 1-2 renders per interaction is suspicious.
3. **Check `flatRows.length`** - Is it the full dataset or just visible rows? Iterating all rows in a render-path hook is O(n).
4. **Check `useEffect` dependencies** - `flatRows` as a dependency triggers on every data change. Consider debouncing.
5. **Check memoization** - Are `columns` and `data` memoized by the consumer? (`tableHooks` memoization is recommended but not performance-critical — react-table rebuilds hook arrays every render regardless.)
