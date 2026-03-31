import{j as e}from"./iframe-GXp7lrSQ.js";import{u as n,M as r,C as s}from"./blocks-XkJ722q3.js";import{I as l}from"./CommandsAndQueries-CVcJVi5r.js";import"./Tag-CUfffkkD.js";import"./index-D9hIm448.js";import"./copy-_WAqiJ1e.js";import{F as a}from"./Footer-uVHBRSQb.js";import"./PageNotFound-VnOdSsgo.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CCSynAfm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B8HUwSLv.js";import"./index-BLkFX4jD.js";import"./index-C-99lkBL.js";import"./index-CrV5gfjE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHLtduuY.js";import"./addCustomCSSWithScoping-lRpYguTz.js";import"./index-CMKcbagv.js";import"./index-CmMI2aTL.js";import"./index-BXKqqHdE.js";import"./information-CwevoeOo.js";import"./sys-enter-2-BSdQUe02.js";import"./alert-Ds801M6U.js";import"./index-TceWecEs.js";import"./Illustrations-C-7wSXd8.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-VX4Vhqj7.js";import"./delete-B8zG0JxE.js";import"./settings-DnQ-nfdc.js";import"./NoData-AnHrsfo0.js";import"./NoFilterResults--i8J2M-o.js";import"./index-CERoqhvX.js";import"./IllustratedMessage--eZuDK_7.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CNbkdYFu.js";import"./Input-KO3l8Brk.js";import"./ResponsivePopoverCommon.css-Bc1a9KNA.js";import"./ValueStateMessage.css-D80lJWSa.js";import"./Suggestions.css-Ahw1quaz.js";import"./ListBoxItemGroupTemplate-DZFQ85cg.js";import"./ComboBoxItemGroup-ChKegmig.js";import"./ListItemBaseTemplate-XA1LRcK1.js";import"./Token-DR2_YNLL.js";import"./ScrollEnablement-BbZ7dfG4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B3m1DJEV.js";import"./ToggleButton-DwOQOQFC.js";import"./multiselect-all-TGdLhybc.js";import"./SuggestionItem-DQ4y2WD-.js";import"./index-DvYiMBT8.js";import"./Option-Dny_IhR6.js";import"./index-D9qCtwZi.js";import"./SegmentedButton-eU4n5SAR.js";import"./index-BHKTmJbu.js";import"./Select-CBTMV-I6.js";import"./InvisibleMessage-B-Rt2GQk.js";import"./index-fq_8vrBy.js";import"./index-CCgw5w5e.js";import"./index-Dhtc0t_i.js";import"./index-IufG6BAY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DQv9rnJ_.js";import"./group-2-CF9rBu8z.js";import"./sort-descending-8sFhQ0eM.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-mb2VS-jK.js";import"./utils-DMvTp3cY.js";import"./index-17IJ72DP.js";import"./index-D6OX3dYP.js";import"./index-i-wVs0AQ.js";import"./navigation-down-arrow-C9-QFAwk.js";import"./navigation-right-arrow-dF8lHbv3.js";import"./navigation-right-arrow-yvrVO2q2.js";import"./useCurrentTheme-cF8gI2uX.js";import"./index-B9tnRND4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZHvydOv.js";import"./paper-plane-AB8Tri35.js";import"./index-Btq87WCk.js";import"./less-DUrSicmG.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(l,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,e.jsx(s,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function ze(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{ze as default};
