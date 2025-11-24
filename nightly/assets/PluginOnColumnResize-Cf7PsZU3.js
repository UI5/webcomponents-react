import{j as o}from"./iframe-BsBPxA6U.js";import{useMDXComponents as n}from"./index-C_R4y4V0.js";import{I as r,F as m}from"./CommandsAndQueries-DGdgKo6k.js";import{M as p,C as s}from"./blocks-CEOEebKO.js";import"./Tag-DSoKri1G.js";import"./index-Doky9Mkb.js";import"./copy-CRGjVpRv.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dz_KgCtN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAH0250y.js";import"./index-Dmhochbe.js";import"./index-gPsABUAK.js";import"./Link-BHFGfTB0.js";import"./index-Cihbk1NA.js";import"./index-BLjU5XqX.js";import"./index-DNCqkTDx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmx-BJlM.js";import"./addCustomCSSWithScoping-DbsNQuuI.js";import"./index-CNyanKq8.js";import"./information-Bj9U_7MQ.js";import"./sys-enter-2-C6mBZBNJ.js";import"./alert-Y2sfMbhe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C4DK1I8l.js";import"./delete-C6tWuqNf.js";import"./settings-BUVkF3or.js";import"./NoData-DPwuC6Ww.js";import"./IllustratedMessage-It4mX3AQ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DhRkh9dN.js";import"./index-BtadPSsW.js";import"./index-BfYOfOm3.js";import"./slim-arrow-down-BaJTeNEG.js";import"./Input-CZwakjm4.js";import"./ResponsivePopoverCommon.css-hQ9zDC9y.js";import"./ValueStateMessage.css-BaLdzHVw.js";import"./Suggestions.css-BqCzwqUI.js";import"./ListBoxItemGroupTemplate-IGzCyZVh.js";import"./ComboBoxItemGroup-SG-_g7dw.js";import"./ListItemBaseTemplate-k46UOCLs.js";import"./Token-4ELyI29f.js";import"./ScrollEnablement-B0j5N4_F.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-kYAT9Ja4.js";import"./ToggleButton-KhlEWnLT.js";import"./SuggestionItem-DsimlpEO.js";import"./index-B7yLONbc.js";import"./Option-MDNU8gos.js";import"./index-BkljQy5l.js";import"./SegmentedButton-Khrwb6vJ.js";import"./index-ClW9_Eny.js";import"./Select-C61ga_69.js";import"./InvisibleMessage-BwHxjeMJ.js";import"./slim-arrow-down-DFzi0AoL.js";import"./index-VtRttBiA.js";import"./index-DXUdswCl.js";import"./index-CW8aTQPD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D_shFmJq.js";import"./group-2-Da-lZ-6m.js";import"./sort-descending-CyfD2MR5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CrbezpGL.js";import"./utils-D0C3Iy2F.js";import"./index-BRI8OzSg.js";import"./index-IBVyyHs_.js";import"./index-CNoWV0dk.js";import"./navigation-down-arrow-BpmVanxM.js";import"./navigation-right-arrow-CWj3M1Tb.js";import"./navigation-right-arrow-BGWB-c0_.js";import"./useCurrentTheme-BPpHV_8o.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CrP7PNSA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C1Y1l0w-.js";import"./paper-plane-cf9bL5y_.js";import"./index-BFI-nP8P.js";import"./less-DicCpNe9.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
