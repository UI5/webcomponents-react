import{j as o}from"./iframe-BN0GWVQe.js";import{useMDXComponents as n}from"./index-BLbTpX55.js";import{I as r,F as m}from"./CommandsAndQueries-C4w7BIRn.js";import{M as p,C as s}from"./blocks-D3wn40tr.js";import"./Tag-CZAeCV6F.js";import"./index-Bxb5YZWP.js";import"./copy-B0NSZ-1k.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-7de-hSrh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BEhXLrZk.js";import"./index-Dt-X_HjL.js";import"./index-BtPW2b7B.js";import"./Link-Br_XV4sE.js";import"./index-BqPBCR84.js";import"./index-BQ2VPUfC.js";import"./index-CGlofGT5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Du_vcu6e.js";import"./addCustomCSSWithScoping-D2hXBZmk.js";import"./index-BaX--um2.js";import"./information-b87QwzTv.js";import"./sys-enter-2-C5oyesud.js";import"./alert-DOWzv_2H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-BtNJyH.js";import"./delete-B-dRIfah.js";import"./settings-O_gAmrE7.js";import"./NoData-B6r5wtfr.js";import"./IllustratedMessage-CHylU20L.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BD6ty48g.js";import"./index-D6WGsm7x.js";import"./index-CS6KO8cx.js";import"./slim-arrow-down-xoHclsMi.js";import"./Input-BT1uTnSo.js";import"./ResponsivePopoverCommon.css-DtFcvyzi.js";import"./ValueStateMessage.css-DGbWuuCH.js";import"./Suggestions.css-BeDi0pBK.js";import"./ListBoxItemGroupTemplate-Dzhkqyak.js";import"./ComboBoxItemGroup-KbV6i136.js";import"./ListItemBaseTemplate-BfCP6G70.js";import"./Token-C1ZTtDz_.js";import"./ScrollEnablement-iDo916Z3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6-433jt.js";import"./ToggleButton-ybF8gCpz.js";import"./SuggestionItem-Bgm-HNu4.js";import"./index-DW2XUEdT.js";import"./Option-B9k-7Ahv.js";import"./index-D8K4Qq5D.js";import"./SegmentedButton-C7VWunBd.js";import"./index-DNhI0FWS.js";import"./Select-CJ0wONEr.js";import"./InvisibleMessage-CRMlkkCP.js";import"./slim-arrow-down-B5np2n8S.js";import"./index-C4H-ZzEe.js";import"./index-92cS-QUv.js";import"./index-D6tqan70.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CEM9HxMz.js";import"./group-2-BMZwrYYd.js";import"./sort-descending-BlHz6r-B.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CsK0f-Ik.js";import"./utils-ChyEe21I.js";import"./index-Lp9IxDFm.js";import"./index-CojJHUo4.js";import"./index-DUZ2D5ri.js";import"./navigation-down-arrow-2gSQh0oE.js";import"./navigation-right-arrow-BLvXVY5g.js";import"./navigation-right-arrow-X8mU-9lc.js";import"./useCurrentTheme-BB3WFm2v.js";import"./IndicationColor-DVw-fSM_.js";import"./index-As2m_wDV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgYFYmB4.js";import"./paper-plane-vPmlwkwT.js";import"./index-B4Hn3DKa.js";import"./less-rqU1UIrN.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
