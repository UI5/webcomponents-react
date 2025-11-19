import{j as o}from"./iframe-DNMTfzpK.js";import{useMDXComponents as n}from"./index-BN2xRXE4.js";import{I as r,F as m}from"./CommandsAndQueries-p_oo0qut.js";import{M as p,C as s}from"./blocks-D7TGtWIi.js";import"./Tag-DMQsT8Q8.js";import"./index-T3fFkT4y.js";import"./copy-mCRNeeck.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-8GxD6bLE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-c_AmigIx.js";import"./index-B8yoe6T_.js";import"./index-3Dfb5Jbe.js";import"./Link-QK9m66TA.js";import"./index-CijDEz0A.js";import"./index-BmIqw6uo.js";import"./index-BXvVq-3Z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdXxvAEF.js";import"./addCustomCSSWithScoping-DGsOsNkK.js";import"./index-BVaTbyf5.js";import"./information-CfBdub9z.js";import"./sys-enter-2-D1yMqvha.js";import"./alert-ovSFIgO_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DVxNklXG.js";import"./delete-Bs_1Tn7y.js";import"./settings-yHuNvmRk.js";import"./NoData-CJ4fcNDV.js";import"./IllustratedMessage-DfVKbqiE.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DpgZmO3w.js";import"./index-BmyEQvU7.js";import"./index-C2f-DWtU.js";import"./slim-arrow-down-BeqBYoq7.js";import"./Input-D7FScK-r.js";import"./ResponsivePopoverCommon.css-BpovPhMy.js";import"./ValueStateMessage.css-jWH0iavP.js";import"./Suggestions.css-DVP1hS77.js";import"./ListBoxItemGroupTemplate-Ba2zWDfe.js";import"./ComboBoxItemGroup-BN1s9s3b.js";import"./ListItemBaseTemplate-mKi-cdJU.js";import"./Token-DJAtCUlu.js";import"./ScrollEnablement-eCP2Kegn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBFY19dC.js";import"./ToggleButton-DJDuyAgn.js";import"./SuggestionItem-Bgn_dqvA.js";import"./index-BYqQmGne.js";import"./Option-BWgO6mlW.js";import"./index-BwS7j3IJ.js";import"./SegmentedButton-tiebVN4C.js";import"./index-BcZz7Rtp.js";import"./Select-nYImCzGD.js";import"./InvisibleMessage-BAVpRLuQ.js";import"./slim-arrow-down-BINXR2kD.js";import"./index-DZaQ5P9X.js";import"./index-HBZBsTho.js";import"./index-B_xleZYk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCGyTjP8.js";import"./group-2-Ds3ldsuu.js";import"./sort-descending-B9wZIYmD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DrCxDrAT.js";import"./utils-PFbfoLst.js";import"./index-Cg0CgaE2.js";import"./index-Du0vGDLV.js";import"./index-B0pESpyZ.js";import"./navigation-down-arrow-B9yi9Vw4.js";import"./navigation-right-arrow-BuY4QW3G.js";import"./navigation-right-arrow-Do9NQWHs.js";import"./useCurrentTheme-CRXvomUG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ChmvSx0O.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CveHlrIa.js";import"./paper-plane-BV9fKxBA.js";import"./index-CeaY2sRv.js";import"./less-DalUIm1-.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
