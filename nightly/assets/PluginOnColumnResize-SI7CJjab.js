import{j as o}from"./iframe-datodc_T.js";import{useMDXComponents as n}from"./index-c_OJYfdv.js";import{I as r,F as m}from"./CommandsAndQueries-9K4be_0B.js";import{M as p,C as s}from"./blocks-C83taKT5.js";import"./Tag-aYNaIA2f.js";import"./index-BxYLcFT1.js";import"./copy-fv_X0Lju.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BaM2_rwk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaqpJvlq.js";import"./index-D2t_qzWG.js";import"./index-DHA5QYCq.js";import"./Link-CguLCm0R.js";import"./index-Dsm5uoLy.js";import"./index-Be6r5cNn.js";import"./index-D6USDY88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpNALNgF.js";import"./addCustomCSSWithScoping-DKvV4UVz.js";import"./index-CjE0y9ul.js";import"./information-BVFOZm1x.js";import"./sys-enter-2-D-jHJs9Q.js";import"./alert-Bayru5wq.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CAzHk7rR.js";import"./delete-DXGxUBFJ.js";import"./settings-CnIM11gG.js";import"./NoData-Bg_nN4Ms.js";import"./IllustratedMessage-FAiLLqQm.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-C_Ze1Ot5.js";import"./index-DL49zsqR.js";import"./index-Dm0QMFQr.js";import"./slim-arrow-down-BpOTE9Sk.js";import"./Input-CDJ2DRSv.js";import"./ResponsivePopoverCommon.css-DAKPNunD.js";import"./ValueStateMessage.css-CEIz9T_f.js";import"./Suggestions.css-ChFuC62o.js";import"./ListBoxItemGroupTemplate-xCqQRAqq.js";import"./ComboBoxItemGroup-BQPgaauk.js";import"./ListItemBaseTemplate-BzV0IEmk.js";import"./Token-CJyx5jqh.js";import"./ScrollEnablement-D4RYTcKh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6D8woMn.js";import"./ToggleButton-BVZwG_x-.js";import"./SuggestionItem-CqDeh5_U.js";import"./index-CbCR8boR.js";import"./Option-CVMzB-n9.js";import"./index-D9bgmN4m.js";import"./SegmentedButton-CtnCASEY.js";import"./index-DZXo1Lf-.js";import"./Select-K4JlHpwq.js";import"./InvisibleMessage-DefiGhym.js";import"./slim-arrow-down-CHOtDAsV.js";import"./index-DREcmMyl.js";import"./index-CeAFf5ct.js";import"./index-BcGlK5zk.js";import"./index-C_9-hdCb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BPHKdgmP.js";import"./group-2-BVTcmh9u.js";import"./sort-descending-COPXAaLI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-FSQedhzd.js";import"./utils-CpZ624O0.js";import"./index-Bxul-iwv.js";import"./index-aiYgqcNK.js";import"./index-BN9iyOuA.js";import"./navigation-down-arrow-BZsH8zxo.js";import"./navigation-right-arrow-S8XLmecj.js";import"./navigation-right-arrow-9AFNUP8t.js";import"./useCurrentTheme-D5sOw72D.js";import"./index-nqz7Kjs0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Csf7JH7H.js";import"./paper-plane-Dsk0svE7.js";import"./index-DLlxXcZX.js";import"./less-DpRUb2Cv.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
