import{j as o}from"./iframe-BVsLYlhe.js";import{useMDXComponents as n}from"./index-DavU5a3Y.js";import{I as r,F as m}from"./CommandsAndQueries-Bi9b4xK_.js";import{M as p,C as s}from"./blocks-BwdcnqOn.js";import"./Tag-CNJ-l2ra.js";import"./index-Chy_S0qP.js";import"./copy-hvSX-Foh.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DCSA0DE3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBlqkBew.js";import"./index-CppXcbvf.js";import"./index-CQv5SAoi.js";import"./Link-mimmL_0g.js";import"./index-pqTqdxQB.js";import"./index-bVRMu9zO.js";import"./index-2NXGICNv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dhuu23v1.js";import"./addCustomCSSWithScoping-CKzpaFfQ.js";import"./index-BZsG0oyU.js";import"./information-Q1gDT6BU.js";import"./sys-enter-2-CVfnD9eL.js";import"./alert-BQuV4PvU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Be_omCvA.js";import"./delete-wM7iGzUT.js";import"./settings-DUTgYsHz.js";import"./NoData-BP3lBXbm.js";import"./IllustratedMessage-DOGBzg3t.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dg1Tep4f.js";import"./index-C1WMOxlR.js";import"./index-CVk9SmTz.js";import"./slim-arrow-down-DhCWTPrz.js";import"./Input-B1h80Qke.js";import"./ResponsivePopoverCommon.css-uHz60RXl.js";import"./ValueStateMessage.css-BGnf7WuL.js";import"./Suggestions.css-BC296_76.js";import"./ListBoxItemGroupTemplate-C4BIIOjO.js";import"./ComboBoxItemGroup-CL94Ym8W.js";import"./ListItemBaseTemplate-DTp4ZwAc.js";import"./Token-D0KaAyb8.js";import"./ScrollEnablement-OBzjrUFw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MnW36ayG.js";import"./ToggleButton-CfDtgg4F.js";import"./SuggestionItem-B4pYo2Xh.js";import"./index-DtvHgBUt.js";import"./Option-BmneA1aN.js";import"./index-MoN8cciG.js";import"./SegmentedButton-CZ9H8jJT.js";import"./index-CPMcUc-n.js";import"./Select-B9O7SbWK.js";import"./InvisibleMessage-COd6vRv-.js";import"./slim-arrow-down-CyFYuexk.js";import"./index-ytFospDP.js";import"./index-MqiJoXt5.js";import"./index-CeMerd7K.js";import"./index-BSHqwN58.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CpwTCgMq.js";import"./group-2-BQbBlrd5.js";import"./sort-descending-ABbRNgKt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHnVQWJI.js";import"./utils-DKALz9nY.js";import"./index-c_PF86vB.js";import"./index-BG1NckKa.js";import"./index-JsVdJQMp.js";import"./navigation-down-arrow-BBbnWEl3.js";import"./navigation-right-arrow-Dv-Qzlpb.js";import"./navigation-right-arrow-DLSHU6Nw.js";import"./useCurrentTheme-DSoyNXre.js";import"./index-Cufgt29f.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzejkbSx.js";import"./paper-plane-CXb4AHwo.js";import"./index-DZtB4CEv.js";import"./less-8xYh8vLI.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
