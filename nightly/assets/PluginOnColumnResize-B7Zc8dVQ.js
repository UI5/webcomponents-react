import{j as o}from"./iframe-DLRMrfR_.js";import{useMDXComponents as n}from"./index-7UnH5ZCU.js";import{I as r,F as m}from"./CommandsAndQueries-D6NirpIC.js";import{M as p,C as s}from"./blocks--r6oFhly.js";import"./Tag-zetZkNsl.js";import"./index-qvcEmQpJ.js";import"./copy-Loq6ZFpK.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DXpJF9zq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwoJQxQH.js";import"./index-D2MDEhSl.js";import"./index-tVwrcd6W.js";import"./Link-CBt9loeM.js";import"./index-kj7rqJLC.js";import"./index-DsFidw_9.js";import"./index-xtEoLRb_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMq-LIht.js";import"./addCustomCSSWithScoping-Ca5vBaM2.js";import"./index-BPd73hWD.js";import"./information-zAO2pP7J.js";import"./sys-enter-2-CCKngdgf.js";import"./alert-B3SXl-8D.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Du6F5iDJ.js";import"./delete-BwPLte86.js";import"./settings-DTgx2sz4.js";import"./NoData-D0S9YqWQ.js";import"./IllustratedMessage-Kd9xQwRs.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-sBTvjUoE.js";import"./index--m2P8UtU.js";import"./index-BotVherK.js";import"./slim-arrow-down-DNog2_xn.js";import"./Input-CcN4YVMF.js";import"./ResponsivePopoverCommon.css-h4F5UI1l.js";import"./ValueStateMessage.css-BSnO8zIp.js";import"./Suggestions.css-Cp_HsrZq.js";import"./ListBoxItemGroupTemplate-BJumqT4i.js";import"./ComboBoxItemGroup-CbKVr_4I.js";import"./ListItemBaseTemplate-Da4x_292.js";import"./Token-CW6mgtq8.js";import"./ScrollEnablement-Bz5iwlCG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Df0gJlCx.js";import"./ToggleButton-BOkY-G3n.js";import"./SuggestionItem-DaZJKeIe.js";import"./index-BErLdPcq.js";import"./Option-vNfFuRF2.js";import"./index-BBnywNed.js";import"./SegmentedButton-BaBICXYr.js";import"./index-BB-WV-go.js";import"./Select-CVNbNvaC.js";import"./InvisibleMessage-6vcGDyDm.js";import"./slim-arrow-down-B4rbpJOP.js";import"./index-FoBVlpGj.js";import"./index-CLJ5W-kZ.js";import"./index-DZE8mdic.js";import"./index-1oIhOKBZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrpZAc5e.js";import"./group-2-DOYg5UtM.js";import"./sort-descending-DC1HxPJi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BpRoThxi.js";import"./utils-CKmkWZ04.js";import"./index-OyOMojac.js";import"./index-6gZLQIzr.js";import"./index-WnnzYQ2a.js";import"./navigation-down-arrow-D-m4CbH4.js";import"./navigation-right-arrow-DHewavL_.js";import"./navigation-right-arrow-CTPwzPlI.js";import"./useCurrentTheme-BL04Ku5N.js";import"./index-Dmpy7ykn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-OpbkKVuD.js";import"./paper-plane-B2UAJbES.js";import"./index-DRoHFPpy.js";import"./less-K3WvuTue.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
