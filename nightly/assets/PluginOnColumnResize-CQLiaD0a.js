import{j as o}from"./iframe-DM8isA9c.js";import{useMDXComponents as n}from"./index-Do0cpSGj.js";import{I as r,F as m}from"./CommandsAndQueries-DM-8oq2s.js";import{M as p,C as s}from"./blocks-Crph7jgT.js";import"./Tag-BtR3uqsq.js";import"./index-BgbeFss3.js";import"./copy-DYIgCYkz.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BU0X1VDJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C6UNmCtN.js";import"./index-BS8NgEfP.js";import"./index-FrVWogAp.js";import"./Link-j0sjRyW5.js";import"./index-B6NdOyDM.js";import"./index-Cf1wRWYr.js";import"./index-ozpDTdfP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9ZULNfD.js";import"./addCustomCSSWithScoping-AinZnCKl.js";import"./index-CNSbSmbI.js";import"./information-CLqibrfC.js";import"./sys-enter-2-COJQOFoX.js";import"./alert-WVpRlSFd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-2oOM7FJV.js";import"./delete-DcA4Uhw4.js";import"./settings-BA2hgRK4.js";import"./NoData-ARVnaWFR.js";import"./IllustratedMessage-vNT1f4yz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BGQgzr7m.js";import"./index-Dy3LU6ky.js";import"./index-DHTTyH85.js";import"./slim-arrow-down-hG7sSDos.js";import"./Input-CVhk_ZAS.js";import"./ResponsivePopoverCommon.css-puXN3fh5.js";import"./ValueStateMessage.css-C0V4czBQ.js";import"./Suggestions.css-BYf_LmQ1.js";import"./ListBoxItemGroupTemplate-5cmjEtes.js";import"./ComboBoxItemGroup-Bv2u3bQ7.js";import"./ListItemBaseTemplate-TRbY2fc8.js";import"./Token-BPCkJQrI.js";import"./ScrollEnablement-UWaMLi5d.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-I6nsPbjR.js";import"./ToggleButton-Vr7STsGZ.js";import"./SuggestionItem-BbXDukLp.js";import"./index-NSnuf4-P.js";import"./Option-CQJiT04F.js";import"./index-BX4ZAVg2.js";import"./SegmentedButton-B4cfzXrG.js";import"./index-BQBBMnNM.js";import"./Select-NIzcg6U7.js";import"./InvisibleMessage-BSV5Kw4P.js";import"./slim-arrow-down-C4n1wmA7.js";import"./index-C87A-yQY.js";import"./index-DQMuxlK5.js";import"./index-DoaqSk9p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ieaXo1Jb.js";import"./group-2-CSOTY4tP.js";import"./sort-descending-DzANS_Yh.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLiaJqlG.js";import"./utils-BnZETQEG.js";import"./index-C--tGAzN.js";import"./index-D5piz367.js";import"./index-BrgcTCqT.js";import"./navigation-down-arrow-CbZ1RQpJ.js";import"./navigation-right-arrow-C5TkdaxP.js";import"./navigation-right-arrow-DJCwyzqc.js";import"./useCurrentTheme-goNF4eXV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWyu-On_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CBtcGSGo.js";import"./paper-plane-DPYcr-IO.js";import"./index-l9sIIys5.js";import"./less-BmrMRYds.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
