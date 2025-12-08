import{j as o}from"./iframe-C7GsLKpM.js";import{useMDXComponents as n}from"./index-fgJud-zp.js";import{I as r,F as m}from"./CommandsAndQueries-zRxhXSXv.js";import{M as p,C as s}from"./blocks-D2ryVNuM.js";import"./Tag-CvCDhGeJ.js";import"./index-CDhisaU5.js";import"./copy-DEZSjQMA.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B2fKbP8E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW2WjDDi.js";import"./index-B72Of-bP.js";import"./index-hUX7abRI.js";import"./Link-Bb3LeyVe.js";import"./index-Dyv0UGKb.js";import"./index-m_3CNkhb.js";import"./index-DoyP2rLL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6aw6fal.js";import"./addCustomCSSWithScoping-DxMrCFWH.js";import"./index-Bitbggm1.js";import"./information-CeT29ukt.js";import"./sys-enter-2-DX9sWARu.js";import"./alert-CEtziYy3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CAgadqAL.js";import"./delete-bz-6EPJB.js";import"./settings-DBygnMxF.js";import"./NoData-CTrYoSgm.js";import"./IllustratedMessage-BGIM0Nd-.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DaD8OOim.js";import"./index-CKlIVxrI.js";import"./index-ijI2PEj_.js";import"./slim-arrow-down-C4n298oD.js";import"./Input-9fOmwmcP.js";import"./ResponsivePopoverCommon.css-BAvtZMMP.js";import"./ValueStateMessage.css-DNVmRxxJ.js";import"./Suggestions.css-UxMCDVF9.js";import"./ListBoxItemGroupTemplate-JmLdb2e2.js";import"./ComboBoxItemGroup-jcs7SEnT.js";import"./ListItemBaseTemplate-Zu8EKxdQ.js";import"./Token-CetmLQwP.js";import"./ScrollEnablement-CT_L3ouW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BvfqPVMA.js";import"./ToggleButton-Sfk0hOkH.js";import"./SuggestionItem-DS4QbjGm.js";import"./index-MQHeIURy.js";import"./Option-BRgoDucR.js";import"./index-Df1cP14l.js";import"./SegmentedButton-CX6DYaOW.js";import"./index-Dkt3Rj2j.js";import"./Select-CacmHiKo.js";import"./InvisibleMessage-pKkBY45z.js";import"./slim-arrow-down-D1IgipIY.js";import"./index-BIzmAJhJ.js";import"./index-DAFFpok7.js";import"./index-Carv-kxu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbLf7ryM.js";import"./group-2-Cahp2hEa.js";import"./sort-descending-DDu_wB3P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-eDA8HHQT.js";import"./utils-5pKaz8Dq.js";import"./index-C_uQe8JR.js";import"./index-C3OJ4ssE.js";import"./index-L3JtXj-B.js";import"./navigation-down-arrow-B4J5Ds5O.js";import"./navigation-right-arrow-Cqg0RIxe.js";import"./navigation-right-arrow-C0UEuokw.js";import"./useCurrentTheme-yYLHFo3n.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BiZwHfQ9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xGcqCfh3.js";import"./paper-plane-DVE1JtVi.js";import"./index-uv_n3kbk.js";import"./less-BSXzHnZn.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
