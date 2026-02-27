import{j as e}from"./iframe-DAxVciiO.js";import{useMDXComponents as n}from"./index-h_8BIj8E.js";import{I as r,F as s}from"./CommandsAndQueries-DAf-gTsq.js";import{M as l,C as a}from"./blocks-V6tY60BP.js";import"./Tag-CfpPKB5J.js";import"./index-Cl51mnxs.js";import"./copy-DS8F9wTV.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-p9nnaNLV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQeQ_3Br.js";import"./index-BTWHfyOb.js";import"./index-CXz3G2II.js";import"./Link-CPXkUhXc.js";import"./index-DtbiWkK2.js";import"./index-C2J6ydOt.js";import"./index-45VXzBs0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqjBRadn.js";import"./addCustomCSSWithScoping-B-5Zxa-U.js";import"./index-x-HMM4OA.js";import"./information-BJmehL1Z.js";import"./sys-enter-2-CCej0FVR.js";import"./alert-DT2E8uxg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CFff7xit.js";import"./delete-DbGDhc3E.js";import"./settings-BDyusSsU.js";import"./NoData-XqdFgBoh.js";import"./IllustratedMessage-Bp6_xgPq.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CHKD9vVt.js";import"./index-BkJQaYIU.js";import"./index-PApUnrQh.js";import"./slim-arrow-down-DOx_O52b.js";import"./Input-BFNvfe1M.js";import"./ResponsivePopoverCommon.css-DUa--h-C.js";import"./ValueStateMessage.css-B-JXAMRh.js";import"./Suggestions.css-l1R1Q3Wi.js";import"./ListBoxItemGroupTemplate-CKUg1mHM.js";import"./ComboBoxItemGroup-DaYPy346.js";import"./ListItemBaseTemplate-CpDt3VEY.js";import"./Token-BIrB-fXe.js";import"./ScrollEnablement-IaFlv5sG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DHZqKCWt.js";import"./ToggleButton-BXfnrvIj.js";import"./SuggestionItem-PiaokgXw.js";import"./index-BetiTQM5.js";import"./Option-BtMT1Oqj.js";import"./index-O9Cki_UE.js";import"./SegmentedButton-CsbFykOo.js";import"./index-kd3IkrmG.js";import"./Select-DQvn5TjZ.js";import"./InvisibleMessage-CJvoI51j.js";import"./slim-arrow-down-DI99uMIa.js";import"./index-DK-JaRrB.js";import"./index-LLkC_BTv.js";import"./index-B10fvOaR.js";import"./index-Bm6hAg8x.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTq-0MlA.js";import"./group-2-dlAvKLPk.js";import"./sort-descending-DS-dcpyJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_vvkfygM.js";import"./utils-BF_zpjgJ.js";import"./index-B-11WzHg.js";import"./index-Dd31BDFj.js";import"./index-D_srWwSh.js";import"./navigation-down-arrow-HO4UVtgk.js";import"./navigation-right-arrow-BINfOxqh.js";import"./navigation-right-arrow-DRlFirFz.js";import"./useCurrentTheme-C2GdyHiC.js";import"./index-CBxPLiTj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ca2uhQ15.js";import"./paper-plane-D7cPCcgX.js";import"./index-DocLDr0y.js";import"./less-CqbE9adU.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
