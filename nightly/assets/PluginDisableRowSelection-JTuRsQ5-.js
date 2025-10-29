import{j as e}from"./iframe-C1nqIrP9.js";import{useMDXComponents as n}from"./index-rFzs5Is7.js";import{I as r,F as s}from"./CommandsAndQueries-D6-GYIyC.js";import{M as l,C as a}from"./blocks-CkwZnBbM.js";import"./Tag-BljHH2ny.js";import"./index-CYNCR5qY.js";import"./copy-DSaYeTfs.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DlnEJIfh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJt8uYMe.js";import"./index-BaOK2woW.js";import"./index-Dr-3VGmd.js";import"./Link-BNKugdyP.js";import"./index-DKOFmGpQ.js";import"./index-BIr8DdOC.js";import"./index-SO3IILH_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CASN5sm0.js";import"./addCustomCSSWithScoping-C0k6xtW8.js";import"./index-BswWmSbc.js";import"./information-BrOplxTY.js";import"./sys-enter-2-pukb5ZDW.js";import"./alert-DP5_e-py.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SAn7RIVc.js";import"./delete-DTPigX6U.js";import"./settings-lV_DBpeY.js";import"./NoData-DhN24gYE.js";import"./IllustratedMessage-DXEnmkA7.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CcxLmyYz.js";import"./index-f0ROwvGB.js";import"./index-P_SO3_3t.js";import"./slim-arrow-down-Bps0sYcn.js";import"./Input-D9vophLG.js";import"./ResponsivePopoverCommon.css-Eydupr0P.js";import"./ValueStateMessage.css-BBO2GkE0.js";import"./Suggestions.css-DgtKpdux.js";import"./ListBoxItemGroupTemplate-Dkfxy0pn.js";import"./ComboBoxItemGroup-CsjyYpDE.js";import"./ListItemBaseTemplate-4ujERwPI.js";import"./Token-CqPdRqE5.js";import"./ScrollEnablement-BIY6wVPD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-COxHhBS3.js";import"./ToggleButton-cQD1nunm.js";import"./SuggestionItem-DPnrRak_.js";import"./index-BdtdwVrB.js";import"./Option-BuhRYFqH.js";import"./index-dJuYV-LS.js";import"./SegmentedButton-o0d2AGWz.js";import"./index-j9YlDLaa.js";import"./Select-N_i4HA6q.js";import"./InvisibleMessage-D0KBEnYB.js";import"./slim-arrow-down-B2Ijjnqs.js";import"./index-qPS3eI2E.js";import"./index-RpM-44G_.js";import"./index-D-OYWN8_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwjgAEdE.js";import"./group-2-CDXCavaP.js";import"./sort-descending-B6gWrjyT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B2hB663M.js";import"./utils-DZwE1ugL.js";import"./index-DPXTvOgj.js";import"./index-DDyYLskJ.js";import"./index-D_OBrQEl.js";import"./navigation-down-arrow-COzuuEtq.js";import"./navigation-right-arrow-Uojl0M_c.js";import"./navigation-right-arrow-C2Cjybhy.js";import"./useCurrentTheme-CqppE4Rq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IMWhCO6M.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-2dKeNAYY.js";import"./paper-plane-FmM4DKiP.js";import"./index-C2Ui3emf.js";import"./less-y0Nr-cGj.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
