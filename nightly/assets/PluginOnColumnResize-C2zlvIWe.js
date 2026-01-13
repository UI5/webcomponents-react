import{j as o}from"./iframe-DjyPEesV.js";import{useMDXComponents as n}from"./index-Pyz_59sj.js";import{I as r,F as m}from"./CommandsAndQueries-CflBmGXr.js";import{M as p,C as s}from"./blocks-BJpyRAuR.js";import"./Tag-BDoCQY53.js";import"./index-R19sOJmE.js";import"./copy-E37vjZto.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-5g3jIKu6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ctou3RkN.js";import"./index-D4GABIF8.js";import"./index-JsLIkweC.js";import"./Link-nHS21YG4.js";import"./index-DIAyR9_V.js";import"./index-BBJM4hPn.js";import"./index-u05KfZkG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BW1MFNTm.js";import"./addCustomCSSWithScoping-fFr9nqx3.js";import"./index-CGGAhfVP.js";import"./information-DUvIlTxn.js";import"./sys-enter-2-BNMMIV_0.js";import"./alert-BdGD6eLJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-PtrV3Mx2.js";import"./delete-DZYRig-7.js";import"./settings-DC1EpgcZ.js";import"./NoData-DdiSsGzY.js";import"./IllustratedMessage-CKlnOgb7.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-U4i8XfCe.js";import"./index-CNsBuXgW.js";import"./index-DY2Rai9n.js";import"./slim-arrow-down-CaFw53zN.js";import"./Input-BZdy6LBO.js";import"./ResponsivePopoverCommon.css-DXeOzHMx.js";import"./ValueStateMessage.css-BmKDb-GX.js";import"./Suggestions.css-C5GlUmJa.js";import"./ListBoxItemGroupTemplate-B_X2fUlx.js";import"./ComboBoxItemGroup-BfNx4b9Y.js";import"./ListItemBaseTemplate-CGBpHG4N.js";import"./Token-CERKwtWD.js";import"./ScrollEnablement-80w6Waas.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqBB8H1C.js";import"./ToggleButton-sq5iQT6D.js";import"./SuggestionItem-BjJ5fzBJ.js";import"./index-DKn-wdwl.js";import"./Option-BQ6ou2d_.js";import"./index-D4m9Bgxm.js";import"./SegmentedButton-D2TYrx6h.js";import"./index-DPf5ZEwJ.js";import"./Select-CwPYCNeP.js";import"./InvisibleMessage-BV-YL2wk.js";import"./slim-arrow-down-CxX1-7RK.js";import"./index--b5YbzYZ.js";import"./index-BUOYq7SN.js";import"./index-CrmY2ZO8.js";import"./index-Bgg2l2DV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClODWfE8.js";import"./group-2-DPcrYzkY.js";import"./sort-descending-CTRvyWvg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-VEN8hAU2.js";import"./utils-D-4bFYd0.js";import"./index-DuTvknKW.js";import"./index-BCddFEwR.js";import"./index-Kss5k088.js";import"./navigation-down-arrow--9pMM64P.js";import"./navigation-right-arrow-B4wTEztn.js";import"./navigation-right-arrow-DNYuNDO1.js";import"./useCurrentTheme-BSBgMXT1.js";import"./index-lcNTjYV-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-_YfBcCD_.js";import"./paper-plane-CUdav5bq.js";import"./index-7fWe1uut.js";import"./less-B9Odq6DG.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
