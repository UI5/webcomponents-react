import{j as o}from"./iframe-D3k-2Qmx.js";import{useMDXComponents as r}from"./index-BSBCExsS.js";import{I as n,F as m}from"./CommandsAndQueries-DsxWaHqI.js";import{M as p,C as s}from"./blocks-bv8Dsnai.js";import"./Tag-9PM7-eum.js";import"./index-By3VOOwb.js";import"./copy-Ba7LzWJS.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DoVxZ5W5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B4561E-8.js";import"./index-7likbAae.js";import"./index-CU7B0Jzs.js";import"./Link-CTDi8zx_.js";import"./index-CcT0HfRf.js";import"./index-ne93MLaG.js";import"./index-DsyKOjMu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVKdFd1t.js";import"./addCustomCSSWithScoping-BuaXJWbP.js";import"./index-aLtq1xU9.js";import"./information-Bs4ke0_q.js";import"./sys-enter-2-C1RuQ14F.js";import"./alert-CgXiLrEU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BC6U5u3W.js";import"./delete-DI_qDlFN.js";import"./settings-BvcEZPoD.js";import"./NoData-Xwr-RknH.js";import"./IllustratedMessage-z_u2-Wjs.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-AWIJ1fgK.js";import"./index-BB7_GtGd.js";import"./slim-arrow-down-DdlDKMGS.js";import"./Input-D_MVNcCW.js";import"./ResponsivePopoverCommon.css-BeJmjNzs.js";import"./ValueStateMessage.css-C-m_QvzY.js";import"./Suggestions.css-B6Gqc3Wb.js";import"./ListBoxItemGroupTemplate-XWF1A1vE.js";import"./ComboBoxItemGroup-DAQ1yURi.js";import"./ListItemBaseTemplate-DTj5CQF7.js";import"./Token-BVZhclFZ.js";import"./ScrollEnablement-BHiM0fB_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CIk7Var7.js";import"./ToggleButton-DRVTplqo.js";import"./SuggestionItem-C3X18_wI.js";import"./index-D_jUBjPN.js";import"./Option-5IxyV4uz.js";import"./index-Cn9shEoP.js";import"./SegmentedButton-hBWk1uUq.js";import"./index-Dk_2UEN6.js";import"./Select-CqXEAITh.js";import"./InvisibleMessage-DVDXe7QT.js";import"./slim-arrow-down-BNqq3rWg.js";import"./index-D-6NCyp_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D2gwwH7C.js";import"./group-2-Bzk8mn-l.js";import"./sort-descending-Cy8CjEGu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVgvonRF.js";import"./utils-BL7e06bc.js";import"./index-CKPOSyqX.js";import"./index-CSijjXyi.js";import"./index-szqBFdUN.js";import"./navigation-down-arrow-CqNaGyR0.js";import"./navigation-right-arrow-xbKna6K1.js";import"./navigation-right-arrow-CjkeGwpU.js";import"./useCurrentTheme-DFJPgjga.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dc1w_8Z2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BCYIk2li.js";import"./paper-plane-DWYsfwqu.js";import"./index-nr0VQw8N.js";import"./less-Cql1i3bl.js";import"./index-Cddzo8hT.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
