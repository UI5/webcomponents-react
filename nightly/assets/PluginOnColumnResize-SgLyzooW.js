import{j as o}from"./iframe-BLa6WP-Y.js";import{useMDXComponents as r}from"./index-DmyZ7oDn.js";import{I as n,F as m}from"./CommandsAndQueries--XH3UvBD.js";import{M as p,C as s}from"./blocks-B3YWg1xO.js";import"./Tag-BvWs66nb.js";import"./index-BQvFUkOP.js";import"./copy-DLqEfzA0.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-mcIkmlOc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BxQvAqCu.js";import"./index-Dw-Jiryq.js";import"./index-CMlbrigZ.js";import"./Link-DFlOAi3a.js";import"./addCustomCSSWithScoping-EByzACcK.js";import"./index-o1aXZ_iF.js";import"./index-9PttVNs-.js";import"./index-CD532uFx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtI0CwXV.js";import"./index-DuOzvotb.js";import"./information-CXW8jYRn.js";import"./sys-enter-2-6G8ZBE6B.js";import"./alert-DchNyR7C.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoYaF1dP.js";import"./delete-CsD0pt1u.js";import"./settings-Cy0GWgCZ.js";import"./NoData-CMKGsDFP.js";import"./IllustratedMessage-DQknMDe-.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dz3NOO0O.js";import"./index-CcTeAWDa.js";import"./slim-arrow-down-DW1bb7Yi.js";import"./Input-DLv0_pwH.js";import"./ResponsivePopoverCommon.css-Ce2_DLGD.js";import"./ValueStateMessage.css-DNcxHwSS.js";import"./Suggestions.css-5bToJR4X.js";import"./ListBoxItemGroupTemplate-DcN5U3H5.js";import"./ComboBoxItemGroup-CzoRyeO7.js";import"./ListItemBaseTemplate-SBDokyJS.js";import"./Token-bqiPRfEa.js";import"./ScrollEnablement-8GN9BE9k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DfnsK1Kh.js";import"./ToggleButton-BilcMZKx.js";import"./SuggestionItem-CpI1i8qK.js";import"./index-mOpeWcnG.js";import"./Option-X5MvP6Ez.js";import"./index-Lxr2utNH.js";import"./SegmentedButton-DaKVnc87.js";import"./index-yYitgPgC.js";import"./Select-DFDzYy_c.js";import"./InvisibleMessage-BbXAREzN.js";import"./slim-arrow-down-CmTuLlvX.js";import"./useIsRTL-TNKtGqcG.js";import"./index-CgaQ0ztb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BbnAHyQW.js";import"./group-2-DRCf6JID.js";import"./sort-descending-C1zU_0_u.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5daVLzH.js";import"./utils-Dw1swK2v.js";import"./index-C4JZANr3.js";import"./index-CQlrF-yO.js";import"./index-CEje_66r.js";import"./navigation-down-arrow-BqiSx__M.js";import"./navigation-right-arrow-bAsVms0n.js";import"./navigation-right-arrow-TGhfCMRD.js";import"./useCurrentTheme-2htwq5Wd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BjE4yXnU.js";import"./debounce-D7W5PopO.js";import"./paper-plane-4_dk95Mh.js";import"./index-CyNfhGJe.js";import"./less-DNXIrkgN.js";import"./index-CkHcdUia.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
