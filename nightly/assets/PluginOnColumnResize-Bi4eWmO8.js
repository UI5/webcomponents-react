import{j as o}from"./iframe-BH4bVelf.js";import{useMDXComponents as n}from"./index-BZqT0YF1.js";import{I as r,F as m}from"./CommandsAndQueries-D9wpOiDr.js";import{M as p,C as s}from"./blocks-CeYDMKuM.js";import"./Tag-BXnIP2dS.js";import"./index-CJTqi7uU.js";import"./copy-Dqlw1cCi.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CU79LRwI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Clh4Efsf.js";import"./index-CF882nWm.js";import"./index-CaNjf1Vn.js";import"./Link-CWmFbngj.js";import"./index-BD7TNiZv.js";import"./index-BoC02bGf.js";import"./index-DwqLEbZm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C83XHNHQ.js";import"./addCustomCSSWithScoping-BSRRxoii.js";import"./index-AtaZxDlU.js";import"./information-BFXgiRFQ.js";import"./sys-enter-2-IrFhFhIl.js";import"./alert-2wR6R_Um.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5b86cogR.js";import"./delete-D4wiFYB9.js";import"./settings-CWwIQT_C.js";import"./NoData-BFhg-GG6.js";import"./IllustratedMessage-34DEvqfA.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BZAg4ngt.js";import"./index-BZGTGu9E.js";import"./index-BvDC2UXj.js";import"./slim-arrow-down-BYwdEN3E.js";import"./Input-B0gYbYgt.js";import"./ResponsivePopoverCommon.css-CkobxXTu.js";import"./ValueStateMessage.css-C6Kv6bre.js";import"./Suggestions.css-BLG2o1V5.js";import"./ListBoxItemGroupTemplate-prNPVmNr.js";import"./ComboBoxItemGroup-C29Z681b.js";import"./ListItemBaseTemplate-CxzuukWL.js";import"./Token-Ct7p5V6Z.js";import"./ScrollEnablement-Dz8a2847.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dk4MirOU.js";import"./ToggleButton-CKPPi0F4.js";import"./SuggestionItem-DTaZ3jXG.js";import"./index-B5H40sXS.js";import"./Option-D8eBTNON.js";import"./index-BqP_tsIy.js";import"./SegmentedButton-D16K0baA.js";import"./index-_nPQLI_b.js";import"./Select-5ewiLwL1.js";import"./InvisibleMessage-IGW-rAUo.js";import"./slim-arrow-down-9BYKuyUs.js";import"./index-7MRTM3HB.js";import"./index-DVGATJ5a.js";import"./index-DznWkkCi.js";import"./index-DldxGphJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXWEU5fn.js";import"./group-2-DRzez2hn.js";import"./sort-descending-C_q3rv9b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CSpNMFp0.js";import"./utils-C0YjVaw1.js";import"./index-CAeOO4wN.js";import"./index-B5eeZss-.js";import"./index-CBsiXwh_.js";import"./navigation-down-arrow-_ZsRec2W.js";import"./navigation-right-arrow-49__25dM.js";import"./navigation-right-arrow-dg6jTT0c.js";import"./useCurrentTheme-DAO2rCbm.js";import"./index-BsJLWcly.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsU26iOF.js";import"./paper-plane-CAa_-spX.js";import"./index-CROEbkYy.js";import"./less-B3ilKLXN.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
