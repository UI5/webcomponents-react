import{j as o}from"./iframe-DEgT_E8s.js";import{useMDXComponents as n}from"./index-BZRAiVGZ.js";import{I as r,F as m}from"./CommandsAndQueries-BnsxTdlD.js";import{M as p,C as s}from"./blocks-B_KstB4C.js";import"./Tag-DE605aSS.js";import"./index-YPzE27b5.js";import"./copy-CnDYhLIP.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bb_fYyk9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-q4TahdKC.js";import"./index-DdLyBjYX.js";import"./index-Dzkg0-9t.js";import"./Link-z1epMX3F.js";import"./index-DuT1R6mu.js";import"./index-5Z9enrbF.js";import"./index-C1jXIPsp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1yrXOFa.js";import"./addCustomCSSWithScoping-CGm4Cfs5.js";import"./index-BBLpbuxz.js";import"./information-r8cEHEup.js";import"./sys-enter-2-ChDTDdJ5.js";import"./alert-Dx6xYju9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CQIZa4KW.js";import"./delete-CqK8g_HQ.js";import"./settings-jSVHcypQ.js";import"./NoData-Dgjgajwh.js";import"./IllustratedMessage-WFxvN6sI.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-j_yzxESa.js";import"./index-C4ZbRrOu.js";import"./index-EzHa5_P2.js";import"./slim-arrow-down-B0naEDbF.js";import"./Input-CGH6t_eq.js";import"./ResponsivePopoverCommon.css-Dv84NKMT.js";import"./ValueStateMessage.css-CUqUPYSj.js";import"./Suggestions.css-KnKAVWRs.js";import"./ListBoxItemGroupTemplate-BmVR1VlV.js";import"./ComboBoxItemGroup-Eimfv27_.js";import"./ListItemBaseTemplate-HfAqkZ3H.js";import"./Token-C5MRXtTV.js";import"./ScrollEnablement-8BMeJMa0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-FLiQ-oOI.js";import"./ToggleButton-DMd9fH0Q.js";import"./SuggestionItem-DXBRTfNG.js";import"./index-BXlMwFJS.js";import"./Option-r28MJ-v0.js";import"./index-DAh5-UwY.js";import"./SegmentedButton-DuKNalzH.js";import"./index-7n2e9xhl.js";import"./Select-lIlAJjO9.js";import"./InvisibleMessage-DtVtDVKI.js";import"./slim-arrow-down-BCbYdXvq.js";import"./index-BekFaNX1.js";import"./index-C-dEXwCg.js";import"./index-PbfneB6M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DtNLDG1k.js";import"./group-2-TWAMSjz_.js";import"./sort-descending-gRLN52yg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5tA4rVe.js";import"./utils-XKst6eGz.js";import"./index-DEM0qvBE.js";import"./index-BHegFaBf.js";import"./index-D1vU14fq.js";import"./navigation-down-arrow-CH6c6eW9.js";import"./navigation-right-arrow-QbezwENh.js";import"./navigation-right-arrow-fC4XWoU4.js";import"./useCurrentTheme-Z5PW4JFt.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFb2J3Hx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CnhilVJw.js";import"./paper-plane-CwF1OIzX.js";import"./index-w9pnBzXO.js";import"./less-C43TjDId.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
