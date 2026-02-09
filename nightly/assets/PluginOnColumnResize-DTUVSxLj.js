import{j as o}from"./iframe-gZNO6M5z.js";import{useMDXComponents as n}from"./index-C9S1zRdY.js";import{I as r,F as m}from"./CommandsAndQueries-B3SYrvAS.js";import{M as p,C as s}from"./blocks-bGe4ZsEp.js";import"./Tag-B4G2Y0SL.js";import"./index-27nnQHPg.js";import"./copy-BVrBwFXj.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D4OPLrru.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BF59Vd9o.js";import"./index-B0r-mBm2.js";import"./index-CaC9RK_F.js";import"./Link-Vq1QqGjH.js";import"./index-DGMrxJej.js";import"./index-Cp6HJT54.js";import"./index-BefwTBAQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CU06ey2h.js";import"./addCustomCSSWithScoping-BZ00kVb8.js";import"./index-CDlXZiAa.js";import"./information-DLCOf7nz.js";import"./sys-enter-2-BCk8zcst.js";import"./alert-Dzej_rV2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-QLkuJgqV.js";import"./delete-DkRHwfhX.js";import"./settings-BR8WCJ7w.js";import"./NoData--p7oPRRw.js";import"./IllustratedMessage-SXsx_nbl.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-qOumx_JC.js";import"./index-DPBbU2lN.js";import"./index-kBG2DFKE.js";import"./slim-arrow-down-Blcrq2dE.js";import"./Input-H67wDs5U.js";import"./ResponsivePopoverCommon.css-CdbcNfyO.js";import"./ValueStateMessage.css-Df8ATcbI.js";import"./Suggestions.css-C1kePIyx.js";import"./ListBoxItemGroupTemplate-C2UHPyPQ.js";import"./ComboBoxItemGroup-C3gDpf9b.js";import"./ListItemBaseTemplate-DvW_-iKE.js";import"./Token-D5EKe7A3.js";import"./ScrollEnablement-BpD4fQsi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cy6aCxAY.js";import"./ToggleButton-B5fjsmfD.js";import"./SuggestionItem-B_eDO34G.js";import"./index-B2XaTQ_o.js";import"./Option-f-tZff5I.js";import"./index-Bz429r4C.js";import"./SegmentedButton-DB_QzLE0.js";import"./index-Bl3jRPoy.js";import"./Select-DJXcsVgZ.js";import"./InvisibleMessage-Bl5nX4CD.js";import"./slim-arrow-down-CFi1WRSY.js";import"./index-62ip1J2j.js";import"./index-Drr4PQ9c.js";import"./index-CeCfeKbh.js";import"./index-EBcPMq50.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DyU52bwC.js";import"./group-2-DSB90i0B.js";import"./sort-descending-Cg6qE11j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BbtWKEmY.js";import"./utils-C3-oD3GX.js";import"./index-WCsQ6Ebz.js";import"./index-Bf1uvNUV.js";import"./index-D9BCXCjp.js";import"./navigation-down-arrow-CAmt6qbj.js";import"./navigation-right-arrow-DN-jFYY-.js";import"./navigation-right-arrow-CGQTXt6f.js";import"./useCurrentTheme-D-HaTMhl.js";import"./index-DwEdael2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B5FXU3B0.js";import"./paper-plane-DzKltC-y.js";import"./index-sEulsnhk.js";import"./less-Dl2m-ucU.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
