import{j as o}from"./iframe-HvCg7yUW.js";import{useMDXComponents as r}from"./index-CE4Hfwqi.js";import{I as n,F as m}from"./CommandsAndQueries-DUi4l31N.js";import{M as p,C as s}from"./blocks-D8Z2Dyw_.js";import"./Tag-BplAIBUz.js";import"./index-DuAmAsky.js";import"./copy-DBsC0j81.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CFK3HHrv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iO1m8u6x.js";import"./index-BaM0OdR1.js";import"./index-DPhzHQJ0.js";import"./Link-Bg-vZYST.js";import"./index-DmLJcEoD.js";import"./index-D5kiTLsH.js";import"./index-DpfgSJii.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQB1q1h5.js";import"./addCustomCSSWithScoping-Bswf-IYk.js";import"./index-7L-T-PBR.js";import"./information-CCnVD-2j.js";import"./sys-enter-2-X1IC7sb7.js";import"./alert-Dmmp7J4K.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-bH-o7Qs9.js";import"./delete-CMMExSCo.js";import"./settings-Ds6Qr-yr.js";import"./NoData-J351IMnc.js";import"./IllustratedMessage-B58ljVrb.js";import"./i18n-defaults-iunXW1RU.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./NoFilterResults-B55MvVii.js";import"./sapIllus-Dialog-NoFilterResults-BO45-LjK.js";import"./sapIllus-Scene-NoFilterResults-CuaKNEnS.js";import"./sapIllus-Spot-NoFilterResults-Bp3R-TVD.js";import"./sapIllus-Dot-NoFilterResults-DxDedFzw.js";import"./index-1cs8Osuo.js";import"./index-BTQyDMGb.js";import"./slim-arrow-down-BCCxnCSI.js";import"./Input-DH6V6wlE.js";import"./ResponsivePopoverCommon.css-BidD7a2A.js";import"./ValueStateMessage.css-BptRD-Sg.js";import"./Suggestions.css-RPqZvgZe.js";import"./ListBoxItemGroupTemplate-CQ-IlgJY.js";import"./ComboBoxItemGroup-De7byXms.js";import"./ListItemBaseTemplate-3egXcA5H.js";import"./Token-DckGPQnk.js";import"./ScrollEnablement-B9_nTXP_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BsRZsB4W.js";import"./ToggleButton-M4DqG-CP.js";import"./SuggestionItem-D4hge0-r.js";import"./index-D0-2Nuv-.js";import"./Option-DoxVd8eC.js";import"./index-C7q2i51e.js";import"./SegmentedButton-BzXjQ11d.js";import"./index-C1pdIIb_.js";import"./Select-D2uYLHWH.js";import"./InvisibleMessage-5l3edxbu.js";import"./slim-arrow-down-DFyEtKyA.js";import"./index-BuUXTHWM.js";import"./index-D3du9t0L.js";import"./index-BmFdlWyd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-eAEB7Eu4.js";import"./group-2-CNFPp1X7.js";import"./sort-descending-Jv8LyRtA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-JSAlrM2u.js";import"./utils-1PQVS9Mg.js";import"./index-Dm7NKhPt.js";import"./index-mYbSJ7EH.js";import"./index-Bw2I8p5D.js";import"./navigation-down-arrow-DkCY0Nj4.js";import"./navigation-right-arrow-iqHPFppT.js";import"./navigation-right-arrow-KKVa9VrR.js";import"./useCurrentTheme-GLExlvdO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BivruA6d.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BLxVr6sR.js";import"./paper-plane-Ch_oMxPx.js";import"./index-680YDvxh.js";import"./less-D9krIaJ1.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function Go(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Go as default};
