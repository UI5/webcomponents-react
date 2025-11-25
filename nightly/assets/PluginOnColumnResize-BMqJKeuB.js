import{j as o}from"./iframe-3Rg5Wd99.js";import{useMDXComponents as n}from"./index-BTtluBKc.js";import{I as r,F as m}from"./CommandsAndQueries-4irgK4g8.js";import{M as p,C as s}from"./blocks-DwXr0juD.js";import"./Tag-D-xjyjYI.js";import"./index-BjGGvrQp.js";import"./copy-BR2g9NKm.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BtKyMCwH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BoknKV7T.js";import"./index-BWLi-wcN.js";import"./index-LZ61FQm1.js";import"./Link-BMrxlNgv.js";import"./index-ClS56Mg1.js";import"./index-QO9zmO89.js";import"./index-C9Yy8pBH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-apWy6mIw.js";import"./addCustomCSSWithScoping-mB2SNd7y.js";import"./index-BPXqXslV.js";import"./information-COV3mgHm.js";import"./sys-enter-2-C-L-yMS4.js";import"./alert-ClJ7IdSm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-AybIUtZQ.js";import"./delete-C18fTeGA.js";import"./settings-DOb4jD36.js";import"./NoData-Dzqqxzcq.js";import"./IllustratedMessage-XT-qOyRh.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-RUBH0lOK.js";import"./index-cf0CgG6G.js";import"./index-CnMsIOMu.js";import"./slim-arrow-down-DPxeYNIS.js";import"./Input-RaRxEcJv.js";import"./ResponsivePopoverCommon.css-BnKNuLK_.js";import"./ValueStateMessage.css-D2xuJszB.js";import"./Suggestions.css-C-SIx5Gu.js";import"./ListBoxItemGroupTemplate-CkqhRzfm.js";import"./ComboBoxItemGroup-BGauKTTc.js";import"./ListItemBaseTemplate-CCNKkYk5.js";import"./Token-FJAepxqH.js";import"./ScrollEnablement-e6-Wl8Ct.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cd6yodnz.js";import"./ToggleButton-CKU3XZkp.js";import"./SuggestionItem-1xa7THEm.js";import"./index-D2rLPQ18.js";import"./Option-CtvAXvoh.js";import"./index-CCkYF5EZ.js";import"./SegmentedButton-BMw95QgJ.js";import"./index-mj1iThEp.js";import"./Select-DK_4ZOyC.js";import"./InvisibleMessage-PSe-IXvc.js";import"./slim-arrow-down-BIyrlIQV.js";import"./index-Dnit8d_5.js";import"./index-BVN7UCZF.js";import"./index-mJSdXP-Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CknUQnqi.js";import"./group-2-BYSUkX7I.js";import"./sort-descending-BGvYR9pA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-De9vUNgF.js";import"./utils--AtpiRwX.js";import"./index-wOoILpmg.js";import"./index-CcNWTncD.js";import"./index-BPKkC6Cq.js";import"./navigation-down-arrow-CE59kIds.js";import"./navigation-right-arrow-5K5Bx0O1.js";import"./navigation-right-arrow-CrmWEXO3.js";import"./useCurrentTheme-CT2jPT6F.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DwlQ-CyJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DFX8rm6i.js";import"./paper-plane-DMs4w7xh.js";import"./index-dsSG16Z8.js";import"./less-4xUDvpDF.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
