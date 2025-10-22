import{j as o}from"./iframe-CWbL8jxG.js";import{useMDXComponents as n}from"./index-B1hucxFe.js";import{I as r,F as m}from"./CommandsAndQueries-DC5-wnNc.js";import{M as p,C as s}from"./blocks-DWgVki-D.js";import"./Tag-BqrM3bJU.js";import"./index-Ln4MrNxF.js";import"./copy-DC7dXRiF.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BChSusTc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTMyNJf2.js";import"./index-BEEAqopd.js";import"./index-B-_ynEAX.js";import"./Link-DUwsGKC7.js";import"./index-BMKWfM9S.js";import"./index-DFy0GYik.js";import"./index-Bs8RptuV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtpdWs35.js";import"./addCustomCSSWithScoping-DZNikY8L.js";import"./index-DX9sPfcP.js";import"./information-CisMKXtU.js";import"./sys-enter-2-IsKQM1OD.js";import"./alert-Dh20kvYK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BltmIOdS.js";import"./delete-1HyL_4Wk.js";import"./settings-JMrRPAnE.js";import"./NoData-CJxxc7CR.js";import"./IllustratedMessage-D8gWuNpm.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-57Ksm_r5.js";import"./index-DZTHkwTR.js";import"./index-DS3apI4i.js";import"./slim-arrow-down-BMbGkBGP.js";import"./Input-Ca-gNTp_.js";import"./ResponsivePopoverCommon.css-BbHsPd6N.js";import"./ValueStateMessage.css-CzUlmLb3.js";import"./Suggestions.css-Ba_dx_L-.js";import"./ListBoxItemGroupTemplate-Lawh3eGL.js";import"./ComboBoxItemGroup-BeC8_XKS.js";import"./ListItemBaseTemplate-bdxNsDyn.js";import"./Token-GRKHuzuD.js";import"./ScrollEnablement-q8IAhmkU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DjxNPHqP.js";import"./ToggleButton-aEr0I1kH.js";import"./SuggestionItem-BfEsa41d.js";import"./index-Df-CHSkY.js";import"./Option-CH8gpRhi.js";import"./index-Cys1hxfX.js";import"./SegmentedButton-De9lTVKW.js";import"./index-zNKdvYCA.js";import"./Select-C9jPwNxl.js";import"./InvisibleMessage-5emN_lGe.js";import"./slim-arrow-down-BO45akNa.js";import"./index-B5w8aw2j.js";import"./index-CR6_4xj1.js";import"./index-BgtkjQtp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BD_8tTtH.js";import"./group-2-v2JGlzXZ.js";import"./sort-descending-dLMPKXS7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-AQfbGd8K.js";import"./utils-BxGUFKrM.js";import"./index-uL29v2Ta.js";import"./index-BqP4EQLr.js";import"./index-gLLwXRq2.js";import"./navigation-down-arrow-ozVSHRNs.js";import"./navigation-right-arrow-DtnRZ1GH.js";import"./navigation-right-arrow-DzlvXQo4.js";import"./useCurrentTheme-CWwMlTtm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BQnesWWg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-nDtVDEC_.js";import"./paper-plane-C0WWo1sA.js";import"./index-BJvkaa91.js";import"./less-C5liRph3.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
