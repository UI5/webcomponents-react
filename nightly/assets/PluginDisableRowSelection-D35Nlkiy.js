import{j as e}from"./iframe-xM6TWZ2z.js";import{useMDXComponents as n}from"./index-itFp6RcL.js";import{I as r,F as s}from"./CommandsAndQueries-DU6Rn88_.js";import{M as l,C as a}from"./blocks-CPrCvPPD.js";import"./Tag-By3SowoB.js";import"./index-9AHy9ejx.js";import"./copy-uYDkz2OX.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Cu78AcrT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-AzHYcBiG.js";import"./index-D8_xEbiF.js";import"./index-Dro0XmDs.js";import"./Link-BDcFUJ6P.js";import"./index-BDByza4Q.js";import"./index-B3SnxoaH.js";import"./index-Ce3vdOnG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BkjEqAjP.js";import"./addCustomCSSWithScoping-CN9Nv2gA.js";import"./index-D0vFHCq5.js";import"./information-BKDOtRK0.js";import"./sys-enter-2-CnIu4SDT.js";import"./alert-BSwF_aSo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ByRe-Pr9.js";import"./delete-GZgGCRu5.js";import"./settings-C5tCT27d.js";import"./NoData-BhTX_TQK.js";import"./IllustratedMessage-CKdzeJEN.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-C007fInA.js";import"./index-CVRnarRU.js";import"./index-Cwu6OG7i.js";import"./slim-arrow-down-C_CcIh7F.js";import"./Input-UTXGmmfd.js";import"./ResponsivePopoverCommon.css-DpRk3tRF.js";import"./ValueStateMessage.css-Br1luTux.js";import"./Suggestions.css-IywVbVu3.js";import"./ListBoxItemGroupTemplate-D-Qfwc-O.js";import"./ComboBoxItemGroup-DBZRijA_.js";import"./ListItemBaseTemplate-DHW-flPt.js";import"./Token-AKwzEfcp.js";import"./ScrollEnablement-CzBIaYtg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Q4pfieza.js";import"./ToggleButton-DSylEXGK.js";import"./SuggestionItem-CDslL1Zi.js";import"./index-CU5opL-S.js";import"./Option-DqKLKc7N.js";import"./index-C4qT761X.js";import"./SegmentedButton-CaLUUleO.js";import"./index-DLa-IKPk.js";import"./Select-pcxnTQd1.js";import"./InvisibleMessage-oFo1Gh6Z.js";import"./slim-arrow-down-CvRj7da0.js";import"./index-JVo02ZVr.js";import"./index-GtlTqLaY.js";import"./index-AWueUsQI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJwBvwXw.js";import"./group-2-CQWF_2lh.js";import"./sort-descending-DdwgSP0m.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dv3rwh9l.js";import"./utils-CSrsxa_x.js";import"./index-ByHyVxRG.js";import"./index-K1LoBgk-.js";import"./index-BnzSR-dI.js";import"./navigation-down-arrow-BIunLDBw.js";import"./navigation-right-arrow-_UKX_FlU.js";import"./navigation-right-arrow-B-0frPyv.js";import"./useCurrentTheme-CQ57EUtO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HUtZK3H1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Tj0-8HEj.js";import"./paper-plane-HaunRPAT.js";import"./index-CgbtStQa.js";import"./less-BpW4qLUX.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
