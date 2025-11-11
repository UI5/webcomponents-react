import{j as e}from"./iframe-Djuy8UzU.js";import{useMDXComponents as n}from"./index-CgJpCImo.js";import{I as r,F as s}from"./CommandsAndQueries-DtRiB_cH.js";import{M as l,C as a}from"./blocks-Phup9Acl.js";import"./Tag-B73vgZIB.js";import"./index-Da0VpmUz.js";import"./copy-YJEoppKk.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-pXNMhsUR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrSO2QY2.js";import"./index-DRZrAGbU.js";import"./index-CLO3npv1.js";import"./Link-BtCtR7u3.js";import"./index-CAq-HQ8b.js";import"./index-B4ZMGb2N.js";import"./index-CgYDTHag.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYVpCo3h.js";import"./addCustomCSSWithScoping-JvBMAy04.js";import"./index-DedsmHJ0.js";import"./information-CINaYo8g.js";import"./sys-enter-2-BqczY9Tp.js";import"./alert-BZgl_BE3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Tm5sN1Cz.js";import"./delete-D5ga1RS3.js";import"./settings-OocRSNxu.js";import"./NoData-BJvGJO6C.js";import"./IllustratedMessage-DT3sEaH3.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CS7LznOo.js";import"./index-Bg9deP-k.js";import"./index-BZ9EzmYc.js";import"./slim-arrow-down-CLg0Y-Da.js";import"./Input-DFpAAFjs.js";import"./ResponsivePopoverCommon.css-DOPzCxi3.js";import"./ValueStateMessage.css-BY9H75Zk.js";import"./Suggestions.css-DHOGHYV0.js";import"./ListBoxItemGroupTemplate-Bgj9qNs1.js";import"./ComboBoxItemGroup-Hz1udBKa.js";import"./ListItemBaseTemplate-YNfLoN64.js";import"./Token-CUzjxjIL.js";import"./ScrollEnablement-Bx2z7UGn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zVS7M5ZO.js";import"./ToggleButton-cXtGqYVJ.js";import"./SuggestionItem-lRSTXW-R.js";import"./index-CYksY84A.js";import"./Option-BHogyT1E.js";import"./index-C7Gh1DFG.js";import"./SegmentedButton-DHr4aC0S.js";import"./index-Crtuxpn7.js";import"./Select-BCrzSCH2.js";import"./InvisibleMessage-DlMsZ0UK.js";import"./slim-arrow-down-DfwEriIC.js";import"./index-Bn5IRh8r.js";import"./index-BvL5iwzQ.js";import"./index-Cv13D_Xn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Hbu-1YdU.js";import"./group-2-zKTXtqcT.js";import"./sort-descending-DrmqyO1p.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk5C2Trt.js";import"./utils-Ds_Qdonj.js";import"./index-Bkm_aMWw.js";import"./index-Cn1i3TVp.js";import"./index-C0EeSQjI.js";import"./navigation-down-arrow-B0vTzU2n.js";import"./navigation-right-arrow-BxQGxPzo.js";import"./navigation-right-arrow-Ce-NM_S4.js";import"./useCurrentTheme-CPdf3rwy.js";import"./IndicationColor-DVw-fSM_.js";import"./index-tatqfUOn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqdL_3q4.js";import"./paper-plane-CJJNV6_c.js";import"./index-D-SZa65e.js";import"./less-CCZmshD0.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
