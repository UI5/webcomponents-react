import{j as o}from"./iframe-gC-jGD3g.js";import{useMDXComponents as n}from"./index-CnyMSsHR.js";import{I as r,F as m}from"./CommandsAndQueries-ChGbNwju.js";import{M as p,C as s}from"./blocks-BnpMKK8i.js";import"./Tag-DMQgfedw.js";import"./index-vAW-FU28.js";import"./copy-BSllcJzf.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-jS1llAg6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cgw7_UVl.js";import"./index-Dyh78V3l.js";import"./index-ttP0_XR3.js";import"./Link-Cdfcmbjx.js";import"./index-DlQFiyPN.js";import"./index-BDDT0PTl.js";import"./index-DsCn_0k2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP7KFobN.js";import"./addCustomCSSWithScoping-Cg-GrC5q.js";import"./index-CHNkjAWB.js";import"./information-DRo1yGzG.js";import"./sys-enter-2-DufMiZ6b.js";import"./alert-U-kxkHRC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-LQmtlLK5.js";import"./delete--nh-W3-Q.js";import"./settings-DUXq2pKC.js";import"./NoData-vVbLZZUt.js";import"./IllustratedMessage-aNBcoDsa.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DRKx1zXM.js";import"./index-BHTZ4yDe.js";import"./index-AqAkx8om.js";import"./slim-arrow-down-DRMPXoxM.js";import"./Input-DCJKAbRS.js";import"./ResponsivePopoverCommon.css-B7TyWprV.js";import"./ValueStateMessage.css-CydKnI3y.js";import"./Suggestions.css-BrVVPmcm.js";import"./ListBoxItemGroupTemplate-CwzjGxkH.js";import"./ComboBoxItemGroup-DIhxkCFs.js";import"./ListItemBaseTemplate-Cvto1n-r.js";import"./Token-BrbWFJrM.js";import"./ScrollEnablement-FtAWAuH9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcVnTGUz.js";import"./ToggleButton-c15t9qo5.js";import"./SuggestionItem-Beu4eLam.js";import"./index-3g9KQFfJ.js";import"./Option-DZ1cZDPf.js";import"./index-DeaTVqXq.js";import"./SegmentedButton-BhdBmLvs.js";import"./index-Dfq-eLt0.js";import"./Select-hKzPoZWj.js";import"./InvisibleMessage-BJlc9Zmk.js";import"./slim-arrow-down-C9Z_Q9pC.js";import"./index-Dqb5plgn.js";import"./index-NBV4rwkS.js";import"./index-DoCANgze.js";import"./IconDesign-DXd8PPVF.js";import"./filter-f649f9Rh.js";import"./group-2-D7Gn0lkQ.js";import"./sort-descending-yfv3Cg_R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CWZ9V4Ak.js";import"./utils-BMIaq7YY.js";import"./index-CQx6TRPA.js";import"./index-DVa76Ufg.js";import"./index-mydUACZk.js";import"./navigation-down-arrow-BYIZcEhQ.js";import"./navigation-right-arrow-D6ZdUzP9.js";import"./navigation-right-arrow-B-FehG3J.js";import"./useCurrentTheme-Bf3voSYI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DYmzfp3l.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPypzMSE.js";import"./paper-plane-CI4mRr-x.js";import"./index-KUzNPbfU.js";import"./less-Do7ux1rK.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
