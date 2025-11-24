import{j as e}from"./iframe-BsBPxA6U.js";import{useMDXComponents as n}from"./index-C_R4y4V0.js";import{I as r,F as s}from"./CommandsAndQueries-DGdgKo6k.js";import{M as l,C as a}from"./blocks-CEOEebKO.js";import"./Tag-DSoKri1G.js";import"./index-Doky9Mkb.js";import"./copy-CRGjVpRv.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dz_KgCtN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAH0250y.js";import"./index-Dmhochbe.js";import"./index-gPsABUAK.js";import"./Link-BHFGfTB0.js";import"./index-Cihbk1NA.js";import"./index-BLjU5XqX.js";import"./index-DNCqkTDx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmx-BJlM.js";import"./addCustomCSSWithScoping-DbsNQuuI.js";import"./index-CNyanKq8.js";import"./information-Bj9U_7MQ.js";import"./sys-enter-2-C6mBZBNJ.js";import"./alert-Y2sfMbhe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C4DK1I8l.js";import"./delete-C6tWuqNf.js";import"./settings-BUVkF3or.js";import"./NoData-DPwuC6Ww.js";import"./IllustratedMessage-It4mX3AQ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DhRkh9dN.js";import"./index-BtadPSsW.js";import"./index-BfYOfOm3.js";import"./slim-arrow-down-BaJTeNEG.js";import"./Input-CZwakjm4.js";import"./ResponsivePopoverCommon.css-hQ9zDC9y.js";import"./ValueStateMessage.css-BaLdzHVw.js";import"./Suggestions.css-BqCzwqUI.js";import"./ListBoxItemGroupTemplate-IGzCyZVh.js";import"./ComboBoxItemGroup-SG-_g7dw.js";import"./ListItemBaseTemplate-k46UOCLs.js";import"./Token-4ELyI29f.js";import"./ScrollEnablement-B0j5N4_F.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-kYAT9Ja4.js";import"./ToggleButton-KhlEWnLT.js";import"./SuggestionItem-DsimlpEO.js";import"./index-B7yLONbc.js";import"./Option-MDNU8gos.js";import"./index-BkljQy5l.js";import"./SegmentedButton-Khrwb6vJ.js";import"./index-ClW9_Eny.js";import"./Select-C61ga_69.js";import"./InvisibleMessage-BwHxjeMJ.js";import"./slim-arrow-down-DFzi0AoL.js";import"./index-VtRttBiA.js";import"./index-DXUdswCl.js";import"./index-CW8aTQPD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D_shFmJq.js";import"./group-2-Da-lZ-6m.js";import"./sort-descending-CyfD2MR5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CrbezpGL.js";import"./utils-D0C3Iy2F.js";import"./index-BRI8OzSg.js";import"./index-IBVyyHs_.js";import"./index-CNoWV0dk.js";import"./navigation-down-arrow-BpmVanxM.js";import"./navigation-right-arrow-CWj3M1Tb.js";import"./navigation-right-arrow-BGWB-c0_.js";import"./useCurrentTheme-BPpHV_8o.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CrP7PNSA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C1Y1l0w-.js";import"./paper-plane-cf9bL5y_.js";import"./index-BFI-nP8P.js";import"./less-DicCpNe9.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
