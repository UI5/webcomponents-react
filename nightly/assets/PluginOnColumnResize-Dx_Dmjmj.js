import{j as o}from"./iframe-XvyKyqpc.js";import{useMDXComponents as n}from"./index-CE_ul58K.js";import{I as r,F as m}from"./CommandsAndQueries-D-JkQMzp.js";import{M as p,C as s}from"./blocks-hAblz1ET.js";import"./Tag-BEblEGCN.js";import"./index-CXUKZsMC.js";import"./copy-CAC71KE2.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CWBCe2d6.js";import"./preload-helper-PPVm8Dsz.js";import"./index--us6wF-5.js";import"./index-CP30tsdj.js";import"./index-BkdKA5kQ.js";import"./Link-DWmr0_tI.js";import"./index-DQ79lCi8.js";import"./index-BFysEZU1.js";import"./index-dfRDbF4B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-m1ntkPM9.js";import"./addCustomCSSWithScoping-B_TWNpIo.js";import"./index-Du72Y0zD.js";import"./information-CNwM68I2.js";import"./sys-enter-2-QkDyn9HM.js";import"./alert-DG7Yrkg6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CSc3e4Q2.js";import"./delete-B5OLgZyK.js";import"./settings-Dqag1I3v.js";import"./NoData-CyBr3teM.js";import"./IllustratedMessage-D_Z1qlsF.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-4b1G3hWQ.js";import"./index-BNAr3QqM.js";import"./index-DK_rKyLX.js";import"./slim-arrow-down-DK-zw0Wg.js";import"./Input-CXTsJDH8.js";import"./ResponsivePopoverCommon.css-DpCrglir.js";import"./ValueStateMessage.css-XAEG8ST6.js";import"./Suggestions.css-CIiHbc7N.js";import"./ListBoxItemGroupTemplate-BI-DM9uZ.js";import"./ComboBoxItemGroup-KzkX9_HX.js";import"./ListItemBaseTemplate-2fjL8Mbh.js";import"./Token-CnTsgTtT.js";import"./ScrollEnablement-DpQ29N-3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7uEHLD7.js";import"./ToggleButton-dSfF2CYI.js";import"./SuggestionItem-B8GSZHbf.js";import"./index-C9J1kaOU.js";import"./Option-CL9pckzb.js";import"./index-DLARPJs2.js";import"./SegmentedButton-CghOcyRS.js";import"./index-BjgTYctV.js";import"./Select-CTQ5bkNP.js";import"./InvisibleMessage-frxXXEWO.js";import"./slim-arrow-down-B4bsCSMm.js";import"./index-Cll0lnqL.js";import"./index-ZsJCbCIz.js";import"./index-DcsaMtsM.js";import"./index-DnbbOK4Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DvBdwHZ9.js";import"./group-2-DAa-UPnl.js";import"./sort-descending-ByDZzzA_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BXZXJSvV.js";import"./utils-eccEj8iF.js";import"./index-DTu7S7gE.js";import"./index-DnFcC2fY.js";import"./index-CjcCVkct.js";import"./navigation-down-arrow-CsgziDSU.js";import"./navigation-right-arrow-C0qs9ZTI.js";import"./navigation-right-arrow-B2VygeOe.js";import"./useCurrentTheme-09jbhVQN.js";import"./index-BUhgT8PM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BeXIHH0L.js";import"./paper-plane-D6Z_VCoj.js";import"./index-Bpq5Pj7e.js";import"./less-By6v1WfY.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
