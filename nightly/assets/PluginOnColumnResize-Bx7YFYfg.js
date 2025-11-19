import{j as o}from"./iframe-DDMtxVo3.js";import{useMDXComponents as n}from"./index-DJVQNbCr.js";import{I as r,F as m}from"./CommandsAndQueries-GL7iyaCL.js";import{M as p,C as s}from"./blocks-CloLtOA5.js";import"./Tag-YMrSkp2O.js";import"./index-DsF6G_NH.js";import"./copy-BTGdlJRd.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BN0Ao-_m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-rp8XBFdR.js";import"./index-BHqqB-9b.js";import"./index-ayjT0mLt.js";import"./Link-D3MGth0a.js";import"./index-BbSpKNs2.js";import"./index-DIh6sAKH.js";import"./index-BeupWmR_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IIlbXN7B.js";import"./addCustomCSSWithScoping-CwVVs2bm.js";import"./index-DtIsK-ZK.js";import"./information-CyNj2j11.js";import"./sys-enter-2-Go-dkBfP.js";import"./alert-jQ4OjDPb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BF0Of00g.js";import"./delete-Is_zNJTb.js";import"./settings-DLZSygz9.js";import"./NoData-D2SWaRbW.js";import"./IllustratedMessage-Y2lySBW0.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-eecdh7SK.js";import"./index-n5WxUc-1.js";import"./index-CyCKI4kh.js";import"./slim-arrow-down-B9fX2pE_.js";import"./Input-DldSM5Dd.js";import"./ResponsivePopoverCommon.css-r6Yy0Fkp.js";import"./ValueStateMessage.css-CBQfZKeo.js";import"./Suggestions.css-Ce_nnZbO.js";import"./ListBoxItemGroupTemplate-jkoaDovc.js";import"./ComboBoxItemGroup-DEv9jHmD.js";import"./ListItemBaseTemplate-D5kLl8tB.js";import"./Token-CpnDDN9x.js";import"./ScrollEnablement-CHq8jwQp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CvaRS6qD.js";import"./ToggleButton-B8VJwrvR.js";import"./SuggestionItem-CkiJy6SK.js";import"./index-vS3KmlTg.js";import"./Option-Bmii2PEM.js";import"./index-cYHXc0IN.js";import"./SegmentedButton-Bch0JHMn.js";import"./index-Ce_ybWMS.js";import"./Select-nmxyrizQ.js";import"./InvisibleMessage-CxUh_0D_.js";import"./slim-arrow-down-C-tgvolj.js";import"./index-Dih0csuE.js";import"./index-C98BWsva.js";import"./index-DkqGVu91.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDA1WG-X.js";import"./group-2-CrgQgZu8.js";import"./sort-descending-VzaHQEUN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bk6vRLMI.js";import"./utils-cWgc0sgc.js";import"./index-D-dIkc7q.js";import"./index-WTvN1xUf.js";import"./index-Boa8xecP.js";import"./navigation-down-arrow-DhowEsmp.js";import"./navigation-right-arrow-rputrWNy.js";import"./navigation-right-arrow-BdCl3OJM.js";import"./useCurrentTheme-Cvsq9vBh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CEfFIx_c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DfGZzaea.js";import"./paper-plane-D2Eg3sKl.js";import"./index-DJj1SKu0.js";import"./less-DAJEncVK.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
