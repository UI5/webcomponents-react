import{j as e}from"./iframe-D-W-mmRj.js";import{useMDXComponents as n}from"./index-D8IyotA-.js";import{I as r,F as s}from"./CommandsAndQueries-G8bd-Dz2.js";import{M as l,C as a}from"./blocks-CCgGLQdQ.js";import"./Tag-CcHwt-jC.js";import"./index-BjBbtVMa.js";import"./copy-Bs2vU0sH.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CnR2Z8F0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lPK_7vuA.js";import"./index-g5ZQYkE0.js";import"./index-BL1fd3ME.js";import"./Link-B8l4snGX.js";import"./index-B8f1MJrs.js";import"./index-CtoHKFWx.js";import"./index-C1eJkWnN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_kQaGsI.js";import"./addCustomCSSWithScoping-IPWT__yW.js";import"./index-DkLrn4qm.js";import"./information-CEG7gdih.js";import"./sys-enter-2-CEv4mC4Y.js";import"./alert-DtXDmWLr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BhdCO6dM.js";import"./delete-CWhMuDL5.js";import"./settings-CyNEgs3g.js";import"./NoData-BLggi9n_.js";import"./IllustratedMessage-BlAMe72Z.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DzdY_mBy.js";import"./index-CNJHK3W8.js";import"./index-Bxxpx37Q.js";import"./slim-arrow-down-x9Gru0Ec.js";import"./Input-BqMyI7ca.js";import"./ResponsivePopoverCommon.css-DVnmqxls.js";import"./ValueStateMessage.css-DadsVUgD.js";import"./Suggestions.css-DSmmsEoA.js";import"./ListBoxItemGroupTemplate-DFUskKCh.js";import"./ComboBoxItemGroup-Df0XnL08.js";import"./ListItemBaseTemplate-BAnGYykD.js";import"./Token-C2_dZ0mi.js";import"./ScrollEnablement-5T6hJhR0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C80k9rxB.js";import"./ToggleButton-52j1Cimw.js";import"./SuggestionItem-CfdrIOvX.js";import"./index-CUrDlzTH.js";import"./Option-au42OKVK.js";import"./index-CumMtctX.js";import"./SegmentedButton-CsAys2s9.js";import"./index-YylBegPs.js";import"./Select-Bj00LLbV.js";import"./InvisibleMessage-XQ1BeoOK.js";import"./slim-arrow-down-DWuhkxhY.js";import"./index-Buv1R8Le.js";import"./index-DIb00-kV.js";import"./index-C7KJciiD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRhGvWSX.js";import"./group-2-x8bbk4t5.js";import"./sort-descending-DeN8U9ms.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVu5YbFT.js";import"./utils-ES71sGqA.js";import"./index-JcPgMdxN.js";import"./index-C7o60qk_.js";import"./index-BBVgoxy_.js";import"./navigation-down-arrow-D6uzIO8i.js";import"./navigation-right-arrow-JPz4-m_e.js";import"./navigation-right-arrow-B0n9GdxK.js";import"./useCurrentTheme-C612kq_O.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DtsxIlNB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B5QWPvoz.js";import"./paper-plane-BdmbwH0l.js";import"./index-BxEZlMiK.js";import"./less-B61wiooM.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
