import{j as o}from"./iframe-DncksSc9.js";import{useMDXComponents as r}from"./index-DHwy2cP9.js";import{I as n,F as m}from"./CommandsAndQueries-CDnFth_H.js";import{M as p,C as s}from"./blocks-CrR4TToZ.js";import"./Tag-CydY6GNK.js";import"./index-Bxx2fk60.js";import"./copy-DLEpwWX6.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-onwCzFR9.js";import"./preload-helper-PPVm8Dsz.js";import"./index--l4k2_pu.js";import"./index-LgvpS8l8.js";import"./index-DM-1F5s9.js";import"./Link-DA9rizI6.js";import"./index-DjMKVIn1.js";import"./index-9yiQ979H.js";import"./index-ozB3DgLW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0ZXAWvt.js";import"./addCustomCSSWithScoping-CHaIArZr.js";import"./index-Bbgh-_Am.js";import"./information-DaRpWkOX.js";import"./sys-enter-2-oWYvZ3n3.js";import"./alert-DDv07Q-F.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CtelhZjf.js";import"./delete-C8B1Co0i.js";import"./settings-B4D9jFyf.js";import"./NoData-0pXCNlwj.js";import"./IllustratedMessage-Biu-Y2PO.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DLX-UAid.js";import"./index-Cl9Lgdz7.js";import"./slim-arrow-down-Dw4qZkUc.js";import"./Input-HjE4MzLi.js";import"./ResponsivePopoverCommon.css-D7l99RH0.js";import"./ValueStateMessage.css-CDVm0-OH.js";import"./Suggestions.css-Di4bJ4Mv.js";import"./ListBoxItemGroupTemplate-BwHMeEo2.js";import"./ComboBoxItemGroup-CoTRrzsz.js";import"./ListItemBaseTemplate-DgydtAbW.js";import"./Token-Cmmtifzz.js";import"./ScrollEnablement-P--ZLWUn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-OppmVys6.js";import"./ToggleButton-DKYgle8i.js";import"./SuggestionItem-DgjKJ3SY.js";import"./index-DeJkkzWj.js";import"./Option-DDPjWDk1.js";import"./index-JrTo95Fm.js";import"./SegmentedButton-CLC_XxdM.js";import"./index-B_8t13HI.js";import"./Select-D1ki5xZv.js";import"./InvisibleMessage-B0PSwWLP.js";import"./slim-arrow-down-BB45oQEO.js";import"./index-83abA5iC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DaZDbBT4.js";import"./group-2-B5P3PhAn.js";import"./sort-descending-VXAY9Zz-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B70SChhh.js";import"./utils-Qp_0Ohai.js";import"./index-CKQ5y9RK.js";import"./index-DcM8rOK1.js";import"./index-Bn_XXlzK.js";import"./navigation-down-arrow-DE2B6sGV.js";import"./navigation-right-arrow-zAMyMa8Q.js";import"./navigation-right-arrow-CzaD2I1v.js";import"./useCurrentTheme-DwePz3I6.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D-zrcSGE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-SpXXo_HP.js";import"./paper-plane-CXqmWy3W.js";import"./index-CIKjtRh_.js";import"./less-CeDgCnwC.js";import"./index-CqDygOHO.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
