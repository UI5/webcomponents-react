import{j as o}from"./iframe-DytFdpZ5.js";import{useMDXComponents as n}from"./index-ClxT7adU.js";import{I as r,F as m}from"./CommandsAndQueries-LDofsUzK.js";import{M as p,C as s}from"./blocks-CgPOjV91.js";import"./Tag-wRQS4rBi.js";import"./index-C-BQbcyx.js";import"./copy-HK9b5mhG.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-dqn4eYUx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrrPqcew.js";import"./index-BWneS7co.js";import"./index-DxeYPnJs.js";import"./Link-C5pcYLCj.js";import"./index-DcBMC71h.js";import"./index-BqVVjC2y.js";import"./index-BCsSmGRP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEqUMQtt.js";import"./addCustomCSSWithScoping-DZk4ZVKY.js";import"./index-BUF8RolX.js";import"./information-QfKl2uvK.js";import"./sys-enter-2-Dtt133YD.js";import"./alert-C-riVNTC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DiOVrNXv.js";import"./delete-CwCMe2lJ.js";import"./settings-C02FaBVl.js";import"./NoData-CIyKXGIu.js";import"./IllustratedMessage-i3hYdgC6.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-2XRDHoHl.js";import"./index-DOVXgZrj.js";import"./index-CNbeNrTd.js";import"./slim-arrow-down-DwpoKzJW.js";import"./Input-OPlbUKfy.js";import"./ResponsivePopoverCommon.css-B8i1Z4Ke.js";import"./ValueStateMessage.css-NEtnmyc2.js";import"./Suggestions.css-BPTnvCTk.js";import"./ListBoxItemGroupTemplate-DcxSGtmt.js";import"./ComboBoxItemGroup-f58ZgURw.js";import"./ListItemBaseTemplate-C3JeiHkK.js";import"./Token-MZi7lvV8.js";import"./ScrollEnablement-Co0kt5Hl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXFyw4BN.js";import"./ToggleButton-CpQHTAel.js";import"./SuggestionItem-ChyX7i02.js";import"./index-BCaEmiaT.js";import"./Option-DDqoKHKt.js";import"./index-RdLvHlSh.js";import"./SegmentedButton-B2HozEUv.js";import"./index-BjzJQlM-.js";import"./Select-D_v-B_Z3.js";import"./InvisibleMessage-D5JXdltE.js";import"./slim-arrow-down-DnRA-MRh.js";import"./index-YT8VK-Rh.js";import"./index-1y0Yb24g.js";import"./index-BXQwEVRd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DF8enc35.js";import"./group-2-BR7KJ0wq.js";import"./sort-descending-hDPKa1d_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Co3wqVTT.js";import"./utils-DRDvR6oY.js";import"./index-DgKfW966.js";import"./index-Br4jLSwx.js";import"./index-DzuzVEb4.js";import"./navigation-down-arrow-P9bJyD1t.js";import"./navigation-right-arrow-BdEYw-wX.js";import"./navigation-right-arrow-mvPQojYT.js";import"./useCurrentTheme-Dvjx0PbE.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bva0tWVh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CZGC8T2o.js";import"./paper-plane-BkwdG78Z.js";import"./index-HanQhb0I.js";import"./less-DiFuB8zb.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
