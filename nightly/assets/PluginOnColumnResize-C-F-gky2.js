import{j as o}from"./iframe-BVmbmlmH.js";import{useMDXComponents as r}from"./index-BayNuhgZ.js";import{I as n}from"./CommandsAndQueries-HKIzYk5f.js";import{M as m,C as p}from"./blocks-DMMtyDnL.js";import"./Tag-CX0-uTWT.js";import"./index-DLhdihT5.js";import"./copy-GT2usG3-.js";import{F as s}from"./Footer-jyZDOgk8.js";import"./PageNotFound-Bx-Sm5Da.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D8OC8vxI.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-mk6Fv6C7.js";import"./index-BxRkRPbG.js";import"./index-BJnbAjLN.js";import"./index-DOsMkDHm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY1Um-8U.js";import"./addCustomCSSWithScoping-BGYdQCs4.js";import"./index-B9kq_n6z.js";import"./index-hq6INLou.js";import"./index-BCEgOOyQ.js";import"./information-BShnHlGL.js";import"./sys-enter-2-I6roqntb.js";import"./alert-D_-PGSyq.js";import"./index-CGmvxCgE.js";import"./Illustrations-CSa63wVD.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bwe8i4C1.js";import"./delete-Cf2eCD6q.js";import"./settings-A4VPhZbf.js";import"./NoData-0i2pf3q4.js";import"./NoFilterResults-CH6rLyMe.js";import"./index-qGKOQq_Z.js";import"./IllustratedMessage-CE_fHqrV.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-NhJPhk66.js";import"./Input-BkR7wprP.js";import"./ResponsivePopoverCommon.css-CxapldGD.js";import"./ValueStateMessage.css-B-Atw3u2.js";import"./Suggestions.css-BaRcEW8S.js";import"./ListBoxItemGroupTemplate-DkFqFIv-.js";import"./ComboBoxItemGroup-CId5vra8.js";import"./ListItemBaseTemplate-BJdRA9m9.js";import"./Token-B76AWz4_.js";import"./ScrollEnablement-yNv_w-S6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CD5pumRX.js";import"./ToggleButton-DMuM4WHg.js";import"./multiselect-all-ioniiqjx.js";import"./SuggestionItem-DvZGJLTk.js";import"./index-C6E_dfSH.js";import"./Option-CjVbj-vV.js";import"./index-DRVa_8i1.js";import"./SegmentedButton-DpKA1VVa.js";import"./index-C-VIxdSF.js";import"./Select-CTiG6N7Z.js";import"./InvisibleMessage-CFEC6mIV.js";import"./index-OS6XWPB1.js";import"./index-CTdTtt2e.js";import"./index-vcnJyRT4.js";import"./index-CNlu7VXT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CDmAuvPv.js";import"./group-2-fyvVFRtM.js";import"./sort-descending-B1icyYsO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFtwu3lL.js";import"./utils-juR4U1ZI.js";import"./index-Gfu7Ktfz.js";import"./index-CAyHYrEC.js";import"./index-B3Eg-2Xl.js";import"./navigation-down-arrow-CRpQ5yDC.js";import"./navigation-right-arrow-VmHT47vc.js";import"./navigation-right-arrow-aqMR-wNy.js";import"./useCurrentTheme-DSO3zaUO.js";import"./index-D-UcUp0F.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BtJvBTrm.js";import"./paper-plane-q0zDJ9Ps.js";import"./index-BplB5G32.js";import"./less-BUs157s7.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
