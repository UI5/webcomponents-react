import{j as o}from"./iframe-BTfUB26H.js";import{useMDXComponents as n}from"./index-D3NtTefK.js";import{I as r,F as m}from"./CommandsAndQueries-BWcq9mTF.js";import{M as p,C as s}from"./blocks-AWBgpAl3.js";import"./Tag-BGFP3IN9.js";import"./index-B9IZul2P.js";import"./copy-D6Vht5qr.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BDMm55id.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlJoRRYt.js";import"./index-BBFhDjTC.js";import"./index-Cuze-7Fn.js";import"./Link-BMxWJfW1.js";import"./index-BzZqyp7s.js";import"./index-BgDIorry.js";import"./index-BtUK59WI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-nj-G9WCr.js";import"./addCustomCSSWithScoping-BuL6JqQV.js";import"./index-F0g47Tza.js";import"./information-CLBM1nY5.js";import"./sys-enter-2-BbIZ6tOc.js";import"./alert-Dqm1dR2l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DdxJ9ktW.js";import"./delete-CosJh4Wr.js";import"./settings-CrkRTssd.js";import"./NoData-CrPB3Etw.js";import"./IllustratedMessage-Dp_vq7kO.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DAE0PvWS.js";import"./index-G7JGBkSp.js";import"./index-Pc-tL94R.js";import"./slim-arrow-down-CkCy067l.js";import"./Input-CWdJBATj.js";import"./ResponsivePopoverCommon.css-C6uEz5Dl.js";import"./ValueStateMessage.css-Bm4czFd-.js";import"./Suggestions.css-jfF4NP-_.js";import"./ListBoxItemGroupTemplate-Cxw4j-yj.js";import"./ComboBoxItemGroup-DsBDLMFu.js";import"./ListItemBaseTemplate-rG4H0Nai.js";import"./Token-peOfkrul.js";import"./ScrollEnablement-BXX9C0K8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BeqJjBCf.js";import"./ToggleButton-CSUeQtqf.js";import"./SuggestionItem-DzkIs1mi.js";import"./index-0LZOa3fr.js";import"./Option-BzMwM8BQ.js";import"./index-BhAUVSXr.js";import"./SegmentedButton-8xKdGXJZ.js";import"./index-B3gpN7Aw.js";import"./Select-wjPPEddq.js";import"./InvisibleMessage-D6rgIzPo.js";import"./slim-arrow-down-COQfF4eP.js";import"./index-C0hZMZOj.js";import"./index-DSWytDHX.js";import"./index-BV2bpcIG.js";import"./index-kc3KkV9f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-r6JXO5z-.js";import"./group-2-Cie4H57f.js";import"./sort-descending-bkkz2k_R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-b_pilGpL.js";import"./utils-DHZMQwFC.js";import"./index-Bx4wP1U8.js";import"./index-Cy-22xtZ.js";import"./index-CcPafi79.js";import"./navigation-down-arrow-DMFBeJkE.js";import"./navigation-right-arrow-B_x4oAAg.js";import"./navigation-right-arrow-ycb02zKK.js";import"./useCurrentTheme-CD8arqKb.js";import"./index-CwyI01PI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-b3M525lM.js";import"./paper-plane-BssdKFPE.js";import"./index-CsvZqpSl.js";import"./less-CyWGcd4R.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
