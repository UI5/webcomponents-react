import{j as o}from"./iframe-C1nqIrP9.js";import{useMDXComponents as n}from"./index-rFzs5Is7.js";import{I as r,F as m}from"./CommandsAndQueries-D6-GYIyC.js";import{M as p,C as s}from"./blocks-CkwZnBbM.js";import"./Tag-BljHH2ny.js";import"./index-CYNCR5qY.js";import"./copy-DSaYeTfs.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DlnEJIfh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJt8uYMe.js";import"./index-BaOK2woW.js";import"./index-Dr-3VGmd.js";import"./Link-BNKugdyP.js";import"./index-DKOFmGpQ.js";import"./index-BIr8DdOC.js";import"./index-SO3IILH_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CASN5sm0.js";import"./addCustomCSSWithScoping-C0k6xtW8.js";import"./index-BswWmSbc.js";import"./information-BrOplxTY.js";import"./sys-enter-2-pukb5ZDW.js";import"./alert-DP5_e-py.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SAn7RIVc.js";import"./delete-DTPigX6U.js";import"./settings-lV_DBpeY.js";import"./NoData-DhN24gYE.js";import"./IllustratedMessage-DXEnmkA7.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CcxLmyYz.js";import"./index-f0ROwvGB.js";import"./index-P_SO3_3t.js";import"./slim-arrow-down-Bps0sYcn.js";import"./Input-D9vophLG.js";import"./ResponsivePopoverCommon.css-Eydupr0P.js";import"./ValueStateMessage.css-BBO2GkE0.js";import"./Suggestions.css-DgtKpdux.js";import"./ListBoxItemGroupTemplate-Dkfxy0pn.js";import"./ComboBoxItemGroup-CsjyYpDE.js";import"./ListItemBaseTemplate-4ujERwPI.js";import"./Token-CqPdRqE5.js";import"./ScrollEnablement-BIY6wVPD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-COxHhBS3.js";import"./ToggleButton-cQD1nunm.js";import"./SuggestionItem-DPnrRak_.js";import"./index-BdtdwVrB.js";import"./Option-BuhRYFqH.js";import"./index-dJuYV-LS.js";import"./SegmentedButton-o0d2AGWz.js";import"./index-j9YlDLaa.js";import"./Select-N_i4HA6q.js";import"./InvisibleMessage-D0KBEnYB.js";import"./slim-arrow-down-B2Ijjnqs.js";import"./index-qPS3eI2E.js";import"./index-RpM-44G_.js";import"./index-D-OYWN8_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwjgAEdE.js";import"./group-2-CDXCavaP.js";import"./sort-descending-B6gWrjyT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B2hB663M.js";import"./utils-DZwE1ugL.js";import"./index-DPXTvOgj.js";import"./index-DDyYLskJ.js";import"./index-D_OBrQEl.js";import"./navigation-down-arrow-COzuuEtq.js";import"./navigation-right-arrow-Uojl0M_c.js";import"./navigation-right-arrow-C2Cjybhy.js";import"./useCurrentTheme-CqppE4Rq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IMWhCO6M.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-2dKeNAYY.js";import"./paper-plane-FmM4DKiP.js";import"./index-C2Ui3emf.js";import"./less-y0Nr-cGj.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
