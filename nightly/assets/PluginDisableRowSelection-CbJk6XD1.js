import{j as e}from"./iframe-CEhnIlu5.js";import{useMDXComponents as n}from"./index-DvMCH85E.js";import{I as r,F as s}from"./CommandsAndQueries-COpLwEKt.js";import{M as l,C as a}from"./blocks-CzCRTnDN.js";import"./Tag-B0tBXTma.js";import"./index-BxbrXhSf.js";import"./copy-DW0z69Dv.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BRz2kd1y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8phGoz0x.js";import"./index-XtQvC7Ne.js";import"./index-djaoMR7U.js";import"./Link-Dx0jxQut.js";import"./index-BJ3Bv_1U.js";import"./index-Bjvgvr9c.js";import"./index-CmP_HbAe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8LeJtOc.js";import"./addCustomCSSWithScoping-jvTBykEZ.js";import"./index-Dgl42qdE.js";import"./information-GsMzttNM.js";import"./sys-enter-2-CRQG3vkj.js";import"./alert-C-SQT9wT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BLa75-a4.js";import"./delete-DZBn0HlY.js";import"./settings-DqBE4Yfa.js";import"./NoData-z1rscvaR.js";import"./IllustratedMessage-DLIRWhUO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-_eFO4hhR.js";import"./index-RznWYrdR.js";import"./index-jDTu_XSn.js";import"./slim-arrow-down-DCqrbNPW.js";import"./Input-Cesqog5j.js";import"./ResponsivePopoverCommon.css-CcZwtHQR.js";import"./ValueStateMessage.css-tCml9Upt.js";import"./Suggestions.css-CS6Y7lfw.js";import"./ListBoxItemGroupTemplate-gZbs6LSY.js";import"./ComboBoxItemGroup-BX8sl_PD.js";import"./ListItemBaseTemplate-Cm0NfbpL.js";import"./Token-DdBaiPI-.js";import"./ScrollEnablement-DfRZg6Dv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqKgSM5s.js";import"./ToggleButton-BrmzCsUo.js";import"./SuggestionItem-BHZcKCCP.js";import"./index-gfBCaRX1.js";import"./Option-N8h0jF1c.js";import"./index-DdzeaEd3.js";import"./SegmentedButton-BegLLxw2.js";import"./index-B5ZqyAt4.js";import"./Select-DCpGFOXx.js";import"./InvisibleMessage-B7HV_CKC.js";import"./slim-arrow-down-DYJprQ5J.js";import"./index-CF2pqHX5.js";import"./index-CrxXAlAp.js";import"./index-BmZH7-5P.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CSvmxui-.js";import"./group-2-CTVsJNx-.js";import"./sort-descending-B9sifUyq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-cqZEsl2j.js";import"./utils-gTx_8Idj.js";import"./index-CjpBStF-.js";import"./index-e-mZHuH4.js";import"./index-Dq_2j8ok.js";import"./navigation-down-arrow-B-AcI54H.js";import"./navigation-right-arrow-BOTQ_vif.js";import"./navigation-right-arrow-FWBcN_Yy.js";import"./useCurrentTheme-8m84Q5Bx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ChT8t06d.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOclZ2jB.js";import"./paper-plane-Ch-Ok7XN.js";import"./index-DySPt_hE.js";import"./less-DY5sd6NF.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
