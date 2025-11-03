import{j as o}from"./iframe-DLeMGAs6.js";import{useMDXComponents as n}from"./index-BeTNnGed.js";import{I as r,F as m}from"./CommandsAndQueries-Do6MeMuW.js";import{M as p,C as s}from"./blocks-CVdnQ-m5.js";import"./Tag-fuIv2r1-.js";import"./index-CAID728Y.js";import"./copy-ClThfN15.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-zkAPVIrI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ChbJtMA8.js";import"./index-D_-Zm7gh.js";import"./index-Xs0i3Hhr.js";import"./Link-D_uo4UVb.js";import"./index-CetP1T2M.js";import"./index-DQmJ5ecl.js";import"./index-DGDr800L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C13TjiIP.js";import"./addCustomCSSWithScoping-Cj5ZxzDT.js";import"./index-BelAbkZz.js";import"./information-BttnUTpt.js";import"./sys-enter-2-DQSYULXQ.js";import"./alert-Braz2hWt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BZLT9ilq.js";import"./delete-DC-_Y22L.js";import"./settings-C8YgnEjD.js";import"./NoData-DIe6lTz9.js";import"./IllustratedMessage-C0T15_Cz.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DSla0Ypj.js";import"./index-DKaTYi7Y.js";import"./index-dlJAYtv8.js";import"./slim-arrow-down-CXh7VlFz.js";import"./Input-BvEbFIGf.js";import"./ResponsivePopoverCommon.css-Cwu8TVSn.js";import"./ValueStateMessage.css-CYGxQFIT.js";import"./Suggestions.css-CnL5XvB_.js";import"./ListBoxItemGroupTemplate-TBm3jGfQ.js";import"./ComboBoxItemGroup-v9blSsnm.js";import"./ListItemBaseTemplate-B0VtVoTY.js";import"./Token-DXa6gniM.js";import"./ScrollEnablement-LGuvxbbP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CVpJPqGn.js";import"./ToggleButton-DdR_U0J3.js";import"./SuggestionItem-Bytxfkg7.js";import"./index-DWJIi1Cu.js";import"./Option-BABDhVgD.js";import"./index-BOHoyyXI.js";import"./SegmentedButton-BPn908Zb.js";import"./index-DLP1sSSh.js";import"./Select-D3bJlSEY.js";import"./InvisibleMessage-CjnlHtO4.js";import"./slim-arrow-down-DMmSjQ_W.js";import"./index-DRwQgmSC.js";import"./index-C6b9i92g.js";import"./index-CsHvU1n4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-P5Bwzq42.js";import"./group-2-CC5jzuvS.js";import"./sort-descending-BzCp0kGA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BDs2ZQJs.js";import"./utils-DPe1wMqz.js";import"./index-Bg78CFbQ.js";import"./index-Bf4uxavh.js";import"./index-BiS7rtJ9.js";import"./navigation-down-arrow-B6cj3Ilp.js";import"./navigation-right-arrow-GrjOYVc0.js";import"./navigation-right-arrow-DkYagu5m.js";import"./useCurrentTheme-Xs1NZ5mm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-7Psn0Vsh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Doon_hgW.js";import"./paper-plane-BrBAfH5S.js";import"./index-Bred2sqK.js";import"./less-B08nub1h.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
