import{j as o}from"./iframe-Cg-RuwYg.js";import{useMDXComponents as r}from"./index-CqVZQP5J.js";import{I as n}from"./CommandsAndQueries-CCNeSOJY.js";import{M as m,C as p}from"./blocks-De0pSozH.js";import"./Tag-V3n4GJl9.js";import"./index-BHGbu9W7.js";import"./copy-BXGKGRUx.js";import{F as s}from"./Footer-CTf-mOt6.js";import"./PageNotFound-DwqRWqRN.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CrfV9ygo.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-C3bBlraS.js";import"./index-DVELchH2.js";import"./index-YSls2zGx.js";import"./index-DGDw3Svj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgpxYdce.js";import"./addCustomCSSWithScoping-Bd0YAyTr.js";import"./index-BxFP3rc9.js";import"./index-nSwdNT12.js";import"./index-B6oJNk8s.js";import"./information-qBgjFYpj.js";import"./sys-enter-2-DSPEUkAA.js";import"./alert-DJst6O04.js";import"./index-CY8SZPoP.js";import"./Illustrations-v3WzxnkA.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIAi3j86.js";import"./delete-C-KI_7kq.js";import"./settings-oIRtvoda.js";import"./NoData-BDP_IEEg.js";import"./NoFilterResults-BlWrxx-U.js";import"./index-BB6w120D.js";import"./IllustratedMessage-BYrs_IcW.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CSeqepqv.js";import"./Input-C-2HhvGM.js";import"./ResponsivePopoverCommon.css-D2lSx7rm.js";import"./ValueStateMessage.css-DkN6FOwk.js";import"./Suggestions.css-BDGZmoU-.js";import"./ListBoxItemGroupTemplate-u13clP1g.js";import"./ComboBoxItemGroup-LcR8oFEr.js";import"./ListItemBaseTemplate-ChIWqw4H.js";import"./Token-DxKy8YYq.js";import"./ScrollEnablement-c_lcpA4D.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1sqpTZP.js";import"./ToggleButton-BKT35s8c.js";import"./multiselect-all-yY1Gjh0M.js";import"./SuggestionItem-D9zhQdWy.js";import"./index-mKdHU01S.js";import"./Option-D2OLWFsd.js";import"./index-BrHam2mh.js";import"./SegmentedButton-fSm6hy8-.js";import"./index-Cuyb1IhG.js";import"./Select-D9yh6VdF.js";import"./InvisibleMessage-CoET6IX3.js";import"./index-xU6WKMgQ.js";import"./index-CMm8P10u.js";import"./index-CB3jgnxJ.js";import"./index-Cqp8XBPr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2LEP3fdj.js";import"./group-2-BapK3mru.js";import"./sort-descending-B5w5ciW-.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fpUgSqmh.js";import"./utils-D0-Jxfsv.js";import"./index-O6DHecp5.js";import"./index-CjXvbdRi.js";import"./index-Dv53xPDI.js";import"./navigation-down-arrow-AwB9VPOC.js";import"./navigation-right-arrow-DLzJRB6J.js";import"./navigation-right-arrow-Cg4BQbAg.js";import"./useCurrentTheme-B667EFhU.js";import"./index-inHBzG2X.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DNsGO6Wo.js";import"./paper-plane-DMimrq6_.js";import"./index-wdWM-9oK.js";import"./less-BSoK1MPR.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
