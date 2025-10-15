import{j as o}from"./iframe-wbWwESAy.js";import{useMDXComponents as n}from"./index-BOBJYedV.js";import{I as r,F as m}from"./CommandsAndQueries-C1vl6z57.js";import{M as p,C as s}from"./blocks-B5IYlHFD.js";import"./Tag-BH6lPIks.js";import"./index-DQNSAqOh.js";import"./copy-sux1w53_.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-ymB0dvzI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Buwu-oqJ.js";import"./index-B81NkVkP.js";import"./index-Cupokltd.js";import"./Link-BN6Q-gzd.js";import"./index-BnSJ99QD.js";import"./index-DcmA7siw.js";import"./index-DqWD-oTo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqytePVm.js";import"./addCustomCSSWithScoping-CplaRZ4g.js";import"./index-DrYBsayo.js";import"./information-DASCm05s.js";import"./sys-enter-2-J3fKP-CE.js";import"./alert-D2qcbVgq.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CSCYBoid.js";import"./delete-CkbWcAQ8.js";import"./settings-DSjEV05c.js";import"./NoData-DSScVfbu.js";import"./IllustratedMessage-CixZtxVG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-b7Wr6axn.js";import"./index-D5jEuy6P.js";import"./index-rxWa-PP3.js";import"./slim-arrow-down-Beir7aM1.js";import"./Input-Vu44DOAo.js";import"./ResponsivePopoverCommon.css-D988s0PK.js";import"./ValueStateMessage.css-CdnX5Q24.js";import"./Suggestions.css-DzjZuQlP.js";import"./ListBoxItemGroupTemplate-CeF3Gz87.js";import"./ComboBoxItemGroup-j5CzfWaH.js";import"./ListItemBaseTemplate-BQRJYW54.js";import"./Token-Co-splGb.js";import"./ScrollEnablement-DlXiJ1Ol.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BnhmLw4e.js";import"./ToggleButton-BWLlCYgP.js";import"./SuggestionItem-BL--DX9A.js";import"./index-BuN2F6Z9.js";import"./Option-BfBV6oRK.js";import"./index-BASr6ULO.js";import"./SegmentedButton-BMoLUOOT.js";import"./index-CyJ9rJpG.js";import"./Select-C4v57l5j.js";import"./InvisibleMessage-DiUlqqZw.js";import"./slim-arrow-down-DGcq_Pe_.js";import"./index-DRSwvrEw.js";import"./index-4LVdgCdo.js";import"./index-D7tI0R5X.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CS8HWzLV.js";import"./group-2-zJzmiyTG.js";import"./sort-descending-D-FdC3xQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BtV9Msfp.js";import"./utils-CKST4OLl.js";import"./index-BZtqaS2C.js";import"./index-CxcyIJ4L.js";import"./index-DgwCbpUf.js";import"./navigation-down-arrow-Dp1eGb2c.js";import"./navigation-right-arrow-Cdr0GtsE.js";import"./navigation-right-arrow-Do0mt2Fs.js";import"./useCurrentTheme-oAkfJU9N.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BoctPpsF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Co8lcZlm.js";import"./paper-plane-CumYDqaS.js";import"./index-DIEkrnVJ.js";import"./less-DKy2uX_G.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
