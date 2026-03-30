import{j as o}from"./iframe-Dr24b1_2.js";import{u as n,M as r,C as m}from"./blocks-DOkdIKLK.js";import{I as p}from"./CommandsAndQueries-D2RSxAeU.js";import"./Tag-BIxdINB7.js";import"./index-CL-oiXYR.js";import"./copy-D1SgAW06.js";import{F as s}from"./Footer-B2LKGocf.js";import"./PageNotFound-t4KH-Yk6.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CIs8KZqZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CG4ImuUx.js";import"./index-_maGeclj.js";import"./index-aTzn3I1m.js";import"./index-B_PGO6aF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dh4aGlp7.js";import"./addCustomCSSWithScoping-BCzlWLsZ.js";import"./index-VF4msgJe.js";import"./index-CjU6u75C.js";import"./index-DrqpZzSV.js";import"./information-C20uFQS0.js";import"./sys-enter-2-CQd_0MF7.js";import"./alert-B9PmGrag.js";import"./index-DcUuq1aq.js";import"./Illustrations-Dt9P8lxH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSeDtOFY.js";import"./delete-CTuwvNwN.js";import"./settings-D2zSFUQS.js";import"./NoData-BNUq2LAg.js";import"./NoFilterResults-C3EjDsD0.js";import"./index-DMGfqErw.js";import"./IllustratedMessage-DWcP1w35.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BBfVJLgm.js";import"./Input-irtd9wft.js";import"./ResponsivePopoverCommon.css-YJ26BxS_.js";import"./ValueStateMessage.css-BS498yF4.js";import"./Suggestions.css-DByIneIP.js";import"./ListBoxItemGroupTemplate-CrWVeqtk.js";import"./ComboBoxItemGroup-DfdSfqaL.js";import"./ListItemBaseTemplate-DeSJkaWA.js";import"./Token-DUD3s9-0.js";import"./ScrollEnablement-B1S99Wzm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4U2FtO3.js";import"./ToggleButton-BV0O-OUE.js";import"./multiselect-all-BFWwGBPs.js";import"./SuggestionItem-CjMIYdHg.js";import"./index-Be2SnvPr.js";import"./Option-BNc07i1m.js";import"./index-Dhr0uby_.js";import"./SegmentedButton-DIgm-PGW.js";import"./index-AylfCAiE.js";import"./Select-DUnUQvU_.js";import"./InvisibleMessage-gZ-HYpyf.js";import"./index-CbTWmPo9.js";import"./index-BAyOZzch.js";import"./index-DCFLXB0o.js";import"./index-CJOj_130.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CRhxLA-E.js";import"./group-2-eYTtZ8kH.js";import"./sort-descending-BQ3YJIaz.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BY-GjMmR.js";import"./utils-BXYFGvnm.js";import"./index-BiTc-6U3.js";import"./index-Bm6fGbEK.js";import"./index-CvsFmqac.js";import"./navigation-down-arrow-D1eVdFYB.js";import"./navigation-right-arrow-C_zepO0v.js";import"./navigation-right-arrow-BA43J9Vq.js";import"./useCurrentTheme-DxjT-4Tb.js";import"./index-DCaFjUpe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BcSpX-QV.js";import"./paper-plane-BEsK-8Qt.js";import"./index-BjDM9IYP.js";import"./less-DrUcv7lt.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(p,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function Eo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Eo as default};
