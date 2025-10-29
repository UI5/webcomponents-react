import{j as e}from"./iframe-BY1BFtoq.js";import{useMDXComponents as n}from"./index-BJX8o_PY.js";import{I as r,F as s}from"./CommandsAndQueries-LexJCY9y.js";import{M as l,C as a}from"./blocks-Bfc9ghDe.js";import"./Tag-DpT3Xyfk.js";import"./index-DoP9OXws.js";import"./copy-BobpDbK0.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BJgxOLZH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cb7WjzHE.js";import"./index-odRykF4_.js";import"./index-CRXctDPP.js";import"./Link-CaG5MpgS.js";import"./index-B41LOkRR.js";import"./index-DSc6dsYM.js";import"./index-Dk5-ak7N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKdRFMC3.js";import"./addCustomCSSWithScoping-BhZcrUID.js";import"./index-7DiuorJD.js";import"./information-B4R2spf7.js";import"./sys-enter-2-HrsNxE-9.js";import"./alert-Dq9SF84g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCCC4ur2.js";import"./delete-D8zrN_sA.js";import"./settings-Bdr665rb.js";import"./NoData-BRqgG7K8.js";import"./IllustratedMessage-DPqumtU-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-Cyq1-ihj.js";import"./index-_HCPSvgc.js";import"./index-CRmM9ezH.js";import"./slim-arrow-down-DtYB0pd9.js";import"./Input-bf8JCO1U.js";import"./ResponsivePopoverCommon.css-BhNXWsd2.js";import"./ValueStateMessage.css-Dg1p_wIG.js";import"./Suggestions.css-S4z4vAmo.js";import"./ListBoxItemGroupTemplate-BHHW-U5N.js";import"./ComboBoxItemGroup-CWH9BsDg.js";import"./ListItemBaseTemplate-CTqAs3uy.js";import"./Token-q-g5A3-L.js";import"./ScrollEnablement-B_wAj3Qd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlebLaAt.js";import"./ToggleButton-CmeP7kkP.js";import"./SuggestionItem-C1WN_sCo.js";import"./index-DLBeBpmo.js";import"./Option-BbXwN-l4.js";import"./index-CfVsgWHp.js";import"./SegmentedButton-C2wGr84m.js";import"./index-Dqcyxmrt.js";import"./Select-CQ6YhMiH.js";import"./InvisibleMessage-Cm96dHRB.js";import"./slim-arrow-down-C6xEaE6E.js";import"./index-OWO7rarX.js";import"./index-Bv46zhG_.js";import"./index-BS9ow689.js";import"./IconDesign-DXd8PPVF.js";import"./filter-GHJB05Hr.js";import"./group-2-BSwplwhU.js";import"./sort-descending-DzpsEe-A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dj0e6j8A.js";import"./utils-BVTfHtc_.js";import"./index-DQ68OsPL.js";import"./index-BrYWbXY_.js";import"./index-Cji0Ug7a.js";import"./navigation-down-arrow-DoOrewxd.js";import"./navigation-right-arrow-D-L2cheh.js";import"./navigation-right-arrow-CaZt-wfz.js";import"./useCurrentTheme-3PuwnM7C.js";import"./IndicationColor-DVw-fSM_.js";import"./index-oc63bMUJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsxCqakm.js";import"./paper-plane-BTYyQoCV.js";import"./index-DwP49iU-.js";import"./less-mTodNhHV.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
