import{j as e}from"./iframe-B5_Arj0w.js";import{useMDXComponents as n}from"./index-C5nExjBH.js";import{I as r,F as s}from"./CommandsAndQueries-DVJBDd6t.js";import{M as l,C as a}from"./blocks-COnGRWLL.js";import"./Tag-BJnasszI.js";import"./index-c-guL6iQ.js";import"./copy-C_i6TFMR.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B6zTvUBL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHuFfOWM.js";import"./index-BNDO-MHt.js";import"./index-B-64gK_m.js";import"./Link-DYcelBM6.js";import"./index-D9R5EBek.js";import"./index-C4ir_qvG.js";import"./index-NifsWW0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hIZvC53N.js";import"./addCustomCSSWithScoping-C5sFpCeo.js";import"./index-lFnbjF6s.js";import"./information-DnWQdbsO.js";import"./sys-enter-2-yT9c6yra.js";import"./alert-B0if0F-6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BfZJKBBk.js";import"./delete-B0k5SoPa.js";import"./settings-CEZkvwiT.js";import"./NoData-TnmYPaTe.js";import"./IllustratedMessage-Pyyhq7i4.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-Crtjw6Ie.js";import"./index-DL_kEw3q.js";import"./index-BJO60ncP.js";import"./slim-arrow-down-B_ZZxhZi.js";import"./Input-dtfIQ9En.js";import"./ResponsivePopoverCommon.css-BaIUyRPn.js";import"./ValueStateMessage.css-FKtIDJ6e.js";import"./Suggestions.css-CvyngWyE.js";import"./ListBoxItemGroupTemplate-DX1d3MVt.js";import"./ComboBoxItemGroup-DUNfQCSb.js";import"./ListItemBaseTemplate-DnikLjhF.js";import"./Token-CLtAw8SN.js";import"./ScrollEnablement-B0UmA8Q7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DptIuS1G.js";import"./ToggleButton-Dk6-JMzR.js";import"./SuggestionItem-BoLnIMah.js";import"./index-JVP23Nt2.js";import"./Option-jQ3brhrk.js";import"./index-bDRO2Yo2.js";import"./SegmentedButton-vIkq0NWc.js";import"./index-B3V8m3Ru.js";import"./Select-BR3ay0RO.js";import"./InvisibleMessage-sZXGuSEY.js";import"./slim-arrow-down-DW1b3FK1.js";import"./index-CisKw1tN.js";import"./index-BxnGFP9n.js";import"./index-Swjw5_n1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-fQ0HnAda.js";import"./group-2-CbrtzKL6.js";import"./sort-descending-DHn8DLBR.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DQwoKVw1.js";import"./utils-DUxK_zar.js";import"./index-QxbrwzJE.js";import"./index-C2-WeBJA.js";import"./index-w_d8t2Pc.js";import"./navigation-down-arrow-DVKMSsJc.js";import"./navigation-right-arrow-DtDmCQPg.js";import"./navigation-right-arrow-gdBHzM4T.js";import"./useCurrentTheme-xB5_C0Ve.js";import"./IndicationColor-DVw-fSM_.js";import"./index-oO4NGnOE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DJ1G2XQE.js";import"./paper-plane-B5hJlgX3.js";import"./index-E1h56ucZ.js";import"./less-DvXH47xF.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
