import{j as o}from"./iframe-D5yYeuyx.js";import{useMDXComponents as n}from"./index-OOr887th.js";import{I as r,F as m}from"./CommandsAndQueries-CJKRIq4o.js";import{M as p,C as s}from"./blocks-BwZUgw5J.js";import"./Tag-BZtJl-N7.js";import"./index-DJODyOkI.js";import"./copy-BbBddowJ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-zKKdy0iz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cu6PwiO-.js";import"./index-CWkadQ1i.js";import"./index-BMwlOPBB.js";import"./Link-DSfaPzX5.js";import"./index-BiamOLpW.js";import"./index-n-gjro57.js";import"./index-DFcCzRoG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IcjKSza1.js";import"./addCustomCSSWithScoping-DupGCqhX.js";import"./index-pGOyFusy.js";import"./information-CqfzA4ZI.js";import"./sys-enter-2-Cgd8Rk78.js";import"./alert-uMczVQtd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DkUAlph4.js";import"./delete-CEb_JUXh.js";import"./settings-BPkYZfgY.js";import"./NoData-BiDCs0cr.js";import"./IllustratedMessage-D3a58_2V.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BgGEjG58.js";import"./index-CWuQ_FvE.js";import"./index-DDrT2lBD.js";import"./slim-arrow-down-DAbWlapP.js";import"./Input-CRG5JTiB.js";import"./ResponsivePopoverCommon.css-DosOvkrc.js";import"./ValueStateMessage.css-CmY2G9nX.js";import"./Suggestions.css-Cc7CIEcc.js";import"./ListBoxItemGroupTemplate-DfKADDdU.js";import"./ComboBoxItemGroup-Dtfv3_LL.js";import"./ListItemBaseTemplate-BYWJKvpu.js";import"./Token-KEywEoQK.js";import"./ScrollEnablement-9NyzND_c.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CXdrrYCn.js";import"./ToggleButton-ByrGi9fF.js";import"./SuggestionItem-DdDeQX3D.js";import"./index-DbKnZ7JU.js";import"./Option-CW9CutXR.js";import"./index-Cm_JNiA3.js";import"./SegmentedButton-DDilHdoL.js";import"./index-BpQt5OEf.js";import"./Select-DaSCiKmk.js";import"./InvisibleMessage-Cl3WTIpJ.js";import"./slim-arrow-down-BglCXS9Y.js";import"./index-BBvERRAI.js";import"./index-AQwE40sw.js";import"./index-Co3Z1GWi.js";import"./index-6QK4Io4Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6eoyLEr.js";import"./group-2-ATO8Q-wL.js";import"./sort-descending-BXHZWD30.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CdNe_oTn.js";import"./utils-CLQPrml8.js";import"./index-Dh_vIy7-.js";import"./index-QBbEu3vQ.js";import"./index-D4p2SSM5.js";import"./navigation-down-arrow-CLdsbi01.js";import"./navigation-right-arrow-CqvRZAjQ.js";import"./navigation-right-arrow-DgZ7r_GQ.js";import"./useCurrentTheme-Czjolaja.js";import"./index-BwEGatY_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0KPyHmS.js";import"./paper-plane-B3JfZYpI.js";import"./index-CBYgCKNh.js";import"./less-BnTb-LS4.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
