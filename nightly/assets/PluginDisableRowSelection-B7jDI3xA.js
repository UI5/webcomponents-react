import{j as e}from"./iframe-5IjhfTrO.js";import{useMDXComponents as n}from"./index-DX6MuGUF.js";import{I as r,F as s}from"./CommandsAndQueries-Cp1HBFGN.js";import{M as l,C as a}from"./blocks-CjIjNIVl.js";import"./Tag-DKhe7Llj.js";import"./index-7iKYLPe5.js";import"./copy-BcUsFLyb.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CNWtG6P5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DsJOnmXi.js";import"./index-C0Y9mFvG.js";import"./index-gs9VdEEm.js";import"./Link-D3EHIZv0.js";import"./index-B1bhMGiO.js";import"./index-CZf_ilO1.js";import"./index-Dlo4vTaU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-FOiwvzqu.js";import"./addCustomCSSWithScoping-DinQav34.js";import"./index-DXwYC06A.js";import"./information-CE4MPASh.js";import"./sys-enter-2-B35dOLRE.js";import"./alert-DzX-q61q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-GE08y6_n.js";import"./delete-TDZixyFf.js";import"./settings-Bh7T3Aa4.js";import"./NoData-Bt-daU8p.js";import"./IllustratedMessage-Si1uDDrI.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-bdIH5t39.js";import"./index-o-VfODOS.js";import"./index-NaVgwK4T.js";import"./slim-arrow-down-BxfuL-xs.js";import"./Input-BjA9iDS-.js";import"./ResponsivePopoverCommon.css-EJi8Nc2N.js";import"./ValueStateMessage.css-DkQrLy80.js";import"./Suggestions.css-N3zEGQC3.js";import"./ListBoxItemGroupTemplate-Bgeu1wE-.js";import"./ComboBoxItemGroup-CVa1qtfW.js";import"./ListItemBaseTemplate-DhbOBe-8.js";import"./Token-BHuXs6MO.js";import"./ScrollEnablement-CWoktJAU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bqb-MqKL.js";import"./ToggleButton-CYehuNUj.js";import"./SuggestionItem-CF5WoXJt.js";import"./index-BxhVAhSv.js";import"./Option-owItQ9u6.js";import"./index-B_MsBPhq.js";import"./SegmentedButton-CMfQs4cN.js";import"./index-Dp3YThp5.js";import"./Select-CquxZ4Yo.js";import"./InvisibleMessage-B4iVYYKg.js";import"./slim-arrow-down-DyuT9wxt.js";import"./index-DgMIVDzd.js";import"./index-0aeZ3IYW.js";import"./index-CMqt-nBZ.js";import"./index--WdbnVMu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ZqboP92g.js";import"./group-2-CwAhtfHQ.js";import"./sort-descending-Z5P70oJL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1_zmeRhs.js";import"./utils-BwxVe_F4.js";import"./index-CpQToSwa.js";import"./index-CHozFaoZ.js";import"./index-B4R63qeo.js";import"./navigation-down-arrow-uPQicAfY.js";import"./navigation-right-arrow-DcPCFKfd.js";import"./navigation-right-arrow-C41To8WY.js";import"./useCurrentTheme-DOrA3ijw.js";import"./index-DRFZPeLn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zhcrMbzG.js";import"./paper-plane-BsliF2P0.js";import"./index-BVmETlAW.js";import"./less-CYPzWn_X.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
