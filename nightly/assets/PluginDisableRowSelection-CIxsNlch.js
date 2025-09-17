import{j as e}from"./iframe-DUkvwiCH.js";import{useMDXComponents as n}from"./index-CmOOmEq_.js";import{I as r,F as s}from"./CommandsAndQueries-PDY51fAI.js";import{M as l,C as a}from"./blocks-BEyioZmC.js";import"./Tag-DEWD3xtk.js";import"./index-mzCfuMGx.js";import"./copy-B0dtT-T1.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-7JKM5En5.js";import"./preload-helper-D9Z9MdNV.js";import"./index-B92FdrSK.js";import"./index-XPJfZ8Rp.js";import"./index-BtWSXXzR.js";import"./Link-DPkQciON.js";import"./addCustomCSSWithScoping-CPXzOUpZ.js";import"./index-_2a7rjiJ.js";import"./index-qYUxj7eK.js";import"./index-B-fuFZPz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOPJEYH-.js";import"./index-DhtGVRhj.js";import"./information-DXx8yVKj.js";import"./sys-enter-2-DohaKpz7.js";import"./alert-DS7-1sye.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-gqR0P-Wx.js";import"./delete-BdCzKGxL.js";import"./settings-2PbqmORg.js";import"./NoData-Ca0oG_JL.js";import"./IllustratedMessage-DqN1c1Zq.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B0xFtsqI.js";import"./index-CXzHH1Z3.js";import"./slim-arrow-down-xGo2jOIY.js";import"./Input-DQ5p6nKI.js";import"./ResponsivePopoverCommon.css-BoQVIvNi.js";import"./ValueStateMessage.css-Bsq6Il4y.js";import"./Suggestions.css-i3s5CWMS.js";import"./ListBoxItemGroupTemplate-DP2vsF3T.js";import"./ComboBoxItemGroup-Bt2s2r-m.js";import"./ListItemBaseTemplate-Nc_kgJrp.js";import"./Token-B0XPP79K.js";import"./ScrollEnablement-B_COiRMd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYtQ6rBD.js";import"./ToggleButton-CFoIabfN.js";import"./SuggestionItem-CKzR1LPx.js";import"./index-CdyYI52I.js";import"./Option-CDGlp-cu.js";import"./index-DoRSQu9o.js";import"./SegmentedButton-D2lnd9RP.js";import"./index-MgIz5-1O.js";import"./Select-C5SGLZaQ.js";import"./InvisibleMessage-CxWJNd19.js";import"./slim-arrow-down-CYI811l3.js";import"./useIsRTL-CJjpUbvq.js";import"./index-CfgMfPc4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DxjtuVZF.js";import"./group-2-IpJOfuC0.js";import"./sort-descending-ci6Trp1X.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmG0lqi8.js";import"./utils-BhHqIEZ6.js";import"./index-DOXiwBZC.js";import"./index-B5JDV88H.js";import"./index-veuLTP7t.js";import"./navigation-down-arrow-CI6f4P1V.js";import"./navigation-right-arrow-ChwAEYXe.js";import"./navigation-right-arrow-SID4lvJa.js";import"./useCurrentTheme-k-t9Vjzd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-RYQDkhJm.js";import"./debounce-D7W5PopO.js";import"./paper-plane-CB6ae7Yb.js";import"./index-Csbl6rAf.js";import"./less-GaIuzsTP.js";import"./index-C1SgQ07A.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
