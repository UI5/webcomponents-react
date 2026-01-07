import{j as o}from"./iframe-CfxMerL-.js";import{useMDXComponents as n}from"./index-VbSVpo3U.js";import{I as r,F as m}from"./CommandsAndQueries-Dg2B8ke5.js";import{M as p,C as s}from"./blocks-MJ_5uOZ-.js";import"./Tag-BNqMWY4P.js";import"./index-BI2nwMUJ.js";import"./copy-B6ViSnKB.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B_Wpf4B4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DP6bCfzy.js";import"./index-IP6CGDwM.js";import"./index-BYZXhHpQ.js";import"./Link-BitnWoH9.js";import"./index-BTQ4bVGw.js";import"./index-DTz3tRU0.js";import"./index-DjUM5b1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC5ToBw2.js";import"./addCustomCSSWithScoping-El6BaIIi.js";import"./index-B0xbheog.js";import"./information-V-ZI-MUr.js";import"./sys-enter-2-BPqtZ6Ae.js";import"./alert-BY-nhKm6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BsCEz7ib.js";import"./delete-D7RS9M-y.js";import"./settings-DEtPc8Wj.js";import"./NoData-B_-T5WI3.js";import"./IllustratedMessage-BZNw5Wiu.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BnYjPhI7.js";import"./index-bif26s3P.js";import"./index-Cwf7lSCC.js";import"./slim-arrow-down-d9rX3ebS.js";import"./Input-D3np0nF3.js";import"./ResponsivePopoverCommon.css-DjynAZOg.js";import"./ValueStateMessage.css-DkCKabc6.js";import"./Suggestions.css-MQWeG9TG.js";import"./ListBoxItemGroupTemplate-CM5NZpBA.js";import"./ComboBoxItemGroup-BrUfLYBK.js";import"./ListItemBaseTemplate-Cy-PquU_.js";import"./Token-ne2P8_To.js";import"./ScrollEnablement-ziMxJENG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BVYApwgA.js";import"./ToggleButton-BZRyXu7G.js";import"./SuggestionItem-BlVIKvF5.js";import"./index-BAwfKYgr.js";import"./Option-C1QKLt8h.js";import"./index-HY2ZsT1u.js";import"./SegmentedButton-B1Kk8DVS.js";import"./index-4mdijd2N.js";import"./Select-kSz6MKWU.js";import"./InvisibleMessage-et9yvTH3.js";import"./slim-arrow-down-Dqgy0Zme.js";import"./index-D8Qeadr9.js";import"./index-ri-WXBZU.js";import"./index-BKIcMWwD.js";import"./index-Cr9UVhXj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Btv3_sW8.js";import"./group-2-nZBOHX9Q.js";import"./sort-descending-BSyKh4wL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CtFTNZfH.js";import"./utils-DGabngUu.js";import"./index-BRkWBZ5K.js";import"./index-CHJ4GtUC.js";import"./index-BPqtDCmb.js";import"./navigation-down-arrow-7qCnXGQg.js";import"./navigation-right-arrow-BsRz9Oss.js";import"./navigation-right-arrow-B0sX5CVs.js";import"./useCurrentTheme-BhGBafEw.js";import"./index-C5nYMhvF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1OO3TS9.js";import"./paper-plane-CwGGMTBs.js";import"./index-BAq-T-Uj.js";import"./less-DABYie6s.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
