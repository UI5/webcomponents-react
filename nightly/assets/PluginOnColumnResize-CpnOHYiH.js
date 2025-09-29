import{j as o}from"./iframe-CfR5iN1B.js";import{useMDXComponents as r}from"./index-WDvIe_cH.js";import{I as n,F as m}from"./CommandsAndQueries-Cn01gt7T.js";import{M as p,C as s}from"./blocks-CfXjvcLO.js";import"./Tag-BTK-zFQw.js";import"./index-DekWkQZr.js";import"./copy-CaX7ddbO.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dn_MoNch.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DqPScGjh.js";import"./index-s45nBPnw.js";import"./index-Dow-CDJC.js";import"./Link-DJBSV0Mu.js";import"./index-3b3tgeGr.js";import"./index-BlanoaUa.js";import"./index-B5r1lcgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSc69HNM.js";import"./addCustomCSSWithScoping-Bvh6JLqq.js";import"./index-DImzYd9b.js";import"./information-DTEN63Fk.js";import"./sys-enter-2-DpY8LIaY.js";import"./alert-C8yZ5BF8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BuLKvtHE.js";import"./delete-BbXKnRMD.js";import"./settings-BxehJt3x.js";import"./NoData-Ae1W9ndY.js";import"./IllustratedMessage-DErPlOIi.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-jjf-0K_T.js";import"./index-EUemHXmT.js";import"./slim-arrow-down-BHM8V5zI.js";import"./Input-He0T25IE.js";import"./ResponsivePopoverCommon.css-BviY2BN2.js";import"./ValueStateMessage.css-CnczpN40.js";import"./Suggestions.css-CQmh9058.js";import"./ListBoxItemGroupTemplate-BCj8Kfs3.js";import"./ComboBoxItemGroup-DkcG6b3D.js";import"./ListItemBaseTemplate-Blzwt2Im.js";import"./Token-N60Enl17.js";import"./ScrollEnablement-BjfNoSEh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-T7lCWKjJ.js";import"./ToggleButton-Cs4gjIfQ.js";import"./SuggestionItem-CK0Sz5p3.js";import"./index-D4yvNCEL.js";import"./Option-BU02mXmi.js";import"./index-3qdtC1nN.js";import"./SegmentedButton-Pf9-Y7FP.js";import"./index-CDsq0Nt0.js";import"./Select-UYNHdaxp.js";import"./InvisibleMessage-DezLmlSH.js";import"./slim-arrow-down-C2iRJmdC.js";import"./index-DVRgjs5B.js";import"./index-D1nK-6X7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CYAzIxHV.js";import"./group-2--stM7jmm.js";import"./sort-descending-BSd0dKpy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BgyEmt0S.js";import"./utils-NjcLVKqO.js";import"./index-zfHAJ78h.js";import"./index-5qf6VRKh.js";import"./index-DTS5qD7C.js";import"./navigation-down-arrow-_LdOzUHF.js";import"./navigation-right-arrow-B91yu81w.js";import"./navigation-right-arrow-D40jgVaK.js";import"./useCurrentTheme-4u8xBb4K.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BMJqj1Ya.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dlms__fq.js";import"./paper-plane-CUQizYzd.js";import"./index-Dj3TXnfq.js";import"./less-DL9fv9Kz.js";import"./index-D8rErjIk.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
