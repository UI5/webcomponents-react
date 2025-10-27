import{j as e}from"./iframe-B7JRtnJ_.js";import{useMDXComponents as n}from"./index-BPvgxWCZ.js";import{I as r,F as s}from"./CommandsAndQueries-Q6uRMqWv.js";import{M as l,C as a}from"./blocks-De_aBrmo.js";import"./Tag-BKx3QN9f.js";import"./index-D4cnUaLM.js";import"./copy-C1tv-pSG.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DXu8cpTj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bxt1rtVG.js";import"./index-DptOKZBu.js";import"./index-DoEzIHzx.js";import"./Link-CTrIksmS.js";import"./index-Ch21QDGf.js";import"./index-B10alG5K.js";import"./index-DCbqd4CK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CpyU0bSl.js";import"./addCustomCSSWithScoping-COHCvbrD.js";import"./index-VZQHlfm7.js";import"./information-CsJaoifg.js";import"./sys-enter-2-ZCQT486r.js";import"./alert-B325SdK2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CDBgji9G.js";import"./delete-B3tuR7-p.js";import"./settings-D5gHcoOg.js";import"./NoData-D9ka5VCC.js";import"./IllustratedMessage-BJKH4F_T.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DEpwK6Ta.js";import"./index-DTKzGQ6P.js";import"./index-CsB4ym8b.js";import"./slim-arrow-down-BzVC3qLM.js";import"./Input-BYPwe2OS.js";import"./ResponsivePopoverCommon.css-D4L-fz7S.js";import"./ValueStateMessage.css-Da6bxDPp.js";import"./Suggestions.css-D7e9g6wi.js";import"./ListBoxItemGroupTemplate-i04jvwvt.js";import"./ComboBoxItemGroup-35_A61aK.js";import"./ListItemBaseTemplate-zRKoETe6.js";import"./Token-DavucC3B.js";import"./ScrollEnablement-De2yMTO7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DOEa2jCy.js";import"./ToggleButton-DUnpLraq.js";import"./SuggestionItem-cFLHLZrB.js";import"./index-CqtNJPl5.js";import"./Option-KMv42Mqm.js";import"./index-Ca9erLwf.js";import"./SegmentedButton-BR2WkUo4.js";import"./index-Dq1tb5Fi.js";import"./Select-BM-L4rd4.js";import"./InvisibleMessage-BnecaueW.js";import"./slim-arrow-down-BF5Yax_r.js";import"./index-DeNJuL6H.js";import"./index-Jqh8kZ4Z.js";import"./index-SAfhucJr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-mXBC9qtL.js";import"./group-2-C1w6MKqp.js";import"./sort-descending-D7Gnpxkd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-e_OfuZeF.js";import"./utils-B0P9OHGE.js";import"./index-ntbAsQ4L.js";import"./index-DYX22vMe.js";import"./index-BH2TLEnM.js";import"./navigation-down-arrow-BNouF3FU.js";import"./navigation-right-arrow-CwzVtkMG.js";import"./navigation-right-arrow-BWpP7Omt.js";import"./useCurrentTheme-C1kqmVty.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BtJSqTjG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRx_4vwg.js";import"./paper-plane-B06jmj5a.js";import"./index-Ch7LJGDA.js";import"./less-Dzjv4OdC.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
