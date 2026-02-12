import{j as o}from"./iframe-9L5DfdAL.js";import{useMDXComponents as n}from"./index-BFOQlGJl.js";import{I as r,F as m}from"./CommandsAndQueries-BK-K5RhD.js";import{M as p,C as s}from"./blocks-BhviKO8q.js";import"./Tag-Bc-yWu1Y.js";import"./index-BfSNMryQ.js";import"./copy-B4o5kCyp.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D3bL7dyl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4W78R8l.js";import"./index-DCrnunZ9.js";import"./index-Dt7xhFDV.js";import"./Link-o-RCe_HP.js";import"./index-CCxjFqbl.js";import"./index-CFjv4LxR.js";import"./index-DNulmfCG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-d02CNbEj.js";import"./addCustomCSSWithScoping-BavaT7N2.js";import"./index-BKv2oNTW.js";import"./information-E0dtjqMz.js";import"./sys-enter-2-CWAnp9j1.js";import"./alert-krPLRZgR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-XNM9FnGm.js";import"./delete-JR2MZRfb.js";import"./settings-DxBIqKBm.js";import"./NoData-3ZcUB5Ct.js";import"./IllustratedMessage-BEdS4qmU.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C91Oik-m.js";import"./index-LeKCpS7q.js";import"./index-sAVTaYY-.js";import"./slim-arrow-down-DMCTeiC5.js";import"./Input-B_a4lk-J.js";import"./ResponsivePopoverCommon.css-DR2BAcH9.js";import"./ValueStateMessage.css-BbD6Vd04.js";import"./Suggestions.css-DgOg4FzN.js";import"./ListBoxItemGroupTemplate-QimfEu9Q.js";import"./ComboBoxItemGroup-D4VMzcBc.js";import"./ListItemBaseTemplate-CAeeqms4.js";import"./Token-sTVAKlsR.js";import"./ScrollEnablement-D6SL2uwM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-G_TCf98J.js";import"./ToggleButton-5xA1-SjB.js";import"./SuggestionItem-66Xrv75f.js";import"./index-DGOHxSTi.js";import"./Option-B5eqm6lt.js";import"./index-DD-YT-Yv.js";import"./SegmentedButton-C06xcamZ.js";import"./index-BSqaxHhQ.js";import"./Select-Bf3hq0iL.js";import"./InvisibleMessage-BFzkQW2o.js";import"./slim-arrow-down-CVQcjJXq.js";import"./index-BR-9eyJZ.js";import"./index-BNu0C3GX.js";import"./index-BHRZrxSX.js";import"./index-DFno4m6x.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DZHCNsIg.js";import"./group-2-BksPNJTz.js";import"./sort-descending-vwUdYYI9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B1B6dX5C.js";import"./utils--MAnWLXj.js";import"./index-DNleTpkO.js";import"./index-DiSDR8FZ.js";import"./index-8UpyXoAN.js";import"./navigation-down-arrow-DejdbZn2.js";import"./navigation-right-arrow-D8pf5Giz.js";import"./navigation-right-arrow-Dr_s8HRL.js";import"./useCurrentTheme-zSdIFJxn.js";import"./index-CjDsuZ3a.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZKijWM3.js";import"./paper-plane-BmU2Eq9f.js";import"./index-OapWeUnp.js";import"./less-Coam-0fQ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
