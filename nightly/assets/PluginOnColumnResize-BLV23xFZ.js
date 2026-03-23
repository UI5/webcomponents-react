import{j as o}from"./iframe-DcVQn4h7.js";import{useMDXComponents as r}from"./index-DjjpMNLx.js";import{I as n}from"./CommandsAndQueries-BQOFWNIa.js";import{M as m,C as p}from"./blocks-DpuwUxz9.js";import"./Tag-DIkCdjNz.js";import"./index-DQQWkI0N.js";import"./copy-Bc0coMMf.js";import{F as s}from"./Footer-NfYngWNA.js";import"./PageNotFound-CVfCATZz.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DIlNN8Le.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CVy3lCMm.js";import"./index-fZCQALbq.js";import"./index-CEU1rAw4.js";import"./index-CwCoovk9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BldFJeaD.js";import"./addCustomCSSWithScoping-BZ_vF02V.js";import"./index-DdVtCCP3.js";import"./index-C5tsWYzj.js";import"./index-CqxmVbMG.js";import"./information-Cy8WRBMY.js";import"./sys-enter-2-BclYTqTi.js";import"./alert-YdCtzqbp.js";import"./index-DAQytdMa.js";import"./Illustrations-Bw1pJyGV.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1uni83s.js";import"./delete-CpCA_XDM.js";import"./settings-CUbjO-ae.js";import"./NoData-BVjgM2yj.js";import"./NoFilterResults--zi6MjY0.js";import"./index-xMQkaemi.js";import"./IllustratedMessage-CyBmc5MY.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BlMakY4w.js";import"./Input-BW9GEfIA.js";import"./ResponsivePopoverCommon.css-osNOcHdW.js";import"./ValueStateMessage.css-OYxMPf1f.js";import"./Suggestions.css-BtxCLxQv.js";import"./ListBoxItemGroupTemplate-CGQXGHJV.js";import"./ComboBoxItemGroup-CpHww_Ig.js";import"./ListItemBaseTemplate-f8kQG4Jt.js";import"./Token-CHF6HHxJ.js";import"./ScrollEnablement-CZLbZt8M.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BaNuWCKC.js";import"./ToggleButton-BmTxuHC_.js";import"./multiselect-all-BiN6qG0z.js";import"./SuggestionItem-DMa3BA53.js";import"./index-CiwrmhvK.js";import"./Option-C1H6IR-I.js";import"./index-DEYxl-sC.js";import"./SegmentedButton-DnkHPT4g.js";import"./index-BzWYB2Gi.js";import"./Select-BauIhRnb.js";import"./InvisibleMessage-Ru2nSyo5.js";import"./index-BsU0Bybk.js";import"./index-C30tWqmm.js";import"./index-DyXL-gty.js";import"./index-BD8zH4rA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLSgXMGv.js";import"./group-2-DjsnM4Ut.js";import"./sort-descending-C3bCKWTJ.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DtAi62Ks.js";import"./utils-C9vw3VrT.js";import"./index-CuArEFdj.js";import"./index-DKUw4EjC.js";import"./index-elD2Xgk2.js";import"./navigation-down-arrow-CSAd3vAm.js";import"./navigation-right-arrow-DMbE7m0E.js";import"./navigation-right-arrow-D8bzVi_N.js";import"./useCurrentTheme-B81rCOjx.js";import"./index-CFD7jo8u.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CkS_OTKg.js";import"./paper-plane-CjGXrz2J.js";import"./index-S7JGR-kF.js";import"./less-qw1uxsj4.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
