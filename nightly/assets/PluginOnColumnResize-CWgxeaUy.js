import{j as o}from"./iframe-C7IxwDmR.js";import{useMDXComponents as n}from"./index-CbSg1oVF.js";import{I as r,F as m}from"./CommandsAndQueries-D3KUBOYC.js";import{M as p,C as s}from"./blocks-3mjErVLE.js";import"./Tag-C9e9pWXA.js";import"./index-BN5pmzGS.js";import"./copy-D-VhlFxG.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bd0C7vts.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfKFL4Pe.js";import"./index-DScPik_c.js";import"./index-BiORqeCW.js";import"./Link-CCpfCikN.js";import"./index-CHmX3iCn.js";import"./index-DifvSs4M.js";import"./index-C1RQfiDX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-me-lZqyi.js";import"./addCustomCSSWithScoping-Ddb1r2sC.js";import"./index-Btmndd9w.js";import"./information-wiA8vfAE.js";import"./sys-enter-2-j2JxX-0l.js";import"./alert-Cm08TFjk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChqHr5wK.js";import"./delete-BSl3wy38.js";import"./settings-DGhtyKkS.js";import"./NoData-ZmM9tZ25.js";import"./IllustratedMessage-D-WEWynv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-1-g84_aS.js";import"./index-CscJ0cw_.js";import"./index-CwLFHpug.js";import"./slim-arrow-down-BNmOcvZN.js";import"./Input-zvxkPfUn.js";import"./ResponsivePopoverCommon.css-CswkUY4O.js";import"./ValueStateMessage.css--jDZnzoj.js";import"./Suggestions.css-CWsApbdF.js";import"./ListBoxItemGroupTemplate-ic-gllq_.js";import"./ComboBoxItemGroup-BgqJcjSC.js";import"./ListItemBaseTemplate-CcnlE6Sk.js";import"./Token-_905z17c.js";import"./ScrollEnablement-BD9V_oV0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BQaqKR0d.js";import"./ToggleButton-BufLqCEs.js";import"./SuggestionItem-CtttL5Nk.js";import"./index-7SdjD4wD.js";import"./Option-BM1N9G0j.js";import"./index-nWfCkMQS.js";import"./SegmentedButton-A3oHgqen.js";import"./index-DI3HfrFm.js";import"./Select-D4uOkSLO.js";import"./InvisibleMessage-3o-oW7oq.js";import"./slim-arrow-down-TXkhd4Mj.js";import"./index-Bc14vZWb.js";import"./index-DOS93QAh.js";import"./index-CR6Z_Rhf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-AZHZA8cU.js";import"./group-2-ZZFScIlf.js";import"./sort-descending-TOMxzf0j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CJRUeV6T.js";import"./utils-YyqGWE78.js";import"./index-DYQpLwRl.js";import"./index-RXV3LSnp.js";import"./index-CQqHvQDP.js";import"./navigation-down-arrow-pKD6UD3T.js";import"./navigation-right-arrow-D52cg3R3.js";import"./navigation-right-arrow-WwNAbjqy.js";import"./useCurrentTheme-3HGEU4AP.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D4AmYoSs.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DDhHKcDh.js";import"./paper-plane-zbAKlJWW.js";import"./index-CSaUThvG.js";import"./less-GzasUkSp.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
