import{j as e}from"./iframe-XNJfvnKd.js";import{useMDXComponents as n}from"./index-BB1Z__gZ.js";import{I as r}from"./CommandsAndQueries-BhkfH5lW.js";import{M as s,C as l}from"./blocks-70fHpzfh.js";import"./Tag-Bt3S_y8X.js";import"./index-CCPENXhC.js";import"./copy-AwcTHtit.js";import{F as a}from"./Footer-BCJuC1pH.js";import"./PageNotFound-DNJSaIYV.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CXI1hcwc.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-By03J9gW.js";import"./index-DJvc2tfl.js";import"./index-BGH8cR_1.js";import"./index-C23si5qK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjHnjWqf.js";import"./addCustomCSSWithScoping-Uu6mKzaL.js";import"./index-Cr8k8bpx.js";import"./index-CONBdBFK.js";import"./index-X0L_7D7a.js";import"./information-CaeHS7Lo.js";import"./sys-enter-2-D6Lk4332.js";import"./alert-Dalf8wRK.js";import"./index-CnSjbRE7.js";import"./Illustrations-CJz4mowS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDwfYvCN.js";import"./delete-BRgtnu4x.js";import"./settings-B5E6qpU6.js";import"./NoData-BfgUbfwB.js";import"./NoFilterResults-BlBFR0st.js";import"./index-BRLheel9.js";import"./IllustratedMessage-DHXQUQEF.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-B2ARDT1C.js";import"./Input-Hy5dHKL1.js";import"./ResponsivePopoverCommon.css-2-C9fSM3.js";import"./ValueStateMessage.css-RN8YRdD-.js";import"./Suggestions.css-C7OqB4DX.js";import"./ListBoxItemGroupTemplate-C6I36q1a.js";import"./ComboBoxItemGroup-C3MlZ0Uh.js";import"./ListItemBaseTemplate-He511VRs.js";import"./Token-Cmgro3bE.js";import"./ScrollEnablement-DWDTXslq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3mcOcRw.js";import"./ToggleButton-Dv13GKwG.js";import"./multiselect-all-Bb3L16tH.js";import"./SuggestionItem-CUEuXRcU.js";import"./index-PKHhDZaf.js";import"./Option-DRsG1edk.js";import"./index-CqeXQepM.js";import"./SegmentedButton-DD_U86WN.js";import"./index-DWPlEs-m.js";import"./Select-CY4mH1RC.js";import"./InvisibleMessage-CHgobTkl.js";import"./index-C-pZ3HN9.js";import"./index-w9Dk9Jum.js";import"./index-Eo1icHqa.js";import"./index-BpPLeT54.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMVS6pwZ.js";import"./group-2-DfSGQJD6.js";import"./sort-descending-CK7mW81X.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gN_r8yvA.js";import"./utils-1KcEiNGe.js";import"./index-Cj-NtrOt.js";import"./index-BZOx0EW0.js";import"./index-COZb4dfm.js";import"./navigation-down-arrow-DkfHsCgO.js";import"./navigation-right-arrow-C7vqJCpZ.js";import"./navigation-right-arrow-DaNEHEjP.js";import"./useCurrentTheme-C0cHAbo-.js";import"./index-9SXllW00.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0aovCf59.js";import"./paper-plane-CA01kMJ9.js";import"./index-_dwsQH44.js";import"./less-B6-zBVKy.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
