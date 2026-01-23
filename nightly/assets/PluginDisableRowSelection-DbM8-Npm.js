import{j as e}from"./iframe-DMaNIVf0.js";import{useMDXComponents as n}from"./index-BdK8Evs-.js";import{I as r,F as s}from"./CommandsAndQueries-BFOyQZVK.js";import{M as l,C as a}from"./blocks-B3cnhH9X.js";import"./Tag-BBahPAh3.js";import"./index-DP2_-MiN.js";import"./copy-CnV7FmZR.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-giuHKaPD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVN0x1pl.js";import"./index-CpqFSLu_.js";import"./index-BPyW7bYo.js";import"./Link-D80_PYHk.js";import"./index-BzUF981H.js";import"./index-CkAQHTQN.js";import"./index-BZICyQUU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSBcJXg7.js";import"./addCustomCSSWithScoping-DURvRrzg.js";import"./index-DVWNlONk.js";import"./information-B4P6Loy7.js";import"./sys-enter-2-C0ZNaLlT.js";import"./alert-afWyAW_B.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DL_HHA5w.js";import"./delete-UGJs4_V3.js";import"./settings-S1nrqURM.js";import"./NoData-BLW3WdAc.js";import"./IllustratedMessage-B4Aro-vw.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-WCFpOywi.js";import"./index-Bwx3EN3f.js";import"./index-D6T6Dl-c.js";import"./slim-arrow-down-B7sjAyNA.js";import"./Input-DKkkpn3d.js";import"./ResponsivePopoverCommon.css-D74rDr_U.js";import"./ValueStateMessage.css-fkyFStPA.js";import"./Suggestions.css-0HZ10WLs.js";import"./ListBoxItemGroupTemplate-DZ9eXffT.js";import"./ComboBoxItemGroup-BR69p7yg.js";import"./ListItemBaseTemplate-Bf7uY7ZQ.js";import"./Token-CjC8nPvp.js";import"./ScrollEnablement-8_TnQxf5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8-OXolT.js";import"./ToggleButton--teKc-ne.js";import"./SuggestionItem-BnwBWzmm.js";import"./index-BoQ0qsWE.js";import"./Option-sH8FtQNh.js";import"./index-D8b8tj0j.js";import"./SegmentedButton-BTVYA_sE.js";import"./index-BXxloo5d.js";import"./Select-B0oytRV7.js";import"./InvisibleMessage-VIwqV5hq.js";import"./slim-arrow-down-CHc2IDnL.js";import"./index-Cn4MmIEZ.js";import"./index-lWv6OELN.js";import"./index-B2RA2zCC.js";import"./index-muEq_JKA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMomJqZY.js";import"./group-2-BHcp_Qz3.js";import"./sort-descending-Bq9hP7hO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BlGrjF5y.js";import"./utils-pBFYHr6i.js";import"./index-ERfIUViA.js";import"./index-JwRt4jqM.js";import"./index-DOnDyXS8.js";import"./navigation-down-arrow-D0RqXh7N.js";import"./navigation-right-arrow-CLAxjwwI.js";import"./navigation-right-arrow-CLLyA8n3.js";import"./useCurrentTheme-C69-McZX.js";import"./index-CKSN0DqT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQGRkAtk.js";import"./paper-plane-DVH2n_JI.js";import"./index-C9qNzj0Y.js";import"./less-BXBsPGl8.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
