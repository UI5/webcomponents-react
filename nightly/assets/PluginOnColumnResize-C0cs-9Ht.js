import{j as o}from"./iframe-CirU0arv.js";import{useMDXComponents as n}from"./index-Dp75W_mY.js";import{I as r,F as m}from"./CommandsAndQueries-C-xkLV_B.js";import{M as p,C as s}from"./blocks-BZ_tUEGn.js";import"./Tag-BIXyVbav.js";import"./index-DkGOPQ-r.js";import"./copy-BRU5ISS0.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-cTgiUsLU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrqGQq-t.js";import"./index-BUDPFl9U.js";import"./index-Dxm6BO0O.js";import"./Link-cWf0Ff_j.js";import"./index-B7a5GE08.js";import"./index-VennLGrv.js";import"./index-DCit48ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtMJGvuv.js";import"./addCustomCSSWithScoping-DTjbXshP.js";import"./index-4atoEi4m.js";import"./information-Z8YFf98o.js";import"./sys-enter-2-5bsV2B9A.js";import"./alert-FLQkBZSI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-HIfaJVzD.js";import"./delete-CexGU_qM.js";import"./settings-DJ-LHUy-.js";import"./NoData-DE1oTmvX.js";import"./IllustratedMessage-BFgOq_LH.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DZg_ivQE.js";import"./index-UPOhQMd1.js";import"./index-CSn2kPxq.js";import"./slim-arrow-down-60ML7lyZ.js";import"./Input-B5RoDskI.js";import"./ResponsivePopoverCommon.css-DBQtHpYS.js";import"./ValueStateMessage.css-B5lUt71q.js";import"./Suggestions.css-COvU-ZfJ.js";import"./ListBoxItemGroupTemplate-BIERCNu9.js";import"./ComboBoxItemGroup-C2-CS8jK.js";import"./ListItemBaseTemplate-Bu9nUh-N.js";import"./Token-CWpLLa4L.js";import"./ScrollEnablement-DFgzJu98.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DBUXW515.js";import"./ToggleButton-CF6WXXSi.js";import"./SuggestionItem-YvgDaZB_.js";import"./index-CB4p9_nj.js";import"./Option-7ckm_yH-.js";import"./index-BTw6P2fS.js";import"./SegmentedButton-am25y6o7.js";import"./index-BFx9WVQe.js";import"./Select-Dc_o4qfa.js";import"./InvisibleMessage--uNZRaQB.js";import"./slim-arrow-down-CkBSJkgM.js";import"./index-BrUmMrZS.js";import"./index-CdQ5i6fy.js";import"./index-Di0AmzqC.js";import"./index-MEM9Yvlw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nuUE4wAL.js";import"./group-2-BEqaSAGb.js";import"./sort-descending-CaYXLUCL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_ssyvdx4.js";import"./utils-CsEmwHd3.js";import"./index-KodJqxFE.js";import"./index-cd_HGMma.js";import"./index-Dxv3SITq.js";import"./navigation-down-arrow-DDJMQEkQ.js";import"./navigation-right-arrow-EmtR-Po3.js";import"./navigation-right-arrow-BbxMtceQ.js";import"./useCurrentTheme-CFUmE8gV.js";import"./index-B9OW6Ny7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BgeeE8jl.js";import"./paper-plane-By32g5Y1.js";import"./index-ATETq_97.js";import"./less-DF78ULYr.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
