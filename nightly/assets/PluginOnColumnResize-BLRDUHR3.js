import{j as o}from"./iframe-DFBm-DSq.js";import{useMDXComponents as r}from"./index-DN1lWEds.js";import{I as n,F as m}from"./CommandsAndQueries-Dwesrog0.js";import{M as p,C as s}from"./blocks-B7zGvzyh.js";import"./Tag-CMC3yhYK.js";import"./index-i9Tuo-S4.js";import"./copy-BOgwG0pC.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CUJGcFCn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDCsv2ep.js";import"./index-DRIF-U0p.js";import"./index-CEGh04ma.js";import"./Link-BlxVb8ea.js";import"./index-s9mPNrYF.js";import"./index-B0ajYEze.js";import"./index-D-vZdY3z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqvN-tZt.js";import"./addCustomCSSWithScoping-DzzI1i6g.js";import"./index-BYzkCeld.js";import"./information-z2AwmlNQ.js";import"./sys-enter-2-DSpMbDS0.js";import"./alert-BRFe_Sc9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bl9mqRZp.js";import"./delete-DxCiKEE4.js";import"./settings-DzhyxtkM.js";import"./NoData-DgE1Sh_E.js";import"./IllustratedMessage-BVbLtyE0.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-JnTxKdea.js";import"./index-jn-3vf8a.js";import"./slim-arrow-down-DRJmqDnV.js";import"./Input-DSVZUACP.js";import"./ResponsivePopoverCommon.css-CnMcrjsQ.js";import"./ValueStateMessage.css-BbtbR7Of.js";import"./Suggestions.css-DijJF9RT.js";import"./ListBoxItemGroupTemplate-uBeRRDby.js";import"./ComboBoxItemGroup-By5YcNLI.js";import"./ListItemBaseTemplate-DA8m0mUv.js";import"./Token-CNQzMPAi.js";import"./ScrollEnablement-BdJYzqT4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DGWJdbo7.js";import"./ToggleButton-VEbquAnE.js";import"./SuggestionItem-CfA6oYQG.js";import"./index-BTI_jG21.js";import"./Option-CzTdab4u.js";import"./index-ggGTc7ky.js";import"./SegmentedButton-Ddd1pMGI.js";import"./index-z1KVOKvO.js";import"./Select-9KEamWxt.js";import"./InvisibleMessage-CWFUnfEF.js";import"./slim-arrow-down-B6t_l0xN.js";import"./index-Cz-izgT1.js";import"./index-CjzbCvai.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4iI4qOF.js";import"./group-2-C_4wDfjC.js";import"./sort-descending-s1eyoV1T.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DEepbVcE.js";import"./utils-B1rOOgKS.js";import"./index-BvAYHJB3.js";import"./index-Bw_MCDBq.js";import"./index-BdL1x6lY.js";import"./navigation-down-arrow-CIjk2tcP.js";import"./navigation-right-arrow-q3_6ucGP.js";import"./navigation-right-arrow-kSqlvs_O.js";import"./useCurrentTheme-C2XPwL-I.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C1Lxv1Jm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-UMzUL51_.js";import"./paper-plane-Douct2lq.js";import"./index-Z3ts_iK1.js";import"./less-BMO93kr6.js";import"./index-BTeNJtiF.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
