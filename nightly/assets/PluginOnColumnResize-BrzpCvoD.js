import{j as o}from"./iframe-Bn2VcNjM.js";import{useMDXComponents as n}from"./index-B8O2NRso.js";import{I as r,F as m}from"./CommandsAndQueries-Duu3Cv2i.js";import{M as p,C as s}from"./blocks-DxdZj58t.js";import"./Tag-CP1g89nG.js";import"./index-DP2Vk4N-.js";import"./copy-BNtdn9f6.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D27vu2Iz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPtlwBkZ.js";import"./index-DtkUQ_fK.js";import"./index-DwYiaS9z.js";import"./Link-BGC1cQo4.js";import"./index-FmeoD5BD.js";import"./index-DzdCI7N0.js";import"./index-DQbgfd5S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2LahRfeL.js";import"./addCustomCSSWithScoping-I5ABusfy.js";import"./index-BmvAtQRx.js";import"./information-BknIne9K.js";import"./sys-enter-2-BaImGntK.js";import"./alert-B1eI2qVm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-rJudJm1L.js";import"./delete-BgM6NZU8.js";import"./settings-afU_X4y-.js";import"./NoData-CCTUaH-Y.js";import"./IllustratedMessage-BPXTEFZ6.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-C_smXuSi.js";import"./index-BK6gcuUd.js";import"./index-CmUtXOfx.js";import"./slim-arrow-down-CUDCAHka.js";import"./Input-BRWw1loe.js";import"./ResponsivePopoverCommon.css-HzvDnCCK.js";import"./ValueStateMessage.css-CumaGiZ4.js";import"./Suggestions.css-B1xe7rBm.js";import"./ListBoxItemGroupTemplate-CBq7J_0z.js";import"./ComboBoxItemGroup-BgBIYp1f.js";import"./ListItemBaseTemplate-C6sbgtZB.js";import"./Token-Dkk7tYZz.js";import"./ScrollEnablement-lrDN0VT4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BTqMzjs9.js";import"./ToggleButton-B-vG7hWq.js";import"./SuggestionItem-DGtw1FTX.js";import"./index-BxSXfCyg.js";import"./Option-B4c11NHt.js";import"./index-asog46eu.js";import"./SegmentedButton-D2oS9802.js";import"./index-CDC27Oew.js";import"./Select-D5v1ik0j.js";import"./InvisibleMessage-BEsY7hLw.js";import"./slim-arrow-down-pvLvaCi8.js";import"./index-Cn-qTtFd.js";import"./index-DeKz9Gr2.js";import"./index-BMosTBn7.js";import"./index-B_IlMEln.js";import"./IconDesign-DXd8PPVF.js";import"./filter-acsAtnVB.js";import"./group-2-BXSvOObK.js";import"./sort-descending-izY6pxiw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dilp9cxP.js";import"./utils-DNXn1egh.js";import"./index-B8fEAJyK.js";import"./index-Be2AqBQ6.js";import"./index-CxElvdDf.js";import"./navigation-down-arrow-CvLpJA3c.js";import"./navigation-right-arrow-3m_p4YUA.js";import"./navigation-right-arrow-7tFU-dQd.js";import"./useCurrentTheme-Do2EjltT.js";import"./index-B3Djr-1p.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-12mExhQT.js";import"./paper-plane-C3T5G7aG.js";import"./index-DWOSVsfp.js";import"./less-DawEbsJp.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
