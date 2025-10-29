import{j as o}from"./iframe-BY1BFtoq.js";import{useMDXComponents as n}from"./index-BJX8o_PY.js";import{I as r,F as m}from"./CommandsAndQueries-LexJCY9y.js";import{M as p,C as s}from"./blocks-Bfc9ghDe.js";import"./Tag-DpT3Xyfk.js";import"./index-DoP9OXws.js";import"./copy-BobpDbK0.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BJgxOLZH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cb7WjzHE.js";import"./index-odRykF4_.js";import"./index-CRXctDPP.js";import"./Link-CaG5MpgS.js";import"./index-B41LOkRR.js";import"./index-DSc6dsYM.js";import"./index-Dk5-ak7N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKdRFMC3.js";import"./addCustomCSSWithScoping-BhZcrUID.js";import"./index-7DiuorJD.js";import"./information-B4R2spf7.js";import"./sys-enter-2-HrsNxE-9.js";import"./alert-Dq9SF84g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCCC4ur2.js";import"./delete-D8zrN_sA.js";import"./settings-Bdr665rb.js";import"./NoData-BRqgG7K8.js";import"./IllustratedMessage-DPqumtU-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-Cyq1-ihj.js";import"./index-_HCPSvgc.js";import"./index-CRmM9ezH.js";import"./slim-arrow-down-DtYB0pd9.js";import"./Input-bf8JCO1U.js";import"./ResponsivePopoverCommon.css-BhNXWsd2.js";import"./ValueStateMessage.css-Dg1p_wIG.js";import"./Suggestions.css-S4z4vAmo.js";import"./ListBoxItemGroupTemplate-BHHW-U5N.js";import"./ComboBoxItemGroup-CWH9BsDg.js";import"./ListItemBaseTemplate-CTqAs3uy.js";import"./Token-q-g5A3-L.js";import"./ScrollEnablement-B_wAj3Qd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlebLaAt.js";import"./ToggleButton-CmeP7kkP.js";import"./SuggestionItem-C1WN_sCo.js";import"./index-DLBeBpmo.js";import"./Option-BbXwN-l4.js";import"./index-CfVsgWHp.js";import"./SegmentedButton-C2wGr84m.js";import"./index-Dqcyxmrt.js";import"./Select-CQ6YhMiH.js";import"./InvisibleMessage-Cm96dHRB.js";import"./slim-arrow-down-C6xEaE6E.js";import"./index-OWO7rarX.js";import"./index-Bv46zhG_.js";import"./index-BS9ow689.js";import"./IconDesign-DXd8PPVF.js";import"./filter-GHJB05Hr.js";import"./group-2-BSwplwhU.js";import"./sort-descending-DzpsEe-A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dj0e6j8A.js";import"./utils-BVTfHtc_.js";import"./index-DQ68OsPL.js";import"./index-BrYWbXY_.js";import"./index-Cji0Ug7a.js";import"./navigation-down-arrow-DoOrewxd.js";import"./navigation-right-arrow-D-L2cheh.js";import"./navigation-right-arrow-CaZt-wfz.js";import"./useCurrentTheme-3PuwnM7C.js";import"./IndicationColor-DVw-fSM_.js";import"./index-oc63bMUJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsxCqakm.js";import"./paper-plane-BTYyQoCV.js";import"./index-DwP49iU-.js";import"./less-mTodNhHV.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
