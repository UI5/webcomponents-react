import{j as e}from"./iframe-DJaejRN_.js";import{useMDXComponents as n}from"./index-BkjBMRMv.js";import{I as r}from"./CommandsAndQueries-83bvSdoV.js";import{M as s,C as l}from"./blocks-B8-Y-Ni6.js";import"./Tag-zqqHRvHY.js";import"./index-CK92YQRu.js";import"./copy-tix8vrrW.js";import{F as a}from"./Footer-XAiTUg9G.js";import"./PageNotFound-DWPqXbgo.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-S3OMrBy1.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DT5pBXPw.js";import"./index-I-NngIql.js";import"./index-Bal_B_tE.js";import"./index-BVWvlifs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HTE3RcD3.js";import"./addCustomCSSWithScoping-BTx9ebqV.js";import"./index-MWuEJcIb.js";import"./index-D5l-jmF5.js";import"./index-B75X8BI3.js";import"./information-BX0fOOvt.js";import"./sys-enter-2-1CYV1NDA.js";import"./alert-BrdS4drn.js";import"./index-DyG0juUn.js";import"./Illustrations-Ba3wQCeI.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ic1RC2lh.js";import"./delete-B2TUGyO-.js";import"./settings-oIbW7Kic.js";import"./NoData-Byp02WJx.js";import"./NoFilterResults-DWMM6VEP.js";import"./index-bCAzbOQs.js";import"./IllustratedMessage-s2lr1q6e.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BMQ89NOj.js";import"./Input-CQcb9um5.js";import"./ResponsivePopoverCommon.css-DP4stE3l.js";import"./ValueStateMessage.css--EiJ9K55.js";import"./Suggestions.css-x42H9hm7.js";import"./ListBoxItemGroupTemplate-CI1P5CVP.js";import"./ComboBoxItemGroup-vt_nZJ4z.js";import"./ListItemBaseTemplate-tq4M4CSx.js";import"./Token-CcP7J3UG.js";import"./ScrollEnablement-BJkBQfQ1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-wGcDRCSr.js";import"./ToggleButton-Bg6zoSMg.js";import"./multiselect-all-Cfr97RyP.js";import"./SuggestionItem-CJn-zf9Z.js";import"./index-dGJDzqrP.js";import"./Option-BqthOmxs.js";import"./index-C6g94agN.js";import"./SegmentedButton-PDpQSPVH.js";import"./index-BgCVM7Zt.js";import"./Select-dEPIbNJV.js";import"./InvisibleMessage-Dz7aUwZ8.js";import"./index-DFKZ6jPd.js";import"./index-BPdG_RYR.js";import"./index-DjtZBg8h.js";import"./index-BNdX0xO5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDPJ_dAS.js";import"./group-2-CVKMzmVq.js";import"./sort-descending-Cu3NsCcr.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BmtLvC-2.js";import"./utils-TCEZc21J.js";import"./index-DhUMRh-k.js";import"./index-ClucFX_O.js";import"./index-Bfqqdgj5.js";import"./navigation-down-arrow-Bci2V2X1.js";import"./navigation-right-arrow-iEyeUQmo.js";import"./navigation-right-arrow-BSQqx-Ox.js";import"./useCurrentTheme-ywdbp9Ht.js";import"./index-_GCZfNpS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CiD1d4mj.js";import"./paper-plane-3RukpGeM.js";import"./index-BC2sgrml.js";import"./less-5TCBAmqB.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
