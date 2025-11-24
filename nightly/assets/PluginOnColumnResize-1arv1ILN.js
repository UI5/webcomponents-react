import{j as o}from"./iframe-OLMvr6Lt.js";import{useMDXComponents as n}from"./index-CdriUjbp.js";import{I as r,F as m}from"./CommandsAndQueries-CxvYWHkR.js";import{M as p,C as s}from"./blocks-CZhft-YU.js";import"./Tag-isczvwSi.js";import"./index-DNJgsZvx.js";import"./copy-CFwp5FgG.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Cy3cyHhy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbPvBsUu.js";import"./index-D6OGtnN7.js";import"./index-3TabIQwt.js";import"./Link-B3ocEkmU.js";import"./index-D7Vb79r0.js";import"./index-C0KzuGfV.js";import"./index-DP7V--vt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-8TAtZbXi.js";import"./addCustomCSSWithScoping-D8XhS4Ox.js";import"./index-DCyx6v--.js";import"./information-CW-9LDCP.js";import"./sys-enter-2-8-HPbBwq.js";import"./alert-Bd52_kq-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWywr3TW.js";import"./delete-CCzy9s8b.js";import"./settings-D42fuJuX.js";import"./NoData-Bup5hrqa.js";import"./IllustratedMessage-CHTeCatA.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-ZuFlFv1T.js";import"./index-Dc9B5nZG.js";import"./index-JF5_76ci.js";import"./slim-arrow-down-ySZlwq-q.js";import"./Input-D4ca9rAR.js";import"./ResponsivePopoverCommon.css-BRrcd20a.js";import"./ValueStateMessage.css-Bk812_Kf.js";import"./Suggestions.css-BjM9wydn.js";import"./ListBoxItemGroupTemplate-AWhndfnj.js";import"./ComboBoxItemGroup-DoFoxDi9.js";import"./ListItemBaseTemplate-CpLLHa4Z.js";import"./Token-MTCn4enU.js";import"./ScrollEnablement-94tHLG88.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-vQZi_1g2.js";import"./ToggleButton-DDwhnOd_.js";import"./SuggestionItem-DsV9yF55.js";import"./index-sE10V8UB.js";import"./Option-B-1m3Lan.js";import"./index-Cb21HCJZ.js";import"./SegmentedButton-DsUwene6.js";import"./index-CL538puJ.js";import"./Select-eKqLtCSY.js";import"./InvisibleMessage-B_prVgph.js";import"./slim-arrow-down-CMbdHuJl.js";import"./index-xGnKXygx.js";import"./index-CRmylG0z.js";import"./index-u1rNC7Bo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMM6dyNf.js";import"./group-2-B4FdXRJU.js";import"./sort-descending-DvUEcM1R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-jICxCRW9.js";import"./utils-P9HcUQzN.js";import"./index-DDWpxtlc.js";import"./index-Wbk_vv3N.js";import"./index-AlbH3iGp.js";import"./navigation-down-arrow-IShY2WyB.js";import"./navigation-right-arrow-DzbnPaXu.js";import"./navigation-right-arrow-BxL2ijuh.js";import"./useCurrentTheme-DHVnEAWK.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4pyhN2Y.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-PfY8la.js";import"./paper-plane-BZiyZUyR.js";import"./index-CXSg-hiw.js";import"./less-DNufAwmk.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
