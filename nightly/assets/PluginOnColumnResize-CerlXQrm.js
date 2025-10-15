import{j as o}from"./iframe-Dpln3x91.js";import{useMDXComponents as n}from"./index-BwM4zX9M.js";import{I as r,F as m}from"./CommandsAndQueries-D8ZM_J5V.js";import{M as p,C as s}from"./blocks-BU-hwsss.js";import"./Tag-CuuYxwWF.js";import"./index-gZoyk-EE.js";import"./copy-BmZL0gFG.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CDrhhElJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_G040s9.js";import"./index-R5iFeOqc.js";import"./index-B-tiWui7.js";import"./Link-B2EfPk0H.js";import"./index-BnwzWoqt.js";import"./index-BC7bHNAY.js";import"./index-C7xVtjbt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl1L_0sw.js";import"./addCustomCSSWithScoping-BEgX107E.js";import"./index-C9IWhIjk.js";import"./information-BNg_xE8V.js";import"./sys-enter-2-CRey8tmC.js";import"./alert-DebHUSqO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-dWrrqn7O.js";import"./delete-DKtOEY5u.js";import"./settings-DUogldWd.js";import"./NoData-B7KP2bRY.js";import"./IllustratedMessage-cTE9BIDm.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CQHrGMje.js";import"./index-0uDK0Vdr.js";import"./index-wbSF3N_Y.js";import"./slim-arrow-down-BxpwhQs1.js";import"./Input-B7euzJoo.js";import"./ResponsivePopoverCommon.css--1dLLGms.js";import"./ValueStateMessage.css-DTWUtWcx.js";import"./Suggestions.css-InLHnYp-.js";import"./ListBoxItemGroupTemplate-DbOWOTtN.js";import"./ComboBoxItemGroup-DTREEyXz.js";import"./ListItemBaseTemplate-DfSRrZFo.js";import"./Token-DR7cqsJm.js";import"./ScrollEnablement-DSS0lIGV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHCpwb9_.js";import"./ToggleButton-Dyi4d8KV.js";import"./SuggestionItem-C9K1LEXa.js";import"./index-D4J4Dqol.js";import"./Option-CiInW1SY.js";import"./index-CKt8E8QC.js";import"./SegmentedButton-FfaROJ8w.js";import"./index-BIF6S8BW.js";import"./Select-D4hMiJvv.js";import"./InvisibleMessage-kDq0cqsN.js";import"./slim-arrow-down-DotGOMkD.js";import"./index-DNSCkbXG.js";import"./index-ORaq6zeN.js";import"./index-DZSYYhge.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYVdaO0E.js";import"./group-2-CKHkgp4p.js";import"./sort-descending-NRuJXw_U.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEvmHykI.js";import"./utils-DqbrCZoJ.js";import"./index-CzSiOjHq.js";import"./index-CIHgB-fO.js";import"./index-vGs8Gvmn.js";import"./navigation-down-arrow-B-KwWelX.js";import"./navigation-right-arrow-BN6oWB-c.js";import"./navigation-right-arrow-auStrBJj.js";import"./useCurrentTheme-D2C-2146.js";import"./IndicationColor-DVw-fSM_.js";import"./index-eBQ2Ght0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D7wro6Bb.js";import"./paper-plane-BxXqHCwQ.js";import"./index-Bxt6ZcXW.js";import"./less-DKNEmMSk.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
