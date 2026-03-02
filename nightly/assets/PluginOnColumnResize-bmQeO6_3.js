import{j as o}from"./iframe-CqFnJp-S.js";import{useMDXComponents as n}from"./index-CynYu3xa.js";import{I as r,F as m}from"./CommandsAndQueries-D_WKy8dN.js";import{M as p,C as s}from"./blocks-AhMBMxUR.js";import"./Tag-Cwi_n_M2.js";import"./index-DezDvmls.js";import"./copy-B3ylxRux.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BPifQ1Ev.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BARlfa70.js";import"./index-lhl517Nj.js";import"./index-CR3t_8EC.js";import"./Link-18Y5h9Ta.js";import"./index-B8Ys29Cw.js";import"./index-CaJgjkX1.js";import"./index-B_RIKuGc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6mfgC9Q.js";import"./addCustomCSSWithScoping-Dl0yXOSQ.js";import"./index-CA0UVsfH.js";import"./information-60cadcf1.js";import"./sys-enter-2-seBR9LV9.js";import"./alert-vPdDlciv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-GQqzYq73.js";import"./delete-DVGnJKaP.js";import"./settings-C86YGrfc.js";import"./NoData-CPLwwlHF.js";import"./IllustratedMessage-D9IfNlHf.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Cf9HMdQx.js";import"./index-DsLMVCKf.js";import"./index-D5uq3pGm.js";import"./slim-arrow-down-BKovBuLa.js";import"./Input-CQNiUAP7.js";import"./ResponsivePopoverCommon.css-B_6-LLQR.js";import"./ValueStateMessage.css-BBGnGBu9.js";import"./Suggestions.css-DzKfp-Xw.js";import"./ListBoxItemGroupTemplate-B53iLlHx.js";import"./ComboBoxItemGroup-Wbjga0AQ.js";import"./ListItemBaseTemplate-BGEwTL5Q.js";import"./Token-CDAtcjpf.js";import"./ScrollEnablement-BUHldyEa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1rHJjnW.js";import"./ToggleButton-BOg-qA3G.js";import"./SuggestionItem-xIpc8qFg.js";import"./index--ZiExa_2.js";import"./Option-DIgNMlnn.js";import"./index-TPfNhAGX.js";import"./SegmentedButton-sebu1UW5.js";import"./index-eNZtFDGv.js";import"./Select-CZVbWsMp.js";import"./InvisibleMessage-CgZaFHu8.js";import"./slim-arrow-down-D6HaHOTp.js";import"./index-2-mJG5vY.js";import"./index-Dghj_1B1.js";import"./index-Mhz05_do.js";import"./index-Bau1_Q7b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwYWP051.js";import"./group-2-DlIEyGbO.js";import"./sort-descending-C24nnD91.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ril5FfjQ.js";import"./utils-D1IBIU3s.js";import"./index-4ty_Ok3T.js";import"./index-CPy012dy.js";import"./index-Dc9tpclD.js";import"./navigation-down-arrow-D8TiYLu5.js";import"./navigation-right-arrow-P2di7b2W.js";import"./navigation-right-arrow-HH0z6MpN.js";import"./useCurrentTheme-oeVWKNpy.js";import"./index-CMtyblMd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ChZZThs6.js";import"./paper-plane-Rb1O3_rk.js";import"./index-RQySdApX.js";import"./less-Dkh_-EuF.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
