import{j as o}from"./iframe-B2H5__qL.js";import{useMDXComponents as n}from"./index-Bc3WoLXB.js";import{I as r,F as m}from"./CommandsAndQueries-CP6cnX5g.js";import{M as p,C as s}from"./blocks-CV5yz-FR.js";import"./Tag-7r6nRPOe.js";import"./index-Cm-x3hEF.js";import"./copy-BwEcpAyC.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DjHk6yl6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPEAIHq6.js";import"./index-8OksVI4W.js";import"./index-BLSBFNnV.js";import"./Link-CBNkHCq_.js";import"./index-BNOYEhs3.js";import"./index-CwqZMpwP.js";import"./index-BCbtyila.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVsneHI1.js";import"./addCustomCSSWithScoping-cFAolBzW.js";import"./index-CF6OSC7N.js";import"./information-C3uad2Xw.js";import"./sys-enter-2-cAFQMIU-.js";import"./alert-D25r9vgu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-2mPXoG.js";import"./delete-De_7uTjk.js";import"./settings-Bw4IgaRx.js";import"./NoData-DumJbK86.js";import"./IllustratedMessage-DaQeD-aa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DIsiVO76.js";import"./index-LI-LrhIu.js";import"./index-BcRV51-d.js";import"./slim-arrow-down-IfyUaL9Z.js";import"./Input-DAvWZvrZ.js";import"./ResponsivePopoverCommon.css-BADeKMEp.js";import"./ValueStateMessage.css-n2E6R8Y4.js";import"./Suggestions.css-gsdRtnKE.js";import"./ListBoxItemGroupTemplate--DokvtV2.js";import"./ComboBoxItemGroup-OyZUTZdu.js";import"./ListItemBaseTemplate-BQF5AI-D.js";import"./Token-BIK1iWVF.js";import"./ScrollEnablement-qavzlcVF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ABAA2Grv.js";import"./ToggleButton-CR6zJT8D.js";import"./SuggestionItem-Cabfvqu8.js";import"./index-DP9HR8Xc.js";import"./Option--4jXDoVV.js";import"./index-Bej9GB_4.js";import"./SegmentedButton-yzX-JxKB.js";import"./index-DbJBqtMY.js";import"./Select-B37FBEMS.js";import"./InvisibleMessage-a_Ql2uCy.js";import"./slim-arrow-down-BhGE8VlH.js";import"./index-DE7j7mOL.js";import"./index-B4JgLaLf.js";import"./index-CuufOZMl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C5wXzB-i.js";import"./group-2-BYr0dgAY.js";import"./sort-descending-CeBdv557.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAVao4iy.js";import"./utils-CrH2aT5K.js";import"./index-CeDoMS3B.js";import"./index-BbSCYA_B.js";import"./index-GREBbb7h.js";import"./navigation-down-arrow-Dfde4Yh7.js";import"./navigation-right-arrow-CLwAoq3r.js";import"./navigation-right-arrow-riNFmSLh.js";import"./useCurrentTheme-B81VpdIo.js";import"./IndicationColor-DVw-fSM_.js";import"./index--GkGXre7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DhOh-sF-.js";import"./paper-plane-BBEUTVjc.js";import"./index-CV7kc1h1.js";import"./less-D0Q8ENaH.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
