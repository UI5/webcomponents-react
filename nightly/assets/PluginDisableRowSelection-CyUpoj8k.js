import{j as e}from"./iframe-CaWUkniD.js";import{useMDXComponents as n}from"./index-DfLMUe36.js";import{I as r,F as s}from"./CommandsAndQueries-Bkeh__iN.js";import{M as l,C as a}from"./blocks-BMfWNTmT.js";import"./Tag-CqIFc9Gy.js";import"./index-B-q2cOJd.js";import"./copy-CqMAivUp.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-GUBWaz4r.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tK2knsWN.js";import"./index-WiTork8k.js";import"./index-dFuotq6J.js";import"./Link-D_-jRuCf.js";import"./index-ChWdN6oy.js";import"./index-Bw4kzKrM.js";import"./index-C4konRse.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2YWTQyV.js";import"./addCustomCSSWithScoping-DbaRAaG9.js";import"./index-DN8rN30Z.js";import"./information-D2K3Dl_P.js";import"./sys-enter-2-CcH0mjP8.js";import"./alert-CyfuNqtR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BNLMWyGP.js";import"./delete-DJycwJF9.js";import"./settings-D0DUxEmW.js";import"./NoData-BQxtA4T5.js";import"./IllustratedMessage-9XpGkzs2.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-V9izGDFT.js";import"./index-z-EgR5pV.js";import"./index-BPujMNjp.js";import"./slim-arrow-down-CB7ij7Kf.js";import"./Input-BN2yOYjz.js";import"./ResponsivePopoverCommon.css-4Xg56gf5.js";import"./ValueStateMessage.css-BIWamRUp.js";import"./Suggestions.css-DWWZcteF.js";import"./ListBoxItemGroupTemplate-BVaZKClQ.js";import"./ComboBoxItemGroup-Bqkr7cfP.js";import"./ListItemBaseTemplate-B3Kokzka.js";import"./Token-BnxjjGQW.js";import"./ScrollEnablement-C2wBh3eU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKc5fhLO.js";import"./ToggleButton-TkWtjD4U.js";import"./SuggestionItem-CptvwYkF.js";import"./index-MXkAGYYf.js";import"./Option-BNo4kTf7.js";import"./index-C9vxlEk3.js";import"./SegmentedButton-BEWmD6r8.js";import"./index-BgPgtd7C.js";import"./Select-BMQA0u2O.js";import"./InvisibleMessage-DosCuqjU.js";import"./slim-arrow-down-vFoZRNj4.js";import"./index-C_KCvI3u.js";import"./index-l4j-qO6K.js";import"./index-DVZys7-W.js";import"./index-NObIppjX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-qhMCcofp.js";import"./group-2-CIA_20_o.js";import"./sort-descending-Cis9FyCm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlLi_Ygh.js";import"./utils--eOsPXAp.js";import"./index-B4567yCp.js";import"./index-h4R6a7CP.js";import"./index-D5Irx0vg.js";import"./navigation-down-arrow-C-jc4BDF.js";import"./navigation-right-arrow-BUkZPDn1.js";import"./navigation-right-arrow-C4gLCsO1.js";import"./useCurrentTheme-D0Vszlbo.js";import"./index-9DL7nPRF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-dBQdTW19.js";import"./paper-plane-DIR6AIqV.js";import"./index-D0Vb1Rdi.js";import"./less-CmPnBj1b.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
