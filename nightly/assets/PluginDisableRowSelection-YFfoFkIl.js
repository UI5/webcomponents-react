import{j as e}from"./iframe-FqLIb5aJ.js";import{useMDXComponents as n}from"./index-BMlaAUsm.js";import{I as r,F as s}from"./CommandsAndQueries-C8KzZZ_g.js";import{M as l,C as a}from"./blocks-2y9I1Ee8.js";import"./Tag-8E3ttw9X.js";import"./index-B7xi-wqa.js";import"./copy-DHQOADmz.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DxSWo1xk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DrxJ3_v0.js";import"./index-CJCUd_sD.js";import"./index-CunGGXs0.js";import"./Link-D_zVjdUt.js";import"./index-ByRLHl7W.js";import"./index-DHR1LOgw.js";import"./index-DfAJ7eEY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlZw9a5e.js";import"./addCustomCSSWithScoping-BziWOAoD.js";import"./index-PGt_tfZb.js";import"./information-CWEUh2Nv.js";import"./sys-enter-2-D8dKPdhT.js";import"./alert-Dzhc-2EW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-bOLBCiA-.js";import"./delete-WbYkg9tQ.js";import"./settings-BvY4-0au.js";import"./NoData-BVmMTcxI.js";import"./IllustratedMessage-DAfC4sQR.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Bnd4PO4J.js";import"./index-BhNH-Xd3.js";import"./index-BB45oL63.js";import"./slim-arrow-down-Cx2k9oA1.js";import"./Input-D70gHpU4.js";import"./ResponsivePopoverCommon.css-CFYKUvZL.js";import"./ValueStateMessage.css-GEYmLDX1.js";import"./Suggestions.css-Xa6Cgh36.js";import"./ListBoxItemGroupTemplate-DRFgm5mq.js";import"./ComboBoxItemGroup-48OfHzJY.js";import"./ListItemBaseTemplate-BLuaGZej.js";import"./Token-DUre5J7V.js";import"./ScrollEnablement-Bzckwnc4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CciZFj9F.js";import"./ToggleButton-SneSiQBN.js";import"./SuggestionItem-7ulZP-bS.js";import"./index-NyaZasf4.js";import"./Option-CNOfeTCF.js";import"./index-FeMM_IUL.js";import"./SegmentedButton-BhR2I5WQ.js";import"./index-hEF3eP5L.js";import"./Select-DmZylSAc.js";import"./InvisibleMessage-Dqr9IMJW.js";import"./slim-arrow-down-DtJmXr8m.js";import"./index-IboMoMq3.js";import"./index-D43bVJxH.js";import"./index-MwCWU3y-.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CmlQCrfj.js";import"./group-2-Fz9-Rorb.js";import"./sort-descending-CMcEr8AV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CuNNSqVd.js";import"./utils-B1OcDcX1.js";import"./index-O_SIXxVn.js";import"./index-D7ZoZ11L.js";import"./index-DkAWhp6q.js";import"./navigation-down-arrow-ByHKfqMb.js";import"./navigation-right-arrow-NOv1xYoV.js";import"./navigation-right-arrow-C5yT6JM7.js";import"./useCurrentTheme-Dt12rjwM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_genVlm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BBKH6PEs.js";import"./paper-plane-CU0wuWEv.js";import"./index-BLV2QBiZ.js";import"./less-cExHlQNZ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
