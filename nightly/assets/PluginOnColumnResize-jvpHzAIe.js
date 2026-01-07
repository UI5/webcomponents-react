import{j as o}from"./iframe-BMswfRdZ.js";import{useMDXComponents as n}from"./index-MaqCtoEe.js";import{I as r,F as m}from"./CommandsAndQueries-B0EQ2-2W.js";import{M as p,C as s}from"./blocks-BZVeQw2D.js";import"./Tag-BVHvhlCz.js";import"./index-B-ZVjbqr.js";import"./copy-Cy5PMYPR.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-mPff0P6m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cf0lk0Qk.js";import"./index-B-CAKhwh.js";import"./index-FIeWjkuH.js";import"./Link-BGQljDJU.js";import"./index-B7ZM6Wte.js";import"./index-E1nxDY_p.js";import"./index-Dm33NnkB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzwX1HTL.js";import"./addCustomCSSWithScoping-DQLnc9QR.js";import"./index-mp2uLi6B.js";import"./information-1i220cDO.js";import"./sys-enter-2-CawaAm0L.js";import"./alert-uwYQHS-7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DxHk6N33.js";import"./delete-CXm_E0-Y.js";import"./settings-CqqCKJRE.js";import"./NoData-DB0UkPLE.js";import"./IllustratedMessage-xRJ_clt5.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-1oaGXmTl.js";import"./index-Da_vExI8.js";import"./index-gGS5oICH.js";import"./slim-arrow-down-DZiL5RY8.js";import"./Input--pdg4UEC.js";import"./ResponsivePopoverCommon.css-Cys9VWui.js";import"./ValueStateMessage.css-CqCvpxGR.js";import"./Suggestions.css-BsUzn6Ma.js";import"./ListBoxItemGroupTemplate-Oz7T7rjX.js";import"./ComboBoxItemGroup-HGIu0yJL.js";import"./ListItemBaseTemplate-vEHYPQIG.js";import"./Token-D6rP3KDc.js";import"./ScrollEnablement-BFkwZ-6k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgY-3qr3.js";import"./ToggleButton-BYaWptBI.js";import"./SuggestionItem-C9jZ74yI.js";import"./index-BD8Cd281.js";import"./Option-BoFss70v.js";import"./index-B6iScKv-.js";import"./SegmentedButton-BHHnez93.js";import"./index-CLHUyLON.js";import"./Select-2IbUasvX.js";import"./InvisibleMessage-DWiN-Q82.js";import"./slim-arrow-down-DVB6jdIA.js";import"./index-Cs0GPsK7.js";import"./index-BWDqCRuT.js";import"./index-IUj7GUsp.js";import"./index-Db9h7yxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DXLSMFHk.js";import"./group-2-CJwVVc0i.js";import"./sort-descending-Bado19O_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlkbPsyK.js";import"./utils-CiZ3szIk.js";import"./index-D0owrTnz.js";import"./index-IdbciERE.js";import"./index-DwKn05TT.js";import"./navigation-down-arrow-CWAFdQMV.js";import"./navigation-right-arrow-DFMNvzTi.js";import"./navigation-right-arrow-DhhhdeU2.js";import"./useCurrentTheme-UlPApG1C.js";import"./index-CmchLnb5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BTbpKmVn.js";import"./paper-plane-CcsgPjnp.js";import"./index-Fa-JpXF4.js";import"./less-B6Uo9h2u.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
