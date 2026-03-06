import{j as o}from"./iframe-geaynzT-.js";import{useMDXComponents as r}from"./index-Dy0P-MTk.js";import{I as n}from"./CommandsAndQueries-B6i0zlBz.js";import{M as m,C as p}from"./blocks-DvwiWHqk.js";import"./Tag-B3QRrnQ_.js";import"./index-D-nFJC4E.js";import"./copy-ww3KL2rX.js";import{F as s}from"./Footer-BsbiOiC7.js";import"./PageNotFound-BfSR_Vk2.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DjpnOgbB.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-nEWS4oVx.js";import"./index-D5uUZfuG.js";import"./index-CG-HWMDU.js";import"./index-CKM0CrDr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HivzyS7T.js";import"./addCustomCSSWithScoping-xbUSRjKw.js";import"./index-Bp_EOu-Q.js";import"./index-CTwiS7Jw.js";import"./index-sZJqmiwE.js";import"./information-BPLaT9Ap.js";import"./sys-enter-2-BM-hyHpl.js";import"./alert-BbpVY6El.js";import"./index-_qPK30Mb.js";import"./Illustrations-Da51eylt.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CvV10EhM.js";import"./delete-wfRZqLc2.js";import"./settings-CvCMUxfs.js";import"./NoData-r4RJuD6g.js";import"./NoFilterResults-Brt2dGQf.js";import"./index-C3GLDV3Z.js";import"./IllustratedMessage-DTZGdweY.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-ClFOA2Te.js";import"./Input-D718yOxL.js";import"./ResponsivePopoverCommon.css-BNVSGncI.js";import"./ValueStateMessage.css-BCq31M5q.js";import"./Suggestions.css-B2NS7aEt.js";import"./ListBoxItemGroupTemplate-CaN9gZpp.js";import"./ComboBoxItemGroup-Cc09CfZv.js";import"./ListItemBaseTemplate-B-UBUhMu.js";import"./Token-B-DIQD6O.js";import"./ScrollEnablement-DPeWyNUe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrjdizTB.js";import"./ToggleButton-CXmo7_Af.js";import"./multiselect-all-BOi-ndht.js";import"./SuggestionItem-C_3zoX6X.js";import"./index-C8LuF1Bv.js";import"./Option-BZsuWY7l.js";import"./index-DPfU6hxd.js";import"./SegmentedButton-CiK9dfWD.js";import"./index-Dwqy5Aze.js";import"./Select--P873eyr.js";import"./InvisibleMessage-CbKTPW6d.js";import"./index-BUI55KcM.js";import"./index-DlPKLGff.js";import"./index-CV_2N-M1.js";import"./index-vaOvjXNl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-be4ddmTM.js";import"./group-2-DID5u7R4.js";import"./sort-descending-B504Ry9y.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3_V7TUA.js";import"./utils-Dzhppj39.js";import"./index-BYmoNn4O.js";import"./index-BY9yrlLW.js";import"./index-BW0Q-ohg.js";import"./navigation-down-arrow-gLMgLysX.js";import"./navigation-right-arrow-hDy11WuW.js";import"./navigation-right-arrow-DK5EYtwV.js";import"./useCurrentTheme-CdjoVC5_.js";import"./index-DrHoGjWG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D19__XCT.js";import"./paper-plane-CFu3e08q.js";import"./index-CfLv6iWt.js";import"./less-DLnKLgv5.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
