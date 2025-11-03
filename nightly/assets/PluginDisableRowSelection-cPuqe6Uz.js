import{j as e}from"./iframe-DYmejECO.js";import{useMDXComponents as n}from"./index-9gDZjqLB.js";import{I as r,F as s}from"./CommandsAndQueries-BUFKZ5oS.js";import{M as l,C as a}from"./blocks-WpvHKkxz.js";import"./Tag-BqbQuhLk.js";import"./index-B5pjKVih.js";import"./copy-Za-_Z-Tq.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dqndnsq3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtSXtxpp.js";import"./index-Cq6cdgcL.js";import"./index-D_-3_YTN.js";import"./Link-FVvXEWOc.js";import"./index-CQOsAJId.js";import"./index-B1aVKp_Z.js";import"./index-CHQEcSbZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6DutTHa.js";import"./addCustomCSSWithScoping-DW_smYaa.js";import"./index-E0O-rqDf.js";import"./information-DDszVPcm.js";import"./sys-enter-2-DGk9QDRk.js";import"./alert-B5ckm3Ge.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DBUOFfUF.js";import"./delete-CTZTKHWL.js";import"./settings-WjdBxW6C.js";import"./NoData-BJ0nX3_H.js";import"./IllustratedMessage-7-uYQkyZ.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CI6WTuUW.js";import"./index-B-CyWBp1.js";import"./index-CS6sH5Sy.js";import"./slim-arrow-down-BbgvtXR1.js";import"./Input-D3eSQpEN.js";import"./ResponsivePopoverCommon.css-CmjvYdZX.js";import"./ValueStateMessage.css-CUuHv4id.js";import"./Suggestions.css-CuvdJ8X6.js";import"./ListBoxItemGroupTemplate-4YjvPL6O.js";import"./ComboBoxItemGroup-CFEGhyle.js";import"./ListItemBaseTemplate-Fr0aNkev.js";import"./Token-B3KLY-_e.js";import"./ScrollEnablement-Dr9XQj7e.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-_Mx3JoTx.js";import"./ToggleButton-CXlL9fKv.js";import"./SuggestionItem-C7BSUng4.js";import"./index-B76y_UKV.js";import"./Option-Bea2riBZ.js";import"./index-DlTkKaiO.js";import"./SegmentedButton-CV7f3Z1-.js";import"./index-BZOk0oAR.js";import"./Select-B_CaPd95.js";import"./InvisibleMessage-goreZJqY.js";import"./slim-arrow-down-Ce0kb6v-.js";import"./index-DKdmNSnc.js";import"./index-D5TJ92nf.js";import"./index-cYgTFA9L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D7jAZBjp.js";import"./group-2-COqIM_cV.js";import"./sort-descending-CoPut5E-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUdvcpQW.js";import"./utils-g0fn1CkI.js";import"./index-CRr32CDK.js";import"./index-CDV5VZBY.js";import"./index-H9t-i14p.js";import"./navigation-down-arrow-C1ddotBT.js";import"./navigation-right-arrow-Ca-BUU1v.js";import"./navigation-right-arrow-D7Z03VwH.js";import"./useCurrentTheme-BGTNx-Lj.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DI1P8mhv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BWt4ksXr.js";import"./paper-plane-DMt5qfQg.js";import"./index-B8Foa8Pz.js";import"./less-D_PUL5W3.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
