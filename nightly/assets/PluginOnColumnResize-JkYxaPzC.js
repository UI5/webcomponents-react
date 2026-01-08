import{j as o}from"./iframe-D_OBvCft.js";import{useMDXComponents as n}from"./index-B_S0g7ME.js";import{I as r,F as m}from"./CommandsAndQueries-BZ-3zH0-.js";import{M as p,C as s}from"./blocks-DYLPI3Ra.js";import"./Tag-DR4TT7Tz.js";import"./index-DHlu5N_c.js";import"./copy-DQgNVeWA.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-zK04HXJH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKEI8mWg.js";import"./index-S0He3U_1.js";import"./index-CTJhmHbW.js";import"./Link-ubTR8kdT.js";import"./index-CgmBhunw.js";import"./index-CT9F8jkM.js";import"./index-BxzyntYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CYQDt8WV.js";import"./addCustomCSSWithScoping-DGwiZ6Qr.js";import"./index-Dss8LBVA.js";import"./information-PDp2XxR-.js";import"./sys-enter-2-CTjcKc0d.js";import"./alert-BulXizwQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqurhSOy.js";import"./delete-Ctn0kSBL.js";import"./settings-z7-rjv9j.js";import"./NoData-C5ntZU5O.js";import"./IllustratedMessage-id6nb7wX.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BKoG-d3a.js";import"./index-B_K9wBMY.js";import"./index-DP-FcseT.js";import"./slim-arrow-down-CHulNvxE.js";import"./Input-i8SqafG1.js";import"./ResponsivePopoverCommon.css-0qhZ8h5z.js";import"./ValueStateMessage.css-LMTZLgJb.js";import"./Suggestions.css-C2T_AAKW.js";import"./ListBoxItemGroupTemplate-CcplzrLE.js";import"./ComboBoxItemGroup-3PYa3s30.js";import"./ListItemBaseTemplate-BHxGfkuD.js";import"./Token-a1Z2dlMc.js";import"./ScrollEnablement-BPZ45FDB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_4_wWWa.js";import"./ToggleButton-BqO_3v_4.js";import"./SuggestionItem-CG8vQS4D.js";import"./index--Gn4VUxm.js";import"./Option-D0b-vRt9.js";import"./index-cCJWZwrT.js";import"./SegmentedButton-Dhi24GCC.js";import"./index-BR4X8nJj.js";import"./Select-BLV-PVqf.js";import"./InvisibleMessage-C_0GSe_o.js";import"./slim-arrow-down-CAFzZJk4.js";import"./index-Dk3pumqB.js";import"./index-xeY4HnPc.js";import"./index-CAb0cCCw.js";import"./index-DtrCS052.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdUi0j8b.js";import"./group-2-B-T-Csy_.js";import"./sort-descending-DEst_JzS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMORGjeP.js";import"./utils-GHixDqEj.js";import"./index-BYrxTP19.js";import"./index-CqnoKVS3.js";import"./index-BqnBaVKU.js";import"./navigation-down-arrow-DTEGx91w.js";import"./navigation-right-arrow-D2dYA2Ao.js";import"./navigation-right-arrow-cH8Y4Elf.js";import"./useCurrentTheme-CxGXlk1H.js";import"./index-Clf9WQAr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-113p4z.js";import"./paper-plane-78D-pvJG.js";import"./index-xk-p1hJ3.js";import"./less-oocybHBg.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
