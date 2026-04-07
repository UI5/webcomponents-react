import{n as e}from"./chunk-zsgVPwQN.js";import{Wm as t}from"./iframe-a0DPs_N4.js";import{r as n}from"./react-B0mTcu7O.js";import{d as r,s as i,t as a,u as o,v as s}from"./components-iDhKVYGD.js";import{_ as c,d as l}from"./blocks-DVe7GyIA.js";function u(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{title:`Data Display / AnalyticalTable / Plugin Hooks`}),`
`,(0,f.jsx)(t.h1,{id:`plugin-hooks`,children:`Plugin Hooks`}),`
`,(0,f.jsx)(o,{moduleName:`* as AnalyticalTableHooks`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`,defaultImport:!0}),`
`,(0,f.jsxs)(t.p,{children:[`We're offering plugin hooks to extend the functionality of the `,(0,f.jsx)(t.code,{children:`AnalyticalTable`}),` component. The following hooks are available:`]}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable-plugin-hooks-useannounceemptycells--docs`,children:`useAnnounceEmptyCells`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable-plugin-hooks-usef2celledit--docs`,children:`useF2CellEdit`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable-plugin-hooks-useindeterminaterowselection--docs`,children:`useIndeterminateRowSelection`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable-plugin-hooks-usemanualrowselect--docs`,children:`useManualRowSelect`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable-plugin-hooks-useoncolumnresize--docs`,children:`useOnColumnResize`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable-plugin-hooks-useorderedmultisort--docs`,children:`useOrderedMultiSort`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable-plugin-hooks-userowdisableselection--docs`,children:`useRowDisableSelection`})}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`add-a-plugin-hook-to-the-analyticaltable`,children:`Add a Plugin Hook to the AnalyticalTable`}),`
`,(0,f.jsxs)(t.p,{children:[`Import the hooks from the `,(0,f.jsx)(t.code,{children:`@ui5/webcomponents-react/AnalyticalTableHooks`}),` package and incorporate them into your `,(0,f.jsx)(t.code,{children:`AnalyticalTable`}),` component by adding them to the `,(0,f.jsx)(t.code,{children:`tableHooks`}),` array.`]}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.strong,{children:`Example:`})}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-jsx`,children:`import {useAnnounceEmptyCells} from '@ui5/webcomponents-react/AnalyticalTableHooks';

const tableHooks = [useAnnounceEmptyCells]; // this array should be memoized

//...

<AnalyticalTable {...otherProps} tableHooks={tableHooks} />
`})}),`
`,(0,f.jsx)(i,{})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),s(),a(),c(),r()}))();export{d as default};