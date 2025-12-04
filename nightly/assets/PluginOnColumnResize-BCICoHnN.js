import{j as o}from"./iframe-DrPmn2Fl.js";import{useMDXComponents as n}from"./index-D0JiuHQ4.js";import{I as r,F as m}from"./CommandsAndQueries-DJtqUE3T.js";import{M as p,C as s}from"./blocks-BjYhsAle.js";import"./Tag-DTGJG_3A.js";import"./index-D7exUdgR.js";import"./copy-BYLHU9Z4.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D7tDF3LC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcboqTLf.js";import"./index-7KEOFJG9.js";import"./index-pqPyLDtB.js";import"./Link-DpbM7hv-.js";import"./index-CSSeCaDH.js";import"./index-BDgABtQ5.js";import"./index-CsBAZiQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D8f6CQWY.js";import"./addCustomCSSWithScoping-Dp7JQ0AP.js";import"./index-BryeGZHH.js";import"./information-B3e_XIJr.js";import"./sys-enter-2-BzGI5wIC.js";import"./alert-k9YiTQ21.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B6X-Ca7e.js";import"./delete-CetONo-j.js";import"./settings-ue12HTO0.js";import"./NoData-CWzySvQc.js";import"./IllustratedMessage-D0tB0cmi.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BPl5eSyH.js";import"./index-kY9ogU97.js";import"./index-D_3vZ1qW.js";import"./slim-arrow-down-BIYWTMM9.js";import"./Input-CpYyucC6.js";import"./ResponsivePopoverCommon.css-aFKlRj1z.js";import"./ValueStateMessage.css-B2kFKHCy.js";import"./Suggestions.css-BixA8_8b.js";import"./ListBoxItemGroupTemplate-DQIXrV5Z.js";import"./ComboBoxItemGroup-Dvg2tB_d.js";import"./ListItemBaseTemplate-B7R8y6E8.js";import"./Token-DhrdJ1Sg.js";import"./ScrollEnablement-DEcYIeHm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlHk0Rap.js";import"./ToggleButton-B5bHIjtc.js";import"./SuggestionItem-IqbCPKbs.js";import"./index-CL7xnthF.js";import"./Option-BkGTUapV.js";import"./index-Dc1nuJIz.js";import"./SegmentedButton-Bp7GzNGY.js";import"./index-CYkhTtIe.js";import"./Select-DFfAQ4b9.js";import"./InvisibleMessage-CRnN6wGW.js";import"./slim-arrow-down-ESf62i2o.js";import"./index-Bgu519fZ.js";import"./index-XZB3isdK.js";import"./index-Bo9OnBPA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYqChTor.js";import"./group-2-BSQvkUDM.js";import"./sort-descending-Dpcy382o.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C2pRBdY7.js";import"./utils-KyGbIlyC.js";import"./index-D_tUOp4t.js";import"./index-exVXgT8C.js";import"./index-CmB-uMll.js";import"./navigation-down-arrow-CwSBl4bt.js";import"./navigation-right-arrow-F8wuOD05.js";import"./navigation-right-arrow-lRMX6PjY.js";import"./useCurrentTheme-C35ceZMU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B3w1bjpQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CO6iPAax.js";import"./paper-plane-BAOIGT1i.js";import"./index-D4uoRC6c.js";import"./less-B5N43rAu.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
