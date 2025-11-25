import{j as e}from"./iframe-3Rg5Wd99.js";import{useMDXComponents as n}from"./index-BTtluBKc.js";import{I as r,F as s}from"./CommandsAndQueries-4irgK4g8.js";import{M as l,C as a}from"./blocks-DwXr0juD.js";import"./Tag-D-xjyjYI.js";import"./index-BjGGvrQp.js";import"./copy-BR2g9NKm.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BtKyMCwH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BoknKV7T.js";import"./index-BWLi-wcN.js";import"./index-LZ61FQm1.js";import"./Link-BMrxlNgv.js";import"./index-ClS56Mg1.js";import"./index-QO9zmO89.js";import"./index-C9Yy8pBH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-apWy6mIw.js";import"./addCustomCSSWithScoping-mB2SNd7y.js";import"./index-BPXqXslV.js";import"./information-COV3mgHm.js";import"./sys-enter-2-C-L-yMS4.js";import"./alert-ClJ7IdSm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-AybIUtZQ.js";import"./delete-C18fTeGA.js";import"./settings-DOb4jD36.js";import"./NoData-Dzqqxzcq.js";import"./IllustratedMessage-XT-qOyRh.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-RUBH0lOK.js";import"./index-cf0CgG6G.js";import"./index-CnMsIOMu.js";import"./slim-arrow-down-DPxeYNIS.js";import"./Input-RaRxEcJv.js";import"./ResponsivePopoverCommon.css-BnKNuLK_.js";import"./ValueStateMessage.css-D2xuJszB.js";import"./Suggestions.css-C-SIx5Gu.js";import"./ListBoxItemGroupTemplate-CkqhRzfm.js";import"./ComboBoxItemGroup-BGauKTTc.js";import"./ListItemBaseTemplate-CCNKkYk5.js";import"./Token-FJAepxqH.js";import"./ScrollEnablement-e6-Wl8Ct.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cd6yodnz.js";import"./ToggleButton-CKU3XZkp.js";import"./SuggestionItem-1xa7THEm.js";import"./index-D2rLPQ18.js";import"./Option-CtvAXvoh.js";import"./index-CCkYF5EZ.js";import"./SegmentedButton-BMw95QgJ.js";import"./index-mj1iThEp.js";import"./Select-DK_4ZOyC.js";import"./InvisibleMessage-PSe-IXvc.js";import"./slim-arrow-down-BIyrlIQV.js";import"./index-Dnit8d_5.js";import"./index-BVN7UCZF.js";import"./index-mJSdXP-Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CknUQnqi.js";import"./group-2-BYSUkX7I.js";import"./sort-descending-BGvYR9pA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-De9vUNgF.js";import"./utils--AtpiRwX.js";import"./index-wOoILpmg.js";import"./index-CcNWTncD.js";import"./index-BPKkC6Cq.js";import"./navigation-down-arrow-CE59kIds.js";import"./navigation-right-arrow-5K5Bx0O1.js";import"./navigation-right-arrow-CrmWEXO3.js";import"./useCurrentTheme-CT2jPT6F.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DwlQ-CyJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DFX8rm6i.js";import"./paper-plane-DMs4w7xh.js";import"./index-dsSG16Z8.js";import"./less-4xUDvpDF.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
