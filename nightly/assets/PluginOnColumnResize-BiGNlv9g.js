import{j as o}from"./iframe-xM6TWZ2z.js";import{useMDXComponents as n}from"./index-itFp6RcL.js";import{I as r,F as m}from"./CommandsAndQueries-DU6Rn88_.js";import{M as p,C as s}from"./blocks-CPrCvPPD.js";import"./Tag-By3SowoB.js";import"./index-9AHy9ejx.js";import"./copy-uYDkz2OX.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Cu78AcrT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-AzHYcBiG.js";import"./index-D8_xEbiF.js";import"./index-Dro0XmDs.js";import"./Link-BDcFUJ6P.js";import"./index-BDByza4Q.js";import"./index-B3SnxoaH.js";import"./index-Ce3vdOnG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BkjEqAjP.js";import"./addCustomCSSWithScoping-CN9Nv2gA.js";import"./index-D0vFHCq5.js";import"./information-BKDOtRK0.js";import"./sys-enter-2-CnIu4SDT.js";import"./alert-BSwF_aSo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ByRe-Pr9.js";import"./delete-GZgGCRu5.js";import"./settings-C5tCT27d.js";import"./NoData-BhTX_TQK.js";import"./IllustratedMessage-CKdzeJEN.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-C007fInA.js";import"./index-CVRnarRU.js";import"./index-Cwu6OG7i.js";import"./slim-arrow-down-C_CcIh7F.js";import"./Input-UTXGmmfd.js";import"./ResponsivePopoverCommon.css-DpRk3tRF.js";import"./ValueStateMessage.css-Br1luTux.js";import"./Suggestions.css-IywVbVu3.js";import"./ListBoxItemGroupTemplate-D-Qfwc-O.js";import"./ComboBoxItemGroup-DBZRijA_.js";import"./ListItemBaseTemplate-DHW-flPt.js";import"./Token-AKwzEfcp.js";import"./ScrollEnablement-CzBIaYtg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Q4pfieza.js";import"./ToggleButton-DSylEXGK.js";import"./SuggestionItem-CDslL1Zi.js";import"./index-CU5opL-S.js";import"./Option-DqKLKc7N.js";import"./index-C4qT761X.js";import"./SegmentedButton-CaLUUleO.js";import"./index-DLa-IKPk.js";import"./Select-pcxnTQd1.js";import"./InvisibleMessage-oFo1Gh6Z.js";import"./slim-arrow-down-CvRj7da0.js";import"./index-JVo02ZVr.js";import"./index-GtlTqLaY.js";import"./index-AWueUsQI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJwBvwXw.js";import"./group-2-CQWF_2lh.js";import"./sort-descending-DdwgSP0m.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dv3rwh9l.js";import"./utils-CSrsxa_x.js";import"./index-ByHyVxRG.js";import"./index-K1LoBgk-.js";import"./index-BnzSR-dI.js";import"./navigation-down-arrow-BIunLDBw.js";import"./navigation-right-arrow-_UKX_FlU.js";import"./navigation-right-arrow-B-0frPyv.js";import"./useCurrentTheme-CQ57EUtO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HUtZK3H1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Tj0-8HEj.js";import"./paper-plane-HaunRPAT.js";import"./index-CgbtStQa.js";import"./less-BpW4qLUX.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
