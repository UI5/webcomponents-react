import{j as o}from"./iframe-Do6vb0_F.js";import{useMDXComponents as n}from"./index-CjAG28Zi.js";import{I as r,F as m}from"./CommandsAndQueries-DNVLBibD.js";import{M as p,C as s}from"./blocks-BSmhBV8W.js";import"./Tag-Bm_1Oa-G.js";import"./index-DFaXcVzr.js";import"./copy-CtSFAv-a.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-9e-ZuUVx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn7jdYPg.js";import"./index-CjAZJ6mP.js";import"./index-CRpB2mc_.js";import"./Link-DfSClIn0.js";import"./index-B7DmSRaZ.js";import"./index-euaiQ6-T.js";import"./index-BKzdQw4A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-x3ovOdYp.js";import"./addCustomCSSWithScoping-DMyk9VX6.js";import"./index-CziNROS9.js";import"./information-kf1Y_V0y.js";import"./sys-enter-2-Dgg9scSJ.js";import"./alert-eluNIvxZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5e1o-EBG.js";import"./delete-EOOd17FY.js";import"./settings-ChvCVI1H.js";import"./NoData-x4jRmZPJ.js";import"./IllustratedMessage-BpFZWdgz.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BSP9fDKJ.js";import"./index-TJOhQ-wF.js";import"./index-D-PQMfR1.js";import"./slim-arrow-down-BFUSO5fa.js";import"./Input-CV4am0mg.js";import"./ResponsivePopoverCommon.css-DZxesZgF.js";import"./ValueStateMessage.css-CBDkTR1J.js";import"./Suggestions.css-C6WB3Qk2.js";import"./ListBoxItemGroupTemplate-lrzGyG5S.js";import"./ComboBoxItemGroup-13V5PpfS.js";import"./ListItemBaseTemplate-9NOhdDod.js";import"./Token-DU3vF1l0.js";import"./ScrollEnablement-Bcn9GtV2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dz67dIqH.js";import"./ToggleButton-BRQRWz_K.js";import"./SuggestionItem-VOxlPlC0.js";import"./index-CRXuNHmI.js";import"./Option-CnEC2BV1.js";import"./index-DVIhR92p.js";import"./SegmentedButton-BQrBf1Xa.js";import"./index-U1Yn6qoO.js";import"./Select-CSgqeQI7.js";import"./InvisibleMessage-BMJss_kZ.js";import"./slim-arrow-down-DdXU4zZn.js";import"./index-ChvQYVHX.js";import"./index-D9aj3XtS.js";import"./index-0fgUCGZZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DAByxNhp.js";import"./group-2-V4ylj1S-.js";import"./sort-descending-CJeT2CSo.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bgdpa9Y6.js";import"./utils-CurRq_4A.js";import"./index-iowTYD53.js";import"./index-D7kd4dZQ.js";import"./index-DvB6BGuZ.js";import"./navigation-down-arrow-DUd4G2g_.js";import"./navigation-right-arrow-DMiO4jal.js";import"./navigation-right-arrow-B2BIXtfp.js";import"./useCurrentTheme-BKmE0cN8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-QvDENoWT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQccTeWy.js";import"./paper-plane-BnCgZ8Rr.js";import"./index-DmyLDLIV.js";import"./less-DarnrJ7s.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
