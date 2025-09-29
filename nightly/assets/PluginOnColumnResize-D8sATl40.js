import{j as o}from"./iframe-BELPVtw8.js";import{useMDXComponents as r}from"./index-Ccx4gwdG.js";import{I as n,F as m}from"./CommandsAndQueries-B86vB0yc.js";import{M as p,C as s}from"./blocks-B3lwtuZn.js";import"./Tag-jS7irC1t.js";import"./index-BkR2pL75.js";import"./copy-BGZyCQeI.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BuGimn8e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQYUcCHI.js";import"./index-DslTuBZD.js";import"./index-Dy8TXCJ0.js";import"./Link-BLMqdfPm.js";import"./index-nk7PQCW4.js";import"./index-D2dH4dam.js";import"./index-D2H4sMz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-GIAd7WMY.js";import"./addCustomCSSWithScoping-vktTBWHy.js";import"./index-C1fkktKB.js";import"./information-Q0D1EyOn.js";import"./sys-enter-2-CB1NZnv4.js";import"./alert-e0Pm7FCS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqiIa7eZ.js";import"./delete-DHGmX5w5.js";import"./settings-CEc6JgR1.js";import"./NoData-DvTHfRil.js";import"./IllustratedMessage-78L0W6rp.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BXIPIfZx.js";import"./index-DFsb20bI.js";import"./slim-arrow-down-CwiRy3M0.js";import"./Input-B-A8a0OL.js";import"./ResponsivePopoverCommon.css-BWZcb2bV.js";import"./ValueStateMessage.css-SXuctyRx.js";import"./Suggestions.css-C9vA098l.js";import"./ListBoxItemGroupTemplate-COysa2md.js";import"./ComboBoxItemGroup-CkDVZmGn.js";import"./ListItemBaseTemplate-bJafeYos.js";import"./Token-CC2z-1Eu.js";import"./ScrollEnablement-7itX-dGY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CE1p650D.js";import"./ToggleButton-BX9cFRFF.js";import"./SuggestionItem-D9DO9uWA.js";import"./index-BK4KP33l.js";import"./Option-C6iyQjxn.js";import"./index-uAC978GR.js";import"./SegmentedButton-B1O-glM5.js";import"./index-BVils4tE.js";import"./Select-DRUUnZi2.js";import"./InvisibleMessage-DFHR3png.js";import"./slim-arrow-down-BFVaKqjv.js";import"./index-Dj10-OWx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-S556KB4S.js";import"./group-2-_GSc8Amx.js";import"./sort-descending-xALRtyQE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fM3yxWKm.js";import"./utils-DkiPjs68.js";import"./index-C00swXDA.js";import"./index-SUxQZfJ3.js";import"./index-T_E5hJOY.js";import"./navigation-down-arrow-BKIRwexC.js";import"./navigation-right-arrow-B8ETkxoi.js";import"./navigation-right-arrow-k3A4e-XZ.js";import"./useCurrentTheme-aIfWcmJ3.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BL1iCeSt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-kNFhRDgm.js";import"./paper-plane-CzSfUHba.js";import"./index-36Nf5wB9.js";import"./less-3oBkjuBq.js";import"./index-CvNAEadG.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
