import{j as o}from"./iframe-DAxVciiO.js";import{useMDXComponents as n}from"./index-h_8BIj8E.js";import{I as r,F as m}from"./CommandsAndQueries-DAf-gTsq.js";import{M as p,C as s}from"./blocks-V6tY60BP.js";import"./Tag-CfpPKB5J.js";import"./index-Cl51mnxs.js";import"./copy-DS8F9wTV.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-p9nnaNLV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQeQ_3Br.js";import"./index-BTWHfyOb.js";import"./index-CXz3G2II.js";import"./Link-CPXkUhXc.js";import"./index-DtbiWkK2.js";import"./index-C2J6ydOt.js";import"./index-45VXzBs0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqjBRadn.js";import"./addCustomCSSWithScoping-B-5Zxa-U.js";import"./index-x-HMM4OA.js";import"./information-BJmehL1Z.js";import"./sys-enter-2-CCej0FVR.js";import"./alert-DT2E8uxg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CFff7xit.js";import"./delete-DbGDhc3E.js";import"./settings-BDyusSsU.js";import"./NoData-XqdFgBoh.js";import"./IllustratedMessage-Bp6_xgPq.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CHKD9vVt.js";import"./index-BkJQaYIU.js";import"./index-PApUnrQh.js";import"./slim-arrow-down-DOx_O52b.js";import"./Input-BFNvfe1M.js";import"./ResponsivePopoverCommon.css-DUa--h-C.js";import"./ValueStateMessage.css-B-JXAMRh.js";import"./Suggestions.css-l1R1Q3Wi.js";import"./ListBoxItemGroupTemplate-CKUg1mHM.js";import"./ComboBoxItemGroup-DaYPy346.js";import"./ListItemBaseTemplate-CpDt3VEY.js";import"./Token-BIrB-fXe.js";import"./ScrollEnablement-IaFlv5sG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DHZqKCWt.js";import"./ToggleButton-BXfnrvIj.js";import"./SuggestionItem-PiaokgXw.js";import"./index-BetiTQM5.js";import"./Option-BtMT1Oqj.js";import"./index-O9Cki_UE.js";import"./SegmentedButton-CsbFykOo.js";import"./index-kd3IkrmG.js";import"./Select-DQvn5TjZ.js";import"./InvisibleMessage-CJvoI51j.js";import"./slim-arrow-down-DI99uMIa.js";import"./index-DK-JaRrB.js";import"./index-LLkC_BTv.js";import"./index-B10fvOaR.js";import"./index-Bm6hAg8x.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTq-0MlA.js";import"./group-2-dlAvKLPk.js";import"./sort-descending-DS-dcpyJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_vvkfygM.js";import"./utils-BF_zpjgJ.js";import"./index-B-11WzHg.js";import"./index-Dd31BDFj.js";import"./index-D_srWwSh.js";import"./navigation-down-arrow-HO4UVtgk.js";import"./navigation-right-arrow-BINfOxqh.js";import"./navigation-right-arrow-DRlFirFz.js";import"./useCurrentTheme-C2GdyHiC.js";import"./index-CBxPLiTj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ca2uhQ15.js";import"./paper-plane-D7cPCcgX.js";import"./index-DocLDr0y.js";import"./less-CqbE9adU.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
