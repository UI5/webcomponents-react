import{j as o}from"./iframe-CN9FvYjd.js";import{useMDXComponents as r}from"./index-CHfbFhXP.js";import{I as n}from"./CommandsAndQueries-BOIWtnt6.js";import{M as m,C as p}from"./blocks-BRVkHd00.js";import"./Tag-B_RTkJ1G.js";import"./index-CjC-3bum.js";import"./copy-CqLNgdQ9.js";import{F as s}from"./Footer-Dl9losBY.js";import"./PageNotFound-YEpHz0H_.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DVUvRB2v.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Wi8OmUZE.js";import"./index-LGty0-Ee.js";import"./index-qceCjzn0.js";import"./index-CdwqdKec.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tlJUacgC.js";import"./addCustomCSSWithScoping-DzgJsuLH.js";import"./index-BFwC892N.js";import"./index-BbQq-ZOq.js";import"./index-DHHIsfuO.js";import"./information-DYxN2cHX.js";import"./sys-enter-2-Cmiit89U.js";import"./alert-DCHWGnHk.js";import"./index-ZHKOt3Ry.js";import"./Illustrations-SwtMVqU-.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-PDVLg9Jo.js";import"./delete-sXux0RBx.js";import"./settings-CoLrjw8E.js";import"./NoData-DMviX8Pb.js";import"./NoFilterResults-CIrVjJf-.js";import"./index-DsUlZWap.js";import"./IllustratedMessage-CNrlCgrH.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BziUOht8.js";import"./Input--XH3wXXZ.js";import"./ResponsivePopoverCommon.css-DFlXT8Yt.js";import"./ValueStateMessage.css-DaIbDu_s.js";import"./Suggestions.css-C1rlY3G7.js";import"./ListBoxItemGroupTemplate-3j4IvakF.js";import"./ComboBoxItemGroup-XgTm2oPa.js";import"./ListItemBaseTemplate-inTV_ZQx.js";import"./Token-CM9W4z5A.js";import"./ScrollEnablement-Be-lL4pM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bpw8kHSv.js";import"./ToggleButton-LVDrAlrT.js";import"./multiselect-all-DRLXqwh4.js";import"./SuggestionItem-DIJ09gIE.js";import"./index-CYelxgbb.js";import"./Option-C9NgJRXg.js";import"./index-qj_fITSG.js";import"./SegmentedButton-CPYEaCpP.js";import"./index-Cwn8NjgW.js";import"./Select-EDC4gd3g.js";import"./InvisibleMessage-U36VH6c8.js";import"./index-DQr4HfAy.js";import"./index-I5TiD3Wv.js";import"./index-Bv-lpTUK.js";import"./index-C4sRNL_2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D1qMoNlt.js";import"./group-2-D359kW4P.js";import"./sort-descending-iarK2oXR.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C9G9oavp.js";import"./utils-BbuVUQyZ.js";import"./index-Dfrdccyw.js";import"./index-l5vhLjKD.js";import"./index-xq182KXJ.js";import"./navigation-down-arrow-4oBIf6f6.js";import"./navigation-right-arrow-BSY5C0HZ.js";import"./navigation-right-arrow-CajLQNlB.js";import"./useCurrentTheme-DktBLXlE.js";import"./index-LF1Yh8x4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BW8x1c9w.js";import"./paper-plane-CNhlmnjY.js";import"./index-6r62860r.js";import"./less-BV_UcSh5.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
