import{j as e}from"./iframe-DjjZnZd-.js";import{useMDXComponents as n}from"./index-CHlimz1C.js";import{I as r,F as s}from"./CommandsAndQueries-WOCJDSHC.js";import{M as l,C as a}from"./blocks-BmkOoUGB.js";import"./Tag-CUGM_Neu.js";import"./index-CA-PQGxD.js";import"./copy-ZK04gjjU.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bifb3c2A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CT-jhGw4.js";import"./index-BgVmtdEP.js";import"./index-BFZ4A4pM.js";import"./Link-DOn3kiwy.js";import"./index-DmOXd_eL.js";import"./index-nsJY5Xz1.js";import"./index-BB6l50am.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B12gaSwN.js";import"./addCustomCSSWithScoping-vHMhzzpD.js";import"./index-BcQoqGu9.js";import"./information-DMdo7dcL.js";import"./sys-enter-2-CptPzh8p.js";import"./alert-CrXk_arY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vqAtxyOw.js";import"./delete-Bebt7tCf.js";import"./settings-uRQQ-qnc.js";import"./NoData-DF1OdlTc.js";import"./IllustratedMessage-D_G1HSBE.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BmB2bMcc.js";import"./index-CM7JCb8T.js";import"./index-DvsJxwXk.js";import"./slim-arrow-down-CxXp2snF.js";import"./Input-B-umR_e1.js";import"./ResponsivePopoverCommon.css-C4iintSn.js";import"./ValueStateMessage.css-Cunvc68_.js";import"./Suggestions.css-Ci8_31Vi.js";import"./ListBoxItemGroupTemplate-GVKfLp8U.js";import"./ComboBoxItemGroup-CQl8BqG8.js";import"./ListItemBaseTemplate-6SXMeQ_0.js";import"./Token-CKE3PZz5.js";import"./ScrollEnablement-C0m6jxeW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRQF6RVv.js";import"./ToggleButton-B90-JE9y.js";import"./SuggestionItem-DW58jthD.js";import"./index-DmUR5SWR.js";import"./Option-DqRKlcDR.js";import"./index-CH77s4oW.js";import"./SegmentedButton-ChMyKVb2.js";import"./index-BkRDr5FS.js";import"./Select-5vzl-izW.js";import"./InvisibleMessage-8UwgTYD7.js";import"./slim-arrow-down-DPNABw5m.js";import"./index-Cl5F4XUs.js";import"./index-CbGzdtcY.js";import"./index-BRl60Xfr.js";import"./index-Beu0nm3Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMkv1rya.js";import"./group-2-CoGriti5.js";import"./sort-descending-DD-b124P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8m0ILQH8.js";import"./utils-BXT1KgTI.js";import"./index-Dra2atL0.js";import"./index-BZLP_aSQ.js";import"./index-ntFKxsdS.js";import"./navigation-down-arrow-augm2Glo.js";import"./navigation-right-arrow-CJ9-VHOj.js";import"./navigation-right-arrow-CXx-Foq7.js";import"./useCurrentTheme-BtKqULF1.js";import"./index-C9h2pwj1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sDVY4Y6h.js";import"./paper-plane-BKN_YByQ.js";import"./index-B7Qlr8h8.js";import"./less-wFiAvfcX.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
