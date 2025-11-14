import{j as o}from"./iframe-4qrVzB25.js";import{useMDXComponents as n}from"./index-C23NGFAV.js";import{I as r,F as m}from"./CommandsAndQueries-C8f_O47Z.js";import{M as p,C as s}from"./blocks-CyApLjCn.js";import"./Tag-DxNYrBt-.js";import"./index-BHBPbkXo.js";import"./copy-BwZFHKgv.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BGtl3UB-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cj8ZVdQX.js";import"./index-bsQInf2g.js";import"./index-MWca-2b0.js";import"./Link-Cc0E88FG.js";import"./index-CMfGGfhU.js";import"./index-Cvq3zOuj.js";import"./index-Cjln1VVF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqnCkxg.js";import"./addCustomCSSWithScoping-DQAaXiXr.js";import"./index-CU3hZFou.js";import"./information-DyICkYh-.js";import"./sys-enter-2-I-7Y6xsp.js";import"./alert-DbMRFtnZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dpm6wpGO.js";import"./delete-DFB2rKcT.js";import"./settings-P1Tu1UA2.js";import"./NoData-CAyhgKIF.js";import"./IllustratedMessage-MSluXbw5.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C7v7m6d5.js";import"./index-D7O6U1BC.js";import"./index-D-c-emv0.js";import"./slim-arrow-down-CXefVYMG.js";import"./Input-DCZqkJuY.js";import"./ResponsivePopoverCommon.css-C7ocu6v6.js";import"./ValueStateMessage.css-BkV0tb0J.js";import"./Suggestions.css-DkwtHK1N.js";import"./ListBoxItemGroupTemplate-Dx7ZVMwg.js";import"./ComboBoxItemGroup-CTcw46H9.js";import"./ListItemBaseTemplate-KBembrXH.js";import"./Token-CIWwMwgE.js";import"./ScrollEnablement-CR5txl14.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CjlAH9Fu.js";import"./ToggleButton-CVx_cCdy.js";import"./SuggestionItem-CjsbBv9j.js";import"./index-8zB2ZRqP.js";import"./Option-C10NqIPh.js";import"./index-CueD1sBZ.js";import"./SegmentedButton-D30KObWP.js";import"./index-3QlNC4k-.js";import"./Select-DOxg7abA.js";import"./InvisibleMessage-CEq_zNWh.js";import"./slim-arrow-down-HR07Gity.js";import"./index-DkDmb4j6.js";import"./index-q8cedDhq.js";import"./index-CC5rZlHP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dr0RP3gS.js";import"./group-2-CpBQCdfq.js";import"./sort-descending-BuPBBBgN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BxTTaJg9.js";import"./utils-B9_JuoKt.js";import"./index-uGUHJIW2.js";import"./index-DPoSKLzi.js";import"./index-DuUIqk7w.js";import"./navigation-down-arrow-CW_68QW5.js";import"./navigation-right-arrow-XZ7xPYvX.js";import"./navigation-right-arrow-DTS3LoQE.js";import"./useCurrentTheme-7TOMGYM8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DDFYNMIL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0uHFjA1.js";import"./paper-plane-ylHW1ldh.js";import"./index-BGEN4a8i.js";import"./less-BmzQiuIj.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
