import{j as o}from"./iframe-CXQAdbiu.js";import{useMDXComponents as n}from"./index-B53u5pzW.js";import{I as r,F as m}from"./CommandsAndQueries-aoDJK_rZ.js";import{M as p,C as s}from"./blocks-CqzuTWcZ.js";import"./Tag-BVaaDNuO.js";import"./index-B7B2Licm.js";import"./copy-DcVZp789.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BRSknd15.js";import"./preload-helper-PPVm8Dsz.js";import"./index-529wBAr6.js";import"./index-f6kmMniG.js";import"./index-ULIsdIj2.js";import"./Link-BM2g4e1S.js";import"./index-BdQ3exsp.js";import"./index-DaUVwWua.js";import"./index-BjLlWCaV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cah1_bVk.js";import"./addCustomCSSWithScoping-CF9FJk9W.js";import"./index-t0QN6j1g.js";import"./information-ATIM8RIH.js";import"./sys-enter-2-4FUXKSMu.js";import"./alert-DgUa0xxC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1bs8kF-.js";import"./delete-DowHx4wk.js";import"./settings-CVVvFOe0.js";import"./NoData-q7wNzTiS.js";import"./IllustratedMessage-DKb8AtT2.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-B1CzrmOX.js";import"./index-bP1_QBvP.js";import"./index-DY3B7_kM.js";import"./slim-arrow-down-hLmi3DGr.js";import"./Input-CYD0qtkC.js";import"./ResponsivePopoverCommon.css-WfYGUFrq.js";import"./ValueStateMessage.css-CgsW_nz6.js";import"./Suggestions.css-BBvTA_r8.js";import"./ListBoxItemGroupTemplate-D-dkO2pM.js";import"./ComboBoxItemGroup-DHkKBduU.js";import"./ListItemBaseTemplate-BonfCIkK.js";import"./Token-BIdC5wJi.js";import"./ScrollEnablement-CJADfPLf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CfwHGGPG.js";import"./ToggleButton-BmbPwfk7.js";import"./SuggestionItem-gfvdLHYr.js";import"./index-BuXBJAJ4.js";import"./Option-giAR4PyV.js";import"./index-V5sVuIkU.js";import"./SegmentedButton-BPwflYvL.js";import"./index-CTuyF3LD.js";import"./Select-CP65qCm6.js";import"./InvisibleMessage-YSIBfych.js";import"./slim-arrow-down-DaR9tdKT.js";import"./index-Bl8oHxhy.js";import"./index-CBZrs3cq.js";import"./index-C7FokFlZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrdHcgRL.js";import"./group-2-C3eZD9xi.js";import"./sort-descending-bTZCRpky.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CaHCE1NB.js";import"./utils-Ds3TVJbz.js";import"./index-DyB1YbCe.js";import"./index-DAvw1qwV.js";import"./index-D4Ka0onQ.js";import"./navigation-down-arrow-Ba-PmlVo.js";import"./navigation-right-arrow-COX7_ak2.js";import"./navigation-right-arrow-DRoaRB41.js";import"./useCurrentTheme-Drr0Li3b.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BoLqpInx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-FsmN4cF6.js";import"./paper-plane-BcVanBNt.js";import"./index-CeFcuoyl.js";import"./less-DYN9Hj3m.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
