import{j as o}from"./iframe-CMOSZBev.js";import{useMDXComponents as n}from"./index-BTwv99x0.js";import{I as r,F as m}from"./CommandsAndQueries-BBxM4nbH.js";import{M as p,C as s}from"./blocks-C7uNs7TS.js";import"./Tag-CqfvYh1K.js";import"./index-SUBNzPDi.js";import"./copy-CxpwRqG0.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BGGuuGm3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcSeOVwt.js";import"./index-_PRo-73t.js";import"./index-CKeepgUa.js";import"./Link-D-jONPM3.js";import"./index-kRKXYALW.js";import"./index-BG7mFBoF.js";import"./index-DnIJB1t0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkqbRy7L.js";import"./addCustomCSSWithScoping-CCFGNXq3.js";import"./index-B2Bp115n.js";import"./information-D_sfcND0.js";import"./sys-enter-2-D7lHEvN4.js";import"./alert-CMJogacJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWm8Pdnv.js";import"./delete-jqJpTe2L.js";import"./settings-1zMM0TTB.js";import"./NoData-DBuwgpdA.js";import"./IllustratedMessage-BofcQBlB.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-DWqRVxEj.js";import"./index-CKirJzli.js";import"./index-DF53ugeV.js";import"./slim-arrow-down-DAnkwZ8z.js";import"./Input-BmUNjham.js";import"./ResponsivePopoverCommon.css-BCnF-C9t.js";import"./ValueStateMessage.css-3iIUq-Eq.js";import"./Suggestions.css-BiChEPXm.js";import"./ListBoxItemGroupTemplate-CCd_4VBx.js";import"./ComboBoxItemGroup-BTATmQjz.js";import"./ListItemBaseTemplate-CCj-4nFf.js";import"./Token-Bw95vKiC.js";import"./ScrollEnablement-CZWkeAzp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZzU_GhBz.js";import"./ToggleButton-PO6AUubZ.js";import"./SuggestionItem-DGmpPMHq.js";import"./index-DErYtSvu.js";import"./Option-BASIIjCE.js";import"./index-D_1ao0HG.js";import"./SegmentedButton-Ck1jyoaW.js";import"./index-DN0A1xHB.js";import"./Select-Dl8hzlud.js";import"./InvisibleMessage-CxtLELZ9.js";import"./slim-arrow-down-D_esAgSu.js";import"./index-DXnWcts-.js";import"./index-BVDh7HGR.js";import"./index-CCryildS.js";import"./index-Cb1OiNpu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B2Cmbs5j.js";import"./group-2-CW05y1Vx.js";import"./sort-descending-BJlygo9d.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CTplp2oj.js";import"./utils-CJbFgKgb.js";import"./index-CVcS8amw.js";import"./index-CKyJB_mr.js";import"./index-BqkbFWdI.js";import"./navigation-down-arrow-ehohWkFC.js";import"./navigation-right-arrow-BbmuEJCf.js";import"./navigation-right-arrow-5URvnLbD.js";import"./useCurrentTheme-B0G4hFaD.js";import"./index-CZhfcpCP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cu0Jio6B.js";import"./paper-plane-CwtFbMNe.js";import"./index-D1fdw4IU.js";import"./less-CzDyuHok.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
