import{j as o}from"./iframe-DNwXmN6w.js";import{useMDXComponents as n}from"./index-Dbs3KJZC.js";import{I as r,F as m}from"./CommandsAndQueries-BAoKQ9N_.js";import{M as p,C as s}from"./blocks-ClaQShTE.js";import"./Tag-9F78ZQdp.js";import"./index-CYGT2EhP.js";import"./copy-EN-_ABXk.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BZM3hVda.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DuyT38UB.js";import"./index-aVApIanM.js";import"./index-B8OlZcJ4.js";import"./Link-C02NJVw1.js";import"./index-BLy7Rxlq.js";import"./index-nHmWKiTx.js";import"./index-rN24S36o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNrVdT-5.js";import"./addCustomCSSWithScoping-os-Xpktn.js";import"./index-CBh039oE.js";import"./information-BcSrdT-8.js";import"./sys-enter-2-D4ODuMey.js";import"./alert-Dl0J_z1v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BcYwBA_x.js";import"./delete-Dtc6qBdo.js";import"./settings-C20orWJs.js";import"./NoData-Byql5GFI.js";import"./IllustratedMessage-C9HIxcU1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DTwOmFng.js";import"./index-BwEwheLw.js";import"./index-CxqQ6lo_.js";import"./slim-arrow-down-yZ0Tj4rx.js";import"./Input-D1jql1AB.js";import"./ResponsivePopoverCommon.css-CsNV6Vt5.js";import"./ValueStateMessage.css-BmoKZehd.js";import"./Suggestions.css-BLseB_qJ.js";import"./ListBoxItemGroupTemplate-GrRfxRtW.js";import"./ComboBoxItemGroup-DmaBTCoh.js";import"./ListItemBaseTemplate-D49sgBgx.js";import"./Token-ikM9Yg4E.js";import"./ScrollEnablement-COWapJBB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8xPVlSO.js";import"./ToggleButton-DjAWyQjE.js";import"./SuggestionItem-CApmioZF.js";import"./index-D3KttqVU.js";import"./Option-8CI-W5Cq.js";import"./index-DaNCv0Ie.js";import"./SegmentedButton-DqUwoUgZ.js";import"./index-Dk7WoR1Z.js";import"./Select-1NfyOvLt.js";import"./InvisibleMessage-R_WRhHfZ.js";import"./slim-arrow-down-DIzrL0Ja.js";import"./index-D3Y3n4MX.js";import"./index-DH1Xng6k.js";import"./index-DJpZsV5v.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4pAXERK.js";import"./group-2-FR_0GSEN.js";import"./sort-descending-DgjdOMTK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dr-gnZgG.js";import"./utils-DWArTzFQ.js";import"./index-C9vTuVR-.js";import"./index-neKxXX_y.js";import"./index-COFqXK4G.js";import"./navigation-down-arrow-D7lpxDjD.js";import"./navigation-right-arrow-BSI1uudB.js";import"./navigation-right-arrow-BqhiEzIr.js";import"./useCurrentTheme-Wc2uAQz5.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BA4HNUEX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ClLbQDrb.js";import"./paper-plane-BeRQVn6H.js";import"./index-CdrtxYXr.js";import"./less-_akB46eN.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
