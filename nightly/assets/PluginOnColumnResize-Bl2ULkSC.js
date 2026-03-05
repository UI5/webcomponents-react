import{j as o}from"./iframe-Ba5ZQio8.js";import{useMDXComponents as r}from"./index-rp1O3cN1.js";import{I as n}from"./CommandsAndQueries-Bbpx9ls1.js";import{M as m,C as p}from"./blocks-CO8PFwMs.js";import"./Tag-U7nVfWIj.js";import"./index-P8tdEHaz.js";import"./copy-B4CpXR8v.js";import{F as s}from"./Footer-C-jjr1fr.js";import"./PageNotFound-lWhn0Z7P.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CH2vUjVf.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BJPm0pTR.js";import"./index-CFpPfuDn.js";import"./index-D3zw9ZHH.js";import"./index-R7gtGlkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCyzTRrI.js";import"./addCustomCSSWithScoping-CUMS_4o0.js";import"./index-CQozdAin.js";import"./index-B2oTG2Uf.js";import"./index-DqQH8U51.js";import"./information-CmnD_cte.js";import"./sys-enter-2-a4cBCFrc.js";import"./alert-Zv2opSBs.js";import"./index-DW1zzZuq.js";import"./Illustrations-wmNg3JaM.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C6sFKivB.js";import"./delete-DpWoY4bq.js";import"./settings-2UoQFdLZ.js";import"./NoData-C27xDPCX.js";import"./NoFilterResults-BtdJqq3e.js";import"./index-CwYz5hj_.js";import"./IllustratedMessage-C8ShJTV8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-dZHfBDTm.js";import"./Input-DbuY-azO.js";import"./ResponsivePopoverCommon.css-Bx66l35z.js";import"./ValueStateMessage.css-Boe-nBHn.js";import"./Suggestions.css-DFdNzV6n.js";import"./ListBoxItemGroupTemplate-CWYgi82N.js";import"./ComboBoxItemGroup-CVco4pgy.js";import"./ListItemBaseTemplate-BwquVXRI.js";import"./Token-CMMQoehc.js";import"./ScrollEnablement-BrHNAnnn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Hwq3GH-8.js";import"./ToggleButton-By3KpJ3s.js";import"./multiselect-all-DAiXU-2t.js";import"./SuggestionItem-BPsWjU3E.js";import"./index-Bvh25QxP.js";import"./Option-qCFpPnNQ.js";import"./index-CMV_Yh7r.js";import"./SegmentedButton-4h52fUiV.js";import"./index-BdKH8mcH.js";import"./Select-BH5YNkkz.js";import"./InvisibleMessage-CV0WJIpw.js";import"./index-BpioeH42.js";import"./index-OMiO6QEU.js";import"./index-BdEsij6A.js";import"./index-DCLHA3aG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CvHE1b-Q.js";import"./group-2-JUxYdBxp.js";import"./sort-descending-BAVyXJMs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BoBNl2fW.js";import"./utils-BoIL1l7W.js";import"./index-DUksDTzt.js";import"./index-Bm8kf-zB.js";import"./index-Dvc5W7Lw.js";import"./navigation-down-arrow-CJVUiRV4.js";import"./navigation-right-arrow-C5ox3WV8.js";import"./navigation-right-arrow-BGQ1zxrV.js";import"./useCurrentTheme-Dl168NmZ.js";import"./index-B3SL5VMB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CIPw2XHC.js";import"./paper-plane-CvFEKYP7.js";import"./index-DidCFfMi.js";import"./less-DPv56Ll-.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
