import{j as o}from"./iframe-DHodyxHg.js";import{useMDXComponents as r}from"./index-BN78HojQ.js";import{I as n,F as m}from"./CommandsAndQueries-BJoNcE_T.js";import{M as p,C as s}from"./blocks-DRbngUD5.js";import"./Tag-AoT1Wzdr.js";import"./index-C_UZWXPq.js";import"./copy-HtbMTlWB.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CjRnrZ5o.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LizrXBCk.js";import"./index-H_vNaU3m.js";import"./index-CzYnO6dI.js";import"./Link-DVjUQMmu.js";import"./index-8C_wghAv.js";import"./index-CuoqTBPK.js";import"./index-Bf66SqZa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D26g_6Hi.js";import"./addCustomCSSWithScoping-BBYARKEG.js";import"./index-Cbt6pGSR.js";import"./information-CikfZyec.js";import"./sys-enter-2-CGw1AdWq.js";import"./alert-fS8iZOwW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Tg2_K8Hr.js";import"./delete-Zcb2vEJ9.js";import"./settings-BD-RgLuV.js";import"./NoData-ZyVsLGlx.js";import"./IllustratedMessage-DWYc-Nj8.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-C-nNTrYT.js";import"./index-B9OIuk5u.js";import"./slim-arrow-down-RUw4_20M.js";import"./Input-CPLuf8pl.js";import"./ResponsivePopoverCommon.css-acGEx8eA.js";import"./ValueStateMessage.css-DdKqUqjJ.js";import"./Suggestions.css-B9GwOVjc.js";import"./ListBoxItemGroupTemplate-DbSMHwWh.js";import"./ComboBoxItemGroup-BpKRweKF.js";import"./ListItemBaseTemplate-DgUnC3lw.js";import"./Token-CbMshDZu.js";import"./ScrollEnablement-QqZ8MTp1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ob80DdRY.js";import"./ToggleButton-BKWW76vP.js";import"./SuggestionItem-C9bc-o4q.js";import"./index-S-wdO51Z.js";import"./Option-Dgeh_gWY.js";import"./index-BtsPFHyJ.js";import"./SegmentedButton-Dgc_oaRw.js";import"./index-B1iSRk56.js";import"./Select-DZKbaPCr.js";import"./InvisibleMessage-k0Gva9XM.js";import"./slim-arrow-down-cqA_BTp3.js";import"./index-Bq3O3R5l.js";import"./index-H_BorQOy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CYwltf-g.js";import"./group-2-C2sMZn1f.js";import"./sort-descending-DrgkNws6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bo9NW1qj.js";import"./utils-BwVDplvj.js";import"./index-ja_VFHYZ.js";import"./index-BzHA07QR.js";import"./index-V-s4kElR.js";import"./navigation-down-arrow-BKyAuWCW.js";import"./navigation-right-arrow-DRM4c8S8.js";import"./navigation-right-arrow-DbKnsnOZ.js";import"./useCurrentTheme-CxvZJkfq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BUmA-QY0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2F7gVSb.js";import"./paper-plane-UC5z0UMH.js";import"./index-DRtfFjjT.js";import"./less-D8BZSXoC.js";import"./index-CurBf1wH.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
