import{j as o}from"./iframe-XNJfvnKd.js";import{useMDXComponents as r}from"./index-BB1Z__gZ.js";import{I as n}from"./CommandsAndQueries-BhkfH5lW.js";import{M as m,C as p}from"./blocks-70fHpzfh.js";import"./Tag-Bt3S_y8X.js";import"./index-CCPENXhC.js";import"./copy-AwcTHtit.js";import{F as s}from"./Footer-BCJuC1pH.js";import"./PageNotFound-DNJSaIYV.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CXI1hcwc.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-By03J9gW.js";import"./index-DJvc2tfl.js";import"./index-BGH8cR_1.js";import"./index-C23si5qK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjHnjWqf.js";import"./addCustomCSSWithScoping-Uu6mKzaL.js";import"./index-Cr8k8bpx.js";import"./index-CONBdBFK.js";import"./index-X0L_7D7a.js";import"./information-CaeHS7Lo.js";import"./sys-enter-2-D6Lk4332.js";import"./alert-Dalf8wRK.js";import"./index-CnSjbRE7.js";import"./Illustrations-CJz4mowS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDwfYvCN.js";import"./delete-BRgtnu4x.js";import"./settings-B5E6qpU6.js";import"./NoData-BfgUbfwB.js";import"./NoFilterResults-BlBFR0st.js";import"./index-BRLheel9.js";import"./IllustratedMessage-DHXQUQEF.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-B2ARDT1C.js";import"./Input-Hy5dHKL1.js";import"./ResponsivePopoverCommon.css-2-C9fSM3.js";import"./ValueStateMessage.css-RN8YRdD-.js";import"./Suggestions.css-C7OqB4DX.js";import"./ListBoxItemGroupTemplate-C6I36q1a.js";import"./ComboBoxItemGroup-C3MlZ0Uh.js";import"./ListItemBaseTemplate-He511VRs.js";import"./Token-Cmgro3bE.js";import"./ScrollEnablement-DWDTXslq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3mcOcRw.js";import"./ToggleButton-Dv13GKwG.js";import"./multiselect-all-Bb3L16tH.js";import"./SuggestionItem-CUEuXRcU.js";import"./index-PKHhDZaf.js";import"./Option-DRsG1edk.js";import"./index-CqeXQepM.js";import"./SegmentedButton-DD_U86WN.js";import"./index-DWPlEs-m.js";import"./Select-CY4mH1RC.js";import"./InvisibleMessage-CHgobTkl.js";import"./index-C-pZ3HN9.js";import"./index-w9Dk9Jum.js";import"./index-Eo1icHqa.js";import"./index-BpPLeT54.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMVS6pwZ.js";import"./group-2-DfSGQJD6.js";import"./sort-descending-CK7mW81X.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gN_r8yvA.js";import"./utils-1KcEiNGe.js";import"./index-Cj-NtrOt.js";import"./index-BZOx0EW0.js";import"./index-COZb4dfm.js";import"./navigation-down-arrow-DkfHsCgO.js";import"./navigation-right-arrow-C7vqJCpZ.js";import"./navigation-right-arrow-DaNEHEjP.js";import"./useCurrentTheme-C0cHAbo-.js";import"./index-9SXllW00.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0aovCf59.js";import"./paper-plane-CA01kMJ9.js";import"./index-_dwsQH44.js";import"./less-B6-zBVKy.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
