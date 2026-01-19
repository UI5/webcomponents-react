import{j as o}from"./iframe-CqyRxNKY.js";import{useMDXComponents as n}from"./index-CXuCYMlQ.js";import{I as r,F as m}from"./CommandsAndQueries-DLVKRV5D.js";import{M as p,C as s}from"./blocks-05z5mbmD.js";import"./Tag-DuSXABBC.js";import"./index-C2IzZWSs.js";import"./copy-B4Tt60gX.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CBm2X1QF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-H9dUlo5Q.js";import"./index-BseYaHXw.js";import"./index-4M_RVJJe.js";import"./Link-CXMFuXBh.js";import"./index-DzGBN3np.js";import"./index-CcSvXznG.js";import"./index-CwxFUtHh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bdq0yBwh.js";import"./addCustomCSSWithScoping-Bi_7urmM.js";import"./index-BymRtllO.js";import"./information-Ezgcqzkg.js";import"./sys-enter-2-5MMglnM6.js";import"./alert-BAouMQ7q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BuNqlAjt.js";import"./delete-BbGK1u87.js";import"./settings-DIlRpxvA.js";import"./NoData-BxK7Pf7G.js";import"./IllustratedMessage-DT058xfx.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-kuqPc1vX.js";import"./index-BM2t6dv5.js";import"./index-CorD3FCo.js";import"./slim-arrow-down-XrizyWJX.js";import"./Input-Btn3NqEP.js";import"./ResponsivePopoverCommon.css-BHPxlmcC.js";import"./ValueStateMessage.css-mCgjmZWa.js";import"./Suggestions.css-Ppn_4y7L.js";import"./ListBoxItemGroupTemplate-COFn4xTr.js";import"./ComboBoxItemGroup-BR6fMrLl.js";import"./ListItemBaseTemplate-DexxF4Wd.js";import"./Token-Dwa2qLYj.js";import"./ScrollEnablement-DWFfp1Ql.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDPTJ4VI.js";import"./ToggleButton-ChKD3yaL.js";import"./SuggestionItem-tcsJtTjM.js";import"./index-CLWuTNUb.js";import"./Option-CLygUspk.js";import"./index-BPBdqMTp.js";import"./SegmentedButton-DtCM4MtJ.js";import"./index-QLIu92PZ.js";import"./Select-CS7kvNev.js";import"./InvisibleMessage-fNBDK7S3.js";import"./slim-arrow-down-C6i4R0LO.js";import"./index-ByR0cNcw.js";import"./index-DGvdc7FV.js";import"./index-WMMIdr0v.js";import"./index-B3oIoIuT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CIu0BZu0.js";import"./group-2-iMc-Tv7m.js";import"./sort-descending-DV0fc1pJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KnanNVk9.js";import"./utils-D28-Pdwf.js";import"./index-DLnOQir-.js";import"./index-xFlZ9F3z.js";import"./index-C-6D1Wpo.js";import"./navigation-down-arrow-BcxM96MS.js";import"./navigation-right-arrow-rjgI-qTH.js";import"./navigation-right-arrow-CLMRBwo6.js";import"./useCurrentTheme-CtkLN-hF.js";import"./index-B2kdW0ae.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVxv5eSK.js";import"./paper-plane-DMN-jmcN.js";import"./index-TNQ5kc5_.js";import"./less-CvdXbD0I.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
