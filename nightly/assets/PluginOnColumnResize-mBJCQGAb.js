import{j as o}from"./iframe-Dl0DWg8M.js";import{useMDXComponents as n}from"./index-Dunz3Qkg.js";import{I as r,F as m}from"./CommandsAndQueries-DcyHQWO5.js";import{M as p,C as s}from"./blocks-z5J1zZs0.js";import"./Tag-8UYUnG7U.js";import"./index-CIa6NQE1.js";import"./copy-BhfJfLSX.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BP0LJa49.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qDCkQVmj.js";import"./index-ClreWoEe.js";import"./index-fJlTqGLz.js";import"./Link-C2qcQY2b.js";import"./index-BtW57M3z.js";import"./index-DfHOwcie.js";import"./index-D98fiUtL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8jMVyWi.js";import"./addCustomCSSWithScoping-BtXYUpmM.js";import"./index-9_QD_94O.js";import"./information-0V3r1Ig4.js";import"./sys-enter-2-CxUk-uXZ.js";import"./alert-DWaZJdGL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DBsgvEJ8.js";import"./delete-DGhfhmvk.js";import"./settings-CCzCjc89.js";import"./NoData-DT7qf48U.js";import"./IllustratedMessage-CVhrLvam.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BPMHFkT9.js";import"./index-BJ5kqzUP.js";import"./index-BM2p53hS.js";import"./slim-arrow-down-WKx_RP1p.js";import"./Input-CPjqrIGm.js";import"./ResponsivePopoverCommon.css-BqUqASX7.js";import"./ValueStateMessage.css-BGdDzFrr.js";import"./Suggestions.css-u0KnI28S.js";import"./ListBoxItemGroupTemplate-BNIvrjxP.js";import"./ComboBoxItemGroup-BW8olXBy.js";import"./ListItemBaseTemplate-B4z_JR0H.js";import"./Token-B6us6uKB.js";import"./ScrollEnablement-DpTukKXY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cdf08mTY.js";import"./ToggleButton-thsHvfvo.js";import"./SuggestionItem-DTQvckjF.js";import"./index-ELus8qX5.js";import"./Option-DXP4vaIt.js";import"./index-CFE2kaqi.js";import"./SegmentedButton-D06YwmLr.js";import"./index-DWgfJtdr.js";import"./Select-De2if4z3.js";import"./InvisibleMessage-o07I0X4N.js";import"./slim-arrow-down-0jmMhJdt.js";import"./index-CozhcB3v.js";import"./index-BZ0o2qqh.js";import"./index-CXra9vNC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dls4AF5y.js";import"./group-2-Ma5EVCia.js";import"./sort-descending-BF50DcYy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KIunXsJC.js";import"./utils-SZqKSCgS.js";import"./index-BZsvxOnv.js";import"./index-Ny09u-cK.js";import"./index-DN3Jh2GN.js";import"./navigation-down-arrow-CCcXbr-Q.js";import"./navigation-right-arrow-RU6yhQUV.js";import"./navigation-right-arrow-B-ZYLR3_.js";import"./useCurrentTheme-O1jykDcm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrYqG4yl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-a4IOgjsv.js";import"./paper-plane-C8TajgYr.js";import"./index-BGtGU4dE.js";import"./less-CbCfyPoa.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
