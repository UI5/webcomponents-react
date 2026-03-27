import{j as o}from"./iframe-D-TNtC6A.js";import{useMDXComponents as r}from"./index-DDfPSZgy.js";import{I as n}from"./CommandsAndQueries-CCy8Y-No.js";import{M as m,C as p}from"./blocks-RldXLLlr.js";import"./Tag-CVmCoWT_.js";import"./index-PDZqoB_N.js";import"./copy-BJeubdCo.js";import{F as s}from"./Footer-DhOHIb5E.js";import"./PageNotFound-CRTwOHot.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C7rivsvq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BGCjF1qN.js";import"./index-C2w-vlt1.js";import"./index-BDllvg-C.js";import"./index-DbrfUFZo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CV5eSmfw.js";import"./addCustomCSSWithScoping-5_2YlXdt.js";import"./index-C4n54s66.js";import"./index-DA9C_9_K.js";import"./index-dgee814-.js";import"./information-DHrVSqd8.js";import"./sys-enter-2-B-IKKoin.js";import"./alert-COQE9Wii.js";import"./index-dI-i4srq.js";import"./Illustrations-MW4Ztj5J.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-MyDeBWpT.js";import"./delete-GPaEZE8g.js";import"./settings-Bb5Mx7xn.js";import"./NoData-B9h6w7Zz.js";import"./NoFilterResults-Bp3EjNTS.js";import"./index-BKgssG5g.js";import"./IllustratedMessage-B2Q7MVnn.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-e_Mdpfp_.js";import"./Input-BXBWRRsA.js";import"./ResponsivePopoverCommon.css-BXn4_Wc7.js";import"./ValueStateMessage.css-B4_y8RjA.js";import"./Suggestions.css-hnx4n1TH.js";import"./ListBoxItemGroupTemplate-BIw1VxCq.js";import"./ComboBoxItemGroup-aVMq34XM.js";import"./ListItemBaseTemplate-B0alOYy7.js";import"./Token-4VyHLU6r.js";import"./ScrollEnablement-D_mv-5V2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DuzTgsRf.js";import"./ToggleButton-CkF3MXn8.js";import"./multiselect-all-B9XzavJM.js";import"./SuggestionItem-COYhuiQ9.js";import"./index-BKVW7RHH.js";import"./Option-CbSicczt.js";import"./index-uAzDHEjW.js";import"./SegmentedButton-f-Cay0kn.js";import"./index-DNu777W2.js";import"./Select-DVELUtat.js";import"./InvisibleMessage-BWPPhSeN.js";import"./index-D5UP9jEd.js";import"./index-Ct1p6vuk.js";import"./index-Bb90VLCU.js";import"./index-ptWDqsta.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cfh1ZJNO.js";import"./group-2-y-iu2VRM.js";import"./sort-descending-BM0MkbBg.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BLX5GUEm.js";import"./utils-DVfFMzf7.js";import"./index-DnoKZWri.js";import"./index-pc0DCYF4.js";import"./index-BZfHb_PP.js";import"./navigation-down-arrow-B34ZUBu8.js";import"./navigation-right-arrow-BqgU6zlC.js";import"./navigation-right-arrow-CHS2kQ0a.js";import"./useCurrentTheme-BMG4HH6K.js";import"./index-BFc7Am7o.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-2x73p0EG.js";import"./paper-plane-BOmm5Qav.js";import"./index-BebXPfBu.js";import"./less-BWi_dI9N.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
