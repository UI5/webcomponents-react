import{j as o}from"./iframe-C7iTiayp.js";import{useMDXComponents as n}from"./index-CMlBI8kK.js";import{I as r,F as m}from"./CommandsAndQueries-Cwf0qDUZ.js";import{M as p,C as s}from"./blocks-BjGmnX8N.js";import"./Tag-CFZhsv-K.js";import"./index-DWyaFLqZ.js";import"./copy-CkvBTa6Z.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BBNlf_1p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bi4CD_jF.js";import"./index-CepcJiY6.js";import"./index-BmPAlSpi.js";import"./Link-D4JNNlPq.js";import"./index-fBsRTAa2.js";import"./index-3ZnD0cv6.js";import"./index-zxgrwg2w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-khcOq4rr.js";import"./addCustomCSSWithScoping-DLqaogwL.js";import"./index-BXtbzqKT.js";import"./information-BMfuHNkn.js";import"./sys-enter-2-wp3WX8g7.js";import"./alert-D64S_sTf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bo89s8ys.js";import"./delete-CCDVjtvW.js";import"./settings-BKAeCR2Z.js";import"./NoData-Bf3fSXva.js";import"./IllustratedMessage-_2lGAz-J.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-1kBGmlid.js";import"./index-BgWBB9Nj.js";import"./index-D6FSQNaA.js";import"./slim-arrow-down-DQ4u4tcO.js";import"./Input-Dc29Rl46.js";import"./ResponsivePopoverCommon.css-BuOZvZm3.js";import"./ValueStateMessage.css-BylK2ZGd.js";import"./Suggestions.css-HeG5Oc_t.js";import"./ListBoxItemGroupTemplate-CzMwnapl.js";import"./ComboBoxItemGroup-BwGON5jx.js";import"./ListItemBaseTemplate-DmWIq4QF.js";import"./Token-Bw-ivO-m.js";import"./ScrollEnablement-m0sz45fi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dd95Np6p.js";import"./ToggleButton-C2EcXRa7.js";import"./SuggestionItem-B0EqOaoY.js";import"./index-BbRE-btA.js";import"./Option-CJLLlMWt.js";import"./index-CSbbIXmy.js";import"./SegmentedButton-B2udwM1j.js";import"./index-DDYhMlnk.js";import"./Select-Do7H2USn.js";import"./InvisibleMessage-D1U00Tgj.js";import"./slim-arrow-down-BjRxfcn_.js";import"./index-DQ8hKiqh.js";import"./index-DA0UiR-Z.js";import"./index-S0HdPZGc.js";import"./index-DkOK-tBR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dc2A1PJb.js";import"./group-2-DDh7CKio.js";import"./sort-descending-tAdmCFu7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DE_IcfY_.js";import"./utils-DjivXbSk.js";import"./index-D-JJzP2u.js";import"./index-jp7mGW-W.js";import"./index-D3yVkpzL.js";import"./navigation-down-arrow-DGq3-RIe.js";import"./navigation-right-arrow-EXPZKsWP.js";import"./navigation-right-arrow-DuxTVxJD.js";import"./useCurrentTheme-BSh8lxlr.js";import"./index-D1HtHk7r.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUKUp41V.js";import"./paper-plane-D-TZChdH.js";import"./index-7U_-Ii5q.js";import"./less-DjUmBMvH.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
