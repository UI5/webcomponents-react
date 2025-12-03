import{j as o}from"./iframe-CJRlzZgA.js";import{useMDXComponents as n}from"./index-CbUzkcD0.js";import{I as r,F as m}from"./CommandsAndQueries-BJK9fmCd.js";import{M as p,C as s}from"./blocks-QclREKVQ.js";import"./Tag-D6uzQqkN.js";import"./index-B3EVM4WW.js";import"./copy-Dm16cUhk.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DW5PTlme.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLQSfTW2.js";import"./index-CEHRPvSv.js";import"./index-CgUHdFlG.js";import"./Link-0WAKzVuH.js";import"./index-DNJOtG7U.js";import"./index-B-KWFPaJ.js";import"./index-DBGTLlVz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckhrx5tI.js";import"./addCustomCSSWithScoping-CXI5gvd5.js";import"./index-CEi9QmXA.js";import"./information-CTfPsGYk.js";import"./sys-enter-2-DT64nekl.js";import"./alert-D_x5VnX_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B3AIhspr.js";import"./delete-ydvJCLPE.js";import"./settings-CwGuwL1v.js";import"./NoData-fDkpn7tb.js";import"./IllustratedMessage-QOrTuGKl.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BDYYJsa3.js";import"./index-BRkvunxZ.js";import"./index-ekmQbjwp.js";import"./slim-arrow-down-DiV8d_6M.js";import"./Input-C30iTws-.js";import"./ResponsivePopoverCommon.css-C_a-qh6P.js";import"./ValueStateMessage.css-C9MjG1UC.js";import"./Suggestions.css-BN5UKDJ_.js";import"./ListBoxItemGroupTemplate-gk9whGYw.js";import"./ComboBoxItemGroup-C468Z6Iw.js";import"./ListItemBaseTemplate-DnIFmn4i.js";import"./Token-BD4i_ui4.js";import"./ScrollEnablement-C7OtmXds.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-e2XpTMq4.js";import"./ToggleButton-B58O1JBR.js";import"./SuggestionItem-BhyM5wBT.js";import"./index-DMNOa0He.js";import"./Option-Bpa9ANqG.js";import"./index-D1wEGHKD.js";import"./SegmentedButton-SYhHQ9Ej.js";import"./index-Bxs6OwGY.js";import"./Select-OuFKxvFI.js";import"./InvisibleMessage-CDDqZbGd.js";import"./slim-arrow-down-BXVf3KJB.js";import"./index-Bb37Af0B.js";import"./index-CJGz6QVU.js";import"./index-C5HXwY5m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrOoWNgu.js";import"./group-2-MVpHsjQq.js";import"./sort-descending-nGGv56wH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DICMjLbX.js";import"./utils-7UT6I4G8.js";import"./index-FDtWMB9q.js";import"./index-qQGf4ufv.js";import"./index-Dw_yibZ5.js";import"./navigation-down-arrow-DkHsoxHK.js";import"./navigation-right-arrow-Qe6XxWFz.js";import"./navigation-right-arrow-SD2DKsNp.js";import"./useCurrentTheme-DEkoUSWw.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cbymz11o.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C7Tcv1Md.js";import"./paper-plane-Bz4OZEc2.js";import"./index-D0vK_QOP.js";import"./less-Dd1e4dTk.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
