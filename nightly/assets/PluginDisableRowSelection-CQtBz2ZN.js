import{j as e}from"./iframe-CoAi7Ttt.js";import{useMDXComponents as n}from"./index-CTifqAle.js";import{I as r,F as s}from"./CommandsAndQueries-Bmwjvcx6.js";import{M as l,C as a}from"./blocks-Ybxx5XcU.js";import"./Tag-DogcFDWn.js";import"./index-zKgtSNJj.js";import"./copy-CDQOzwpW.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-ByBJ9ZH-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CO1YKgmB.js";import"./index-Cq0wf6-J.js";import"./index-CnlNXdqG.js";import"./Link-BYcIvZzO.js";import"./index-CDFqh5IR.js";import"./index-B6Wc4p5_.js";import"./index-Cq2phxGV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z6K6IIMy.js";import"./addCustomCSSWithScoping-BPStdEW-.js";import"./index-DbUh3jFl.js";import"./information-BEJpmRSo.js";import"./sys-enter-2-A-vrRu2-.js";import"./alert-Bip-otgE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ml1YjSwo.js";import"./delete-Bmuh7N5L.js";import"./settings-3-EWs3iX.js";import"./NoData-BeeL7oJD.js";import"./IllustratedMessage-DDDiGsCm.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DOM4bvJY.js";import"./index-BUNmVAeL.js";import"./index-Ce9_H2mo.js";import"./slim-arrow-down-C4Zv-sp4.js";import"./Input-B6TJfZNr.js";import"./ResponsivePopoverCommon.css-DEHIK5w4.js";import"./ValueStateMessage.css-taduqeY7.js";import"./Suggestions.css-B-HnuI29.js";import"./ListBoxItemGroupTemplate-Cw8tkkDC.js";import"./ComboBoxItemGroup-D4GwkaDp.js";import"./ListItemBaseTemplate-4zjGS_SN.js";import"./Token-87PIswjb.js";import"./ScrollEnablement-BkGsl_bk.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwmvV3ez.js";import"./ToggleButton-CHD9qof2.js";import"./SuggestionItem-CiNaD7wa.js";import"./index-O9Iaeyjv.js";import"./Option-yTMBTxoW.js";import"./index-CacjXjcP.js";import"./SegmentedButton-CDIHDaC9.js";import"./index-C8bJpO0W.js";import"./Select-BplUcK6s.js";import"./InvisibleMessage-DMo6sLGx.js";import"./slim-arrow-down-BeH-Dgqc.js";import"./index-DNcyh1s3.js";import"./index-NyngYkNy.js";import"./index-Dbog1EiU.js";import"./index-Bs_4T8nn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CRwGeHAq.js";import"./group-2-CpCeXAY5.js";import"./sort-descending-DJ5_tlNx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-RpjumSju.js";import"./utils-xumaylSf.js";import"./index-KighuX2F.js";import"./index-gniM_8IR.js";import"./index-DOlMH_3T.js";import"./navigation-down-arrow-qe1kaUvs.js";import"./navigation-right-arrow-SwkIH0vW.js";import"./navigation-right-arrow-CFFeqYEg.js";import"./useCurrentTheme-CbzIKp_1.js";import"./index-BhhaNHVG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cye1bIBc.js";import"./paper-plane-Bc39tSYe.js";import"./index-CKkhBjhg.js";import"./less-BsWMeBSw.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
