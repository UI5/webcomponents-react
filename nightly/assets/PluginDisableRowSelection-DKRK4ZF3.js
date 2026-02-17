import{j as e}from"./iframe-XvyKyqpc.js";import{useMDXComponents as n}from"./index-CE_ul58K.js";import{I as r,F as s}from"./CommandsAndQueries-D-JkQMzp.js";import{M as l,C as a}from"./blocks-hAblz1ET.js";import"./Tag-BEblEGCN.js";import"./index-CXUKZsMC.js";import"./copy-CAC71KE2.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CWBCe2d6.js";import"./preload-helper-PPVm8Dsz.js";import"./index--us6wF-5.js";import"./index-CP30tsdj.js";import"./index-BkdKA5kQ.js";import"./Link-DWmr0_tI.js";import"./index-DQ79lCi8.js";import"./index-BFysEZU1.js";import"./index-dfRDbF4B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-m1ntkPM9.js";import"./addCustomCSSWithScoping-B_TWNpIo.js";import"./index-Du72Y0zD.js";import"./information-CNwM68I2.js";import"./sys-enter-2-QkDyn9HM.js";import"./alert-DG7Yrkg6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CSc3e4Q2.js";import"./delete-B5OLgZyK.js";import"./settings-Dqag1I3v.js";import"./NoData-CyBr3teM.js";import"./IllustratedMessage-D_Z1qlsF.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-4b1G3hWQ.js";import"./index-BNAr3QqM.js";import"./index-DK_rKyLX.js";import"./slim-arrow-down-DK-zw0Wg.js";import"./Input-CXTsJDH8.js";import"./ResponsivePopoverCommon.css-DpCrglir.js";import"./ValueStateMessage.css-XAEG8ST6.js";import"./Suggestions.css-CIiHbc7N.js";import"./ListBoxItemGroupTemplate-BI-DM9uZ.js";import"./ComboBoxItemGroup-KzkX9_HX.js";import"./ListItemBaseTemplate-2fjL8Mbh.js";import"./Token-CnTsgTtT.js";import"./ScrollEnablement-DpQ29N-3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7uEHLD7.js";import"./ToggleButton-dSfF2CYI.js";import"./SuggestionItem-B8GSZHbf.js";import"./index-C9J1kaOU.js";import"./Option-CL9pckzb.js";import"./index-DLARPJs2.js";import"./SegmentedButton-CghOcyRS.js";import"./index-BjgTYctV.js";import"./Select-CTQ5bkNP.js";import"./InvisibleMessage-frxXXEWO.js";import"./slim-arrow-down-B4bsCSMm.js";import"./index-Cll0lnqL.js";import"./index-ZsJCbCIz.js";import"./index-DcsaMtsM.js";import"./index-DnbbOK4Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DvBdwHZ9.js";import"./group-2-DAa-UPnl.js";import"./sort-descending-ByDZzzA_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BXZXJSvV.js";import"./utils-eccEj8iF.js";import"./index-DTu7S7gE.js";import"./index-DnFcC2fY.js";import"./index-CjcCVkct.js";import"./navigation-down-arrow-CsgziDSU.js";import"./navigation-right-arrow-C0qs9ZTI.js";import"./navigation-right-arrow-B2VygeOe.js";import"./useCurrentTheme-09jbhVQN.js";import"./index-BUhgT8PM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BeXIHH0L.js";import"./paper-plane-D6Z_VCoj.js";import"./index-Bpq5Pj7e.js";import"./less-By6v1WfY.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
