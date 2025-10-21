import{j as e}from"./iframe-BOeFyVYO.js";import{useMDXComponents as n}from"./index-CHR9lzRO.js";import{I as r,F as s}from"./CommandsAndQueries-B3uiYPSD.js";import{M as l,C as a}from"./blocks-DZQepsVR.js";import"./Tag-B2OWKeSz.js";import"./index-CPvTgMMp.js";import"./copy-BJhtqyDJ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BNASTJ6e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BA2TdYHr.js";import"./index-C7pCL8XU.js";import"./index-BJHUXRax.js";import"./Link-gq5MBZLl.js";import"./index-BVr_O3zx.js";import"./index-CFpQMsbP.js";import"./index-XsNappkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuyMWw-2.js";import"./addCustomCSSWithScoping-5MrgBdkN.js";import"./index-BcGyynfr.js";import"./information-23pj5EQa.js";import"./sys-enter-2-DAsPAd7c.js";import"./alert-CPkxh21N.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DjAUfTN5.js";import"./delete-CWJoMoJg.js";import"./settings-Bfit3oG9.js";import"./NoData-BscmLJLH.js";import"./IllustratedMessage-Dd93Yl2Q.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D3nzv2ZG.js";import"./index-DzkoDE5b.js";import"./index-DeACGhE8.js";import"./slim-arrow-down-CWRIGuGt.js";import"./Input-Df8o9ujM.js";import"./ResponsivePopoverCommon.css-CrPsreP2.js";import"./ValueStateMessage.css-D0I7pT5V.js";import"./Suggestions.css-CJA5EYur.js";import"./ListBoxItemGroupTemplate-DnOVXK1l.js";import"./ComboBoxItemGroup-CPuvIbWZ.js";import"./ListItemBaseTemplate-Cj1nOoXc.js";import"./Token-BAqMUyIJ.js";import"./ScrollEnablement-C6K7-lBE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BvObX3eg.js";import"./ToggleButton-DprkIF_5.js";import"./SuggestionItem-CKRLTHHj.js";import"./index-D5TJuk4k.js";import"./Option-BLl2Q7AB.js";import"./index-BtvD0QZf.js";import"./SegmentedButton-BeE07OxI.js";import"./index-BrMZtkt6.js";import"./Select-DqU5okXE.js";import"./InvisibleMessage-tWO1LuD6.js";import"./slim-arrow-down-XGqqmupf.js";import"./index-C1FVPsyk.js";import"./index-DBDN__0v.js";import"./index-C3vfrSiy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BrlNUypU.js";import"./group-2-BA5x23BP.js";import"./sort-descending-BCAq_Q0J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ikPuGIDZ.js";import"./utils-C8gBHpV1.js";import"./index-Sk78W01U.js";import"./index-DES0lnez.js";import"./index-BpGUb5zM.js";import"./navigation-down-arrow-Df9I5Mue.js";import"./navigation-right-arrow-Bjlzjx0_.js";import"./navigation-right-arrow-Dm_S70wW.js";import"./useCurrentTheme-Uxgw71xd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CtzTOU32.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVnkc0v4.js";import"./paper-plane-C_JViswO.js";import"./index-B7oLkWTs.js";import"./less-Cb2GPmNz.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
