import{j as o}from"./iframe-BKYtcRXv.js";import{useMDXComponents as r}from"./index-D1nSvVZo.js";import{I as n}from"./CommandsAndQueries-CUyuiRf6.js";import{M as m,C as p}from"./blocks-C1gp0dCe.js";import"./Tag-DHmTMk4C.js";import"./index-BHofxaIm.js";import"./copy-Dd5cryj7.js";import{F as s}from"./Footer-CV4xu3yB.js";import"./PageNotFound-vT0hMOra.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BgWH2hpK.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DoqDiayo.js";import"./index-C0tgyAAj.js";import"./index-BKTLLMG4.js";import"./index-Gx-AmRBv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cc6AlvW2.js";import"./addCustomCSSWithScoping-CxGG2dIU.js";import"./index-ewdSxNga.js";import"./index-CruiZV6T.js";import"./index-qZc2Xmmm.js";import"./information-xnBwopqv.js";import"./sys-enter-2-CNvKNMds.js";import"./alert-CToXuYXU.js";import"./index-BVN1tX5Y.js";import"./Illustrations-C92Wb11w.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DyjJHKas.js";import"./delete-COc--zMh.js";import"./settings-DvU655Lf.js";import"./NoData-CBJjONw5.js";import"./NoFilterResults-B1-N34A5.js";import"./index-CYseC7kl.js";import"./IllustratedMessage-Ckmzjd0E.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BgykwmTu.js";import"./Input-CO_xJZXP.js";import"./ResponsivePopoverCommon.css-BtDqVxq7.js";import"./ValueStateMessage.css-DyHSljmr.js";import"./Suggestions.css-RWTniQDi.js";import"./ListBoxItemGroupTemplate-DntWjXW-.js";import"./ComboBoxItemGroup-v3M_n_k-.js";import"./ListItemBaseTemplate-C6YXo6zR.js";import"./Token-C7dfemIx.js";import"./ScrollEnablement-DIukE-Oq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cy0XTO8n.js";import"./ToggleButton-Xk26D8Qm.js";import"./multiselect-all-DOeifjrx.js";import"./SuggestionItem-DYVKlvCS.js";import"./index-BuNPx4RW.js";import"./Option-CmPkNzZb.js";import"./index-DuMd-yrT.js";import"./SegmentedButton-sNyJwfhT.js";import"./index-C62hrUfU.js";import"./Select-DUx7KFlD.js";import"./InvisibleMessage-Rg77mpqg.js";import"./index-CNnSMZ2h.js";import"./index-DOAAzZ1m.js";import"./index-D5IYfVsF.js";import"./index-QLH2EeXs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-5ce7U-Q1.js";import"./group-2-BfFYcn7i.js";import"./sort-descending-H5QlCV5Q.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DT4jNOO9.js";import"./utils-B2f4QDq0.js";import"./index-_Eo-G0Gk.js";import"./index-CaD4IA15.js";import"./index-BNMj4fDr.js";import"./navigation-down-arrow-DeuSM8u7.js";import"./navigation-right-arrow-BMpDZDnD.js";import"./navigation-right-arrow-DHm48mV8.js";import"./useCurrentTheme-CUsmZadi.js";import"./index-FDSeTwbN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DvpK_1n5.js";import"./paper-plane-BWnAq03I.js";import"./index-atWeeP0l.js";import"./less-CROdRzuR.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
