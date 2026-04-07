import{n as e}from"./chunk-zsgVPwQN.js";import{Wm as t}from"./iframe-CHoWihFp.js";import{r as n}from"./react-BTjQJDfR.js";import{d as r,s as i,t as a,u as o,v as s}from"./components-C5_0WzQN.js";import{_ as c,d as l,r as u}from"./blocks-ViDxNp8H.js";import{PluginManualRowSelect as d,t as f}from"./AnalyticalTableHooks.stories-XTbeRjwS.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{title:`Data Display / AnalyticalTable / Plugin Hooks / useManualRowSelect`}),`
`,(0,h.jsx)(t.h1,{id:`analyticaltable-plugin-usemanualrowselect`,children:`AnalyticalTable Plugin: useManualRowSelect`}),`
`,(0,h.jsx)(o,{moduleName:`useManualRowSelect`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`useManualRowSelect`}),` plugin hook allows controlling the selected rows manually. It accepts a parameter (`,(0,h.jsx)(t.code,{children:`manualRowSelectedKey`}),`) which defaults to `,(0,h.jsx)(t.code,{children:`isSelected`}),`.
If this key is found on the original data row, and it is `,(0,h.jsx)(t.code,{children:`true`}),`, this row will be manually selected.`]}),`
`,(0,h.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsx)(u,{sourceState:`none`,of:d}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-jsx`,children:`// you could also omit the \`'isSelected'\`, as this is the default value
const tableHooks = [AnalyticalTableHooks.useManualRowSelect('isSelected')]; // should be memoized

<AnalyticalTable
  selectionMode={AnalyticalTableSelectionMode.Multiple}
  data={data}
  columns={columns}
  tableHooks={tableHooks}
/>
`})}),`
`,(0,h.jsx)(i,{})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),s(),r(),c(),a(),f()}))();export{m as default};