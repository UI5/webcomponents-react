import{j as e}from"./iframe-DMN4M7xk.js";import{useMDXComponents as a}from"./index-CILjehOn.js";import{M as t}from"./blocks-D_B3P_L6.js";import"./Tag-ClYMjcis.js";import"./index-fsDm6-dx.js";import{I as i,F as s}from"./CommandsAndQueries-WBNIPpbv.js";import"./copy-DfWrS8Wl.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BhNJA5fs.js";import"./sys-enter-2-D_7r5iCR.js";import"./alert-B4Ie2dEw.js";import"./index-XJcxBhVz.js";import"./index-CZCgHbbj.js";import"./index-Bm615TpC.js";import"./Link-USYy1Qgl.js";import"./index-Bppq7NLw.js";import"./index-DPueH0sU.js";import"./index-W50AkbAB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IlXAI9zt.js";import"./addCustomCSSWithScoping-dib_Xrvh.js";import"./index-DC1f3cIv.js";function n(l){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Data Display / AnalyticalTable / Plugin Hooks"}),`
`,e.jsx(o.h1,{id:"plugin-hooks",children:"Plugin Hooks"}),`
`,e.jsx(i,{moduleName:"* as AnalyticalTableHooks",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks",defaultImport:!0}),`
`,e.jsxs(o.p,{children:["We're offering plugin hooks to extend the functionality of the ",e.jsx(o.code,{children:"AnalyticalTable"})," component. The following hooks are available:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-useannounceemptycells--docs",children:"useAnnounceEmptyCells"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-usef2celledit--docs",children:"useF2CellEdit"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-useindeterminaterowselection--docs",children:"useIndeterminateRowSelection"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-usemanualrowselect--docs",children:"useManualRowSelect"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-useoncolumnresize--docs",children:"useOnColumnResize"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-useorderedmultisort--docs",children:"useOrderedMultiSort"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-userowdisableselection--docs",children:"useRowDisableSelection"})}),`
`]}),`
`,e.jsx(o.h2,{id:"add-a-plugin-hook-to-the-analyticaltable",children:"Add a Plugin Hook to the AnalyticalTable"}),`
`,e.jsxs(o.p,{children:["Import the hooks from the ",e.jsx(o.code,{children:"@ui5/webcomponents-react/AnalyticalTableHooks"})," package and incorporate them into your ",e.jsx(o.code,{children:"AnalyticalTable"})," component by adding them to the ",e.jsx(o.code,{children:"tableHooks"})," array."]}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"Example:"})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import {useAnnounceEmptyCells} from '@ui5/webcomponents-react/AnalyticalTableHooks';

const tableHooks = [useAnnounceEmptyCells]; // this array should be memoized

//...

<AnalyticalTable {...otherProps} tableHooks={tableHooks} />
`})}),`
`,e.jsx(s,{})]})}function I(l={}){const{wrapper:o}={...a(),...l.components};return o?e.jsx(o,{...l,children:e.jsx(n,{...l})}):n(l)}export{I as default};
