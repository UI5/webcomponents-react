import{j as o}from"./iframe-cBdQNv77.js";import{useMDXComponents as n}from"./index-cOSrw8iI.js";import{I as r,F as m}from"./CommandsAndQueries-DjEzsLYR.js";import{M as p,C as s}from"./blocks-DJzZLxIJ.js";import"./Tag-C7wlfelX.js";import"./index-3Ka_JXyV.js";import"./copy-IvR5q6ZX.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B03Ac-Pt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUV_LApg.js";import"./index-D8zOOSR2.js";import"./index-_yOX_kaH.js";import"./Link-CQDhsa8i.js";import"./index-DBSQPl1H.js";import"./index-BRmdbvU0.js";import"./index-JUan3IFj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpA8OOPe.js";import"./addCustomCSSWithScoping-DRPx1DdS.js";import"./index-A4dU9HLI.js";import"./information-DNcsXuRB.js";import"./sys-enter-2-Bl2cFkII.js";import"./alert-CmJVw_4E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CU_WQTkg.js";import"./delete-CMb-Nvkm.js";import"./settings-DWEgpEUz.js";import"./NoData-Qem4b_MW.js";import"./IllustratedMessage-Cyt9gDIc.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BysguWIF.js";import"./index-CblII6GP.js";import"./index-DSUYipo-.js";import"./slim-arrow-down-BPt5DgGA.js";import"./Input-CcjXMm62.js";import"./ResponsivePopoverCommon.css-RgOMGv0T.js";import"./ValueStateMessage.css-CowmmmLr.js";import"./Suggestions.css-yUQ9aL_d.js";import"./ListBoxItemGroupTemplate-BvX5NWPm.js";import"./ComboBoxItemGroup-CDbozHq9.js";import"./ListItemBaseTemplate-DrlAet-U.js";import"./Token-KJpiYxq1.js";import"./ScrollEnablement-DK4N6mSn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bac0lpbe.js";import"./ToggleButton-DekIcBfY.js";import"./SuggestionItem-Dbu-VOoh.js";import"./index-CroY5feV.js";import"./Option-Di0zJemp.js";import"./index-BdZWaw9K.js";import"./SegmentedButton-BVkeOtZe.js";import"./index-CMPXrz_r.js";import"./Select-glz-euWX.js";import"./InvisibleMessage-BXAme1GY.js";import"./slim-arrow-down-D3dx3V9G.js";import"./index-PK4cuCqC.js";import"./index-nXXgIqFV.js";import"./index-BY097R_L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CWqjbJR2.js";import"./group-2-CF-v31Zl.js";import"./sort-descending-CyayMEsE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHmbUZOq.js";import"./utils-CEIcbUd3.js";import"./index-BIFjpkti.js";import"./index-DO50Tpnb.js";import"./index-Ct7T3oxa.js";import"./navigation-down-arrow-_-kVQMhy.js";import"./navigation-right-arrow-D_4YqzP5.js";import"./navigation-right-arrow-BcXKj59E.js";import"./useCurrentTheme-DjP3JZ5R.js";import"./IndicationColor-DVw-fSM_.js";import"./index-TOh3uh25.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B47DQxdv.js";import"./paper-plane-lzt2I4eu.js";import"./index-DqnLY2Ua.js";import"./less-D_OVhTJA.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
