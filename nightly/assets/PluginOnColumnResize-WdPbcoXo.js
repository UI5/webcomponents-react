import{j as o}from"./iframe-m9jt2Gb4.js";import{useMDXComponents as n}from"./index-RGZEkUe7.js";import{I as r,F as m}from"./CommandsAndQueries-edZwg3xm.js";import{M as p,C as s}from"./blocks-87CpIPmc.js";import"./Tag-CiALl0Be.js";import"./index-COrcBOeY.js";import"./copy-ym3aYCLk.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DFr4kJK_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YlQxkFIi.js";import"./index-U8bfBs9H.js";import"./index-B5E0DaZi.js";import"./Link-BmbvCigV.js";import"./index-BRPp-7oG.js";import"./index-B8eg2o8m.js";import"./index-D_3xpPA0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3bZPHjv.js";import"./addCustomCSSWithScoping-B_aL8aFh.js";import"./index-DK4LsWgA.js";import"./information-B-8ilFG0.js";import"./sys-enter-2-DoymHnQS.js";import"./alert-BEZ6iJPu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DuCk_hfi.js";import"./delete-DqEPR1Kk.js";import"./settings-BvE_RVs3.js";import"./NoData-BQN2z6DP.js";import"./IllustratedMessage-Bhm5_tWx.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DfQRIGVv.js";import"./index-DKZ-N2hR.js";import"./index-XPK1Pa3d.js";import"./slim-arrow-down-BBb3V39I.js";import"./Input-e95l3hLj.js";import"./ResponsivePopoverCommon.css-njDvm-N2.js";import"./ValueStateMessage.css-DOeSeMsA.js";import"./Suggestions.css-WQshat4v.js";import"./ListBoxItemGroupTemplate-CO9iiEMW.js";import"./ComboBoxItemGroup-Dnc717x5.js";import"./ListItemBaseTemplate-DtBXQ5ov.js";import"./Token-D2uvUdrZ.js";import"./ScrollEnablement-SOer0rOa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BI0Ll8pv.js";import"./ToggleButton-RGCKdF71.js";import"./SuggestionItem-f7mMQ8dV.js";import"./index-DZi4le4v.js";import"./Option-BCCKGeE5.js";import"./index-D4-tQ_X-.js";import"./SegmentedButton-2j4XezgK.js";import"./index-kS8TEHfa.js";import"./Select-CWRM89JB.js";import"./InvisibleMessage-Y-gpMwBW.js";import"./slim-arrow-down-BYuclwN8.js";import"./index-D0BFf4OT.js";import"./index-CcS-nMSH.js";import"./index-CrYrIUjU.js";import"./index-DTqNuwcc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CoT6c9V7.js";import"./group-2-B5f3D7wV.js";import"./sort-descending-DGeD_fPq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-vmYkN8dN.js";import"./utils-DUEpvVwD.js";import"./index-D5HeUm9y.js";import"./index-OPBsLPCt.js";import"./index-Bep7VIpN.js";import"./navigation-down-arrow-DZGgjCfZ.js";import"./navigation-right-arrow-j6ezlh3e.js";import"./navigation-right-arrow-DmBjSJtS.js";import"./useCurrentTheme-DAm2pSwB.js";import"./index-B8H8C8Xn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xF7iXHP9.js";import"./paper-plane-CRn-ZhnF.js";import"./index-CO2hZTyW.js";import"./less-DBuv2uLm.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
