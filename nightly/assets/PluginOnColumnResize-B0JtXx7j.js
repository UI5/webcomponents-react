import{j as o}from"./iframe-Dn-CEP49.js";import{useMDXComponents as n}from"./index-CkYweSLX.js";import{I as r,F as m}from"./CommandsAndQueries-CJE7oJQ6.js";import{M as p,C as s}from"./blocks-CpkBRtZ8.js";import"./Tag-DCXTYexA.js";import"./index-Buh7M_8w.js";import"./copy-ZbpB2fNv.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-ztfx2-Is.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bm8hRwBU.js";import"./index-Cw6Uj_ev.js";import"./index-DzcQWg4n.js";import"./Link-CCOdGIG_.js";import"./index-BiP2f5WB.js";import"./index-DwdL8nG5.js";import"./index-pKV4gQju.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOWzKJJk.js";import"./addCustomCSSWithScoping-BIQAchjq.js";import"./index-6NbWjJvY.js";import"./information-Bo7A1j3N.js";import"./sys-enter-2-XS_2r-qd.js";import"./alert-CjMhygJT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Diqxij9B.js";import"./delete-d6bn_JDV.js";import"./settings-BIg8VPcO.js";import"./NoData-rbt8DPTL.js";import"./IllustratedMessage-B6qON00u.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B41MixxM.js";import"./index-CbLC2T1-.js";import"./index-BEgrxcfq.js";import"./slim-arrow-down-Bj4DlPa3.js";import"./Input-CxXPc-Hx.js";import"./ResponsivePopoverCommon.css-Do9Vgr3v.js";import"./ValueStateMessage.css-D9t9_AMW.js";import"./Suggestions.css-CbUz-ZGI.js";import"./ListBoxItemGroupTemplate-46_Zh3wN.js";import"./ComboBoxItemGroup-RbdF7hhc.js";import"./ListItemBaseTemplate-O3CDUooj.js";import"./Token-BLH25HvY.js";import"./ScrollEnablement-zAaUIY5k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-VFffhFve.js";import"./ToggleButton-mwmAbve5.js";import"./SuggestionItem-DOpNFTCA.js";import"./index-ClXgM0QD.js";import"./Option-BYlN-tpp.js";import"./index-BkRcZeSq.js";import"./SegmentedButton-BqQxCudY.js";import"./index-DYVv1ok6.js";import"./Select-BJT8n4vX.js";import"./InvisibleMessage-XUjgdwX9.js";import"./slim-arrow-down-C5fdvPae.js";import"./index-DL2C3Cwm.js";import"./index-D4a7uqpb.js";import"./index-BzTARrg3.js";import"./index-Ct561GKj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CH-P7ycI.js";import"./group-2-CrDDPtXD.js";import"./sort-descending-r8NGiDn9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-haQKghSk.js";import"./utils-DfQ09pUz.js";import"./index--NtLvyBH.js";import"./index-DdFdl9JW.js";import"./index-BazkfAzC.js";import"./navigation-down-arrow-CCvVF4OT.js";import"./navigation-right-arrow-BpL2A1bg.js";import"./navigation-right-arrow-jdXIwt_e.js";import"./useCurrentTheme-CTBlfWfu.js";import"./index-CTuKnf34.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C3EIIsQq.js";import"./paper-plane-6--7LTtA.js";import"./index-CbqLR4ce.js";import"./less-5cy1nyok.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
