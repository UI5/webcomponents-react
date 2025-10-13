import{j as e}from"./iframe-DDMT6HJ_.js";import{useMDXComponents as n}from"./index-BZBPPnAC.js";import{I as r,F as s}from"./CommandsAndQueries-7VHsHP9e.js";import{M as l,C as a}from"./blocks-Bodl2L_O.js";import"./Tag-CpA-lkPa.js";import"./index-5dKFa1m8.js";import"./copy-BvEBs4Jb.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BwmUzmXm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGAlCx6I.js";import"./index-DBxIJUvm.js";import"./index-Cs3p2L6v.js";import"./Link-BjYpH57b.js";import"./index-CqaPzMqI.js";import"./index-CfXspAeM.js";import"./index-DHW-qiJ5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSpYa4u6.js";import"./addCustomCSSWithScoping-D9ua8UMW.js";import"./index-CPxVkHe3.js";import"./information-BaGvLpd9.js";import"./sys-enter-2-CsR_zoUi.js";import"./alert-DZ7RsIcF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C_7eAMan.js";import"./delete-DDdmSxun.js";import"./settings-SZZk_fFu.js";import"./NoData-sRhZ3zTv.js";import"./IllustratedMessage-Dclr8PL4.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-lU7Py_iI.js";import"./index-Cc9iVAAu.js";import"./index-Dbt7IMfg.js";import"./slim-arrow-down-_qPAbD3Y.js";import"./Input-Dq0nzydJ.js";import"./ResponsivePopoverCommon.css--4EV00T0.js";import"./ValueStateMessage.css-DJXR6UPS.js";import"./Suggestions.css-BrKJqgD-.js";import"./ListBoxItemGroupTemplate-Ccn1SJ4V.js";import"./ComboBoxItemGroup-D6HtalKw.js";import"./ListItemBaseTemplate-D-MpoK89.js";import"./Token-Da7jb-N1.js";import"./ScrollEnablement-Bbyn3w51.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CwznxLrh.js";import"./ToggleButton-VCd_4PFZ.js";import"./SuggestionItem-BV-QE3WD.js";import"./index-BK1jTw4z.js";import"./Option-lMtOBoWg.js";import"./index-BGTKMO1o.js";import"./SegmentedButton-COLPjqPS.js";import"./index-E-tB_7Ri.js";import"./Select-DU8OXIZo.js";import"./InvisibleMessage-BXeuCBKE.js";import"./slim-arrow-down-KmQfRro9.js";import"./index-BPWx4Zk_.js";import"./index-D9Lx7ID0.js";import"./index-sic5m1Pa.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1tBCcb1.js";import"./group-2-D2ei6fTk.js";import"./sort-descending-BuC5Tk_u.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-lXLyT-Wl.js";import"./utils-ChSuOYmL.js";import"./index-vJTHVjlR.js";import"./index-DZKaCGNa.js";import"./index-paGBJspo.js";import"./navigation-down-arrow-B9jXhU-w.js";import"./navigation-right-arrow-DN8qzGzf.js";import"./navigation-right-arrow-Arpyz__T.js";import"./useCurrentTheme-D9ht3LOk.js";import"./IndicationColor-DVw-fSM_.js";import"./index-s2pXv8Lk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BgH4TYcR.js";import"./paper-plane-CfdFJpRG.js";import"./index-Dx8GcT9W.js";import"./less-klToe0UP.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
