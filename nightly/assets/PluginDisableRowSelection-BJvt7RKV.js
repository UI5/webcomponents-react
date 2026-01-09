import{j as e}from"./iframe-DfIU3iRi.js";import{useMDXComponents as n}from"./index-BAUWkqwx.js";import{I as r,F as s}from"./CommandsAndQueries-CCvlfqZe.js";import{M as l,C as a}from"./blocks-DKKhajQJ.js";import"./Tag-CF4VAGn3.js";import"./index-_jZ5OE_X.js";import"./copy-C8IsFnQF.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-ByNHvu_e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoTITwqN.js";import"./index-CqJNVQT5.js";import"./index-dA_mFJJw.js";import"./Link-C-uHXK5B.js";import"./index-CIxyPlXE.js";import"./index-YCl-_jCh.js";import"./index-BGfN_eSt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ohosJA7I.js";import"./addCustomCSSWithScoping-CtydAM5n.js";import"./index-DeDDTWfB.js";import"./information-BagB6Da7.js";import"./sys-enter-2-BiNE0Ouk.js";import"./alert-2mu58sd7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-KGpbhBBx.js";import"./delete-8D9Xq0f6.js";import"./settings-BAe5CL2m.js";import"./NoData-CxWdAvqb.js";import"./IllustratedMessage-Bd_r2vYm.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-m6ySQsFp.js";import"./index-BG5NLI_b.js";import"./index-B19xXjjm.js";import"./slim-arrow-down-Bb-YtPMU.js";import"./Input-CqjsZhK9.js";import"./ResponsivePopoverCommon.css-Cy1wPIS3.js";import"./ValueStateMessage.css-BAxRfhDW.js";import"./Suggestions.css-DueDNo8O.js";import"./ListBoxItemGroupTemplate-BTtpw6gO.js";import"./ComboBoxItemGroup-DWq0dbqq.js";import"./ListItemBaseTemplate-DI00QP8t.js";import"./Token-Nuc1IURe.js";import"./ScrollEnablement-aPqXwvy5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhaZK_FW.js";import"./ToggleButton-Ch3-84nC.js";import"./SuggestionItem-BSPqvPH_.js";import"./index-CBK8lcqF.js";import"./Option-FqdINU15.js";import"./index-Dn2WB7u1.js";import"./SegmentedButton-1X7EzAS8.js";import"./index-jyVCXScg.js";import"./Select-CiT-nASS.js";import"./InvisibleMessage-7vjgfI66.js";import"./slim-arrow-down-DX1xgdpR.js";import"./index-l4yRj4An.js";import"./index-Cx3lK-My.js";import"./index-CGx2oPX9.js";import"./index-DOZNbDJp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CD2G-MzG.js";import"./group-2-fP7CGRh_.js";import"./sort-descending-pMOdjws6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5yWugzz.js";import"./utils-CLitdEJM.js";import"./index-D2jxXTUw.js";import"./index-Be52d92g.js";import"./index-CZUYrYNt.js";import"./navigation-down-arrow-CENkI8Ff.js";import"./navigation-right-arrow-Dmj1kZCH.js";import"./navigation-right-arrow-CxtfgXb_.js";import"./useCurrentTheme-Ci0pxYcB.js";import"./index-CGK5XLKa.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BiwRRP9a.js";import"./paper-plane-CAQIfZrW.js";import"./index-C_6378zF.js";import"./less-DoffisFq.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
