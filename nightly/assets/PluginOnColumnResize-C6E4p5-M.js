import{j as o}from"./iframe-D6FNTQkK.js";import{useMDXComponents as n}from"./index-B6bRqhkI.js";import{I as r,F as m}from"./CommandsAndQueries-BXb9AdOB.js";import{M as p,C as s}from"./blocks-CncoMbCj.js";import"./Tag-BgsP26gD.js";import"./index-TUX9UWDf.js";import"./copy-CV5IiNGP.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BOeh4XmQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTSo6gsw.js";import"./index-Cn0-2HTO.js";import"./index-C01hHOib.js";import"./Link-ECkeIbxq.js";import"./index-i5JoI6q6.js";import"./index-CEtC1hdv.js";import"./index-_w6613cy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COKdY-da.js";import"./addCustomCSSWithScoping-BKP4itiy.js";import"./index-C8Bzh-c-.js";import"./information-DX0Ia3Tr.js";import"./sys-enter-2-BXq7hn_D.js";import"./alert-Dc1BRwci.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-yi9kxnte.js";import"./delete-CFOKUYe0.js";import"./settings-CfB4e9cX.js";import"./NoData-Dq3tbyi3.js";import"./IllustratedMessage-cjkHzwDQ.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DW0YuRZ7.js";import"./index-CTZpCD3C.js";import"./index-DZv_VOFr.js";import"./slim-arrow-down-CHkc3XG4.js";import"./Input-CWaYFEE0.js";import"./ResponsivePopoverCommon.css-DwSQpbCL.js";import"./ValueStateMessage.css-B-79kasT.js";import"./Suggestions.css-BX_6fSbp.js";import"./ListBoxItemGroupTemplate-D5A0k_8G.js";import"./ComboBoxItemGroup-DgqGaLwi.js";import"./ListItemBaseTemplate-BwKCfdZC.js";import"./Token-CdK57w2s.js";import"./ScrollEnablement-BnyFUzOB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-khyxx9eu.js";import"./ToggleButton-UgNXHRCa.js";import"./SuggestionItem-DmIAT0hW.js";import"./index-Bvo9r74r.js";import"./Option-Bp3m08uY.js";import"./index-B-qqk9Qh.js";import"./SegmentedButton-WJja0alW.js";import"./index-DFLZWraU.js";import"./Select-BsOhyv3Y.js";import"./InvisibleMessage-CuNZ9Vpq.js";import"./slim-arrow-down-BcGJUmQm.js";import"./index-BgVQgXtA.js";import"./index-A1xbEiXK.js";import"./index-5wdnnntn.js";import"./index-CvdFD22I.js";import"./IconDesign-DXd8PPVF.js";import"./filter-8F6Zx2fh.js";import"./group-2-bMLqGL0E.js";import"./sort-descending-c2BT37ev.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XmEHG45R.js";import"./utils-DbT12vyG.js";import"./index-Lif6Dilg.js";import"./index-1e28FYLT.js";import"./index-D27T-mws.js";import"./navigation-down-arrow-BN5WPv52.js";import"./navigation-right-arrow-DtQeW2Tc.js";import"./navigation-right-arrow-CLKqeinu.js";import"./useCurrentTheme-DXL7KtWf.js";import"./index-CeT2M4uq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BISPhePp.js";import"./paper-plane-CZun4wFx.js";import"./index-CtNicNZp.js";import"./less-By2gp0Gl.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
