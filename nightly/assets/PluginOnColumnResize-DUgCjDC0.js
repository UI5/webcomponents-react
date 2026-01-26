import{j as o}from"./iframe-D_U86qCv.js";import{useMDXComponents as n}from"./index-Bg9tEBEE.js";import{I as r,F as m}from"./CommandsAndQueries-TugN8T6l.js";import{M as p,C as s}from"./blocks-D61FyfHK.js";import"./Tag-B3d92F0E.js";import"./index-DY3WUczD.js";import"./copy-Crjp4Ac1.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DRRPD7pH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfxZA3Js.js";import"./index-DQ8_SEuH.js";import"./index-D9Q3nud9.js";import"./Link-Cw10wX3R.js";import"./index-hUHwRYTv.js";import"./index-BgwtpBeW.js";import"./index-DjRObmYp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AccWPG8C.js";import"./addCustomCSSWithScoping-peiruV29.js";import"./index-WEtnzuU5.js";import"./information-DVWvWtO-.js";import"./sys-enter-2-CVo9vLlV.js";import"./alert-Dk_EKidz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXaLMGH1.js";import"./delete-C65oQeOP.js";import"./settings-DvNN523n.js";import"./NoData-Btj1TuE6.js";import"./IllustratedMessage-C4Y-hPy7.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BCXv8K85.js";import"./index-BUDr-hLX.js";import"./index-Bf2DNKb6.js";import"./slim-arrow-down-B1jwB_te.js";import"./Input-CTjAUWZQ.js";import"./ResponsivePopoverCommon.css-C8oO5Lyh.js";import"./ValueStateMessage.css-D9qc5lXt.js";import"./Suggestions.css-DEpz1xYL.js";import"./ListBoxItemGroupTemplate-5NLZSPWt.js";import"./ComboBoxItemGroup--dcncB9c.js";import"./ListItemBaseTemplate-mePDBDU1.js";import"./Token-dW6lMRFw.js";import"./ScrollEnablement-Bn4R2vMs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BF_-X6-h.js";import"./ToggleButton-C4w5EmKQ.js";import"./SuggestionItem-BOJBp7v0.js";import"./index-CCRGNalr.js";import"./Option-CpNbPgV2.js";import"./index-C1qDCxNA.js";import"./SegmentedButton-Bsj8EgI0.js";import"./index-B88wz0zx.js";import"./Select-akqe93gn.js";import"./InvisibleMessage-9g7oEz5f.js";import"./slim-arrow-down-DuNkCtSe.js";import"./index-T9m1HJoc.js";import"./index-Bm-mIndo.js";import"./index-DR6xeV5u.js";import"./index-D3NSTpXZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dl4bKezQ.js";import"./group-2-CRRiEe8O.js";import"./sort-descending-BsGiYaME.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYjXc6T7.js";import"./utils-PdXjpojR.js";import"./index-D2qUqIHh.js";import"./index-MdW3w5l9.js";import"./index-BsoVNeMU.js";import"./navigation-down-arrow-044as9EH.js";import"./navigation-right-arrow-5uKL9NHQ.js";import"./navigation-right-arrow-yNY1bh5s.js";import"./useCurrentTheme-Bhf-1e6-.js";import"./index-DUww4q61.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sMcBz9Ie.js";import"./paper-plane-DE2vkKLc.js";import"./index-D-Hqwhy7.js";import"./less-CRStbIYd.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
