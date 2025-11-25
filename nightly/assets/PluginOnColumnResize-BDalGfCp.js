import{j as o}from"./iframe-HnZ_h-uU.js";import{useMDXComponents as n}from"./index-BURirfl-.js";import{I as r,F as m}from"./CommandsAndQueries-TIuZdWtI.js";import{M as p,C as s}from"./blocks-84IuUUPT.js";import"./Tag-Dnn5BILw.js";import"./index-C_zCHPn3.js";import"./copy-CvLuzzlZ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CyPVuxE6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-A-RKt-jh.js";import"./index-iyAoRrYN.js";import"./index-ChCH3Q4v.js";import"./Link-fOI_Un9H.js";import"./index-Cx7Ty6ev.js";import"./index-DT74FBWM.js";import"./index-D2dUbzgM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5FHIatV.js";import"./addCustomCSSWithScoping-R6q4RVyA.js";import"./index-Dnf0ia5k.js";import"./information-DhzyP3Ow.js";import"./sys-enter-2-CmThXCww.js";import"./alert-DNZ33ksz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CBxFCMLb.js";import"./delete-DTulYaAI.js";import"./settings-tx3CzgEQ.js";import"./NoData-Bshjt374.js";import"./IllustratedMessage-CCQBtLd9.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DKIL7cga.js";import"./index-kDjDNPRR.js";import"./index-D7LIj5Um.js";import"./slim-arrow-down-BgIex6c4.js";import"./Input-Bn75OrvV.js";import"./ResponsivePopoverCommon.css-Bp0oDzHC.js";import"./ValueStateMessage.css-mxe_cMa3.js";import"./Suggestions.css-HrgLJez3.js";import"./ListBoxItemGroupTemplate-Blo7114h.js";import"./ComboBoxItemGroup-C4A4RTAb.js";import"./ListItemBaseTemplate-Crj91yI9.js";import"./Token-BzgB6gA9.js";import"./ScrollEnablement-DbCEb8PT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CelTCW5a.js";import"./ToggleButton-lFj29rfD.js";import"./SuggestionItem-D2y_todW.js";import"./index-DCwkTiB-.js";import"./Option-CXj69qWE.js";import"./index-l8ddpiaC.js";import"./SegmentedButton-rOSwY7SZ.js";import"./index-Dh8wCVOo.js";import"./Select-DifQlmAi.js";import"./InvisibleMessage-DKXtSvOz.js";import"./slim-arrow-down-CLA3TSxo.js";import"./index-DMla7rjx.js";import"./index-_lKZYWZe.js";import"./index-ob9pHg1a.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B94VfVt_.js";import"./group-2-88JLzJKU.js";import"./sort-descending-BXFoHtVz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-KroJlr.js";import"./utils-BzC6a3dT.js";import"./index-DgcTnc5w.js";import"./index-CHrJjqGe.js";import"./index-Bju32QxQ.js";import"./navigation-down-arrow-BuuDEqwu.js";import"./navigation-right-arrow-CghbZ4FB.js";import"./navigation-right-arrow-C3FyKz3D.js";import"./useCurrentTheme-BtlDZaCV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DYbG7W8m.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Sw05o_Vs.js";import"./paper-plane-Iq18tC-e.js";import"./index-5gnscsEE.js";import"./less-BQGA1HOG.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
