import{j as o}from"./iframe-hWo-wO7u.js";import{useMDXComponents as n}from"./index-B2u3atBN.js";import{I as r,F as m}from"./CommandsAndQueries-BtJ9G9OP.js";import{M as p,C as s}from"./blocks-D665FCej.js";import"./Tag-DiHaMBCj.js";import"./index-D5mqC0e8.js";import"./copy-BPT19kup.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C9Heuwuk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Wfnu6Ku2.js";import"./index-D7ZeaZZe.js";import"./index-BDgRL0Nh.js";import"./Link-BA7dioNH.js";import"./index-CSzf7Z-Y.js";import"./index-DISMqvl7.js";import"./index-C_OvF3EV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfqGlQv7.js";import"./addCustomCSSWithScoping-wCTK5FK_.js";import"./index-qccq9h_o.js";import"./information-C8DEl_tH.js";import"./sys-enter-2-LL0qt2nK.js";import"./alert-DeTqeiYU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DA2kYysS.js";import"./delete-1cfM8Qxo.js";import"./settings-zuK18Bw0.js";import"./NoData-CkVGmtjH.js";import"./IllustratedMessage-D6ysM4C0.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DA-MEoRX.js";import"./index-DmgQLslz.js";import"./index-eQIHm9QM.js";import"./slim-arrow-down-Bh_ekG-x.js";import"./Input-Bj15_VWu.js";import"./ResponsivePopoverCommon.css-CUXmBlOY.js";import"./ValueStateMessage.css-BGhJCY9Z.js";import"./Suggestions.css-lQlw-tAk.js";import"./ListBoxItemGroupTemplate-o-zwMfnD.js";import"./ComboBoxItemGroup-CftSPkvF.js";import"./ListItemBaseTemplate-g1dZt2_w.js";import"./Token-CcowhBYO.js";import"./ScrollEnablement-BHTzoQIK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRaWu8L3.js";import"./ToggleButton-B_IR3Cp0.js";import"./SuggestionItem-DSX2e-Mq.js";import"./index-BwiirZMa.js";import"./Option-DIbmc_PM.js";import"./index-BrYBpQqL.js";import"./SegmentedButton-B4_2if5t.js";import"./index-C9eBbgwm.js";import"./Select-DXUVZ4YD.js";import"./InvisibleMessage-D08-nSQa.js";import"./slim-arrow-down-DxxkkDHb.js";import"./index-DCZ4Ax5f.js";import"./index-Dy1oOrBB.js";import"./index-DiMvuXX8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-izyJHX72.js";import"./group-2-D53K53MV.js";import"./sort-descending-D6Z78OXl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dcm44O05.js";import"./utils-CjxRVdkU.js";import"./index-CfJPtgca.js";import"./index-DG-Dq2q4.js";import"./index-CYQ2RrlX.js";import"./navigation-down-arrow-BOFNhi8Y.js";import"./navigation-right-arrow-Bi5JkXbY.js";import"./navigation-right-arrow-DR5DT_Mp.js";import"./useCurrentTheme-DA70P9tJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bdwri-eL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DAQms381.js";import"./paper-plane-BCqoBBVx.js";import"./index-DDSY4mam.js";import"./less-DnIOHHkm.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
