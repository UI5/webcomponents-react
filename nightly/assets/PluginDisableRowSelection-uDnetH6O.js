import{j as e}from"./iframe-DytFdpZ5.js";import{useMDXComponents as n}from"./index-ClxT7adU.js";import{I as r,F as s}from"./CommandsAndQueries-LDofsUzK.js";import{M as l,C as a}from"./blocks-CgPOjV91.js";import"./Tag-wRQS4rBi.js";import"./index-C-BQbcyx.js";import"./copy-HK9b5mhG.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-dqn4eYUx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrrPqcew.js";import"./index-BWneS7co.js";import"./index-DxeYPnJs.js";import"./Link-C5pcYLCj.js";import"./index-DcBMC71h.js";import"./index-BqVVjC2y.js";import"./index-BCsSmGRP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEqUMQtt.js";import"./addCustomCSSWithScoping-DZk4ZVKY.js";import"./index-BUF8RolX.js";import"./information-QfKl2uvK.js";import"./sys-enter-2-Dtt133YD.js";import"./alert-C-riVNTC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DiOVrNXv.js";import"./delete-CwCMe2lJ.js";import"./settings-C02FaBVl.js";import"./NoData-CIyKXGIu.js";import"./IllustratedMessage-i3hYdgC6.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-2XRDHoHl.js";import"./index-DOVXgZrj.js";import"./index-CNbeNrTd.js";import"./slim-arrow-down-DwpoKzJW.js";import"./Input-OPlbUKfy.js";import"./ResponsivePopoverCommon.css-B8i1Z4Ke.js";import"./ValueStateMessage.css-NEtnmyc2.js";import"./Suggestions.css-BPTnvCTk.js";import"./ListBoxItemGroupTemplate-DcxSGtmt.js";import"./ComboBoxItemGroup-f58ZgURw.js";import"./ListItemBaseTemplate-C3JeiHkK.js";import"./Token-MZi7lvV8.js";import"./ScrollEnablement-Co0kt5Hl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXFyw4BN.js";import"./ToggleButton-CpQHTAel.js";import"./SuggestionItem-ChyX7i02.js";import"./index-BCaEmiaT.js";import"./Option-DDqoKHKt.js";import"./index-RdLvHlSh.js";import"./SegmentedButton-B2HozEUv.js";import"./index-BjzJQlM-.js";import"./Select-D_v-B_Z3.js";import"./InvisibleMessage-D5JXdltE.js";import"./slim-arrow-down-DnRA-MRh.js";import"./index-YT8VK-Rh.js";import"./index-1y0Yb24g.js";import"./index-BXQwEVRd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DF8enc35.js";import"./group-2-BR7KJ0wq.js";import"./sort-descending-hDPKa1d_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Co3wqVTT.js";import"./utils-DRDvR6oY.js";import"./index-DgKfW966.js";import"./index-Br4jLSwx.js";import"./index-DzuzVEb4.js";import"./navigation-down-arrow-P9bJyD1t.js";import"./navigation-right-arrow-BdEYw-wX.js";import"./navigation-right-arrow-mvPQojYT.js";import"./useCurrentTheme-Dvjx0PbE.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bva0tWVh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CZGC8T2o.js";import"./paper-plane-BkwdG78Z.js";import"./index-HanQhb0I.js";import"./less-DiFuB8zb.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
