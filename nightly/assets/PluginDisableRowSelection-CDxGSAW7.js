import{j as e}from"./iframe-Dl0DWg8M.js";import{useMDXComponents as n}from"./index-Dunz3Qkg.js";import{I as r,F as s}from"./CommandsAndQueries-DcyHQWO5.js";import{M as l,C as a}from"./blocks-z5J1zZs0.js";import"./Tag-8UYUnG7U.js";import"./index-CIa6NQE1.js";import"./copy-BhfJfLSX.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BP0LJa49.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qDCkQVmj.js";import"./index-ClreWoEe.js";import"./index-fJlTqGLz.js";import"./Link-C2qcQY2b.js";import"./index-BtW57M3z.js";import"./index-DfHOwcie.js";import"./index-D98fiUtL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8jMVyWi.js";import"./addCustomCSSWithScoping-BtXYUpmM.js";import"./index-9_QD_94O.js";import"./information-0V3r1Ig4.js";import"./sys-enter-2-CxUk-uXZ.js";import"./alert-DWaZJdGL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DBsgvEJ8.js";import"./delete-DGhfhmvk.js";import"./settings-CCzCjc89.js";import"./NoData-DT7qf48U.js";import"./IllustratedMessage-CVhrLvam.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BPMHFkT9.js";import"./index-BJ5kqzUP.js";import"./index-BM2p53hS.js";import"./slim-arrow-down-WKx_RP1p.js";import"./Input-CPjqrIGm.js";import"./ResponsivePopoverCommon.css-BqUqASX7.js";import"./ValueStateMessage.css-BGdDzFrr.js";import"./Suggestions.css-u0KnI28S.js";import"./ListBoxItemGroupTemplate-BNIvrjxP.js";import"./ComboBoxItemGroup-BW8olXBy.js";import"./ListItemBaseTemplate-B4z_JR0H.js";import"./Token-B6us6uKB.js";import"./ScrollEnablement-DpTukKXY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cdf08mTY.js";import"./ToggleButton-thsHvfvo.js";import"./SuggestionItem-DTQvckjF.js";import"./index-ELus8qX5.js";import"./Option-DXP4vaIt.js";import"./index-CFE2kaqi.js";import"./SegmentedButton-D06YwmLr.js";import"./index-DWgfJtdr.js";import"./Select-De2if4z3.js";import"./InvisibleMessage-o07I0X4N.js";import"./slim-arrow-down-0jmMhJdt.js";import"./index-CozhcB3v.js";import"./index-BZ0o2qqh.js";import"./index-CXra9vNC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dls4AF5y.js";import"./group-2-Ma5EVCia.js";import"./sort-descending-BF50DcYy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KIunXsJC.js";import"./utils-SZqKSCgS.js";import"./index-BZsvxOnv.js";import"./index-Ny09u-cK.js";import"./index-DN3Jh2GN.js";import"./navigation-down-arrow-CCcXbr-Q.js";import"./navigation-right-arrow-RU6yhQUV.js";import"./navigation-right-arrow-B-ZYLR3_.js";import"./useCurrentTheme-O1jykDcm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrYqG4yl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-a4IOgjsv.js";import"./paper-plane-C8TajgYr.js";import"./index-BGtGU4dE.js";import"./less-CbCfyPoa.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
