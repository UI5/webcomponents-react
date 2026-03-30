import{j as o}from"./iframe-QfBB5oxv.js";import{u as n,M as r,C as m}from"./blocks-BNoxk89Z.js";import{I as p}from"./CommandsAndQueries-CHXq-8GX.js";import"./Tag-jV4rQ7he.js";import"./index-CXwzMtEr.js";import"./copy-Ddev0qyd.js";import{F as s}from"./Footer-Djb8KmT2.js";import"./PageNotFound-BF3CKwDf.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B6o6xcm7.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CjKrRSzJ.js";import"./index-CKPcWxBG.js";import"./index-qK3ZRsrU.js";import"./index-mR2WMj9r.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4b8nEvCn.js";import"./addCustomCSSWithScoping-BzEIPtCm.js";import"./index-BP6rOJzd.js";import"./index-CMW9Znni.js";import"./index-C23APlHe.js";import"./information-DnhNkDB3.js";import"./sys-enter-2-BMzcK94M.js";import"./alert-Djbx4OhD.js";import"./index-B0PZpUdZ.js";import"./Illustrations-B1Eex0pq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNErvuHa.js";import"./delete-ChbxvCaX.js";import"./settings-BJf-PQsO.js";import"./NoData-DgG04WAC.js";import"./NoFilterResults-BU08mcFJ.js";import"./index-BW8anNwZ.js";import"./IllustratedMessage-B0tuKdc_.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CzounWiX.js";import"./Input-Dq7YMe08.js";import"./ResponsivePopoverCommon.css-CNHfRjyj.js";import"./ValueStateMessage.css-D6MJ9XHs.js";import"./Suggestions.css-DuOxNvnL.js";import"./ListBoxItemGroupTemplate-KaiE3Akg.js";import"./ComboBoxItemGroup-BYlx2q4W.js";import"./ListItemBaseTemplate-Dh63WkMo.js";import"./Token-bE2o3WQc.js";import"./ScrollEnablement-D9-XNTBn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYJdKcUD.js";import"./ToggleButton-BzWglLQm.js";import"./multiselect-all-DvkYK6cA.js";import"./SuggestionItem-BX-RC-Ep.js";import"./index-DxqVVwu_.js";import"./Option-PTtFyRUo.js";import"./index-D6pqZsOu.js";import"./SegmentedButton-ChlAck0v.js";import"./index-Dvo2DlNr.js";import"./Select-DcyuEmeq.js";import"./InvisibleMessage-B3q_stCZ.js";import"./index-CNet7Rn8.js";import"./index-BhwDH-EY.js";import"./index-ChcMW--M.js";import"./index-CEP4QNMA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Duv1kUg0.js";import"./group-2-DOvkGS22.js";import"./sort-descending-ARK23MyZ.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cpx9pvDO.js";import"./utils-Gg7Ythg5.js";import"./index-eHKj1k2p.js";import"./index-_er2dUIp.js";import"./index-COg9gy3g.js";import"./navigation-down-arrow-DINT9BlU.js";import"./navigation-right-arrow-Ce-DclTe.js";import"./navigation-right-arrow-C22SmqFg.js";import"./useCurrentTheme-CclwzgwB.js";import"./index-ClULG3sl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPTRgBT8.js";import"./paper-plane-BEUN1GKr.js";import"./index-CB8cZ3hf.js";import"./less-Bm7RlntL.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(p,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function Eo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Eo as default};
