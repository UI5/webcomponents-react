import{j as o}from"./iframe-CqyMw63j.js";import{useMDXComponents as n}from"./index-GHxgs1Oh.js";import{I as r,F as m}from"./CommandsAndQueries-Ckqtj5q6.js";import{M as p,C as s}from"./blocks-gNAN3wnS.js";import"./Tag-9sg0d6U8.js";import"./index-DZeMBOtb.js";import"./copy-CygH_bff.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-VpVdQnD5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ccu9AWNy.js";import"./index-CyG-uGBl.js";import"./index-CRtLMoP1.js";import"./Link-8hzPxLpd.js";import"./index-B8X3UXQy.js";import"./index-DqKKFvdB.js";import"./index-CEokL_Ra.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hBi7rm2H.js";import"./addCustomCSSWithScoping-C9ZUc-46.js";import"./index-fW-mpTRV.js";import"./information-B-SB47kj.js";import"./sys-enter-2-8wJJb_fs.js";import"./alert-DS7w9_j5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BrgeZPp4.js";import"./delete-D9-ge-rM.js";import"./settings-cGyMTSk-.js";import"./NoData-xKoSmblb.js";import"./IllustratedMessage-BCxnQs3b.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Ce8Tfk62.js";import"./index-LdWS7TCa.js";import"./index-DIUizzAk.js";import"./slim-arrow-down-D-ZUvWXK.js";import"./Input-BOVuOoq4.js";import"./ResponsivePopoverCommon.css-17WbdJEp.js";import"./ValueStateMessage.css-DVx3cVXN.js";import"./Suggestions.css-C_lAbcHi.js";import"./ListBoxItemGroupTemplate-CPI18sru.js";import"./ComboBoxItemGroup-CwJsZ4Zp.js";import"./ListItemBaseTemplate-CVZqI9dc.js";import"./Token-C7-_a1HK.js";import"./ScrollEnablement-BwuxTfsa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C-NVnbST.js";import"./ToggleButton-CyG3PucO.js";import"./SuggestionItem-LjByQWOY.js";import"./index-BA70ykXq.js";import"./Option-DOo6z9Dp.js";import"./index-DsjEg4fj.js";import"./SegmentedButton-Bx24Atny.js";import"./index-BvrBc5_J.js";import"./Select-Xhunz0DK.js";import"./InvisibleMessage-BX0MFDY5.js";import"./slim-arrow-down-x1-wAbSu.js";import"./index-rkzVTVvZ.js";import"./index-BSkVtYZm.js";import"./index-uyWLtESg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-39_bl0se.js";import"./group-2-DTudhwRg.js";import"./sort-descending-d65eGOj2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7A2D9qJE.js";import"./utils-D3iBktXL.js";import"./index-_WcNH8h5.js";import"./index-4BLCxvrL.js";import"./index-By6IU_b1.js";import"./navigation-down-arrow-BhNxTQs3.js";import"./navigation-right-arrow-7IyEfa1Z.js";import"./navigation-right-arrow-D0FoUvYd.js";import"./useCurrentTheme-CPkJtYyP.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C4qlmx2T.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DGuc5LLn.js";import"./paper-plane-DpFQXuCc.js";import"./index-BbbdvkN_.js";import"./less-DyBbCAMz.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
