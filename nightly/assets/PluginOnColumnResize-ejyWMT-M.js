import{j as o}from"./iframe-CmCInUUM.js";import{useMDXComponents as n}from"./index-NXwP46VZ.js";import{I as r,F as m}from"./CommandsAndQueries-5W0lVTAB.js";import{M as p,C as s}from"./blocks-Cl0pXsJo.js";import"./Tag-CGuAaCB9.js";import"./index-dx9tkoNT.js";import"./copy-DcIDD3Wq.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B998ocgs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5gdlwKM.js";import"./index-Booqb8sh.js";import"./index-DMcZQwaV.js";import"./Link-7Zm1Qi1d.js";import"./index-DXLeTiXI.js";import"./index-CVcma5Dd.js";import"./index-BKQYdjqz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BwmvQWIh.js";import"./addCustomCSSWithScoping-CwKscpVm.js";import"./index-DUfO3zu2.js";import"./information-CRsOZ4kf.js";import"./sys-enter-2-CasWdLF0.js";import"./alert-BeT31Ncd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWSnjBxa.js";import"./delete-ByaVoT0C.js";import"./settings-2tepRQZU.js";import"./NoData-D9vcDpv1.js";import"./IllustratedMessage-xrcgtvwK.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DeEwKae1.js";import"./index-C2-u_t4E.js";import"./index-B3GkoGRb.js";import"./slim-arrow-down-CMV2GNC8.js";import"./Input-BGKIH-Ic.js";import"./ResponsivePopoverCommon.css-CbiWaSFv.js";import"./ValueStateMessage.css-CnRjV3lN.js";import"./Suggestions.css-C2VGKGgK.js";import"./ListBoxItemGroupTemplate-k-S-fkpm.js";import"./ComboBoxItemGroup-BP14axHQ.js";import"./ListItemBaseTemplate-Qr8U-I-g.js";import"./Token-DPa-8Kib.js";import"./ScrollEnablement-D5S2g6lr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1o7Rq9a2.js";import"./ToggleButton-BXsjca7D.js";import"./SuggestionItem-B2pt1HBo.js";import"./index-B1jimoj1.js";import"./Option-CFasqXc0.js";import"./index-3jN65nsN.js";import"./SegmentedButton-BKbX-QXu.js";import"./index-EW1SbgQq.js";import"./Select-55Dn_LDE.js";import"./InvisibleMessage-UG9NOdi8.js";import"./slim-arrow-down-DzHwR3gT.js";import"./index-bfIcPC0t.js";import"./index-BcE1ulij.js";import"./index-BqyE9dt2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CeCfP_kP.js";import"./group-2-oswyoZGa.js";import"./sort-descending-CGLEskGp.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CQOE7bFF.js";import"./utils-CKWqgB9c.js";import"./index-lw26byMY.js";import"./index-Dfo16rW6.js";import"./index-C7mwynkt.js";import"./navigation-down-arrow-DGAK0MlQ.js";import"./navigation-right-arrow-BNormXIu.js";import"./navigation-right-arrow-BskILAgl.js";import"./useCurrentTheme-Dnx3Zrry.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWEnIavS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQYLjazp.js";import"./paper-plane-CcL3Dpnl.js";import"./index-Dru_zBSF.js";import"./less-CMdTuNim.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
