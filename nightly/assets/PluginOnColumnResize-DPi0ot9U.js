import{j as o}from"./iframe-pfqRYewB.js";import{useMDXComponents as n}from"./index-DxYcUkXM.js";import{I as r,F as m}from"./CommandsAndQueries-CBK4GytM.js";import{M as p,C as s}from"./blocks-CN6sML6r.js";import"./Tag-DOr7yVDv.js";import"./index-TMKVCirT.js";import"./copy-0Cu3Y4If.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DVQ3i1IE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOCv1nQg.js";import"./index-C87hBs3b.js";import"./index-DQ0pLIsd.js";import"./Link-C4McI5Wx.js";import"./index-D05B83RK.js";import"./index-5KySo-3G.js";import"./index-BkIEU9nM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJxPXkiU.js";import"./addCustomCSSWithScoping-D2yzvGyj.js";import"./index-DQUabOTm.js";import"./information-BrehxxGu.js";import"./sys-enter-2-CTsRx7VM.js";import"./alert-qaqpTU-O.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCldNniw.js";import"./delete-HmTQ_vFj.js";import"./settings-mukY2-9u.js";import"./NoData-DDeHK4Wf.js";import"./IllustratedMessage-KYMTpTyO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-ChEYzt-h.js";import"./index-CqmZ5mGT.js";import"./index-pwjz_r8O.js";import"./slim-arrow-down-C7FQVzqZ.js";import"./Input-DFBmllhy.js";import"./ResponsivePopoverCommon.css-DZHwRQHx.js";import"./ValueStateMessage.css-CidmTEJw.js";import"./Suggestions.css-DAu3JF_J.js";import"./ListBoxItemGroupTemplate-6BxZnxDU.js";import"./ComboBoxItemGroup-BsUPI3Ww.js";import"./ListItemBaseTemplate-HUrGMPNt.js";import"./Token-B8pfMnds.js";import"./ScrollEnablement-D1lbDyHD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cohus5KX.js";import"./ToggleButton-ZQLSnveS.js";import"./SuggestionItem-Dmy_a1VU.js";import"./index-CwRuKaLk.js";import"./Option-CFDOWY6L.js";import"./index-DCK0KPlT.js";import"./SegmentedButton-B6i3WymD.js";import"./index-DevUfoIh.js";import"./Select-m-b0pWIF.js";import"./InvisibleMessage-DwveyP79.js";import"./slim-arrow-down-bCF3a_Rt.js";import"./index-Dgi4QmO9.js";import"./index-BQzry0n4.js";import"./index-DPBow1JV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-15Rm-0v2.js";import"./group-2-B1-jLB8-.js";import"./sort-descending-uWzFdjhI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWkHdUbT.js";import"./utils-DDcIz5H6.js";import"./index-D2MBzVUF.js";import"./index-8gw3xkKH.js";import"./index-DwWEOzU8.js";import"./navigation-down-arrow-C-s-4mEI.js";import"./navigation-right-arrow-C-NoESB4.js";import"./navigation-right-arrow-B9Xr6jRR.js";import"./useCurrentTheme-VDt91aLT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cp87tOSX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DTunfDpQ.js";import"./paper-plane-s_bnmj1H.js";import"./index-BUgZbWmJ.js";import"./less-Db2oPJEr.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
