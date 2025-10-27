import{j as o}from"./iframe-B7JRtnJ_.js";import{useMDXComponents as n}from"./index-BPvgxWCZ.js";import{I as r,F as m}from"./CommandsAndQueries-Q6uRMqWv.js";import{M as p,C as s}from"./blocks-De_aBrmo.js";import"./Tag-BKx3QN9f.js";import"./index-D4cnUaLM.js";import"./copy-C1tv-pSG.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DXu8cpTj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bxt1rtVG.js";import"./index-DptOKZBu.js";import"./index-DoEzIHzx.js";import"./Link-CTrIksmS.js";import"./index-Ch21QDGf.js";import"./index-B10alG5K.js";import"./index-DCbqd4CK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CpyU0bSl.js";import"./addCustomCSSWithScoping-COHCvbrD.js";import"./index-VZQHlfm7.js";import"./information-CsJaoifg.js";import"./sys-enter-2-ZCQT486r.js";import"./alert-B325SdK2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CDBgji9G.js";import"./delete-B3tuR7-p.js";import"./settings-D5gHcoOg.js";import"./NoData-D9ka5VCC.js";import"./IllustratedMessage-BJKH4F_T.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DEpwK6Ta.js";import"./index-DTKzGQ6P.js";import"./index-CsB4ym8b.js";import"./slim-arrow-down-BzVC3qLM.js";import"./Input-BYPwe2OS.js";import"./ResponsivePopoverCommon.css-D4L-fz7S.js";import"./ValueStateMessage.css-Da6bxDPp.js";import"./Suggestions.css-D7e9g6wi.js";import"./ListBoxItemGroupTemplate-i04jvwvt.js";import"./ComboBoxItemGroup-35_A61aK.js";import"./ListItemBaseTemplate-zRKoETe6.js";import"./Token-DavucC3B.js";import"./ScrollEnablement-De2yMTO7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DOEa2jCy.js";import"./ToggleButton-DUnpLraq.js";import"./SuggestionItem-cFLHLZrB.js";import"./index-CqtNJPl5.js";import"./Option-KMv42Mqm.js";import"./index-Ca9erLwf.js";import"./SegmentedButton-BR2WkUo4.js";import"./index-Dq1tb5Fi.js";import"./Select-BM-L4rd4.js";import"./InvisibleMessage-BnecaueW.js";import"./slim-arrow-down-BF5Yax_r.js";import"./index-DeNJuL6H.js";import"./index-Jqh8kZ4Z.js";import"./index-SAfhucJr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-mXBC9qtL.js";import"./group-2-C1w6MKqp.js";import"./sort-descending-D7Gnpxkd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-e_OfuZeF.js";import"./utils-B0P9OHGE.js";import"./index-ntbAsQ4L.js";import"./index-DYX22vMe.js";import"./index-BH2TLEnM.js";import"./navigation-down-arrow-BNouF3FU.js";import"./navigation-right-arrow-CwzVtkMG.js";import"./navigation-right-arrow-BWpP7Omt.js";import"./useCurrentTheme-C1kqmVty.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BtJSqTjG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRx_4vwg.js";import"./paper-plane-B06jmj5a.js";import"./index-Ch7LJGDA.js";import"./less-Dzjv4OdC.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
