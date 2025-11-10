import{j as o}from"./iframe-DwaN3YOb.js";import{useMDXComponents as n}from"./index-DJkPMHl0.js";import{I as r,F as m}from"./CommandsAndQueries-celHgEKj.js";import{M as p,C as s}from"./blocks-VOPJhWRb.js";import"./Tag-CvvDTrwW.js";import"./index-CeIuBzgz.js";import"./copy-CKG1fqk8.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D8qv-qyc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVTJV5Os.js";import"./index-DjYkOeBC.js";import"./index-CUaYuXp6.js";import"./Link-DCuWG7Zr.js";import"./index-C3ayLo5Y.js";import"./index-Bi8h6EAq.js";import"./index-D4NPnlzD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pPwV4WuA.js";import"./addCustomCSSWithScoping-CDiHCMLw.js";import"./index-DTu_z_3g.js";import"./information-DlBGosYj.js";import"./sys-enter-2-D6KHkFFC.js";import"./alert-CbpKaM9g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BvknPgOG.js";import"./delete-oCNE_JQh.js";import"./settings-DEs1Fc49.js";import"./NoData-DAYfBbqK.js";import"./IllustratedMessage-wzKYdU_-.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Cb_5cmEk.js";import"./index-BcPBHQ-Q.js";import"./index-Bke4YviU.js";import"./slim-arrow-down-CRaneK80.js";import"./Input-CLIZhDum.js";import"./ResponsivePopoverCommon.css-CJC70dmu.js";import"./ValueStateMessage.css-DJT3AHT7.js";import"./Suggestions.css-CeDH46KQ.js";import"./ListBoxItemGroupTemplate-BQ-rC9oN.js";import"./ComboBoxItemGroup-mMihpAIY.js";import"./ListItemBaseTemplate-CRnzAUDY.js";import"./Token-Bw2wQhOZ.js";import"./ScrollEnablement-lcRjFW01.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2rgfoOK.js";import"./ToggleButton-Cp7FiFLg.js";import"./SuggestionItem-CXEUnxx9.js";import"./index-BeETY4Un.js";import"./Option-DpzRHCg2.js";import"./index-BaS94csF.js";import"./SegmentedButton-Bs4JK4vg.js";import"./index-CdGoTqGJ.js";import"./Select-DP-woAt8.js";import"./InvisibleMessage-C38-tOeF.js";import"./slim-arrow-down-CCRASHHL.js";import"./index-YBse5kfL.js";import"./index-CB8IrRkr.js";import"./index-xilM6z0g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CPVva38y.js";import"./group-2-CSHzsICd.js";import"./sort-descending-CWc_CsJd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KwF5pWQ5.js";import"./utils-CwcFpu02.js";import"./index-De37CZAE.js";import"./index-CjVizb-b.js";import"./index-ClYWh6yw.js";import"./navigation-down-arrow-DKN53QTj.js";import"./navigation-right-arrow-z9S6-sIY.js";import"./navigation-right-arrow-DD3mtqXo.js";import"./useCurrentTheme-Wde8txbg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D_nGAcEA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DjGMBWnz.js";import"./paper-plane-Dc6cZlTV.js";import"./index-D10CmlMt.js";import"./less-BhgjPFtm.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
