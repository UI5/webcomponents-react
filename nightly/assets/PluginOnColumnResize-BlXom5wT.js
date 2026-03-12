import{j as o}from"./iframe-C3CH6Gut.js";import{useMDXComponents as r}from"./index-fd8ePsOB.js";import{I as n}from"./CommandsAndQueries-DWpv2ZFM.js";import{M as m,C as p}from"./blocks-BfQItv6G.js";import"./Tag-De3iZMh7.js";import"./index-vwI-U5xE.js";import"./copy-DfCS5kJc.js";import{F as s}from"./Footer-D6sg8NSk.js";import"./PageNotFound-C9BkN1AJ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CyVcl996.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BFP9PJhq.js";import"./index-RpXG-GZG.js";import"./index-BXc3FtAh.js";import"./index-ZpAOrS54.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ByfKWctW.js";import"./addCustomCSSWithScoping-C-wsztWv.js";import"./index-F7LUawnX.js";import"./index-QTHM5Lz2.js";import"./index-CpH_mmb2.js";import"./information-D0kU-Y2g.js";import"./sys-enter-2-DsGdXA7v.js";import"./alert-DYbKfQPB.js";import"./index-U6QQkp2y.js";import"./Illustrations-Boea4aTE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DgOl3zpa.js";import"./delete-BG9m3heg.js";import"./settings-B4nCiath.js";import"./NoData-CxiMHlX_.js";import"./NoFilterResults-CjhmWEtg.js";import"./index-Djvg3LVm.js";import"./IllustratedMessage-DIXeVHpC.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Cy7JTLur.js";import"./Input-Cwy_JXQ2.js";import"./ResponsivePopoverCommon.css-DXf25SAp.js";import"./ValueStateMessage.css-wPUzGhFU.js";import"./Suggestions.css-DBzVyqKU.js";import"./ListBoxItemGroupTemplate-D8N1_HkC.js";import"./ComboBoxItemGroup-DBKoVX7J.js";import"./ListItemBaseTemplate-Bwv46zez.js";import"./Token-CZdJDMhT.js";import"./ScrollEnablement-GDu9Dh24.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-KpiEMPRj.js";import"./ToggleButton-DlHc2tiz.js";import"./multiselect-all-BlFxC4yK.js";import"./SuggestionItem-3ubqA32j.js";import"./index-BBOXgp9T.js";import"./Option-BESnooX1.js";import"./index-Cct_m_eu.js";import"./SegmentedButton-DvdG3HcY.js";import"./index-D-_OjX_x.js";import"./Select-DDp87HxS.js";import"./InvisibleMessage-BCTOgowi.js";import"./index-Buaf_trU.js";import"./index-BP_xr0KI.js";import"./index-Cix6ADpt.js";import"./index-DlrcfpRT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DZNcHDWf.js";import"./group-2-BHNit0d9.js";import"./sort-descending-CUkyl3g_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5hmyYbz.js";import"./utils-BoXuUdRI.js";import"./index-Dbp-R-_w.js";import"./index-Bu89sVDb.js";import"./index-DWKJP-X1.js";import"./navigation-down-arrow-BYMzr38l.js";import"./navigation-right-arrow-CqTO4JbT.js";import"./navigation-right-arrow-BShilemu.js";import"./useCurrentTheme-Box2x4Lc.js";import"./index-C3QVuZtO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C5JDBeUG.js";import"./paper-plane-Bzwy9sBv.js";import"./index-CHqhah_y.js";import"./less-BzhppYQg.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
