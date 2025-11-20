import{j as o}from"./iframe-DXIHBwMx.js";import{useMDXComponents as n}from"./index-DxplZHhB.js";import{I as r,F as m}from"./CommandsAndQueries-Bq7v73lL.js";import{M as p,C as s}from"./blocks-q4g2VrtR.js";import"./Tag-tdzXLFPn.js";import"./index-CeX4wAvR.js";import"./copy-yrZW5TrM.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dl31wauj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-J54q0dgd.js";import"./index-8pDI1Lay.js";import"./index-DkkEQ9_P.js";import"./Link-BvSaBL9U.js";import"./index-Dl76_vfU.js";import"./index-DPgFjJws.js";import"./index-Bv3_HAKL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BcuYxUko.js";import"./addCustomCSSWithScoping-p2bq4BQn.js";import"./index-DVpq5CSs.js";import"./information-gul-J4WB.js";import"./sys-enter-2-6IAFnl06.js";import"./alert-B38L7NYF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8OeK81d.js";import"./delete-C-OqTYsp.js";import"./settings-VW8oUHKP.js";import"./NoData-BFUXMVZV.js";import"./IllustratedMessage-CWu0Y4jx.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Bp86e7JW.js";import"./index-CtFtlX5A.js";import"./index-DIbDvrTC.js";import"./slim-arrow-down-CMiqRMch.js";import"./Input-DKRggLIE.js";import"./ResponsivePopoverCommon.css-IT2s9x-e.js";import"./ValueStateMessage.css-BSBeeufO.js";import"./Suggestions.css-0mCo8ev-.js";import"./ListBoxItemGroupTemplate-CqnuO2NN.js";import"./ComboBoxItemGroup-DdSoCWpT.js";import"./ListItemBaseTemplate-BNMak7oT.js";import"./Token-DjZ5IwOr.js";import"./ScrollEnablement-DI_Ik22R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BA8y93oi.js";import"./ToggleButton-CctemxJS.js";import"./SuggestionItem-BgT2Te5p.js";import"./index-CGQFU_4D.js";import"./Option-CvKMeDMq.js";import"./index-qj4c4wBb.js";import"./SegmentedButton-D-tRNffC.js";import"./index-DcWs1wPd.js";import"./Select-CGo-0QVC.js";import"./InvisibleMessage-Baq9lBY3.js";import"./slim-arrow-down-CTJD6opM.js";import"./index-wL-q4Fof.js";import"./index-kVbMjwdW.js";import"./index-ztofxTu6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BqeorvhQ.js";import"./group-2-CbYCsJdZ.js";import"./sort-descending-Du_3xiim.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-uQRkwGba.js";import"./utils-CpTj5Wev.js";import"./index-Ltqvt3ql.js";import"./index-Bp-ixfoG.js";import"./index-DeY_iIAn.js";import"./navigation-down-arrow-tTyMgTsU.js";import"./navigation-right-arrow-3RPrvjsM.js";import"./navigation-right-arrow-Cp4Bs5Ws.js";import"./useCurrentTheme-DTBV76rd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-MOF2JPzV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B3qUjlQu.js";import"./paper-plane-CySSYvuC.js";import"./index-Cz8FWMC8.js";import"./less-CtdFYUXb.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
