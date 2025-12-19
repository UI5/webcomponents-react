import{j as o}from"./iframe-l0Gg6LLs.js";import{useMDXComponents as n}from"./index-Cae9Voso.js";import{I as r,F as m}from"./CommandsAndQueries-Clw2dQJN.js";import{M as p,C as s}from"./blocks-C2P3yVo4.js";import"./Tag-CjLUfCmJ.js";import"./index-DCqXNXQw.js";import"./copy-B13EJS-v.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-ls20Jl9_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FAekmb_7.js";import"./index-I7Wz355y.js";import"./index-C2QpZOLo.js";import"./Link-BXQMs19K.js";import"./index-CihYjerb.js";import"./index-lxp-HdMJ.js";import"./index-hvU57qSB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DhC4Vn3X.js";import"./addCustomCSSWithScoping-DDpmsdIj.js";import"./index-Bwbvp4Wo.js";import"./information-BcS3rXju.js";import"./sys-enter-2-BSmamrdx.js";import"./alert-B368tBUy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dc7jR-KD.js";import"./delete-CYGBhC6b.js";import"./settings-BfR_EbIn.js";import"./NoData-BJEIeC_Z.js";import"./IllustratedMessage-UAYFerO5.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-I-0GEqqm.js";import"./index-DjiXt-x0.js";import"./index-55nh7KaD.js";import"./slim-arrow-down-ZtlK-zaq.js";import"./Input-0cqUaW6-.js";import"./ResponsivePopoverCommon.css-DGJU_sLh.js";import"./ValueStateMessage.css-DCpV9L59.js";import"./Suggestions.css-BIrO0gc4.js";import"./ListBoxItemGroupTemplate-oKbzZNII.js";import"./ComboBoxItemGroup-Bci5GWY6.js";import"./ListItemBaseTemplate-BzqS2Fl5.js";import"./Token-DbjQuNPp.js";import"./ScrollEnablement-CuGe7Q3J.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1yh_JDGs.js";import"./ToggleButton-BvTjNdfc.js";import"./SuggestionItem-gIvgc1mY.js";import"./index-CBicJKGb.js";import"./Option-MqiGXaOA.js";import"./index-CLXzz8MM.js";import"./SegmentedButton-BnAh5N-e.js";import"./index-B9BehsdP.js";import"./Select-D1jaw_ad.js";import"./InvisibleMessage-DkkMM-lY.js";import"./slim-arrow-down-mLEC8bQM.js";import"./index-wmdfvP4Q.js";import"./index-Cfof4SU3.js";import"./index-CXYWUxgw.js";import"./index-Cad5KvVd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DwZ3A5h1.js";import"./group-2-j3759jZ3.js";import"./sort-descending-BxAlrwUx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CHHNw0uv.js";import"./utils-egnNt3B-.js";import"./index-DPc2cZ4_.js";import"./index-CzPfd54r.js";import"./index-fo8z4Qvq.js";import"./navigation-down-arrow-Bp3L9AX_.js";import"./navigation-right-arrow-DgSJmfeF.js";import"./navigation-right-arrow-DHp8bcl8.js";import"./useCurrentTheme-B_bh5PZa.js";import"./index-DrAUXulF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CdRMpk74.js";import"./paper-plane-Db0yyKlT.js";import"./index-crTpvm9q.js";import"./less-_a0dbQtg.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
