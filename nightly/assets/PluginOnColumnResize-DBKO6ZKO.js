import{j as o}from"./iframe-BFGaT_FV.js";import{useMDXComponents as n}from"./index-CnhfjtvF.js";import{I as r,F as m}from"./CommandsAndQueries-B8JKM3km.js";import{M as p,C as s}from"./blocks-Dayk-WJV.js";import"./Tag-B8YEukqj.js";import"./index-DAwrSR1M.js";import"./copy-AGelM_Ll.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BerL1zlH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvUgbQCZ.js";import"./index-BlQFkuHY.js";import"./index-BZnNWwSk.js";import"./Link-BBvAtJ6F.js";import"./index-B9hLr1Bv.js";import"./index-Bf-TRwAv.js";import"./index-CaRZdhen.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYVZjLb4.js";import"./addCustomCSSWithScoping-B8FWovV5.js";import"./index-1UQ-4lhS.js";import"./information-Bz11YhFZ.js";import"./sys-enter-2-BSVZTuif.js";import"./alert-BaGtUWxL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DTmyScv0.js";import"./delete-v-dXAAIl.js";import"./settings-BOscvD9f.js";import"./NoData-gDQFgR3G.js";import"./IllustratedMessage-CDHVVzlP.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DA9fHCLR.js";import"./index-vKbE8tbN.js";import"./index-D7iYQuDO.js";import"./slim-arrow-down-Dd8YkBw-.js";import"./Input-Bmjprhie.js";import"./ResponsivePopoverCommon.css-6c8XaA5C.js";import"./ValueStateMessage.css-Bh1E9Ghj.js";import"./Suggestions.css-BTwMp3YW.js";import"./ListBoxItemGroupTemplate-undkDWdm.js";import"./ComboBoxItemGroup-OfkHN57U.js";import"./ListItemBaseTemplate-SnpzLXKW.js";import"./Token-CMJi_Rys.js";import"./ScrollEnablement-cAwpl98b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ccu5KVL2.js";import"./ToggleButton-CRoHXs7m.js";import"./SuggestionItem-DGnZQlbw.js";import"./index-Du7xx1dp.js";import"./Option-CdFGI1PC.js";import"./index-B0eNO-0P.js";import"./SegmentedButton-DCEuTMnH.js";import"./index-DKtUZxqJ.js";import"./Select-c6jnMs-7.js";import"./InvisibleMessage-CbPZDP3-.js";import"./slim-arrow-down-BdvQ_s0T.js";import"./index-jrrMCwgY.js";import"./index-Dl1PX_Mb.js";import"./index-Bs16yVYB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C7e9On5N.js";import"./group-2-Dl113zhQ.js";import"./sort-descending-qVZJ1324.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DJcIUy6q.js";import"./utils-B6_SaaJR.js";import"./index-DMziRRZN.js";import"./index-DyXpRQb6.js";import"./index-BH-J8zHs.js";import"./navigation-down-arrow-DItIrMRs.js";import"./navigation-right-arrow-CKSHLqK6.js";import"./navigation-right-arrow-C4wfpKAx.js";import"./useCurrentTheme-C8SqHROD.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bn2vXSX1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hb1ZDPhU.js";import"./paper-plane-DJjUVXFe.js";import"./index-DlH340EZ.js";import"./less-CUu-6yGw.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
