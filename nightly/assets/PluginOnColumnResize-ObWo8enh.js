import{j as o}from"./iframe-RmeQ8XGC.js";import{useMDXComponents as n}from"./index-kR0XEGhk.js";import{I as r,F as m}from"./CommandsAndQueries-C1TIWg_l.js";import{M as p,C as s}from"./blocks-DaxiJjGb.js";import"./Tag-SV0H5ODo.js";import"./index-1jGrAlxH.js";import"./copy-Bxjpqlrz.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CvNR8_-Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIaOPhno.js";import"./index-CaXdH-JM.js";import"./index-Dg9UiDQJ.js";import"./Link-DiD1re6X.js";import"./index-P4hNb3E_.js";import"./index-BzAkCwZQ.js";import"./index-ICvStq6z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCSTig2E.js";import"./addCustomCSSWithScoping-D6LA06yL.js";import"./index-Dn-It_jb.js";import"./information-BGE1sBpB.js";import"./sys-enter-2-CFWWj7rX.js";import"./alert-DOCQy2rj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DrNrrQBn.js";import"./delete-Bgpt9UL9.js";import"./settings-B6qHIMc_.js";import"./NoData-DvirCjMy.js";import"./IllustratedMessage-NOwzz5-E.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-B1RZxKut.js";import"./index-DymmdOGk.js";import"./index-BrNhwdfa.js";import"./slim-arrow-down-BfDEZlhi.js";import"./Input-C0RQAQ_K.js";import"./ResponsivePopoverCommon.css-Bb2CDDwj.js";import"./ValueStateMessage.css-A-AQ78Le.js";import"./Suggestions.css-DQpTb0pt.js";import"./ListBoxItemGroupTemplate-DmRiL6u4.js";import"./ComboBoxItemGroup-TUyXkEDW.js";import"./ListItemBaseTemplate-D6x618bx.js";import"./Token-3IndTOm3.js";import"./ScrollEnablement-ZXEMw5No.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZLNiFs4r.js";import"./ToggleButton-hyvWFxwf.js";import"./SuggestionItem-Yq1R2rBr.js";import"./index-BvRfALoj.js";import"./Option-BYnx9qqz.js";import"./index-CvMS_bDE.js";import"./SegmentedButton-CXxD3ML7.js";import"./index-DWwQPCDK.js";import"./Select-GO81chS2.js";import"./InvisibleMessage-CAjaGHoP.js";import"./slim-arrow-down-DL7OQOka.js";import"./index-BuooPs5O.js";import"./index-Df3zkpR1.js";import"./index-h9khwDpH.js";import"./index-B6z1BRDU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BAP8GeEZ.js";import"./group-2-SSe9KuRV.js";import"./sort-descending-C38OTzhL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-FUSiAWga.js";import"./utils-Dh_E7hqa.js";import"./index-CwAKKYUu.js";import"./index-DyPtDivo.js";import"./index-D1RAxoJs.js";import"./navigation-down-arrow-CSBNkbSa.js";import"./navigation-right-arrow-ZQL6lSfa.js";import"./navigation-right-arrow-BTS_mzJX.js";import"./useCurrentTheme-D5tplJAn.js";import"./index-Ys9BGoGM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BCtUW8tC.js";import"./paper-plane-Dj0V2el6.js";import"./index-CKSnoblL.js";import"./less-CVIXlP33.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
