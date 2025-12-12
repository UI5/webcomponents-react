import{j as o}from"./iframe-CGHDmI6F.js";import{useMDXComponents as n}from"./index-vmg_VptB.js";import{I as r,F as m}from"./CommandsAndQueries-Xpj75dw6.js";import{M as p,C as s}from"./blocks-CLJ0TMRL.js";import"./Tag-CNB8wsWP.js";import"./index-weaEi3VY.js";import"./copy-_Dvyc5eh.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dv24tS2Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQzAmjvO.js";import"./index-B2jKXsJA.js";import"./index-DmbY-g5r.js";import"./Link-Cf4Rypri.js";import"./index-W3wBcX-G.js";import"./index-C2rF-vpI.js";import"./index-BCCC4ZMt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BxMyXeCI.js";import"./addCustomCSSWithScoping-C1fbuE3M.js";import"./index-DikhnyC-.js";import"./information-CjscpLC3.js";import"./sys-enter-2-B9ZMSpbA.js";import"./alert-B6YshAIH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xGyGn9Oj.js";import"./delete-Dte8JniV.js";import"./settings-D8Q7G5ao.js";import"./NoData-BSir_879.js";import"./IllustratedMessage-Pr1F3g0w.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CcfxTZmK.js";import"./index-Df1W4o4n.js";import"./index-BHD7XqPx.js";import"./slim-arrow-down-BrkIMPBm.js";import"./Input-BfaIKd-_.js";import"./ResponsivePopoverCommon.css-BTXHr8qi.js";import"./ValueStateMessage.css-CzGkVYOI.js";import"./Suggestions.css-BllQy4_n.js";import"./ListBoxItemGroupTemplate-BNcYJ2hU.js";import"./ComboBoxItemGroup-o3SCM_eV.js";import"./ListItemBaseTemplate-Cx78cHSs.js";import"./Token-B2k1mgDr.js";import"./ScrollEnablement-CQbg5YPQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D40-YKTd.js";import"./ToggleButton-qMwCKZPr.js";import"./SuggestionItem-Call-j_q.js";import"./index-CIW-3Zsf.js";import"./Option-DDv7G9Ot.js";import"./index-L2YJQjiE.js";import"./SegmentedButton-C1vafHDU.js";import"./index-Bd1QPIE9.js";import"./Select-BP0JcAa4.js";import"./InvisibleMessage-cdKeCSvx.js";import"./slim-arrow-down-nSXWTf4e.js";import"./index-BIR_c1OV.js";import"./index-DLXj2zZ8.js";import"./index-B6w0uZ_P.js";import"./index-B0mnhl2M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BncDb-2Q.js";import"./group-2-ByxSiuJy.js";import"./sort-descending-CSgmZ9wj.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-9B1NfiCS.js";import"./utils-DDVw8Ej7.js";import"./index-DlDUm1Gd.js";import"./index-CPSAwVgn.js";import"./index-Cjbf81BQ.js";import"./navigation-down-arrow-Cr9SgrB6.js";import"./navigation-right-arrow-DqAdlQN5.js";import"./navigation-right-arrow-DyqmD8NH.js";import"./useCurrentTheme-KBmY2HTm.js";import"./index-D5-qOhI3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cp-zKd6f.js";import"./paper-plane-BHOdso4m.js";import"./index-Cf0oRXr4.js";import"./less-Ctp0LmgJ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
