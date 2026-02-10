import{j as o}from"./iframe-D3h_j2y4.js";import{useMDXComponents as n}from"./index-a9MBNRjP.js";import{I as r,F as m}from"./CommandsAndQueries-DkEtb3C9.js";import{M as p,C as s}from"./blocks-Cp97O8Me.js";import"./Tag-Be6y1yqM.js";import"./index-B9e5YBdN.js";import"./copy-Dke-3UUt.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DwoXh-sx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BY-U4HhI.js";import"./index-BOt5HncK.js";import"./index-BhBE3smf.js";import"./Link-Dali4gAe.js";import"./index-BQ-14eq3.js";import"./index-DX_7kgjZ.js";import"./index-DnWdQH32.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-llHj0RCs.js";import"./addCustomCSSWithScoping-uA_fHk2N.js";import"./index-CH7UrjOG.js";import"./information-Du_n-m1U.js";import"./sys-enter-2-_5l1H-Gx.js";import"./alert-DiqJ6xxp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cl8Bhysk.js";import"./delete-HNCzad-u.js";import"./settings-BAYqfNVW.js";import"./NoData-euyCiP2B.js";import"./IllustratedMessage--KlXndt0.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Bknwbe5l.js";import"./index-D4sEhlKj.js";import"./index-B9iDppuB.js";import"./slim-arrow-down-nHCgXcCK.js";import"./Input-DReaCICF.js";import"./ResponsivePopoverCommon.css-Cv5gi_PV.js";import"./ValueStateMessage.css-BPAV6ZTf.js";import"./Suggestions.css-B7qb-M6b.js";import"./ListBoxItemGroupTemplate-Dnd6fR5C.js";import"./ComboBoxItemGroup-Cd0GNI7w.js";import"./ListItemBaseTemplate-Cxkubtyi.js";import"./Token-D9U4_t6g.js";import"./ScrollEnablement-CU1q9bqi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CgJ8GSRa.js";import"./ToggleButton-D0O29cmD.js";import"./SuggestionItem-DTIfwwxe.js";import"./index-CiafHV3I.js";import"./Option-BfbVIOYk.js";import"./index-DbRYhxJV.js";import"./SegmentedButton-C2ivOZMg.js";import"./index-4F0E7fXh.js";import"./Select-BG5_UDji.js";import"./InvisibleMessage-B2sYPvR_.js";import"./slim-arrow-down-CcAkiAX3.js";import"./index-BQpjBriN.js";import"./index-cW5UaVoZ.js";import"./index-CRuUVbuT.js";import"./index-DTeZzsS7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C9uiLsB2.js";import"./group-2-CeS8Iw99.js";import"./sort-descending-NTGJh4hK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BOa2Jfi4.js";import"./utils-DA7J-iEW.js";import"./index-D1EkbpQL.js";import"./index-B4iDf5hz.js";import"./index-BAQUkvhC.js";import"./navigation-down-arrow-BgTxiuzp.js";import"./navigation-right-arrow-BFKs6dr_.js";import"./navigation-right-arrow-DBTblMcB.js";import"./useCurrentTheme-DdzLTwyU.js";import"./index-Bg_WlAKN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BlLZYc2i.js";import"./paper-plane-M1DAtAiw.js";import"./index-BPIXiNj1.js";import"./less-BeWtcPfG.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
