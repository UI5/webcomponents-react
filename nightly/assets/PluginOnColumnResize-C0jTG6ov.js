import{j as o}from"./iframe-B4y_-iU1.js";import{useMDXComponents as r}from"./index-Dmi6nQVe.js";import{I as n,F as m}from"./CommandsAndQueries-CcSeU6ue.js";import{M as p,C as s}from"./blocks-sxqAtQzk.js";import"./Tag-DlHRwvSs.js";import"./index-Dllizol6.js";import"./copy-DoYKp7vI.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DU8_U4hv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUhg4Pue.js";import"./index-D9CWAfTz.js";import"./index-C7p9xCdn.js";import"./Link-DqVeu_cc.js";import"./index-BBdeIQ4g.js";import"./index-Bfg65B6s.js";import"./index-DGhRlPcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY4dR896.js";import"./addCustomCSSWithScoping-B0N-pOai.js";import"./index-BM-ZpZwJ.js";import"./information-D0sGyRbR.js";import"./sys-enter-2-C9g_SRcG.js";import"./alert-D-igEgv7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CFl00F28.js";import"./delete-BdgAa7IT.js";import"./settings-ltoOfpnx.js";import"./NoData-BJ8H7p15.js";import"./IllustratedMessage-CRi5X6Hl.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-WsY88i2i.js";import"./index-Bsvhu9YC.js";import"./slim-arrow-down-Cic8v9YB.js";import"./Input-XpSBxwxq.js";import"./ResponsivePopoverCommon.css-p5LIoyU4.js";import"./ValueStateMessage.css-C6qx3eDB.js";import"./Suggestions.css-BVl5WNmq.js";import"./ListBoxItemGroupTemplate-CZlYWtN3.js";import"./ComboBoxItemGroup-dSVK-GrP.js";import"./ListItemBaseTemplate-BejSvRNG.js";import"./Token-Cw5uKiHz.js";import"./ScrollEnablement-D-ijl2E6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C_E-KHlV.js";import"./ToggleButton-5M-n5tkv.js";import"./SuggestionItem-M84D7oJF.js";import"./index-Bg7lGMvz.js";import"./Option-PNrPnZNL.js";import"./index-6pImetbD.js";import"./SegmentedButton-2LOsQkf5.js";import"./index-DvcI1fSE.js";import"./Select-B0cOOa_z.js";import"./InvisibleMessage-Cys8KAyT.js";import"./slim-arrow-down-DfvaHgtM.js";import"./index-BJc6WN0K.js";import"./index-CVLYvjV6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Buk7-JyN.js";import"./group-2-Dw1BqplP.js";import"./sort-descending-CyAGymLL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEnt0uUY.js";import"./utils-C87OY1Pr.js";import"./index-D9yVLeiz.js";import"./index-W0AxIMnu.js";import"./index-DWX4uZHR.js";import"./navigation-down-arrow-BRrWGW8j.js";import"./navigation-right-arrow-C4VgjZ90.js";import"./navigation-right-arrow-DfdYJymZ.js";import"./useCurrentTheme-Cd3Dd4gq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Doi2sOOu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-lEOPI8BW.js";import"./paper-plane-Bd-SY9K2.js";import"./index-D43uRIcM.js";import"./less-DeoJiXSy.js";import"./index-DPmqrGlx.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
