import{j as e}from"./iframe-Ded5Mxh2.js";import{useMDXComponents as n}from"./index-CBfl9quq.js";import{I as r}from"./CommandsAndQueries-Ddo3tZ3K.js";import{M as s,C as l}from"./blocks-wt3pPbD-.js";import"./Tag-CDOQSrMR.js";import"./index-DFifKHPS.js";import"./copy-IKAWbId8.js";import{F as a}from"./Footer-1OmcbI64.js";import"./PageNotFound-CXW0ieku.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BzxY5k0R.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DSsFOfLn.js";import"./index-jHFtLiCf.js";import"./index-BmNOE6G0.js";import"./index-BfPsTBbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DHMdvhLY.js";import"./addCustomCSSWithScoping-CBqV9zN1.js";import"./index-CU0yEW5I.js";import"./index-BiAFWhEK.js";import"./index-Cmea41Uz.js";import"./information-YHPlo4lO.js";import"./sys-enter-2-C0FqqFCv.js";import"./alert-K2R8mcWk.js";import"./index-DNd61viN.js";import"./Illustrations-Btxulb8H.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BecE1XJn.js";import"./delete-D0fZzTI7.js";import"./settings-C7B_j-Y8.js";import"./NoData-BrFbWOpJ.js";import"./NoFilterResults-DtaXtqI5.js";import"./index-b0uBMMNt.js";import"./IllustratedMessage-CuBg-vsE.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DH-ja5wq.js";import"./Input-CI6efGcd.js";import"./ResponsivePopoverCommon.css-_OfTkZKW.js";import"./ValueStateMessage.css-DG6SMCv6.js";import"./Suggestions.css-C-q057v5.js";import"./ListBoxItemGroupTemplate-Cfx7Lf4g.js";import"./ComboBoxItemGroup-BIHv5yMY.js";import"./ListItemBaseTemplate-DbmRhLb7.js";import"./Token-MKsNkpqX.js";import"./ScrollEnablement-DENm7iV6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Buphkil0.js";import"./ToggleButton-D3QrfdJw.js";import"./multiselect-all-DLY9p4ls.js";import"./SuggestionItem-Aa3qI1bT.js";import"./index-DiBTKK6u.js";import"./Option-DQV_eQib.js";import"./index-DwPUuk8S.js";import"./SegmentedButton-DuL9bfd4.js";import"./index-BvcEfRdb.js";import"./Select-Dv1RKQLj.js";import"./InvisibleMessage-B1Swz3mZ.js";import"./index-DyOFSSg-.js";import"./index-A2a3Zx38.js";import"./index-DfqEQVv9.js";import"./index-kph-pUw5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJyVYiUy.js";import"./group-2-BCj0Bybz.js";import"./sort-descending-CpxrLLEz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-9DAmB-YI.js";import"./utils-C_Aw_RzH.js";import"./index-Bh6yOWs7.js";import"./index-CkB06Bxg.js";import"./index-4J07KdAi.js";import"./navigation-down-arrow-BnonnUuZ.js";import"./navigation-right-arrow-C1kC_5OC.js";import"./navigation-right-arrow-aXOPQJFG.js";import"./useCurrentTheme-rsX3oT80.js";import"./index-CZHJXIH7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-UbDyFkqU.js";import"./paper-plane-BqlJm9UU.js";import"./index-BwAv9f_2.js";import"./less-Bo9zRhMB.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
