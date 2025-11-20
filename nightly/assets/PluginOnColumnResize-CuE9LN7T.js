import{j as o}from"./iframe-CwFVqG2B.js";import{useMDXComponents as n}from"./index-DLCucreN.js";import{I as r,F as m}from"./CommandsAndQueries-CPEglOxS.js";import{M as p,C as s}from"./blocks-BPmtq9pk.js";import"./Tag-BAaIxfbN.js";import"./index-Dun977o4.js";import"./copy-BGYvKTCJ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-IPFHSsND.js";import"./preload-helper-PPVm8Dsz.js";import"./index-graRZSxK.js";import"./index-B1OrttLk.js";import"./index-BdiKbL49.js";import"./Link-LJw1ucv9.js";import"./index-CMU9Wk5L.js";import"./index-Cs50Favg.js";import"./index-DS4oeWmb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BQrnNeIO.js";import"./addCustomCSSWithScoping-C4aLMSRb.js";import"./index-CCtj0faG.js";import"./information-BBSRrLZV.js";import"./sys-enter-2-D4JTR3Iq.js";import"./alert-vk5CGtWZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DRrGwzL9.js";import"./delete-BAWpcIUW.js";import"./settings-BVk1IXbs.js";import"./NoData-Bj5ycwAL.js";import"./IllustratedMessage-BHtBrEyE.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C9ToWu0p.js";import"./index-CcsAx6VM.js";import"./index-DBALDDZY.js";import"./slim-arrow-down-CSjJ9Oz6.js";import"./Input-BRFISGyi.js";import"./ResponsivePopoverCommon.css-55yd8Lsl.js";import"./ValueStateMessage.css-BXXM_drL.js";import"./Suggestions.css-D3s2RFDk.js";import"./ListBoxItemGroupTemplate-CdPhkglx.js";import"./ComboBoxItemGroup-D7oZE5pz.js";import"./ListItemBaseTemplate-CDbPPmc-.js";import"./Token-EaAKc4df.js";import"./ScrollEnablement-BCwkkkko.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DP9SjAAJ.js";import"./ToggleButton-Cc0QHwqT.js";import"./SuggestionItem-Cbtk-40h.js";import"./index-iyeSfRj5.js";import"./Option-Cb-NFj1X.js";import"./index-ypKCmrok.js";import"./SegmentedButton-DYr7Bui3.js";import"./index-CSUbFIFX.js";import"./Select-sAAnT16U.js";import"./InvisibleMessage-LF_vPXeD.js";import"./slim-arrow-down-B8qjkohF.js";import"./index-XwinXGWy.js";import"./index-DYJmk3l7.js";import"./index-C0EOMgqx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DuEY5R3f.js";import"./group-2-D-tXx0Dv.js";import"./sort-descending-DvurIphr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BjIQh5tS.js";import"./utils-C6ONr1Lb.js";import"./index-Bw9EaheS.js";import"./index-COV0sCE8.js";import"./index-DTIplfIq.js";import"./navigation-down-arrow-CKNuRE7w.js";import"./navigation-right-arrow-CUpkPzT9.js";import"./navigation-right-arrow-B5fnZfYe.js";import"./useCurrentTheme-Cq5UXjbe.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CzUp6nof.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Kk-MVMWt.js";import"./paper-plane-r-lsifVq.js";import"./index-Iapdt60L.js";import"./less-aP6DHpwq.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
