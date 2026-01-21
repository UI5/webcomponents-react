import{j as e}from"./iframe-f3iLPpTx.js";import{useMDXComponents as n}from"./index-Cg-5LGOy.js";import{I as r,F as s}from"./CommandsAndQueries-ANshK3xd.js";import{M as l,C as a}from"./blocks-DoSJn-9n.js";import"./Tag-HMKYn_gR.js";import"./index-C4t1_KXY.js";import"./copy-BPmTOQZZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CeGiqy_9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-TWvX3fxG.js";import"./index-oCC-c3oA.js";import"./index-DzXajydQ.js";import"./Link-EHnjrAaJ.js";import"./index-Dq8bnboK.js";import"./index-C3jxOnm0.js";import"./index-DY8Z5oY2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ce84hNWi.js";import"./addCustomCSSWithScoping-FBci05L8.js";import"./index-C81LpEbs.js";import"./information-D9tZEGE7.js";import"./sys-enter-2-DE9YD12B.js";import"./alert-BBZcuL-v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D9bzh1Z6.js";import"./delete-3k9ewCfi.js";import"./settings-C4qTrATZ.js";import"./NoData-DTrdJtGp.js";import"./IllustratedMessage-BSTzW0Sn.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BXAl_aeC.js";import"./index-D_kEJBb-.js";import"./index-Cyem6Ef9.js";import"./slim-arrow-down-BhjskzRk.js";import"./Input-BA2q8K-i.js";import"./ResponsivePopoverCommon.css-B8gBrPLb.js";import"./ValueStateMessage.css-seFb1qKi.js";import"./Suggestions.css-C81am98X.js";import"./ListBoxItemGroupTemplate-CI1tVLOZ.js";import"./ComboBoxItemGroup-BCkjIVdO.js";import"./ListItemBaseTemplate-BBr_9wKC.js";import"./Token-BzdV5wLi.js";import"./ScrollEnablement-BgAU8fOn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Czpv5A2n.js";import"./ToggleButton-CPD4HgrF.js";import"./SuggestionItem-ClSr8F10.js";import"./index-T7MLs8hf.js";import"./Option-CWKJzO5N.js";import"./index-_dyjDy1m.js";import"./SegmentedButton-BYRHNZSD.js";import"./index-8OcAdlHO.js";import"./Select-BnSQqeni.js";import"./InvisibleMessage-C0oVP_sH.js";import"./slim-arrow-down-6WKrBuBW.js";import"./index-cjK9zly0.js";import"./index-DXgYFRlO.js";import"./index-CRy0gMjM.js";import"./index-x-l5-c_J.js";import"./IconDesign-DXd8PPVF.js";import"./filter-XptaN1lH.js";import"./group-2-CObAZZZr.js";import"./sort-descending-D6cr4_48.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CFnD-yF-.js";import"./utils-BubI_VCY.js";import"./index-BUKlkCYI.js";import"./index-nGDSIC6S.js";import"./index-BRFWofe_.js";import"./navigation-down-arrow-HRklLRvN.js";import"./navigation-right-arrow-DnSqIm0M.js";import"./navigation-right-arrow-BU9xMcPj.js";import"./useCurrentTheme-CEll4Kb2.js";import"./index-u-NkBXly.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzIFx5-R.js";import"./paper-plane-ByFPrxB1.js";import"./index-DOXdSdDM.js";import"./less-Dz3GjE58.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
