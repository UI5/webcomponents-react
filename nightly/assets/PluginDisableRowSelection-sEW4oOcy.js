import{j as e}from"./iframe-DmoM9f-3.js";import{useMDXComponents as n}from"./index-B20arXE0.js";import{I as r,F as s}from"./CommandsAndQueries-D46yw8vq.js";import{M as l,C as a}from"./blocks-BpV1oLoN.js";import"./Tag-C5kFbKbl.js";import"./index-BLNEyCKE.js";import"./copy-CLLjPrKq.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BA-x-C0f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BsxZ4Cqo.js";import"./index-C9RFs9lp.js";import"./index-CwkZexmy.js";import"./Link-CJAlKdXH.js";import"./index-BS6TqzQW.js";import"./index-DEJMdS-B.js";import"./index--5fdhH7F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvwMzl7A.js";import"./addCustomCSSWithScoping-CrnVfoLT.js";import"./index-D10NIdcs.js";import"./information-DFrNJXON.js";import"./sys-enter-2-97edjggS.js";import"./alert-DFs18VX5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bxmd5KNC.js";import"./delete-BafmMaQL.js";import"./settings-DABExvul.js";import"./NoData-BgI5Fxj4.js";import"./IllustratedMessage-jY-A97pw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D-fU_rFE.js";import"./index-DKnHiKv6.js";import"./index-C5zCfksZ.js";import"./slim-arrow-down-D9YsUWAc.js";import"./Input-YzFTUt5T.js";import"./ResponsivePopoverCommon.css-CYbIQSV_.js";import"./ValueStateMessage.css-Bt2Hz2Bm.js";import"./Suggestions.css-CF_t5b_V.js";import"./ListBoxItemGroupTemplate-CO5gMWQe.js";import"./ComboBoxItemGroup-CUCxyYDG.js";import"./ListItemBaseTemplate-CnPU8rrX.js";import"./Token-ERY8FHBV.js";import"./ScrollEnablement-C3qwFx38.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BJDVbUng.js";import"./ToggleButton-DEiEgDU3.js";import"./SuggestionItem-B2lniP2C.js";import"./index-CVEhOAGU.js";import"./Option-Bl_cRkCF.js";import"./index-D_A_mIMd.js";import"./SegmentedButton-BJxy3Jl0.js";import"./index-Bc77BXWZ.js";import"./Select-CuAVIuQe.js";import"./InvisibleMessage-DxxG7hrg.js";import"./slim-arrow-down-CR7ZcCgm.js";import"./index-CmHMrHW6.js";import"./index-lVw2qlav.js";import"./index-C3g1EMi_.js";import"./index-hwt2sM8N.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dm4NGm5T.js";import"./group-2-BKpf1dk-.js";import"./sort-descending-BLlJfs1C.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CfmXpjSG.js";import"./utils-CX26tpMm.js";import"./index-C5hbXSHM.js";import"./index-4PnBH_j5.js";import"./index-CCKJVryI.js";import"./navigation-down-arrow-raxqbgPM.js";import"./navigation-right-arrow-j_ofrPu8.js";import"./navigation-right-arrow-Bc7TH_0C.js";import"./useCurrentTheme-xHMJsLTO.js";import"./index-CQscq9AO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bl9d5JMP.js";import"./paper-plane-D5XrZk42.js";import"./index-CF4Usvtu.js";import"./less-BemCrw5W.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
