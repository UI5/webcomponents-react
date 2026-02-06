import{j as o}from"./iframe-DsgKHrOc.js";import{useMDXComponents as n}from"./index-R1G5OZPs.js";import{I as r,F as m}from"./CommandsAndQueries-D_2jUbP4.js";import{M as p,C as s}from"./blocks-CQue4LlW.js";import"./Tag-BTAP7zi_.js";import"./index-B3N-7g7X.js";import"./copy-DlTApuN1.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-i7kpTZ_A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNMfu1Bq.js";import"./index-CnrY0exf.js";import"./index-BdUiiHhG.js";import"./Link-DoHEtv1B.js";import"./index-Dm9AGWV-.js";import"./index-BomSeR7F.js";import"./index-W4kN-wgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BfAO3hVt.js";import"./addCustomCSSWithScoping-CsuAJYaG.js";import"./index-0Q75H94O.js";import"./information-ls1iI2xZ.js";import"./sys-enter-2-BOSLgeP2.js";import"./alert-BH6ifEnA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SSqF3mYr.js";import"./delete-BXxwRw5y.js";import"./settings-BDZ662oR.js";import"./NoData-mzNWeO_R.js";import"./IllustratedMessage-CwAF6TLx.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CBmQxRIQ.js";import"./index-CO7AsHeT.js";import"./index-DPmxY5Fk.js";import"./slim-arrow-down-BFPvdtk4.js";import"./Input-CLRI9CEh.js";import"./ResponsivePopoverCommon.css-Dz_dByIm.js";import"./ValueStateMessage.css-C1b8jnbg.js";import"./Suggestions.css-Y2NBFohg.js";import"./ListBoxItemGroupTemplate-Cu8LS11Q.js";import"./ComboBoxItemGroup-zDzTNuwT.js";import"./ListItemBaseTemplate-Ch-vNojB.js";import"./Token-DNwyr1VA.js";import"./ScrollEnablement-CijCXV-f.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CPkU6wJ3.js";import"./ToggleButton-COie_AKR.js";import"./SuggestionItem-B4-4_m5w.js";import"./index-HXM5p6gS.js";import"./Option-CQ19A_kf.js";import"./index-0mAv68Ot.js";import"./SegmentedButton-h60sJA6a.js";import"./index-C8-_l6KY.js";import"./Select-MmIlw-od.js";import"./InvisibleMessage-q1FFN4_p.js";import"./slim-arrow-down-BLSo6u6P.js";import"./index-DK0w5O82.js";import"./index-Dn-44Img.js";import"./index-CUAjbgKI.js";import"./index-CLFnZnkT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DY9qOiNW.js";import"./group-2-B0_QXr5r.js";import"./sort-descending-B2J58p1j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DE-0JGpI.js";import"./utils-BcerUUFZ.js";import"./index-QVkFgjH8.js";import"./index-0oo2lNeo.js";import"./index-DaiJcS-C.js";import"./navigation-down-arrow-bXhK5skS.js";import"./navigation-right-arrow-uarvhyB4.js";import"./navigation-right-arrow-7Xw2c4NW.js";import"./useCurrentTheme-BDtdl0D9.js";import"./index-NzD9g4E3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-IwUpqcbd.js";import"./paper-plane-DoDYrXu7.js";import"./index-B6hPTyEO.js";import"./less-BPtBbolb.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
