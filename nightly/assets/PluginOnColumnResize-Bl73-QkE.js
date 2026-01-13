import{j as o}from"./iframe-BX6l_vT-.js";import{useMDXComponents as n}from"./index-Bzy26fup.js";import{I as r,F as m}from"./CommandsAndQueries-BQamr4MW.js";import{M as p,C as s}from"./blocks-dv2dOEr1.js";import"./Tag-CPbL9Jm0.js";import"./index-Brt5lPnV.js";import"./copy-DJpI-ZKv.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D4l3HB2W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JvehRoeP.js";import"./index-DN8AW8ib.js";import"./index-CPY8w0If.js";import"./Link-LBAuQHud.js";import"./index-5GNX0CLe.js";import"./index-CdanIUAH.js";import"./index-CUja4hYj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJYHkaYl.js";import"./addCustomCSSWithScoping-DPpaQSds.js";import"./index-DKRKom99.js";import"./information-BHJaLhAv.js";import"./sys-enter-2-EZBfp4iZ.js";import"./alert-DUVH4PBA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ca5r5f4M.js";import"./delete-Bsyy1njk.js";import"./settings-DxWJHI99.js";import"./NoData-C_NtRWhM.js";import"./IllustratedMessage-DIkrg042.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CvIXbxAg.js";import"./index-BDGSG9LU.js";import"./index-Bd42I97O.js";import"./slim-arrow-down-C-LrsL8H.js";import"./Input-CDmiLyyY.js";import"./ResponsivePopoverCommon.css-CmOep2RC.js";import"./ValueStateMessage.css-DBlWYUos.js";import"./Suggestions.css-C86jlgxo.js";import"./ListBoxItemGroupTemplate-CjE33DFP.js";import"./ComboBoxItemGroup-DXvxztj-.js";import"./ListItemBaseTemplate-D6Eqv4kM.js";import"./Token-BcKVBOJy.js";import"./ScrollEnablement-CX9YTqaF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ChOU4iwN.js";import"./ToggleButton-CODQYAiJ.js";import"./SuggestionItem-1DKCdUlb.js";import"./index-DlvRAfCL.js";import"./Option-CFA8b-um.js";import"./index-DAsjesvB.js";import"./SegmentedButton-DUlvEafh.js";import"./index-BWIKqFzV.js";import"./Select-xeWEHzkB.js";import"./InvisibleMessage-BDRoIrKZ.js";import"./slim-arrow-down-48HvW-vj.js";import"./index-BuXHj4_-.js";import"./index-aYisw1Gg.js";import"./index-ZtIQJzTv.js";import"./index-Dr11T0CO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bbs4NOEV.js";import"./group-2-D6oioZ7I.js";import"./sort-descending-DgSgbzqc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bb9INHlF.js";import"./utils-B0NWY5kp.js";import"./index-223TNC1P.js";import"./index-CA6OMJ6E.js";import"./index-BSjQgxdu.js";import"./navigation-down-arrow-DpKyjZiZ.js";import"./navigation-right-arrow-C5pZYAdh.js";import"./navigation-right-arrow-Bwx2a_3u.js";import"./useCurrentTheme-CxsvHeYZ.js";import"./index-Dll0aIpz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cr-hHSan.js";import"./paper-plane-DHhXyk0n.js";import"./index-C1fiAmtQ.js";import"./less-CyPDc2VR.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
