import{j as o}from"./iframe-utVLPk6_.js";import{useMDXComponents as n}from"./index-_7Ivp6Lr.js";import{I as r,F as m}from"./CommandsAndQueries-BVodeffY.js";import{M as p,C as s}from"./blocks-CRxaTikh.js";import"./Tag-LOOaBowr.js";import"./index-CJmgWra1.js";import"./copy-lkIY5Hce.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BDsnXMC6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5CeUqLr.js";import"./index-vwTPEa24.js";import"./index-w9tOLOey.js";import"./Link-BwFR1FvL.js";import"./index-CQTFiQOO.js";import"./index-BNJRxg3C.js";import"./index-Bt2MbZdo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP35uBwA.js";import"./addCustomCSSWithScoping-ByL_YC7i.js";import"./index-B4YNNEZt.js";import"./information-D-kuCoWP.js";import"./sys-enter-2-ClJM_7Cf.js";import"./alert-CrgSVEE-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D9p4z9Ic.js";import"./delete-DU934BZr.js";import"./settings-DNYW2Yi4.js";import"./NoData-DnrO3Jwz.js";import"./IllustratedMessage-DRvKcE8V.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DuJYHUBv.js";import"./index-DR6xJv6H.js";import"./index-C1CQn4Ke.js";import"./slim-arrow-down-CGFNdOyS.js";import"./Input-tiP9VWUa.js";import"./ResponsivePopoverCommon.css-B57nbVdH.js";import"./ValueStateMessage.css-JwjTw4R6.js";import"./Suggestions.css-CCPLE5i3.js";import"./ListBoxItemGroupTemplate-Ck1u2roF.js";import"./ComboBoxItemGroup-C0T7EKNO.js";import"./ListItemBaseTemplate-C2vXW6Ud.js";import"./Token-DQU0dq_y.js";import"./ScrollEnablement-CN5L_Azg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BjnDf0fW.js";import"./ToggleButton-C4-LaA2x.js";import"./SuggestionItem-DboqQoqi.js";import"./index-F4xTZLhy.js";import"./Option-sIfC3W_q.js";import"./index-BtNFNoxA.js";import"./SegmentedButton-vHAZ21UT.js";import"./index-SO2G2vA7.js";import"./Select-DZIQ9ThU.js";import"./InvisibleMessage-CxrOCkfz.js";import"./slim-arrow-down-BfxVVO5J.js";import"./index-B6DVqkRr.js";import"./index-DqzlYh_H.js";import"./index-DGUOU9Dg.js";import"./index-BIVITqPd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B_SeQI6p.js";import"./group-2-DwYUID86.js";import"./sort-descending-s-9kbj_2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CReDoCO5.js";import"./utils-CKyuyf9p.js";import"./index-DIwmFcHk.js";import"./index-Bs3vKR02.js";import"./index-zHNwrOOb.js";import"./navigation-down-arrow-CSxEN5wN.js";import"./navigation-right-arrow-CElFKq2C.js";import"./navigation-right-arrow-Dfc9Wtwu.js";import"./useCurrentTheme-DctUO6zQ.js";import"./index-EZDuqYef.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DR6ovS2D.js";import"./paper-plane-BTVeyq21.js";import"./index-B60t1jRe.js";import"./less-Bc9CIIDh.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
