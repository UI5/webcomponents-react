import{j as o}from"./iframe-DbW3_KqJ.js";import{useMDXComponents as n}from"./index-BOUZeiU3.js";import{I as r,F as m}from"./CommandsAndQueries-CJXOedaX.js";import{M as p,C as s}from"./blocks-DqJAVTfM.js";import"./Tag-CrC0d5GD.js";import"./index-ImYws479.js";import"./copy-D0b8WOcv.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C3j7y0Ft.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cbn-jnZC.js";import"./index-Dzqums5N.js";import"./index-WvKt5Tsy.js";import"./Link-C0NTxSly.js";import"./index-xs8VNv2y.js";import"./index-1dv7YKpz.js";import"./index-CoALISWz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3tP5nwl9.js";import"./addCustomCSSWithScoping-U-EEhqSi.js";import"./index-D2hl9olI.js";import"./information-Cagswqpw.js";import"./sys-enter-2-DbM4lnFg.js";import"./alert-CAARFYG8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Kyr9bwxl.js";import"./delete-7kEH9zFU.js";import"./settings-CPOuKNF_.js";import"./NoData-D8FNeakc.js";import"./IllustratedMessage-B77VIY0P.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DbJPpgwn.js";import"./index-CsMoMDOx.js";import"./index-DPXPqi6L.js";import"./slim-arrow-down-DZTc9bRP.js";import"./Input-B594VYIN.js";import"./ResponsivePopoverCommon.css-wzLcNDkL.js";import"./ValueStateMessage.css-Cspg1vkt.js";import"./Suggestions.css-BJhE_NNC.js";import"./ListBoxItemGroupTemplate-DMGEwk8N.js";import"./ComboBoxItemGroup-CGtI3Meb.js";import"./ListItemBaseTemplate-DgHiFsEB.js";import"./Token-7NJT_TyT.js";import"./ScrollEnablement-DHqnHvnh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dh3kIvJd.js";import"./ToggleButton-BULIjCh6.js";import"./SuggestionItem-D54ydvSC.js";import"./index-CEivT01K.js";import"./Option-CB3qwa7U.js";import"./index-8Oxx1U00.js";import"./SegmentedButton-Djmbus1g.js";import"./index-Bo8mGM12.js";import"./Select-DFkj0A5Y.js";import"./InvisibleMessage-Dqs72f3d.js";import"./slim-arrow-down-BHhWiK1Y.js";import"./index-DGkRDeyQ.js";import"./index-D_wk7CKO.js";import"./index-CEyjDTxm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-kor-VHIc.js";import"./group-2-Dv1jTfz7.js";import"./sort-descending-BEY_9WPQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DcIo-1Oj.js";import"./utils-Z_eUiVi_.js";import"./index-CGCQMYH4.js";import"./index-C_WCWx9F.js";import"./index-BAurpHKw.js";import"./navigation-down-arrow-BCDTP6Pm.js";import"./navigation-right-arrow-B1u1SCxi.js";import"./navigation-right-arrow-DvU1W2Rx.js";import"./useCurrentTheme-BytYqbwR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D0rSGhJQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BhPu4d3o.js";import"./paper-plane-BX09Tgvg.js";import"./index-6ykrLfuk.js";import"./less-CsWhpeDW.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
