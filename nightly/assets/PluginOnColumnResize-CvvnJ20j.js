import{j as o}from"./iframe-a0uMhM0K.js";import{useMDXComponents as r}from"./index-BsqnGYZV.js";import{I as n}from"./CommandsAndQueries-Daj0tnDY.js";import{M as m,C as p}from"./blocks-GWXZJNmq.js";import"./Tag-BaNCkHdE.js";import"./index-BfgNdjah.js";import"./copy-Ba79n2H6.js";import{F as s}from"./Footer-UprvpWI8.js";import"./PageNotFound-C4t5kuHt.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-YpZ0GhC2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-C9XRs14a.js";import"./index-BwlpwmJL.js";import"./index-1tRSjVgF.js";import"./index-CSZ4nu-Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-F25ehqhC.js";import"./addCustomCSSWithScoping-DssrUnNY.js";import"./index-BsmCDa7r.js";import"./index-CqObD5eZ.js";import"./index-C3E6FzVb.js";import"./information-DnAoFJ5t.js";import"./sys-enter-2-DG20pJAR.js";import"./alert-CaXXBJy4.js";import"./index-Dk4guAK8.js";import"./Illustrations-Do7SV7fL.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DI7as0nc.js";import"./delete-CHUFQ_Wx.js";import"./settings-0W4GYaRC.js";import"./NoData-C84zCcIQ.js";import"./NoFilterResults-CalnQnoH.js";import"./index-C3VG9dWs.js";import"./IllustratedMessage-6HZ5lnOp.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CQrOQkiM.js";import"./Input-cpApaPQM.js";import"./ResponsivePopoverCommon.css-CmTsDlHw.js";import"./ValueStateMessage.css-BRKXcIHj.js";import"./Suggestions.css-COVTnGJE.js";import"./ListBoxItemGroupTemplate-BmSBtRf2.js";import"./ComboBoxItemGroup-B5J72oZn.js";import"./ListItemBaseTemplate-Bvq28n1p.js";import"./Token-BTe6Dqe3.js";import"./ScrollEnablement-BVy3cq7b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B1cxGoSI.js";import"./ToggleButton-CDAZTyeN.js";import"./multiselect-all-BBXS-Ub9.js";import"./SuggestionItem-_JxlPU60.js";import"./index-D9Od-yF4.js";import"./Option-BcWQble4.js";import"./index-CO9KWXos.js";import"./SegmentedButton-BBAnOIL_.js";import"./index-aqjhKmIi.js";import"./Select-Dh14rH5k.js";import"./InvisibleMessage-izuFC8Iy.js";import"./index-BLYN_WbG.js";import"./index-yNBIcJ04.js";import"./index-DELXSaBp.js";import"./index-CDAiDCq4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BceI_bVx.js";import"./group-2-Dc2Sp64W.js";import"./sort-descending-uLy3-9KR.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DsvBCAhC.js";import"./utils-CPpPlE2x.js";import"./index-DsURjSQ9.js";import"./index-Cma-sbNZ.js";import"./index-C-nOKAHu.js";import"./navigation-down-arrow-KRMhOoWK.js";import"./navigation-right-arrow-DlOUO2TW.js";import"./navigation-right-arrow-DE4TJjHn.js";import"./useCurrentTheme-Bd3jJx1F.js";import"./index-BuPDweMG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-9TsxZjtE.js";import"./paper-plane-B5upeV1m.js";import"./index-BD5Z38ff.js";import"./less-DeRh0NtQ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
