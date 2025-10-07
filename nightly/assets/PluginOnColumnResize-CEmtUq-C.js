import{j as o}from"./iframe-DWPhu-XW.js";import{useMDXComponents as n}from"./index-CTKrG-Il.js";import{I as r,F as m}from"./CommandsAndQueries-CU5SVthr.js";import{M as p,C as s}from"./blocks-CEz7tllO.js";import"./Tag-Dba4-MU4.js";import"./index-Bdh_RTY9.js";import"./copy-DPKhld63.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DexyH83g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cr6-mnTI.js";import"./index-BO-QmtYo.js";import"./index-CiWXYZya.js";import"./Link-DkEMVIRA.js";import"./index-dWLwPKk_.js";import"./index-3as0AtcW.js";import"./index-Cqyay8-b.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bmz1hEk-.js";import"./addCustomCSSWithScoping-_7UfQKgI.js";import"./index-BUa9lJQh.js";import"./information-Du5hwuH3.js";import"./sys-enter-2-Xjz6cji1.js";import"./alert-CbVbnvcl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYV0Oj8s.js";import"./delete-CzS-ZSFZ.js";import"./settings-DpHyPOwD.js";import"./NoData-Bp42RSLg.js";import"./IllustratedMessage-aBcENSKw.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-b50AAtuz.js";import"./index-mxmVkI6u.js";import"./index-CApFPdYg.js";import"./slim-arrow-down-26auel0G.js";import"./Input-DtVBLl5-.js";import"./ResponsivePopoverCommon.css-BZjEG7BC.js";import"./ValueStateMessage.css-BE_F5FVP.js";import"./Suggestions.css-RB8NJCE4.js";import"./ListBoxItemGroupTemplate-8_yIlWF-.js";import"./ComboBoxItemGroup-CUl4YaKf.js";import"./ListItemBaseTemplate-DPKPnrYZ.js";import"./Token-eT67usC_.js";import"./ScrollEnablement-DEtsU5kO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DWrsBtMe.js";import"./ToggleButton-Cng5ptzF.js";import"./SuggestionItem-WNV3rxc_.js";import"./index-WkdE1BtC.js";import"./Option-TNrNAAqc.js";import"./index-DJmgSw2V.js";import"./SegmentedButton-Ce9IDtQc.js";import"./index-BD4QFnxI.js";import"./Select-ChhsY6q9.js";import"./InvisibleMessage-CFK-hdYz.js";import"./slim-arrow-down-CiD7J9GA.js";import"./index-Dby-IIR7.js";import"./index-CAL2eitQ.js";import"./index-Dyna8UIc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjrsfWur.js";import"./group-2-CdxZGZ4X.js";import"./sort-descending-z9fS02K2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-g8_M3OEL.js";import"./utils-D_sqNaHL.js";import"./index-CrC4ibqT.js";import"./index-CNj7YBXJ.js";import"./index-AKvgdamH.js";import"./navigation-down-arrow-aGekved_.js";import"./navigation-right-arrow-vDM-HvIf.js";import"./navigation-right-arrow-B6BrxANc.js";import"./useCurrentTheme-BEuzdf0x.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dlc1pnJH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DACTY-zP.js";import"./paper-plane-CaqllUEB.js";import"./index-B2DU1UW_.js";import"./less-DMoysLjA.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
