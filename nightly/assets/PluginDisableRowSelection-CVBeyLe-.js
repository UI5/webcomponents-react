import{j as e}from"./iframe-DcVQn4h7.js";import{useMDXComponents as n}from"./index-DjjpMNLx.js";import{I as r}from"./CommandsAndQueries-BQOFWNIa.js";import{M as s,C as l}from"./blocks-DpuwUxz9.js";import"./Tag-DIkCdjNz.js";import"./index-DQQWkI0N.js";import"./copy-Bc0coMMf.js";import{F as a}from"./Footer-NfYngWNA.js";import"./PageNotFound-CVfCATZz.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DIlNN8Le.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CVy3lCMm.js";import"./index-fZCQALbq.js";import"./index-CEU1rAw4.js";import"./index-CwCoovk9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BldFJeaD.js";import"./addCustomCSSWithScoping-BZ_vF02V.js";import"./index-DdVtCCP3.js";import"./index-C5tsWYzj.js";import"./index-CqxmVbMG.js";import"./information-Cy8WRBMY.js";import"./sys-enter-2-BclYTqTi.js";import"./alert-YdCtzqbp.js";import"./index-DAQytdMa.js";import"./Illustrations-Bw1pJyGV.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1uni83s.js";import"./delete-CpCA_XDM.js";import"./settings-CUbjO-ae.js";import"./NoData-BVjgM2yj.js";import"./NoFilterResults--zi6MjY0.js";import"./index-xMQkaemi.js";import"./IllustratedMessage-CyBmc5MY.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BlMakY4w.js";import"./Input-BW9GEfIA.js";import"./ResponsivePopoverCommon.css-osNOcHdW.js";import"./ValueStateMessage.css-OYxMPf1f.js";import"./Suggestions.css-BtxCLxQv.js";import"./ListBoxItemGroupTemplate-CGQXGHJV.js";import"./ComboBoxItemGroup-CpHww_Ig.js";import"./ListItemBaseTemplate-f8kQG4Jt.js";import"./Token-CHF6HHxJ.js";import"./ScrollEnablement-CZLbZt8M.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BaNuWCKC.js";import"./ToggleButton-BmTxuHC_.js";import"./multiselect-all-BiN6qG0z.js";import"./SuggestionItem-DMa3BA53.js";import"./index-CiwrmhvK.js";import"./Option-C1H6IR-I.js";import"./index-DEYxl-sC.js";import"./SegmentedButton-DnkHPT4g.js";import"./index-BzWYB2Gi.js";import"./Select-BauIhRnb.js";import"./InvisibleMessage-Ru2nSyo5.js";import"./index-BsU0Bybk.js";import"./index-C30tWqmm.js";import"./index-DyXL-gty.js";import"./index-BD8zH4rA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLSgXMGv.js";import"./group-2-DjsnM4Ut.js";import"./sort-descending-C3bCKWTJ.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DtAi62Ks.js";import"./utils-C9vw3VrT.js";import"./index-CuArEFdj.js";import"./index-DKUw4EjC.js";import"./index-elD2Xgk2.js";import"./navigation-down-arrow-CSAd3vAm.js";import"./navigation-right-arrow-DMbE7m0E.js";import"./navigation-right-arrow-D8bzVi_N.js";import"./useCurrentTheme-B81rCOjx.js";import"./index-CFD7jo8u.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CkS_OTKg.js";import"./paper-plane-CjGXrz2J.js";import"./index-S7JGR-kF.js";import"./less-qw1uxsj4.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
