import{j as o}from"./iframe-D-W-mmRj.js";import{useMDXComponents as n}from"./index-D8IyotA-.js";import{I as r,F as m}from"./CommandsAndQueries-G8bd-Dz2.js";import{M as p,C as s}from"./blocks-CCgGLQdQ.js";import"./Tag-CcHwt-jC.js";import"./index-BjBbtVMa.js";import"./copy-Bs2vU0sH.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CnR2Z8F0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lPK_7vuA.js";import"./index-g5ZQYkE0.js";import"./index-BL1fd3ME.js";import"./Link-B8l4snGX.js";import"./index-B8f1MJrs.js";import"./index-CtoHKFWx.js";import"./index-C1eJkWnN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_kQaGsI.js";import"./addCustomCSSWithScoping-IPWT__yW.js";import"./index-DkLrn4qm.js";import"./information-CEG7gdih.js";import"./sys-enter-2-CEv4mC4Y.js";import"./alert-DtXDmWLr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BhdCO6dM.js";import"./delete-CWhMuDL5.js";import"./settings-CyNEgs3g.js";import"./NoData-BLggi9n_.js";import"./IllustratedMessage-BlAMe72Z.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DzdY_mBy.js";import"./index-CNJHK3W8.js";import"./index-Bxxpx37Q.js";import"./slim-arrow-down-x9Gru0Ec.js";import"./Input-BqMyI7ca.js";import"./ResponsivePopoverCommon.css-DVnmqxls.js";import"./ValueStateMessage.css-DadsVUgD.js";import"./Suggestions.css-DSmmsEoA.js";import"./ListBoxItemGroupTemplate-DFUskKCh.js";import"./ComboBoxItemGroup-Df0XnL08.js";import"./ListItemBaseTemplate-BAnGYykD.js";import"./Token-C2_dZ0mi.js";import"./ScrollEnablement-5T6hJhR0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C80k9rxB.js";import"./ToggleButton-52j1Cimw.js";import"./SuggestionItem-CfdrIOvX.js";import"./index-CUrDlzTH.js";import"./Option-au42OKVK.js";import"./index-CumMtctX.js";import"./SegmentedButton-CsAys2s9.js";import"./index-YylBegPs.js";import"./Select-Bj00LLbV.js";import"./InvisibleMessage-XQ1BeoOK.js";import"./slim-arrow-down-DWuhkxhY.js";import"./index-Buv1R8Le.js";import"./index-DIb00-kV.js";import"./index-C7KJciiD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRhGvWSX.js";import"./group-2-x8bbk4t5.js";import"./sort-descending-DeN8U9ms.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVu5YbFT.js";import"./utils-ES71sGqA.js";import"./index-JcPgMdxN.js";import"./index-C7o60qk_.js";import"./index-BBVgoxy_.js";import"./navigation-down-arrow-D6uzIO8i.js";import"./navigation-right-arrow-JPz4-m_e.js";import"./navigation-right-arrow-B0n9GdxK.js";import"./useCurrentTheme-C612kq_O.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DtsxIlNB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B5QWPvoz.js";import"./paper-plane-BdmbwH0l.js";import"./index-BxEZlMiK.js";import"./less-B61wiooM.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
