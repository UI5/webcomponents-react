import{j as e}from"./iframe-DMCuegit.js";import{u as n,M as r,C as s}from"./blocks-_hT2CGz-.js";import{I as l}from"./CommandsAndQueries-C9E2MGX7.js";import"./Tag-DKKBiDqY.js";import"./index-eKDFsa2E.js";import"./copy-CPtUp5y0.js";import{F as a}from"./Footer-0Wa-LUTc.js";import"./PageNotFound-BG19bJbD.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D-i6P8d2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CmPTNs7p.js";import"./index-C9z-ZS1p.js";import"./index-C1STFZgh.js";import"./index-Di3QE5re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5tqyg7w.js";import"./addCustomCSSWithScoping-C0Smz55A.js";import"./index-otx7j-A2.js";import"./index-Dzpyi8IH.js";import"./index-D62lIz3L.js";import"./information-5_fbL55R.js";import"./sys-enter-2-Dil9t1r8.js";import"./alert-D7vPLYbi.js";import"./index-DEoJMyHo.js";import"./Illustrations-bTO4h7is.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CPITllAz.js";import"./delete-90NTeC2G.js";import"./settings-BG5LV0dM.js";import"./NoData-DxVxgFNc.js";import"./NoFilterResults-DMxlrcRZ.js";import"./index-63F5wA8L.js";import"./IllustratedMessage-ChulAt0j.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D-POlRPn.js";import"./Input-DirUDi6l.js";import"./ResponsivePopoverCommon.css-MXP7eeX6.js";import"./ValueStateMessage.css-D7j-2cj5.js";import"./Suggestions.css-Dvj1z-OQ.js";import"./ListBoxItemGroupTemplate-DOKgNhxC.js";import"./ComboBoxItemGroup-2Q_3jSBR.js";import"./ListItemBaseTemplate-BtXEjops.js";import"./Token-Dnuzgc0h.js";import"./ScrollEnablement-CBsMaVqO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DPUfNWM3.js";import"./ToggleButton-CVG3irva.js";import"./multiselect-all-BNqAQuwc.js";import"./SuggestionItem-CyvdCOt4.js";import"./index-DxWvkwco.js";import"./Option-K8omM4DC.js";import"./index-OeONlChn.js";import"./SegmentedButton-Bb6xVT4r.js";import"./index-DCMtMQFC.js";import"./Select-47892hrl.js";import"./InvisibleMessage-C3Ae3U1K.js";import"./index-Bl1X9PN5.js";import"./index-DBNpGVow.js";import"./index-BhAgdMmO.js";import"./index-CFS5q5jB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1hkl8V2.js";import"./group-2-CV4D2AOR.js";import"./sort-descending-BHZhyBvt.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DyUeQWg1.js";import"./utils-C6QaWlgq.js";import"./index-Cr983ZDU.js";import"./index-D4mlnoSI.js";import"./index-C773jyxg.js";import"./navigation-down-arrow-DVefUV5T.js";import"./navigation-right-arrow-DcZIB6we.js";import"./navigation-right-arrow-DoT4kgVk.js";import"./useCurrentTheme-D1A3ODx0.js";import"./index-E66unuDm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D9xi9QIt.js";import"./paper-plane-DLKkAQKF.js";import"./index-GAFO2n_O.js";import"./less-BieZFKIn.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
