import{j as o}from"./iframe-Dx8AIwnl.js";import{useMDXComponents as n}from"./index-dcVclcbT.js";import{I as r,F as m}from"./CommandsAndQueries-DUfglqKp.js";import{M as p,C as s}from"./blocks-p2QhlYpp.js";import"./Tag-CzwecjZk.js";import"./index-CNQX-dlK.js";import"./copy-BI62_cw9.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-s17Movl1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bp4XYY8b.js";import"./index-BaN1UK0U.js";import"./index-BVmKbVfO.js";import"./Link-Br-d-ePU.js";import"./index-CPYahFg1.js";import"./index-DByobapb.js";import"./index-BwRqY3Cv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0yp5HV-.js";import"./addCustomCSSWithScoping-Bxh4uOHa.js";import"./index-C0W6hmhl.js";import"./information-0cXHjBj8.js";import"./sys-enter-2-Gb3kXppf.js";import"./alert-aIxIGm79.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DLxqbR-j.js";import"./delete-C69cbyF3.js";import"./settings-BWzqlj0G.js";import"./NoData-D5fncAkO.js";import"./IllustratedMessage-BzTSJxO9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-YgmQ2tQR.js";import"./index-Ci7qfekx.js";import"./index-DNsUAKiX.js";import"./slim-arrow-down-CyGdej7d.js";import"./Input-z0U91vlG.js";import"./ResponsivePopoverCommon.css-3lkFUcOY.js";import"./ValueStateMessage.css-DF0Hyzh1.js";import"./Suggestions.css-wt4aZj0f.js";import"./ListBoxItemGroupTemplate-Q-KeUcY6.js";import"./ComboBoxItemGroup-BSGTLThu.js";import"./ListItemBaseTemplate-DqtKzpsG.js";import"./Token-vLDA2-Jp.js";import"./ScrollEnablement-Bp2iL1fb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-hNMIOZMd.js";import"./ToggleButton-7eyAjys6.js";import"./SuggestionItem-Qf_7uMPc.js";import"./index-7cA-ux1h.js";import"./Option-DZeZ5p_t.js";import"./index-B7ZIHFQx.js";import"./SegmentedButton-BmWRNH_m.js";import"./index-Dff-sv4X.js";import"./Select-DhzR4NaB.js";import"./InvisibleMessage-DisTLAk4.js";import"./slim-arrow-down-Dqq2dwC4.js";import"./index-DVvxtB8e.js";import"./index-DCksASwl.js";import"./index-OEGwklO3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cix59-jT.js";import"./group-2-Bhc8bd2M.js";import"./sort-descending-DgOmEU3h.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHOGLY_P.js";import"./utils-DUcBANkt.js";import"./index-C3qN_Aew.js";import"./index-CBCSR7an.js";import"./index-CVsRwsda.js";import"./navigation-down-arrow-_9IZkA0g.js";import"./navigation-right-arrow-p28ybD6y.js";import"./navigation-right-arrow-Bm5goftX.js";import"./useCurrentTheme-f2z_yH-b.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DXZ8CjJT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zeVN43iZ.js";import"./paper-plane-7o4eJ6hV.js";import"./index-BYRBgKjV.js";import"./less-hBB1SYwL.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
