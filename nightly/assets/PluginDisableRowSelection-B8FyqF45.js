import{j as e}from"./iframe-BFGaT_FV.js";import{useMDXComponents as n}from"./index-CnhfjtvF.js";import{I as r,F as s}from"./CommandsAndQueries-B8JKM3km.js";import{M as l,C as a}from"./blocks-Dayk-WJV.js";import"./Tag-B8YEukqj.js";import"./index-DAwrSR1M.js";import"./copy-AGelM_Ll.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BerL1zlH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvUgbQCZ.js";import"./index-BlQFkuHY.js";import"./index-BZnNWwSk.js";import"./Link-BBvAtJ6F.js";import"./index-B9hLr1Bv.js";import"./index-Bf-TRwAv.js";import"./index-CaRZdhen.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYVZjLb4.js";import"./addCustomCSSWithScoping-B8FWovV5.js";import"./index-1UQ-4lhS.js";import"./information-Bz11YhFZ.js";import"./sys-enter-2-BSVZTuif.js";import"./alert-BaGtUWxL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DTmyScv0.js";import"./delete-v-dXAAIl.js";import"./settings-BOscvD9f.js";import"./NoData-gDQFgR3G.js";import"./IllustratedMessage-CDHVVzlP.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DA9fHCLR.js";import"./index-vKbE8tbN.js";import"./index-D7iYQuDO.js";import"./slim-arrow-down-Dd8YkBw-.js";import"./Input-Bmjprhie.js";import"./ResponsivePopoverCommon.css-6c8XaA5C.js";import"./ValueStateMessage.css-Bh1E9Ghj.js";import"./Suggestions.css-BTwMp3YW.js";import"./ListBoxItemGroupTemplate-undkDWdm.js";import"./ComboBoxItemGroup-OfkHN57U.js";import"./ListItemBaseTemplate-SnpzLXKW.js";import"./Token-CMJi_Rys.js";import"./ScrollEnablement-cAwpl98b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ccu5KVL2.js";import"./ToggleButton-CRoHXs7m.js";import"./SuggestionItem-DGnZQlbw.js";import"./index-Du7xx1dp.js";import"./Option-CdFGI1PC.js";import"./index-B0eNO-0P.js";import"./SegmentedButton-DCEuTMnH.js";import"./index-DKtUZxqJ.js";import"./Select-c6jnMs-7.js";import"./InvisibleMessage-CbPZDP3-.js";import"./slim-arrow-down-BdvQ_s0T.js";import"./index-jrrMCwgY.js";import"./index-Dl1PX_Mb.js";import"./index-Bs16yVYB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C7e9On5N.js";import"./group-2-Dl113zhQ.js";import"./sort-descending-qVZJ1324.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DJcIUy6q.js";import"./utils-B6_SaaJR.js";import"./index-DMziRRZN.js";import"./index-DyXpRQb6.js";import"./index-BH-J8zHs.js";import"./navigation-down-arrow-DItIrMRs.js";import"./navigation-right-arrow-CKSHLqK6.js";import"./navigation-right-arrow-C4wfpKAx.js";import"./useCurrentTheme-C8SqHROD.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bn2vXSX1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hb1ZDPhU.js";import"./paper-plane-DJjUVXFe.js";import"./index-DlH340EZ.js";import"./less-CUu-6yGw.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
