import{j as o}from"./iframe-BqzC-8C4.js";import{useMDXComponents as n}from"./index-YQ6GhEX5.js";import{I as r,F as m}from"./CommandsAndQueries-BJ93mlRM.js";import{M as p,C as s}from"./blocks-ayIIZ8Ez.js";import"./Tag-DMbvGyPZ.js";import"./index-DLI_KJ4q.js";import"./copy-BAa7Mkrf.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B9bW7cYn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CI7TE3Ph.js";import"./index-Bf-2mOJM.js";import"./index-CBL7x3cU.js";import"./Link-Cyx9O9I9.js";import"./index--RDSdd8J.js";import"./index-M-RJ-Kd6.js";import"./index-DFZxjAeq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjpHjoiw.js";import"./addCustomCSSWithScoping-BlPp9zh6.js";import"./index-yh1yAWiF.js";import"./information-CL-xPlFc.js";import"./sys-enter-2-mfMn16B5.js";import"./alert-DcIxt5mX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CKOcL5_O.js";import"./delete-B0_Rw7kP.js";import"./settings-DwtumLBN.js";import"./NoData-CazGrZXU.js";import"./IllustratedMessage-zK5H3JPd.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-Cw1Eja2C.js";import"./index-DYmdGGhX.js";import"./index-B4ILPk1v.js";import"./slim-arrow-down-BgPxvwnX.js";import"./Input-BIzIH4FC.js";import"./ResponsivePopoverCommon.css-DWPMpekW.js";import"./ValueStateMessage.css-B5whAX6s.js";import"./Suggestions.css-H-37CGAi.js";import"./ListBoxItemGroupTemplate-C3idOVig.js";import"./ComboBoxItemGroup-DIUMSAuM.js";import"./ListItemBaseTemplate-CsRnbDmP.js";import"./Token-CdnPMBnu.js";import"./ScrollEnablement-gBya7LIS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-lWm8UF3n.js";import"./ToggleButton-D5J62tyd.js";import"./SuggestionItem-B8nawxFb.js";import"./index-DSWs_DV-.js";import"./Option-BNC4WdOq.js";import"./index-B9_kEjlX.js";import"./SegmentedButton-YbvP5bMv.js";import"./index-BtugCD05.js";import"./Select-DX2So7Kf.js";import"./InvisibleMessage-k93LnoOV.js";import"./slim-arrow-down-BldRuQp0.js";import"./index-ClKg_r_t.js";import"./index-CIWagj-s.js";import"./index-CnvRzieE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLmmxjak.js";import"./group-2-CYyQt0dS.js";import"./sort-descending-HehUk6xl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DCtsywZE.js";import"./utils-BEgTsQ3i.js";import"./index-KdHNkHqX.js";import"./index-DuFahMhv.js";import"./index-DPhALhpO.js";import"./navigation-down-arrow-BIBuNkWg.js";import"./navigation-right-arrow-G5P_762s.js";import"./navigation-right-arrow-DjnGNXSH.js";import"./useCurrentTheme-B2hbGZxz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_o2MQlb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CG1Q2uL4.js";import"./paper-plane-BNxrdXoX.js";import"./index-B11o6AUS.js";import"./less-DVg8rSGY.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
