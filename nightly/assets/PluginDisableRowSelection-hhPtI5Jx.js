import{j as e}from"./iframe-COnm-5Wq.js";import{useMDXComponents as n}from"./index-BScb0EKa.js";import{I as r,F as s}from"./CommandsAndQueries-fIm6tI_s.js";import{M as l,C as a}from"./blocks-DdnCkDeP.js";import"./Tag-B6PukD9x.js";import"./index-DuYLDSkg.js";import"./copy-qxwrkOPO.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BPXkUY3a.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Be7TM_X2.js";import"./index-P97YIdW0.js";import"./index-nBIeIwBJ.js";import"./Link-HYZaoUUQ.js";import"./index-B7Tpi00A.js";import"./index-AzkmjRNO.js";import"./index-D0jCTq5s.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BgIs3PmD.js";import"./addCustomCSSWithScoping-6qkiGAQG.js";import"./index-CEwTdt5x.js";import"./information-B-WRmTFj.js";import"./sys-enter-2-CoP1Serd.js";import"./alert-CyV5UnQC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZIK-Rls1.js";import"./delete-CstNP39o.js";import"./settings-B6aW8T1K.js";import"./NoData-C_Tt_a6V.js";import"./IllustratedMessage-D5qW_4Mw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BjMAgFLJ.js";import"./index-CZs2DsiV.js";import"./index-D0dk6VOY.js";import"./slim-arrow-down-3pnIuBHq.js";import"./Input-IFtsbt_3.js";import"./ResponsivePopoverCommon.css-CcP_WrIC.js";import"./ValueStateMessage.css-BFPsrOD8.js";import"./Suggestions.css-DD-tyscS.js";import"./ListBoxItemGroupTemplate-s02oSqvp.js";import"./ComboBoxItemGroup-BRC6L9Sm.js";import"./ListItemBaseTemplate-9M8GkXzY.js";import"./Token-DosFgNlL.js";import"./ScrollEnablement-DxmmW8DX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BhUgq0GU.js";import"./ToggleButton-Dgsm-QJP.js";import"./SuggestionItem-CJz2OlH9.js";import"./index-v8SH84Mn.js";import"./Option-C0Ypih71.js";import"./index-BNluZkA_.js";import"./SegmentedButton-Cl6x6Obn.js";import"./index-BpjRrguz.js";import"./Select-YsyZoFbn.js";import"./InvisibleMessage-B1Y0A4_S.js";import"./slim-arrow-down-DL9BpCuU.js";import"./index-CEB-ApWT.js";import"./index-D25d4E5j.js";import"./index-BBBvNHMK.js";import"./index-DZ_u1ZQX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D8SXkPNK.js";import"./group-2-CmBZ8zLm.js";import"./sort-descending-DqYeqtsl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Du1BrkM7.js";import"./utils-CotoRCsU.js";import"./index-Db5QhTIJ.js";import"./index-CDNkck04.js";import"./index-B5Rbqc3j.js";import"./navigation-down-arrow-BZPJPqDn.js";import"./navigation-right-arrow-BHQhwyzy.js";import"./navigation-right-arrow-B18OD9Dt.js";import"./useCurrentTheme-BcF7vgZS.js";import"./index-BmHYBzvc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CKV0TO4b.js";import"./paper-plane-B9f3FIfR.js";import"./index-BDppF75s.js";import"./less-DNrWl_5o.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
