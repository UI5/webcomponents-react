import{n as e}from"./chunk-jRWAZmH_.js";import{Gm as t}from"./iframe-C2-neVvG.js";import{r as n}from"./react-Btx5xI2k.js";import{_ as r,l as i,o as a,t as o,u as s}from"./components-LBE5S5GV.js";import{_ as c,d as l,r as u}from"./blocks-DSu3R0_v.js";import{PluginAnnounceEmptyCells as d,t as f}from"./AnalyticalTableHooks.stories-CoPsnCbN.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{title:`Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells`}),`
`,(0,h.jsx)(t.h1,{id:`analyticaltable-plugin-useannounceemptycells`,children:`AnalyticalTable Plugin: useAnnounceEmptyCells`}),`
`,(0,h.jsx)(i,{moduleName:`useAnnounceEmptyCells`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`useAnnounceEmptyCells`}),` plugin hook adds screen reader announcements for empty cells.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Note:`}),` Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells.`]}),`
`,(0,h.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsx)(u,{sourceState:`none`,of:d}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-jsx`,children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`First data entry with empty values or undefined fields:`})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-js`,children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,(0,h.jsx)(a,{})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),r(),s(),c(),o(),f()}))();export{m as default};