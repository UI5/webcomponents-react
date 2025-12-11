import{j as o}from"./iframe-DM9V3iUD.js";import{useMDXComponents as n}from"./index-BQ6e0XMP.js";import{I as r,F as m}from"./CommandsAndQueries-DLgIXMfv.js";import{M as p,C as s}from"./blocks-DPjpReUC.js";import"./Tag-CDZyEpMs.js";import"./index-BrIfMidb.js";import"./copy-QNTFDBhh.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dwu_Cdgk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_fRRkTw.js";import"./index-CG9Hqh1R.js";import"./index-3ho0Fy_x.js";import"./Link-CqfS--3L.js";import"./index-D-UVDN6M.js";import"./index-DQbG0AXp.js";import"./index-Crs5q-DX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CWqaDePq.js";import"./addCustomCSSWithScoping-UQbkgHWD.js";import"./index-HLIjrNCW.js";import"./information-CYZk7_Tc.js";import"./sys-enter-2-CIB1w1Kt.js";import"./alert-bTHWJErv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-qcMscmV6.js";import"./delete-CXgeirW2.js";import"./settings-Do73Em_3.js";import"./NoData-CHhcck3e.js";import"./IllustratedMessage-BUUajOA1.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Bj8Z5qjJ.js";import"./index-D1i2VFSP.js";import"./index-B__UNfpz.js";import"./slim-arrow-down-BPvPVi4x.js";import"./Input-Cf96M2D8.js";import"./ResponsivePopoverCommon.css-Ct9-fwKq.js";import"./ValueStateMessage.css-BZpk9Qij.js";import"./Suggestions.css-CJjXKwO3.js";import"./ListBoxItemGroupTemplate-avlDP7mZ.js";import"./ComboBoxItemGroup-Dvk8bGjT.js";import"./ListItemBaseTemplate-D0OkPuPM.js";import"./Token-DuTpzyoF.js";import"./ScrollEnablement-CIbJNOf2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DoSQq3Vg.js";import"./ToggleButton-CHbSZwvK.js";import"./SuggestionItem-C9Z5Raq-.js";import"./index-dQrxQK2M.js";import"./Option-C8TUPVJx.js";import"./index-DeLMEH5a.js";import"./SegmentedButton-CFuqDO7A.js";import"./index-lWxOWiyk.js";import"./Select-CVIIIwsb.js";import"./InvisibleMessage-CuXKyopF.js";import"./slim-arrow-down-Y2ooLraA.js";import"./index-CyGN2YVR.js";import"./index-BqNainkP.js";import"./index-DU8Mj3lG.js";import"./index-D-Nv2l8Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CY3BHzDB.js";import"./group-2-DSPzZeCA.js";import"./sort-descending-CKfKVtmi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BURWi97k.js";import"./utils-YdOQYwv0.js";import"./index-DHSn19BG.js";import"./index-BpMJYg0Z.js";import"./index-BsNTCuPG.js";import"./navigation-down-arrow-i_-2Fr6I.js";import"./navigation-right-arrow-DSvn3PeJ.js";import"./navigation-right-arrow-DiiMP9RE.js";import"./useCurrentTheme-B5DxFcSp.js";import"./index-B8iQmJZm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CElufDLj.js";import"./paper-plane-DbbOBc4o.js";import"./index-DcPBFTrG.js";import"./less-DI996Bpt.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
