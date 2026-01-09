import{j as o}from"./iframe-DfIU3iRi.js";import{useMDXComponents as n}from"./index-BAUWkqwx.js";import{I as r,F as m}from"./CommandsAndQueries-CCvlfqZe.js";import{M as p,C as s}from"./blocks-DKKhajQJ.js";import"./Tag-CF4VAGn3.js";import"./index-_jZ5OE_X.js";import"./copy-C8IsFnQF.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-ByNHvu_e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoTITwqN.js";import"./index-CqJNVQT5.js";import"./index-dA_mFJJw.js";import"./Link-C-uHXK5B.js";import"./index-CIxyPlXE.js";import"./index-YCl-_jCh.js";import"./index-BGfN_eSt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ohosJA7I.js";import"./addCustomCSSWithScoping-CtydAM5n.js";import"./index-DeDDTWfB.js";import"./information-BagB6Da7.js";import"./sys-enter-2-BiNE0Ouk.js";import"./alert-2mu58sd7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-KGpbhBBx.js";import"./delete-8D9Xq0f6.js";import"./settings-BAe5CL2m.js";import"./NoData-CxWdAvqb.js";import"./IllustratedMessage-Bd_r2vYm.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-m6ySQsFp.js";import"./index-BG5NLI_b.js";import"./index-B19xXjjm.js";import"./slim-arrow-down-Bb-YtPMU.js";import"./Input-CqjsZhK9.js";import"./ResponsivePopoverCommon.css-Cy1wPIS3.js";import"./ValueStateMessage.css-BAxRfhDW.js";import"./Suggestions.css-DueDNo8O.js";import"./ListBoxItemGroupTemplate-BTtpw6gO.js";import"./ComboBoxItemGroup-DWq0dbqq.js";import"./ListItemBaseTemplate-DI00QP8t.js";import"./Token-Nuc1IURe.js";import"./ScrollEnablement-aPqXwvy5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhaZK_FW.js";import"./ToggleButton-Ch3-84nC.js";import"./SuggestionItem-BSPqvPH_.js";import"./index-CBK8lcqF.js";import"./Option-FqdINU15.js";import"./index-Dn2WB7u1.js";import"./SegmentedButton-1X7EzAS8.js";import"./index-jyVCXScg.js";import"./Select-CiT-nASS.js";import"./InvisibleMessage-7vjgfI66.js";import"./slim-arrow-down-DX1xgdpR.js";import"./index-l4yRj4An.js";import"./index-Cx3lK-My.js";import"./index-CGx2oPX9.js";import"./index-DOZNbDJp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CD2G-MzG.js";import"./group-2-fP7CGRh_.js";import"./sort-descending-pMOdjws6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5yWugzz.js";import"./utils-CLitdEJM.js";import"./index-D2jxXTUw.js";import"./index-Be52d92g.js";import"./index-CZUYrYNt.js";import"./navigation-down-arrow-CENkI8Ff.js";import"./navigation-right-arrow-Dmj1kZCH.js";import"./navigation-right-arrow-CxtfgXb_.js";import"./useCurrentTheme-Ci0pxYcB.js";import"./index-CGK5XLKa.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BiwRRP9a.js";import"./paper-plane-CAQIfZrW.js";import"./index-C_6378zF.js";import"./less-DoffisFq.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
