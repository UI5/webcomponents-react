import{j as o}from"./iframe-rmPOfAEk.js";import{useMDXComponents as r}from"./index-OsAdl3Cq.js";import{I as n}from"./CommandsAndQueries-DjjDgYFy.js";import{M as m,C as p}from"./blocks-v63_T-Iu.js";import"./Tag-OMAKRCyN.js";import"./index-D5lEazYO.js";import"./copy-DYpkXBzp.js";import{F as s}from"./Footer-CYSIA4uy.js";import"./PageNotFound-DRbJUQ3U.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CV_0_ohV.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CL9BwqUh.js";import"./index-g6c80OWk.js";import"./index-DUTk5K7T.js";import"./index-DTuZFVSS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJhSo9M3.js";import"./addCustomCSSWithScoping-CZ8_VPk_.js";import"./index-B-iV9gR7.js";import"./index-CE8iCloJ.js";import"./index-NT5PBuFY.js";import"./information-Cw3g4evs.js";import"./sys-enter-2-DOLwXwFm.js";import"./alert-Bcs9t0my.js";import"./index-Xi7qAWgh.js";import"./Illustrations-DRh478fB.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D8uG6UN_.js";import"./delete-7T4T292I.js";import"./settings-66ZgnR0a.js";import"./NoData-DQcDBndZ.js";import"./NoFilterResults-CC9q__py.js";import"./index-Yh-O7GlE.js";import"./IllustratedMessage-CCm8S1Gx.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-D2uxoQam.js";import"./slim-arrow-down-Bl1bEFWF.js";import"./Input-glL1F1kj.js";import"./ResponsivePopoverCommon.css-GT00HLHH.js";import"./ValueStateMessage.css-RtBMBlvI.js";import"./Suggestions.css-CgnqqM6E.js";import"./ListBoxItemGroupTemplate-WYDqvByC.js";import"./ComboBoxItemGroup-BSWGugft.js";import"./ListItemBaseTemplate-p1mZhZvu.js";import"./Token-DWH544iL.js";import"./ScrollEnablement-B-kTKigp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CRLY1leJ.js";import"./ToggleButton-BEcKdnv0.js";import"./SuggestionItem-CQNiXwiQ.js";import"./index-B3jy6IAX.js";import"./Option-Bad0_Io9.js";import"./index-DxhHy3Gd.js";import"./SegmentedButton-DUqSOsPX.js";import"./index-AMKqxIVn.js";import"./Select-DdViIcLL.js";import"./InvisibleMessage-ETmXadbm.js";import"./slim-arrow-down-oHn4D4RL.js";import"./index-BYovFlgd.js";import"./index-bMWebckg.js";import"./index-CQHyU4zR.js";import"./index-CudHcNn6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BbLmvUxf.js";import"./group-2-CyBkSFkc.js";import"./sort-descending-INYw-64n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C8BPSLJ0.js";import"./utils-fGvGoAbl.js";import"./index-xuLONss2.js";import"./index-BTYtJa8z.js";import"./index-Ciy6r5Cs.js";import"./navigation-down-arrow-Bdse7Bz_.js";import"./navigation-right-arrow-BJGNqj7n.js";import"./navigation-right-arrow-CccUgewr.js";import"./useCurrentTheme-DNPFYXmT.js";import"./index-CbGpOrAc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C7JC_Aca.js";import"./paper-plane-eTKmtRbK.js";import"./index-CttNC8Pp.js";import"./less-CW7kPXDQ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(s,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
