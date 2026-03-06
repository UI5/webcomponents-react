import{j as o}from"./iframe-2x_0PLRY.js";import{useMDXComponents as r}from"./index-C4Rs_8Uq.js";import{I as n}from"./CommandsAndQueries-CvWMTcrY.js";import{M as m,C as p}from"./blocks-DrJbgW55.js";import"./Tag-CYhgI4gb.js";import"./index-C-fDGoUi.js";import"./copy-DSjSLU2X.js";import{F as s}from"./Footer-C23Ewd88.js";import"./PageNotFound-GiConHCM.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bd-jpep-.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dg5-mm9g.js";import"./index-CZ7o6xvr.js";import"./index-lA2D-rzF.js";import"./index-B75d9fwz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUHmvjuE.js";import"./addCustomCSSWithScoping-CuKwKJpy.js";import"./index-Bs9Uk8tv.js";import"./index-DdARDxKZ.js";import"./index-1eyneICk.js";import"./information-CQy15gwz.js";import"./sys-enter-2-fcqn0uC8.js";import"./alert-DZyPZUjF.js";import"./index-Da9gu6ir.js";import"./Illustrations-GJByOHnh.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C1zA47Ed.js";import"./delete-Dm3A4Zzu.js";import"./settings-49zjIzB4.js";import"./NoData-DViCOYv5.js";import"./NoFilterResults-CGrZSXcs.js";import"./index-D8bHh7X2.js";import"./IllustratedMessage-CKpDrrxq.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Dh2yHhZH.js";import"./Input-IEwNVI_K.js";import"./ResponsivePopoverCommon.css-ComU2SZW.js";import"./ValueStateMessage.css-DaC-uAV3.js";import"./Suggestions.css-pKApGvll.js";import"./ListBoxItemGroupTemplate-BOrTGd3v.js";import"./ComboBoxItemGroup-Xbiqn1zf.js";import"./ListItemBaseTemplate-BxCXKzrT.js";import"./Token-CYwnA-o2.js";import"./ScrollEnablement-B0eGwDT6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bv6KV_Gq.js";import"./ToggleButton-DcKPP7Q3.js";import"./multiselect-all-Cc7wBjwN.js";import"./SuggestionItem-6XDeeXuO.js";import"./index-CUloKy3a.js";import"./Option-OQxXdKHO.js";import"./index-BwzVHAg0.js";import"./SegmentedButton-BVvm5Et3.js";import"./index-CdCmeGHs.js";import"./Select-BSrjV0De.js";import"./InvisibleMessage-C8emxagq.js";import"./index-CZ8rqGj1.js";import"./index-Bn8GbUkv.js";import"./index-CVFqlISp.js";import"./index-CE5xEOkh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BiuxlBCw.js";import"./group-2-DZ_hsHyl.js";import"./sort-descending-F1dqENZc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D1TKLQXO.js";import"./utils-DHc0pTWH.js";import"./index-CglD4THH.js";import"./index-wskoKDOF.js";import"./index-BlA_lRT3.js";import"./navigation-down-arrow-p8Osdjlf.js";import"./navigation-right-arrow-DgBrm-yY.js";import"./navigation-right-arrow-CtTvgiKo.js";import"./useCurrentTheme-DX8kCYl-.js";import"./index-zvEeTffF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ZD4jjhta.js";import"./paper-plane-B8QRKbXZ.js";import"./index-E3mIAJR3.js";import"./less-CXX32lTI.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
