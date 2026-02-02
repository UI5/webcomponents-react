import{j as o}from"./iframe-Cv4sgl-6.js";import{useMDXComponents as n}from"./index-CBIpMKi2.js";import{I as r,F as m}from"./CommandsAndQueries-DF8E8wiu.js";import{M as p,C as s}from"./blocks-DPiPd9tl.js";import"./Tag-BCHKI4FR.js";import"./index-DcbEzSTS.js";import"./copy-Bby_UTo9.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-INQp-hT_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbeCayQT.js";import"./index-CtOMiTIA.js";import"./index-CeG26Jn9.js";import"./Link-BXe55YD0.js";import"./index-AkExkdLb.js";import"./index-CP4yHlqi.js";import"./index-C5UblPZZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CEw8P-vI.js";import"./addCustomCSSWithScoping-ChLo0vcI.js";import"./index-BdK0aYpg.js";import"./information-D12ZJp7Z.js";import"./sys-enter-2-B0uzD6GZ.js";import"./alert-BQ9eRDhW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C2ITYkkp.js";import"./delete-DQtRiTSG.js";import"./settings-Dk0A1K4B.js";import"./NoData-BOAn2TmF.js";import"./IllustratedMessage-BAzjlPuO.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DADu6Yhz.js";import"./index-CAs4bF1N.js";import"./index-rA2Tcjvx.js";import"./slim-arrow-down-Bf6Fui7_.js";import"./Input-xGZQJYeP.js";import"./ResponsivePopoverCommon.css-Cw4xn9Xp.js";import"./ValueStateMessage.css-DE-funzq.js";import"./Suggestions.css-C80GUOWK.js";import"./ListBoxItemGroupTemplate-CQWOTPZ7.js";import"./ComboBoxItemGroup-BLdB-iSO.js";import"./ListItemBaseTemplate--vPa8nag.js";import"./Token-CwYpSxuy.js";import"./ScrollEnablement-v-_rsCFF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CTpk5hQL.js";import"./ToggleButton-B-VaW9fv.js";import"./SuggestionItem-C0Y5SJOc.js";import"./index-C5Q4zcFL.js";import"./Option-CSv6aS-H.js";import"./index-mZlz45Id.js";import"./SegmentedButton-pcsF7Uy5.js";import"./index-Drcf0CjP.js";import"./Select-ChvSMp55.js";import"./InvisibleMessage-BiO2cmNz.js";import"./slim-arrow-down-DDixet6I.js";import"./index-fR1ydeI4.js";import"./index-t4ibtP2x.js";import"./index-Frn2CwUI.js";import"./index-C00ZbNBs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMHUA17f.js";import"./group-2-DKFJVXPV.js";import"./sort-descending-BZ_eceG8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CONmEwPQ.js";import"./utils-ClsJZxE7.js";import"./index-CKCMkb7R.js";import"./index-DF3mQroB.js";import"./index-rBbRsWS-.js";import"./navigation-down-arrow-rnyvA5q9.js";import"./navigation-right-arrow-Cg2lGj65.js";import"./navigation-right-arrow-DfDNI7Vj.js";import"./useCurrentTheme-Dq6DmLkr.js";import"./index-D6CCWCEn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-mQ6_8rLF.js";import"./paper-plane-Dda63Mdm.js";import"./index-DYNvOxul.js";import"./less-mQVhCLsg.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
