import{j as o}from"./iframe-DDMT6HJ_.js";import{useMDXComponents as n}from"./index-BZBPPnAC.js";import{I as r,F as m}from"./CommandsAndQueries-7VHsHP9e.js";import{M as p,C as s}from"./blocks-Bodl2L_O.js";import"./Tag-CpA-lkPa.js";import"./index-5dKFa1m8.js";import"./copy-BvEBs4Jb.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BwmUzmXm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGAlCx6I.js";import"./index-DBxIJUvm.js";import"./index-Cs3p2L6v.js";import"./Link-BjYpH57b.js";import"./index-CqaPzMqI.js";import"./index-CfXspAeM.js";import"./index-DHW-qiJ5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSpYa4u6.js";import"./addCustomCSSWithScoping-D9ua8UMW.js";import"./index-CPxVkHe3.js";import"./information-BaGvLpd9.js";import"./sys-enter-2-CsR_zoUi.js";import"./alert-DZ7RsIcF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C_7eAMan.js";import"./delete-DDdmSxun.js";import"./settings-SZZk_fFu.js";import"./NoData-sRhZ3zTv.js";import"./IllustratedMessage-Dclr8PL4.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-lU7Py_iI.js";import"./index-Cc9iVAAu.js";import"./index-Dbt7IMfg.js";import"./slim-arrow-down-_qPAbD3Y.js";import"./Input-Dq0nzydJ.js";import"./ResponsivePopoverCommon.css--4EV00T0.js";import"./ValueStateMessage.css-DJXR6UPS.js";import"./Suggestions.css-BrKJqgD-.js";import"./ListBoxItemGroupTemplate-Ccn1SJ4V.js";import"./ComboBoxItemGroup-D6HtalKw.js";import"./ListItemBaseTemplate-D-MpoK89.js";import"./Token-Da7jb-N1.js";import"./ScrollEnablement-Bbyn3w51.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CwznxLrh.js";import"./ToggleButton-VCd_4PFZ.js";import"./SuggestionItem-BV-QE3WD.js";import"./index-BK1jTw4z.js";import"./Option-lMtOBoWg.js";import"./index-BGTKMO1o.js";import"./SegmentedButton-COLPjqPS.js";import"./index-E-tB_7Ri.js";import"./Select-DU8OXIZo.js";import"./InvisibleMessage-BXeuCBKE.js";import"./slim-arrow-down-KmQfRro9.js";import"./index-BPWx4Zk_.js";import"./index-D9Lx7ID0.js";import"./index-sic5m1Pa.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1tBCcb1.js";import"./group-2-D2ei6fTk.js";import"./sort-descending-BuC5Tk_u.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-lXLyT-Wl.js";import"./utils-ChSuOYmL.js";import"./index-vJTHVjlR.js";import"./index-DZKaCGNa.js";import"./index-paGBJspo.js";import"./navigation-down-arrow-B9jXhU-w.js";import"./navigation-right-arrow-DN8qzGzf.js";import"./navigation-right-arrow-Arpyz__T.js";import"./useCurrentTheme-D9ht3LOk.js";import"./IndicationColor-DVw-fSM_.js";import"./index-s2pXv8Lk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BgH4TYcR.js";import"./paper-plane-CfdFJpRG.js";import"./index-Dx8GcT9W.js";import"./less-klToe0UP.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
