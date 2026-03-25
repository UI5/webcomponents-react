import{j as o}from"./iframe-iYU5spAk.js";import{useMDXComponents as r}from"./index-BzD2IrSQ.js";import{I as n}from"./CommandsAndQueries-BRXiW4dn.js";import{M as m,C as p}from"./blocks-BI7QxqeB.js";import"./Tag-BusGuvh6.js";import"./index-Cq3_Xc9J.js";import"./copy-DCVJQWNc.js";import{F as s}from"./Footer-BTHx_eA0.js";import"./PageNotFound-C8n2TUKE.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BqAo2gsQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DNrZNopF.js";import"./index-D_eTNKvK.js";import"./index-9CESre8T.js";import"./index-B5WhhwGp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-LCeBFvC9.js";import"./addCustomCSSWithScoping-Pos0RdE7.js";import"./index-DqeVDsPv.js";import"./index-BWMAVmh3.js";import"./index-DUNXsDMC.js";import"./information-D0J7LS4n.js";import"./sys-enter-2-De6BCoo5.js";import"./alert-Dh59S2xt.js";import"./index-B2lbw_UO.js";import"./Illustrations-B_rOPeGm.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Txjlor_N.js";import"./delete-zxvfSezM.js";import"./settings-DOd8m396.js";import"./NoData-CS38cQi8.js";import"./NoFilterResults-Dx8cQ-OW.js";import"./index-BIo60fMs.js";import"./IllustratedMessage-DcLV6jZH.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D-iEqBAI.js";import"./Input-CPcEboco.js";import"./ResponsivePopoverCommon.css-MzYjXUbZ.js";import"./ValueStateMessage.css-CiiA2s3E.js";import"./Suggestions.css-CltR8Y_x.js";import"./ListBoxItemGroupTemplate-ClX62AQ5.js";import"./ComboBoxItemGroup-KbtZd36F.js";import"./ListItemBaseTemplate-D-bV5LoH.js";import"./Token-DllBa28z.js";import"./ScrollEnablement-BzR7P6Ev.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cf92RqQJ.js";import"./ToggleButton-XRDOJStY.js";import"./multiselect-all-B_UBRtV6.js";import"./SuggestionItem-D5XWHwVx.js";import"./index-COsKSNFh.js";import"./Option-WemDvLcT.js";import"./index-DhEuHp6p.js";import"./SegmentedButton-CoSscdvL.js";import"./index-Duk2RCOb.js";import"./Select-DotgCPCG.js";import"./InvisibleMessage-BqlPeigB.js";import"./index-CXcrzFui.js";import"./index-Djsl4Kkv.js";import"./index-QmgoYX5D.js";import"./index-BO0iryfq.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VYJ9nzZL.js";import"./group-2-B54BU3OI.js";import"./sort-descending-C1fJgBpm.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdYyxTLQ.js";import"./utils-BaGgi4t6.js";import"./index-DyWQ4Yet.js";import"./index-WwMXFCkN.js";import"./index-CjSo2Ws_.js";import"./navigation-down-arrow-CaKxhXWN.js";import"./navigation-right-arrow-D1Pf3y64.js";import"./navigation-right-arrow-L_9IiXO-.js";import"./useCurrentTheme-B6gq1VrI.js";import"./index-CQs_LxQY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CmURE4St.js";import"./paper-plane-BkJk1PQY.js";import"./index-CdP1nluN.js";import"./less-CMvrZdAD.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
