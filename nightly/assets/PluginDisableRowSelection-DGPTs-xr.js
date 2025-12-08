import{j as e}from"./iframe-BF6vIVo6.js";import{useMDXComponents as n}from"./index-LfmOxbs8.js";import{I as r,F as s}from"./CommandsAndQueries-BZWG0qBB.js";import{M as l,C as a}from"./blocks-BEVYxzM4.js";import"./Tag-Bbrw4Mg6.js";import"./index-COzDMtK9.js";import"./copy-BsYfEWuv.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CkQ2wSOg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdhWaCX8.js";import"./index-CTIQkpgO.js";import"./index-DdICQhrF.js";import"./Link-C3nR6kZV.js";import"./index-DoBDF59y.js";import"./index-B5sOe_-e.js";import"./index-CKX87Paa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsUQb2cX.js";import"./addCustomCSSWithScoping-B22aBF7H.js";import"./index-Do8jjW18.js";import"./information-v6F873AP.js";import"./sys-enter-2-WuXn7rus.js";import"./alert-C89y0cfE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BV9bdH-I.js";import"./delete-_0aprNE3.js";import"./settings-DzcaBuf0.js";import"./NoData-IEdNW4HF.js";import"./IllustratedMessage-mZZ5M3hY.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DLPo97KT.js";import"./index-Beg2KpGg.js";import"./index-uAJjS3qq.js";import"./slim-arrow-down-C9P7Hlpe.js";import"./Input-DRowSby-.js";import"./ResponsivePopoverCommon.css-B-2GlP7R.js";import"./ValueStateMessage.css-BEO0_Z3X.js";import"./Suggestions.css-C2b5Aeiw.js";import"./ListBoxItemGroupTemplate-CS3AT4TS.js";import"./ComboBoxItemGroup-WphZKhlt.js";import"./ListItemBaseTemplate-DAzagmTa.js";import"./Token-CNKrPbUL.js";import"./ScrollEnablement-Shykj-eY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-6d4If0Ew.js";import"./ToggleButton-boRRQzZL.js";import"./SuggestionItem-AUy5_5fB.js";import"./index-DfMJrLMR.js";import"./Option-DhB4mJA1.js";import"./index-BGv_PDyM.js";import"./SegmentedButton-B0umvJpk.js";import"./index-t-4IUksp.js";import"./Select-DeexmKC7.js";import"./InvisibleMessage-Dk7GG3Kc.js";import"./slim-arrow-down-Cl2du_e5.js";import"./index-BCkDkjBv.js";import"./index-De6ICbSu.js";import"./index-8i29fMry.js";import"./index-DStEZLfo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdpK6p98.js";import"./group-2-B-a5enHW.js";import"./sort-descending-CNTskMhX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CeiuQBAD.js";import"./utils-BM8ogcFa.js";import"./index-CC1_JxWg.js";import"./index-Nex0FRzm.js";import"./index-ByLuJaAj.js";import"./navigation-down-arrow-BCi3JcgJ.js";import"./navigation-right-arrow-D4L2xcHa.js";import"./navigation-right-arrow-CbOrGt_U.js";import"./useCurrentTheme-D2xu2Mdc.js";import"./index-DqdEPxLj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-MBIUA1Lt.js";import"./paper-plane-CRSL_yhr.js";import"./index-BpcWEnj0.js";import"./less-BOu5m1lW.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
