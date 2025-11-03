import{j as o}from"./iframe-DYmejECO.js";import{useMDXComponents as n}from"./index-9gDZjqLB.js";import{I as r,F as m}from"./CommandsAndQueries-BUFKZ5oS.js";import{M as p,C as s}from"./blocks-WpvHKkxz.js";import"./Tag-BqbQuhLk.js";import"./index-B5pjKVih.js";import"./copy-Za-_Z-Tq.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dqndnsq3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtSXtxpp.js";import"./index-Cq6cdgcL.js";import"./index-D_-3_YTN.js";import"./Link-FVvXEWOc.js";import"./index-CQOsAJId.js";import"./index-B1aVKp_Z.js";import"./index-CHQEcSbZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6DutTHa.js";import"./addCustomCSSWithScoping-DW_smYaa.js";import"./index-E0O-rqDf.js";import"./information-DDszVPcm.js";import"./sys-enter-2-DGk9QDRk.js";import"./alert-B5ckm3Ge.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DBUOFfUF.js";import"./delete-CTZTKHWL.js";import"./settings-WjdBxW6C.js";import"./NoData-BJ0nX3_H.js";import"./IllustratedMessage-7-uYQkyZ.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CI6WTuUW.js";import"./index-B-CyWBp1.js";import"./index-CS6sH5Sy.js";import"./slim-arrow-down-BbgvtXR1.js";import"./Input-D3eSQpEN.js";import"./ResponsivePopoverCommon.css-CmjvYdZX.js";import"./ValueStateMessage.css-CUuHv4id.js";import"./Suggestions.css-CuvdJ8X6.js";import"./ListBoxItemGroupTemplate-4YjvPL6O.js";import"./ComboBoxItemGroup-CFEGhyle.js";import"./ListItemBaseTemplate-Fr0aNkev.js";import"./Token-B3KLY-_e.js";import"./ScrollEnablement-Dr9XQj7e.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-_Mx3JoTx.js";import"./ToggleButton-CXlL9fKv.js";import"./SuggestionItem-C7BSUng4.js";import"./index-B76y_UKV.js";import"./Option-Bea2riBZ.js";import"./index-DlTkKaiO.js";import"./SegmentedButton-CV7f3Z1-.js";import"./index-BZOk0oAR.js";import"./Select-B_CaPd95.js";import"./InvisibleMessage-goreZJqY.js";import"./slim-arrow-down-Ce0kb6v-.js";import"./index-DKdmNSnc.js";import"./index-D5TJ92nf.js";import"./index-cYgTFA9L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D7jAZBjp.js";import"./group-2-COqIM_cV.js";import"./sort-descending-CoPut5E-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUdvcpQW.js";import"./utils-g0fn1CkI.js";import"./index-CRr32CDK.js";import"./index-CDV5VZBY.js";import"./index-H9t-i14p.js";import"./navigation-down-arrow-C1ddotBT.js";import"./navigation-right-arrow-Ca-BUU1v.js";import"./navigation-right-arrow-D7Z03VwH.js";import"./useCurrentTheme-BGTNx-Lj.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DI1P8mhv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BWt4ksXr.js";import"./paper-plane-DMt5qfQg.js";import"./index-B8Foa8Pz.js";import"./less-D_PUL5W3.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
