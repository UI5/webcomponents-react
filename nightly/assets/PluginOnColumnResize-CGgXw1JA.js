import{j as o}from"./iframe-DfTuu2Qs.js";import{useMDXComponents as n}from"./index-tu9Knfll.js";import{I as r,F as m}from"./CommandsAndQueries-CbObYkDi.js";import{M as p,C as s}from"./blocks-DwvFSYgT.js";import"./Tag-a-ykqmZl.js";import"./index-D59W5J0R.js";import"./copy-CAppfZ8d.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CB5kiAXk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEqB_Mrf.js";import"./index-4cmdIwXv.js";import"./index-upgMd0Ps.js";import"./Link-DQEzecZX.js";import"./index-DV0Q9niH.js";import"./index-CHJ4eeD3.js";import"./index-B1cc6DOE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BlYlCK6x.js";import"./addCustomCSSWithScoping-l0p7E_oS.js";import"./index-D-5EknuX.js";import"./information-DFuUDpiC.js";import"./sys-enter-2-B3GhyP7w.js";import"./alert-CmUExS0E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoKMtFET.js";import"./delete-DYVw-TY0.js";import"./settings-D9nwGkWC.js";import"./NoData-DdHsrTKm.js";import"./IllustratedMessage-D0_ymalv.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Be1vXVQP.js";import"./index-Cw8YfcTi.js";import"./index-CV7e3qnP.js";import"./slim-arrow-down-Bhl2nWte.js";import"./Input-B76lxtdv.js";import"./ResponsivePopoverCommon.css-BP9K7x6e.js";import"./ValueStateMessage.css-TCHVXLEw.js";import"./Suggestions.css-Pfvf1GJg.js";import"./ListBoxItemGroupTemplate-CDN4ALTG.js";import"./ComboBoxItemGroup-BH5B9cpG.js";import"./ListItemBaseTemplate-D1uFrlaA.js";import"./Token-D4TeWFku.js";import"./ScrollEnablement-CRIFALzU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CshbuJzo.js";import"./ToggleButton-CwHG-y71.js";import"./SuggestionItem-DGN5b14S.js";import"./index-RBLRU_sl.js";import"./Option-BbQCz44h.js";import"./index-BOCJCl5X.js";import"./SegmentedButton-oliJxwDI.js";import"./index-ECWd-FKG.js";import"./Select-BLczAWPe.js";import"./InvisibleMessage-CNnUIwgG.js";import"./slim-arrow-down-yzUP4cof.js";import"./index-CAlOL0VM.js";import"./index-CQE4zKbm.js";import"./index-CZ2dIko2.js";import"./index-DzevBiS7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JkMKr1H-.js";import"./group-2-CaiuqVlS.js";import"./sort-descending-BRpdcvqz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BSnTmES7.js";import"./utils-ZLpPM_1a.js";import"./index-DQM6KvvS.js";import"./index-CRmrR_Od.js";import"./index-CTOZYk49.js";import"./navigation-down-arrow-BTOOMHmS.js";import"./navigation-right-arrow-DEKgAHUd.js";import"./navigation-right-arrow-DZaHUhdt.js";import"./useCurrentTheme-DGG68oxl.js";import"./index-gcgg4h2j.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BXblpA9j.js";import"./paper-plane-DDMey8sA.js";import"./index-D8AaX0Z0.js";import"./less-D2q1q7Ef.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
