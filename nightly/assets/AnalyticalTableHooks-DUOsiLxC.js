import{j as e}from"./iframe-DJVbwX9i.js";import{useMDXComponents as t}from"./index-BFT6aOv2.js";import{M as a}from"./blocks-Cc72oRCz.js";import"./Tag-BNmglB2v.js";import"./index-hobvar2O.js";import{I as i}from"./CommandsAndQueries-B-krYIfz.js";import"./copy-CPWU3JMS.js";import{F as s}from"./Footer-DBSBdmEP.js";import"./PageNotFound-BtEXsBVj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DINAeq89.js";import"./sys-enter-2-CB2kIbje.js";import"./alert-CG9JhWyD.js";import"./Link-Dg00UQRP.js";import"./index-JKJcUc-Y.js";import"./index-BYdF4q6P.js";import"./index-D08ymWvo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeatdApf.js";import"./addCustomCSSWithScoping-UxNP_GOA.js";import"./index-BWAGkxsQ.js";import"./index-CZorzsLp.js";import"./index-B61X8BMU.js";import"./index-CRrLaMaU.js";import"./Illustrations-DPWSckqd.js";import"./i18n-defaults-CFWtSmu6.js";function n(l){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks"}),`
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
`,e.jsx(s,{})]})}function P(l={}){const{wrapper:o}={...t(),...l.components};return o?e.jsx(o,{...l,children:e.jsx(n,{...l})}):n(l)}export{P as default};
