import{j as e}from"./iframe-DEgT_E8s.js";import{useMDXComponents as n}from"./index-BZRAiVGZ.js";import{I as r,F as s}from"./CommandsAndQueries-BnsxTdlD.js";import{M as l,C as a}from"./blocks-B_KstB4C.js";import"./Tag-DE605aSS.js";import"./index-YPzE27b5.js";import"./copy-CnDYhLIP.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bb_fYyk9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-q4TahdKC.js";import"./index-DdLyBjYX.js";import"./index-Dzkg0-9t.js";import"./Link-z1epMX3F.js";import"./index-DuT1R6mu.js";import"./index-5Z9enrbF.js";import"./index-C1jXIPsp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1yrXOFa.js";import"./addCustomCSSWithScoping-CGm4Cfs5.js";import"./index-BBLpbuxz.js";import"./information-r8cEHEup.js";import"./sys-enter-2-ChDTDdJ5.js";import"./alert-Dx6xYju9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CQIZa4KW.js";import"./delete-CqK8g_HQ.js";import"./settings-jSVHcypQ.js";import"./NoData-Dgjgajwh.js";import"./IllustratedMessage-WFxvN6sI.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-j_yzxESa.js";import"./index-C4ZbRrOu.js";import"./index-EzHa5_P2.js";import"./slim-arrow-down-B0naEDbF.js";import"./Input-CGH6t_eq.js";import"./ResponsivePopoverCommon.css-Dv84NKMT.js";import"./ValueStateMessage.css-CUqUPYSj.js";import"./Suggestions.css-KnKAVWRs.js";import"./ListBoxItemGroupTemplate-BmVR1VlV.js";import"./ComboBoxItemGroup-Eimfv27_.js";import"./ListItemBaseTemplate-HfAqkZ3H.js";import"./Token-C5MRXtTV.js";import"./ScrollEnablement-8BMeJMa0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-FLiQ-oOI.js";import"./ToggleButton-DMd9fH0Q.js";import"./SuggestionItem-DXBRTfNG.js";import"./index-BXlMwFJS.js";import"./Option-r28MJ-v0.js";import"./index-DAh5-UwY.js";import"./SegmentedButton-DuKNalzH.js";import"./index-7n2e9xhl.js";import"./Select-lIlAJjO9.js";import"./InvisibleMessage-DtVtDVKI.js";import"./slim-arrow-down-BCbYdXvq.js";import"./index-BekFaNX1.js";import"./index-C-dEXwCg.js";import"./index-PbfneB6M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DtNLDG1k.js";import"./group-2-TWAMSjz_.js";import"./sort-descending-gRLN52yg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5tA4rVe.js";import"./utils-XKst6eGz.js";import"./index-DEM0qvBE.js";import"./index-BHegFaBf.js";import"./index-D1vU14fq.js";import"./navigation-down-arrow-CH6c6eW9.js";import"./navigation-right-arrow-QbezwENh.js";import"./navigation-right-arrow-fC4XWoU4.js";import"./useCurrentTheme-Z5PW4JFt.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFb2J3Hx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CnhilVJw.js";import"./paper-plane-CwF1OIzX.js";import"./index-w9pnBzXO.js";import"./less-C43TjDId.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
