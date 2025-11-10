import{j as e}from"./iframe-hWo-wO7u.js";import{useMDXComponents as n}from"./index-B2u3atBN.js";import{I as r,F as s}from"./CommandsAndQueries-BtJ9G9OP.js";import{M as l,C as a}from"./blocks-D665FCej.js";import"./Tag-DiHaMBCj.js";import"./index-D5mqC0e8.js";import"./copy-BPT19kup.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C9Heuwuk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Wfnu6Ku2.js";import"./index-D7ZeaZZe.js";import"./index-BDgRL0Nh.js";import"./Link-BA7dioNH.js";import"./index-CSzf7Z-Y.js";import"./index-DISMqvl7.js";import"./index-C_OvF3EV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfqGlQv7.js";import"./addCustomCSSWithScoping-wCTK5FK_.js";import"./index-qccq9h_o.js";import"./information-C8DEl_tH.js";import"./sys-enter-2-LL0qt2nK.js";import"./alert-DeTqeiYU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DA2kYysS.js";import"./delete-1cfM8Qxo.js";import"./settings-zuK18Bw0.js";import"./NoData-CkVGmtjH.js";import"./IllustratedMessage-D6ysM4C0.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DA-MEoRX.js";import"./index-DmgQLslz.js";import"./index-eQIHm9QM.js";import"./slim-arrow-down-Bh_ekG-x.js";import"./Input-Bj15_VWu.js";import"./ResponsivePopoverCommon.css-CUXmBlOY.js";import"./ValueStateMessage.css-BGhJCY9Z.js";import"./Suggestions.css-lQlw-tAk.js";import"./ListBoxItemGroupTemplate-o-zwMfnD.js";import"./ComboBoxItemGroup-CftSPkvF.js";import"./ListItemBaseTemplate-g1dZt2_w.js";import"./Token-CcowhBYO.js";import"./ScrollEnablement-BHTzoQIK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRaWu8L3.js";import"./ToggleButton-B_IR3Cp0.js";import"./SuggestionItem-DSX2e-Mq.js";import"./index-BwiirZMa.js";import"./Option-DIbmc_PM.js";import"./index-BrYBpQqL.js";import"./SegmentedButton-B4_2if5t.js";import"./index-C9eBbgwm.js";import"./Select-DXUVZ4YD.js";import"./InvisibleMessage-D08-nSQa.js";import"./slim-arrow-down-DxxkkDHb.js";import"./index-DCZ4Ax5f.js";import"./index-Dy1oOrBB.js";import"./index-DiMvuXX8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-izyJHX72.js";import"./group-2-D53K53MV.js";import"./sort-descending-D6Z78OXl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dcm44O05.js";import"./utils-CjxRVdkU.js";import"./index-CfJPtgca.js";import"./index-DG-Dq2q4.js";import"./index-CYQ2RrlX.js";import"./navigation-down-arrow-BOFNhi8Y.js";import"./navigation-right-arrow-Bi5JkXbY.js";import"./navigation-right-arrow-DR5DT_Mp.js";import"./useCurrentTheme-DA70P9tJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bdwri-eL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DAQms381.js";import"./paper-plane-BCqoBBVx.js";import"./index-DDSY4mam.js";import"./less-DnIOHHkm.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
