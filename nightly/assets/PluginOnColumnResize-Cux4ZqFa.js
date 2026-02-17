import{j as o}from"./iframe-Cs-5LFqP.js";import{useMDXComponents as n}from"./index-4_wYEVSM.js";import{I as r,F as m}from"./CommandsAndQueries-pWQonQL4.js";import{M as p,C as s}from"./blocks-Ml05RtQw.js";import"./Tag-ChHbpWGO.js";import"./index-Bj7p5WqA.js";import"./copy-DN4ABQ_i.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DLd06CvB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tt3zNDS3.js";import"./index-DkXjtxgK.js";import"./index-B7_af3sB.js";import"./Link-DZfJcWGy.js";import"./index-k6loN7up.js";import"./index-CHkORph3.js";import"./index-CmIMKxCO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Oma2N1kf.js";import"./addCustomCSSWithScoping-BCQiyr6x.js";import"./index-BUJAXr9p.js";import"./information-CG8AIpkm.js";import"./sys-enter-2-DunLLOB1.js";import"./alert-IqDG9ylo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CS-8nJYw.js";import"./delete-CLlnG484.js";import"./settings-envYxgNe.js";import"./NoData-MpM1Hboz.js";import"./IllustratedMessage-XiOi_O98.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CjSiJYQm.js";import"./index-Dkiu8AdL.js";import"./index-C0ZKe89Q.js";import"./slim-arrow-down-BP1y9etM.js";import"./Input-1lNxvEmx.js";import"./ResponsivePopoverCommon.css-Dby6EGP2.js";import"./ValueStateMessage.css-CRvqrXXK.js";import"./Suggestions.css-BOY3IfAD.js";import"./ListBoxItemGroupTemplate-r8OAnwHN.js";import"./ComboBoxItemGroup-B3ytlzdg.js";import"./ListItemBaseTemplate-D4Nb1LoU.js";import"./Token-DcgVtbgs.js";import"./ScrollEnablement-GTlRH6tE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DxclopY-.js";import"./ToggleButton-QtBZvedq.js";import"./SuggestionItem-D5nxLtbB.js";import"./index-Tx9ELn6M.js";import"./Option-CoAxKOIy.js";import"./index-y6qVrFsN.js";import"./SegmentedButton-xuXIvZlA.js";import"./index-BIsBvoOA.js";import"./Select-BEsYKhUS.js";import"./InvisibleMessage-CFCay4kG.js";import"./slim-arrow-down-Bbv1i9W9.js";import"./index-T4Qk8jiD.js";import"./index-plyixF0d.js";import"./index-DsJZZm7i.js";import"./index-h8anB-3B.js";import"./IconDesign-DXd8PPVF.js";import"./filter-TDf9rbaD.js";import"./group-2-BvoDnCtF.js";import"./sort-descending-FS751uDv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D06_Ki1H.js";import"./utils-C4L1GQet.js";import"./index-DuIEmgl0.js";import"./index-DD9TQMUS.js";import"./index-D8PWKVzq.js";import"./navigation-down-arrow-BLqwS3WT.js";import"./navigation-right-arrow-MiZu20cu.js";import"./navigation-right-arrow-mkQxvhCZ.js";import"./useCurrentTheme-Db8jJ0JU.js";import"./index-DPB7aPUP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzZietn_.js";import"./paper-plane-CXGOFY1-.js";import"./index-C53XJ8_2.js";import"./less-bilrATQD.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
