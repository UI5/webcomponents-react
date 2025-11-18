import{j as o}from"./iframe-C_ZjSpvw.js";import{useMDXComponents as n}from"./index-D99mDNJl.js";import{I as r,F as m}from"./CommandsAndQueries-DoIIg28U.js";import{M as p,C as s}from"./blocks-DhOgu6aS.js";import"./Tag-BTyw-Q9o.js";import"./index-CFaSARe7.js";import"./copy-o8vYo4aG.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-1KeWr361.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BT7ySl7f.js";import"./index-Cj8N_CMD.js";import"./index-uA7KkxCs.js";import"./Link-DjlLuVoY.js";import"./index-B7Kpc4-r.js";import"./index-Arj44yrL.js";import"./index-xyj4veU8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dvgs_TOk.js";import"./addCustomCSSWithScoping-Bja_IMOg.js";import"./index-CQkucwsg.js";import"./information-DjWFOZk0.js";import"./sys-enter-2-Bcyd_2Ym.js";import"./alert-D6bEf6aa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CBfXQqOD.js";import"./delete-UPYhhS75.js";import"./settings-BQIQCw26.js";import"./NoData-B27ZHA1s.js";import"./IllustratedMessage-CXJqRBtz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CHoVY10U.js";import"./index-ZdNquEyn.js";import"./index-CG20QFYC.js";import"./slim-arrow-down-DNm_LgPO.js";import"./Input-BsSjRDM5.js";import"./ResponsivePopoverCommon.css-CYgfaUoK.js";import"./ValueStateMessage.css-CpqZ_gjF.js";import"./Suggestions.css-QPEItX3L.js";import"./ListBoxItemGroupTemplate-C6jRHMwF.js";import"./ComboBoxItemGroup-CCSovVR5.js";import"./ListItemBaseTemplate-u7wLHgK7.js";import"./Token-CTyid79H.js";import"./ScrollEnablement-W5Wf5RR3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7bHN0O3.js";import"./ToggleButton-DeV44AnW.js";import"./SuggestionItem-CSPEj_XQ.js";import"./index-G1G_Ul-v.js";import"./Option-BHttWL89.js";import"./index-D07NgyYx.js";import"./SegmentedButton-DhoFROJQ.js";import"./index-HJOD6t4r.js";import"./Select-BxgNjt9h.js";import"./InvisibleMessage-CugcSZE6.js";import"./slim-arrow-down-Df8hY_AN.js";import"./index-D0AP3dKj.js";import"./index-CqRYtRVu.js";import"./index-D1q_umKP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BlHrl19O.js";import"./group-2-FzrtZoEx.js";import"./sort-descending-DZyRlpy5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHLokQSX.js";import"./utils-D23r6WGI.js";import"./index-DEf-xWsx.js";import"./index-D88YKGSw.js";import"./index-DsLljGL1.js";import"./navigation-down-arrow-BbdKFfmI.js";import"./navigation-right-arrow-Bw3RXKs8.js";import"./navigation-right-arrow-C6IZxjIu.js";import"./useCurrentTheme-CVvxYTRR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ZaQ1AkQI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-H9_uEIIc.js";import"./paper-plane-DhjbkpKT.js";import"./index-Byl3jNPv.js";import"./less-D_TW91Ya.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
