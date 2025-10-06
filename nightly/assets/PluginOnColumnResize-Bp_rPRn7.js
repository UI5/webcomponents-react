import{j as o}from"./iframe-FqLIb5aJ.js";import{useMDXComponents as n}from"./index-BMlaAUsm.js";import{I as r,F as m}from"./CommandsAndQueries-C8KzZZ_g.js";import{M as p,C as s}from"./blocks-2y9I1Ee8.js";import"./Tag-8E3ttw9X.js";import"./index-B7xi-wqa.js";import"./copy-DHQOADmz.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DxSWo1xk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DrxJ3_v0.js";import"./index-CJCUd_sD.js";import"./index-CunGGXs0.js";import"./Link-D_zVjdUt.js";import"./index-ByRLHl7W.js";import"./index-DHR1LOgw.js";import"./index-DfAJ7eEY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlZw9a5e.js";import"./addCustomCSSWithScoping-BziWOAoD.js";import"./index-PGt_tfZb.js";import"./information-CWEUh2Nv.js";import"./sys-enter-2-D8dKPdhT.js";import"./alert-Dzhc-2EW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-bOLBCiA-.js";import"./delete-WbYkg9tQ.js";import"./settings-BvY4-0au.js";import"./NoData-BVmMTcxI.js";import"./IllustratedMessage-DAfC4sQR.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Bnd4PO4J.js";import"./index-BhNH-Xd3.js";import"./index-BB45oL63.js";import"./slim-arrow-down-Cx2k9oA1.js";import"./Input-D70gHpU4.js";import"./ResponsivePopoverCommon.css-CFYKUvZL.js";import"./ValueStateMessage.css-GEYmLDX1.js";import"./Suggestions.css-Xa6Cgh36.js";import"./ListBoxItemGroupTemplate-DRFgm5mq.js";import"./ComboBoxItemGroup-48OfHzJY.js";import"./ListItemBaseTemplate-BLuaGZej.js";import"./Token-DUre5J7V.js";import"./ScrollEnablement-Bzckwnc4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CciZFj9F.js";import"./ToggleButton-SneSiQBN.js";import"./SuggestionItem-7ulZP-bS.js";import"./index-NyaZasf4.js";import"./Option-CNOfeTCF.js";import"./index-FeMM_IUL.js";import"./SegmentedButton-BhR2I5WQ.js";import"./index-hEF3eP5L.js";import"./Select-DmZylSAc.js";import"./InvisibleMessage-Dqr9IMJW.js";import"./slim-arrow-down-DtJmXr8m.js";import"./index-IboMoMq3.js";import"./index-D43bVJxH.js";import"./index-MwCWU3y-.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CmlQCrfj.js";import"./group-2-Fz9-Rorb.js";import"./sort-descending-CMcEr8AV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CuNNSqVd.js";import"./utils-B1OcDcX1.js";import"./index-O_SIXxVn.js";import"./index-D7ZoZ11L.js";import"./index-DkAWhp6q.js";import"./navigation-down-arrow-ByHKfqMb.js";import"./navigation-right-arrow-NOv1xYoV.js";import"./navigation-right-arrow-C5yT6JM7.js";import"./useCurrentTheme-Dt12rjwM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_genVlm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BBKH6PEs.js";import"./paper-plane-CU0wuWEv.js";import"./index-BLV2QBiZ.js";import"./less-cExHlQNZ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
