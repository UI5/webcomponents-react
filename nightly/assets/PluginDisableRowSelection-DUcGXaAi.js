import{j as e}from"./iframe-DrPmn2Fl.js";import{useMDXComponents as n}from"./index-D0JiuHQ4.js";import{I as r,F as s}from"./CommandsAndQueries-DJtqUE3T.js";import{M as l,C as a}from"./blocks-BjYhsAle.js";import"./Tag-DTGJG_3A.js";import"./index-D7exUdgR.js";import"./copy-BYLHU9Z4.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D7tDF3LC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcboqTLf.js";import"./index-7KEOFJG9.js";import"./index-pqPyLDtB.js";import"./Link-DpbM7hv-.js";import"./index-CSSeCaDH.js";import"./index-BDgABtQ5.js";import"./index-CsBAZiQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D8f6CQWY.js";import"./addCustomCSSWithScoping-Dp7JQ0AP.js";import"./index-BryeGZHH.js";import"./information-B3e_XIJr.js";import"./sys-enter-2-BzGI5wIC.js";import"./alert-k9YiTQ21.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B6X-Ca7e.js";import"./delete-CetONo-j.js";import"./settings-ue12HTO0.js";import"./NoData-CWzySvQc.js";import"./IllustratedMessage-D0tB0cmi.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BPl5eSyH.js";import"./index-kY9ogU97.js";import"./index-D_3vZ1qW.js";import"./slim-arrow-down-BIYWTMM9.js";import"./Input-CpYyucC6.js";import"./ResponsivePopoverCommon.css-aFKlRj1z.js";import"./ValueStateMessage.css-B2kFKHCy.js";import"./Suggestions.css-BixA8_8b.js";import"./ListBoxItemGroupTemplate-DQIXrV5Z.js";import"./ComboBoxItemGroup-Dvg2tB_d.js";import"./ListItemBaseTemplate-B7R8y6E8.js";import"./Token-DhrdJ1Sg.js";import"./ScrollEnablement-DEcYIeHm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlHk0Rap.js";import"./ToggleButton-B5bHIjtc.js";import"./SuggestionItem-IqbCPKbs.js";import"./index-CL7xnthF.js";import"./Option-BkGTUapV.js";import"./index-Dc1nuJIz.js";import"./SegmentedButton-Bp7GzNGY.js";import"./index-CYkhTtIe.js";import"./Select-DFfAQ4b9.js";import"./InvisibleMessage-CRnN6wGW.js";import"./slim-arrow-down-ESf62i2o.js";import"./index-Bgu519fZ.js";import"./index-XZB3isdK.js";import"./index-Bo9OnBPA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYqChTor.js";import"./group-2-BSQvkUDM.js";import"./sort-descending-Dpcy382o.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C2pRBdY7.js";import"./utils-KyGbIlyC.js";import"./index-D_tUOp4t.js";import"./index-exVXgT8C.js";import"./index-CmB-uMll.js";import"./navigation-down-arrow-CwSBl4bt.js";import"./navigation-right-arrow-F8wuOD05.js";import"./navigation-right-arrow-lRMX6PjY.js";import"./useCurrentTheme-C35ceZMU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B3w1bjpQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CO6iPAax.js";import"./paper-plane-BAOIGT1i.js";import"./index-D4uoRC6c.js";import"./less-B5N43rAu.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
