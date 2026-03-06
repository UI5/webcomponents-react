import{j as o}from"./iframe-Ded5Mxh2.js";import{useMDXComponents as r}from"./index-CBfl9quq.js";import{I as n}from"./CommandsAndQueries-Ddo3tZ3K.js";import{M as m,C as p}from"./blocks-wt3pPbD-.js";import"./Tag-CDOQSrMR.js";import"./index-DFifKHPS.js";import"./copy-IKAWbId8.js";import{F as s}from"./Footer-1OmcbI64.js";import"./PageNotFound-CXW0ieku.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BzxY5k0R.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DSsFOfLn.js";import"./index-jHFtLiCf.js";import"./index-BmNOE6G0.js";import"./index-BfPsTBbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DHMdvhLY.js";import"./addCustomCSSWithScoping-CBqV9zN1.js";import"./index-CU0yEW5I.js";import"./index-BiAFWhEK.js";import"./index-Cmea41Uz.js";import"./information-YHPlo4lO.js";import"./sys-enter-2-C0FqqFCv.js";import"./alert-K2R8mcWk.js";import"./index-DNd61viN.js";import"./Illustrations-Btxulb8H.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BecE1XJn.js";import"./delete-D0fZzTI7.js";import"./settings-C7B_j-Y8.js";import"./NoData-BrFbWOpJ.js";import"./NoFilterResults-DtaXtqI5.js";import"./index-b0uBMMNt.js";import"./IllustratedMessage-CuBg-vsE.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DH-ja5wq.js";import"./Input-CI6efGcd.js";import"./ResponsivePopoverCommon.css-_OfTkZKW.js";import"./ValueStateMessage.css-DG6SMCv6.js";import"./Suggestions.css-C-q057v5.js";import"./ListBoxItemGroupTemplate-Cfx7Lf4g.js";import"./ComboBoxItemGroup-BIHv5yMY.js";import"./ListItemBaseTemplate-DbmRhLb7.js";import"./Token-MKsNkpqX.js";import"./ScrollEnablement-DENm7iV6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Buphkil0.js";import"./ToggleButton-D3QrfdJw.js";import"./multiselect-all-DLY9p4ls.js";import"./SuggestionItem-Aa3qI1bT.js";import"./index-DiBTKK6u.js";import"./Option-DQV_eQib.js";import"./index-DwPUuk8S.js";import"./SegmentedButton-DuL9bfd4.js";import"./index-BvcEfRdb.js";import"./Select-Dv1RKQLj.js";import"./InvisibleMessage-B1Swz3mZ.js";import"./index-DyOFSSg-.js";import"./index-A2a3Zx38.js";import"./index-DfqEQVv9.js";import"./index-kph-pUw5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJyVYiUy.js";import"./group-2-BCj0Bybz.js";import"./sort-descending-CpxrLLEz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-9DAmB-YI.js";import"./utils-C_Aw_RzH.js";import"./index-Bh6yOWs7.js";import"./index-CkB06Bxg.js";import"./index-4J07KdAi.js";import"./navigation-down-arrow-BnonnUuZ.js";import"./navigation-right-arrow-C1kC_5OC.js";import"./navigation-right-arrow-aXOPQJFG.js";import"./useCurrentTheme-rsX3oT80.js";import"./index-CZHJXIH7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-UbDyFkqU.js";import"./paper-plane-BqlJm9UU.js";import"./index-BwAv9f_2.js";import"./less-Bo9zRhMB.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{sourceState:"none",of:l}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = useCallback((e) => {
    console.log(e.columnWidth, e.header);
  }, []);

  const tableHooks = useMemo(
    () => [
      useOnColumnResize(handleColumResize, {
        liveUpdate: false,
        wait: 100,
      }),
    ],
    [handleColumResize],
  );

  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
