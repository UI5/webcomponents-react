import{j as o}from"./iframe-dY_MtB0H.js";import{useMDXComponents as n}from"./index-lTaYTAxK.js";import{I as r,F as m}from"./CommandsAndQueries-BmTyHFa7.js";import{M as p,C as s}from"./blocks-Cb83AQYu.js";import"./Tag-CxsGqX-Z.js";import"./index-Bn3aq9YQ.js";import"./copy-D63JhW9h.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DIrstwVo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3rLokAO.js";import"./index-SPIujRFM.js";import"./index-CvfG5erE.js";import"./Link-CVqB5eeU.js";import"./index-B-7UltV5.js";import"./index-DLNzTjP4.js";import"./index-Bzi9OmH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xawsFKB1.js";import"./addCustomCSSWithScoping-Dwp_g_5J.js";import"./index-C_5JPwqD.js";import"./information-D5v06NEv.js";import"./sys-enter-2-Db0ak0Nd.js";import"./alert-BFAYnF-v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DaLQSA0E.js";import"./delete-g2CuJ_wb.js";import"./settings-DAd_6mYH.js";import"./NoData-Blv8I7YQ.js";import"./IllustratedMessage-BLDDWSdA.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CaqiHixB.js";import"./index-qJBtItPV.js";import"./index-CWiSxvhn.js";import"./slim-arrow-down-CKBotrxy.js";import"./Input-DxE4TE5M.js";import"./ResponsivePopoverCommon.css-BS9wczML.js";import"./ValueStateMessage.css-CwzPbVeu.js";import"./Suggestions.css-BjOM4Zj7.js";import"./ListBoxItemGroupTemplate-DFxbQhuY.js";import"./ComboBoxItemGroup-DkBoYEbS.js";import"./ListItemBaseTemplate-Yzd_BkA_.js";import"./Token-BIFWvplK.js";import"./ScrollEnablement-D1kjFpjc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-5edM-Bva.js";import"./ToggleButton-TjzAbPq5.js";import"./SuggestionItem-C57ebMKU.js";import"./index-CaPdWPLL.js";import"./Option-C1ySdqTY.js";import"./index-zXzmY2rb.js";import"./SegmentedButton-Jhgj92Ar.js";import"./index-DTHWpZOl.js";import"./Select-AWtqTVOK.js";import"./InvisibleMessage-B3-0tvhv.js";import"./slim-arrow-down-BOfgu5aU.js";import"./index-DYbah51H.js";import"./index-CP0kb2RZ.js";import"./index-CfFSy1iK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DUmJLfmv.js";import"./group-2-1jf4JmlH.js";import"./sort-descending-Dm9j_ynP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B-5V9EsP.js";import"./utils-BWRe96GN.js";import"./index-DEtQnl29.js";import"./index-DQ1x_Uk-.js";import"./index-CPn1OsK-.js";import"./navigation-down-arrow-Di7D0dyJ.js";import"./navigation-right-arrow-Ds1fXGh0.js";import"./navigation-right-arrow-BZlFav50.js";import"./useCurrentTheme-D3zL71pS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IWQOu6Ty.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D5nyE8Ez.js";import"./paper-plane-CAK1tVhg.js";import"./index-Dp-bSeZB.js";import"./less-Djd8oRMN.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
