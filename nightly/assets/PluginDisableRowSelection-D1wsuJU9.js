import{j as e}from"./iframe-BBfeQq2L.js";import{useMDXComponents as n}from"./index-D1XkxxyM.js";import{I as r,F as s}from"./CommandsAndQueries-Buygq3eA.js";import{M as l,C as a}from"./blocks-CxdXAZue.js";import"./Tag-4fcKG2ic.js";import"./index-C57-wRZv.js";import"./copy-2iUWozfp.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BWy92f_G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5Wcj6ld.js";import"./index-BY7hZSSK.js";import"./index-Dh6gCloB.js";import"./Link-DOA2fpa3.js";import"./index-ChSH85IQ.js";import"./index-CB8857Gd.js";import"./index-C4_hmu2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDXTaCTd.js";import"./addCustomCSSWithScoping-_H14R7FJ.js";import"./index-H1CGp5_C.js";import"./information-BnGyGqAy.js";import"./sys-enter-2-B5N_dLso.js";import"./alert-DOI_-LG9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Du-GvtWn.js";import"./delete-Bvqg6jRy.js";import"./settings-CoYY_8Uh.js";import"./NoData-Bx94Sh8i.js";import"./IllustratedMessage-D9IVoDdQ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CkIkTlkv.js";import"./index-DJJ3Mees.js";import"./index-BxeXPALZ.js";import"./slim-arrow-down-CZafjPQk.js";import"./Input-CXTPtpQ2.js";import"./ResponsivePopoverCommon.css-DWkfvrPv.js";import"./ValueStateMessage.css-tsSH4zXZ.js";import"./Suggestions.css-DDtKdDf5.js";import"./ListBoxItemGroupTemplate-BpOyUqn0.js";import"./ComboBoxItemGroup-CIzD3AVu.js";import"./ListItemBaseTemplate-TueecYK6.js";import"./Token-D2mMU1OG.js";import"./ScrollEnablement-abBNx1nX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DyAEHiEu.js";import"./ToggleButton-D1DyhgK8.js";import"./SuggestionItem-BSBNfTEA.js";import"./index-Dj7DMCO5.js";import"./Option-CxAkegRU.js";import"./index-CWaD9nCK.js";import"./SegmentedButton--qutgauv.js";import"./index-Br3gWTFO.js";import"./Select-sqbuPb4m.js";import"./InvisibleMessage-CbEE0DqC.js";import"./slim-arrow-down-CZnzPpuX.js";import"./index-BEyFh1jo.js";import"./index-WkSHIfIf.js";import"./index-CU_KTR9v.js";import"./index-BHxHZDh8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3ZbZrr0.js";import"./group-2-D8MWVKUe.js";import"./sort-descending-No_uql7a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BPqEcmGG.js";import"./utils-CH402oqk.js";import"./index-e3s8xMkM.js";import"./index-DVRLVrIq.js";import"./index-C6Czb7vs.js";import"./navigation-down-arrow-DVtVCKgG.js";import"./navigation-right-arrow-BMpAHwE7.js";import"./navigation-right-arrow-BdeAmP2r.js";import"./useCurrentTheme-UAcQ55vR.js";import"./index-Cvb15Oog.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-T4YkLvpZ.js";import"./paper-plane-CuWPWZ2a.js";import"./index-BsfHMYWW.js";import"./less-Y04PrZ-G.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
