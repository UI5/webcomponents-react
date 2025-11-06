import{j as e}from"./iframe-cRRiQYmf.js";import{useMDXComponents as n}from"./index-Bs0WiH3G.js";import{I as r,F as s}from"./CommandsAndQueries-6fQDSTza.js";import{M as l,C as a}from"./blocks-BE5V3uJk.js";import"./Tag-CfbQk3KA.js";import"./index-ByOWo14Z.js";import"./copy-B18ZHZAg.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-SnDQDGkq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DBZCyEHT.js";import"./index-DUKoRTQU.js";import"./index-BO1H95-d.js";import"./Link-CLMkrIwX.js";import"./index-BFR5idok.js";import"./index-DtECOzdu.js";import"./index-CIJf_Fw_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AOA_k-Lh.js";import"./addCustomCSSWithScoping-OHQyl5Vz.js";import"./index-CSUcx8X8.js";import"./information-De5Q3Snv.js";import"./sys-enter-2-D3hJu-L0.js";import"./alert-B4Rl3843.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BK8mUCRL.js";import"./delete-Bd7yIIZR.js";import"./settings-CkxhKC3j.js";import"./NoData-BehLBpti.js";import"./IllustratedMessage-DqABzVpa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-VL3fZtOd.js";import"./index-Bx4iySkn.js";import"./index-CY4bohbd.js";import"./slim-arrow-down-DZLbO_TY.js";import"./Input-O88X3mcn.js";import"./ResponsivePopoverCommon.css-BT4UA6Ai.js";import"./ValueStateMessage.css-C-lEZ5fy.js";import"./Suggestions.css-BtMgvrZ_.js";import"./ListBoxItemGroupTemplate-BLsE5HOe.js";import"./ComboBoxItemGroup-BaeQpQAH.js";import"./ListItemBaseTemplate-DdTsTPm6.js";import"./Token-DF7-FLbj.js";import"./ScrollEnablement-C_xMDTEO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-S4OY1eRO.js";import"./ToggleButton-CviqyRwB.js";import"./SuggestionItem-CjLVovyh.js";import"./index-CoDhBCO9.js";import"./Option-GMye3bh3.js";import"./index-D4jzIrzX.js";import"./SegmentedButton-uhejKh0q.js";import"./index-DeMEMDE-.js";import"./Select-CkiWgRnV.js";import"./InvisibleMessage-BlcyWLwi.js";import"./slim-arrow-down-C0fV2X2u.js";import"./index-Ks8eZ4TE.js";import"./index-Bo-pJJ92.js";import"./index-BoMEYoEg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcVMbh74.js";import"./group-2-BGmIa860.js";import"./sort-descending-Ce8AiZNs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWIjNCzP.js";import"./utils-CZLAE_2R.js";import"./index-DrKrZdYX.js";import"./index-BVEPWHWu.js";import"./index-CXNthmCr.js";import"./navigation-down-arrow-BxseiaEF.js";import"./navigation-right-arrow-DQ_EAbwb.js";import"./navigation-right-arrow-CpRhiy_v.js";import"./useCurrentTheme-Dho7lVR9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-GZDFVWPb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CENrkM0D.js";import"./paper-plane-BQ0EpgoV.js";import"./index-wG1F1-kD.js";import"./less-DiFkS5DT.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
