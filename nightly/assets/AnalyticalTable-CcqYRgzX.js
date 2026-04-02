import{n as e}from"./chunk-zsgVPwQN.js";import{Wm as t}from"./iframe-Dp4Nme_T.js";import{r as n}from"./react-B6_zhulR.js";import{c as r,m as i,s as a,t as o,v as s}from"./components-D50f3RHk.js";import{_ as c,d as l,r as u}from"./blocks-CUOjJ9Vo.js";import{c as d,d as f,f as p,i as m,l as h,n as g,o as _,p as v,r as y,s as b,t as x,u as S}from"./AnalyticalTable.stories-xcc1yZDv.js";function C(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(l,{of:x}),`
`,(0,T.jsx)(r,{of:x}),`
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,T.jsx)(u,{of:y}),`
`,(0,T.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,T.jsxs)(`details`,{children:[(0,T.jsx)(`summary`,{children:`Show shortened Code`}),(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Age',
    accessor: 'age'
  },
  {
    Header: 'Friend Name',
    accessor: 'friend.name'
  },
  {
    Header: 'Friend Age',
    accessor: 'friend.age'
  }
];

const data = [
  {
    age: 80,
    friend: {
      age: 68,
      name: 'Carver Vance'
    },
    name: 'Allen Best',
    status: 'Positive'
  },
  {
    age: 31,
    friend: {
      age: 70,
      name: 'Strickland Gallegos'
    },
    name: 'Combs Fleming',
    status: 'None'
  }
  // shortened for readability
];

const TableComp = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      visibleRows={5}
      onAutoResize={() => {}}
      onColumnsReorder={() => {}}
      onGroup={() => {}}
      onLoadMore={() => {}}
      onRowClick={() => {}}
      onRowExpandChange={() => {}}
      onRowSelect={() => {}}
      onSort={() => {}}
      onTableScroll={() => {}}
    />
  );
};
`})})]}),`
`,(0,T.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,T.jsx)(i,{of:y}),`
`,(0,T.jsx)(t.h2,{id:`column-properties`,children:`Column Properties`}),`
`,(0,T.jsx)(t.p,{children:(0,T.jsx)(t.strong,{children:`Required Attributes`})}),`
`,(0,T.jsxs)(t.table,{children:[(0,T.jsx)(t.thead,{children:(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.th,{children:`Attribute`}),(0,T.jsx)(t.th,{children:`Type`}),(0,T.jsx)(t.th,{children:`Description`})]})}),(0,T.jsxs)(t.tbody,{children:[(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`accessor`})}),(0,T.jsxs)(t.td,{children:[(0,T.jsx)(t.code,{children:`string`}),` OR `,(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`(originalRow: Record<string, any>, rowIndex: number, row: RowType,`}),` `,(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`parentRows: RowType[], data: Record<string, any>[]) => any`})]}),(0,T.jsxs)(t.td,{children:[`This `,(0,T.jsx)(t.code,{children:`string`}),`/`,(0,T.jsx)(t.code,{children:`function`}),` is used to build the data model for your column.`,(0,T.jsx)(`br`,{}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.strong,{children:`Note`}),`: You can also specify deeply nested values with accessors like `,(0,T.jsx)(t.code,{children:`info.hobby`}),` or even `,(0,T.jsx)(t.code,{children:`address[0].street`}),`.`,(0,T.jsx)(`br`,{})]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`id`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`string`})}),(0,T.jsxs)(t.td,{children:[`Defines the unique ID for the column. It is used by reference in things like sorting, grouping, filtering, etc.`,(0,T.jsx)(`br`,{}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.strong,{children:`Note:`}),` If no `,(0,T.jsx)(t.code,{children:`accessor`}),` is set, or the `,(0,T.jsx)(t.code,{children:`accessor`}),` is a function, the `,(0,T.jsx)(t.code,{children:`id`}),` property is mandatory.`]})]})]})]}),`
`,(0,T.jsx)(t.p,{children:(0,T.jsx)(t.strong,{children:`Optional Properties`})}),`
`,(0,T.jsxs)(t.table,{children:[(0,T.jsx)(t.thead,{children:(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.th,{children:`Attribute`}),(0,T.jsx)(t.th,{children:`Type`}),(0,T.jsx)(t.th,{children:`Description`})]})}),(0,T.jsxs)(t.tbody,{children:[(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`Header`})}),(0,T.jsxs)(t.td,{children:[(0,T.jsx)(t.code,{children:`string`}),` OR`,(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`ComponentType`})]}),(0,T.jsxs)(t.td,{children:[`Can either be `,(0,T.jsx)(t.code,{children:`string`}),` or a React component that will be rendered as column header`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`headerLabel`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`string`})}),(0,T.jsxs)(t.td,{children:[`Defines the `,(0,T.jsx)(t.code,{children:`aria-label`}),` for the whole column read by screen readers.`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`headerTooltip`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`string`})}),(0,T.jsxs)(t.td,{children:[`Tooltip for the column header. If not set, the display text will be the same as the Header if it is a `,(0,T.jsx)(t.code,{children:`string`})]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`Cell`})}),(0,T.jsxs)(t.td,{children:[(0,T.jsx)(t.code,{children:`string`}),` OR`,(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`ComponentType`}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`<CellInstance>`})]}),(0,T.jsxs)(t.td,{children:[`Custom cell renderer. If set, the table will use this component or render the provided string for every cell, passing all necessary information as props, e.g., the cell value as `,(0,T.jsx)(t.code,{children:`props.value`}),`.`,(0,T.jsx)(`br`,{}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.strong,{children:`Note:`}),(0,T.jsxs)(`ul`,{children:[(0,T.jsxs)(`li`,{children:[`Using a custom component `,(0,T.jsx)(t.strong,{children:`can impact performance`}),`! If you pass a component, `,(0,T.jsx)(t.strong,{children:`memoizing it is strongly recommended`}),`, especially for complex components or large datasets.`]}),(0,T.jsxs)(`li`,{children:[`For custom elements, text truncation needs to be applied manually. `,(0,T.jsx)(t.a,{href:`https://ui5.github.io/webcomponents-react/v2/?path=/docs/data-display-analyticaltable-recipes--docs`,rel:`nofollow`,children:`Here`}),` you can find out more.`]})]})]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`cellLabel`})}),(0,T.jsxs)(t.td,{children:[(0,T.jsx)(t.code,{children:`({cell, instance})`}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`=> string`})]}),(0,T.jsxs)(t.td,{children:[`Defines a function that receives an object as a parameter, including the cell and table instance, and should return the `,(0,T.jsx)(t.code,{children:`aria-label`}),` of the current cell. `,(0,T.jsx)(`br`,{}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.strong,{children:`Note:`}),` Use this property if there is no textual content available through the dataset (e.g. no `,(0,T.jsx)(t.code,{children:`accessor`}),` field available), or if you want to provide additional context when navigating to the respective cell for screen readers.`,(0,T.jsx)(`br`,{}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.strong,{children:`Note:`}),` To retrieve the internal `,(0,T.jsx)(t.code,{children:`aria-label`}),`, utilize the `,(0,T.jsx)(t.code,{children:`cell.cellLabel`}),` property.`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`width`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`number`})}),(0,T.jsxs)(t.td,{children:[`Defines the column width. If not set, the table will distribute all columns without a width evenly.`,(0,T.jsx)(`br`,{}),(0,T.jsx)(t.strong,{children:`Note:`}),` The `,(0,T.jsx)(t.code,{children:`width`}),` cannot be less than `,(0,T.jsx)(t.code,{children:`minWidth`}),`. Since `,(0,T.jsx)(t.code,{children:`minWidth`}),` defaults to 60, set a lower `,(0,T.jsx)(t.code,{children:`minWidth`}),` to allow narrower columns.`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`minWidth`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`number`})}),(0,T.jsxs)(t.td,{children:[`Minimum width of the column.`,(0,T.jsx)(`br`,{}),(0,T.jsx)(t.strong,{children:`Default:`}),` `,(0,T.jsx)(t.code,{children:`60`})]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`maxWidth`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`number`})}),(0,T.jsx)(t.td,{children:`Maximum width of the column.`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`Filter`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`ComponentType`})}),(0,T.jsx)(t.td,{children:`Filter Component to be rendered in the Header`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`disableFilters`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:`Disable filters for this column`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`disableGlobalFilter`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:`Disable global filtering for this column`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`defaultCanFilter`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsxs)(t.td,{children:[`If set to true, this column will be filterable, regardless if it has a valid `,(0,T.jsx)(t.code,{children:`accessor`})]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`filter`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`string OR Function`})}),(0,T.jsxs)(t.td,{children:[`Either a string or a filter function.`,(0,T.jsx)(`br`,{}),`Supported String Values: `,(0,T.jsxs)(`ul`,{children:[(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`text`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`exactText`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`exactTextCase`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`equals`})})]}),(0,T.jsx)(t.strong,{children:`Note:`}),` When the standard `,(0,T.jsx)(t.code,{children:`Filter`}),` component is used, the filter function is not triggered if the `,(0,T.jsx)(t.code,{children:`filterValue`}),` is empty, as the filter is then removed.`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`Aggregated`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`ComponentType`})}),(0,T.jsx)(t.td,{children:`Component to render for aggregated cells`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`aggregate`})}),(0,T.jsxs)(t.td,{children:[(0,T.jsx)(t.code,{children:`string`}),` OR`,(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`((leafValues,`}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`aggregatedValues)`}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`=> any)`})]}),(0,T.jsxs)(t.td,{children:[`Aggregation function or string.`,(0,T.jsx)(`br`,{}),`Supported String Values: `,(0,T.jsxs)(`ul`,{children:[(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`sum`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`min`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`max`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`minMax`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`average`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`median`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`unique`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`uniqueCount`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`count`})})]})]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`aggregateValue`})}),(0,T.jsxs)(t.td,{children:[(0,T.jsx)(t.code,{children:`string`}),` OR`,(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`((values, row,`}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`column) => any)`})]}),(0,T.jsx)(t.td,{children:`When attempting to group/aggregate non primitive cell values (eg. arrays of items) you will likely need to resolve a stable primitive value like a number or string to use in normal row aggregations. This property can be used to aggregate or simply access the value to be used in aggregations eg. count-ing the unique number of items in a cell's array value before sum-ing that count across the table`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`disableGroupBy`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:`Disable groupBy for this column`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`defaultCanSort`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsxs)(t.td,{children:[`If set to true, this column will be sortable, regardless if it has a valid `,(0,T.jsx)(t.code,{children:`accessor`})]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`disableSortBy`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:`Disable sorting for this column`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`sortDescFirst`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsxs)(t.td,{children:[`If set to `,(0,T.jsx)(t.code,{children:`true`}),`, the first sort direction for this column will be descending instead of ascending.`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`sortInverted`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsxs)(t.td,{children:[`If set to `,(0,T.jsx)(t.code,{children:`true`}),`, the underlying sorting direction will be inverted, but the UI will not.`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`sortType`})}),(0,T.jsxs)(t.td,{children:[(0,T.jsx)(t.code,{children:`string`}),` OR`,(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`((rowA, rowB,`}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`columnId: string,`}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`descending: boolean)`}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`=> number)`})]}),(0,T.jsxs)(t.td,{children:[`String or custom `,(0,T.jsx)(t.strong,{children:`memoized`}),` sort function.`,(0,T.jsx)(`br`,{}),`Supported String Values: `,(0,T.jsxs)(`ul`,{children:[(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`basic`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`datetime`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(t.code,{children:`alphanumeric`})})]}),(0,T.jsx)(t.strong,{children:`Default:`}),(0,T.jsx)(t.code,{children:`'alphanumeric'`})]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`disableResizing`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:`Disable resizing for this column`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`hAlign`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`TextAlign`})}),(0,T.jsx)(t.td,{children:`Horizontal align of the cell`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`vAlign`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`VerticalAlign`})}),(0,T.jsx)(t.td,{children:`Vertical align of the cell`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`scaleWidthModeOptions`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`ScaleWidthModeOptions`})}),(0,T.jsxs)(t.td,{children:[`Allows passing a custom string for the internal width calculation of custom cells for `,(0,T.jsx)(t.code,{children:`scaleWidthMode`}),` `,(0,T.jsx)(t.code,{children:`Grow`}),` and `,(0,T.jsx)(t.code,{children:`Smart`}),`. More `,(0,T.jsx)(`a`,{href:`./?path=/docs/data-display-analyticaltable-recipes--docs#how-to-scale-custom-cells`,children:`here`})]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`responsivePopIn`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsxs)(t.td,{children:[`Enables the pop-in behavior of the column. When the `,(0,T.jsx)(t.code,{children:`responsiveMinWidth`}),` is smaller then the width of the table, the content of each cell will move to the first cell in the row, improving usability on small or mobile devices.`,(0,T.jsx)(`br`,{}),(0,T.jsx)(t.strong,{children:`Note:`}),` At least one column must remain visible at all times!`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`responsiveMinWidth`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`number`})}),(0,T.jsxs)(t.td,{children:[`Defines how the table should react when its width falls below the `,(0,T.jsx)(t.code,{children:`responsiveMinWidth`}),`. `,(0,T.jsxs)(`ul`,{children:[(0,T.jsxs)(`li`,{children:[`If `,(0,T.jsx)(t.code,{children:`responsivePopIn`}),` is `,(0,T.jsx)(t.code,{children:`true`}),` the content of this column will be moved to the first column.`]}),(0,T.jsxs)(`li`,{children:[`If `,(0,T.jsx)(t.code,{children:`responsivePopIn`}),` is not set or `,(0,T.jsx)(t.code,{children:`false`}),` the column will be hidden.`]})]})]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`PopInHeader`})}),(0,T.jsxs)(t.td,{children:[(0,T.jsx)(t.code,{children:`string`}),` OR`,(0,T.jsx)(`br`,{}),(0,T.jsx)(t.code,{children:`ComponentType`})]}),(0,T.jsx)(t.td,{children:`Custom pop-in header renderer. If set, the table will call that component for every column that is "popped-in" and pass the table instance as prop.`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`popinDisplay`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`AnalyticalTablePopinDisplay`})}),(0,T.jsxs)(t.td,{children:[`Defines the display of `,(0,T.jsx)(t.code,{children:`AnalyticalTable`}),` pop-ins.`,(0,T.jsx)(`br`,{}),(0,T.jsx)(t.strong,{children:`Default:`}),` `,(0,T.jsx)(t.code,{children:`AnalyticalTablePopinDisplay.Block`})]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`disableDragAndDrop`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:`Defines if the column is reorderable by dragging and dropping columns.`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`enableMultiSort`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsxs)(t.td,{children:[`Defines whether this column should allow multi-sort.`,(0,T.jsx)(`br`,{}),(0,T.jsx)(`br`,{}),` `,(0,T.jsx)(t.strong,{children:`Note:`}),` When sorting by a column that does not allow multiple sorting, only the current column is sorted and all other sorted columns are reset.`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`autoResizable`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsxs)(t.td,{children:[`Defines whether double-clicking a columns resizer will automatically resize the column to fit the largest cell content of visible rows.`,(0,T.jsx)(`br`,{}),(0,T.jsx)(`br`,{}),(0,T.jsx)(t.strong,{children:`Note:`}),` Only default text content is supported by this option, for custom content it might work as well, but we recommend checking the behavior carefully as the logic can't account for all possible implementations.`]})]})]})]}),`
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(t.h2,{id:`tree-table`,children:`Tree Table`}),`
`,(0,T.jsx)(u,{of:p,sourceState:`none`}),`
`,(0,T.jsxs)(t.p,{children:[`The `,(0,T.jsx)(t.code,{children:`data`}),` structure of the tree table is as follows:`]}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-js`,children:`const data = {
    name: "Greg Miller",
    age: 35,
    friend: {
        name: "Rose Franco",
        age: 32,
    },
    status: "None",
    subRows: [
        {
            name: "Rick DeAngelo",
            age: 25,
            friend: {
                name: "Susanne Franco",
                age: 37,
            },
            status: "None",
            subRows: [...],
        },
    ],
    ...
};
`})}),`
`,(0,T.jsxs)(t.p,{children:[`In this example the default key for sub row detection is used (`,(0,T.jsx)(t.code,{children:`subRows`}),`), you can use any key you like by setting the `,(0,T.jsx)(t.code,{children:`subRowsKey`}),` prop.`]}),`
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(t.h2,{id:`infinite-scrolling`,children:`Infinite Scrolling`}),`
`,(0,T.jsx)(t.p,{children:`The table initially contains 50 rows, when the last 10 rows are reached the table will load more data.`}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.strong,{children:`Note:`}),` To prevent the table state from resetting when the data is updated, please see `,(0,T.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable-recipes--docs#how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes`,children:`this recipe`}),`.`]}),`
`,(0,T.jsx)(u,{sourceState:`none`,of:_}),`
`,(0,T.jsx)(t.h3,{id:`code-1`,children:`Code`}),`
`,(0,T.jsxs)(`details`,{children:[(0,T.jsx)(`summary`,{children:`Show Code`}),(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-jsx`,children:`const InfiniteScrollTable = (props) => {
  const [data, setData] = useState(props.data.slice(0, 50));
  const [loading, setLoading] = useState(false);
  const offset = useRef(50);
  const onLoadMore = () => {
    setLoading(true);
  };
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setData((prev) => [...prev, ...props.data.slice(offset.current, offset.current + 50)]);
        setLoading(false);
        offset.current += 50;
      }, 2000);
    }
  }, [loading, props.data, offset.current]);
  return (
    <AnalyticalTable
      data={data}
      columns={props.columns}
      infiniteScroll={true}
      infiniteScrollThreshold={10}
      header="Scroll to load more data"
      onLoadMore={onLoadMore}
      loading={loading}
      reactTableOptions: {{ autoResetSelectedRows: false }}
    />
  );
};
`})})]}),`
`,(0,T.jsx)(t.h2,{id:`analyticaltable-with-subcomponents`,children:`AnalyticalTable with subcomponents`}),`
`,(0,T.jsxs)(t.p,{children:[`Adding custom subcomponents below table rows can be achieved by setting the `,(0,T.jsx)(t.code,{children:`renderRowSubComponent`}),` prop.
The prop expects a function with an optional parameter containing the `,(0,T.jsx)(t.code,{children:`row`}),` instance, there you can control which row should display subcomponents. If you want to display the subcomponent at the bottom of the row without an expandable container, you can set `,(0,T.jsx)(t.code,{children:`subComponentsBehavior`}),` prop to `,(0,T.jsx)(t.code,{children:`"Visible"`}),` or to `,(0,T.jsx)(t.code,{children:`"IncludeHeight"`}),`. "Visible" simply adds the subcomponent to the row without including its height in the initial calculation of the table body, whereas "IncludeHeight" does.`]}),`
`,(0,T.jsx)(t.h3,{id:`notes`,children:`Notes`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[`When `,(0,T.jsx)(t.code,{children:`renderRowSubComponent`}),` is set, `,(0,T.jsx)(t.code,{children:`grouping`}),` is disabled.`]}),`
`,(0,T.jsx)(t.li,{children:"When rendering active elements inside the subcomponent, make sure to add the `data-subcomponent-active-element' attribute, otherwise focus behavior won't be consistent."}),`
`,(0,T.jsxs)(t.li,{children:[`When `,(0,T.jsx)(t.code,{children:`AnalyticalTableSubComponentsBehavior.IncludeHeight`}),` or `,(0,T.jsx)(t.code,{children:`AnalyticalTableSubComponentsBehavior.IncludeHeightExpandable`}),` is used, `,(0,T.jsx)(t.code,{children:`AnalyticalTableVisibleRowCountMode.Interactive`}),` is not supported.`]}),`
`]}),`
`,(0,T.jsx)(i,{of:f,include:[`renderRowSubComponent`,`subComponentsBehavior`]}),`
`,(0,T.jsx)(u,{sourceState:`none`,of:f}),`
`,(0,T.jsx)(t.h3,{id:`code-2`,children:`Code`}),`
`,(0,T.jsxs)(`details`,{children:[(0,T.jsx)(`summary`,{children:`Show Code`}),(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-jsx`,children:`const TableWithSubcomponents = (props) => {
  const renderRowSubComponent = (row) => {
    if (row.id === '0') {
      return (
        <FlexBox
          style={{ backgroundColor: 'lightblue', height: '300px' }}
          justifyContent={FlexBoxJustifyContent.Center}
          alignItems={FlexBoxAlignItems.Center}
          direction={FlexBoxDirection.Column}
        >
          <Tag>height: 300px</Tag>
          <Text>This subcomponent will only be displayed below the first row.</Text>
          <hr />
          <Text>
            The button below is rendered with \`data-subcomponent-active-element\` attribute to ensure consistent focus
            behavior
          </Text>
          <Button data-subcomponent-active-element>Click</Button>
        </FlexBox>
      );
    }
    if (row.id === '1') {
      return (
        <FlexBox
          style={{ backgroundColor: 'lightyellow', height: '100px' }}
          justifyContent={FlexBoxJustifyContent.Center}
          alignItems={FlexBoxAlignItems.Center}
          direction={FlexBoxDirection.Column}
        >
          <Tag>height: 100px</Tag>
          <Text>This subcomponent will only be displayed below the second row.</Text>
        </FlexBox>
      );
    }
    if (row.id === '2') {
      return null;
    }
    return (
      <FlexBox
        style={{ backgroundColor: 'lightgrey', height: '50px' }}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
        direction={FlexBoxDirection.Column}
      >
        <Tag>height: 50px</Tag>
        <Text>This subcomponent will be displayed below all rows except the first, second and third.</Text>
      </FlexBox>
    );
  };
  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      renderRowSubComponent={renderRowSubComponent}
      subComponentsBehavior={AnalyticalTableSubComponentsBehavior.Expandable} //default value
    />
  );
};
`})})]}),`
`,(0,T.jsx)(t.h2,{id:`adjust-the-number-of-rows-to-the-container-height`,children:`Adjust the number of rows to the container height`}),`
`,(0,T.jsxs)(t.p,{children:[`By adding the `,(0,T.jsx)(t.code,{children:`visibleRowCountMode`}),` prop and setting it to `,(0,T.jsx)(t.code,{children:`AnalyticalTableVisibleRowCountMode.Auto`}),` the table automatically fills the surrounding container with rows and when setting it to `,(0,T.jsx)(t.code,{children:`AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows`}),`, empty rows fill the container as well, if not enough visible rows are available.`]}),`
`,(0,T.jsx)(i,{of:m,include:[`containerHeight`,`visibleRowCountMode`],hideHTMLPropsNote:!0}),`
`,(0,T.jsx)(u,{sourceState:`none`,of:m}),`
`,(0,T.jsx)(t.h3,{id:`code-3`,children:`Code`}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-jsx`,children:`const TableComponent = (props) => {
  return (
    <div style={{ height: \`\${props.containerHeight}px\` }}>
      <AnalyticalTable
        data={props.data}
        columns={props.columns}
        visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto}
        // visibleRowCountMode={AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows}
        header={\`Current height: \${props.containerHeight}px - Change the height in the table above\`}
      />
    </div>
  );
};
`})}),`
`,(0,T.jsx)(t.h2,{id:`responsively-display-columns-on-small-devices-pop-in`,children:`Responsively display columns on small devices (Pop-In)`}),`
`,(0,T.jsx)(i,{of:S,hideHTMLPropsNote:!0,include:[`adjustTableHeightOnPopIn`,`containerWidth`]}),`
`,(0,T.jsxs)(t.p,{children:[`To responsively hide columns or move content to the first column, you can add the `,(0,T.jsx)(t.code,{children:`responsiveMinWidth`}),` column option. If
you want the column to "pop-in" the `,(0,T.jsx)(t.code,{children:`responsivePopIn`}),` has to be set to `,(0,T.jsx)(t.code,{children:`true`}),`, otherwise the column will be hidden when the
`,(0,T.jsx)(t.code,{children:`responsiveMinWidth`}),` exceeds the table width. It's also possible to change the header of the pop-in column by setting the
`,(0,T.jsx)(t.code,{children:`PopInHeader`}),` option.`]}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.strong,{children:`Note:`}),` It is recommended to offer column options such as filtering, sorting and grouping only for columns that are always displayed.`]}),`
`,(0,T.jsx)(t.p,{children:`In the example below you can have a look at this behavior:`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.code,{children:`800`}),`: The content of the "Action" column is moved to the first column (`,(0,T.jsx)(t.code,{children:`responsiveMinWidth: 801`}),`)`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.code,{children:`600`}),`: The content of the "Age" column is moved to the first column (`,(0,T.jsx)(t.code,{children:`responsiveMinWidth: 601`}),`) and receives a custom header.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.code,{children:`400`}),`: The content of the "Friend Name" column is moved to the first column and the "Friend Age" column is hidden (`,(0,T.jsx)(t.code,{children:`responsiveMinWidth: 401`}),`). The "Friend Name" column also receives a custom header.`]}),`
`]}),`
`,(0,T.jsx)(u,{sourceState:`none`,of:S}),`
`,(0,T.jsx)(t.h3,{id:`columns-config`,children:`Columns Config`}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-jsx`,children:`const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    disableSortBy: true,
    responsivePopIn: true,
    responsiveMinWidth: 601,
    PopInHeader: 'Custom Header Text (age)',
    Header: 'Age',
    accessor: 'age'
  },
  {
    disableSortBy: true,
    responsivePopIn: true,
    responsiveMinWidth: 401,
    Header: 'Friend Name',
    PopInHeader: (instance) => {
      return <div style={{ color: 'red' }}>Friend Name (custom)</div>;
    },
    accessor: 'friend.name'
  },
  { disableSortBy: true, responsiveMinWidth: 401, Header: 'Friend Age', accessor: 'friend.age' },
  {
    disableSortBy: true,
    responsivePopIn: true,
    responsiveMinWidth: 801,
    id: 'actions',
    Header: 'Actions',
    width: 100,
    disableResizing: true,
    Cell: (instance) => {
      return (
        <FlexBox>
          <Button icon="edit" />
          <Button icon="delete" />
        </FlexBox>
      );
    }
  },
  {
    id: 'popinDisplay',
    Header: 'PopinDisplay Modes',
    responsivePopIn: true,
    responsiveMinWidth: 801,
    popinDisplay: popinDisplay, // possible values: "Block", "Inline", "WithoutHeader"
    Cell: () => {
      return <Text maxLines={1}>Using popinDisplay: {popinDisplay}</Text>;
    }
  }
];
`})}),`
`,(0,T.jsx)(t.h3,{id:`how-to-change-the-content-of-the-pop-in-cell`,children:`How to change the content of the pop-in cell?`}),`
`,(0,T.jsxs)(t.p,{children:[`You can change the content of the pop-in cell without mutating the original cell by using the `,(0,T.jsx)(t.code,{children:`isPopIn`}),` prop of the table instance returned by the `,(0,T.jsx)(t.code,{children:`Cell`}),` column option.`]}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.strong,{children:`Note:`}),` The `,(0,T.jsx)(t.code,{children:`cell`}),` property of the custom `,(0,T.jsx)(t.code,{children:`Cell`}),` renderer, always returns the properties and values of the cell the "popin" cell is rendered into.`]}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-js`,children:`const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 600,
    id: 'col',
    Header: 'Column',
    Cell: ({ isPopIn, cell, value }) => {
      if (isPopIn) {
        // this will log the properties of the \`name\` cell (e.g. \`cell.value\` is the value of the \`name\` cell)
        console.log(cell);
        // this will always log the value of this cell (\`col\` cell)
        console.log(value);
        return 'pop-in content';
      }
      // this will log the properties of this cell (e.g. \`cell.value\` is the value of the \`col\` cell)
      console.log(cell);
      // this will always log the value of this cell (\`col\` cell)
      console.log(value);
      return 'original content';
    }
  }
  // ...
];
`})}),`
`,(0,T.jsx)(t.h2,{id:`display-indicator-for-navigated-rows`,children:`Display indicator for navigated rows`}),`
`,(0,T.jsxs)(t.p,{children:[`To display show the navigation column you need to set `,(0,T.jsx)(t.code,{children:`withNavigationHighlight`}),` to `,(0,T.jsx)(t.code,{children:`true`}),` and to mark a row as "navigated" the `,(0,T.jsx)(t.code,{children:`markNavigatedRow`}),` prop is required.
With the `,(0,T.jsx)(t.code,{children:`markNavigatedRow`}),` callback it is possible to define when and how many navigation indicators should be shown.`]}),`
`,(0,T.jsx)(t.p,{children:`Click on any of the rows in the example below to display the "navigated" indicator in the navigation-column.`}),`
`,(0,T.jsx)(u,{sourceState:`none`,of:d}),`
`,(0,T.jsx)(t.h3,{id:`code-4`,children:`Code`}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-jsx`,children:`export const TableWithNavigationIndicators = () => {
  const [selectedRow, setSelectedRow] = useState();
  const onRowSelect = (e) => {
    setSelectedRow(e.detail.row);
  };
  const markNavigatedRow = useCallback(
    (row) => {
      return selectedRow?.id === row.id;
    },
    [selectedRow]
  );
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      withNavigationHighlight
      selectionMode={selectionMode}
      markNavigatedRow={markNavigatedRow}
      onRowSelect={onRowSelect}
    />
  );
};
`})}),`
`,(0,T.jsx)(t.h2,{id:`custom-column-filtering`,children:`Custom column filtering`}),`
`,(0,T.jsxs)(t.p,{children:[`It is possible to define your own filter function and filter component on each column. For this you need to customize the column option `,(0,T.jsx)(t.code,{children:`filter`}),` or add a custom filter type to the `,(0,T.jsx)(t.code,{children:`reactTableOptions.filterTypes`}),` object (for a custom filter function) and the column option `,(0,T.jsx)(t.code,{children:`Filter`}),` (for a custom filter component).`]}),`
`,(0,T.jsxs)(t.p,{children:[`Here you can find an example using a `,(0,T.jsx)(t.code,{children:`MultiComboBox`}),` with multiple values as filter.`]}),`
`,(0,T.jsx)(u,{sourceState:`none`,of:g}),`
`,(0,T.jsx)(t.h3,{id:`code-5`,children:`Code`}),`
`,(0,T.jsxs)(`details`,{children:[(0,T.jsx)(`summary`,{children:`Show static code`}),(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-jsx`,children:`const filterFn = (rows, accessor, filterValue) => {
  if (filterValue.length > 0) {
    return rows.filter((row) => {
      const rowVal = row.values[accessor];
      if (filterValue.some((item) => rowVal.includes(item))) {
        return true;
      }
      return false;
    });
  }
  return rows;
};
const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name',
    // either define your filter function here or set is as \`reactTableOption\` and pass the key as string here (see below)
    filter: filterFn,
    Filter: ({ column }) => {
      const firstNames = ['Carl', 'Dan', 'Rose', 'Susanne'];
      return (
        <MultiComboBox
          onSelectionChange={(e) => {
            column.setFilter(e.detail.items.map((item) => item.getAttribute('text')));
          }}
        >
          {firstNames.map((item) => {
            const isSelected = column?.filterValue?.some((filterVal) => filterVal.includes(item));
            return <MultiComboBoxItem text={item} key={item} selected={isSelected} />;
          })}
        </MultiComboBox>
      );
    }
  },
  {
    Header: 'Age',
    accessor: 'age'
  }
];
const TableComponent = () => {
  return (
    <ThemeProvider>
      <AnalyticalTable
        columns={COLUMNS}
        data={DATA}
        filterable
        // you can also define your function here, then you can just pass the key as string to the \`filter\` column option
        // reactTableOptions={{
        //   filterTypes: {
        //     multiValueFilter: filterFn
        //   }
        // }}
      />
    </ThemeProvider>
  );
};
`})})]}),`
`,(0,T.jsx)(t.h2,{id:`table-without-data`,children:`Table Without Data`}),`
`,(0,T.jsx)(u,{of:h}),`
`,(0,T.jsx)(t.h3,{id:`code-6`,children:`Code`}),`
`,(0,T.jsxs)(`details`,{children:[(0,T.jsx)(`summary`,{children:`Show static code`}),(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-tsx`,children:`function NoDataTable(props) {
  const [selected, setSelected] = useState('noData');
  const [filtered, setFiltered] = useState(false);
  const handleChange: SegmentedButtonPropTypes['onSelectionChange'] = (e) => {
    const { key } = e.detail.selectedItems[0].dataset;
    setSelected(key);
    if (key === 'data') {
      setFiltered(false);
    }
  };
  const handleClick: ToggleButtonPropTypes['onClick'] = (e) => {
    setFiltered(!!e.target.pressed);
  };

  const NoDataComponent: AnalyticalTablePropTypes['NoDataComponent'] =
    selected === 'noData'
      ? undefined
      : (props) => {
          return filtered ? (
            <IllustratedMessage role={props.accessibleRole} name={NoFilterResults} />
          ) : (
            <IllustratedMessage role={props.accessibleRole} name={NoDataIllustration} />
          );
        };
  return (
    <>
      <SegmentedButton onSelectionChange={handleChange} accessibleName="Select data view mode">
        <SegmentedButtonItem selected={selected === 'noData'} data-key="noData">
          Default NoData Component
        </SegmentedButtonItem>
        <SegmentedButtonItem selected={selected === 'illustratedMessage'} data-key="illustratedMessage">
          IllustratedMessage NoData Component
        </SegmentedButtonItem>
        <SegmentedButtonItem selected={selected === 'data'} data-key="data">
          With Data
        </SegmentedButtonItem>
      </SegmentedButton>{' '}
      |{' '}
      <ToggleButton onClick={handleClick} pressed={filtered} disabled={selected === 'data'}>
        Table filtered
      </ToggleButton>
      <AnalyticalTable
        {...props}
        data={selected === 'data' ? props.data : []}
        globalFilterValue={filtered ? 'Non-existing text' : undefined}
        NoDataComponent={NoDataComponent}
      />
    </>
  );
}
`})})]}),`
`,(0,T.jsx)(t.h2,{id:`kitchen-sink`,children:`Kitchen Sink`}),`
`,(0,T.jsx)(u,{of:b}),`
`,(0,T.jsx)(t.h3,{id:`code-7`,children:`Code`}),`
`,(0,T.jsxs)(`details`,{children:[(0,T.jsx)(`summary`,{children:`Show shortened Code`}),(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-jsx`,children:`const data = [
  {
    age: 80,
    friend: {
      age: 68,
      name: 'Carver Vance'
    },
    name: 'Allen Best',
    status: 'Positive'
  },
  {
    age: 31,
    friend: {
      age: 70,
      name: 'Strickland Gallegos'
    },
    name: 'Combs Fleming',
    status: 'None'
  }
  // shortened for readability
];

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    autoResizable: true,
    headerTooltip: 'Full Name'
  },
  {
    Header: 'Age',
    accessor: 'age',
    autoResizable: true,
    className: 'superCustomClass',
    disableFilters: false,
    disableGroupBy: true,
    disableSortBy: false,
    hAlign: 'End'
  },
  {
    Header: 'Friend Name',
    accessor: 'friend.name',
    autoResizable: true
  },
  {
    Filter: () => {},
    Header: () => {},
    accessor: 'friend.age',
    autoResizable: true,
    filter: () => {},
    hAlign: 'End',
    headerLabel: 'Friend Age'
  },
  {
    Cell: () => {},
    Header: 'Actions',
    accessor: '.',
    cellLabel: () => {},
    disableFilters: true,
    disableGroupBy: true,
    disableResizing: true,
    disableSortBy: true,
    id: 'actions',
    minWidth: 100,
    width: 100
  }
];

const TestComp2 = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      alternateRowColor
      columnOrder={['friend.name', 'friend.age', 'name']}
      extension={
        <FlexBox justifyContent="End">
          <Button accessibleName="edit" design="Transparent" icon="edit" />
        </FlexBox>
      }
      filterable
      groupable
      header="Table Title"
      headerRowHeight={60}
      highlightField="status"
      infiniteScroll
      infiniteScrollThreshold={20}
      loadingDelay={1000}
      minRows={5}
      noDataText="Custom 'noDataText' message"
      overscanCountHorizontal={5}
      scaleWidthMode="Smart"
      selectedRowIds={{
        3: true
      }}
      selectionBehavior="Row"
      selectionMode="Single"
      sortable
      subRowsKey="subRows"
      visibleRowCountMode="Interactive"
      visibleRows={5}
      withRowHighlight
      onAutoResize={() => {}}
      onColumnsReorder={() => {}}
      onGroup={() => {}}
      onLoadMore={() => {}}
      onRowClick={() => {}}
      onRowExpandChange={() => {}}
      onRowSelect={() => {}}
      onSort={() => {}}
      onTableScroll={() => {}}
    />
  );
};
`})})]}),`
`,(0,T.jsx)(a,{})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),s(),o(),c(),v()}))();export{w as default};