import{j as e}from"./iframe-CDMw3QW7.js";import{useMDXComponents as n}from"./index-B1OHiQPx.js";import{I as r,F as s}from"./CommandsAndQueries-DKYp_Jx5.js";import{M as l,C as a}from"./blocks-CUd96uRM.js";import"./Tag-CRCkHgPM.js";import"./index-BFHtg5w_.js";import"./copy-4Dlt6M0w.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CzQ3gixW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjzhAhn4.js";import"./index-QTO9fIyh.js";import"./index-y4pjeQFW.js";import"./Link-fH9wonJ-.js";import"./index-CFg6tGep.js";import"./index-zPaFBXP5.js";import"./index-NVXyFLUS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzgD7Za_.js";import"./addCustomCSSWithScoping-DWGH2XNZ.js";import"./index-CEKogKIQ.js";import"./information-DcnFOD7I.js";import"./sys-enter-2-Bq9738ZR.js";import"./alert-DgZ_z3Yp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-_qD1WAd3.js";import"./delete-DNEaNq2f.js";import"./settings-BzU3TjJh.js";import"./NoData-DO1SL0Xr.js";import"./IllustratedMessage-BJlEMque.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-D7b8dZpx.js";import"./index-CynnG9Ci.js";import"./index-BYJZ9-3j.js";import"./slim-arrow-down-BVsyizBr.js";import"./Input-De2rvuDr.js";import"./ResponsivePopoverCommon.css-D0k6m-Zp.js";import"./ValueStateMessage.css-Bv8RNI0z.js";import"./Suggestions.css-DMqc0-b9.js";import"./ListBoxItemGroupTemplate-8qDrl8tU.js";import"./ComboBoxItemGroup-D_qJnzJt.js";import"./ListItemBaseTemplate-BYc7j03k.js";import"./Token-CNf8IzFD.js";import"./ScrollEnablement-CTahNy0C.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C-68iD6i.js";import"./ToggleButton-mgZ_PBA1.js";import"./SuggestionItem-BerFBPyF.js";import"./index-B39rHfMI.js";import"./Option-DvZvNvkk.js";import"./index-Du2TWHEP.js";import"./SegmentedButton-Bc6T5ns7.js";import"./index-D7WlgBg9.js";import"./Select-DYlZ5_OK.js";import"./InvisibleMessage-B9339qwC.js";import"./slim-arrow-down-BSiLed2R.js";import"./index-QjSsixDk.js";import"./index-2tw6FyW6.js";import"./index-DU7qbp-g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CbmUmzER.js";import"./group-2-vVU2oJMN.js";import"./sort-descending-BzMUOuiJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-jYJsNqp7.js";import"./utils-ebGiQ-Xy.js";import"./index-D5bKrwpZ.js";import"./index-DTK7HHyN.js";import"./index-BEQ_zuJ6.js";import"./navigation-down-arrow-ZN-BcGN6.js";import"./navigation-right-arrow-DJvSCvps.js";import"./navigation-right-arrow-CnrgcZ8b.js";import"./useCurrentTheme-C7nv2rCg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrIDs3N6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dg3vz_6v.js";import"./paper-plane-SFR-N42C.js";import"./index-wyxekrjG.js";import"./less-CfFvE_i7.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
