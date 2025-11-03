import{j as o}from"./iframe-C6G8Gpme.js";import{useMDXComponents as n}from"./index-C4rJv3Nd.js";import{I as r,F as m}from"./CommandsAndQueries-CX4_ppDX.js";import{M as p,C as s}from"./blocks-C6ISP02G.js";import"./Tag-wYYkZAW5.js";import"./index-CLl--vXw.js";import"./copy-DG7SwgZt.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CFQTPpSi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MA4O1_BO.js";import"./index-DtX1Aayg.js";import"./index--EZEVYBb.js";import"./Link-B1f9egnY.js";import"./index-CNpE9-6C.js";import"./index-CYD-IelD.js";import"./index-NHF_x4Su.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2tTP6jwo.js";import"./addCustomCSSWithScoping-DkcigAPx.js";import"./index-B7V2IaSq.js";import"./information-CAQjlf4h.js";import"./sys-enter-2-CseNsjRz.js";import"./alert-C6FTsI2C.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQrAE-yM.js";import"./delete-BePcinQ6.js";import"./settings-ZIGvnodt.js";import"./NoData-f-9aMUJ4.js";import"./IllustratedMessage-BnjPNDkK.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-R36zWZeY.js";import"./index-Bw2blU0C.js";import"./index-CC4rDnzA.js";import"./slim-arrow-down-DFQVjscf.js";import"./Input-B43vXzoo.js";import"./ResponsivePopoverCommon.css-BaW35ZlT.js";import"./ValueStateMessage.css-BPXwB0kU.js";import"./Suggestions.css-D8LM2L39.js";import"./ListBoxItemGroupTemplate-C7DYeyIb.js";import"./ComboBoxItemGroup-9TKINPGh.js";import"./ListItemBaseTemplate-py1Jss2-.js";import"./Token-BESOIpLC.js";import"./ScrollEnablement-DBsQ_VBd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CbgkjpUB.js";import"./ToggleButton-DIE2_eYU.js";import"./SuggestionItem-B37H0t8o.js";import"./index-hYGTc0Ki.js";import"./Option-Dpbc4fOS.js";import"./index-BHyn0uZc.js";import"./SegmentedButton-EzvQ1TiR.js";import"./index-Bw0lSxiT.js";import"./Select-CGLg-QOl.js";import"./InvisibleMessage-Co517J8T.js";import"./slim-arrow-down-BMl0PRZy.js";import"./index-BG83xDW8.js";import"./index-v-qZ03j1.js";import"./index-DT1QmIo9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bjv4k70o.js";import"./group-2-Cd_IntO7.js";import"./sort-descending-5ABVgqX7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BG8mzTO_.js";import"./utils-BR3sGIFW.js";import"./index-BzZR18Jl.js";import"./index-B44hRY22.js";import"./index-DbddQwCa.js";import"./navigation-down-arrow-ccA23Gon.js";import"./navigation-right-arrow-RKFZneuK.js";import"./navigation-right-arrow-UKoz8H0N.js";import"./useCurrentTheme-metPpI7t.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dw6v9mL5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cf5So1HI.js";import"./paper-plane-BSvLcMlt.js";import"./index-UbolVguk.js";import"./less-o5FG2Zi-.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
