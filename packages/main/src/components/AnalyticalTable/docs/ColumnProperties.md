# AnalyticalTable Column Properties

Each object in the `columns` array configures one column. Do not set `width` unless you need specific sizing — by default the table distributes space evenly.

## Required

| Property   | Type                                                                | Description                                                                                           |
| ---------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `accessor` | `string` or `(originalRow, rowIndex, row, parentRows, data) => any` | Builds the data model for the column. Supports nested paths like `info.hobby` or `address[0].street`. |
| `id`       | `string`                                                            | Unique column ID. Mandatory if `accessor` is not set or is a function.                                |

## Optional

| Property                | Type                                                 | Default          | Description                                                                                                                                 |
| ----------------------- | ---------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `Header`                | `string` or `ComponentType`                          |                  | Column header text or component.                                                                                                            |
| `headerLabel`           | `string`                                             |                  | `aria-label` for the column header (screen readers).                                                                                        |
| `headerTooltip`         | `string`                                             |                  | Tooltip for the column header. Defaults to `Header` if it is a string.                                                                      |
| `Cell`                  | `string` or `ComponentType<CellInstance>`            |                  | Custom cell renderer. Receives cell value as `props.value`. **Must be memoized** for performance.                                           |
| `cellLabel`             | `({cell, instance}) => string`                       |                  | `aria-label` for individual cells (screen readers).                                                                                         |
| `width`                 | `number`                                             |                  | Column width in pixels. If not set, the table distributes all columns without a width evenly. Cannot be less than `minWidth`.               |
| `minWidth`              | `number`                                             | `60`             | Minimum column width.                                                                                                                       |
| `maxWidth`              | `number`                                             |                  | Maximum column width.                                                                                                                       |
| `hAlign`                | `TextAlign`                                          |                  | Horizontal cell alignment.                                                                                                                  |
| `vAlign`                | `VerticalAlign`                                      |                  | Vertical cell alignment.                                                                                                                    |
| `Popover`               | `ComponentType` or `(instance) => ReactNode`         |                  | Custom header popover renderer. Replaces the internal header popover. Receives table instance with `popoverProps` (`openerRef`, `setOpen`). |
| `Filter`                | `ComponentType`                                      |                  | Filter component rendered in the header.                                                                                                    |
| `disableFilters`        | `boolean`                                            |                  | Disable filtering for this column.                                                                                                          |
| `disableGlobalFilter`   | `boolean`                                            |                  | Exclude this column from global filter.                                                                                                     |
| `defaultCanFilter`      | `boolean`                                            |                  | Make column filterable even without a valid `accessor`.                                                                                     |
| `filter`                | `string` or `Function`                               |                  | Filter function. Built-in: `text`, `exactText`, `exactTextCase`, `equals`.                                                                  |
| `disableSortBy`         | `boolean`                                            |                  | Disable sorting for this column.                                                                                                            |
| `defaultCanSort`        | `boolean`                                            |                  | Make column sortable even without a valid `accessor`.                                                                                       |
| `sortDescFirst`         | `boolean`                                            |                  | First sort direction is descending instead of ascending.                                                                                    |
| `sortInverted`          | `boolean`                                            |                  | Invert underlying sort direction without changing the UI indicator.                                                                         |
| `sortType`              | `string` or `(rowA, rowB, columnId, desc) => number` | `'alphanumeric'` | Sort function. Built-in: `basic`, `datetime`, `alphanumeric`. **Must be memoized** if a function.                                           |
| `enableMultiSort`       | `boolean`                                            |                  | Allow multi-sort for this column.                                                                                                           |
| `disableGroupBy`        | `boolean`                                            |                  | Disable grouping for this column.                                                                                                           |
| `Aggregated`            | `string` or `ComponentType`                          |                  | Component to render for aggregated cells.                                                                                                   |
| `aggregate`             | `string` or `(leafValues, aggregatedValues) => any`  |                  | Aggregation function. Built-in: `sum`, `min`, `max`, `minMax`, `average`, `median`, `unique`, `uniqueCount`, `count`.                       |
| `aggregateValue`        | `string` or `(values, row, column) => any`           |                  | Resolve a primitive value for aggregation from non-primitive cell values.                                                                   |
| `disableResizing`       | `boolean`                                            |                  | Disable column resizing.                                                                                                                    |
| `autoResizable`         | `boolean`                                            |                  | Double-click resizer to auto-fit column width to content. Works best with default text content.                                             |
| `disableDragAndDrop`    | `boolean`                                            |                  | Disable column reordering via drag and drop.                                                                                                |
| `scaleWidthModeOptions` | `ScaleWidthModeOptions`                              |                  | Custom string for internal width calculation with `scaleWidthMode` `Grow` or `Smart`.                                                       |
| `responsivePopIn`       | `boolean`                                            |                  | Move column content to the first cell when table width falls below `responsiveMinWidth`. At least one column must remain visible.           |
| `responsiveMinWidth`    | `number`                                             |                  | Table width threshold for pop-in or hiding. If `responsivePopIn` is true, content moves; otherwise column hides.                            |
| `PopInHeader`           | `string` or `ComponentType`                          |                  | Custom header for popped-in columns.                                                                                                        |
| `popinDisplay`          | `AnalyticalTablePopinDisplay`                        | `Block`          | Display style for pop-in content.                                                                                                           |
