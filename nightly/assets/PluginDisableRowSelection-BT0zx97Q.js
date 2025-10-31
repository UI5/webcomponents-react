import{j as e}from"./iframe-Do6vb0_F.js";import{useMDXComponents as n}from"./index-CjAG28Zi.js";import{I as r,F as s}from"./CommandsAndQueries-DNVLBibD.js";import{M as l,C as a}from"./blocks-BSmhBV8W.js";import"./Tag-Bm_1Oa-G.js";import"./index-DFaXcVzr.js";import"./copy-CtSFAv-a.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-9e-ZuUVx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn7jdYPg.js";import"./index-CjAZJ6mP.js";import"./index-CRpB2mc_.js";import"./Link-DfSClIn0.js";import"./index-B7DmSRaZ.js";import"./index-euaiQ6-T.js";import"./index-BKzdQw4A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-x3ovOdYp.js";import"./addCustomCSSWithScoping-DMyk9VX6.js";import"./index-CziNROS9.js";import"./information-kf1Y_V0y.js";import"./sys-enter-2-Dgg9scSJ.js";import"./alert-eluNIvxZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5e1o-EBG.js";import"./delete-EOOd17FY.js";import"./settings-ChvCVI1H.js";import"./NoData-x4jRmZPJ.js";import"./IllustratedMessage-BpFZWdgz.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BSP9fDKJ.js";import"./index-TJOhQ-wF.js";import"./index-D-PQMfR1.js";import"./slim-arrow-down-BFUSO5fa.js";import"./Input-CV4am0mg.js";import"./ResponsivePopoverCommon.css-DZxesZgF.js";import"./ValueStateMessage.css-CBDkTR1J.js";import"./Suggestions.css-C6WB3Qk2.js";import"./ListBoxItemGroupTemplate-lrzGyG5S.js";import"./ComboBoxItemGroup-13V5PpfS.js";import"./ListItemBaseTemplate-9NOhdDod.js";import"./Token-DU3vF1l0.js";import"./ScrollEnablement-Bcn9GtV2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dz67dIqH.js";import"./ToggleButton-BRQRWz_K.js";import"./SuggestionItem-VOxlPlC0.js";import"./index-CRXuNHmI.js";import"./Option-CnEC2BV1.js";import"./index-DVIhR92p.js";import"./SegmentedButton-BQrBf1Xa.js";import"./index-U1Yn6qoO.js";import"./Select-CSgqeQI7.js";import"./InvisibleMessage-BMJss_kZ.js";import"./slim-arrow-down-DdXU4zZn.js";import"./index-ChvQYVHX.js";import"./index-D9aj3XtS.js";import"./index-0fgUCGZZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DAByxNhp.js";import"./group-2-V4ylj1S-.js";import"./sort-descending-CJeT2CSo.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bgdpa9Y6.js";import"./utils-CurRq_4A.js";import"./index-iowTYD53.js";import"./index-D7kd4dZQ.js";import"./index-DvB6BGuZ.js";import"./navigation-down-arrow-DUd4G2g_.js";import"./navigation-right-arrow-DMiO4jal.js";import"./navigation-right-arrow-B2BIXtfp.js";import"./useCurrentTheme-BKmE0cN8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-QvDENoWT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQccTeWy.js";import"./paper-plane-BnCgZ8Rr.js";import"./index-DmyLDLIV.js";import"./less-DarnrJ7s.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
