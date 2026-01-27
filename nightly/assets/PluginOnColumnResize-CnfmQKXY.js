import{j as o}from"./iframe-mz-DPMfO.js";import{useMDXComponents as n}from"./index-BQe-Y6f4.js";import{I as r,F as m}from"./CommandsAndQueries-CNdgb_xD.js";import{M as p,C as s}from"./blocks-CqHnwxUT.js";import"./Tag-mNyMFg7D.js";import"./index-wUrz4SBY.js";import"./copy-40awRikg.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B0z8hj4E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Da-CbngW.js";import"./index-D9y5V_y0.js";import"./index-BPrj4A7u.js";import"./Link-BKhYH1SV.js";import"./index-3wg9O5k7.js";import"./index-B9dZeu2z.js";import"./index-VFO9WUy1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-idDvu4gP.js";import"./addCustomCSSWithScoping-DOUHBih7.js";import"./index--R_eUibk.js";import"./information-DMiSc-jE.js";import"./sys-enter-2-Ll_1TI3l.js";import"./alert-CKymAgR2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cm2BS3GA.js";import"./delete-G5EHOAnz.js";import"./settings-CsivxwAE.js";import"./NoData-BxE6Tv_8.js";import"./IllustratedMessage-DSE8qKy3.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DxOlC27G.js";import"./index-DNTjClb-.js";import"./index-HIa2ArXa.js";import"./slim-arrow-down-D5GhCIze.js";import"./Input-DKhFBeXu.js";import"./ResponsivePopoverCommon.css-Dw0qvCvb.js";import"./ValueStateMessage.css-aIP2Mnhs.js";import"./Suggestions.css-fWWNrwHO.js";import"./ListBoxItemGroupTemplate-nanEm9hw.js";import"./ComboBoxItemGroup-Dvkzxw9l.js";import"./ListItemBaseTemplate-UDeydQID.js";import"./Token-zxfxV2UY.js";import"./ScrollEnablement-2SSah3lR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D8bDYcBG.js";import"./ToggleButton-BX6-NLYV.js";import"./SuggestionItem-D4XueI-M.js";import"./index-BT-CCgox.js";import"./Option-C3T5_tXM.js";import"./index-BfUyajly.js";import"./SegmentedButton-DllV5zlW.js";import"./index-DDRv_OXW.js";import"./Select-BdUDnM2I.js";import"./InvisibleMessage-BIbkbdCE.js";import"./slim-arrow-down-Bk0xFqDz.js";import"./index-DKMucjjn.js";import"./index-D6PoFlyg.js";import"./index-CNllsCPa.js";import"./index-CDMzJTvn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DA7T2Rl3.js";import"./group-2-Bwsdx7qx.js";import"./sort-descending-Btj6h9pS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5M6Mwa8.js";import"./utils-DCG9zNvg.js";import"./index-DIJKpGCJ.js";import"./index-DWu6poIj.js";import"./index-DiIoiFSd.js";import"./navigation-down-arrow-CBdPnBQr.js";import"./navigation-right-arrow-DIpgwEVw.js";import"./navigation-right-arrow-C1ncpOSj.js";import"./useCurrentTheme-BtI3wPUE.js";import"./index-Bi5Z9u5V.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CcIdQY8X.js";import"./paper-plane-DQSNVPXE.js";import"./index-Bv3BJuLo.js";import"./less-DD1AM41T.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
