import{j as o}from"./iframe-CK4LOCvj.js";import{useMDXComponents as r}from"./index-BqLtYoST.js";import{I as n,F as m}from"./CommandsAndQueries-BwelsOM0.js";import{M as p,C as s}from"./blocks-ZjQWLnry.js";import"./Tag-BHHtXuEO.js";import"./index-BFAmBcJW.js";import"./copy-BE3AKkMg.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-nI75W6Tx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW1io29o.js";import"./index-C1w0eQlR.js";import"./index-GePrpfQg.js";import"./Link-C72gLrWy.js";import"./index-BUxn-N40.js";import"./index-BKUd1pYK.js";import"./index-DPjO4Ph3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6YKOrWJ.js";import"./addCustomCSSWithScoping-CyChXc_w.js";import"./index-BIYQNCb4.js";import"./information-DVinbumE.js";import"./sys-enter-2-CxZg2yn9.js";import"./alert-q3RCUipA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChmyOthR.js";import"./delete-CLx7glTK.js";import"./settings-ayEvMgd1.js";import"./NoData-T4iCewut.js";import"./IllustratedMessage-Xv-ZhCNN.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DBPzYJyP.js";import"./index-D298oQB3.js";import"./slim-arrow-down-DWzWgWFr.js";import"./Input-iHhFMUKe.js";import"./ResponsivePopoverCommon.css-Dp8lV0BH.js";import"./ValueStateMessage.css-BPb3CYnx.js";import"./Suggestions.css-DJt8IkfU.js";import"./ListBoxItemGroupTemplate-DDfjb_sz.js";import"./ComboBoxItemGroup-rCQ_Opmd.js";import"./ListItemBaseTemplate-hDgjT7Em.js";import"./Token-BpRQuSqj.js";import"./ScrollEnablement-B4EaRXxx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-LFJPBSzx.js";import"./ToggleButton-nsqCEMCk.js";import"./SuggestionItem-BFaG5LNL.js";import"./index-Cph68JY2.js";import"./Option-Bqy7W0j8.js";import"./index-D_lH--Ko.js";import"./SegmentedButton-Lp1qLZgk.js";import"./index-DasWYOI-.js";import"./Select-D8-eeFJR.js";import"./InvisibleMessage-DCPpUX1P.js";import"./slim-arrow-down-Va97yZ0D.js";import"./index-sQs2olcQ.js";import"./index-Cm2ZTwYm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vs2PrjuQ.js";import"./group-2-Cs4zeWBJ.js";import"./sort-descending-CRZRYHRm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CNdNGQRA.js";import"./utils-BzxUxqTh.js";import"./index-iZ4-PPSv.js";import"./index-CHUetHtW.js";import"./index-C-2t_3GF.js";import"./navigation-down-arrow-BlzDPZtH.js";import"./navigation-right-arrow-Dd9NdxpN.js";import"./navigation-right-arrow-DZnGmzmd.js";import"./useCurrentTheme-CyiUas-f.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cb3L2AXo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPg5JnzM.js";import"./paper-plane-CvZdjZdd.js";import"./index-CWdAvJez.js";import"./less-CgzrIY7E.js";import"./index-Dwfx48-L.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
