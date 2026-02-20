import{j as e}from"./iframe-gbBUxptC.js";import{useMDXComponents as n}from"./index-BaGM4qgt.js";import{I as r,F as s}from"./CommandsAndQueries-BmjJVETk.js";import{M as l,C as a}from"./blocks-BtAmmb_9.js";import"./Tag-DXmb03WA.js";import"./index-a6vq6nFR.js";import"./copy-CmUJgJe8.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BZWTu7v3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAL1VzDv.js";import"./index-C5e2Rf9k.js";import"./index-FjtRLsYm.js";import"./Link-BqgTlNng.js";import"./index-ClLX1AfH.js";import"./index-n6dTxbQI.js";import"./index-CHg7n_fg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cfhz7n7-.js";import"./addCustomCSSWithScoping-BVowAJ0u.js";import"./index-DTWmKJf_.js";import"./information-RQmI2RmD.js";import"./sys-enter-2-BfzFGSW6.js";import"./alert-BAR71iQk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Be0U_ft-.js";import"./delete-CHhVsLyE.js";import"./settings-CRXB_GUB.js";import"./NoData-BEbrRJin.js";import"./IllustratedMessage-DPIq6GRo.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DYND8aIN.js";import"./index-BUjtWPUe.js";import"./index-BdMYduaB.js";import"./slim-arrow-down-PxErebVm.js";import"./Input-DpRW8R60.js";import"./ResponsivePopoverCommon.css-CB1aGVFH.js";import"./ValueStateMessage.css-0cpHNy9C.js";import"./Suggestions.css-CH_OcyZq.js";import"./ListBoxItemGroupTemplate-ZlrFvfdZ.js";import"./ComboBoxItemGroup-CbX9SgdN.js";import"./ListItemBaseTemplate-dFMho5BM.js";import"./Token-Dbj0dySX.js";import"./ScrollEnablement-Bwz9Nt66.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CwkyZiZH.js";import"./ToggleButton-xGavKy1U.js";import"./SuggestionItem-BhYYhTT2.js";import"./index-DV9Zxj4n.js";import"./Option-RAQpRMCb.js";import"./index-_6AuRaIf.js";import"./SegmentedButton-5Ar7ByFu.js";import"./index-CjC8hPeS.js";import"./Select-D_YlJdGW.js";import"./InvisibleMessage-1DPtlwXM.js";import"./slim-arrow-down-DtVtSqjI.js";import"./index-EULlufCD.js";import"./index-VaOwe_sd.js";import"./index-C9agJ7zC.js";import"./index-CT_MWQmw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DuWpi9Yb.js";import"./group-2-DjzUyU8Y.js";import"./sort-descending-DrynzVZQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbnIJMNo.js";import"./utils-DQjxHGDo.js";import"./index-8tidi2SL.js";import"./index-BkJL-s5e.js";import"./index-BKNwKDSV.js";import"./navigation-down-arrow-C8MDIXaq.js";import"./navigation-right-arrow-BL-KUoKn.js";import"./navigation-right-arrow-CDbw-fpV.js";import"./useCurrentTheme-CuNgw21V.js";import"./index-DIjWH5C3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D6wyqJl0.js";import"./paper-plane-D3CWJS4i.js";import"./index-D1kpHmeu.js";import"./less-C3KbgZVL.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
