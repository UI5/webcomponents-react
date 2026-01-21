import{j as o}from"./iframe-f3iLPpTx.js";import{useMDXComponents as n}from"./index-Cg-5LGOy.js";import{I as r,F as m}from"./CommandsAndQueries-ANshK3xd.js";import{M as p,C as s}from"./blocks-DoSJn-9n.js";import"./Tag-HMKYn_gR.js";import"./index-C4t1_KXY.js";import"./copy-BPmTOQZZ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CeGiqy_9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-TWvX3fxG.js";import"./index-oCC-c3oA.js";import"./index-DzXajydQ.js";import"./Link-EHnjrAaJ.js";import"./index-Dq8bnboK.js";import"./index-C3jxOnm0.js";import"./index-DY8Z5oY2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ce84hNWi.js";import"./addCustomCSSWithScoping-FBci05L8.js";import"./index-C81LpEbs.js";import"./information-D9tZEGE7.js";import"./sys-enter-2-DE9YD12B.js";import"./alert-BBZcuL-v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D9bzh1Z6.js";import"./delete-3k9ewCfi.js";import"./settings-C4qTrATZ.js";import"./NoData-DTrdJtGp.js";import"./IllustratedMessage-BSTzW0Sn.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BXAl_aeC.js";import"./index-D_kEJBb-.js";import"./index-Cyem6Ef9.js";import"./slim-arrow-down-BhjskzRk.js";import"./Input-BA2q8K-i.js";import"./ResponsivePopoverCommon.css-B8gBrPLb.js";import"./ValueStateMessage.css-seFb1qKi.js";import"./Suggestions.css-C81am98X.js";import"./ListBoxItemGroupTemplate-CI1tVLOZ.js";import"./ComboBoxItemGroup-BCkjIVdO.js";import"./ListItemBaseTemplate-BBr_9wKC.js";import"./Token-BzdV5wLi.js";import"./ScrollEnablement-BgAU8fOn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Czpv5A2n.js";import"./ToggleButton-CPD4HgrF.js";import"./SuggestionItem-ClSr8F10.js";import"./index-T7MLs8hf.js";import"./Option-CWKJzO5N.js";import"./index-_dyjDy1m.js";import"./SegmentedButton-BYRHNZSD.js";import"./index-8OcAdlHO.js";import"./Select-BnSQqeni.js";import"./InvisibleMessage-C0oVP_sH.js";import"./slim-arrow-down-6WKrBuBW.js";import"./index-cjK9zly0.js";import"./index-DXgYFRlO.js";import"./index-CRy0gMjM.js";import"./index-x-l5-c_J.js";import"./IconDesign-DXd8PPVF.js";import"./filter-XptaN1lH.js";import"./group-2-CObAZZZr.js";import"./sort-descending-D6cr4_48.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CFnD-yF-.js";import"./utils-BubI_VCY.js";import"./index-BUKlkCYI.js";import"./index-nGDSIC6S.js";import"./index-BRFWofe_.js";import"./navigation-down-arrow-HRklLRvN.js";import"./navigation-right-arrow-DnSqIm0M.js";import"./navigation-right-arrow-BU9xMcPj.js";import"./useCurrentTheme-CEll4Kb2.js";import"./index-u-NkBXly.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzIFx5-R.js";import"./paper-plane-ByFPrxB1.js";import"./index-DOXdSdDM.js";import"./less-Dz3GjE58.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
