import{j as e}from"./iframe-CISvTVNI.js";import{useMDXComponents as n}from"./index-bSkbOjqc.js";import{I as r,F as s}from"./CommandsAndQueries-CBtnfpxG.js";import{M as l,C as a}from"./blocks-B14xai8l.js";import"./Tag-C1M5Bqsq.js";import"./index-DomH80TU.js";import"./copy-DUVHDUg7.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CSObzMGr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3k5G3FE.js";import"./index-CTfs7RBW.js";import"./index-DqP6b12u.js";import"./Link-B3c0gcH0.js";import"./index-BNjAQDaE.js";import"./index-BZLJStFD.js";import"./index-4s-xol72.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D02o7Sag.js";import"./addCustomCSSWithScoping-B4qcl2al.js";import"./index-CE7xV3os.js";import"./information-B2fXauVA.js";import"./sys-enter-2-BkEj79Au.js";import"./alert-Cia20ulM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DV4j1UI6.js";import"./delete-7JFBm1Tm.js";import"./settings-kgiPQv_V.js";import"./NoData-DUEfNRQo.js";import"./IllustratedMessage-BlLIGWpl.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-ByS1wDeQ.js";import"./index-Bq6YA1OZ.js";import"./index-BWvn97oh.js";import"./slim-arrow-down-D3jugRKw.js";import"./Input-BXkax4Ai.js";import"./ResponsivePopoverCommon.css-DLVAVBHO.js";import"./ValueStateMessage.css-MWCPl9eb.js";import"./Suggestions.css-mYcKBr3o.js";import"./ListBoxItemGroupTemplate-Cq7WxQEJ.js";import"./ComboBoxItemGroup-Dt8qMQbh.js";import"./ListItemBaseTemplate-C6SuP-30.js";import"./Token-DTyOAcLh.js";import"./ScrollEnablement-DgFk1_fj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dtqu1SWh.js";import"./ToggleButton-DkGlogzG.js";import"./SuggestionItem-3yI78rM6.js";import"./index-C-QW4iFF.js";import"./Option--Q44HJGH.js";import"./index-BGo3CCkY.js";import"./SegmentedButton-G6ESX7bA.js";import"./index-DYcBIjee.js";import"./Select-BUoOKAbj.js";import"./InvisibleMessage-D74Q5wYE.js";import"./slim-arrow-down-BCtidmgu.js";import"./index-C__maydq.js";import"./index-DdNorZl8.js";import"./index-TfXtv-kl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-IUv5q-Nd.js";import"./group-2-pZ5u8b6c.js";import"./sort-descending-DeiY6LR9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DwAWNqSH.js";import"./utils-BVswc758.js";import"./index-DmEszc9N.js";import"./index-CTSNUJ9h.js";import"./index-CP1wr9dJ.js";import"./navigation-down-arrow-DmaxrwH-.js";import"./navigation-right-arrow-CpRUuEp7.js";import"./navigation-right-arrow-BJIZXTFA.js";import"./useCurrentTheme-B4X-989J.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CMsN1t2K.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CTE_y8fW.js";import"./paper-plane-BzsW306U.js";import"./index-DsfN-T3H.js";import"./less-CH3mR01q.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
