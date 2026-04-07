import{n as e}from"./chunk-zsgVPwQN.js";import{Hi as t,Ui as n,Wm as r}from"./iframe-CHoWihFp.js";import{r as i}from"./react-BTjQJDfR.js";import{d as a,s as o,t as s,u as c,v as l}from"./components-C5_0WzQN.js";import{_ as u,d,r as f}from"./blocks-ViDxNp8H.js";import{PluginIndeterminateRowSelection as p,t as m}from"./AnalyticalTableHooks.stories-XTbeRjwS.js";function h(e){let n={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(d,{title:`Data Display / AnalyticalTable / Plugin Hooks / useIndeterminateRowSelection`}),`
`,(0,_.jsx)(n.h1,{id:`analyticaltable-plugin-useindeterminaterowselection`,children:`AnalyticalTable Plugin: useIndeterminateRowSelection`}),`
`,(0,_.jsx)(c,{moduleName:`useIndeterminateRowSelection`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`}),`
`,(0,_.jsxs)(n.p,{children:[`The `,(0,_.jsx)(n.code,{children:`useIndeterminateRowSelection`}),` plugin hook allows marking parent rows as indeterminate when a child row is selected.
When using this hook, it is recommended to also select all sub-rows when selecting a row. (`,(0,_.jsx)(n.code,{children:`reactTableOptions={{ selectSubRows: true }}`}),`)`]}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.strong,{children:`Note:`}),` This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!`]}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.strong,{children:`Note:`}),` Using this hook in combination with the deprecated `,(0,_.jsx)(n.code,{children:`useRowDisableSelection`}),` plugin hook is not supported!`]}),`
`,(0,_.jsx)(t,{hideCloseButton:!0,children:(0,_.jsxs)(_.Fragment,{children:[`The indeterminate state has a higher priority than the selected state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `,(0,_.jsx)(n.code,{children:`selectSubRows: true`}),` is set and a row with sub-rows is selected and then a sub-row is unselected.`]})}),`
`,(0,_.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,_.jsx)(f,{sourceState:`none`,of:p}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-jsx`,children:`const tableHooks = [useIndeterminateRowSelection()]; // should be memoized

<AnalyticalTable
  selectionMode={AnalyticalTableSelectionMode.Multiple}
  data={data}
  columns={columns}
  isTreeTable
  tableHooks={tableHooks}
  reactTableOptions={{ selectSubRows: true }}
/>
`})}),`
`,(0,_.jsx)(n.h4,{id:`optional-function-parameter`,children:`Optional function parameter`}),`
`,(0,_.jsx)(n.p,{children:`The plugin hook allows passing a callback as parameter with the following structure:`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-js`,children:`({indeterminateRowsById, tableInstance}) => void;
`})}),`
`,(0,_.jsxs)(n.p,{children:[`The callback is fired, every time the internal `,(0,_.jsx)(n.code,{children:`indeterminateRows`}),` state is changed.
The event parameter is an object, with all indeterminate rows by id (e.g. `,(0,_.jsx)(n.code,{children:`{"0.1":true}`}),`) and the table instance.`]}),`
`,(0,_.jsx)(o,{})]})}function g(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=r(),l(),a(),u(),s(),n(),m()}))();export{g as default};