import{j as o}from"./iframe-BS9g_hR0.js";import{useMDXComponents as n}from"./index-D6Sv7Jl_.js";import{I as r,F as m}from"./CommandsAndQueries-BG9-iBHT.js";import{M as p,C as s}from"./blocks-BlXgdtWM.js";import"./Tag-p_IIbz5w.js";import"./index-C8AvT1H6.js";import"./copy-DO4k2zsN.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-UYSjv1UF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BywMJtOG.js";import"./index-wzaot1RG.js";import"./index-CAEXs-Gc.js";import"./Link-CiETGZ39.js";import"./index-BKoMru_w.js";import"./index-DU08Tlv3.js";import"./index-blu4KXFK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DwUfsbfY.js";import"./addCustomCSSWithScoping-D_7dkpV9.js";import"./index-D7iHEYTy.js";import"./information-DIMKZmlM.js";import"./sys-enter-2-cjAPqaPu.js";import"./alert-CWeu-Gd2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bi6dAMxf.js";import"./delete-IIbsJHVn.js";import"./settings-DSTG7J_6.js";import"./NoData-BljPz3Ez.js";import"./IllustratedMessage-CiQm-njB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CW7qAaUp.js";import"./index-DQx4NIhG.js";import"./index-By4S6eBF.js";import"./slim-arrow-down-BrDUUgjS.js";import"./Input-B_EkSV5h.js";import"./ResponsivePopoverCommon.css-Nm_aoG18.js";import"./ValueStateMessage.css-DatFi3mM.js";import"./Suggestions.css-T59McTpP.js";import"./ListBoxItemGroupTemplate-DnRr1Fiq.js";import"./ComboBoxItemGroup-BIMHyF1K.js";import"./ListItemBaseTemplate-DnRIKRO-.js";import"./Token-BOw69ZP_.js";import"./ScrollEnablement-CI0Tb0Ll.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ba27rldr.js";import"./ToggleButton-EL98Z2LO.js";import"./SuggestionItem-C07z3z-f.js";import"./index-1owRGSxf.js";import"./Option-D-xwSxUZ.js";import"./index-CYokNx1T.js";import"./SegmentedButton-By8aV2cE.js";import"./index-nBcB45SO.js";import"./Select-CVg8WfRH.js";import"./InvisibleMessage-BhK3omrR.js";import"./slim-arrow-down-B_FxGKxS.js";import"./index-BPWtfQy0.js";import"./index-Bz6XqX9r.js";import"./index-BCrnZa0s.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdIbePGa.js";import"./group-2-KLHU0fg-.js";import"./sort-descending-DqFSPUni.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DiqZr5G5.js";import"./utils-CU6KAQZP.js";import"./index-DkMHvxEC.js";import"./index-BdY1vOzS.js";import"./index-DEBok3dO.js";import"./navigation-down-arrow-z8aFqrM1.js";import"./navigation-right-arrow-BedSm2Sl.js";import"./navigation-right-arrow-Btw4WHBr.js";import"./useCurrentTheme-jHl_ErAW.js";import"./IndicationColor-DVw-fSM_.js";import"./index-eY3AJp1y.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DS89XhU_.js";import"./paper-plane-D-ciUbX6.js";import"./index-C6qv90tY.js";import"./less-BsRZbj7x.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
