import{j as e}from"./iframe-D5yYeuyx.js";import{useMDXComponents as n}from"./index-OOr887th.js";import{I as r,F as s}from"./CommandsAndQueries-CJKRIq4o.js";import{M as l,C as a}from"./blocks-BwZUgw5J.js";import"./Tag-BZtJl-N7.js";import"./index-DJODyOkI.js";import"./copy-BbBddowJ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-zKKdy0iz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cu6PwiO-.js";import"./index-CWkadQ1i.js";import"./index-BMwlOPBB.js";import"./Link-DSfaPzX5.js";import"./index-BiamOLpW.js";import"./index-n-gjro57.js";import"./index-DFcCzRoG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IcjKSza1.js";import"./addCustomCSSWithScoping-DupGCqhX.js";import"./index-pGOyFusy.js";import"./information-CqfzA4ZI.js";import"./sys-enter-2-Cgd8Rk78.js";import"./alert-uMczVQtd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DkUAlph4.js";import"./delete-CEb_JUXh.js";import"./settings-BPkYZfgY.js";import"./NoData-BiDCs0cr.js";import"./IllustratedMessage-D3a58_2V.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BgGEjG58.js";import"./index-CWuQ_FvE.js";import"./index-DDrT2lBD.js";import"./slim-arrow-down-DAbWlapP.js";import"./Input-CRG5JTiB.js";import"./ResponsivePopoverCommon.css-DosOvkrc.js";import"./ValueStateMessage.css-CmY2G9nX.js";import"./Suggestions.css-Cc7CIEcc.js";import"./ListBoxItemGroupTemplate-DfKADDdU.js";import"./ComboBoxItemGroup-Dtfv3_LL.js";import"./ListItemBaseTemplate-BYWJKvpu.js";import"./Token-KEywEoQK.js";import"./ScrollEnablement-9NyzND_c.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CXdrrYCn.js";import"./ToggleButton-ByrGi9fF.js";import"./SuggestionItem-DdDeQX3D.js";import"./index-DbKnZ7JU.js";import"./Option-CW9CutXR.js";import"./index-Cm_JNiA3.js";import"./SegmentedButton-DDilHdoL.js";import"./index-BpQt5OEf.js";import"./Select-DaSCiKmk.js";import"./InvisibleMessage-Cl3WTIpJ.js";import"./slim-arrow-down-BglCXS9Y.js";import"./index-BBvERRAI.js";import"./index-AQwE40sw.js";import"./index-Co3Z1GWi.js";import"./index-6QK4Io4Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6eoyLEr.js";import"./group-2-ATO8Q-wL.js";import"./sort-descending-BXHZWD30.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CdNe_oTn.js";import"./utils-CLQPrml8.js";import"./index-Dh_vIy7-.js";import"./index-QBbEu3vQ.js";import"./index-D4p2SSM5.js";import"./navigation-down-arrow-CLdsbi01.js";import"./navigation-right-arrow-CqvRZAjQ.js";import"./navigation-right-arrow-DgZ7r_GQ.js";import"./useCurrentTheme-Czjolaja.js";import"./index-BwEGatY_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0KPyHmS.js";import"./paper-plane-B3JfZYpI.js";import"./index-CBYgCKNh.js";import"./less-BnTb-LS4.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
