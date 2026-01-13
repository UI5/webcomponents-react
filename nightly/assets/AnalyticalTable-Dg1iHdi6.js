import{j as e}from"./iframe-BX6l_vT-.js";import{useMDXComponents as h}from"./index-Bzy26fup.js";import{M as x,C as t}from"./blocks-dv2dOEr1.js";import"./Tag-CPbL9Jm0.js";import"./index-Brt5lPnV.js";import{C as s}from"./ControlsWithNote-DT25iZ0d.js";import{D as u}from"./DocsHeader-Dd5Ldadt.js";import{F as j}from"./CommandsAndQueries-BQamr4MW.js";import{C as i,D as r,T as p,I as m,S as l,a as d,R as c,N as g,b,c as f,K as w}from"./AnalyticalTable.stories-Ca5r5f4M.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BHJaLhAv.js";import"./sys-enter-2-EZBfp4iZ.js";import"./alert-DUVH4PBA.js";import"./index-DKRKom99.js";import"./index-CPY8w0If.js";import"./Link-LBAuQHud.js";import"./copy-IRAbc-Qz.js";import"./copy-DJpI-ZKv.js";import"./GitHub-Mark-BYqQpMuY.js";import"./TableOfContent-DfjT9NBm.js";import"./index-JvehRoeP.js";import"./index-DN8AW8ib.js";import"./index-5GNX0CLe.js";import"./index-CdanIUAH.js";import"./index-CUja4hYj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJYHkaYl.js";import"./addCustomCSSWithScoping-DPpaQSds.js";import"./Friends500-CRbR9XAn.js";import"./delete-Bsyy1njk.js";import"./settings-DxWJHI99.js";import"./NoData-C_NtRWhM.js";import"./IllustratedMessage-DIkrg042.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CvIXbxAg.js";import"./index-BDGSG9LU.js";import"./index-Bd42I97O.js";import"./slim-arrow-down-C-LrsL8H.js";import"./Input-CDmiLyyY.js";import"./ResponsivePopoverCommon.css-CmOep2RC.js";import"./ValueStateMessage.css-DBlWYUos.js";import"./Suggestions.css-C86jlgxo.js";import"./ListBoxItemGroupTemplate-CjE33DFP.js";import"./ComboBoxItemGroup-DXvxztj-.js";import"./ListItemBaseTemplate-D6Eqv4kM.js";import"./Token-BcKVBOJy.js";import"./ScrollEnablement-CX9YTqaF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ChOU4iwN.js";import"./ToggleButton-CODQYAiJ.js";import"./SuggestionItem-1DKCdUlb.js";import"./index-DlvRAfCL.js";import"./Option-CFA8b-um.js";import"./index-DAsjesvB.js";import"./SegmentedButton-DUlvEafh.js";import"./index-BWIKqFzV.js";import"./Select-xeWEHzkB.js";import"./InvisibleMessage-BDRoIrKZ.js";import"./slim-arrow-down-48HvW-vj.js";import"./index-BuXHj4_-.js";import"./index-aYisw1Gg.js";import"./index-ZtIQJzTv.js";import"./index-Dr11T0CO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bbs4NOEV.js";import"./group-2-D6oioZ7I.js";import"./sort-descending-DgSgbzqc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bb9INHlF.js";import"./utils-B0NWY5kp.js";import"./index-223TNC1P.js";import"./index-CA6OMJ6E.js";import"./index-BSjQgxdu.js";import"./navigation-down-arrow-DpKyjZiZ.js";import"./navigation-right-arrow-C5pZYAdh.js";import"./navigation-right-arrow-Bwx2a_3u.js";import"./useCurrentTheme-CxsvHeYZ.js";import"./index-Dll0aIpz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cr-hHSan.js";function a(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...h(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:i}),`
`,e.jsx(u,{of:i}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(n.h3,{id:"code",children:"Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show shortened Code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const columns = [
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
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(n.h2,{id:"column-properties",children:"Column Properties"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Required Attributes"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"accessor"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"string"})," OR ",e.jsx("br",{}),e.jsx(n.code,{children:"(originalRow: Record<string, any>, rowIndex: number, row: RowType,"})," ",e.jsx("br",{}),e.jsx(n.code,{children:"parentRows: RowType[], data: Record<string, any>[]) => any"})]}),e.jsxs(n.td,{children:["This ",e.jsx(n.code,{children:"string"}),"/",e.jsx(n.code,{children:"function"})," is used to build the data model for your column.",e.jsx("br",{}),e.jsx("br",{}),e.jsx(n.strong,{children:"Note"}),": You can also specify deeply nested values with accessors like ",e.jsx(n.code,{children:"info.hobby"})," or even ",e.jsx(n.code,{children:"address[0].street"}),".",e.jsx("br",{})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"id"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["Defines the unique ID for the column. It is used by reference in things like sorting, grouping, filtering, etc.",e.jsx("br",{}),e.jsx("br",{}),e.jsx(n.strong,{children:"Note:"})," If no ",e.jsx(n.code,{children:"accessor"})," is set, or the ",e.jsx(n.code,{children:"accessor"})," is a function, the ",e.jsx(n.code,{children:"id"})," property is mandatory."]})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Optional Properties"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Header"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"string"})," OR",e.jsx("br",{}),e.jsx(n.code,{children:"ComponentType"})]}),e.jsxs(n.td,{children:["Can either be ",e.jsx(n.code,{children:"string"})," or a React component that will be rendered as column header"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"headerLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["Defines the ",e.jsx(n.code,{children:"aria-label"})," for the whole column read by screen readers."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"headerTooltip"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["Tooltip for the column header. If not set, the display text will be the same as the Header if it is a ",e.jsx(n.code,{children:"string"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Cell"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"string"})," OR",e.jsx("br",{}),e.jsx(n.code,{children:"ComponentType"}),e.jsx("br",{}),e.jsx(n.code,{children:"<CellInstance>"})]}),e.jsxs(n.td,{children:["Custom cell renderer. If set, the table will use this component or render the provided string for every cell, passing all necessary information as props, e.g., the cell value as ",e.jsx(n.code,{children:"props.value"}),".",e.jsx("br",{}),e.jsx("br",{}),e.jsx(n.strong,{children:"Note:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using a custom component ",e.jsx(n.strong,{children:"can impact performance"}),"! If you pass a component, ",e.jsx(n.strong,{children:"memoizing it is strongly recommended"}),", especially for complex components or large datasets."]}),e.jsxs("li",{children:["For custom elements, text truncation needs to be applied manually. ",e.jsx(n.a,{href:"https://ui5.github.io/webcomponents-react/v2/?path=/docs/data-display-analyticaltable-recipes--docs",rel:"nofollow",children:"Here"})," you can find out more."]})]})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"cellLabel"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"({cell, instance})"}),e.jsx("br",{}),e.jsx(n.code,{children:"=> string"})]}),e.jsxs(n.td,{children:["Defines a function that receives an object as a parameter, including the cell and table instance, and should return the ",e.jsx(n.code,{children:"aria-label"})," of the current cell. ",e.jsx("br",{}),e.jsx("br",{}),e.jsx(n.strong,{children:"Note:"})," Use this property if there is no textual content available through the dataset (e.g. no ",e.jsx(n.code,{children:"accessor"})," field available), or if you want to provide additional context when navigating to the respective cell for screen readers.",e.jsx("br",{}),e.jsx("br",{}),e.jsx(n.strong,{children:"Note:"})," To retrieve the internal ",e.jsx(n.code,{children:"aria-label"}),", utilize the ",e.jsx(n.code,{children:"cell.cellLabel"})," property."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"width"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsxs(n.td,{children:["Defines the column width. If not set, the table will distribute all columns without a width evenly.",e.jsx("br",{}),e.jsx(n.strong,{children:"Note:"})," Values lower than ",e.jsx(n.code,{children:"minWidth"})," are not supported!"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"minWidth"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsxs(n.td,{children:["Minimum width of the column.",e.jsx("br",{}),e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"60"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"maxWidth"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"Maximum width of the column."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Filter"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ComponentType"})}),e.jsx(n.td,{children:"Filter Component to be rendered in the Header"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"disableFilters"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Disable filters for this column"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"disableGlobalFilter"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Disable global filtering for this column"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"defaultCanFilter"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsxs(n.td,{children:["If set to true, this column will be filterable, regardless if it has a valid ",e.jsx(n.code,{children:"accessor"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"filter"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string OR Function"})}),e.jsxs(n.td,{children:["Either a string or a filter function.",e.jsx("br",{}),"Supported String Values: ",e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n.code,{children:"text"})}),e.jsx("li",{children:e.jsx(n.code,{children:"exactText"})}),e.jsx("li",{children:e.jsx(n.code,{children:"exactTextCase"})}),e.jsx("li",{children:e.jsx(n.code,{children:"equals"})})]}),e.jsx(n.strong,{children:"Note:"})," When the standard ",e.jsx(n.code,{children:"Filter"})," component is used, the filter function is not triggered if the ",e.jsx(n.code,{children:"filterValue"})," is empty, as the filter is then removed."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Aggregated"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ComponentType"})}),e.jsx(n.td,{children:"Component to render for aggregated cells"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"aggregate"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"string"})," OR",e.jsx("br",{}),e.jsx(n.code,{children:"((leafValues,"}),e.jsx("br",{}),e.jsx(n.code,{children:"aggregatedValues)"}),e.jsx("br",{}),e.jsx(n.code,{children:"=> any)"})]}),e.jsxs(n.td,{children:["Aggregation function or string.",e.jsx("br",{}),"Supported String Values: ",e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n.code,{children:"sum"})}),e.jsx("li",{children:e.jsx(n.code,{children:"min"})}),e.jsx("li",{children:e.jsx(n.code,{children:"max"})}),e.jsx("li",{children:e.jsx(n.code,{children:"minMax"})}),e.jsx("li",{children:e.jsx(n.code,{children:"average"})}),e.jsx("li",{children:e.jsx(n.code,{children:"median"})}),e.jsx("li",{children:e.jsx(n.code,{children:"unique"})}),e.jsx("li",{children:e.jsx(n.code,{children:"uniqueCount"})}),e.jsx("li",{children:e.jsx(n.code,{children:"count"})})]})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"aggregateValue"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"string"})," OR",e.jsx("br",{}),e.jsx(n.code,{children:"((values, row,"}),e.jsx("br",{}),e.jsx(n.code,{children:"column) => any)"})]}),e.jsx(n.td,{children:"When attempting to group/aggregate non primitive cell values (eg. arrays of items) you will likely need to resolve a stable primitive value like a number or string to use in normal row aggregations. This property can be used to aggregate or simply access the value to be used in aggregations eg. count-ing the unique number of items in a cell's array value before sum-ing that count across the table"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"disableGroupBy"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Disable groupBy for this column"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"defaultCanSort"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsxs(n.td,{children:["If set to true, this column will be sortable, regardless if it has a valid ",e.jsx(n.code,{children:"accessor"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"disableSortBy"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Disable sorting for this column"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sortDescFirst"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsxs(n.td,{children:["If set to ",e.jsx(n.code,{children:"true"}),", the first sort direction for this column will be descending instead of ascending."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sortInverted"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsxs(n.td,{children:["If set to ",e.jsx(n.code,{children:"true"}),", the underlying sorting direction will be inverted, but the UI will not."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sortType"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"string"})," OR",e.jsx("br",{}),e.jsx(n.code,{children:"((rowA, rowB,"}),e.jsx("br",{}),e.jsx(n.code,{children:"columnId: string,"}),e.jsx("br",{}),e.jsx(n.code,{children:"descending: boolean)"}),e.jsx("br",{}),e.jsx(n.code,{children:"=> number)"})]}),e.jsxs(n.td,{children:["String or custom ",e.jsx(n.strong,{children:"memoized"})," sort function.",e.jsx("br",{}),"Supported String Values: ",e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n.code,{children:"basic"})}),e.jsx("li",{children:e.jsx(n.code,{children:"datetime"})}),e.jsx("li",{children:e.jsx(n.code,{children:"alphanumeric"})})]}),e.jsx(n.strong,{children:"Default:"}),e.jsx(n.code,{children:"'alphanumeric'"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"disableResizing"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Disable resizing for this column"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"hAlign"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"TextAlign"})}),e.jsx(n.td,{children:"Horizontal align of the cell"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"vAlign"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"VerticalAlign"})}),e.jsx(n.td,{children:"Vertical align of the cell"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"scaleWidthModeOptions"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ScaleWidthModeOptions"})}),e.jsxs(n.td,{children:["Allows passing a custom string for the internal width calculation of custom cells for ",e.jsx(n.code,{children:"scaleWidthMode"})," ",e.jsx(n.code,{children:"Grow"})," and ",e.jsx(n.code,{children:"Smart"}),". More ",e.jsx("a",{href:"./?path=/docs/data-display-analyticaltable-recipes--docs#how-to-scale-custom-cells",children:"here"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"responsivePopIn"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsxs(n.td,{children:["Enables the pop-in behavior of the column. When the ",e.jsx(n.code,{children:"responsiveMinWidth"})," is smaller then the width of the table, the content of each cell will move to the first cell in the row, improving usability on small or mobile devices.",e.jsx("br",{}),e.jsx(n.strong,{children:"Note:"})," At least one column must remain visible at all times!"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"responsiveMinWidth"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsxs(n.td,{children:["Defines how the table should react when its width falls below the ",e.jsx(n.code,{children:"responsiveMinWidth"}),". ",e.jsxs("ul",{children:[e.jsxs("li",{children:["If ",e.jsx(n.code,{children:"responsivePopIn"})," is ",e.jsx(n.code,{children:"true"})," the content of this column will be moved to the first column."]}),e.jsxs("li",{children:["If ",e.jsx(n.code,{children:"responsivePopIn"})," is not set or ",e.jsx(n.code,{children:"false"})," the column will be hidden."]})]})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"PopInHeader"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"string"})," OR",e.jsx("br",{}),e.jsx(n.code,{children:"ComponentType"})]}),e.jsx(n.td,{children:'Custom pop-in header renderer. If set, the table will call that component for every column that is "popped-in" and pass the table instance as prop.'})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"popinDisplay"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"AnalyticalTablePopinDisplay"})}),e.jsxs(n.td,{children:["Defines the display of ",e.jsx(n.code,{children:"AnalyticalTable"})," pop-ins.",e.jsx("br",{}),e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"AnalyticalTablePopinDisplay.Block"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"disableDragAndDrop"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Defines if the column is reorderable by dragging and dropping columns."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableMultiSort"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsxs(n.td,{children:["Defines whether this column should allow multi-sort.",e.jsx("br",{}),e.jsx("br",{})," ",e.jsx(n.strong,{children:"Note:"})," When sorting by a column that does not allow multiple sorting, only the current column is sorted and all other sorted columns are reset."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"autoResizable"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsxs(n.td,{children:["Defines whether double-clicking a columns resizer will automatically resize the column to fit the largest cell content of visible rows.",e.jsx("br",{}),e.jsx("br",{}),e.jsx(n.strong,{children:"Note:"})," Only default text content is supported by this option, for custom content it might work as well, but we recommend checking the behavior carefully as the logic can't account for all possible implementations."]})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"tree-table",children:"Tree Table"}),`
`,e.jsx(t,{of:p,sourceState:"none"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"data"})," structure of the tree table is as follows:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const data = {
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
`,e.jsxs(n.p,{children:["In this example the default key for sub row detection is used (",e.jsx(n.code,{children:"subRows"}),"), you can use any key you like by setting the ",e.jsx(n.code,{children:"subRowsKey"})," prop."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"infinite-scrolling",children:"Infinite Scrolling"}),`
`,e.jsx(n.p,{children:"The table initially contains 50 rows, when the last 10 rows are reached the table will load more data."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," To prevent the table state from resetting when the data is updated, please see ",e.jsx(n.a,{href:"?path=/docs/data-display-analyticaltable-recipes--docs#how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes",children:"this recipe"}),"."]}),`
`,e.jsx(t,{sourceState:"none",of:m}),`
`,e.jsx(n.h3,{id:"code-1",children:"Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const InfiniteScrollTable = (props) => {
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
`,e.jsx(n.h2,{id:"analyticaltable-with-subcomponents",children:"AnalyticalTable with subcomponents"}),`
`,e.jsxs(n.p,{children:["Adding custom subcomponents below table rows can be achieved by setting the ",e.jsx(n.code,{children:"renderRowSubComponent"}),` prop.
The prop expects a function with an optional parameter containing the `,e.jsx(n.code,{children:"row"})," instance, there you can control which row should display subcomponents. If you want to display the subcomponent at the bottom of the row without an expandable container, you can set ",e.jsx(n.code,{children:"subComponentsBehavior"})," prop to ",e.jsx(n.code,{children:'"Visible"'})," or to ",e.jsx(n.code,{children:'"IncludeHeight"'}),'. "Visible" simply adds the subcomponent to the row without including its height in the initial calculation of the table body, whereas "IncludeHeight" does.']}),`
`,e.jsx(n.h3,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"renderRowSubComponent"})," is set, ",e.jsx(n.code,{children:"grouping"})," is disabled."]}),`
`,e.jsx(n.li,{children:"When rendering active elements inside the subcomponent, make sure to add the `data-subcomponent-active-element' attribute, otherwise focus behavior won't be consistent."}),`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"AnalyticalTableSubComponentsBehavior.IncludeHeight"})," or ",e.jsx(n.code,{children:"AnalyticalTableSubComponentsBehavior.IncludeHeightExpandable"})," is used, ",e.jsx(n.code,{children:"AnalyticalTableVisibleRowCountMode.Interactive"})," is not supported."]}),`
`]}),`
`,e.jsx(s,{of:l,include:["renderRowSubComponent","subComponentsBehavior"]}),`
`,e.jsx(t,{sourceState:"none",of:l}),`
`,e.jsx(n.h3,{id:"code-2",children:"Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const TableWithSubcomponents = (props) => {
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
`,e.jsx(n.h2,{id:"adjust-the-number-of-rows-to-the-container-height",children:"Adjust the number of rows to the container height"}),`
`,e.jsxs(n.p,{children:["By adding the ",e.jsx(n.code,{children:"visibleRowCountMode"})," prop and setting it to ",e.jsx(n.code,{children:"AnalyticalTableVisibleRowCountMode.Auto"})," the table automatically fills the surrounding container with rows and when setting it to ",e.jsx(n.code,{children:"AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows"}),", empty rows fill the container as well, if not enough visible rows are available."]}),`
`,e.jsx(s,{of:d,include:["containerHeight","visibleRowCountMode"],hideHTMLPropsNote:!0}),`
`,e.jsx(t,{sourceState:"none",of:d}),`
`,e.jsx(n.h3,{id:"code-3",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const TableComponent = (props) => {
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
`,e.jsx(n.h2,{id:"responsively-display-columns-on-small-devices-pop-in",children:"Responsively display columns on small devices (Pop-In)"}),`
`,e.jsx(s,{of:c,hideHTMLPropsNote:!0,include:["adjustTableHeightOnPopIn","containerWidth"]}),`
`,e.jsxs(n.p,{children:["To responsively hide columns or move content to the first column, you can add the ",e.jsx(n.code,{children:"responsiveMinWidth"}),` column option. If
you want the column to "pop-in" the `,e.jsx(n.code,{children:"responsivePopIn"})," has to be set to ",e.jsx(n.code,{children:"true"}),`, otherwise the column will be hidden when the
`,e.jsx(n.code,{children:"responsiveMinWidth"}),` exceeds the table width. It's also possible to change the header of the pop-in column by setting the
`,e.jsx(n.code,{children:"PopInHeader"})," option."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," It is recommended to offer column options such as filtering, sorting and grouping only for columns that are always displayed."]}),`
`,e.jsx(n.p,{children:"In the example below you can have a look at this behavior:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"800"}),': The content of the "Action" column is moved to the first column (',e.jsx(n.code,{children:"responsiveMinWidth: 801"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"600"}),': The content of the "Age" column is moved to the first column (',e.jsx(n.code,{children:"responsiveMinWidth: 601"}),") and receives a custom header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"400"}),': The content of the "Friend Name" column is moved to the first column and the "Friend Age" column is hidden (',e.jsx(n.code,{children:"responsiveMinWidth: 401"}),'). The "Friend Name" column also receives a custom header.']}),`
`]}),`
`,e.jsx(t,{sourceState:"none",of:c}),`
`,e.jsx(n.h3,{id:"columns-config",children:"Columns Config"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const COLUMNS = [
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
`,e.jsx(n.h3,{id:"how-to-change-the-content-of-the-pop-in-cell",children:"How to change the content of the pop-in cell?"}),`
`,e.jsxs(n.p,{children:["You can change the content of the pop-in cell without mutating the original cell by using the ",e.jsx(n.code,{children:"isPopIn"})," prop of the table instance returned by the ",e.jsx(n.code,{children:"Cell"})," column option."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The ",e.jsx(n.code,{children:"cell"})," property of the custom ",e.jsx(n.code,{children:"Cell"}),' renderer, always returns the properties and values of the cell the "popin" cell is rendered into.']}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const COLUMNS = [
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
`,e.jsx(n.h2,{id:"display-indicator-for-navigated-rows",children:"Display indicator for navigated rows"}),`
`,e.jsxs(n.p,{children:["To display show the navigation column you need to set ",e.jsx(n.code,{children:"withNavigationHighlight"})," to ",e.jsx(n.code,{children:"true"}),' and to mark a row as "navigated" the ',e.jsx(n.code,{children:"markNavigatedRow"}),` prop is required.
With the `,e.jsx(n.code,{children:"markNavigatedRow"})," callback it is possible to define when and how many navigation indicators should be shown."]}),`
`,e.jsx(n.p,{children:'Click on any of the rows in the example below to display the "navigated" indicator in the navigation-column.'}),`
`,e.jsx(t,{sourceState:"none",of:g}),`
`,e.jsx(n.h3,{id:"code-4",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export const TableWithNavigationIndicators = () => {
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
`,e.jsx(n.h2,{id:"custom-column-filtering",children:"Custom column filtering"}),`
`,e.jsxs(n.p,{children:["It is possible to define your own filter function and filter component on each column. For this you need to customize the column option ",e.jsx(n.code,{children:"filter"})," or add a custom filter type to the ",e.jsx(n.code,{children:"reactTableOptions.filterTypes"})," object (for a custom filter function) and the column option ",e.jsx(n.code,{children:"Filter"})," (for a custom filter component)."]}),`
`,e.jsxs(n.p,{children:["Here you can find an example using a ",e.jsx(n.code,{children:"MultiComboBox"})," with multiple values as filter."]}),`
`,e.jsx(t,{sourceState:"none",of:b}),`
`,e.jsx(n.h3,{id:"code-5",children:"Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show static code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const filterFn = (rows, accessor, filterValue) => {
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
`,e.jsx(n.h2,{id:"table-without-data",children:"Table Without Data"}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h3,{id:"code-6",children:"Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show static code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function NoDataTable(props) {
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
`,e.jsx(n.h2,{id:"kitchen-sink",children:"Kitchen Sink"}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(n.h3,{id:"code-7",children:"Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show shortened Code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const data = [
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
`,e.jsx(j,{})]})}function Ye(o={}){const{wrapper:n}={...h(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{Ye as default};
