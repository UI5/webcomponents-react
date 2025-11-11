import{j as o}from"./iframe-dcfOuKvt.js";import{useMDXComponents as n}from"./index-s6pmBJrF.js";import{I as r,F as m}from"./CommandsAndQueries-XLh3rfRK.js";import{M as p,C as s}from"./blocks-CuD-56fD.js";import"./Tag-wpbJw-fJ.js";import"./index-DKVFb7ln.js";import"./copy-CjQxEWgu.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D-8gJKdE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DPsFL1rE.js";import"./index-ZW_BnH9T.js";import"./index-CvN_j3lV.js";import"./Link-Bb4iXCLh.js";import"./index-DOoV4d9M.js";import"./index-CLyQ0iFn.js";import"./index-fw2ccDa-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyhaBlGc.js";import"./addCustomCSSWithScoping-CSOIgEcY.js";import"./index-BFv8_OJi.js";import"./information-CU_5ogqg.js";import"./sys-enter-2-Ws311tut.js";import"./alert-BjY8k0mz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CC_o51Ui.js";import"./delete-BAzyGK0e.js";import"./settings-FAg3x57M.js";import"./NoData-D9utlD0G.js";import"./IllustratedMessage-aIAJlFbs.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B7nT3HYa.js";import"./index-Dy2F28Z_.js";import"./index-ov6Hqgi9.js";import"./slim-arrow-down-7ZYbfLfd.js";import"./Input-DZep6tUc.js";import"./ResponsivePopoverCommon.css-OTtjABRB.js";import"./ValueStateMessage.css-CKThLhvq.js";import"./Suggestions.css-DvjeYE6w.js";import"./ListBoxItemGroupTemplate-ChRrtpqA.js";import"./ComboBoxItemGroup-CvAEveDk.js";import"./ListItemBaseTemplate-DNtdtyka.js";import"./Token-DQ8uLAYx.js";import"./ScrollEnablement-BhFMnfiL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B3mcYXoD.js";import"./ToggleButton-HVoH_wGW.js";import"./SuggestionItem-DwMAv3Y5.js";import"./index-DKSwXKRo.js";import"./Option-DN_OxtE5.js";import"./index-B_kjn4LY.js";import"./SegmentedButton-DfxvXFe5.js";import"./index-BAbKpGMN.js";import"./Select-1hbOCPXG.js";import"./InvisibleMessage-yVfs4fqn.js";import"./slim-arrow-down-C5wzux3l.js";import"./index-B4P16y8A.js";import"./index-lCvDytw_.js";import"./index-BJoDmJyK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BKkgL7hV.js";import"./group-2-D_6f7wuD.js";import"./sort-descending-80LCu02o.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bj_K8y3K.js";import"./utils-BCDlv38x.js";import"./index-NMCoUNxC.js";import"./index-DN8kdina.js";import"./index-Bfk5X2Wo.js";import"./navigation-down-arrow-BFC7OekD.js";import"./navigation-right-arrow-Ce3qhbEe.js";import"./navigation-right-arrow-qu2k__M4.js";import"./useCurrentTheme-CsIfI9uM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D86utbHM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsbxojB9.js";import"./paper-plane-taVkukQ2.js";import"./index-ZliIzRiZ.js";import"./less-BB1GhJj9.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
