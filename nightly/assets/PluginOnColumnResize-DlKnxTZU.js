import{j as o}from"./iframe-CDMw3QW7.js";import{useMDXComponents as n}from"./index-B1OHiQPx.js";import{I as r,F as m}from"./CommandsAndQueries-DKYp_Jx5.js";import{M as p,C as s}from"./blocks-CUd96uRM.js";import"./Tag-CRCkHgPM.js";import"./index-BFHtg5w_.js";import"./copy-4Dlt6M0w.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CzQ3gixW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjzhAhn4.js";import"./index-QTO9fIyh.js";import"./index-y4pjeQFW.js";import"./Link-fH9wonJ-.js";import"./index-CFg6tGep.js";import"./index-zPaFBXP5.js";import"./index-NVXyFLUS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzgD7Za_.js";import"./addCustomCSSWithScoping-DWGH2XNZ.js";import"./index-CEKogKIQ.js";import"./information-DcnFOD7I.js";import"./sys-enter-2-Bq9738ZR.js";import"./alert-DgZ_z3Yp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-_qD1WAd3.js";import"./delete-DNEaNq2f.js";import"./settings-BzU3TjJh.js";import"./NoData-DO1SL0Xr.js";import"./IllustratedMessage-BJlEMque.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-D7b8dZpx.js";import"./index-CynnG9Ci.js";import"./index-BYJZ9-3j.js";import"./slim-arrow-down-BVsyizBr.js";import"./Input-De2rvuDr.js";import"./ResponsivePopoverCommon.css-D0k6m-Zp.js";import"./ValueStateMessage.css-Bv8RNI0z.js";import"./Suggestions.css-DMqc0-b9.js";import"./ListBoxItemGroupTemplate-8qDrl8tU.js";import"./ComboBoxItemGroup-D_qJnzJt.js";import"./ListItemBaseTemplate-BYc7j03k.js";import"./Token-CNf8IzFD.js";import"./ScrollEnablement-CTahNy0C.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C-68iD6i.js";import"./ToggleButton-mgZ_PBA1.js";import"./SuggestionItem-BerFBPyF.js";import"./index-B39rHfMI.js";import"./Option-DvZvNvkk.js";import"./index-Du2TWHEP.js";import"./SegmentedButton-Bc6T5ns7.js";import"./index-D7WlgBg9.js";import"./Select-DYlZ5_OK.js";import"./InvisibleMessage-B9339qwC.js";import"./slim-arrow-down-BSiLed2R.js";import"./index-QjSsixDk.js";import"./index-2tw6FyW6.js";import"./index-DU7qbp-g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CbmUmzER.js";import"./group-2-vVU2oJMN.js";import"./sort-descending-BzMUOuiJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-jYJsNqp7.js";import"./utils-ebGiQ-Xy.js";import"./index-D5bKrwpZ.js";import"./index-DTK7HHyN.js";import"./index-BEQ_zuJ6.js";import"./navigation-down-arrow-ZN-BcGN6.js";import"./navigation-right-arrow-DJvSCvps.js";import"./navigation-right-arrow-CnrgcZ8b.js";import"./useCurrentTheme-C7nv2rCg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrIDs3N6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dg3vz_6v.js";import"./paper-plane-SFR-N42C.js";import"./index-wyxekrjG.js";import"./less-CfFvE_i7.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
