import{j as o}from"./iframe-DVF3HgbA.js";import{useMDXComponents as n}from"./index-BJ4ye1FV.js";import{I as r,F as m}from"./CommandsAndQueries-CjmWYk4A.js";import{M as p,C as s}from"./blocks-Clg7-MX4.js";import"./Tag-BOlrR2xo.js";import"./index-CZ6TSDWm.js";import"./copy-CUrqt0F6.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B6VyKVO1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B68cSDRH.js";import"./index-C50SsvCT.js";import"./index-DNsjAdVj.js";import"./Link-Cu0t9g59.js";import"./index-C1QuQKuw.js";import"./index-RU5NPQiF.js";import"./index-Dpj0MxBe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNtJiI2A.js";import"./addCustomCSSWithScoping-YxO5kK4q.js";import"./index-BBb33Sco.js";import"./information-DRqH7HSA.js";import"./sys-enter-2-DpmhEpBm.js";import"./alert-C-z3K1uA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CNuNpwJw.js";import"./delete-FIqmbs-F.js";import"./settings-ChaYvwof.js";import"./NoData-DAbRUSvi.js";import"./IllustratedMessage-Pj2qYyM1.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DWUQ4SCR.js";import"./index-C12QIudN.js";import"./index-BsuGpbOi.js";import"./slim-arrow-down-1px9VTz1.js";import"./Input-DhcX8gKW.js";import"./ResponsivePopoverCommon.css-B2o2246I.js";import"./ValueStateMessage.css-BcHvujGU.js";import"./Suggestions.css-Cp2lTwMm.js";import"./ListBoxItemGroupTemplate-Clh9M37l.js";import"./ComboBoxItemGroup-b_H895ft.js";import"./ListItemBaseTemplate-C8LHvDfc.js";import"./Token-xZkgnrp8.js";import"./ScrollEnablement-DSkvTOUi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-O-Eog0hj.js";import"./ToggleButton-GSuBcNaj.js";import"./SuggestionItem-DxCxM0yk.js";import"./index-tdNrQRr2.js";import"./Option-BMHvFChu.js";import"./index-BRpwxpNh.js";import"./SegmentedButton-BjPYlasD.js";import"./index-CMza5W0F.js";import"./Select-CiwMWeFC.js";import"./InvisibleMessage-CLNRDajy.js";import"./slim-arrow-down-BOcb4gKN.js";import"./index-U13CnHGN.js";import"./index-D_i0LdjL.js";import"./index-CB7VLmJD.js";import"./index-DXl3BA50.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DPVFS_rG.js";import"./group-2-Ds-80Bay.js";import"./sort-descending-DvN65zAq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFpTQubC.js";import"./utils-Dx_qzbNR.js";import"./index-CCv-VfNm.js";import"./index-BUFZhFxd.js";import"./index-BtJIcsH4.js";import"./navigation-down-arrow-CjSaxrf5.js";import"./navigation-right-arrow-BKG1O43Q.js";import"./navigation-right-arrow-Bh3wYE_f.js";import"./useCurrentTheme-V16yvvqz.js";import"./index-BM9_mjKd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bjbd4LnE.js";import"./paper-plane-OMmS-SvW.js";import"./index-D0P4-p7Y.js";import"./less-BIkfAwBi.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
