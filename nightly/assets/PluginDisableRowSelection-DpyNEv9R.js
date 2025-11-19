import{j as e}from"./iframe-DNMTfzpK.js";import{useMDXComponents as n}from"./index-BN2xRXE4.js";import{I as r,F as s}from"./CommandsAndQueries-p_oo0qut.js";import{M as l,C as a}from"./blocks-D7TGtWIi.js";import"./Tag-DMQsT8Q8.js";import"./index-T3fFkT4y.js";import"./copy-mCRNeeck.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-8GxD6bLE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-c_AmigIx.js";import"./index-B8yoe6T_.js";import"./index-3Dfb5Jbe.js";import"./Link-QK9m66TA.js";import"./index-CijDEz0A.js";import"./index-BmIqw6uo.js";import"./index-BXvVq-3Z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdXxvAEF.js";import"./addCustomCSSWithScoping-DGsOsNkK.js";import"./index-BVaTbyf5.js";import"./information-CfBdub9z.js";import"./sys-enter-2-D1yMqvha.js";import"./alert-ovSFIgO_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DVxNklXG.js";import"./delete-Bs_1Tn7y.js";import"./settings-yHuNvmRk.js";import"./NoData-CJ4fcNDV.js";import"./IllustratedMessage-DfVKbqiE.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DpgZmO3w.js";import"./index-BmyEQvU7.js";import"./index-C2f-DWtU.js";import"./slim-arrow-down-BeqBYoq7.js";import"./Input-D7FScK-r.js";import"./ResponsivePopoverCommon.css-BpovPhMy.js";import"./ValueStateMessage.css-jWH0iavP.js";import"./Suggestions.css-DVP1hS77.js";import"./ListBoxItemGroupTemplate-Ba2zWDfe.js";import"./ComboBoxItemGroup-BN1s9s3b.js";import"./ListItemBaseTemplate-mKi-cdJU.js";import"./Token-DJAtCUlu.js";import"./ScrollEnablement-eCP2Kegn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBFY19dC.js";import"./ToggleButton-DJDuyAgn.js";import"./SuggestionItem-Bgn_dqvA.js";import"./index-BYqQmGne.js";import"./Option-BWgO6mlW.js";import"./index-BwS7j3IJ.js";import"./SegmentedButton-tiebVN4C.js";import"./index-BcZz7Rtp.js";import"./Select-nYImCzGD.js";import"./InvisibleMessage-BAVpRLuQ.js";import"./slim-arrow-down-BINXR2kD.js";import"./index-DZaQ5P9X.js";import"./index-HBZBsTho.js";import"./index-B_xleZYk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCGyTjP8.js";import"./group-2-Ds3ldsuu.js";import"./sort-descending-B9wZIYmD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DrCxDrAT.js";import"./utils-PFbfoLst.js";import"./index-Cg0CgaE2.js";import"./index-Du0vGDLV.js";import"./index-B0pESpyZ.js";import"./navigation-down-arrow-B9yi9Vw4.js";import"./navigation-right-arrow-BuY4QW3G.js";import"./navigation-right-arrow-Do9NQWHs.js";import"./useCurrentTheme-CRXvomUG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ChmvSx0O.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CveHlrIa.js";import"./paper-plane-BV9fKxBA.js";import"./index-CeaY2sRv.js";import"./less-DalUIm1-.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
