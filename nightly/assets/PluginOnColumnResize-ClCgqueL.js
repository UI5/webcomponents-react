import{j as o}from"./iframe-jDeV-G8S.js";import{useMDXComponents as n}from"./index-Da3DrjVc.js";import{I as r,F as m}from"./CommandsAndQueries-S46eotFY.js";import{M as p,C as s}from"./blocks-BVLmp_0m.js";import"./Tag-CoiXaVSg.js";import"./index-DNzR_fzc.js";import"./copy-DEHDDsgd.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B7xLL4Vz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYm7h2BG.js";import"./index-DJMOMMru.js";import"./index-BZOVbKF_.js";import"./Link-C8Q8wVMF.js";import"./index-DhmB-gDR.js";import"./index-GOQBvCdy.js";import"./index--p5n_M0a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeVQuTnR.js";import"./addCustomCSSWithScoping-DNXKFIA9.js";import"./index-C8jlh6dJ.js";import"./information-CBKKlcN3.js";import"./sys-enter-2-D5f8NC37.js";import"./alert-Dk2Mtfik.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BaSB_xVI.js";import"./delete-C6VclcYK.js";import"./settings-C7QaHLBi.js";import"./NoData-B5IMrlNi.js";import"./IllustratedMessage-DYUp67Ci.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BraCc1Gf.js";import"./index-D8qN7Hry.js";import"./index-CnvfagGK.js";import"./slim-arrow-down-Vg8N0Q0I.js";import"./Input-oPDKy1ol.js";import"./ResponsivePopoverCommon.css-DpB6CavY.js";import"./ValueStateMessage.css-uRbauoI5.js";import"./Suggestions.css-DiV-Lfrn.js";import"./ListBoxItemGroupTemplate-C5UVYOIE.js";import"./ComboBoxItemGroup-DdLskjQz.js";import"./ListItemBaseTemplate-DG9IXdA-.js";import"./Token--hjAUxWq.js";import"./ScrollEnablement-BysKsuQY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BiM6YtfZ.js";import"./ToggleButton-cMq8je7X.js";import"./SuggestionItem-e6KTrnLc.js";import"./index-CECiZ_Xv.js";import"./Option-CReekOMZ.js";import"./index-DgdfTx4u.js";import"./SegmentedButton-BUR6TsSQ.js";import"./index-BchHiesQ.js";import"./Select-CMirSOvH.js";import"./InvisibleMessage-CSYFI2hH.js";import"./slim-arrow-down-BnGG1iQc.js";import"./index-3NCdG4IQ.js";import"./index-CBPksq_0.js";import"./index-dvlsjgN4.js";import"./index-B7d4NHtR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CabphWI6.js";import"./group-2-YQpUAD-P.js";import"./sort-descending-DyAgXLO6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DSO1X3Eq.js";import"./utils-DijlQhLT.js";import"./index-CTR4qlZZ.js";import"./index-BGQ0DLLD.js";import"./index-CU2qxjFI.js";import"./navigation-down-arrow-CQCklFQ2.js";import"./navigation-right-arrow-BoiqaSPb.js";import"./navigation-right-arrow-Bc8erDMC.js";import"./useCurrentTheme-df9ByhFB.js";import"./index-CGu9uvTR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsxwMa2U.js";import"./paper-plane-C0TXry-l.js";import"./index-BhxN8tHb.js";import"./less-CBiR1zC0.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
