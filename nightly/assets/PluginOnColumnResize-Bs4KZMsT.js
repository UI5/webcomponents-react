import{j as o}from"./iframe-COnm-5Wq.js";import{useMDXComponents as n}from"./index-BScb0EKa.js";import{I as r,F as m}from"./CommandsAndQueries-fIm6tI_s.js";import{M as p,C as s}from"./blocks-DdnCkDeP.js";import"./Tag-B6PukD9x.js";import"./index-DuYLDSkg.js";import"./copy-qxwrkOPO.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BPXkUY3a.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Be7TM_X2.js";import"./index-P97YIdW0.js";import"./index-nBIeIwBJ.js";import"./Link-HYZaoUUQ.js";import"./index-B7Tpi00A.js";import"./index-AzkmjRNO.js";import"./index-D0jCTq5s.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BgIs3PmD.js";import"./addCustomCSSWithScoping-6qkiGAQG.js";import"./index-CEwTdt5x.js";import"./information-B-WRmTFj.js";import"./sys-enter-2-CoP1Serd.js";import"./alert-CyV5UnQC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZIK-Rls1.js";import"./delete-CstNP39o.js";import"./settings-B6aW8T1K.js";import"./NoData-C_Tt_a6V.js";import"./IllustratedMessage-D5qW_4Mw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BjMAgFLJ.js";import"./index-CZs2DsiV.js";import"./index-D0dk6VOY.js";import"./slim-arrow-down-3pnIuBHq.js";import"./Input-IFtsbt_3.js";import"./ResponsivePopoverCommon.css-CcP_WrIC.js";import"./ValueStateMessage.css-BFPsrOD8.js";import"./Suggestions.css-DD-tyscS.js";import"./ListBoxItemGroupTemplate-s02oSqvp.js";import"./ComboBoxItemGroup-BRC6L9Sm.js";import"./ListItemBaseTemplate-9M8GkXzY.js";import"./Token-DosFgNlL.js";import"./ScrollEnablement-DxmmW8DX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BhUgq0GU.js";import"./ToggleButton-Dgsm-QJP.js";import"./SuggestionItem-CJz2OlH9.js";import"./index-v8SH84Mn.js";import"./Option-C0Ypih71.js";import"./index-BNluZkA_.js";import"./SegmentedButton-Cl6x6Obn.js";import"./index-BpjRrguz.js";import"./Select-YsyZoFbn.js";import"./InvisibleMessage-B1Y0A4_S.js";import"./slim-arrow-down-DL9BpCuU.js";import"./index-CEB-ApWT.js";import"./index-D25d4E5j.js";import"./index-BBBvNHMK.js";import"./index-DZ_u1ZQX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D8SXkPNK.js";import"./group-2-CmBZ8zLm.js";import"./sort-descending-DqYeqtsl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Du1BrkM7.js";import"./utils-CotoRCsU.js";import"./index-Db5QhTIJ.js";import"./index-CDNkck04.js";import"./index-B5Rbqc3j.js";import"./navigation-down-arrow-BZPJPqDn.js";import"./navigation-right-arrow-BHQhwyzy.js";import"./navigation-right-arrow-B18OD9Dt.js";import"./useCurrentTheme-BcF7vgZS.js";import"./index-BmHYBzvc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CKV0TO4b.js";import"./paper-plane-B9f3FIfR.js";import"./index-BDppF75s.js";import"./less-DNrWl_5o.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
