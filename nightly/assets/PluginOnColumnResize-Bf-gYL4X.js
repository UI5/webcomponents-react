import{j as o}from"./iframe-5N9GXz7D.js";import{useMDXComponents as n}from"./index-DlTuiQlt.js";import{I as r,F as m}from"./CommandsAndQueries-CMJc_Han.js";import{M as p,C as s}from"./blocks-CPyIL7dB.js";import"./Tag-B4RC7Xxt.js";import"./index-D8q95YVM.js";import"./copy-BLtz8zcP.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CU1Fc6AT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJR2SGfI.js";import"./index-DDb99OCc.js";import"./index-DZUtpbBW.js";import"./Link-oEEjXqRZ.js";import"./index-D5QSQPRG.js";import"./index-l_lQT3oU.js";import"./index-DHTSiNH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ieHBSwsk.js";import"./addCustomCSSWithScoping-B8HVYEKl.js";import"./index-FxCKqbN1.js";import"./information-B48tg30u.js";import"./sys-enter-2-CQaZAGEJ.js";import"./alert-Ct7A8pBg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Qomii_Eh.js";import"./delete-vylZh7WJ.js";import"./settings-B5-c07yK.js";import"./NoData-DbeTv8bI.js";import"./IllustratedMessage-yyhJb6H7.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CguSYJb-.js";import"./index-B6JLNmTG.js";import"./index-gVbw8hdV.js";import"./slim-arrow-down-uEmCnSpu.js";import"./Input-Cf74aOvg.js";import"./ResponsivePopoverCommon.css-D2vKXyuQ.js";import"./ValueStateMessage.css-Ctm1_1I-.js";import"./Suggestions.css-CDFdvq-I.js";import"./ListBoxItemGroupTemplate-BTEoBIel.js";import"./ComboBoxItemGroup-BndPAf-K.js";import"./ListItemBaseTemplate-BbinvfmZ.js";import"./Token-CSu3FrWS.js";import"./ScrollEnablement-DVuWUxs9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BFNu6wL7.js";import"./ToggleButton-CADuKzo9.js";import"./SuggestionItem-Bt1iO1MT.js";import"./index-9ZgsG56h.js";import"./Option-B0lfretA.js";import"./index-DKrFf-VR.js";import"./SegmentedButton-CwtS4mbi.js";import"./index-CDEUh1Wr.js";import"./Select-BKsCZrgq.js";import"./InvisibleMessage-BNNpwXEU.js";import"./slim-arrow-down-CLJYmPnb.js";import"./index-BDZcqiPr.js";import"./index-DmwwIOgD.js";import"./index-CP2quE6c.js";import"./IconDesign-DXd8PPVF.js";import"./filter-yps-Eqqd.js";import"./group-2-6NDEVnRF.js";import"./sort-descending-BzVGktfr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-3H5h1FPb.js";import"./utils-CdxZF0UW.js";import"./index-CTYujQq0.js";import"./index-Bk28eBp1.js";import"./index-cm94_KBC.js";import"./navigation-down-arrow-DBn42RCI.js";import"./navigation-right-arrow-BrFq4Pkn.js";import"./navigation-right-arrow-Cdp8Azj2.js";import"./useCurrentTheme-EgfIVG70.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BLiIhR8s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-v4UuOtzV.js";import"./paper-plane-DplzoTA4.js";import"./index-CSswLuPM.js";import"./less-D9G0zBob.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
