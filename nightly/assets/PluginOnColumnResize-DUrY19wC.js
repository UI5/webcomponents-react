import{j as o}from"./iframe-DYduXZhN.js";import{useMDXComponents as n}from"./index-Ci2-DdjO.js";import{I as r,F as m}from"./CommandsAndQueries-B9zetcQ0.js";import{M as p,C as s}from"./blocks-D9jMBEgy.js";import"./Tag-DIRdIcZz.js";import"./index-BOwVehE_.js";import"./copy-CkIF2sdc.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-74PDq_gz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cz134k4C.js";import"./index-9BFlmr8a.js";import"./index-C__H6VdM.js";import"./Link-BLFGRSbE.js";import"./index-BEkPqhUo.js";import"./index-BT55sXhr.js";import"./index-CrQhdGHw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tYCFSQM4.js";import"./addCustomCSSWithScoping-BvPW-C09.js";import"./index-DKd7eJ-2.js";import"./information-B4rZhRQI.js";import"./sys-enter-2-DdBtSqFS.js";import"./alert-Cbu3hZ-F.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-YqJDFM.js";import"./delete-BhUVbshM.js";import"./settings-DiEqNda9.js";import"./NoData-fSQ8QY6w.js";import"./IllustratedMessage-GpqfpasN.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B4kU78En.js";import"./index-Dkmz5osx.js";import"./index-DNLW7KKj.js";import"./slim-arrow-down-H6l6KWk5.js";import"./Input-DiOUIPji.js";import"./ResponsivePopoverCommon.css-5MnX9a2f.js";import"./ValueStateMessage.css-CRVtIysz.js";import"./Suggestions.css-BpvHNpy2.js";import"./ListBoxItemGroupTemplate-oWfZlc9k.js";import"./ComboBoxItemGroup-DKe0CAMl.js";import"./ListItemBaseTemplate-CAPQp5OP.js";import"./Token-DUgpBRII.js";import"./ScrollEnablement-D2gDebhQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-9qFWIUAt.js";import"./ToggleButton-DR-nlpgN.js";import"./SuggestionItem-CItgEz1T.js";import"./index-CGtEX1sV.js";import"./Option-Bong0I0_.js";import"./index-BCAebvTY.js";import"./SegmentedButton-BeGYrA28.js";import"./index-DHZh-84u.js";import"./Select-B59U1EMA.js";import"./InvisibleMessage-CT9yNbI0.js";import"./slim-arrow-down-BYh391LH.js";import"./index-DyOJGLZJ.js";import"./index-DrTZRfXS.js";import"./index-O9rzWAvd.js";import"./index-CbCDMDkJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-rv_pgNJ1.js";import"./group-2-BHhMM04u.js";import"./sort-descending-CmaZ1coo.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-mONp3tq9.js";import"./utils-BL2UvDbB.js";import"./index-DDCVZ4U5.js";import"./index-B3nHK15S.js";import"./index-DqaC_Ony.js";import"./navigation-down-arrow-0eA3UtLx.js";import"./navigation-right-arrow-0ntcsXEn.js";import"./navigation-right-arrow-CliMCU6T.js";import"./useCurrentTheme-DjznpaYd.js";import"./index-D6qhpAxp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRb5-qWs.js";import"./paper-plane-DqQwF7l0.js";import"./index-5cPAQ8_K.js";import"./less-EjJ2vttw.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
