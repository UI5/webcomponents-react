import{j as e}from"./iframe-43wlDzrj.js";import{useMDXComponents as n}from"./index-XbeLC3PN.js";import{I as r,F as s}from"./CommandsAndQueries-BVePbTmS.js";import{M as l,C as a}from"./blocks-VCr_TDgJ.js";import"./Tag-DvuRdu_J.js";import"./index-D_51MvSW.js";import"./copy-CHCJaVsW.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D10oF3Zp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeIthXDN.js";import"./index-NATKJxhC.js";import"./index-CYHyRuCO.js";import"./Link-N85W-l5g.js";import"./addCustomCSSWithScoping-iHDWQtL_.js";import"./index-DHTRveDi.js";import"./index-C_V3uMP5.js";import"./index-Cx3qav0q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D888T4vP.js";import"./index-CNoVY_XQ.js";import"./information-CaFqdV1q.js";import"./sys-enter-2-C8G6jLKW.js";import"./alert-Id5Wcp3M.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGgp7AI6.js";import"./delete-CGKk-GHt.js";import"./settings-azhe1KGA.js";import"./NoData-BUEDhyou.js";import"./IllustratedMessage-DI5ozM4h.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B47dMSPk.js";import"./index-DLDDGmPM.js";import"./slim-arrow-down-C0QargdW.js";import"./Input-BgaYHg51.js";import"./ResponsivePopoverCommon.css-CvwmGqLs.js";import"./ValueStateMessage.css-BHLQ2DbP.js";import"./Suggestions.css-BTUxUlaU.js";import"./ListBoxItemGroupTemplate-_jq9N5mv.js";import"./ComboBoxItemGroup-BnIMpk3_.js";import"./ListItemBaseTemplate-BNZLQVJb.js";import"./Token-DoODEqch.js";import"./ScrollEnablement-Cm1ZvOJx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1ufjNVS.js";import"./ToggleButton-DZrdfmOA.js";import"./SuggestionItem-5jEGmJUe.js";import"./index-D_dLm55z.js";import"./Option-CJ58wD00.js";import"./index-wy3OMWOb.js";import"./SegmentedButton-B-jkLKht.js";import"./index-t8OF5k03.js";import"./Select-BntRU9MY.js";import"./InvisibleMessage-CWwBH76X.js";import"./slim-arrow-down-CeCiJzmU.js";import"./useIsRTL-DZbwhoX7.js";import"./index-BzUhYjna.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CBaC_AY2.js";import"./group-2-BtuK6gfj.js";import"./sort-descending-upcXrfhH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ds45T-GS.js";import"./utils-BQmyXk_Q.js";import"./index-DI_L1vtw.js";import"./index-BVV-gDdT.js";import"./index-C73gXked.js";import"./navigation-down-arrow-CE61iwfG.js";import"./navigation-right-arrow-Dd3smTto.js";import"./navigation-right-arrow-WYE_8Vwt.js";import"./useCurrentTheme-B63DugkT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-cIZdWKhJ.js";import"./debounce-D7W5PopO.js";import"./paper-plane-xHzyfFIj.js";import"./index-Cz9Roaqc.js";import"./less-D_D0iQDA.js";import"./index-Cb6A3wNx.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
