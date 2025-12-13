import{j as o}from"./iframe-vf7s2VGb.js";import{useMDXComponents as n}from"./index-DKJSAVnl.js";import{I as r,F as m}from"./CommandsAndQueries-DWofsexW.js";import{M as p,C as s}from"./blocks-B4oFLz5c.js";import"./Tag-P1WqKFay.js";import"./index-DHeHce3N.js";import"./copy-CaZ5zeDJ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CLTTeei_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DxKE5xNM.js";import"./index-BPodtacB.js";import"./index-Edovokrc.js";import"./Link-CPCmvFzf.js";import"./index-Dj1d2O3_.js";import"./index-BuDcKrDV.js";import"./index-rjrZsjeS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLGPl5RO.js";import"./addCustomCSSWithScoping-B77_-I85.js";import"./index-Bt_xSHJX.js";import"./information-9NSJvKF7.js";import"./sys-enter-2-CiXorCdU.js";import"./alert-La4PIswz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B-8tjvZC.js";import"./delete-td61WACm.js";import"./settings-rT0-s-87.js";import"./NoData-Bhx-qegg.js";import"./IllustratedMessage-ClZPZ5oN.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-D4sQFxvp.js";import"./index-f22oyNzG.js";import"./index-Cd4y_kbv.js";import"./slim-arrow-down-Z0YsYWn6.js";import"./Input-oUUbwe-u.js";import"./ResponsivePopoverCommon.css-MEOrQBt2.js";import"./ValueStateMessage.css-FedWBEIr.js";import"./Suggestions.css-ASubEaNq.js";import"./ListBoxItemGroupTemplate-DguSAue8.js";import"./ComboBoxItemGroup-Bu6Gjtr4.js";import"./ListItemBaseTemplate-Bf0mYL7i.js";import"./Token-CO9kT2ca.js";import"./ScrollEnablement-tuQmtrl2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C9Uuxqqd.js";import"./ToggleButton-CVCfufSA.js";import"./SuggestionItem-Dpk_8NtW.js";import"./index-DvFvrrAA.js";import"./Option-DqgY0VMS.js";import"./index-DzFWBLE8.js";import"./SegmentedButton-CM0Yb-1y.js";import"./index-BprsUe_K.js";import"./Select-Cz_Z1gqj.js";import"./InvisibleMessage-sUWFyigV.js";import"./slim-arrow-down-B-lEbC2Q.js";import"./index-xmAfK3wq.js";import"./index-CungOEjJ.js";import"./index-HFjg-7HY.js";import"./index-DG420_LU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-De8iMo6C.js";import"./group-2-B8ZPoUgn.js";import"./sort-descending-Bv4rtnl5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B4vfF5a4.js";import"./utils-CTkxpdDy.js";import"./index-BW0BnQBL.js";import"./index-BG66puBV.js";import"./index-UtBszVEk.js";import"./navigation-down-arrow-ywnaOS8H.js";import"./navigation-right-arrow-C8gBdEec.js";import"./navigation-right-arrow-wCDGslCm.js";import"./useCurrentTheme-CWvOl3sc.js";import"./index-BQ9kB6Rj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DNQTmpVY.js";import"./paper-plane-CoF7IV9r.js";import"./index-BnswFZxm.js";import"./less-BnYtZ8Xc.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
