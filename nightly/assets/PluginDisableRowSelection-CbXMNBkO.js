import{j as e}from"./iframe-DD7p555z.js";import{useMDXComponents as n}from"./index-DKhj08U7.js";import{I as r,F as s}from"./CommandsAndQueries-CKwguJVF.js";import{M as l,C as a}from"./blocks-BAWH2K4k.js";import"./Tag-YiwRoJC6.js";import"./index-iP_JBMT4.js";import"./copy-BvS2jijZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C5pOz0ZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dl6MCkfr.js";import"./index-DNGDxbjZ.js";import"./index-CjiVltgT.js";import"./Link-CERJMGdw.js";import"./index-4YigTS5a.js";import"./index-D_31Usqf.js";import"./index-k0OzfFck.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-buNhKImf.js";import"./addCustomCSSWithScoping-rp5A8jrF.js";import"./index-Dnnz-gOR.js";import"./information-C853I-0E.js";import"./sys-enter-2-DMe79a_K.js";import"./alert-Dl3EzObX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bny1qvAq.js";import"./delete-BtGPjnXV.js";import"./settings-BhzLKQVu.js";import"./NoData-_2lOlioJ.js";import"./IllustratedMessage-Db4dYMTY.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C3tYIcQs.js";import"./index-B_lzyoDe.js";import"./index-DYHzkt2a.js";import"./slim-arrow-down-ORtmHOmj.js";import"./Input-Ei-pBwN-.js";import"./ResponsivePopoverCommon.css-B_lrtiGe.js";import"./ValueStateMessage.css-BYebuE_v.js";import"./Suggestions.css--XkU6wI1.js";import"./ListBoxItemGroupTemplate-BA8CQI5_.js";import"./ComboBoxItemGroup-amfpDGl-.js";import"./ListItemBaseTemplate-BhLhD8bb.js";import"./Token-CT7ftEMU.js";import"./ScrollEnablement-DFuXjWdf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CoZosRcD.js";import"./ToggleButton-DY3Om3L7.js";import"./SuggestionItem-K95onNiN.js";import"./index-kHhCuAsg.js";import"./Option-CnNxmnPy.js";import"./index-62qOKVOB.js";import"./SegmentedButton-DFPoBTLB.js";import"./index-BBg6UU0Y.js";import"./Select-BQbmMxfV.js";import"./InvisibleMessage-CBGNW5FA.js";import"./slim-arrow-down-Bwk9f88K.js";import"./index-BzdnDtMC.js";import"./index-Cio2hU6W.js";import"./index-DAJ5VVgK.js";import"./index-KjntBnT6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DH5ZMpfp.js";import"./group-2-Y-L0oUMk.js";import"./sort-descending-YsDgqG23.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHyUerlm.js";import"./utils-Bfnw6Lvc.js";import"./index-CPJBiYbU.js";import"./index-hyvu0X_I.js";import"./index-BtsWC2q8.js";import"./navigation-down-arrow-B6X7QWDX.js";import"./navigation-right-arrow-BJP2JOaP.js";import"./navigation-right-arrow-DgwpS7dp.js";import"./useCurrentTheme-DUXYJBGz.js";import"./index-CxpEwIF3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-O-Qg-Ti_.js";import"./paper-plane-g37kvv4L.js";import"./index-Dwp_loUQ.js";import"./less-BN_J84Q7.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
