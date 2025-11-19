import{j as o}from"./iframe-DEt5SpxN.js";import{useMDXComponents as n}from"./index-D4hcUogq.js";import{I as r,F as m}from"./CommandsAndQueries-BPAKOD0B.js";import{M as p,C as s}from"./blocks-CbBrNn_2.js";import"./Tag-Btd7K0TJ.js";import"./index-Bn-DAxDV.js";import"./copy-DO8SZxEM.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BVHpRQOq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C60Z0fiQ.js";import"./index-BBkT8flo.js";import"./index-DQCvCv0f.js";import"./Link-QmS19gJn.js";import"./index-Ct7FOHD-.js";import"./index-aE62-2rm.js";import"./index-BgkB1LC-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L-EUKjf-.js";import"./addCustomCSSWithScoping-DWFhiVTm.js";import"./index-Cgb532fA.js";import"./information-W2yufBl5.js";import"./sys-enter-2-QAd8vpRe.js";import"./alert-Bh8lKzJU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcjM0_PX.js";import"./delete-COMiZuoG.js";import"./settings-Dr7Dz5uy.js";import"./NoData-BTrfsGm2.js";import"./IllustratedMessage-CVkgZe_S.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DdPCGDkQ.js";import"./index-DegFbmY9.js";import"./index-DRGeR7Cs.js";import"./slim-arrow-down-CgwBPz7g.js";import"./Input-CkfVEmR9.js";import"./ResponsivePopoverCommon.css-4fjWBy7h.js";import"./ValueStateMessage.css-BuVzQMo_.js";import"./Suggestions.css-CTEqZ7Jq.js";import"./ListBoxItemGroupTemplate-DSP_W8aI.js";import"./ComboBoxItemGroup-BT8bK6Wu.js";import"./ListItemBaseTemplate-cjvzi6zR.js";import"./Token-wBbWayB1.js";import"./ScrollEnablement-B6pFrG42.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BTQunUKa.js";import"./ToggleButton-D2MXehba.js";import"./SuggestionItem-Dj_zg9IL.js";import"./index-KKknYiyd.js";import"./Option-Cuq8HYx9.js";import"./index-dFGKlIjF.js";import"./SegmentedButton-f9AnvEva.js";import"./index-DScPGxep.js";import"./Select-DsO-cvnD.js";import"./InvisibleMessage-_ZcUiZFQ.js";import"./slim-arrow-down-Da8Aw9RY.js";import"./index-CvJI_k_L.js";import"./index-DCTt2WWj.js";import"./index-F4cfNB22.js";import"./IconDesign-DXd8PPVF.js";import"./filter-NSZF4DBT.js";import"./group-2-BG7X54j2.js";import"./sort-descending-DPBE9T3s.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk4rB77W.js";import"./utils-BLvTxsGy.js";import"./index-D-r2RDzW.js";import"./index-DmcsvV0M.js";import"./index-C1JwcYBj.js";import"./navigation-down-arrow-CWO8eaa_.js";import"./navigation-right-arrow-BJ1HFNO9.js";import"./navigation-right-arrow-DPSwNoIQ.js";import"./useCurrentTheme-BOBJiUUr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-w3A3CH3e.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D6kqfXmQ.js";import"./paper-plane-YrBXnPrz.js";import"./index-DkV1yrrg.js";import"./less-DrAkGCkV.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
