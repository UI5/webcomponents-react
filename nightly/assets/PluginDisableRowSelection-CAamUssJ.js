import{j as e}from"./iframe-CCKRZdbF.js";import{useMDXComponents as n}from"./index-BW1v5Z1e.js";import{I as r,F as s}from"./CommandsAndQueries-D1vMTwJ_.js";import{M as l,C as a}from"./blocks-DizR4yrp.js";import"./Tag-D_1GVpYe.js";import"./index-BXous6Vg.js";import"./copy-DCYvEQ2A.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BY_i5uVM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ppkYs0Pw.js";import"./index-TT9wAavy.js";import"./index-C4ynR4jc.js";import"./Link-DVIX6xLA.js";import"./index-Xy0A6wMV.js";import"./index-BMpz4bfD.js";import"./index-byvg7TJC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di3RALWU.js";import"./addCustomCSSWithScoping-BCWPiCrh.js";import"./index-DgC4fDU8.js";import"./information-DXZj2K0P.js";import"./sys-enter-2-_UoM3OrC.js";import"./alert-BYsKIWrN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DlXGJ_VL.js";import"./delete-D8TdfBV2.js";import"./settings-DOirttvF.js";import"./NoData-DD85yEi3.js";import"./IllustratedMessage-Clfpji7f.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-_rMq9ILm.js";import"./index-BkArYS5g.js";import"./slim-arrow-down-BZhadXVl.js";import"./Input-C5oVUkIB.js";import"./ResponsivePopoverCommon.css-Bikw0MiR.js";import"./ValueStateMessage.css-BuporDJE.js";import"./Suggestions.css-0ImH9Wru.js";import"./ListBoxItemGroupTemplate-ognKSaX6.js";import"./ComboBoxItemGroup-d7zArK7N.js";import"./ListItemBaseTemplate-BkJwMcM3.js";import"./Token-BEFr1xPt.js";import"./ScrollEnablement-BBtwJSnx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DBjVOyrh.js";import"./ToggleButton-B3jU_WZR.js";import"./SuggestionItem-CBgTR6O3.js";import"./index-BAMuu1mV.js";import"./Option-DaCvETte.js";import"./index-BrrdD8jw.js";import"./SegmentedButton-tNr2gkyL.js";import"./index-C329Ucmy.js";import"./Select-CaT0Uyc0.js";import"./InvisibleMessage-4YLx3Nor.js";import"./slim-arrow-down-CfkSdpPj.js";import"./index-CriRaI3g.js";import"./index-DYCg0rFm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-4F45alAB.js";import"./group-2-ChPXGWJ0.js";import"./sort-descending-CANJAVhZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Y-BADZTS.js";import"./utils-DSjF8HMp.js";import"./index-Cj12FuCk.js";import"./index-D6hI8QST.js";import"./index-Bk7OThpJ.js";import"./navigation-down-arrow-BqWqvXKw.js";import"./navigation-right-arrow-EEj5yORF.js";import"./navigation-right-arrow-lOLkkaQa.js";import"./useCurrentTheme-Cidp3UIH.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D1F5uvoT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dajtv9JX.js";import"./paper-plane-C6c1Gi-x.js";import"./index-DKHGOPrC.js";import"./less-TJfV8SH9.js";import"./index-X_VuPj-3.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
