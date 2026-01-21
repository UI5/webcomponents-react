import{j as e}from"./iframe-DYduXZhN.js";import{useMDXComponents as n}from"./index-Ci2-DdjO.js";import{I as r,F as s}from"./CommandsAndQueries-B9zetcQ0.js";import{M as l,C as a}from"./blocks-D9jMBEgy.js";import"./Tag-DIRdIcZz.js";import"./index-BOwVehE_.js";import"./copy-CkIF2sdc.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-74PDq_gz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cz134k4C.js";import"./index-9BFlmr8a.js";import"./index-C__H6VdM.js";import"./Link-BLFGRSbE.js";import"./index-BEkPqhUo.js";import"./index-BT55sXhr.js";import"./index-CrQhdGHw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tYCFSQM4.js";import"./addCustomCSSWithScoping-BvPW-C09.js";import"./index-DKd7eJ-2.js";import"./information-B4rZhRQI.js";import"./sys-enter-2-DdBtSqFS.js";import"./alert-Cbu3hZ-F.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-YqJDFM.js";import"./delete-BhUVbshM.js";import"./settings-DiEqNda9.js";import"./NoData-fSQ8QY6w.js";import"./IllustratedMessage-GpqfpasN.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B4kU78En.js";import"./index-Dkmz5osx.js";import"./index-DNLW7KKj.js";import"./slim-arrow-down-H6l6KWk5.js";import"./Input-DiOUIPji.js";import"./ResponsivePopoverCommon.css-5MnX9a2f.js";import"./ValueStateMessage.css-CRVtIysz.js";import"./Suggestions.css-BpvHNpy2.js";import"./ListBoxItemGroupTemplate-oWfZlc9k.js";import"./ComboBoxItemGroup-DKe0CAMl.js";import"./ListItemBaseTemplate-CAPQp5OP.js";import"./Token-DUgpBRII.js";import"./ScrollEnablement-D2gDebhQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-9qFWIUAt.js";import"./ToggleButton-DR-nlpgN.js";import"./SuggestionItem-CItgEz1T.js";import"./index-CGtEX1sV.js";import"./Option-Bong0I0_.js";import"./index-BCAebvTY.js";import"./SegmentedButton-BeGYrA28.js";import"./index-DHZh-84u.js";import"./Select-B59U1EMA.js";import"./InvisibleMessage-CT9yNbI0.js";import"./slim-arrow-down-BYh391LH.js";import"./index-DyOJGLZJ.js";import"./index-DrTZRfXS.js";import"./index-O9rzWAvd.js";import"./index-CbCDMDkJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-rv_pgNJ1.js";import"./group-2-BHhMM04u.js";import"./sort-descending-CmaZ1coo.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-mONp3tq9.js";import"./utils-BL2UvDbB.js";import"./index-DDCVZ4U5.js";import"./index-B3nHK15S.js";import"./index-DqaC_Ony.js";import"./navigation-down-arrow-0eA3UtLx.js";import"./navigation-right-arrow-0ntcsXEn.js";import"./navigation-right-arrow-CliMCU6T.js";import"./useCurrentTheme-DjznpaYd.js";import"./index-D6qhpAxp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRb5-qWs.js";import"./paper-plane-DqQwF7l0.js";import"./index-5cPAQ8_K.js";import"./less-EjJ2vttw.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
