import{j as o}from"./iframe-CISvTVNI.js";import{useMDXComponents as n}from"./index-bSkbOjqc.js";import{I as r,F as m}from"./CommandsAndQueries-CBtnfpxG.js";import{M as p,C as s}from"./blocks-B14xai8l.js";import"./Tag-C1M5Bqsq.js";import"./index-DomH80TU.js";import"./copy-DUVHDUg7.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CSObzMGr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3k5G3FE.js";import"./index-CTfs7RBW.js";import"./index-DqP6b12u.js";import"./Link-B3c0gcH0.js";import"./index-BNjAQDaE.js";import"./index-BZLJStFD.js";import"./index-4s-xol72.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D02o7Sag.js";import"./addCustomCSSWithScoping-B4qcl2al.js";import"./index-CE7xV3os.js";import"./information-B2fXauVA.js";import"./sys-enter-2-BkEj79Au.js";import"./alert-Cia20ulM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DV4j1UI6.js";import"./delete-7JFBm1Tm.js";import"./settings-kgiPQv_V.js";import"./NoData-DUEfNRQo.js";import"./IllustratedMessage-BlLIGWpl.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-ByS1wDeQ.js";import"./index-Bq6YA1OZ.js";import"./index-BWvn97oh.js";import"./slim-arrow-down-D3jugRKw.js";import"./Input-BXkax4Ai.js";import"./ResponsivePopoverCommon.css-DLVAVBHO.js";import"./ValueStateMessage.css-MWCPl9eb.js";import"./Suggestions.css-mYcKBr3o.js";import"./ListBoxItemGroupTemplate-Cq7WxQEJ.js";import"./ComboBoxItemGroup-Dt8qMQbh.js";import"./ListItemBaseTemplate-C6SuP-30.js";import"./Token-DTyOAcLh.js";import"./ScrollEnablement-DgFk1_fj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dtqu1SWh.js";import"./ToggleButton-DkGlogzG.js";import"./SuggestionItem-3yI78rM6.js";import"./index-C-QW4iFF.js";import"./Option--Q44HJGH.js";import"./index-BGo3CCkY.js";import"./SegmentedButton-G6ESX7bA.js";import"./index-DYcBIjee.js";import"./Select-BUoOKAbj.js";import"./InvisibleMessage-D74Q5wYE.js";import"./slim-arrow-down-BCtidmgu.js";import"./index-C__maydq.js";import"./index-DdNorZl8.js";import"./index-TfXtv-kl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-IUv5q-Nd.js";import"./group-2-pZ5u8b6c.js";import"./sort-descending-DeiY6LR9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DwAWNqSH.js";import"./utils-BVswc758.js";import"./index-DmEszc9N.js";import"./index-CTSNUJ9h.js";import"./index-CP1wr9dJ.js";import"./navigation-down-arrow-DmaxrwH-.js";import"./navigation-right-arrow-CpRUuEp7.js";import"./navigation-right-arrow-BJIZXTFA.js";import"./useCurrentTheme-B4X-989J.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CMsN1t2K.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CTE_y8fW.js";import"./paper-plane-BzsW306U.js";import"./index-DsfN-T3H.js";import"./less-CH3mR01q.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
