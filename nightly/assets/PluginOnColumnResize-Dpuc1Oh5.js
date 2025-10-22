import{j as o}from"./iframe-D1Ed_P25.js";import{useMDXComponents as n}from"./index-BFLewEmr.js";import{I as r,F as m}from"./CommandsAndQueries-DkK8PXt_.js";import{M as p,C as s}from"./blocks-D0qmmV7H.js";import"./Tag-c5FmtIVB.js";import"./index-CUd6ir2B.js";import"./copy-D1Lui3xc.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DMCM_6uC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyMezxCx.js";import"./index-BiMr4Loi.js";import"./index-BiKUdEyp.js";import"./Link-Bd6EkD5P.js";import"./index-F4shrftk.js";import"./index-RNnJdIaH.js";import"./index-ClmEJuF6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJfOjK1K.js";import"./addCustomCSSWithScoping-DIxW6xjd.js";import"./index-RMrg5o5S.js";import"./information-CLHcsZFK.js";import"./sys-enter-2-uCDsFGT8.js";import"./alert-DcriM5I3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-EBNozTnx.js";import"./delete-Dk0J6CEz.js";import"./settings-D_OQdQr8.js";import"./NoData-BPkK9WTx.js";import"./IllustratedMessage-C8_Tcp5E.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-tEUMgFSt.js";import"./index-CtDslHHK.js";import"./index-CApBczn9.js";import"./slim-arrow-down-TNdCGHP4.js";import"./Input-5rI7b6hj.js";import"./ResponsivePopoverCommon.css-DU4YlHAZ.js";import"./ValueStateMessage.css-CpZa25G1.js";import"./Suggestions.css-3H0-Mr0d.js";import"./ListBoxItemGroupTemplate-CLzBP0c4.js";import"./ComboBoxItemGroup-ApNNq_Wu.js";import"./ListItemBaseTemplate-BkyyzXaB.js";import"./Token-GhjVhKgK.js";import"./ScrollEnablement-DPfv31gz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CNwMXV6a.js";import"./ToggleButton-BS5T7rCY.js";import"./SuggestionItem-DoeL3bWo.js";import"./index-BNdfddNi.js";import"./Option-CyUNWJFn.js";import"./index-CldnWdDQ.js";import"./SegmentedButton-DC3FvJhw.js";import"./index-BUEI2z_e.js";import"./Select-BMILMPUT.js";import"./InvisibleMessage-p9R4CYhZ.js";import"./slim-arrow-down-BaGZSBDW.js";import"./index-bV7fjiFL.js";import"./index-D2IOf4UP.js";import"./index-Df7H6xNj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYgtls1N.js";import"./group-2-B_pp8cML.js";import"./sort-descending-CW9bvIgk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BrqVegQT.js";import"./utils-DLeru89e.js";import"./index-BGXOG_IF.js";import"./index-B31uJoco.js";import"./index-gdwBT8aW.js";import"./navigation-down-arrow-DZXVk8IE.js";import"./navigation-right-arrow-C_fhDzfE.js";import"./navigation-right-arrow-Dqne7Ju2.js";import"./useCurrentTheme-BqKoaCVT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DOrMKtSR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DSdrd2Bt.js";import"./paper-plane-C6yqeebk.js";import"./index-DyNYfJ6H.js";import"./less-wxSG9IpH.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(r,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{sourceState:"none",of:l}),`
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
`,o.jsx(m,{})]})}function Xo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Xo as default};
