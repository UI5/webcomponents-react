import{j as o}from"./iframe-Dt3EMGkV.js";import{useMDXComponents as n}from"./index-B20WHrxF.js";import{I as r,F as m}from"./CommandsAndQueries-B8G4x6Z0.js";import{M as p,C as s}from"./blocks-BHc609zj.js";import"./Tag-BlFr4TrL.js";import"./index-4o5lIxTZ.js";import"./copy-CTtd4S6z.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DlmuqfHS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwsDjCru.js";import"./index-DYPFLkL0.js";import"./index-B13Eko7E.js";import"./Link-BFnbyO9N.js";import"./index-3ZVLHlpm.js";import"./index-ChSomlCw.js";import"./index-CGnaTP2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DIflbpx1.js";import"./addCustomCSSWithScoping--L6xjApc.js";import"./index-BTxuEF3n.js";import"./information-CdIvcuNT.js";import"./sys-enter-2-DUO5Ca52.js";import"./alert-AiSO8uTO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BXYYz_X6.js";import"./delete-CvK1FKxI.js";import"./settings-CVPUgzNe.js";import"./NoData-JwmSOzMe.js";import"./IllustratedMessage-CAmtVAA-.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B__4zQr4.js";import"./index-CYj9BOV8.js";import"./index-DNYTFpAf.js";import"./slim-arrow-down-pu6c9dFU.js";import"./Input-B3RJG3gm.js";import"./ResponsivePopoverCommon.css-aexR0yTU.js";import"./ValueStateMessage.css-yur_ejCi.js";import"./Suggestions.css-CLQcfKgH.js";import"./ListBoxItemGroupTemplate-CJgkBchq.js";import"./ComboBoxItemGroup-BSH89920.js";import"./ListItemBaseTemplate-BkUkk_X3.js";import"./Token-_e7dShod.js";import"./ScrollEnablement-CiA5ZjlZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dag2Pm4v.js";import"./ToggleButton-CebUIFNy.js";import"./SuggestionItem-4j5PUDIr.js";import"./index-By_4N1WL.js";import"./Option-C4-0WVuO.js";import"./index-C_4eaVm1.js";import"./SegmentedButton-Mnc5qxs7.js";import"./index-Z3zYgv8B.js";import"./Select-mMA7a--l.js";import"./InvisibleMessage-IeyuxUiP.js";import"./slim-arrow-down-BCpPF8dH.js";import"./index-CgfRqUmo.js";import"./index-2aEaKjNa.js";import"./index-BBLdtj_k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DvZOI5Qd.js";import"./group-2-CGfMPej9.js";import"./sort-descending-CrdG7dJf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D_NFJJg0.js";import"./utils-Dc3BExB0.js";import"./index-0ObJ8zA9.js";import"./index-DeXKqVJU.js";import"./index-CCZOqJvN.js";import"./navigation-down-arrow-CM9oa_p2.js";import"./navigation-right-arrow-DgXFepz4.js";import"./navigation-right-arrow-BkvomJoX.js";import"./useCurrentTheme-BjJaTJFz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DmvUDyzO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CtE2suF5.js";import"./paper-plane-LVrZWN71.js";import"./index-BKPK1xED.js";import"./less-DwozNvkG.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
