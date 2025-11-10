import{j as e}from"./iframe-DQwRYUbX.js";import{useMDXComponents as n}from"./index-vjXmNDkF.js";import{I as r,F as s}from"./CommandsAndQueries-R5zgQe7_.js";import{M as l,C as a}from"./blocks-1vj7sSP-.js";import"./Tag-Bdxh15UZ.js";import"./index-BpYg0Kr8.js";import"./copy-f1OrbY2r.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DxmrzwBB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKyjFioH.js";import"./index-BFkPs8ZC.js";import"./index-CKWavmbi.js";import"./Link-CbfnLrLH.js";import"./index-PC8Kunji.js";import"./index-DPLN1GXU.js";import"./index-CcZnr9i8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bm5JhsBg.js";import"./addCustomCSSWithScoping-B4GQYg_M.js";import"./index-Brhb0SYT.js";import"./information-CU2Cyzgy.js";import"./sys-enter-2-BkaREG8L.js";import"./alert-BlLCWEro.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-uKpDdS3L.js";import"./delete-rnQJPOPy.js";import"./settings-BplO8nVC.js";import"./NoData-BudcZjcL.js";import"./IllustratedMessage-BDrkWOIJ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DMOQHPac.js";import"./index-BkwLtZth.js";import"./index-8rYUN_F9.js";import"./slim-arrow-down-C3zmYEnY.js";import"./Input-SpzJURTk.js";import"./ResponsivePopoverCommon.css-CkBrsDgT.js";import"./ValueStateMessage.css-PgRMx7qS.js";import"./Suggestions.css-CcojFhMW.js";import"./ListBoxItemGroupTemplate-BpQl_a-R.js";import"./ComboBoxItemGroup-CteEcdR1.js";import"./ListItemBaseTemplate-DPU_YRkw.js";import"./Token-Re46_rx8.js";import"./ScrollEnablement-DpgIweVK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cgm9Qe--.js";import"./ToggleButton-BaSVpxBV.js";import"./SuggestionItem-BX6mvv5E.js";import"./index-B1FFgBKL.js";import"./Option-DvL6van7.js";import"./index-BFXuzaYf.js";import"./SegmentedButton-BhmyYIax.js";import"./index-B0KukDf_.js";import"./Select-DsMXMd52.js";import"./InvisibleMessage-BxtAo5W7.js";import"./slim-arrow-down-DBZCUMdq.js";import"./index-CDIvwhbT.js";import"./index-DerlPBZF.js";import"./index-Ct1qWrRW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-wsvm96Md.js";import"./group-2-smWhv9vQ.js";import"./sort-descending-C26Eugr8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cgy9ImwA.js";import"./utils-CmLJbiVg.js";import"./index-C84cRBie.js";import"./index-C8IvOXFf.js";import"./index-BnWSur9b.js";import"./navigation-down-arrow-B5IuEH7K.js";import"./navigation-right-arrow-ClmouZCW.js";import"./navigation-right-arrow-DbNWGTXI.js";import"./useCurrentTheme-B0aKCv4_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CdDfKFMR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-19H7psJ7.js";import"./paper-plane-z49PxhFi.js";import"./index-B7Ag24YK.js";import"./less-BbgNbxOE.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
