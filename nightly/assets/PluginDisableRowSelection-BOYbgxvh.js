import{j as e}from"./iframe-Ba5ZQio8.js";import{useMDXComponents as n}from"./index-rp1O3cN1.js";import{I as r}from"./CommandsAndQueries-Bbpx9ls1.js";import{M as s,C as l}from"./blocks-CO8PFwMs.js";import"./Tag-U7nVfWIj.js";import"./index-P8tdEHaz.js";import"./copy-B4CpXR8v.js";import{F as a}from"./Footer-C-jjr1fr.js";import"./PageNotFound-lWhn0Z7P.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CH2vUjVf.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BJPm0pTR.js";import"./index-CFpPfuDn.js";import"./index-D3zw9ZHH.js";import"./index-R7gtGlkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCyzTRrI.js";import"./addCustomCSSWithScoping-CUMS_4o0.js";import"./index-CQozdAin.js";import"./index-B2oTG2Uf.js";import"./index-DqQH8U51.js";import"./information-CmnD_cte.js";import"./sys-enter-2-a4cBCFrc.js";import"./alert-Zv2opSBs.js";import"./index-DW1zzZuq.js";import"./Illustrations-wmNg3JaM.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C6sFKivB.js";import"./delete-DpWoY4bq.js";import"./settings-2UoQFdLZ.js";import"./NoData-C27xDPCX.js";import"./NoFilterResults-BtdJqq3e.js";import"./index-CwYz5hj_.js";import"./IllustratedMessage-C8ShJTV8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-dZHfBDTm.js";import"./Input-DbuY-azO.js";import"./ResponsivePopoverCommon.css-Bx66l35z.js";import"./ValueStateMessage.css-Boe-nBHn.js";import"./Suggestions.css-DFdNzV6n.js";import"./ListBoxItemGroupTemplate-CWYgi82N.js";import"./ComboBoxItemGroup-CVco4pgy.js";import"./ListItemBaseTemplate-BwquVXRI.js";import"./Token-CMMQoehc.js";import"./ScrollEnablement-BrHNAnnn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Hwq3GH-8.js";import"./ToggleButton-By3KpJ3s.js";import"./multiselect-all-DAiXU-2t.js";import"./SuggestionItem-BPsWjU3E.js";import"./index-Bvh25QxP.js";import"./Option-qCFpPnNQ.js";import"./index-CMV_Yh7r.js";import"./SegmentedButton-4h52fUiV.js";import"./index-BdKH8mcH.js";import"./Select-BH5YNkkz.js";import"./InvisibleMessage-CV0WJIpw.js";import"./index-BpioeH42.js";import"./index-OMiO6QEU.js";import"./index-BdEsij6A.js";import"./index-DCLHA3aG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CvHE1b-Q.js";import"./group-2-JUxYdBxp.js";import"./sort-descending-BAVyXJMs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BoBNl2fW.js";import"./utils-BoIL1l7W.js";import"./index-DUksDTzt.js";import"./index-Bm8kf-zB.js";import"./index-Dvc5W7Lw.js";import"./navigation-down-arrow-CJVUiRV4.js";import"./navigation-right-arrow-C5ox3WV8.js";import"./navigation-right-arrow-BGQ1zxrV.js";import"./useCurrentTheme-Dl168NmZ.js";import"./index-B3SL5VMB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CIPw2XHC.js";import"./paper-plane-CvFEKYP7.js";import"./index-DidCFfMi.js";import"./less-DPv56Ll-.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
