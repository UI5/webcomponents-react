import{j as o}from"./iframe-CptD6jcI.js";import{useMDXComponents as n}from"./index-fCXI9bYA.js";import{I as r,F as m}from"./CommandsAndQueries-DdKyoCdZ.js";import{M as p,C as s}from"./blocks-BIcH59f6.js";import"./Tag-BGUo9GB2.js";import"./index-iKMFJQaw.js";import"./copy-B9_rc4hl.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-v-kHc7hB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEYNy4qZ.js";import"./index-CBzPckl1.js";import"./index-Bhv4kUG7.js";import"./Link-BtaWbEJj.js";import"./index-CDMlRbU-.js";import"./index-B4fjS4Ci.js";import"./index-DUbGwyGv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqdlCgb.js";import"./addCustomCSSWithScoping-CNZcQBPm.js";import"./index-DF7XtlGw.js";import"./information-_8TOion-.js";import"./sys-enter-2-etHRmL56.js";import"./alert-DCc-ugqC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-_nfci7qO.js";import"./delete-CqONTPqs.js";import"./settings-DF-HP63C.js";import"./NoData-BQSzbPps.js";import"./IllustratedMessage-CgDjDEGv.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-hamlRjSE.js";import"./index-BD9r_une.js";import"./index-B60KVWKq.js";import"./slim-arrow-down-CjyrJWSM.js";import"./Input-uZgu1ujO.js";import"./ResponsivePopoverCommon.css-rLzLw65f.js";import"./ValueStateMessage.css-DacNSHpQ.js";import"./Suggestions.css-B1EVfhUM.js";import"./ListBoxItemGroupTemplate-BdVPyN1a.js";import"./ComboBoxItemGroup-DQ9b49px.js";import"./ListItemBaseTemplate-BppEr7SM.js";import"./Token-DpzwIFjG.js";import"./ScrollEnablement-DsrN78gg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYou9xin.js";import"./ToggleButton-BYYpa0_F.js";import"./SuggestionItem-C3L5PqbA.js";import"./index-Dah3OHlr.js";import"./Option-B6yV-Jjr.js";import"./index-C08PuBfi.js";import"./SegmentedButton-DLbXClyD.js";import"./index-BXswR0kA.js";import"./Select-Ctxh64Gj.js";import"./InvisibleMessage-F5htpLuT.js";import"./slim-arrow-down-BhV5Za_4.js";import"./index-Ci5kiTSu.js";import"./index-DbSLMhUs.js";import"./index-CTEd5I50.js";import"./index-BEEcV9zs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIq8q0V6.js";import"./group-2-CTSXlyDl.js";import"./sort-descending-D9jCbvYd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B0X8RYMV.js";import"./utils-gfG7vEZf.js";import"./index-CQoZ2SPB.js";import"./index-C5BgkxDg.js";import"./index-WVMq7O5Z.js";import"./navigation-down-arrow-DIeKF41M.js";import"./navigation-right-arrow-De_U2AQE.js";import"./navigation-right-arrow-DmOKdOeg.js";import"./useCurrentTheme-57gAgJUu.js";import"./index-uc7d53g3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-TxWHwyVI.js";import"./paper-plane-DAA1Wpfz.js";import"./index-O4n5RQLI.js";import"./less-C9e-TmeG.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
