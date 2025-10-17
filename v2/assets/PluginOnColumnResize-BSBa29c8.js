import{j as o}from"./iframe-C2wpKNYo.js";import{useMDXComponents as n}from"./index-C3bwhSaM.js";import{I as r,F as m}from"./CommandsAndQueries-BUx2QFuH.js";import{M as p,C as s}from"./blocks-CsqgEIu9.js";import"./Tag-BJVPlcpU.js";import"./index-6FDQ4ka_.js";import"./copy-Mn7zeVlB.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DhRYLq5b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPkycJ7d.js";import"./index-CTKi5gtL.js";import"./index-DK30OokX.js";import"./Link-BDqeBkDX.js";import"./index-Dsgid9kS.js";import"./index-uvW3ZjCI.js";import"./index-Cg_u4Ogr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN7qutFD.js";import"./addCustomCSSWithScoping-BIscafeh.js";import"./index-Cg3QTQNO.js";import"./information-BdwahN0R.js";import"./sys-enter-2-DhtxU3CZ.js";import"./alert-DqDZXgnZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DU-GfZPG.js";import"./delete-CJr3s0ad.js";import"./settings-Bj5Fdd9w.js";import"./NoData-DuKAvQZu.js";import"./IllustratedMessage-CYId384S.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CR0NaFlQ.js";import"./index-Djhs7oku.js";import"./index-2JhMnC8v.js";import"./slim-arrow-down-pc_gg9WS.js";import"./Input-Bm2Fv_Nn.js";import"./ResponsivePopoverCommon.css-DTvFG0Ht.js";import"./ValueStateMessage.css-BT11hGhW.js";import"./Suggestions.css-Ce7PGErr.js";import"./ListBoxItemGroupTemplate-Cv3EutgH.js";import"./ComboBoxItemGroup-DfSWs9AK.js";import"./ListItemBaseTemplate-rMtU7HPI.js";import"./Token-CzVmXjd4.js";import"./ScrollEnablement-C0IR7RhZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bw7MGSnH.js";import"./ToggleButton-Dzc9YnfK.js";import"./SuggestionItem-B1XccRHq.js";import"./index-IHtKMLsN.js";import"./Option-BIfQIQmg.js";import"./index-OLZkp24Z.js";import"./SegmentedButton-CTcZgze8.js";import"./index-BR5kr3iz.js";import"./Select-CEGqHj9u.js";import"./InvisibleMessage-CTodWVwF.js";import"./slim-arrow-down-Ay5kkJLT.js";import"./index-CHmVwapl.js";import"./index-CREgWYGw.js";import"./index-BUSyf8XI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-NfY7u5GH.js";import"./group-2-CE7qb9Mt.js";import"./sort-descending-DivdGMhf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-AKXoUFrm.js";import"./utils-8qtwE_MS.js";import"./index-2j3noFBG.js";import"./index-DJ6XZsCK.js";import"./index-CU-PdOlU.js";import"./navigation-down-arrow-BXxVj34O.js";import"./navigation-right-arrow-DlOFQv4h.js";import"./navigation-right-arrow-BnNhZIG8.js";import"./useCurrentTheme-Bs3WCC2j.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CfjOYTOF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-awnJ-YFR.js";import"./paper-plane-CfXYFuln.js";import"./index-Dg27D0NM.js";import"./less-BRwpA6_1.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
