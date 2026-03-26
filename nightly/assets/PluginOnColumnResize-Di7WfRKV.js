import{j as o}from"./iframe-EDZrvS0_.js";import{useMDXComponents as r}from"./index-D_Zuzn6o.js";import{I as n}from"./CommandsAndQueries-DeBGirNK.js";import{M as m,C as p}from"./blocks-CJ57z4uw.js";import"./Tag-Cv2B1DS4.js";import"./index-Bz0BV9YI.js";import"./copy-Duyva9GD.js";import{F as s}from"./Footer-BqU25DvW.js";import"./PageNotFound-BnvHWpv6.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dx5TKmet.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B5fvjtF5.js";import"./index-bU8se7-X.js";import"./index-C-NT2IXI.js";import"./index-dnOa7Ewn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_EBjNmUx.js";import"./addCustomCSSWithScoping-2V-LQLPO.js";import"./index-CZdLboFr.js";import"./index-cZywnC0F.js";import"./index-DezAYIwY.js";import"./information-CAvj8-k7.js";import"./sys-enter-2-Eez9oUbi.js";import"./alert-nmCIz_tp.js";import"./index-D6CBwRDo.js";import"./Illustrations-Cp5J5qhx.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-utPuCR04.js";import"./delete-DR6LH38W.js";import"./settings-CN-5jPNW.js";import"./NoData-Unsc7yGW.js";import"./NoFilterResults-D4Tfubhx.js";import"./index-Bd_ty2tr.js";import"./IllustratedMessage-CLWlkvw9.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BsNqwfYk.js";import"./Input-zEsdeYDW.js";import"./ResponsivePopoverCommon.css-DBFPees2.js";import"./ValueStateMessage.css-DuJxwYcD.js";import"./Suggestions.css-DnDRJwob.js";import"./ListBoxItemGroupTemplate-BZbITfG7.js";import"./ComboBoxItemGroup-DieEz9f8.js";import"./ListItemBaseTemplate-Bof6NJS5.js";import"./Token-Sn-IGO0n.js";import"./ScrollEnablement-K7_frRGH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CnWB-RIw.js";import"./ToggleButton-CVlcvDQY.js";import"./multiselect-all-evCQ6L4Y.js";import"./SuggestionItem-RdjvKtEt.js";import"./index-2B_xiOGC.js";import"./Option-HV-kXJJc.js";import"./index-BbWj_bg9.js";import"./SegmentedButton-z2Z5RFk1.js";import"./index-CA1Jh7mM.js";import"./Select-DfMov8Eu.js";import"./InvisibleMessage-Bzs3a3mB.js";import"./index-C6dZwhpH.js";import"./index-Bp2r4Kh2.js";import"./index-DEf8EDQ-.js";import"./index-jH6Hh22w.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3l8IQP2.js";import"./group-2-u8UewRr6.js";import"./sort-descending-3j3Q1XNY.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUNI2Fe2.js";import"./utils-_j2VpmWA.js";import"./index-BUog9t61.js";import"./index-BEQsTep_.js";import"./index-Bvx781mh.js";import"./navigation-down-arrow-DFC2-NJZ.js";import"./navigation-right-arrow-CG4JKzco.js";import"./navigation-right-arrow-CUEAwi3f.js";import"./useCurrentTheme-BCAEg60Z.js";import"./index-BQba1xDF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BXcDMPx8.js";import"./paper-plane-B0VM4cXi.js";import"./index-BO_w0Yy3.js";import"./less-DjhcNxVm.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
