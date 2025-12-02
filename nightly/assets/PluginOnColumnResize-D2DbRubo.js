import{j as o}from"./iframe-C4uJ0-S9.js";import{useMDXComponents as n}from"./index-7yLcmjFP.js";import{I as r,F as m}from"./CommandsAndQueries-B5y1yjIv.js";import{M as p,C as s}from"./blocks-CBo7THUN.js";import"./Tag-BnlqX_yt.js";import"./index-qq5TSXaV.js";import"./copy-CcXkheL2.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CAle5qj4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cqxv-6mm.js";import"./index-Cxz2391_.js";import"./index-KgBIbLv3.js";import"./Link-BtGKi5yG.js";import"./index-DOaerJgo.js";import"./index-ccsE6YRa.js";import"./index-DWkRZCu2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS9Hrz5j.js";import"./addCustomCSSWithScoping-CUwa-fZt.js";import"./index-BCADQjVB.js";import"./information-CGc2Gyu5.js";import"./sys-enter-2-8QAf9lpT.js";import"./alert-CoEJOo1j.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vDDRYwk3.js";import"./delete-BHPiQy8C.js";import"./settings-BeJNJe9f.js";import"./NoData-DumUXixA.js";import"./IllustratedMessage-DDYbAdFt.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-C4A8f3WL.js";import"./index-BY7QBrHg.js";import"./index-DPlPssjD.js";import"./slim-arrow-down-Y4c6YvG2.js";import"./Input-YHM25DhV.js";import"./ResponsivePopoverCommon.css-LID13WBa.js";import"./ValueStateMessage.css-DQQ-VE9Z.js";import"./Suggestions.css-eTzTaAph.js";import"./ListBoxItemGroupTemplate-lxd0hXbv.js";import"./ComboBoxItemGroup-BghMlL1f.js";import"./ListItemBaseTemplate-DUdMr_EH.js";import"./Token-OLXA8lD0.js";import"./ScrollEnablement-SGqJH1Lr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdNdTe1m.js";import"./ToggleButton-DYz4NtFX.js";import"./SuggestionItem-BddQBPYx.js";import"./index-D1d04w3W.js";import"./Option-v8zhZtfK.js";import"./index-DhKFm58k.js";import"./SegmentedButton-s1zIuXD0.js";import"./index-COE4TykW.js";import"./Select-CuF6Vj0b.js";import"./InvisibleMessage-LTfrv4dT.js";import"./slim-arrow-down-DYL641WE.js";import"./index-DGw9cILd.js";import"./index-CnNCBOjb.js";import"./index-CjnSo5ff.js";import"./IconDesign-DXd8PPVF.js";import"./filter-_rO-u-6A.js";import"./group-2-Bc7XIkR-.js";import"./sort-descending-CkdP0ki-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DvL1DyYS.js";import"./utils-D_GsNQst.js";import"./index-BE-7xLBy.js";import"./index-CtMXypae.js";import"./index-tzbUIwBJ.js";import"./navigation-down-arrow-DVAbjQ7x.js";import"./navigation-right-arrow-BVMX59iQ.js";import"./navigation-right-arrow-jw1yzYIV.js";import"./useCurrentTheme-Bd8z3rm-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CGCN7ekK.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DASzHde-.js";import"./paper-plane-DvYo8HUm.js";import"./index-D-YebQdo.js";import"./less-BFgfWxB6.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
