import{j as e}from"./iframe-D-TNtC6A.js";import{useMDXComponents as n}from"./index-DDfPSZgy.js";import{I as r}from"./CommandsAndQueries-CCy8Y-No.js";import{M as s,C as l}from"./blocks-RldXLLlr.js";import"./Tag-CVmCoWT_.js";import"./index-PDZqoB_N.js";import"./copy-BJeubdCo.js";import{F as a}from"./Footer-DhOHIb5E.js";import"./PageNotFound-CRTwOHot.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C7rivsvq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BGCjF1qN.js";import"./index-C2w-vlt1.js";import"./index-BDllvg-C.js";import"./index-DbrfUFZo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CV5eSmfw.js";import"./addCustomCSSWithScoping-5_2YlXdt.js";import"./index-C4n54s66.js";import"./index-DA9C_9_K.js";import"./index-dgee814-.js";import"./information-DHrVSqd8.js";import"./sys-enter-2-B-IKKoin.js";import"./alert-COQE9Wii.js";import"./index-dI-i4srq.js";import"./Illustrations-MW4Ztj5J.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-MyDeBWpT.js";import"./delete-GPaEZE8g.js";import"./settings-Bb5Mx7xn.js";import"./NoData-B9h6w7Zz.js";import"./NoFilterResults-Bp3EjNTS.js";import"./index-BKgssG5g.js";import"./IllustratedMessage-B2Q7MVnn.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-e_Mdpfp_.js";import"./Input-BXBWRRsA.js";import"./ResponsivePopoverCommon.css-BXn4_Wc7.js";import"./ValueStateMessage.css-B4_y8RjA.js";import"./Suggestions.css-hnx4n1TH.js";import"./ListBoxItemGroupTemplate-BIw1VxCq.js";import"./ComboBoxItemGroup-aVMq34XM.js";import"./ListItemBaseTemplate-B0alOYy7.js";import"./Token-4VyHLU6r.js";import"./ScrollEnablement-D_mv-5V2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DuzTgsRf.js";import"./ToggleButton-CkF3MXn8.js";import"./multiselect-all-B9XzavJM.js";import"./SuggestionItem-COYhuiQ9.js";import"./index-BKVW7RHH.js";import"./Option-CbSicczt.js";import"./index-uAzDHEjW.js";import"./SegmentedButton-f-Cay0kn.js";import"./index-DNu777W2.js";import"./Select-DVELUtat.js";import"./InvisibleMessage-BWPPhSeN.js";import"./index-D5UP9jEd.js";import"./index-Ct1p6vuk.js";import"./index-Bb90VLCU.js";import"./index-ptWDqsta.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cfh1ZJNO.js";import"./group-2-y-iu2VRM.js";import"./sort-descending-BM0MkbBg.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BLX5GUEm.js";import"./utils-DVfFMzf7.js";import"./index-DnoKZWri.js";import"./index-pc0DCYF4.js";import"./index-BZfHb_PP.js";import"./navigation-down-arrow-B34ZUBu8.js";import"./navigation-right-arrow-BqgU6zlC.js";import"./navigation-right-arrow-CHS2kQ0a.js";import"./useCurrentTheme-BMG4HH6K.js";import"./index-BFc7Am7o.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-2x73p0EG.js";import"./paper-plane-BOmm5Qav.js";import"./index-BebXPfBu.js";import"./less-BWi_dI9N.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
