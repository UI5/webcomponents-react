import{j as o}from"./iframe-CEhnIlu5.js";import{useMDXComponents as n}from"./index-DvMCH85E.js";import{I as r,F as m}from"./CommandsAndQueries-COpLwEKt.js";import{M as p,C as s}from"./blocks-CzCRTnDN.js";import"./Tag-B0tBXTma.js";import"./index-BxbrXhSf.js";import"./copy-DW0z69Dv.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BRz2kd1y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8phGoz0x.js";import"./index-XtQvC7Ne.js";import"./index-djaoMR7U.js";import"./Link-Dx0jxQut.js";import"./index-BJ3Bv_1U.js";import"./index-Bjvgvr9c.js";import"./index-CmP_HbAe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8LeJtOc.js";import"./addCustomCSSWithScoping-jvTBykEZ.js";import"./index-Dgl42qdE.js";import"./information-GsMzttNM.js";import"./sys-enter-2-CRQG3vkj.js";import"./alert-C-SQT9wT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BLa75-a4.js";import"./delete-DZBn0HlY.js";import"./settings-DqBE4Yfa.js";import"./NoData-z1rscvaR.js";import"./IllustratedMessage-DLIRWhUO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-_eFO4hhR.js";import"./index-RznWYrdR.js";import"./index-jDTu_XSn.js";import"./slim-arrow-down-DCqrbNPW.js";import"./Input-Cesqog5j.js";import"./ResponsivePopoverCommon.css-CcZwtHQR.js";import"./ValueStateMessage.css-tCml9Upt.js";import"./Suggestions.css-CS6Y7lfw.js";import"./ListBoxItemGroupTemplate-gZbs6LSY.js";import"./ComboBoxItemGroup-BX8sl_PD.js";import"./ListItemBaseTemplate-Cm0NfbpL.js";import"./Token-DdBaiPI-.js";import"./ScrollEnablement-DfRZg6Dv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqKgSM5s.js";import"./ToggleButton-BrmzCsUo.js";import"./SuggestionItem-BHZcKCCP.js";import"./index-gfBCaRX1.js";import"./Option-N8h0jF1c.js";import"./index-DdzeaEd3.js";import"./SegmentedButton-BegLLxw2.js";import"./index-B5ZqyAt4.js";import"./Select-DCpGFOXx.js";import"./InvisibleMessage-B7HV_CKC.js";import"./slim-arrow-down-DYJprQ5J.js";import"./index-CF2pqHX5.js";import"./index-CrxXAlAp.js";import"./index-BmZH7-5P.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CSvmxui-.js";import"./group-2-CTVsJNx-.js";import"./sort-descending-B9sifUyq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-cqZEsl2j.js";import"./utils-gTx_8Idj.js";import"./index-CjpBStF-.js";import"./index-e-mZHuH4.js";import"./index-Dq_2j8ok.js";import"./navigation-down-arrow-B-AcI54H.js";import"./navigation-right-arrow-BOTQ_vif.js";import"./navigation-right-arrow-FWBcN_Yy.js";import"./useCurrentTheme-8m84Q5Bx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ChT8t06d.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOclZ2jB.js";import"./paper-plane-Ch-Ok7XN.js";import"./index-DySPt_hE.js";import"./less-DY5sd6NF.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
