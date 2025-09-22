import{j as o}from"./iframe-43wlDzrj.js";import{useMDXComponents as r}from"./index-XbeLC3PN.js";import{I as n,F as m}from"./CommandsAndQueries-BVePbTmS.js";import{M as p,C as s}from"./blocks-VCr_TDgJ.js";import"./Tag-DvuRdu_J.js";import"./index-D_51MvSW.js";import"./copy-CHCJaVsW.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D10oF3Zp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeIthXDN.js";import"./index-NATKJxhC.js";import"./index-CYHyRuCO.js";import"./Link-N85W-l5g.js";import"./addCustomCSSWithScoping-iHDWQtL_.js";import"./index-DHTRveDi.js";import"./index-C_V3uMP5.js";import"./index-Cx3qav0q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D888T4vP.js";import"./index-CNoVY_XQ.js";import"./information-CaFqdV1q.js";import"./sys-enter-2-C8G6jLKW.js";import"./alert-Id5Wcp3M.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGgp7AI6.js";import"./delete-CGKk-GHt.js";import"./settings-azhe1KGA.js";import"./NoData-BUEDhyou.js";import"./IllustratedMessage-DI5ozM4h.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B47dMSPk.js";import"./index-DLDDGmPM.js";import"./slim-arrow-down-C0QargdW.js";import"./Input-BgaYHg51.js";import"./ResponsivePopoverCommon.css-CvwmGqLs.js";import"./ValueStateMessage.css-BHLQ2DbP.js";import"./Suggestions.css-BTUxUlaU.js";import"./ListBoxItemGroupTemplate-_jq9N5mv.js";import"./ComboBoxItemGroup-BnIMpk3_.js";import"./ListItemBaseTemplate-BNZLQVJb.js";import"./Token-DoODEqch.js";import"./ScrollEnablement-Cm1ZvOJx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1ufjNVS.js";import"./ToggleButton-DZrdfmOA.js";import"./SuggestionItem-5jEGmJUe.js";import"./index-D_dLm55z.js";import"./Option-CJ58wD00.js";import"./index-wy3OMWOb.js";import"./SegmentedButton-B-jkLKht.js";import"./index-t8OF5k03.js";import"./Select-BntRU9MY.js";import"./InvisibleMessage-CWwBH76X.js";import"./slim-arrow-down-CeCiJzmU.js";import"./useIsRTL-DZbwhoX7.js";import"./index-BzUhYjna.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CBaC_AY2.js";import"./group-2-BtuK6gfj.js";import"./sort-descending-upcXrfhH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ds45T-GS.js";import"./utils-BQmyXk_Q.js";import"./index-DI_L1vtw.js";import"./index-BVV-gDdT.js";import"./index-C73gXked.js";import"./navigation-down-arrow-CE61iwfG.js";import"./navigation-right-arrow-Dd3smTto.js";import"./navigation-right-arrow-WYE_8Vwt.js";import"./useCurrentTheme-B63DugkT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-cIZdWKhJ.js";import"./debounce-D7W5PopO.js";import"./paper-plane-xHzyfFIj.js";import"./index-Cz9Roaqc.js";import"./less-D_D0iQDA.js";import"./index-Cb6A3wNx.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
