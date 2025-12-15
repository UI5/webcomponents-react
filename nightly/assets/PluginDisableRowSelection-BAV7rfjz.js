import{j as e}from"./iframe-BVsLYlhe.js";import{useMDXComponents as n}from"./index-DavU5a3Y.js";import{I as r,F as s}from"./CommandsAndQueries-Bi9b4xK_.js";import{M as l,C as a}from"./blocks-BwdcnqOn.js";import"./Tag-CNJ-l2ra.js";import"./index-Chy_S0qP.js";import"./copy-hvSX-Foh.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DCSA0DE3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBlqkBew.js";import"./index-CppXcbvf.js";import"./index-CQv5SAoi.js";import"./Link-mimmL_0g.js";import"./index-pqTqdxQB.js";import"./index-bVRMu9zO.js";import"./index-2NXGICNv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dhuu23v1.js";import"./addCustomCSSWithScoping-CKzpaFfQ.js";import"./index-BZsG0oyU.js";import"./information-Q1gDT6BU.js";import"./sys-enter-2-CVfnD9eL.js";import"./alert-BQuV4PvU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Be_omCvA.js";import"./delete-wM7iGzUT.js";import"./settings-DUTgYsHz.js";import"./NoData-BP3lBXbm.js";import"./IllustratedMessage-DOGBzg3t.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dg1Tep4f.js";import"./index-C1WMOxlR.js";import"./index-CVk9SmTz.js";import"./slim-arrow-down-DhCWTPrz.js";import"./Input-B1h80Qke.js";import"./ResponsivePopoverCommon.css-uHz60RXl.js";import"./ValueStateMessage.css-BGnf7WuL.js";import"./Suggestions.css-BC296_76.js";import"./ListBoxItemGroupTemplate-C4BIIOjO.js";import"./ComboBoxItemGroup-CL94Ym8W.js";import"./ListItemBaseTemplate-DTp4ZwAc.js";import"./Token-D0KaAyb8.js";import"./ScrollEnablement-OBzjrUFw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MnW36ayG.js";import"./ToggleButton-CfDtgg4F.js";import"./SuggestionItem-B4pYo2Xh.js";import"./index-DtvHgBUt.js";import"./Option-BmneA1aN.js";import"./index-MoN8cciG.js";import"./SegmentedButton-CZ9H8jJT.js";import"./index-CPMcUc-n.js";import"./Select-B9O7SbWK.js";import"./InvisibleMessage-COd6vRv-.js";import"./slim-arrow-down-CyFYuexk.js";import"./index-ytFospDP.js";import"./index-MqiJoXt5.js";import"./index-CeMerd7K.js";import"./index-BSHqwN58.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CpwTCgMq.js";import"./group-2-BQbBlrd5.js";import"./sort-descending-ABbRNgKt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHnVQWJI.js";import"./utils-DKALz9nY.js";import"./index-c_PF86vB.js";import"./index-BG1NckKa.js";import"./index-JsVdJQMp.js";import"./navigation-down-arrow-BBbnWEl3.js";import"./navigation-right-arrow-Dv-Qzlpb.js";import"./navigation-right-arrow-DLSHU6Nw.js";import"./useCurrentTheme-DSoyNXre.js";import"./index-Cufgt29f.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzejkbSx.js";import"./paper-plane-CXb4AHwo.js";import"./index-DZtB4CEv.js";import"./less-8xYh8vLI.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
