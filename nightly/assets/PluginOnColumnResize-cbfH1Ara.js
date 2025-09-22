import{j as o}from"./iframe-DBihyX6B.js";import{useMDXComponents as r}from"./index-7EvsRGh_.js";import{I as n,F as m}from"./CommandsAndQueries-CFIgGEta.js";import{M as p,C as s}from"./blocks-4x6sD7LX.js";import"./Tag-DcWV-u9n.js";import"./index-DLEor5QI.js";import"./copy-Bf9mIKpj.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CtylBLYb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bht8mt-d.js";import"./index-BXD3v3ss.js";import"./index-tKXjFGfd.js";import"./Link-DylgBeIF.js";import"./addCustomCSSWithScoping-CH8klGw7.js";import"./index-HwCsdfjY.js";import"./index-BYBUQOBO.js";import"./index-CCW-kbw5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ZTIhRr7S.js";import"./index-d0ALq1QU.js";import"./information-5R3zdDEl.js";import"./sys-enter-2-DGkUJwI9.js";import"./alert-DQd1blb9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BX0skYPv.js";import"./delete-DsRezzSz.js";import"./settings-D8ApvCwK.js";import"./NoData-DJ6OgM6J.js";import"./IllustratedMessage-BKJHSB3f.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CfMSskMz.js";import"./index-7dKgR_TP.js";import"./slim-arrow-down-I06sys84.js";import"./Input-DqlEAtbU.js";import"./ResponsivePopoverCommon.css-B4oI3h8B.js";import"./ValueStateMessage.css-Bl16JEdv.js";import"./Suggestions.css-HfDO3kbS.js";import"./ListBoxItemGroupTemplate-B_lc-IJo.js";import"./ComboBoxItemGroup-Cicxp6Dh.js";import"./ListItemBaseTemplate-BxUwYA2D.js";import"./Token-DDOzZdpj.js";import"./ScrollEnablement-DqE26vCK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-lLD0mBZ9.js";import"./ToggleButton-BwluPjoK.js";import"./SuggestionItem-CAvBP0b3.js";import"./index-pqVhDtQo.js";import"./Option-CueS9-6_.js";import"./index-Bm5_dFpv.js";import"./SegmentedButton-BDTfR_EV.js";import"./index-CVUkzR7r.js";import"./Select-D-a_LaKc.js";import"./InvisibleMessage-C5i35pcX.js";import"./slim-arrow-down-CzguZyVL.js";import"./useIsRTL-CjbK0HRk.js";import"./index-fzBRU-3G.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Mxr7aXyx.js";import"./group-2-Ch_CtqUP.js";import"./sort-descending-wLco-Wqm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B-keJto8.js";import"./utils-BMRbKUpN.js";import"./index-jkXxogzq.js";import"./index-BO-2Cayf.js";import"./index-CFigK24s.js";import"./navigation-down-arrow-B0A4GYRi.js";import"./navigation-right-arrow-DghbmXJJ.js";import"./navigation-right-arrow-CfUGm-OO.js";import"./useCurrentTheme-DTyBVBjr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cq7nPF5O.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DLPVgadY.js";import"./index-DxZ2QBIC.js";import"./less-B09o0oEH.js";import"./index-Bx1E4_BP.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
