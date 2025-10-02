import{j as o}from"./iframe-CCKRZdbF.js";import{useMDXComponents as r}from"./index-BW1v5Z1e.js";import{I as n,F as m}from"./CommandsAndQueries-D1vMTwJ_.js";import{M as p,C as s}from"./blocks-DizR4yrp.js";import"./Tag-D_1GVpYe.js";import"./index-BXous6Vg.js";import"./copy-DCYvEQ2A.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BY_i5uVM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ppkYs0Pw.js";import"./index-TT9wAavy.js";import"./index-C4ynR4jc.js";import"./Link-DVIX6xLA.js";import"./index-Xy0A6wMV.js";import"./index-BMpz4bfD.js";import"./index-byvg7TJC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di3RALWU.js";import"./addCustomCSSWithScoping-BCWPiCrh.js";import"./index-DgC4fDU8.js";import"./information-DXZj2K0P.js";import"./sys-enter-2-_UoM3OrC.js";import"./alert-BYsKIWrN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DlXGJ_VL.js";import"./delete-D8TdfBV2.js";import"./settings-DOirttvF.js";import"./NoData-DD85yEi3.js";import"./IllustratedMessage-Clfpji7f.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-_rMq9ILm.js";import"./index-BkArYS5g.js";import"./slim-arrow-down-BZhadXVl.js";import"./Input-C5oVUkIB.js";import"./ResponsivePopoverCommon.css-Bikw0MiR.js";import"./ValueStateMessage.css-BuporDJE.js";import"./Suggestions.css-0ImH9Wru.js";import"./ListBoxItemGroupTemplate-ognKSaX6.js";import"./ComboBoxItemGroup-d7zArK7N.js";import"./ListItemBaseTemplate-BkJwMcM3.js";import"./Token-BEFr1xPt.js";import"./ScrollEnablement-BBtwJSnx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DBjVOyrh.js";import"./ToggleButton-B3jU_WZR.js";import"./SuggestionItem-CBgTR6O3.js";import"./index-BAMuu1mV.js";import"./Option-DaCvETte.js";import"./index-BrrdD8jw.js";import"./SegmentedButton-tNr2gkyL.js";import"./index-C329Ucmy.js";import"./Select-CaT0Uyc0.js";import"./InvisibleMessage-4YLx3Nor.js";import"./slim-arrow-down-CfkSdpPj.js";import"./index-CriRaI3g.js";import"./index-DYCg0rFm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-4F45alAB.js";import"./group-2-ChPXGWJ0.js";import"./sort-descending-CANJAVhZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Y-BADZTS.js";import"./utils-DSjF8HMp.js";import"./index-Cj12FuCk.js";import"./index-D6hI8QST.js";import"./index-Bk7OThpJ.js";import"./navigation-down-arrow-BqWqvXKw.js";import"./navigation-right-arrow-EEj5yORF.js";import"./navigation-right-arrow-lOLkkaQa.js";import"./useCurrentTheme-Cidp3UIH.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D1F5uvoT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dajtv9JX.js";import"./paper-plane-C6c1Gi-x.js";import"./index-DKHGOPrC.js";import"./less-TJfV8SH9.js";import"./index-X_VuPj-3.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
