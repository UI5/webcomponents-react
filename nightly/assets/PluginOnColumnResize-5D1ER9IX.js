import{j as o}from"./iframe-C4opeNuJ.js";import{useMDXComponents as n}from"./index-DlqCzQ5b.js";import{I as r,F as m}from"./CommandsAndQueries-C6QEnHzv.js";import{M as p,C as s}from"./blocks-BnM-0OnJ.js";import"./Tag-CUNQyer4.js";import"./index-Djkzc3Do.js";import"./copy-DCgRf4_C.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Nz8y6icB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWSzAzRH.js";import"./index-Wmnu1H8C.js";import"./index-B-UdOs74.js";import"./Link-DxcQOJp8.js";import"./index-DTzFsIn0.js";import"./index-fsr9wgfs.js";import"./index-DRX5KInn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIUIYMM9.js";import"./addCustomCSSWithScoping-C7i1P6L4.js";import"./index-CFNq6guK.js";import"./information-D9qzbrES.js";import"./sys-enter-2-OOuZrUt0.js";import"./alert-CJYb_vFX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-v-9WoqwG.js";import"./delete-QGhxrN40.js";import"./settings-DGtfH4Im.js";import"./NoData-DuSf6XJU.js";import"./IllustratedMessage-nDYnaDL0.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BUZWuwZ7.js";import"./index-JEMmbgM0.js";import"./index-BGSWz__O.js";import"./slim-arrow-down-CzRtJRwu.js";import"./Input-BuKdEYP0.js";import"./ResponsivePopoverCommon.css-XSDUyRKt.js";import"./ValueStateMessage.css-BTsNvEj6.js";import"./Suggestions.css-BwrSUtIe.js";import"./ListBoxItemGroupTemplate-7_0b_kLn.js";import"./ComboBoxItemGroup-BACc2obz.js";import"./ListItemBaseTemplate-CJFIMUp3.js";import"./Token-OFa2wXAf.js";import"./ScrollEnablement-DiEQdxkX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C8MaLOVV.js";import"./ToggleButton-DDhGeKml.js";import"./SuggestionItem-VR2o08vH.js";import"./index-DncJbrUy.js";import"./Option-cu7I_PwM.js";import"./index-OrLpWDeE.js";import"./SegmentedButton-BrIUDJd7.js";import"./index-C9Pg2ysk.js";import"./Select-C0NKAdDD.js";import"./InvisibleMessage-Bb-Qg8L3.js";import"./slim-arrow-down-CGY7sv3D.js";import"./index-CGPONq3F.js";import"./index-Df3-dXHf.js";import"./index-7x9RJa0e.js";import"./index-CRe7MavO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3qO_evC.js";import"./group-2-BBh72Dqg.js";import"./sort-descending-B-gdnF4T.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7K1j5fc.js";import"./utils-BjLLyiPs.js";import"./index-BdTJmYr_.js";import"./index-CmwWT0_d.js";import"./index-BUmNjy5e.js";import"./navigation-down-arrow-B9YSMk4b.js";import"./navigation-right-arrow-DaW_IFoa.js";import"./navigation-right-arrow-B0-22NBU.js";import"./useCurrentTheme-Cg4zlSnL.js";import"./index-A3HBWtsq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-Mna98_.js";import"./paper-plane-BFVcYSvi.js";import"./index-GwOdSSTD.js";import"./less-CAexx3Oq.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
