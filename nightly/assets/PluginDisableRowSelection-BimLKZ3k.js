import{j as e}from"./iframe-9L5DfdAL.js";import{useMDXComponents as n}from"./index-BFOQlGJl.js";import{I as r,F as s}from"./CommandsAndQueries-BK-K5RhD.js";import{M as l,C as a}from"./blocks-BhviKO8q.js";import"./Tag-Bc-yWu1Y.js";import"./index-BfSNMryQ.js";import"./copy-B4o5kCyp.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D3bL7dyl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4W78R8l.js";import"./index-DCrnunZ9.js";import"./index-Dt7xhFDV.js";import"./Link-o-RCe_HP.js";import"./index-CCxjFqbl.js";import"./index-CFjv4LxR.js";import"./index-DNulmfCG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-d02CNbEj.js";import"./addCustomCSSWithScoping-BavaT7N2.js";import"./index-BKv2oNTW.js";import"./information-E0dtjqMz.js";import"./sys-enter-2-CWAnp9j1.js";import"./alert-krPLRZgR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-XNM9FnGm.js";import"./delete-JR2MZRfb.js";import"./settings-DxBIqKBm.js";import"./NoData-3ZcUB5Ct.js";import"./IllustratedMessage-BEdS4qmU.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C91Oik-m.js";import"./index-LeKCpS7q.js";import"./index-sAVTaYY-.js";import"./slim-arrow-down-DMCTeiC5.js";import"./Input-B_a4lk-J.js";import"./ResponsivePopoverCommon.css-DR2BAcH9.js";import"./ValueStateMessage.css-BbD6Vd04.js";import"./Suggestions.css-DgOg4FzN.js";import"./ListBoxItemGroupTemplate-QimfEu9Q.js";import"./ComboBoxItemGroup-D4VMzcBc.js";import"./ListItemBaseTemplate-CAeeqms4.js";import"./Token-sTVAKlsR.js";import"./ScrollEnablement-D6SL2uwM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-G_TCf98J.js";import"./ToggleButton-5xA1-SjB.js";import"./SuggestionItem-66Xrv75f.js";import"./index-DGOHxSTi.js";import"./Option-B5eqm6lt.js";import"./index-DD-YT-Yv.js";import"./SegmentedButton-C06xcamZ.js";import"./index-BSqaxHhQ.js";import"./Select-Bf3hq0iL.js";import"./InvisibleMessage-BFzkQW2o.js";import"./slim-arrow-down-CVQcjJXq.js";import"./index-BR-9eyJZ.js";import"./index-BNu0C3GX.js";import"./index-BHRZrxSX.js";import"./index-DFno4m6x.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DZHCNsIg.js";import"./group-2-BksPNJTz.js";import"./sort-descending-vwUdYYI9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B1B6dX5C.js";import"./utils--MAnWLXj.js";import"./index-DNleTpkO.js";import"./index-DiSDR8FZ.js";import"./index-8UpyXoAN.js";import"./navigation-down-arrow-DejdbZn2.js";import"./navigation-right-arrow-D8pf5Giz.js";import"./navigation-right-arrow-Dr_s8HRL.js";import"./useCurrentTheme-zSdIFJxn.js";import"./index-CjDsuZ3a.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZKijWM3.js";import"./paper-plane-BmU2Eq9f.js";import"./index-OapWeUnp.js";import"./less-Coam-0fQ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(a,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(s,{})]})}function Xe(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
