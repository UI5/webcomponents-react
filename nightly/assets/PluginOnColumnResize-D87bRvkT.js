import{j as o}from"./iframe-DjjZnZd-.js";import{useMDXComponents as n}from"./index-CHlimz1C.js";import{I as r,F as m}from"./CommandsAndQueries-WOCJDSHC.js";import{M as p,C as s}from"./blocks-BmkOoUGB.js";import"./Tag-CUGM_Neu.js";import"./index-CA-PQGxD.js";import"./copy-ZK04gjjU.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bifb3c2A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CT-jhGw4.js";import"./index-BgVmtdEP.js";import"./index-BFZ4A4pM.js";import"./Link-DOn3kiwy.js";import"./index-DmOXd_eL.js";import"./index-nsJY5Xz1.js";import"./index-BB6l50am.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B12gaSwN.js";import"./addCustomCSSWithScoping-vHMhzzpD.js";import"./index-BcQoqGu9.js";import"./information-DMdo7dcL.js";import"./sys-enter-2-CptPzh8p.js";import"./alert-CrXk_arY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vqAtxyOw.js";import"./delete-Bebt7tCf.js";import"./settings-uRQQ-qnc.js";import"./NoData-DF1OdlTc.js";import"./IllustratedMessage-D_G1HSBE.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BmB2bMcc.js";import"./index-CM7JCb8T.js";import"./index-DvsJxwXk.js";import"./slim-arrow-down-CxXp2snF.js";import"./Input-B-umR_e1.js";import"./ResponsivePopoverCommon.css-C4iintSn.js";import"./ValueStateMessage.css-Cunvc68_.js";import"./Suggestions.css-Ci8_31Vi.js";import"./ListBoxItemGroupTemplate-GVKfLp8U.js";import"./ComboBoxItemGroup-CQl8BqG8.js";import"./ListItemBaseTemplate-6SXMeQ_0.js";import"./Token-CKE3PZz5.js";import"./ScrollEnablement-C0m6jxeW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRQF6RVv.js";import"./ToggleButton-B90-JE9y.js";import"./SuggestionItem-DW58jthD.js";import"./index-DmUR5SWR.js";import"./Option-DqRKlcDR.js";import"./index-CH77s4oW.js";import"./SegmentedButton-ChMyKVb2.js";import"./index-BkRDr5FS.js";import"./Select-5vzl-izW.js";import"./InvisibleMessage-8UwgTYD7.js";import"./slim-arrow-down-DPNABw5m.js";import"./index-Cl5F4XUs.js";import"./index-CbGzdtcY.js";import"./index-BRl60Xfr.js";import"./index-Beu0nm3Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMkv1rya.js";import"./group-2-CoGriti5.js";import"./sort-descending-DD-b124P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8m0ILQH8.js";import"./utils-BXT1KgTI.js";import"./index-Dra2atL0.js";import"./index-BZLP_aSQ.js";import"./index-ntFKxsdS.js";import"./navigation-down-arrow-augm2Glo.js";import"./navigation-right-arrow-CJ9-VHOj.js";import"./navigation-right-arrow-CXx-Foq7.js";import"./useCurrentTheme-BtKqULF1.js";import"./index-C9h2pwj1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sDVY4Y6h.js";import"./paper-plane-BKN_YByQ.js";import"./index-B7Qlr8h8.js";import"./less-wFiAvfcX.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
