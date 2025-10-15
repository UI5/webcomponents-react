import{j as e}from"./iframe-wbWwESAy.js";import{useMDXComponents as n}from"./index-BOBJYedV.js";import{I as r,F as s}from"./CommandsAndQueries-C1vl6z57.js";import{M as l,C as a}from"./blocks-B5IYlHFD.js";import"./Tag-BH6lPIks.js";import"./index-DQNSAqOh.js";import"./copy-sux1w53_.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-ymB0dvzI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Buwu-oqJ.js";import"./index-B81NkVkP.js";import"./index-Cupokltd.js";import"./Link-BN6Q-gzd.js";import"./index-BnSJ99QD.js";import"./index-DcmA7siw.js";import"./index-DqWD-oTo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqytePVm.js";import"./addCustomCSSWithScoping-CplaRZ4g.js";import"./index-DrYBsayo.js";import"./information-DASCm05s.js";import"./sys-enter-2-J3fKP-CE.js";import"./alert-D2qcbVgq.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CSCYBoid.js";import"./delete-CkbWcAQ8.js";import"./settings-DSjEV05c.js";import"./NoData-DSScVfbu.js";import"./IllustratedMessage-CixZtxVG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-b7Wr6axn.js";import"./index-D5jEuy6P.js";import"./index-rxWa-PP3.js";import"./slim-arrow-down-Beir7aM1.js";import"./Input-Vu44DOAo.js";import"./ResponsivePopoverCommon.css-D988s0PK.js";import"./ValueStateMessage.css-CdnX5Q24.js";import"./Suggestions.css-DzjZuQlP.js";import"./ListBoxItemGroupTemplate-CeF3Gz87.js";import"./ComboBoxItemGroup-j5CzfWaH.js";import"./ListItemBaseTemplate-BQRJYW54.js";import"./Token-Co-splGb.js";import"./ScrollEnablement-DlXiJ1Ol.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BnhmLw4e.js";import"./ToggleButton-BWLlCYgP.js";import"./SuggestionItem-BL--DX9A.js";import"./index-BuN2F6Z9.js";import"./Option-BfBV6oRK.js";import"./index-BASr6ULO.js";import"./SegmentedButton-BMoLUOOT.js";import"./index-CyJ9rJpG.js";import"./Select-C4v57l5j.js";import"./InvisibleMessage-DiUlqqZw.js";import"./slim-arrow-down-DGcq_Pe_.js";import"./index-DRSwvrEw.js";import"./index-4LVdgCdo.js";import"./index-D7tI0R5X.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CS8HWzLV.js";import"./group-2-zJzmiyTG.js";import"./sort-descending-D-FdC3xQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BtV9Msfp.js";import"./utils-CKST4OLl.js";import"./index-BZtqaS2C.js";import"./index-CxcyIJ4L.js";import"./index-DgwCbpUf.js";import"./navigation-down-arrow-Dp1eGb2c.js";import"./navigation-right-arrow-Cdr0GtsE.js";import"./navigation-right-arrow-Do0mt2Fs.js";import"./useCurrentTheme-oAkfJU9N.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BoctPpsF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Co8lcZlm.js";import"./paper-plane-CumYDqaS.js";import"./index-DIEkrnVJ.js";import"./less-DKy2uX_G.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
