import{j as o}from"./iframe-DVaoJynC.js";import{useMDXComponents as n}from"./index-D8trWAUj.js";import{I as r,F as m}from"./CommandsAndQueries-DmxPE0MZ.js";import{M as p,C as s}from"./blocks-CrqJ-Z31.js";import"./Tag--1vn2ouf.js";import"./index-CpBbNRGM.js";import"./copy-DE_2j5FQ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DOBjcAeS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrdrDGzw.js";import"./index-xNxGNywP.js";import"./index-1ngZk4Q4.js";import"./Link-Q_Ld2CqF.js";import"./index-qrdXuh6V.js";import"./index-DDgoCywP.js";import"./index-dYIL-oMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-V3cCpaGB.js";import"./addCustomCSSWithScoping-CedcLW5T.js";import"./index-DW_Y2aM_.js";import"./information-BslaWIIc.js";import"./sys-enter-2-iJEMuBvO.js";import"./alert-DlPbm_nn.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ByjmV8TX.js";import"./delete-C5YMqpOL.js";import"./settings-d6RTuHxS.js";import"./NoData-BrDVqhYl.js";import"./IllustratedMessage-DSeDOabw.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B1sGl9VQ.js";import"./index-DIUkg0Bi.js";import"./index-DlYrVi7e.js";import"./slim-arrow-down-DblcDTH-.js";import"./Input-DJnlitcX.js";import"./ResponsivePopoverCommon.css-a0LTy8oR.js";import"./ValueStateMessage.css-CxQEDxip.js";import"./Suggestions.css-gCSTg-U6.js";import"./ListBoxItemGroupTemplate-DjbBkz5B.js";import"./ComboBoxItemGroup-BgJNW9a2.js";import"./ListItemBaseTemplate-COydBmQa.js";import"./Token-BSwTugba.js";import"./ScrollEnablement-D-0-sBKz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dJtbJvai.js";import"./ToggleButton-DtAyHkvM.js";import"./SuggestionItem-VJ7PiMQr.js";import"./index-Dv6upnSV.js";import"./Option-CxhLxOlt.js";import"./index-DXNRk6WZ.js";import"./SegmentedButton-CwKnK_Zk.js";import"./index-DUJ3en-c.js";import"./Select-DWMoFafZ.js";import"./InvisibleMessage-6n9UFl41.js";import"./slim-arrow-down-Bug18Bzw.js";import"./index-CF3T_Rux.js";import"./index-BO8JvDII.js";import"./index-A1tOTDKa.js";import"./index-D0XhROSl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-v-o7NIgL.js";import"./group-2-DFNtb2FF.js";import"./sort-descending-D8RrH-Tr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dyt-PFJH.js";import"./utils-Bi-_D6jF.js";import"./index-flUwuEIb.js";import"./index-BPU2VOiy.js";import"./index-CeHR8ypK.js";import"./navigation-down-arrow-CwSnvoD7.js";import"./navigation-right-arrow-DqGIwB48.js";import"./navigation-right-arrow-DGKZ_ZhO.js";import"./useCurrentTheme-DsBFWJ7L.js";import"./index-B3rGDK-q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BYo7ps0s.js";import"./paper-plane-Dn8GiRfM.js";import"./index-DpV1kB7w.js";import"./less-J5QHLwwU.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
