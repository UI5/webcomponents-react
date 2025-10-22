import{j as e}from"./iframe-D1Ed_P25.js";import{useMDXComponents as n}from"./index-BFLewEmr.js";import{I as r,F as s}from"./CommandsAndQueries-DkK8PXt_.js";import{M as l,C as a}from"./blocks-D0qmmV7H.js";import"./Tag-c5FmtIVB.js";import"./index-CUd6ir2B.js";import"./copy-D1Lui3xc.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DMCM_6uC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyMezxCx.js";import"./index-BiMr4Loi.js";import"./index-BiKUdEyp.js";import"./Link-Bd6EkD5P.js";import"./index-F4shrftk.js";import"./index-RNnJdIaH.js";import"./index-ClmEJuF6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJfOjK1K.js";import"./addCustomCSSWithScoping-DIxW6xjd.js";import"./index-RMrg5o5S.js";import"./information-CLHcsZFK.js";import"./sys-enter-2-uCDsFGT8.js";import"./alert-DcriM5I3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-EBNozTnx.js";import"./delete-Dk0J6CEz.js";import"./settings-D_OQdQr8.js";import"./NoData-BPkK9WTx.js";import"./IllustratedMessage-C8_Tcp5E.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-tEUMgFSt.js";import"./index-CtDslHHK.js";import"./index-CApBczn9.js";import"./slim-arrow-down-TNdCGHP4.js";import"./Input-5rI7b6hj.js";import"./ResponsivePopoverCommon.css-DU4YlHAZ.js";import"./ValueStateMessage.css-CpZa25G1.js";import"./Suggestions.css-3H0-Mr0d.js";import"./ListBoxItemGroupTemplate-CLzBP0c4.js";import"./ComboBoxItemGroup-ApNNq_Wu.js";import"./ListItemBaseTemplate-BkyyzXaB.js";import"./Token-GhjVhKgK.js";import"./ScrollEnablement-DPfv31gz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CNwMXV6a.js";import"./ToggleButton-BS5T7rCY.js";import"./SuggestionItem-DoeL3bWo.js";import"./index-BNdfddNi.js";import"./Option-CyUNWJFn.js";import"./index-CldnWdDQ.js";import"./SegmentedButton-DC3FvJhw.js";import"./index-BUEI2z_e.js";import"./Select-BMILMPUT.js";import"./InvisibleMessage-p9R4CYhZ.js";import"./slim-arrow-down-BaGZSBDW.js";import"./index-bV7fjiFL.js";import"./index-D2IOf4UP.js";import"./index-Df7H6xNj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYgtls1N.js";import"./group-2-B_pp8cML.js";import"./sort-descending-CW9bvIgk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BrqVegQT.js";import"./utils-DLeru89e.js";import"./index-BGXOG_IF.js";import"./index-B31uJoco.js";import"./index-gdwBT8aW.js";import"./navigation-down-arrow-DZXVk8IE.js";import"./navigation-right-arrow-C_fhDzfE.js";import"./navigation-right-arrow-Dqne7Ju2.js";import"./useCurrentTheme-BqKoaCVT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DOrMKtSR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DSdrd2Bt.js";import"./paper-plane-C6yqeebk.js";import"./index-DyNYfJ6H.js";import"./less-wxSG9IpH.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
