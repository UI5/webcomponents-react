import{j as o}from"./iframe-CTc_pUME.js";import{useMDXComponents as r}from"./index-CbFOQhGC.js";import{I as n,F as m}from"./CommandsAndQueries-BKl-Lehx.js";import{M as p,C as s}from"./blocks-Bdab0qOx.js";import"./Tag-BJVcJF8V.js";import"./index-BmIFgcgy.js";import"./copy-CX-UstQv.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-KHHhuFbE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Z8jBBqBa.js";import"./index-C61H3I4w.js";import"./index-cPYEFV1s.js";import"./Link-CIXpUy3N.js";import"./index-dZVrSoBW.js";import"./index-MjXDOENA.js";import"./index-CHi_LEvO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B7yiJaHj.js";import"./addCustomCSSWithScoping-Dc_j6Yzk.js";import"./index-6ELyezq3.js";import"./information-BUnhqMn4.js";import"./sys-enter-2-DOV5JEOM.js";import"./alert-DylNOMF0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIKwfdQg.js";import"./delete-kbtfU-Be.js";import"./settings-BLPPWMrz.js";import"./NoData-5paOsqOO.js";import"./IllustratedMessage-Ds6OazXP.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BcphOOS6.js";import"./index-Cz9iPqTS.js";import"./slim-arrow-down-C939bzhs.js";import"./Input-DwKwevQu.js";import"./ResponsivePopoverCommon.css-DVODeCs6.js";import"./ValueStateMessage.css-CEEhjmep.js";import"./Suggestions.css-D-Gi3AK0.js";import"./ListBoxItemGroupTemplate-DvohLQqN.js";import"./ComboBoxItemGroup-Dp8wVEki.js";import"./ListItemBaseTemplate-Flt8m4GL.js";import"./Token-B0g-cX5V.js";import"./ScrollEnablement-Dqoexmfr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3YrrMZt.js";import"./ToggleButton-gg5kcSkt.js";import"./SuggestionItem-D0rTiphA.js";import"./index-Blj39MLR.js";import"./Option-CsGmFVxt.js";import"./index-DCTt8g0K.js";import"./SegmentedButton-BADV9MET.js";import"./index-CurbkiN8.js";import"./Select-5ZecXlmx.js";import"./InvisibleMessage-sw3UNfwB.js";import"./slim-arrow-down-B_qgXS-y.js";import"./index-CP2pU2KW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BLV8HYZD.js";import"./group-2-CcIeK99E.js";import"./sort-descending-D80ou1nO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BgNFH_bM.js";import"./utils-DAL9-AHg.js";import"./index-Brew3N2g.js";import"./index-9vQVNdmd.js";import"./index-6fpphJyg.js";import"./navigation-down-arrow-TIAFyztM.js";import"./navigation-right-arrow-BigkpvCQ.js";import"./navigation-right-arrow-B100tUdc.js";import"./useCurrentTheme-D2CPEB2n.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DLD--ZCq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmQn44KR.js";import"./paper-plane-DZOaRTqB.js";import"./index-kRlvFPPJ.js";import"./less-Bbv1vYfG.js";import"./index-rhUIVPqF.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
