import{j as e}from"./iframe-CptD6jcI.js";import{useMDXComponents as n}from"./index-fCXI9bYA.js";import{I as r,F as s}from"./CommandsAndQueries-DdKyoCdZ.js";import{M as l,C as a}from"./blocks-BIcH59f6.js";import"./Tag-BGUo9GB2.js";import"./index-iKMFJQaw.js";import"./copy-B9_rc4hl.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-v-kHc7hB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEYNy4qZ.js";import"./index-CBzPckl1.js";import"./index-Bhv4kUG7.js";import"./Link-BtaWbEJj.js";import"./index-CDMlRbU-.js";import"./index-B4fjS4Ci.js";import"./index-DUbGwyGv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqdlCgb.js";import"./addCustomCSSWithScoping-CNZcQBPm.js";import"./index-DF7XtlGw.js";import"./information-_8TOion-.js";import"./sys-enter-2-etHRmL56.js";import"./alert-DCc-ugqC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-_nfci7qO.js";import"./delete-CqONTPqs.js";import"./settings-DF-HP63C.js";import"./NoData-BQSzbPps.js";import"./IllustratedMessage-CgDjDEGv.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-hamlRjSE.js";import"./index-BD9r_une.js";import"./index-B60KVWKq.js";import"./slim-arrow-down-CjyrJWSM.js";import"./Input-uZgu1ujO.js";import"./ResponsivePopoverCommon.css-rLzLw65f.js";import"./ValueStateMessage.css-DacNSHpQ.js";import"./Suggestions.css-B1EVfhUM.js";import"./ListBoxItemGroupTemplate-BdVPyN1a.js";import"./ComboBoxItemGroup-DQ9b49px.js";import"./ListItemBaseTemplate-BppEr7SM.js";import"./Token-DpzwIFjG.js";import"./ScrollEnablement-DsrN78gg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYou9xin.js";import"./ToggleButton-BYYpa0_F.js";import"./SuggestionItem-C3L5PqbA.js";import"./index-Dah3OHlr.js";import"./Option-B6yV-Jjr.js";import"./index-C08PuBfi.js";import"./SegmentedButton-DLbXClyD.js";import"./index-BXswR0kA.js";import"./Select-Ctxh64Gj.js";import"./InvisibleMessage-F5htpLuT.js";import"./slim-arrow-down-BhV5Za_4.js";import"./index-Ci5kiTSu.js";import"./index-DbSLMhUs.js";import"./index-CTEd5I50.js";import"./index-BEEcV9zs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIq8q0V6.js";import"./group-2-CTSXlyDl.js";import"./sort-descending-D9jCbvYd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B0X8RYMV.js";import"./utils-gfG7vEZf.js";import"./index-CQoZ2SPB.js";import"./index-C5BgkxDg.js";import"./index-WVMq7O5Z.js";import"./navigation-down-arrow-DIeKF41M.js";import"./navigation-right-arrow-De_U2AQE.js";import"./navigation-right-arrow-DmOKdOeg.js";import"./useCurrentTheme-57gAgJUu.js";import"./index-uc7d53g3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-TxWHwyVI.js";import"./paper-plane-DAA1Wpfz.js";import"./index-O4n5RQLI.js";import"./less-C9e-TmeG.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
