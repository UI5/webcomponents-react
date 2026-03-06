import{j as o}from"./iframe-BsLeblbZ.js";import{useMDXComponents as r}from"./index-SmDsT-ZV.js";import{I as n}from"./CommandsAndQueries-BIrmUykn.js";import{M as m,C as p}from"./blocks-MuC3nZ17.js";import"./Tag-YXcZfnM7.js";import"./index-RHsqj3O6.js";import"./copy-D-f_NdBO.js";import{F as s}from"./Footer-Bbw4uFwB.js";import"./PageNotFound-DD-eOCZR.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-0t2926fT.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CBQ0neVT.js";import"./index-B-MH-ZOH.js";import"./index-B9PkCo2j.js";import"./index-Hl67y25M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtKzQDtt.js";import"./addCustomCSSWithScoping-BnenMixx.js";import"./index-Xah-ddNA.js";import"./index-BxpRwQAU.js";import"./index-B-umVgsK.js";import"./information-CyWeW3Ip.js";import"./sys-enter-2-0MhMJNjS.js";import"./alert-CqXBa80-.js";import"./index-DOfJ-lzX.js";import"./Illustrations-BpmOpW1L.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-QeeLFXcn.js";import"./delete-H1wy-dws.js";import"./settings-BRGEmTQw.js";import"./NoData-B8XN3MPs.js";import"./NoFilterResults-DI880b84.js";import"./index-CZvIeLL2.js";import"./IllustratedMessage-CH-k7_PO.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-NHMxkGm6.js";import"./Input-DlcD5Uyx.js";import"./ResponsivePopoverCommon.css-BnR9PF5c.js";import"./ValueStateMessage.css-DaaMCoGD.js";import"./Suggestions.css-B26HkXef.js";import"./ListBoxItemGroupTemplate-sBYZNQZ5.js";import"./ComboBoxItemGroup-CuM1vEgu.js";import"./ListItemBaseTemplate-BujdvxYW.js";import"./Token-BR8sMvH4.js";import"./ScrollEnablement-B2JTzChl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BbebGmy4.js";import"./ToggleButton-Bl3lFzoi.js";import"./multiselect-all-BD4wic1E.js";import"./SuggestionItem-vuP3MGZZ.js";import"./index-BvwE5Rkd.js";import"./Option-DZ9JQFne.js";import"./index-CQYX8dtL.js";import"./SegmentedButton-BbLb6Y2D.js";import"./index-YCEkTVk1.js";import"./Select-ogMEAbmp.js";import"./InvisibleMessage-BLe6-QWs.js";import"./index-DGD-6Hrk.js";import"./index-BkVdLcoI.js";import"./index-DSLM2F3N.js";import"./index-dvi0XJ6b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Q5KFLZa5.js";import"./group-2-C_-z-OIk.js";import"./sort-descending-B6mPd9eW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B918Q3Uk.js";import"./utils-B5VYX2T8.js";import"./index-tW-oUBSO.js";import"./index-DyHDKnOu.js";import"./index-CRwwj1G-.js";import"./navigation-down-arrow-C2Qg1J8L.js";import"./navigation-right-arrow-Br3RPqB8.js";import"./navigation-right-arrow-CO2v9vy4.js";import"./useCurrentTheme-BggGoIM4.js";import"./index-D0RBnp-L.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BkunmVQ4.js";import"./paper-plane-iOffuwQ2.js";import"./index-CIjtFDg8.js";import"./less-e75wAmAF.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
