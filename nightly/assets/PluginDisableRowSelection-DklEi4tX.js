import{j as e}from"./iframe-B2FKbRyU.js";import{useMDXComponents as n}from"./index-B6nFsg5H.js";import{I as r}from"./CommandsAndQueries-Ckb11nUD.js";import{M as s,C as l}from"./blocks-D-EyJoW7.js";import"./Tag-DALomp7A.js";import"./index-DDSpbD3Z.js";import"./copy-JUMniwmI.js";import{F as a}from"./Footer-Boec_nj9.js";import"./PageNotFound-D3X2ZHIh.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CVD9cqsI.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BrDotueY.js";import"./index-DHXfA1aH.js";import"./index-C1DRCM0c.js";import"./index-jZ_VDKcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BzpFx6uj.js";import"./addCustomCSSWithScoping-DCMkWG64.js";import"./index-DS8Ies1F.js";import"./index-CKRHtWhm.js";import"./index-DKyTtykB.js";import"./information-gzDx7eZf.js";import"./sys-enter-2-C-oODT1L.js";import"./alert-dNTL_brG.js";import"./index-DCb_xP6l.js";import"./Illustrations-Bj-aY82Z.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bz8is-GI.js";import"./delete-CFesfdDG.js";import"./settings-opsmQeBR.js";import"./NoData-D2Gj788q.js";import"./NoFilterResults-B4v0K1Vp.js";import"./index-6Bhcr5l0.js";import"./IllustratedMessage-6Hb5GR5A.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-_pStiMkC.js";import"./slim-arrow-down-Ys7hMkPK.js";import"./Input-DwMU1cpj.js";import"./ResponsivePopoverCommon.css-DH0byYa1.js";import"./ValueStateMessage.css-Bw_3AW3-.js";import"./Suggestions.css-CfJP3QYm.js";import"./ListBoxItemGroupTemplate-CBBnxOdl.js";import"./ComboBoxItemGroup-pSZDcj_Y.js";import"./ListItemBaseTemplate-DbJzc3OH.js";import"./Token-BQA14vJ4.js";import"./ScrollEnablement-DwnkyfbX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7b-hnxm.js";import"./ToggleButton-DG0J_zb4.js";import"./SuggestionItem-qaKoOHF9.js";import"./index-Cp7riZA0.js";import"./Option-BFH18YB5.js";import"./index-CpfRQ6F_.js";import"./SegmentedButton-m1j72L5U.js";import"./index-DUG8asUQ.js";import"./Select-Db3yOwO_.js";import"./InvisibleMessage-BXgV0ajS.js";import"./slim-arrow-down-BTgZLJbv.js";import"./index-D-rOfIh9.js";import"./index-WUOOkN1f.js";import"./index-Bx2uhMFX.js";import"./index-s315U2R4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CONdRUGs.js";import"./group-2-B0I_ewE0.js";import"./sort-descending-5FQeQbrY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7vTuR1f.js";import"./utils-6W1b-ay8.js";import"./index-B7Ih3QbG.js";import"./index-CthcNRf4.js";import"./index-S57PoKAK.js";import"./navigation-down-arrow-Df_E19F4.js";import"./navigation-right-arrow-BDTIDVrz.js";import"./navigation-right-arrow-5aP-UFj7.js";import"./useCurrentTheme-C8c2YnJs.js";import"./index-Cc6fTIIs.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPlkBtoH.js";import"./paper-plane-SWd_61-c.js";import"./index-ZKK6l2ej.js";import"./less-ByTKGmwu.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(a,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
