import{j as o}from"./iframe-DKMkKoYy.js";import{useMDXComponents as n}from"./index-DwgZfgb7.js";import{I as r,F as m}from"./CommandsAndQueries-BeeR2K5X.js";import{M as p,C as s}from"./blocks-Bv7S8SwX.js";import"./Tag-D068unQp.js";import"./index-CzUGd6JN.js";import"./copy-CVTfErei.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DTS4v1Wt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcV3QYUz.js";import"./index-CqkyVNU6.js";import"./index-CRYo79rH.js";import"./Link-CIhe5KM_.js";import"./index-PDOaMfc0.js";import"./index-BPsR0vSK.js";import"./index-L49eAF_T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pWZ_QRmh.js";import"./addCustomCSSWithScoping-C2Y6K5ED.js";import"./index-D_8I6ySQ.js";import"./information-B0KiP948.js";import"./sys-enter-2-CDGYtOhu.js";import"./alert-5Abv9bcB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dhra6kfr.js";import"./delete-DUix6sNt.js";import"./settings-C5OEoL5X.js";import"./NoData-Cri307Dq.js";import"./IllustratedMessage-pa4ChjKu.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BkjD5jXB.js";import"./index-CGWtwsBT.js";import"./index-BHNOKsS3.js";import"./slim-arrow-down-DFO10dQK.js";import"./Input-Bywnd_wZ.js";import"./ResponsivePopoverCommon.css-Zw-71pun.js";import"./ValueStateMessage.css-BFEz-K6y.js";import"./Suggestions.css-BCRtc5sQ.js";import"./ListBoxItemGroupTemplate-ByysvU84.js";import"./ComboBoxItemGroup-rRFO05Df.js";import"./ListItemBaseTemplate-BwdOKIzC.js";import"./Token-DUFe1ufu.js";import"./ScrollEnablement-BA4gKr9W.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CIizhTTb.js";import"./ToggleButton-CpmK1M0o.js";import"./SuggestionItem-Djy8vKSb.js";import"./index-DFZofdAc.js";import"./Option-Dn0hRlAU.js";import"./index-C-serayw.js";import"./SegmentedButton-DcdMXKYR.js";import"./index-CUSU-sZ-.js";import"./Select-DcPG7akN.js";import"./InvisibleMessage-C330TfFr.js";import"./slim-arrow-down-CvM-d2Kg.js";import"./index-CpZAh2cz.js";import"./index-CflFfJ9L.js";import"./index-C4umghHT.js";import"./index-Cuh8Cott.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYz7ywwo.js";import"./group-2-HkaDgQ8q.js";import"./sort-descending-BkrTSQR1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-iPtp8h.js";import"./utils-LZ65B1HV.js";import"./index-arX-DEe4.js";import"./index-BEbANkX4.js";import"./index-J40sace8.js";import"./navigation-down-arrow-Dw2JTRKK.js";import"./navigation-right-arrow-DcK3gcB5.js";import"./navigation-right-arrow-Da_vKVqp.js";import"./useCurrentTheme-BoX5heyU.js";import"./index-BI1bMXh-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CE4g7ZKT.js";import"./paper-plane-DZlRHob0.js";import"./index-ae933fWZ.js";import"./less-DpSPHuZK.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
