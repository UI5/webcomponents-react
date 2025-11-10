import{j as o}from"./iframe-DQwRYUbX.js";import{useMDXComponents as n}from"./index-vjXmNDkF.js";import{I as r,F as m}from"./CommandsAndQueries-R5zgQe7_.js";import{M as p,C as s}from"./blocks-1vj7sSP-.js";import"./Tag-Bdxh15UZ.js";import"./index-BpYg0Kr8.js";import"./copy-f1OrbY2r.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DxmrzwBB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKyjFioH.js";import"./index-BFkPs8ZC.js";import"./index-CKWavmbi.js";import"./Link-CbfnLrLH.js";import"./index-PC8Kunji.js";import"./index-DPLN1GXU.js";import"./index-CcZnr9i8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bm5JhsBg.js";import"./addCustomCSSWithScoping-B4GQYg_M.js";import"./index-Brhb0SYT.js";import"./information-CU2Cyzgy.js";import"./sys-enter-2-BkaREG8L.js";import"./alert-BlLCWEro.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-uKpDdS3L.js";import"./delete-rnQJPOPy.js";import"./settings-BplO8nVC.js";import"./NoData-BudcZjcL.js";import"./IllustratedMessage-BDrkWOIJ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DMOQHPac.js";import"./index-BkwLtZth.js";import"./index-8rYUN_F9.js";import"./slim-arrow-down-C3zmYEnY.js";import"./Input-SpzJURTk.js";import"./ResponsivePopoverCommon.css-CkBrsDgT.js";import"./ValueStateMessage.css-PgRMx7qS.js";import"./Suggestions.css-CcojFhMW.js";import"./ListBoxItemGroupTemplate-BpQl_a-R.js";import"./ComboBoxItemGroup-CteEcdR1.js";import"./ListItemBaseTemplate-DPU_YRkw.js";import"./Token-Re46_rx8.js";import"./ScrollEnablement-DpgIweVK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cgm9Qe--.js";import"./ToggleButton-BaSVpxBV.js";import"./SuggestionItem-BX6mvv5E.js";import"./index-B1FFgBKL.js";import"./Option-DvL6van7.js";import"./index-BFXuzaYf.js";import"./SegmentedButton-BhmyYIax.js";import"./index-B0KukDf_.js";import"./Select-DsMXMd52.js";import"./InvisibleMessage-BxtAo5W7.js";import"./slim-arrow-down-DBZCUMdq.js";import"./index-CDIvwhbT.js";import"./index-DerlPBZF.js";import"./index-Ct1qWrRW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-wsvm96Md.js";import"./group-2-smWhv9vQ.js";import"./sort-descending-C26Eugr8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cgy9ImwA.js";import"./utils-CmLJbiVg.js";import"./index-C84cRBie.js";import"./index-C8IvOXFf.js";import"./index-BnWSur9b.js";import"./navigation-down-arrow-B5IuEH7K.js";import"./navigation-right-arrow-ClmouZCW.js";import"./navigation-right-arrow-DbNWGTXI.js";import"./useCurrentTheme-B0aKCv4_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CdDfKFMR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-19H7psJ7.js";import"./paper-plane-z49PxhFi.js";import"./index-B7Ag24YK.js";import"./less-BbgNbxOE.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
