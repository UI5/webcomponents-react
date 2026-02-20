import{j as o}from"./iframe-gbBUxptC.js";import{useMDXComponents as n}from"./index-BaGM4qgt.js";import{I as r,F as m}from"./CommandsAndQueries-BmjJVETk.js";import{M as p,C as s}from"./blocks-BtAmmb_9.js";import"./Tag-DXmb03WA.js";import"./index-a6vq6nFR.js";import"./copy-CmUJgJe8.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BZWTu7v3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAL1VzDv.js";import"./index-C5e2Rf9k.js";import"./index-FjtRLsYm.js";import"./Link-BqgTlNng.js";import"./index-ClLX1AfH.js";import"./index-n6dTxbQI.js";import"./index-CHg7n_fg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cfhz7n7-.js";import"./addCustomCSSWithScoping-BVowAJ0u.js";import"./index-DTWmKJf_.js";import"./information-RQmI2RmD.js";import"./sys-enter-2-BfzFGSW6.js";import"./alert-BAR71iQk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Be0U_ft-.js";import"./delete-CHhVsLyE.js";import"./settings-CRXB_GUB.js";import"./NoData-BEbrRJin.js";import"./IllustratedMessage-DPIq6GRo.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DYND8aIN.js";import"./index-BUjtWPUe.js";import"./index-BdMYduaB.js";import"./slim-arrow-down-PxErebVm.js";import"./Input-DpRW8R60.js";import"./ResponsivePopoverCommon.css-CB1aGVFH.js";import"./ValueStateMessage.css-0cpHNy9C.js";import"./Suggestions.css-CH_OcyZq.js";import"./ListBoxItemGroupTemplate-ZlrFvfdZ.js";import"./ComboBoxItemGroup-CbX9SgdN.js";import"./ListItemBaseTemplate-dFMho5BM.js";import"./Token-Dbj0dySX.js";import"./ScrollEnablement-Bwz9Nt66.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CwkyZiZH.js";import"./ToggleButton-xGavKy1U.js";import"./SuggestionItem-BhYYhTT2.js";import"./index-DV9Zxj4n.js";import"./Option-RAQpRMCb.js";import"./index-_6AuRaIf.js";import"./SegmentedButton-5Ar7ByFu.js";import"./index-CjC8hPeS.js";import"./Select-D_YlJdGW.js";import"./InvisibleMessage-1DPtlwXM.js";import"./slim-arrow-down-DtVtSqjI.js";import"./index-EULlufCD.js";import"./index-VaOwe_sd.js";import"./index-C9agJ7zC.js";import"./index-CT_MWQmw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DuWpi9Yb.js";import"./group-2-DjzUyU8Y.js";import"./sort-descending-DrynzVZQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbnIJMNo.js";import"./utils-DQjxHGDo.js";import"./index-8tidi2SL.js";import"./index-BkJL-s5e.js";import"./index-BKNwKDSV.js";import"./navigation-down-arrow-C8MDIXaq.js";import"./navigation-right-arrow-BL-KUoKn.js";import"./navigation-right-arrow-CDbw-fpV.js";import"./useCurrentTheme-CuNgw21V.js";import"./index-DIjWH5C3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D6wyqJl0.js";import"./paper-plane-D3CWJS4i.js";import"./index-D1kpHmeu.js";import"./less-C3KbgZVL.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
