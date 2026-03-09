import{j as o}from"./iframe-CzTCZe7v.js";import{useMDXComponents as r}from"./index-CDGFt6A1.js";import{I as n}from"./CommandsAndQueries-DvEFwabB.js";import{M as m,C as p}from"./blocks-DeBlAQEU.js";import"./Tag-Czdm_FZb.js";import"./index-C0tHrsgM.js";import"./copy-BOjVvS6l.js";import{F as s}from"./Footer-DxyUJb9o.js";import"./PageNotFound-BAD2GAcl.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-pODzDmXr.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CZjSyYly.js";import"./index-DKruw7SF.js";import"./index-DzASyxpH.js";import"./index-C8dlP9nE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DPTQrRIc.js";import"./addCustomCSSWithScoping-Cq2MgCDz.js";import"./index-DIk2IhoZ.js";import"./index-wip9afZ2.js";import"./index-CXe4MOnZ.js";import"./information-Bqvi10T6.js";import"./sys-enter-2-DyCO0gh_.js";import"./alert-9P0VyDJW.js";import"./index-B7_ymrud.js";import"./Illustrations-D7TiwfCu.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-XYq-h-xr.js";import"./delete-CJZ8jZ6-.js";import"./settings-CnlAmuLP.js";import"./NoData-Dn8JPKdK.js";import"./NoFilterResults-Ch4fK2Wx.js";import"./index-EZ4lrPcS.js";import"./IllustratedMessage-D3dYBaOA.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BcDsDQKs.js";import"./Input-uQUrQiez.js";import"./ResponsivePopoverCommon.css-DFzVVW-E.js";import"./ValueStateMessage.css-Dmls9BNj.js";import"./Suggestions.css-C-LfaUWA.js";import"./ListBoxItemGroupTemplate-CjbpLuh1.js";import"./ComboBoxItemGroup-DC7I2Gnu.js";import"./ListItemBaseTemplate-CtxRxA0S.js";import"./Token-DyMWmvtx.js";import"./ScrollEnablement-CI2_tTC7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CirnuoCn.js";import"./ToggleButton-AwQV3-nU.js";import"./multiselect-all-DRIYr1gF.js";import"./SuggestionItem-DTt93yVG.js";import"./index-Dt1pNi0E.js";import"./Option-Dyof31Hh.js";import"./index-uzkhG3jh.js";import"./SegmentedButton-CKBTvj6y.js";import"./index-hEwlQYEv.js";import"./Select-i2pvVUiG.js";import"./InvisibleMessage-hOloPGzW.js";import"./index-Ct09JLpa.js";import"./index-CD5oLMvj.js";import"./index-D9t0fsRq.js";import"./index-CnvUSw0N.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vyg3niqB.js";import"./group-2-Cnon157i.js";import"./sort-descending-BcIk7rDN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DkbCRIZN.js";import"./utils-BAjUyFPH.js";import"./index-Dbih7k0J.js";import"./index-C8pH3MqW.js";import"./index-PnqtoMqU.js";import"./navigation-down-arrow-DGwNBNUU.js";import"./navigation-right-arrow-Dz1uqIkQ.js";import"./navigation-right-arrow-Bkjp4EVA.js";import"./useCurrentTheme-QlTE88eU.js";import"./index-BsOmmnd6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DxJ1Nm0H.js";import"./paper-plane-C3ZNhKsM.js";import"./index-FT_Ukt9o.js";import"./less-Bbajs4eq.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
