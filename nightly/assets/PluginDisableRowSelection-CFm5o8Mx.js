import{j as e}from"./iframe-2x_0PLRY.js";import{useMDXComponents as n}from"./index-C4Rs_8Uq.js";import{I as r}from"./CommandsAndQueries-CvWMTcrY.js";import{M as s,C as l}from"./blocks-DrJbgW55.js";import"./Tag-CYhgI4gb.js";import"./index-C-fDGoUi.js";import"./copy-DSjSLU2X.js";import{F as a}from"./Footer-C23Ewd88.js";import"./PageNotFound-GiConHCM.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bd-jpep-.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dg5-mm9g.js";import"./index-CZ7o6xvr.js";import"./index-lA2D-rzF.js";import"./index-B75d9fwz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUHmvjuE.js";import"./addCustomCSSWithScoping-CuKwKJpy.js";import"./index-Bs9Uk8tv.js";import"./index-DdARDxKZ.js";import"./index-1eyneICk.js";import"./information-CQy15gwz.js";import"./sys-enter-2-fcqn0uC8.js";import"./alert-DZyPZUjF.js";import"./index-Da9gu6ir.js";import"./Illustrations-GJByOHnh.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C1zA47Ed.js";import"./delete-Dm3A4Zzu.js";import"./settings-49zjIzB4.js";import"./NoData-DViCOYv5.js";import"./NoFilterResults-CGrZSXcs.js";import"./index-D8bHh7X2.js";import"./IllustratedMessage-CKpDrrxq.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Dh2yHhZH.js";import"./Input-IEwNVI_K.js";import"./ResponsivePopoverCommon.css-ComU2SZW.js";import"./ValueStateMessage.css-DaC-uAV3.js";import"./Suggestions.css-pKApGvll.js";import"./ListBoxItemGroupTemplate-BOrTGd3v.js";import"./ComboBoxItemGroup-Xbiqn1zf.js";import"./ListItemBaseTemplate-BxCXKzrT.js";import"./Token-CYwnA-o2.js";import"./ScrollEnablement-B0eGwDT6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bv6KV_Gq.js";import"./ToggleButton-DcKPP7Q3.js";import"./multiselect-all-Cc7wBjwN.js";import"./SuggestionItem-6XDeeXuO.js";import"./index-CUloKy3a.js";import"./Option-OQxXdKHO.js";import"./index-BwzVHAg0.js";import"./SegmentedButton-BVvm5Et3.js";import"./index-CdCmeGHs.js";import"./Select-BSrjV0De.js";import"./InvisibleMessage-C8emxagq.js";import"./index-CZ8rqGj1.js";import"./index-Bn8GbUkv.js";import"./index-CVFqlISp.js";import"./index-CE5xEOkh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BiuxlBCw.js";import"./group-2-DZ_hsHyl.js";import"./sort-descending-F1dqENZc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D1TKLQXO.js";import"./utils-DHc0pTWH.js";import"./index-CglD4THH.js";import"./index-wskoKDOF.js";import"./index-BlA_lRT3.js";import"./navigation-down-arrow-p8Osdjlf.js";import"./navigation-right-arrow-DgBrm-yY.js";import"./navigation-right-arrow-CtTvgiKo.js";import"./useCurrentTheme-DX8kCYl-.js";import"./index-zvEeTffF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ZD4jjhta.js";import"./paper-plane-B8QRKbXZ.js";import"./index-E3mIAJR3.js";import"./less-CXX32lTI.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
