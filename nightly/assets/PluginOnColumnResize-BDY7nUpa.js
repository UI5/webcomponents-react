import{j as o}from"./iframe-jlZ7haKH.js";import{useMDXComponents as r}from"./index-BDRke1Rk.js";import{I as n}from"./CommandsAndQueries-C62gP0Wv.js";import{M as m,C as p}from"./blocks-GgaXKyV0.js";import"./Tag-BnvuCeE_.js";import"./index-DB16QQd2.js";import"./copy-BXrubwPI.js";import{F as s}from"./Footer-Cyt0gd6r.js";import"./PageNotFound-D9hL323p.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DeV4w8oQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CmI2uh2s.js";import"./index-UUYL4bRA.js";import"./index-BfL44CNr.js";import"./index-DnDTeT16.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_1ld5sf.js";import"./addCustomCSSWithScoping-Cg_sPlM6.js";import"./index-BtQ34sqz.js";import"./index-BcLhYSRh.js";import"./index-EXbubmTe.js";import"./information-D3vqfhW8.js";import"./sys-enter-2-D9bp2L1z.js";import"./alert-7poHLLeI.js";import"./index-BJRmM88L.js";import"./Illustrations-DJD2oa8r.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CF1TeXpN.js";import"./delete-CXC_x1Wt.js";import"./settings-Cb2pk8-g.js";import"./NoData-DHSqpjwQ.js";import"./NoFilterResults-C1oKXwEb.js";import"./index-_9twBSC1.js";import"./IllustratedMessage-CAZPNMC9.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-dukZDfuG.js";import"./slim-arrow-down-CBNyDt1h.js";import"./Input-DEOLuuQ3.js";import"./ResponsivePopoverCommon.css-C-1sAsFZ.js";import"./ValueStateMessage.css-vjmAhNEW.js";import"./Suggestions.css-vYaR_fB3.js";import"./ListBoxItemGroupTemplate-u6isFPzQ.js";import"./ComboBoxItemGroup-CGtKHfXx.js";import"./ListItemBaseTemplate-BrqWXWhE.js";import"./Token-D3dxQxC_.js";import"./ScrollEnablement-BXzeOUzo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-9UYn_auW.js";import"./ToggleButton-Bx4hMrn4.js";import"./SuggestionItem-CbZUBmQR.js";import"./index-C2sPI_0t.js";import"./Option-gWpmqGV0.js";import"./index-CBvlNyEh.js";import"./SegmentedButton-C0MY1V7R.js";import"./index-DoKQkSY9.js";import"./Select-T7Cbny-Q.js";import"./InvisibleMessage-DF9bJNX1.js";import"./slim-arrow-down-OBUhn7dW.js";import"./index-C5kwsDAy.js";import"./index-BJ9tFuf9.js";import"./index-DGcTw-tM.js";import"./index-BoJsfaPJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C6RdI72b.js";import"./group-2-B0xuaGVP.js";import"./sort-descending-B15HlQOL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B4gr_cEr.js";import"./utils-Dg8OiBgJ.js";import"./index-B9iEuw5a.js";import"./index-CfgM1I13.js";import"./index-CsIoukbr.js";import"./navigation-down-arrow-CnCKx9b1.js";import"./navigation-right-arrow-C6AIXjk9.js";import"./navigation-right-arrow-BR4Lo9-V.js";import"./useCurrentTheme-Di1dsbRk.js";import"./index-DuIRYjXG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CBECOKtB.js";import"./paper-plane-BvaLAYzQ.js";import"./index-vs6vsdhj.js";import"./less-Bo8veSqq.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
