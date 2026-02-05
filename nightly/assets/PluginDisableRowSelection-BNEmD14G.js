import{j as e}from"./iframe-jDeV-G8S.js";import{useMDXComponents as n}from"./index-Da3DrjVc.js";import{I as r,F as s}from"./CommandsAndQueries-S46eotFY.js";import{M as l,C as a}from"./blocks-BVLmp_0m.js";import"./Tag-CoiXaVSg.js";import"./index-DNzR_fzc.js";import"./copy-DEHDDsgd.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B7xLL4Vz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYm7h2BG.js";import"./index-DJMOMMru.js";import"./index-BZOVbKF_.js";import"./Link-C8Q8wVMF.js";import"./index-DhmB-gDR.js";import"./index-GOQBvCdy.js";import"./index--p5n_M0a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeVQuTnR.js";import"./addCustomCSSWithScoping-DNXKFIA9.js";import"./index-C8jlh6dJ.js";import"./information-CBKKlcN3.js";import"./sys-enter-2-D5f8NC37.js";import"./alert-Dk2Mtfik.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BaSB_xVI.js";import"./delete-C6VclcYK.js";import"./settings-C7QaHLBi.js";import"./NoData-B5IMrlNi.js";import"./IllustratedMessage-DYUp67Ci.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BraCc1Gf.js";import"./index-D8qN7Hry.js";import"./index-CnvfagGK.js";import"./slim-arrow-down-Vg8N0Q0I.js";import"./Input-oPDKy1ol.js";import"./ResponsivePopoverCommon.css-DpB6CavY.js";import"./ValueStateMessage.css-uRbauoI5.js";import"./Suggestions.css-DiV-Lfrn.js";import"./ListBoxItemGroupTemplate-C5UVYOIE.js";import"./ComboBoxItemGroup-DdLskjQz.js";import"./ListItemBaseTemplate-DG9IXdA-.js";import"./Token--hjAUxWq.js";import"./ScrollEnablement-BysKsuQY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BiM6YtfZ.js";import"./ToggleButton-cMq8je7X.js";import"./SuggestionItem-e6KTrnLc.js";import"./index-CECiZ_Xv.js";import"./Option-CReekOMZ.js";import"./index-DgdfTx4u.js";import"./SegmentedButton-BUR6TsSQ.js";import"./index-BchHiesQ.js";import"./Select-CMirSOvH.js";import"./InvisibleMessage-CSYFI2hH.js";import"./slim-arrow-down-BnGG1iQc.js";import"./index-3NCdG4IQ.js";import"./index-CBPksq_0.js";import"./index-dvlsjgN4.js";import"./index-B7d4NHtR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CabphWI6.js";import"./group-2-YQpUAD-P.js";import"./sort-descending-DyAgXLO6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DSO1X3Eq.js";import"./utils-DijlQhLT.js";import"./index-CTR4qlZZ.js";import"./index-BGQ0DLLD.js";import"./index-CU2qxjFI.js";import"./navigation-down-arrow-CQCklFQ2.js";import"./navigation-right-arrow-BoiqaSPb.js";import"./navigation-right-arrow-Bc8erDMC.js";import"./useCurrentTheme-df9ByhFB.js";import"./index-CGu9uvTR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsxwMa2U.js";import"./paper-plane-C0TXry-l.js";import"./index-BhxN8tHb.js";import"./less-CBiR1zC0.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
