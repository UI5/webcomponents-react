import{j as o}from"./iframe-CoAi7Ttt.js";import{useMDXComponents as n}from"./index-CTifqAle.js";import{I as r,F as m}from"./CommandsAndQueries-Bmwjvcx6.js";import{M as p,C as s}from"./blocks-Ybxx5XcU.js";import"./Tag-DogcFDWn.js";import"./index-zKgtSNJj.js";import"./copy-CDQOzwpW.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-ByBJ9ZH-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CO1YKgmB.js";import"./index-Cq0wf6-J.js";import"./index-CnlNXdqG.js";import"./Link-BYcIvZzO.js";import"./index-CDFqh5IR.js";import"./index-B6Wc4p5_.js";import"./index-Cq2phxGV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z6K6IIMy.js";import"./addCustomCSSWithScoping-BPStdEW-.js";import"./index-DbUh3jFl.js";import"./information-BEJpmRSo.js";import"./sys-enter-2-A-vrRu2-.js";import"./alert-Bip-otgE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ml1YjSwo.js";import"./delete-Bmuh7N5L.js";import"./settings-3-EWs3iX.js";import"./NoData-BeeL7oJD.js";import"./IllustratedMessage-DDDiGsCm.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DOM4bvJY.js";import"./index-BUNmVAeL.js";import"./index-Ce9_H2mo.js";import"./slim-arrow-down-C4Zv-sp4.js";import"./Input-B6TJfZNr.js";import"./ResponsivePopoverCommon.css-DEHIK5w4.js";import"./ValueStateMessage.css-taduqeY7.js";import"./Suggestions.css-B-HnuI29.js";import"./ListBoxItemGroupTemplate-Cw8tkkDC.js";import"./ComboBoxItemGroup-D4GwkaDp.js";import"./ListItemBaseTemplate-4zjGS_SN.js";import"./Token-87PIswjb.js";import"./ScrollEnablement-BkGsl_bk.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwmvV3ez.js";import"./ToggleButton-CHD9qof2.js";import"./SuggestionItem-CiNaD7wa.js";import"./index-O9Iaeyjv.js";import"./Option-yTMBTxoW.js";import"./index-CacjXjcP.js";import"./SegmentedButton-CDIHDaC9.js";import"./index-C8bJpO0W.js";import"./Select-BplUcK6s.js";import"./InvisibleMessage-DMo6sLGx.js";import"./slim-arrow-down-BeH-Dgqc.js";import"./index-DNcyh1s3.js";import"./index-NyngYkNy.js";import"./index-Dbog1EiU.js";import"./index-Bs_4T8nn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CRwGeHAq.js";import"./group-2-CpCeXAY5.js";import"./sort-descending-DJ5_tlNx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-RpjumSju.js";import"./utils-xumaylSf.js";import"./index-KighuX2F.js";import"./index-gniM_8IR.js";import"./index-DOlMH_3T.js";import"./navigation-down-arrow-qe1kaUvs.js";import"./navigation-right-arrow-SwkIH0vW.js";import"./navigation-right-arrow-CFFeqYEg.js";import"./useCurrentTheme-CbzIKp_1.js";import"./index-BhhaNHVG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cye1bIBc.js";import"./paper-plane-Bc39tSYe.js";import"./index-CKkhBjhg.js";import"./less-BsWMeBSw.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
