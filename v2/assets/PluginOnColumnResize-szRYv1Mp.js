import{j as o}from"./iframe-CLqwDYWN.js";import{useMDXComponents as n}from"./index-cmVK5yXJ.js";import{I as r,F as m}from"./CommandsAndQueries-DltB0UQf.js";import{M as p,C as s}from"./blocks-Ua2ef061.js";import"./Tag-D4gpwYXq.js";import"./index-BLABW-V6.js";import"./copy-BFTyEUOW.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-hZOyNi4-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BAe0MMci.js";import"./index-dDRjuikd.js";import"./index-DbDqFPhM.js";import"./Link-CWlOLLsT.js";import"./index-Em70_hTG.js";import"./index-CZj6k55a.js";import"./index-Ddq0Vtwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Clukjtst.js";import"./addCustomCSSWithScoping-CDaW4Lcf.js";import"./index-BkxNRgLP.js";import"./information-yMtkqf_-.js";import"./sys-enter-2-DLul5qw8.js";import"./alert-BH_ko6Mf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYcEpgcd.js";import"./delete-AfqY1m-P.js";import"./settings-DbFb6seN.js";import"./NoData-Cht9VzEL.js";import"./IllustratedMessage-CDCtcvSa.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BMtskUoL.js";import"./index-Bg1HDO25.js";import"./index-CJ4By0nc.js";import"./slim-arrow-down-C22iVcoT.js";import"./Input-DXVKLo07.js";import"./ResponsivePopoverCommon.css-wZUp9iaM.js";import"./ValueStateMessage.css-D4s1Xohy.js";import"./Suggestions.css-DBdM4e2n.js";import"./ListBoxItemGroupTemplate-P6s8PqVr.js";import"./ComboBoxItemGroup-kZhQKBRF.js";import"./ListItemBaseTemplate-DOFjZ7UC.js";import"./Token-oKWILUju.js";import"./ScrollEnablement-BX1GdvuZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_pITSM2.js";import"./ToggleButton-CZWRO_uA.js";import"./SuggestionItem-CyojvZx5.js";import"./index-DwSivuZ5.js";import"./Option-BC429w4c.js";import"./index-DkRMg_n1.js";import"./SegmentedButton-DVrshPel.js";import"./index-DSXAZtDg.js";import"./Select-BR_Ti_op.js";import"./InvisibleMessage-DRB-gK4Q.js";import"./slim-arrow-down-BIHU5bm6.js";import"./index-CWDxWYIq.js";import"./index-BE3ugTFz.js";import"./index-BXY3diBI.js";import"./index-DiK104TW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCPxxjXq.js";import"./group-2-BJfUB2fk.js";import"./sort-descending-B2qNBOis.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BMP6kCoe.js";import"./utils-RGutoP-Y.js";import"./index-BJqt4hz8.js";import"./index-CF_2Gmzg.js";import"./index-CxjQeiDR.js";import"./navigation-down-arrow-DeQyn301.js";import"./navigation-right-arrow-Dei2x-FV.js";import"./navigation-right-arrow-Dtl4aa4d.js";import"./useCurrentTheme-DFPeZZlw.js";import"./index-oS5lCLsv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BnOr2gHb.js";import"./paper-plane-C4dG94mO.js";import"./index-DFRNsF2S.js";import"./less-DCuw3qxw.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
