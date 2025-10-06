import{j as o}from"./iframe-BbmPNBZw.js";import{useMDXComponents as n}from"./index-D87-8-cY.js";import{I as r,F as m}from"./CommandsAndQueries-C-B3vcHW.js";import{M as p,C as s}from"./blocks-B7C-sP0U.js";import"./Tag-DFYl0ftZ.js";import"./index-fQ6fbGsc.js";import"./copy-BgTszgJK.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D4eIu_Ee.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dqb4-3Ox.js";import"./index-upku0ICQ.js";import"./index-DPh3hFjM.js";import"./Link-CATCrkJf.js";import"./index-BaS8undN.js";import"./index-DuOlzjbj.js";import"./index-Cj4eX-xQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRGip9L6.js";import"./addCustomCSSWithScoping-DXbMFExg.js";import"./index-CoFaLD2a.js";import"./information-BpKTV1Df.js";import"./sys-enter-2-Cjjs2hNu.js";import"./alert-DEEsEFWu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BX-2aVfx.js";import"./delete-DJaqBI2v.js";import"./settings-suPn1Nnm.js";import"./NoData-k8ylWlWP.js";import"./IllustratedMessage-QtkSWE--.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DotGN4Y7.js";import"./index-D_AKAMYV.js";import"./index-DeEkJt1e.js";import"./slim-arrow-down-BiuCGCjT.js";import"./Input-BHUHhOmz.js";import"./ResponsivePopoverCommon.css-BxaDEsUM.js";import"./ValueStateMessage.css-BYDbDg0Q.js";import"./Suggestions.css-DZfh_4W3.js";import"./ListBoxItemGroupTemplate-Ce53u2a5.js";import"./ComboBoxItemGroup-DBihqRGm.js";import"./ListItemBaseTemplate-BM3kFwkG.js";import"./Token-DflvgBUB.js";import"./ScrollEnablement-CnRiCY6V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DaqjNEkx.js";import"./ToggleButton-C3LSC9pu.js";import"./SuggestionItem-eiisW8R3.js";import"./index-DOUHh_Yk.js";import"./Option-CUrZDe04.js";import"./index-BETUsKMg.js";import"./SegmentedButton-Cux8zQoJ.js";import"./index-D3JCLYGZ.js";import"./Select-DW_EjdMU.js";import"./InvisibleMessage-C1GU6Z5A.js";import"./slim-arrow-down-DJqqQ7Uz.js";import"./index-g1hielSz.js";import"./index-BdZUY68T.js";import"./index-BhkJT34d.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DdhG93W-.js";import"./group-2-zFNxt9gh.js";import"./sort-descending-ByihN0-k.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEU0a68q.js";import"./utils-DWSip9Hp.js";import"./index-BYutBOs4.js";import"./index-Di2jtcE5.js";import"./index-CZcSTKvj.js";import"./navigation-down-arrow-DkGOKBV1.js";import"./navigation-right-arrow-BCm7Xenc.js";import"./navigation-right-arrow-C9_CN0LR.js";import"./useCurrentTheme-uuFazV9G.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bj0B-A9p.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWRMKF8W.js";import"./paper-plane-uFKcpEyA.js";import"./index-BDhMGars.js";import"./less-BjbU_0bC.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
