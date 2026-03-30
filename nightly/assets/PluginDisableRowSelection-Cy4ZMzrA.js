import{j as e}from"./iframe-Dr24b1_2.js";import{u as n,M as r,C as s}from"./blocks-DOkdIKLK.js";import{I as l}from"./CommandsAndQueries-D2RSxAeU.js";import"./Tag-BIxdINB7.js";import"./index-CL-oiXYR.js";import"./copy-D1SgAW06.js";import{F as a}from"./Footer-B2LKGocf.js";import"./PageNotFound-t4KH-Yk6.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CIs8KZqZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CG4ImuUx.js";import"./index-_maGeclj.js";import"./index-aTzn3I1m.js";import"./index-B_PGO6aF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dh4aGlp7.js";import"./addCustomCSSWithScoping-BCzlWLsZ.js";import"./index-VF4msgJe.js";import"./index-CjU6u75C.js";import"./index-DrqpZzSV.js";import"./information-C20uFQS0.js";import"./sys-enter-2-CQd_0MF7.js";import"./alert-B9PmGrag.js";import"./index-DcUuq1aq.js";import"./Illustrations-Dt9P8lxH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSeDtOFY.js";import"./delete-CTuwvNwN.js";import"./settings-D2zSFUQS.js";import"./NoData-BNUq2LAg.js";import"./NoFilterResults-C3EjDsD0.js";import"./index-DMGfqErw.js";import"./IllustratedMessage-DWcP1w35.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BBfVJLgm.js";import"./Input-irtd9wft.js";import"./ResponsivePopoverCommon.css-YJ26BxS_.js";import"./ValueStateMessage.css-BS498yF4.js";import"./Suggestions.css-DByIneIP.js";import"./ListBoxItemGroupTemplate-CrWVeqtk.js";import"./ComboBoxItemGroup-DfdSfqaL.js";import"./ListItemBaseTemplate-DeSJkaWA.js";import"./Token-DUD3s9-0.js";import"./ScrollEnablement-B1S99Wzm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4U2FtO3.js";import"./ToggleButton-BV0O-OUE.js";import"./multiselect-all-BFWwGBPs.js";import"./SuggestionItem-CjMIYdHg.js";import"./index-Be2SnvPr.js";import"./Option-BNc07i1m.js";import"./index-Dhr0uby_.js";import"./SegmentedButton-DIgm-PGW.js";import"./index-AylfCAiE.js";import"./Select-DUnUQvU_.js";import"./InvisibleMessage-gZ-HYpyf.js";import"./index-CbTWmPo9.js";import"./index-BAyOZzch.js";import"./index-DCFLXB0o.js";import"./index-CJOj_130.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CRhxLA-E.js";import"./group-2-eYTtZ8kH.js";import"./sort-descending-BQ3YJIaz.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BY-GjMmR.js";import"./utils-BXYFGvnm.js";import"./index-BiTc-6U3.js";import"./index-Bm6fGbEK.js";import"./index-CvsFmqac.js";import"./navigation-down-arrow-D1eVdFYB.js";import"./navigation-right-arrow-C_zepO0v.js";import"./navigation-right-arrow-BA43J9Vq.js";import"./useCurrentTheme-DxjT-4Tb.js";import"./index-DCaFjUpe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BcSpX-QV.js";import"./paper-plane-BEsK-8Qt.js";import"./index-BjDM9IYP.js";import"./less-DrUcv7lt.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(l,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,e.jsx(s,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function ze(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{ze as default};
