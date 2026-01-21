import{j as o}from"./iframe-C9GC-4U4.js";import{useMDXComponents as n}from"./index-vmj4hVH3.js";import{I as r,F as m}from"./CommandsAndQueries-DYyMzrOI.js";import{M as p,C as s}from"./blocks-B1Qu1Zwa.js";import"./Tag-C_vOYGvY.js";import"./index-NAfB8FFO.js";import"./copy-Bj7tGZK9.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BFRaUJ-8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-f0Iqf0o1.js";import"./index-B091rt76.js";import"./index-BNt_KmI_.js";import"./Link-DZICkDEv.js";import"./index--mOIC-D9.js";import"./index-BpGBt1Ec.js";import"./index-CN9xEViq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CrDmJKcm.js";import"./addCustomCSSWithScoping-C3bBYzrj.js";import"./index-Bas8y3YG.js";import"./information-Cj8yu0bT.js";import"./sys-enter-2-pae_51W8.js";import"./alert-CNeVkGHK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D2Q3Fifo.js";import"./delete-BtWYKuqo.js";import"./settings-BMmA6bGr.js";import"./NoData-0YPuDwhD.js";import"./IllustratedMessage-BX3YdpaS.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C8eC6z5w.js";import"./index-CfnKIWov.js";import"./index-Dh3txNQs.js";import"./slim-arrow-down-lDJf72_X.js";import"./Input-D8yfvMY_.js";import"./ResponsivePopoverCommon.css-Dfo8GNgL.js";import"./ValueStateMessage.css-C33VG2yg.js";import"./Suggestions.css-BQ5GC3G8.js";import"./ListBoxItemGroupTemplate-DwAE5T9p.js";import"./ComboBoxItemGroup-DduYzuSR.js";import"./ListItemBaseTemplate-D4wB-rZo.js";import"./Token-B4FtR09e.js";import"./ScrollEnablement-CG9VZkld.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKJzwN5g.js";import"./ToggleButton-B_tIJ_u-.js";import"./SuggestionItem-C1B0Vane.js";import"./index-hQifrLpO.js";import"./Option-BPgvlydB.js";import"./index-Bx7ENpLR.js";import"./SegmentedButton-CqVIbvx0.js";import"./index-DKxkLGS8.js";import"./Select-DROm6u1u.js";import"./InvisibleMessage-CG4h93_f.js";import"./slim-arrow-down-DD_-Xh7t.js";import"./index-Bufl7lej.js";import"./index-YItZhVTD.js";import"./index-B7IwVEg9.js";import"./index-C5oysK-n.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DRCt1h-O.js";import"./group-2-CYhDRlV5.js";import"./sort-descending-ChjOUn4q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7V7-Zld3.js";import"./utils-D9L5FVMx.js";import"./index-BoVydk-k.js";import"./index-D8vh07VJ.js";import"./index-J-1cALVN.js";import"./navigation-down-arrow-D_GfAsPD.js";import"./navigation-right-arrow-BfuvVGTR.js";import"./navigation-right-arrow-CqPwNeVv.js";import"./useCurrentTheme-Cmr-ISoS.js";import"./index-D1bI7l9v.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPtpEu5k.js";import"./paper-plane-B3y_l42l.js";import"./index-z94YdhbG.js";import"./less-B3BSxVTt.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
