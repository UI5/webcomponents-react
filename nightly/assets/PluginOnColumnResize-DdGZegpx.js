import{j as o}from"./iframe-B-JB9Mrg.js";import{useMDXComponents as r}from"./index-C6ab_87c.js";import{I as n}from"./CommandsAndQueries-BMpPCtQI.js";import{M as m,C as p}from"./blocks-gUSy1z8f.js";import"./Tag-rJaILc04.js";import"./index-BUD8Dloj.js";import"./copy-B23uPwnI.js";import{F as s}from"./Footer-BoXWBFNs.js";import"./PageNotFound-DwjQIJMb.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DaNK7-Ll.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CUeYoLvN.js";import"./index-UGbMf_4Y.js";import"./index-4LdkJtv9.js";import"./index-BmSIhnsV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_QxycfjS.js";import"./addCustomCSSWithScoping-DBFLD3Dt.js";import"./index-BNovRndr.js";import"./index-CxXKp92D.js";import"./index-C_JAtQ1_.js";import"./information-Bvi5gDZ4.js";import"./sys-enter-2-CDMo7mQ9.js";import"./alert-B5324jWv.js";import"./index-COHIvdEC.js";import"./Illustrations-BGg5U59s.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Be6NOHlY.js";import"./delete-3GTPVXil.js";import"./settings-DtUWdw7m.js";import"./NoData-CqmmXc4T.js";import"./NoFilterResults-BnmI-198.js";import"./index-CseK5512.js";import"./IllustratedMessage-BE_dLy6F.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-XeWxte10.js";import"./Input-DVI6zxdj.js";import"./ResponsivePopoverCommon.css-BukAVbLV.js";import"./ValueStateMessage.css-BGkMAg00.js";import"./Suggestions.css-BOQhUGDm.js";import"./ListBoxItemGroupTemplate-B5f3QW-p.js";import"./ComboBoxItemGroup-BED3ASNR.js";import"./ListItemBaseTemplate-DLFTdIKJ.js";import"./Token-BrjbTrZO.js";import"./ScrollEnablement-5XSvrzux.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Mn8j4CUx.js";import"./ToggleButton--NP7uZ1N.js";import"./multiselect-all-BkqJOriD.js";import"./SuggestionItem-BB1hjhsG.js";import"./index-CYoovnFi.js";import"./Option-hbNFYygs.js";import"./index-CIOInWay.js";import"./SegmentedButton-BUxCVNIT.js";import"./index-DQsL7B1E.js";import"./Select-CbAKq5TP.js";import"./InvisibleMessage-DXutdx3u.js";import"./index-DSKzdah0.js";import"./index-BwU-fEzR.js";import"./index-BtRXlCJP.js";import"./index-Cm1_U4l_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClesWLLH.js";import"./group-2-ClxNwCtd.js";import"./sort-descending-ig1DIecm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DrTPER5S.js";import"./utils-C0kltqQX.js";import"./index-DGnoGB6v.js";import"./index-BNBXaPeN.js";import"./index-BL0SVaRR.js";import"./navigation-down-arrow-C6vpMOiA.js";import"./navigation-right-arrow-C07xQ28g.js";import"./navigation-right-arrow-BIYn3DeP.js";import"./useCurrentTheme-CPkepCy-.js";import"./index-BvAhuiTe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ClKF0kCB.js";import"./paper-plane-DQ_mbMQX.js";import"./index-BVwW0K7f.js";import"./less-BfR-USy3.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
