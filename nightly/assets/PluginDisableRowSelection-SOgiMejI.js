import{j as e}from"./iframe-gZNO6M5z.js";import{useMDXComponents as n}from"./index-C9S1zRdY.js";import{I as r,F as s}from"./CommandsAndQueries-B3SYrvAS.js";import{M as l,C as a}from"./blocks-bGe4ZsEp.js";import"./Tag-B4G2Y0SL.js";import"./index-27nnQHPg.js";import"./copy-BVrBwFXj.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D4OPLrru.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BF59Vd9o.js";import"./index-B0r-mBm2.js";import"./index-CaC9RK_F.js";import"./Link-Vq1QqGjH.js";import"./index-DGMrxJej.js";import"./index-Cp6HJT54.js";import"./index-BefwTBAQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CU06ey2h.js";import"./addCustomCSSWithScoping-BZ00kVb8.js";import"./index-CDlXZiAa.js";import"./information-DLCOf7nz.js";import"./sys-enter-2-BCk8zcst.js";import"./alert-Dzej_rV2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-QLkuJgqV.js";import"./delete-DkRHwfhX.js";import"./settings-BR8WCJ7w.js";import"./NoData--p7oPRRw.js";import"./IllustratedMessage-SXsx_nbl.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-qOumx_JC.js";import"./index-DPBbU2lN.js";import"./index-kBG2DFKE.js";import"./slim-arrow-down-Blcrq2dE.js";import"./Input-H67wDs5U.js";import"./ResponsivePopoverCommon.css-CdbcNfyO.js";import"./ValueStateMessage.css-Df8ATcbI.js";import"./Suggestions.css-C1kePIyx.js";import"./ListBoxItemGroupTemplate-C2UHPyPQ.js";import"./ComboBoxItemGroup-C3gDpf9b.js";import"./ListItemBaseTemplate-DvW_-iKE.js";import"./Token-D5EKe7A3.js";import"./ScrollEnablement-BpD4fQsi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cy6aCxAY.js";import"./ToggleButton-B5fjsmfD.js";import"./SuggestionItem-B_eDO34G.js";import"./index-B2XaTQ_o.js";import"./Option-f-tZff5I.js";import"./index-Bz429r4C.js";import"./SegmentedButton-DB_QzLE0.js";import"./index-Bl3jRPoy.js";import"./Select-DJXcsVgZ.js";import"./InvisibleMessage-Bl5nX4CD.js";import"./slim-arrow-down-CFi1WRSY.js";import"./index-62ip1J2j.js";import"./index-Drr4PQ9c.js";import"./index-CeCfeKbh.js";import"./index-EBcPMq50.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DyU52bwC.js";import"./group-2-DSB90i0B.js";import"./sort-descending-Cg6qE11j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BbtWKEmY.js";import"./utils-C3-oD3GX.js";import"./index-WCsQ6Ebz.js";import"./index-Bf1uvNUV.js";import"./index-D9BCXCjp.js";import"./navigation-down-arrow-CAmt6qbj.js";import"./navigation-right-arrow-DN-jFYY-.js";import"./navigation-right-arrow-CGQTXt6f.js";import"./useCurrentTheme-D-HaTMhl.js";import"./index-DwEdael2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B5FXU3B0.js";import"./paper-plane-DzKltC-y.js";import"./index-sEulsnhk.js";import"./less-Dl2m-ucU.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
