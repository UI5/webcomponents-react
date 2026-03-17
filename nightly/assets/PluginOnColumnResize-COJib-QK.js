import{j as o}from"./iframe-DJaejRN_.js";import{useMDXComponents as r}from"./index-BkjBMRMv.js";import{I as n}from"./CommandsAndQueries-83bvSdoV.js";import{M as m,C as p}from"./blocks-B8-Y-Ni6.js";import"./Tag-zqqHRvHY.js";import"./index-CK92YQRu.js";import"./copy-tix8vrrW.js";import{F as s}from"./Footer-XAiTUg9G.js";import"./PageNotFound-DWPqXbgo.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-S3OMrBy1.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DT5pBXPw.js";import"./index-I-NngIql.js";import"./index-Bal_B_tE.js";import"./index-BVWvlifs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HTE3RcD3.js";import"./addCustomCSSWithScoping-BTx9ebqV.js";import"./index-MWuEJcIb.js";import"./index-D5l-jmF5.js";import"./index-B75X8BI3.js";import"./information-BX0fOOvt.js";import"./sys-enter-2-1CYV1NDA.js";import"./alert-BrdS4drn.js";import"./index-DyG0juUn.js";import"./Illustrations-Ba3wQCeI.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ic1RC2lh.js";import"./delete-B2TUGyO-.js";import"./settings-oIbW7Kic.js";import"./NoData-Byp02WJx.js";import"./NoFilterResults-DWMM6VEP.js";import"./index-bCAzbOQs.js";import"./IllustratedMessage-s2lr1q6e.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BMQ89NOj.js";import"./Input-CQcb9um5.js";import"./ResponsivePopoverCommon.css-DP4stE3l.js";import"./ValueStateMessage.css--EiJ9K55.js";import"./Suggestions.css-x42H9hm7.js";import"./ListBoxItemGroupTemplate-CI1P5CVP.js";import"./ComboBoxItemGroup-vt_nZJ4z.js";import"./ListItemBaseTemplate-tq4M4CSx.js";import"./Token-CcP7J3UG.js";import"./ScrollEnablement-BJkBQfQ1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-wGcDRCSr.js";import"./ToggleButton-Bg6zoSMg.js";import"./multiselect-all-Cfr97RyP.js";import"./SuggestionItem-CJn-zf9Z.js";import"./index-dGJDzqrP.js";import"./Option-BqthOmxs.js";import"./index-C6g94agN.js";import"./SegmentedButton-PDpQSPVH.js";import"./index-BgCVM7Zt.js";import"./Select-dEPIbNJV.js";import"./InvisibleMessage-Dz7aUwZ8.js";import"./index-DFKZ6jPd.js";import"./index-BPdG_RYR.js";import"./index-DjtZBg8h.js";import"./index-BNdX0xO5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDPJ_dAS.js";import"./group-2-CVKMzmVq.js";import"./sort-descending-Cu3NsCcr.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BmtLvC-2.js";import"./utils-TCEZc21J.js";import"./index-DhUMRh-k.js";import"./index-ClucFX_O.js";import"./index-Bfqqdgj5.js";import"./navigation-down-arrow-Bci2V2X1.js";import"./navigation-right-arrow-iEyeUQmo.js";import"./navigation-right-arrow-BSQqx-Ox.js";import"./useCurrentTheme-ywdbp9Ht.js";import"./index-_GCZfNpS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CiD1d4mj.js";import"./paper-plane-3RukpGeM.js";import"./index-BC2sgrml.js";import"./less-5TCBAmqB.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
