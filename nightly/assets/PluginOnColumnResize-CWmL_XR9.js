import{j as o}from"./iframe-D9XQThMB.js";import{useMDXComponents as r}from"./index-BFkPJIs4.js";import{I as n}from"./CommandsAndQueries-BBuqlp9J.js";import{M as m,C as p}from"./blocks-CsZckq-p.js";import"./Tag-NpQQnYo4.js";import"./index-BWcAyF8h.js";import"./copy-CyvuSNR_.js";import{F as s}from"./Footer-8Yr8m1IV.js";import"./PageNotFound-DktVNoBl.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B7SriO4F.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CJ7-xxSX.js";import"./index-BDim0UZ8.js";import"./index-C40uNmLM.js";import"./index-9BnKq7JY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrummEDM.js";import"./addCustomCSSWithScoping-BEVVchOt.js";import"./index-CjxO355V.js";import"./index-CxgWM8Dp.js";import"./index-BlKrBUMf.js";import"./information-Bvi0jW5b.js";import"./sys-enter-2-Bex-whDb.js";import"./alert-CKQIr3Jj.js";import"./index-BtpxSXz8.js";import"./Illustrations-DGm-82Ik.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C6l-lvwE.js";import"./delete-SLkYfI9p.js";import"./settings-By34T56u.js";import"./NoData-sY8uzsrT.js";import"./NoFilterResults-VWGA7F_B.js";import"./index-4RD7ReOC.js";import"./IllustratedMessage-B9-pF2sP.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-yyA8QoJL.js";import"./Input-Dd8V6pYN.js";import"./ResponsivePopoverCommon.css-AccouXMm.js";import"./ValueStateMessage.css-C61ZdvXC.js";import"./Suggestions.css-DNN4WTtE.js";import"./ListBoxItemGroupTemplate-UMOtcqUV.js";import"./ComboBoxItemGroup-DyN_O1AM.js";import"./ListItemBaseTemplate-XMqPEKMa.js";import"./Token-CQTdwpxJ.js";import"./ScrollEnablement-D_xuZieI.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B-WRJ_4D.js";import"./ToggleButton-Cr7hkNto.js";import"./multiselect-all-BVy6T6bO.js";import"./SuggestionItem-Br9jPSr7.js";import"./index-BVuuRkkJ.js";import"./Option-EaORebIw.js";import"./index-B3m-2CpX.js";import"./SegmentedButton-DiE2PIs7.js";import"./index-K3c-KgVe.js";import"./Select-Ddna0J1l.js";import"./InvisibleMessage-tD1-WheS.js";import"./index-DdNzr3cY.js";import"./index-Ciqs7IaJ.js";import"./index-_tEk2Ep5.js";import"./index-B3U-GzKE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B_937pQu.js";import"./group-2-Bnl5n-o-.js";import"./sort-descending-B6wckQ-f.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-i_OA1AiM.js";import"./utils-Bacr1bLf.js";import"./index-BMvMDeNG.js";import"./index-LL-cJ3gy.js";import"./index-DkfMYjPP.js";import"./navigation-down-arrow-CkUpvPU_.js";import"./navigation-right-arrow-BaP6uFWY.js";import"./navigation-right-arrow-BF8po_8E.js";import"./useCurrentTheme-DdIh3E30.js";import"./index-DzSim1oI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BRqaQsDk.js";import"./paper-plane-nkcuGxCV.js";import"./index-gSABYD5Y.js";import"./less-Dq6KoCJo.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
