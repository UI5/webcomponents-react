import{j as o}from"./iframe-BCLHYJgX.js";import{useMDXComponents as n}from"./index-6uEU24p4.js";import{I as r,F as m}from"./CommandsAndQueries-CO5L47ah.js";import{M as p,C as s}from"./blocks-Bs_XR2wS.js";import"./Tag-CyCEbX-5.js";import"./index-BaEPddIL.js";import"./copy-C8KGHNvK.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DD_BHl_O.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cok_5_tC.js";import"./index-Cm3V18u1.js";import"./index-BK_ZHavx.js";import"./Link-Bn4h5ljW.js";import"./index-CCx-58F9.js";import"./index-Bu9oHGEl.js";import"./index-_pVZ4H5C.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoVEwdyY.js";import"./addCustomCSSWithScoping-DNzt28js.js";import"./index-ryNQsvjz.js";import"./information-ddn69F5R.js";import"./sys-enter-2-Clp8AE05.js";import"./alert-bXCG-ij3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-7Zt1rPtU.js";import"./delete-DZ-sv9tn.js";import"./settings-DEZp58uU.js";import"./NoData-Bm6c65Rp.js";import"./IllustratedMessage-CpnLKog-.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-0eiDXkdF.js";import"./index-DHFj9r2s.js";import"./index-CnUVMLwV.js";import"./slim-arrow-down-PQTwOB1y.js";import"./Input-CyIlmGcA.js";import"./ResponsivePopoverCommon.css-BG6tGGqw.js";import"./ValueStateMessage.css-CXTpMNNy.js";import"./Suggestions.css-Bad721NM.js";import"./ListBoxItemGroupTemplate-DHvQR70c.js";import"./ComboBoxItemGroup-Dv-3y-yt.js";import"./ListItemBaseTemplate-BybflgUy.js";import"./Token-C7Z0uXiZ.js";import"./ScrollEnablement-C_6ell_9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBy1q-np.js";import"./ToggleButton-Ch4ejuj2.js";import"./SuggestionItem-DOMiaiL4.js";import"./index-CsRnbpar.js";import"./Option-BM744F7n.js";import"./index-BKITVOdn.js";import"./SegmentedButton-BMBrktYn.js";import"./index-DgD7lXWr.js";import"./Select-CmILZVDu.js";import"./InvisibleMessage-DnmpScj3.js";import"./slim-arrow-down-DHuMktny.js";import"./index-BwWwsDip.js";import"./index-D0yr6pZg.js";import"./index-BPgVHXij.js";import"./index-P_S_jhxH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bn9RS1kX.js";import"./group-2-BYuBBp9R.js";import"./sort-descending-BJIWTPav.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlAPMqrc.js";import"./utils-BScKaUIi.js";import"./index-DY7zKARQ.js";import"./index-s-YoLh3T.js";import"./index-CLiMatz4.js";import"./navigation-down-arrow-B2J7F8t-.js";import"./navigation-right-arrow-ClWc3JFi.js";import"./navigation-right-arrow-CByHJpNk.js";import"./useCurrentTheme-BlqUDt0t.js";import"./index-DyAhltwy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ByUnN_uG.js";import"./paper-plane-cWqe5jd6.js";import"./index-Oy3wJsZc.js";import"./less--DX0g4Ek.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
