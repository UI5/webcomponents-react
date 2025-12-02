import{j as o}from"./iframe-B5_Arj0w.js";import{useMDXComponents as n}from"./index-C5nExjBH.js";import{I as r,F as m}from"./CommandsAndQueries-DVJBDd6t.js";import{M as p,C as s}from"./blocks-COnGRWLL.js";import"./Tag-BJnasszI.js";import"./index-c-guL6iQ.js";import"./copy-C_i6TFMR.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B6zTvUBL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHuFfOWM.js";import"./index-BNDO-MHt.js";import"./index-B-64gK_m.js";import"./Link-DYcelBM6.js";import"./index-D9R5EBek.js";import"./index-C4ir_qvG.js";import"./index-NifsWW0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hIZvC53N.js";import"./addCustomCSSWithScoping-C5sFpCeo.js";import"./index-lFnbjF6s.js";import"./information-DnWQdbsO.js";import"./sys-enter-2-yT9c6yra.js";import"./alert-B0if0F-6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BfZJKBBk.js";import"./delete-B0k5SoPa.js";import"./settings-CEZkvwiT.js";import"./NoData-TnmYPaTe.js";import"./IllustratedMessage-Pyyhq7i4.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-Crtjw6Ie.js";import"./index-DL_kEw3q.js";import"./index-BJO60ncP.js";import"./slim-arrow-down-B_ZZxhZi.js";import"./Input-dtfIQ9En.js";import"./ResponsivePopoverCommon.css-BaIUyRPn.js";import"./ValueStateMessage.css-FKtIDJ6e.js";import"./Suggestions.css-CvyngWyE.js";import"./ListBoxItemGroupTemplate-DX1d3MVt.js";import"./ComboBoxItemGroup-DUNfQCSb.js";import"./ListItemBaseTemplate-DnikLjhF.js";import"./Token-CLtAw8SN.js";import"./ScrollEnablement-B0UmA8Q7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DptIuS1G.js";import"./ToggleButton-Dk6-JMzR.js";import"./SuggestionItem-BoLnIMah.js";import"./index-JVP23Nt2.js";import"./Option-jQ3brhrk.js";import"./index-bDRO2Yo2.js";import"./SegmentedButton-vIkq0NWc.js";import"./index-B3V8m3Ru.js";import"./Select-BR3ay0RO.js";import"./InvisibleMessage-sZXGuSEY.js";import"./slim-arrow-down-DW1b3FK1.js";import"./index-CisKw1tN.js";import"./index-BxnGFP9n.js";import"./index-Swjw5_n1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-fQ0HnAda.js";import"./group-2-CbrtzKL6.js";import"./sort-descending-DHn8DLBR.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DQwoKVw1.js";import"./utils-DUxK_zar.js";import"./index-QxbrwzJE.js";import"./index-C2-WeBJA.js";import"./index-w_d8t2Pc.js";import"./navigation-down-arrow-DVKMSsJc.js";import"./navigation-right-arrow-DtDmCQPg.js";import"./navigation-right-arrow-gdBHzM4T.js";import"./useCurrentTheme-xB5_C0Ve.js";import"./IndicationColor-DVw-fSM_.js";import"./index-oO4NGnOE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DJ1G2XQE.js";import"./paper-plane-B5hJlgX3.js";import"./index-E1h56ucZ.js";import"./less-DvXH47xF.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
