import{j as o}from"./iframe-BBfeQq2L.js";import{useMDXComponents as n}from"./index-D1XkxxyM.js";import{I as r,F as m}from"./CommandsAndQueries-Buygq3eA.js";import{M as p,C as s}from"./blocks-CxdXAZue.js";import"./Tag-4fcKG2ic.js";import"./index-C57-wRZv.js";import"./copy-2iUWozfp.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BWy92f_G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5Wcj6ld.js";import"./index-BY7hZSSK.js";import"./index-Dh6gCloB.js";import"./Link-DOA2fpa3.js";import"./index-ChSH85IQ.js";import"./index-CB8857Gd.js";import"./index-C4_hmu2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDXTaCTd.js";import"./addCustomCSSWithScoping-_H14R7FJ.js";import"./index-H1CGp5_C.js";import"./information-BnGyGqAy.js";import"./sys-enter-2-B5N_dLso.js";import"./alert-DOI_-LG9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Du-GvtWn.js";import"./delete-Bvqg6jRy.js";import"./settings-CoYY_8Uh.js";import"./NoData-Bx94Sh8i.js";import"./IllustratedMessage-D9IVoDdQ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CkIkTlkv.js";import"./index-DJJ3Mees.js";import"./index-BxeXPALZ.js";import"./slim-arrow-down-CZafjPQk.js";import"./Input-CXTPtpQ2.js";import"./ResponsivePopoverCommon.css-DWkfvrPv.js";import"./ValueStateMessage.css-tsSH4zXZ.js";import"./Suggestions.css-DDtKdDf5.js";import"./ListBoxItemGroupTemplate-BpOyUqn0.js";import"./ComboBoxItemGroup-CIzD3AVu.js";import"./ListItemBaseTemplate-TueecYK6.js";import"./Token-D2mMU1OG.js";import"./ScrollEnablement-abBNx1nX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DyAEHiEu.js";import"./ToggleButton-D1DyhgK8.js";import"./SuggestionItem-BSBNfTEA.js";import"./index-Dj7DMCO5.js";import"./Option-CxAkegRU.js";import"./index-CWaD9nCK.js";import"./SegmentedButton--qutgauv.js";import"./index-Br3gWTFO.js";import"./Select-sqbuPb4m.js";import"./InvisibleMessage-CbEE0DqC.js";import"./slim-arrow-down-CZnzPpuX.js";import"./index-BEyFh1jo.js";import"./index-WkSHIfIf.js";import"./index-CU_KTR9v.js";import"./index-BHxHZDh8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3ZbZrr0.js";import"./group-2-D8MWVKUe.js";import"./sort-descending-No_uql7a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BPqEcmGG.js";import"./utils-CH402oqk.js";import"./index-e3s8xMkM.js";import"./index-DVRLVrIq.js";import"./index-C6Czb7vs.js";import"./navigation-down-arrow-DVtVCKgG.js";import"./navigation-right-arrow-BMpAHwE7.js";import"./navigation-right-arrow-BdeAmP2r.js";import"./useCurrentTheme-UAcQ55vR.js";import"./index-Cvb15Oog.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-T4YkLvpZ.js";import"./paper-plane-CuWPWZ2a.js";import"./index-BsfHMYWW.js";import"./less-Y04PrZ-G.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
