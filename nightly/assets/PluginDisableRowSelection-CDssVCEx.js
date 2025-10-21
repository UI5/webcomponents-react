import{j as e}from"./iframe-pfqRYewB.js";import{useMDXComponents as n}from"./index-DxYcUkXM.js";import{I as r,F as s}from"./CommandsAndQueries-CBK4GytM.js";import{M as l,C as a}from"./blocks-CN6sML6r.js";import"./Tag-DOr7yVDv.js";import"./index-TMKVCirT.js";import"./copy-0Cu3Y4If.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DVQ3i1IE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOCv1nQg.js";import"./index-C87hBs3b.js";import"./index-DQ0pLIsd.js";import"./Link-C4McI5Wx.js";import"./index-D05B83RK.js";import"./index-5KySo-3G.js";import"./index-BkIEU9nM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJxPXkiU.js";import"./addCustomCSSWithScoping-D2yzvGyj.js";import"./index-DQUabOTm.js";import"./information-BrehxxGu.js";import"./sys-enter-2-CTsRx7VM.js";import"./alert-qaqpTU-O.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCldNniw.js";import"./delete-HmTQ_vFj.js";import"./settings-mukY2-9u.js";import"./NoData-DDeHK4Wf.js";import"./IllustratedMessage-KYMTpTyO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-ChEYzt-h.js";import"./index-CqmZ5mGT.js";import"./index-pwjz_r8O.js";import"./slim-arrow-down-C7FQVzqZ.js";import"./Input-DFBmllhy.js";import"./ResponsivePopoverCommon.css-DZHwRQHx.js";import"./ValueStateMessage.css-CidmTEJw.js";import"./Suggestions.css-DAu3JF_J.js";import"./ListBoxItemGroupTemplate-6BxZnxDU.js";import"./ComboBoxItemGroup-BsUPI3Ww.js";import"./ListItemBaseTemplate-HUrGMPNt.js";import"./Token-B8pfMnds.js";import"./ScrollEnablement-D1lbDyHD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cohus5KX.js";import"./ToggleButton-ZQLSnveS.js";import"./SuggestionItem-Dmy_a1VU.js";import"./index-CwRuKaLk.js";import"./Option-CFDOWY6L.js";import"./index-DCK0KPlT.js";import"./SegmentedButton-B6i3WymD.js";import"./index-DevUfoIh.js";import"./Select-m-b0pWIF.js";import"./InvisibleMessage-DwveyP79.js";import"./slim-arrow-down-bCF3a_Rt.js";import"./index-Dgi4QmO9.js";import"./index-BQzry0n4.js";import"./index-DPBow1JV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-15Rm-0v2.js";import"./group-2-B1-jLB8-.js";import"./sort-descending-uWzFdjhI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWkHdUbT.js";import"./utils-DDcIz5H6.js";import"./index-D2MBzVUF.js";import"./index-8gw3xkKH.js";import"./index-DwWEOzU8.js";import"./navigation-down-arrow-C-s-4mEI.js";import"./navigation-right-arrow-C-NoESB4.js";import"./navigation-right-arrow-B9Xr6jRR.js";import"./useCurrentTheme-VDt91aLT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cp87tOSX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DTunfDpQ.js";import"./paper-plane-s_bnmj1H.js";import"./index-BUgZbWmJ.js";import"./less-Db2oPJEr.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
