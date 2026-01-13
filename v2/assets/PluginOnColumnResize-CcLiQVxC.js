import{j as o}from"./iframe-M6Wvc0fq.js";import{useMDXComponents as n}from"./index-Jmw_4WZV.js";import{I as r,F as m}from"./CommandsAndQueries--8Ahr2u6.js";import{M as p,C as s}from"./blocks-9PHEB2Ze.js";import"./Tag-DEHlwQE8.js";import"./index-D-NAUCyd.js";import"./copy-ClXhTaxL.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Ht4knFBz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUPsZJD9.js";import"./index-C-FSsThx.js";import"./index-_LwCcPZx.js";import"./Link-DpL14GXS.js";import"./index-0vFd8GUO.js";import"./index-BinHysAW.js";import"./index-CWMf0NSb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Y-KB0uhX.js";import"./addCustomCSSWithScoping-B-5QqUkV.js";import"./index-CNLcYPCr.js";import"./information-Cj4hRV-U.js";import"./sys-enter-2-CYdmpg8V.js";import"./alert-BNoNYb7g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChpzPnnO.js";import"./delete-Beu8r6My.js";import"./settings-Dn0qBLrS.js";import"./NoData-BwUfHrNt.js";import"./IllustratedMessage-C-QtCxtL.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BUAL9oDt.js";import"./index-BSpwtDKe.js";import"./index-BuvC0M-2.js";import"./slim-arrow-down-Cv1cFJAK.js";import"./Input-JgLWPqs-.js";import"./ResponsivePopoverCommon.css-XADsAOoO.js";import"./ValueStateMessage.css-IPM013Bi.js";import"./Suggestions.css-Bo7BTCq0.js";import"./ListBoxItemGroupTemplate-DYBBvmjW.js";import"./ComboBoxItemGroup-GSLjChX5.js";import"./ListItemBaseTemplate-BhmRBGhv.js";import"./Token-BXgPM1Ho.js";import"./ScrollEnablement-CAzFMa-6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CUv_QYff.js";import"./ToggleButton-BoN4zM_f.js";import"./SuggestionItem-Q9aDeKXU.js";import"./index-BiABfjFg.js";import"./Option-DuXsqB-8.js";import"./index-BkLLS0et.js";import"./SegmentedButton-DG8OWpoN.js";import"./index-BMYFXn7k.js";import"./Select-wk3vy9-X.js";import"./InvisibleMessage-BMxlV3uh.js";import"./slim-arrow-down-CW8gGJol.js";import"./index-9dO3MOwO.js";import"./index-gTiCTT3s.js";import"./index-B3Nrx_1A.js";import"./index-DPn7F17k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C2YL6UwO.js";import"./group-2-Cc5epAxT.js";import"./sort-descending-D2YRXcwA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-T6nX1J1_.js";import"./utils-bX0sVF0D.js";import"./index-C4Nrf8Fs.js";import"./index-DCa9DW1g.js";import"./index-BNd5VGZF.js";import"./navigation-down-arrow-B2uCLQJV.js";import"./navigation-right-arrow-BTmzxXYG.js";import"./navigation-right-arrow-tS4kh4In.js";import"./useCurrentTheme-tZZyzKNX.js";import"./index-Dp40BlFP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D7MijIiv.js";import"./paper-plane-CxysScsd.js";import"./index-CDd3hI5e.js";import"./less-zKOuQtTY.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
