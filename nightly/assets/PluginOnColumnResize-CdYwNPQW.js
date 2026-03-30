import{j as o}from"./iframe-vcfuMEkL.js";import{u as n,M as r,C as m}from"./blocks-CzMAxM7Q.js";import{I as p}from"./CommandsAndQueries-BLcCgFEg.js";import"./Tag-D032LoeK.js";import"./index-D5a6L_9E.js";import"./copy-CTlr8Wzd.js";import{F as s}from"./Footer-B8luth97.js";import"./PageNotFound-DOCrqF52.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D0S5SWUQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DAzSfgZb.js";import"./index-wWex-oQF.js";import"./index-Cbp9ERwo.js";import"./index-BMMtw8na.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7Mkof57M.js";import"./addCustomCSSWithScoping-BGtNyFBv.js";import"./index-CY4n9r1V.js";import"./index-BgY_pwT7.js";import"./index-C5MkOTN8.js";import"./information-DGdr23sZ.js";import"./sys-enter-2-BtTk1NF5.js";import"./alert-C2W9yseD.js";import"./index-CPCjGKn0.js";import"./Illustrations-DEQ9OpIe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Crgbirl0.js";import"./delete-t-nTD-y0.js";import"./settings-C-AYaNdM.js";import"./NoData-D-VJSSvm.js";import"./NoFilterResults-BxHjy-Ir.js";import"./index-CG-qXqs_.js";import"./IllustratedMessage-BqYMJYO9.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CNNC3MB3.js";import"./Input-UOdVCXoq.js";import"./ResponsivePopoverCommon.css-BZx4EG62.js";import"./ValueStateMessage.css-BUiJkg_v.js";import"./Suggestions.css-C6VxQjoH.js";import"./ListBoxItemGroupTemplate-DKqiYFMZ.js";import"./ComboBoxItemGroup-DxGiZDD1.js";import"./ListItemBaseTemplate-Z0Vtvnm9.js";import"./Token-BipXjjpW.js";import"./ScrollEnablement-BEZ0Hhjc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ajyl_xA3.js";import"./ToggleButton-BvHVimm5.js";import"./multiselect-all-DMS-FMXo.js";import"./SuggestionItem-DM0Sr0MT.js";import"./index-BNjcqTu2.js";import"./Option-DFlIuwHE.js";import"./index-DXuj7n31.js";import"./SegmentedButton-BiCKQqFx.js";import"./index-CdVEJ8Xn.js";import"./Select-BRdHt1j2.js";import"./InvisibleMessage-OqmRbPaJ.js";import"./index-CA51ReO5.js";import"./index-D9lECCtr.js";import"./index-BGMDCEAA.js";import"./index-B95IPvM7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QMg4ltp-.js";import"./group-2-D1uLpEFP.js";import"./sort-descending-CSNhAS-7.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpuAB5UG.js";import"./utils-3Fin_E3c.js";import"./index-iVoXYErW.js";import"./index-CK-AKsKY.js";import"./index-ByXi5BjK.js";import"./navigation-down-arrow-VFZsVw9Y.js";import"./navigation-right-arrow-CyNJ1Cu6.js";import"./navigation-right-arrow-jHLkNE9I.js";import"./useCurrentTheme-C76bbDUR.js";import"./index-BopKc_Rk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D4Wf5-Pu.js";import"./paper-plane-DfuC-T1-.js";import"./index-Bz-Lpaym.js";import"./less-DUR6pMX9.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(p,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function Eo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Eo as default};
