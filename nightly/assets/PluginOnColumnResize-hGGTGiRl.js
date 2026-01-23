import{j as o}from"./iframe-DMaNIVf0.js";import{useMDXComponents as n}from"./index-BdK8Evs-.js";import{I as r,F as m}from"./CommandsAndQueries-BFOyQZVK.js";import{M as p,C as s}from"./blocks-B3cnhH9X.js";import"./Tag-BBahPAh3.js";import"./index-DP2_-MiN.js";import"./copy-CnV7FmZR.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-giuHKaPD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVN0x1pl.js";import"./index-CpqFSLu_.js";import"./index-BPyW7bYo.js";import"./Link-D80_PYHk.js";import"./index-BzUF981H.js";import"./index-CkAQHTQN.js";import"./index-BZICyQUU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSBcJXg7.js";import"./addCustomCSSWithScoping-DURvRrzg.js";import"./index-DVWNlONk.js";import"./information-B4P6Loy7.js";import"./sys-enter-2-C0ZNaLlT.js";import"./alert-afWyAW_B.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DL_HHA5w.js";import"./delete-UGJs4_V3.js";import"./settings-S1nrqURM.js";import"./NoData-BLW3WdAc.js";import"./IllustratedMessage-B4Aro-vw.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-WCFpOywi.js";import"./index-Bwx3EN3f.js";import"./index-D6T6Dl-c.js";import"./slim-arrow-down-B7sjAyNA.js";import"./Input-DKkkpn3d.js";import"./ResponsivePopoverCommon.css-D74rDr_U.js";import"./ValueStateMessage.css-fkyFStPA.js";import"./Suggestions.css-0HZ10WLs.js";import"./ListBoxItemGroupTemplate-DZ9eXffT.js";import"./ComboBoxItemGroup-BR69p7yg.js";import"./ListItemBaseTemplate-Bf7uY7ZQ.js";import"./Token-CjC8nPvp.js";import"./ScrollEnablement-8_TnQxf5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8-OXolT.js";import"./ToggleButton--teKc-ne.js";import"./SuggestionItem-BnwBWzmm.js";import"./index-BoQ0qsWE.js";import"./Option-sH8FtQNh.js";import"./index-D8b8tj0j.js";import"./SegmentedButton-BTVYA_sE.js";import"./index-BXxloo5d.js";import"./Select-B0oytRV7.js";import"./InvisibleMessage-VIwqV5hq.js";import"./slim-arrow-down-CHc2IDnL.js";import"./index-Cn4MmIEZ.js";import"./index-lWv6OELN.js";import"./index-B2RA2zCC.js";import"./index-muEq_JKA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMomJqZY.js";import"./group-2-BHcp_Qz3.js";import"./sort-descending-Bq9hP7hO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BlGrjF5y.js";import"./utils-pBFYHr6i.js";import"./index-ERfIUViA.js";import"./index-JwRt4jqM.js";import"./index-DOnDyXS8.js";import"./navigation-down-arrow-D0RqXh7N.js";import"./navigation-right-arrow-CLAxjwwI.js";import"./navigation-right-arrow-CLLyA8n3.js";import"./useCurrentTheme-C69-McZX.js";import"./index-CKSN0DqT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQGRkAtk.js";import"./paper-plane-DVH2n_JI.js";import"./index-C9qNzj0Y.js";import"./less-BXBsPGl8.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
