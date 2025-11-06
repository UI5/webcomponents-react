import{j as o}from"./iframe-cRRiQYmf.js";import{useMDXComponents as n}from"./index-Bs0WiH3G.js";import{I as r,F as m}from"./CommandsAndQueries-6fQDSTza.js";import{M as p,C as s}from"./blocks-BE5V3uJk.js";import"./Tag-CfbQk3KA.js";import"./index-ByOWo14Z.js";import"./copy-B18ZHZAg.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-SnDQDGkq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DBZCyEHT.js";import"./index-DUKoRTQU.js";import"./index-BO1H95-d.js";import"./Link-CLMkrIwX.js";import"./index-BFR5idok.js";import"./index-DtECOzdu.js";import"./index-CIJf_Fw_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AOA_k-Lh.js";import"./addCustomCSSWithScoping-OHQyl5Vz.js";import"./index-CSUcx8X8.js";import"./information-De5Q3Snv.js";import"./sys-enter-2-D3hJu-L0.js";import"./alert-B4Rl3843.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BK8mUCRL.js";import"./delete-Bd7yIIZR.js";import"./settings-CkxhKC3j.js";import"./NoData-BehLBpti.js";import"./IllustratedMessage-DqABzVpa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-VL3fZtOd.js";import"./index-Bx4iySkn.js";import"./index-CY4bohbd.js";import"./slim-arrow-down-DZLbO_TY.js";import"./Input-O88X3mcn.js";import"./ResponsivePopoverCommon.css-BT4UA6Ai.js";import"./ValueStateMessage.css-C-lEZ5fy.js";import"./Suggestions.css-BtMgvrZ_.js";import"./ListBoxItemGroupTemplate-BLsE5HOe.js";import"./ComboBoxItemGroup-BaeQpQAH.js";import"./ListItemBaseTemplate-DdTsTPm6.js";import"./Token-DF7-FLbj.js";import"./ScrollEnablement-C_xMDTEO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-S4OY1eRO.js";import"./ToggleButton-CviqyRwB.js";import"./SuggestionItem-CjLVovyh.js";import"./index-CoDhBCO9.js";import"./Option-GMye3bh3.js";import"./index-D4jzIrzX.js";import"./SegmentedButton-uhejKh0q.js";import"./index-DeMEMDE-.js";import"./Select-CkiWgRnV.js";import"./InvisibleMessage-BlcyWLwi.js";import"./slim-arrow-down-C0fV2X2u.js";import"./index-Ks8eZ4TE.js";import"./index-Bo-pJJ92.js";import"./index-BoMEYoEg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcVMbh74.js";import"./group-2-BGmIa860.js";import"./sort-descending-Ce8AiZNs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWIjNCzP.js";import"./utils-CZLAE_2R.js";import"./index-DrKrZdYX.js";import"./index-BVEPWHWu.js";import"./index-CXNthmCr.js";import"./navigation-down-arrow-BxseiaEF.js";import"./navigation-right-arrow-DQ_EAbwb.js";import"./navigation-right-arrow-CpRhiy_v.js";import"./useCurrentTheme-Dho7lVR9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-GZDFVWPb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CENrkM0D.js";import"./paper-plane-BQ0EpgoV.js";import"./index-wG1F1-kD.js";import"./less-DiFkS5DT.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
