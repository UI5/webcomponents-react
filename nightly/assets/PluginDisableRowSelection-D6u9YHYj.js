import{j as e}from"./iframe-C4uJ0-S9.js";import{useMDXComponents as n}from"./index-7yLcmjFP.js";import{I as r,F as s}from"./CommandsAndQueries-B5y1yjIv.js";import{M as l,C as a}from"./blocks-CBo7THUN.js";import"./Tag-BnlqX_yt.js";import"./index-qq5TSXaV.js";import"./copy-CcXkheL2.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CAle5qj4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cqxv-6mm.js";import"./index-Cxz2391_.js";import"./index-KgBIbLv3.js";import"./Link-BtGKi5yG.js";import"./index-DOaerJgo.js";import"./index-ccsE6YRa.js";import"./index-DWkRZCu2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS9Hrz5j.js";import"./addCustomCSSWithScoping-CUwa-fZt.js";import"./index-BCADQjVB.js";import"./information-CGc2Gyu5.js";import"./sys-enter-2-8QAf9lpT.js";import"./alert-CoEJOo1j.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vDDRYwk3.js";import"./delete-BHPiQy8C.js";import"./settings-BeJNJe9f.js";import"./NoData-DumUXixA.js";import"./IllustratedMessage-DDYbAdFt.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-C4A8f3WL.js";import"./index-BY7QBrHg.js";import"./index-DPlPssjD.js";import"./slim-arrow-down-Y4c6YvG2.js";import"./Input-YHM25DhV.js";import"./ResponsivePopoverCommon.css-LID13WBa.js";import"./ValueStateMessage.css-DQQ-VE9Z.js";import"./Suggestions.css-eTzTaAph.js";import"./ListBoxItemGroupTemplate-lxd0hXbv.js";import"./ComboBoxItemGroup-BghMlL1f.js";import"./ListItemBaseTemplate-DUdMr_EH.js";import"./Token-OLXA8lD0.js";import"./ScrollEnablement-SGqJH1Lr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdNdTe1m.js";import"./ToggleButton-DYz4NtFX.js";import"./SuggestionItem-BddQBPYx.js";import"./index-D1d04w3W.js";import"./Option-v8zhZtfK.js";import"./index-DhKFm58k.js";import"./SegmentedButton-s1zIuXD0.js";import"./index-COE4TykW.js";import"./Select-CuF6Vj0b.js";import"./InvisibleMessage-LTfrv4dT.js";import"./slim-arrow-down-DYL641WE.js";import"./index-DGw9cILd.js";import"./index-CnNCBOjb.js";import"./index-CjnSo5ff.js";import"./IconDesign-DXd8PPVF.js";import"./filter-_rO-u-6A.js";import"./group-2-Bc7XIkR-.js";import"./sort-descending-CkdP0ki-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DvL1DyYS.js";import"./utils-D_GsNQst.js";import"./index-BE-7xLBy.js";import"./index-CtMXypae.js";import"./index-tzbUIwBJ.js";import"./navigation-down-arrow-DVAbjQ7x.js";import"./navigation-right-arrow-BVMX59iQ.js";import"./navigation-right-arrow-jw1yzYIV.js";import"./useCurrentTheme-Bd8z3rm-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CGCN7ekK.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DASzHde-.js";import"./paper-plane-DvYo8HUm.js";import"./index-D-YebQdo.js";import"./less-BFgfWxB6.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
