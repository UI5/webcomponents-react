import{j as e}from"./iframe-OLMvr6Lt.js";import{useMDXComponents as n}from"./index-CdriUjbp.js";import{I as r,F as s}from"./CommandsAndQueries-CxvYWHkR.js";import{M as l,C as a}from"./blocks-CZhft-YU.js";import"./Tag-isczvwSi.js";import"./index-DNJgsZvx.js";import"./copy-CFwp5FgG.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Cy3cyHhy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbPvBsUu.js";import"./index-D6OGtnN7.js";import"./index-3TabIQwt.js";import"./Link-B3ocEkmU.js";import"./index-D7Vb79r0.js";import"./index-C0KzuGfV.js";import"./index-DP7V--vt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-8TAtZbXi.js";import"./addCustomCSSWithScoping-D8XhS4Ox.js";import"./index-DCyx6v--.js";import"./information-CW-9LDCP.js";import"./sys-enter-2-8-HPbBwq.js";import"./alert-Bd52_kq-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWywr3TW.js";import"./delete-CCzy9s8b.js";import"./settings-D42fuJuX.js";import"./NoData-Bup5hrqa.js";import"./IllustratedMessage-CHTeCatA.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-ZuFlFv1T.js";import"./index-Dc9B5nZG.js";import"./index-JF5_76ci.js";import"./slim-arrow-down-ySZlwq-q.js";import"./Input-D4ca9rAR.js";import"./ResponsivePopoverCommon.css-BRrcd20a.js";import"./ValueStateMessage.css-Bk812_Kf.js";import"./Suggestions.css-BjM9wydn.js";import"./ListBoxItemGroupTemplate-AWhndfnj.js";import"./ComboBoxItemGroup-DoFoxDi9.js";import"./ListItemBaseTemplate-CpLLHa4Z.js";import"./Token-MTCn4enU.js";import"./ScrollEnablement-94tHLG88.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-vQZi_1g2.js";import"./ToggleButton-DDwhnOd_.js";import"./SuggestionItem-DsV9yF55.js";import"./index-sE10V8UB.js";import"./Option-B-1m3Lan.js";import"./index-Cb21HCJZ.js";import"./SegmentedButton-DsUwene6.js";import"./index-CL538puJ.js";import"./Select-eKqLtCSY.js";import"./InvisibleMessage-B_prVgph.js";import"./slim-arrow-down-CMbdHuJl.js";import"./index-xGnKXygx.js";import"./index-CRmylG0z.js";import"./index-u1rNC7Bo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMM6dyNf.js";import"./group-2-B4FdXRJU.js";import"./sort-descending-DvUEcM1R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-jICxCRW9.js";import"./utils-P9HcUQzN.js";import"./index-DDWpxtlc.js";import"./index-Wbk_vv3N.js";import"./index-AlbH3iGp.js";import"./navigation-down-arrow-IShY2WyB.js";import"./navigation-right-arrow-DzbnPaXu.js";import"./navigation-right-arrow-BxL2ijuh.js";import"./useCurrentTheme-DHVnEAWK.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4pyhN2Y.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-PfY8la.js";import"./paper-plane-BZiyZUyR.js";import"./index-CXSg-hiw.js";import"./less-DNufAwmk.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
