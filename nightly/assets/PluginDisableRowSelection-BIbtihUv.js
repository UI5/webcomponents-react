import{j as e}from"./iframe-BiIJdVyr.js";import{useMDXComponents as n}from"./index--rLY9036.js";import{I as r,F as s}from"./CommandsAndQueries-D08-AnOE.js";import{M as l,C as a}from"./blocks-BFHpLm1y.js";import"./Tag-Bq1oXArm.js";import"./index-e3YpZRrx.js";import"./copy-BPqkJYr8.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BcEQ8L2G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-5WE_OvnW.js";import"./index-D-2Xy6-7.js";import"./index-DvsRYyu2.js";import"./Link-Bm6hDi5n.js";import"./index-CjEEWo15.js";import"./index-NQDiuZnO.js";import"./index-D5j3aFdB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSKVbp8f.js";import"./addCustomCSSWithScoping-syEQKqx0.js";import"./index-Dh7QOf24.js";import"./information-SSL8fTlY.js";import"./sys-enter-2-DpynL0zo.js";import"./alert-Cg_jUYoP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BKcuFWs0.js";import"./delete-DU5JPvil.js";import"./settings-CAMQwqmo.js";import"./NoData-CS9d_T0F.js";import"./IllustratedMessage-DUoAl3Os.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Dhw3wtOK.js";import"./index-BrXkRr4R.js";import"./index-B_5Bk2gc.js";import"./slim-arrow-down-SFAyp675.js";import"./Input-DGQILfbB.js";import"./ResponsivePopoverCommon.css-DHGIMiJp.js";import"./ValueStateMessage.css-BxEbM0ZH.js";import"./Suggestions.css-BMP_MqwS.js";import"./ListBoxItemGroupTemplate-DIeTn5uD.js";import"./ComboBoxItemGroup-zJxojY-y.js";import"./ListItemBaseTemplate-BNaOpv56.js";import"./Token-B7UTvzfg.js";import"./ScrollEnablement-elkrwhQK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ch3b8ATr.js";import"./ToggleButton-C3ZCJHYy.js";import"./SuggestionItem-S-IdKs5T.js";import"./index-BzcV6bM9.js";import"./Option-Cz8g5WWG.js";import"./index-CMaWI52k.js";import"./SegmentedButton-B381Bdph.js";import"./index-Ckl4FRii.js";import"./Select-C-GaGD0T.js";import"./InvisibleMessage-B6Ycx_Pm.js";import"./slim-arrow-down-BYajRtDR.js";import"./index-BfmQkxfZ.js";import"./index-CpUxheOc.js";import"./index-CMdYQA8p.js";import"./index-BzF6Y4F3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CPTMokL8.js";import"./group-2-04jHDyvg.js";import"./sort-descending-Og-hQ95c.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gpTxbnHr.js";import"./utils-DhSRaKWy.js";import"./index-jP1C0Meo.js";import"./index-DQqc6G4F.js";import"./index-DQIER8Qr.js";import"./navigation-down-arrow-CM77MDkP.js";import"./navigation-right-arrow-DuT2Agvz.js";import"./navigation-right-arrow-FD0mFBSd.js";import"./useCurrentTheme-DHGbHcPn.js";import"./index-BTuni5mo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-J8i0PIKg.js";import"./paper-plane-SEQuxJaq.js";import"./index-BRiU5eaI.js";import"./less-CwBaSYHB.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
