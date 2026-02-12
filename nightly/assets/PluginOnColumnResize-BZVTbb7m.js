import{j as o}from"./iframe-5IjhfTrO.js";import{useMDXComponents as n}from"./index-DX6MuGUF.js";import{I as r,F as m}from"./CommandsAndQueries-Cp1HBFGN.js";import{M as p,C as s}from"./blocks-CjIjNIVl.js";import"./Tag-DKhe7Llj.js";import"./index-7iKYLPe5.js";import"./copy-BcUsFLyb.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CNWtG6P5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DsJOnmXi.js";import"./index-C0Y9mFvG.js";import"./index-gs9VdEEm.js";import"./Link-D3EHIZv0.js";import"./index-B1bhMGiO.js";import"./index-CZf_ilO1.js";import"./index-Dlo4vTaU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-FOiwvzqu.js";import"./addCustomCSSWithScoping-DinQav34.js";import"./index-DXwYC06A.js";import"./information-CE4MPASh.js";import"./sys-enter-2-B35dOLRE.js";import"./alert-DzX-q61q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-GE08y6_n.js";import"./delete-TDZixyFf.js";import"./settings-Bh7T3Aa4.js";import"./NoData-Bt-daU8p.js";import"./IllustratedMessage-Si1uDDrI.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-bdIH5t39.js";import"./index-o-VfODOS.js";import"./index-NaVgwK4T.js";import"./slim-arrow-down-BxfuL-xs.js";import"./Input-BjA9iDS-.js";import"./ResponsivePopoverCommon.css-EJi8Nc2N.js";import"./ValueStateMessage.css-DkQrLy80.js";import"./Suggestions.css-N3zEGQC3.js";import"./ListBoxItemGroupTemplate-Bgeu1wE-.js";import"./ComboBoxItemGroup-CVa1qtfW.js";import"./ListItemBaseTemplate-DhbOBe-8.js";import"./Token-BHuXs6MO.js";import"./ScrollEnablement-CWoktJAU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bqb-MqKL.js";import"./ToggleButton-CYehuNUj.js";import"./SuggestionItem-CF5WoXJt.js";import"./index-BxhVAhSv.js";import"./Option-owItQ9u6.js";import"./index-B_MsBPhq.js";import"./SegmentedButton-CMfQs4cN.js";import"./index-Dp3YThp5.js";import"./Select-CquxZ4Yo.js";import"./InvisibleMessage-B4iVYYKg.js";import"./slim-arrow-down-DyuT9wxt.js";import"./index-DgMIVDzd.js";import"./index-0aeZ3IYW.js";import"./index-CMqt-nBZ.js";import"./index--WdbnVMu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ZqboP92g.js";import"./group-2-CwAhtfHQ.js";import"./sort-descending-Z5P70oJL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1_zmeRhs.js";import"./utils-BwxVe_F4.js";import"./index-CpQToSwa.js";import"./index-CHozFaoZ.js";import"./index-B4R63qeo.js";import"./navigation-down-arrow-uPQicAfY.js";import"./navigation-right-arrow-DcPCFKfd.js";import"./navigation-right-arrow-C41To8WY.js";import"./useCurrentTheme-DOrA3ijw.js";import"./index-DRFZPeLn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zhcrMbzG.js";import"./paper-plane-BsliF2P0.js";import"./index-BVmETlAW.js";import"./less-CYPzWn_X.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
