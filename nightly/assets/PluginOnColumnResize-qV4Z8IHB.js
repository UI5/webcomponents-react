import{j as o}from"./iframe-BiMlSvB5.js";import{useMDXComponents as n}from"./index-zjeO5ftS.js";import{I as r,F as m}from"./CommandsAndQueries-Ihy_vY5j.js";import{M as p,C as s}from"./blocks-JfRoz7Bu.js";import"./Tag-DcGxJxNj.js";import"./index-DdnnKwEp.js";import"./copy-CpLwtFwa.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CrJDfv5d.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJoGcUHO.js";import"./index-CjwASx83.js";import"./index-COwkRR6t.js";import"./Link-hDp19ErW.js";import"./index-BN_7wmc1.js";import"./index-BTBLl-af.js";import"./index-CvgLLP4J.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-g_QfzUS9.js";import"./addCustomCSSWithScoping-Dxx39OMa.js";import"./index-CJR1a3iJ.js";import"./information-B40Y1iPW.js";import"./sys-enter-2-CkPUHPx-.js";import"./alert-BwKvOFsR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-lkroZnbL.js";import"./delete-FMGJKKZJ.js";import"./settings-C3vBunPl.js";import"./NoData-BDVuJ86f.js";import"./IllustratedMessage-CdkkLDXG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CyCSkyGX.js";import"./index-CzIuiFxY.js";import"./index-uzhwBdxV.js";import"./slim-arrow-down-DhQmyJSw.js";import"./Input-5MKIWbcv.js";import"./ResponsivePopoverCommon.css-Gn55K0IR.js";import"./ValueStateMessage.css-C63o8ajt.js";import"./Suggestions.css-bWFEPpLk.js";import"./ListBoxItemGroupTemplate-P2pMYzMz.js";import"./ComboBoxItemGroup-DGvjryay.js";import"./ListItemBaseTemplate-DFyALYeN.js";import"./Token-DP7V52GY.js";import"./ScrollEnablement-DKyX1hlv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CteCbUEH.js";import"./ToggleButton-CnxXmbLH.js";import"./SuggestionItem-BdwWLvfq.js";import"./index-CyQT3WP0.js";import"./Option-C9Uo7sgL.js";import"./index-D_l_aaej.js";import"./SegmentedButton-CmS3epsf.js";import"./index-TyCpnseE.js";import"./Select-DV8FGlWC.js";import"./InvisibleMessage-CdGbv0CP.js";import"./slim-arrow-down-CVQHENDk.js";import"./index-B-Yh5T4c.js";import"./index-CIW_ic5S.js";import"./index-GmFx-3lk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BS_XAjEs.js";import"./group-2-BQ8I3Xw3.js";import"./sort-descending-Dn3aviOX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_j2qh61z.js";import"./utils-CE3pjW5h.js";import"./index-BgWRU9Z5.js";import"./index-CjF_Wh_0.js";import"./index-C0ceKoHV.js";import"./navigation-down-arrow-m9enBW2g.js";import"./navigation-right-arrow-C4IxskPN.js";import"./navigation-right-arrow-CeFlz50Q.js";import"./useCurrentTheme-CdJ3Wj-s.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D9Agz_AG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B8WBSrx9.js";import"./paper-plane-CJosRD6f.js";import"./index-BonsQVcP.js";import"./less-lHySVG5z.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
