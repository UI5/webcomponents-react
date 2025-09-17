import{j as o}from"./iframe-_UyBg_Hl.js";import{useMDXComponents as r}from"./index-DEEVvvo3.js";import{I as n,F as m}from"./CommandsAndQueries-0B2XTB0a.js";import{M as p,C as s}from"./blocks-CYzyNaRH.js";import"./Tag-CQlNZs2z.js";import"./index-5woB_pVn.js";import"./copy-BX3zmcvZ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-REkTP7LB.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DpskCw-c.js";import"./index-e_5k1_Nn.js";import"./index-DXgH8OvD.js";import"./Link-5ArX67S2.js";import"./addCustomCSSWithScoping-BV_2mez6.js";import"./index-LcJnWxTb.js";import"./index-x1moOr2G.js";import"./index-CbWaderx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-SEMy8FFe.js";import"./index-CCQAf2jY.js";import"./information-DYJp_bgk.js";import"./sys-enter-2-Bc61YsW4.js";import"./alert-Vjb3s5VB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BRPDjZI-.js";import"./delete-feXjq1P0.js";import"./settings-CfbDn0b2.js";import"./NoData-KNRhNzoE.js";import"./IllustratedMessage-BS_1IYHK.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-TH_0UP1M.js";import"./index-PnFbS3U_.js";import"./slim-arrow-down-qdV-4r_r.js";import"./Input-DIEfc7NS.js";import"./ResponsivePopoverCommon.css-DjgY9XeO.js";import"./ValueStateMessage.css-xNCah7OI.js";import"./Suggestions.css-pEdA0aWG.js";import"./ListBoxItemGroupTemplate-BUTFv0ua.js";import"./ComboBoxItemGroup-BDmTUb-I.js";import"./ListItemBaseTemplate-BjR5kqUG.js";import"./Token-C36Uamaf.js";import"./ScrollEnablement-BddgiWpw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYXiefij.js";import"./ToggleButton-BBZPk2By.js";import"./SuggestionItem-CTxEE-_R.js";import"./index-CQKDXWwe.js";import"./Option-0oUm9b3Y.js";import"./index-C8GhuzMH.js";import"./SegmentedButton-D9-1cTAl.js";import"./index-D3Vrf9MZ.js";import"./Select-CFMlTJjs.js";import"./InvisibleMessage-G4E3aSXE.js";import"./slim-arrow-down-BtfHa_9S.js";import"./useIsRTL-BKJsyXLQ.js";import"./index-Q841TG4t.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BerSEzZ1.js";import"./group-2-BbIVBsLi.js";import"./sort-descending-DNDy-Ho_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DD84l_xa.js";import"./utils-DlslC0su.js";import"./index-CevzIQBH.js";import"./index-BX6O9pgn.js";import"./index-Ck9crqy1.js";import"./navigation-down-arrow-CqYoF-4_.js";import"./navigation-right-arrow-HJTsoaPp.js";import"./navigation-right-arrow-D_O0ENz8.js";import"./useCurrentTheme-BVwt7H5k.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BWBgMRln.js";import"./debounce-D7W5PopO.js";import"./paper-plane-ZhsZU26w.js";import"./index-DjxLOnDD.js";import"./less-s7L_t8AQ.js";import"./index-BCeKQLJ1.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
