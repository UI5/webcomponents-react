import{j as o}from"./iframe-CLRwe_KU.js";import{useMDXComponents as r}from"./index-zMDfw_hp.js";import{I as n}from"./CommandsAndQueries-Qa8JAgCb.js";import{M as m,C as p}from"./blocks-B36l4j9a.js";import"./Tag-DLCMnG64.js";import"./index-Di2mC61N.js";import"./copy-C_QN3LWn.js";import{F as s}from"./Footer-CY1WkGvT.js";import"./PageNotFound-Et84DOUJ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CImvmFCc.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CQgjpXoE.js";import"./index-BFFCZnKZ.js";import"./index-CZmIgKIQ.js";import"./index-B905PbE4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5LoBpt5.js";import"./addCustomCSSWithScoping-BmaQonB-.js";import"./index-DhQiji0Y.js";import"./index-9xLRD1c-.js";import"./index-rGV23ifs.js";import"./information-BHtbew5c.js";import"./sys-enter-2-CeQJ4tH7.js";import"./alert-DGiHprsp.js";import"./index-BqJblJml.js";import"./Illustrations-BsZAm-cT.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CjlTtlId.js";import"./delete-CzIaiG6f.js";import"./settings-DNWeAtuY.js";import"./NoData-y3OBi2YA.js";import"./NoFilterResults-DMybirIN.js";import"./index-e0pSm-iu.js";import"./IllustratedMessage-CfFP86At.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BFRB3vNn.js";import"./Input-CmThYNOy.js";import"./ResponsivePopoverCommon.css-BHdjseh5.js";import"./ValueStateMessage.css-CUkX0r6k.js";import"./Suggestions.css-DG50lbLq.js";import"./ListBoxItemGroupTemplate-RwrRGF0Y.js";import"./ComboBoxItemGroup-Bd5_N2YI.js";import"./ListItemBaseTemplate-D5tvkBEy.js";import"./Token-BfX6rrBK.js";import"./ScrollEnablement-Bh4ROjF7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BeeWpw49.js";import"./ToggleButton-C0X3Nukc.js";import"./multiselect-all-DNY9iLOO.js";import"./SuggestionItem-CCS96mKL.js";import"./index-CNxxt-Ya.js";import"./Option-rvwi6Sh1.js";import"./index-BVppQ-lw.js";import"./SegmentedButton-CR_FICCj.js";import"./index-a2MjnGAR.js";import"./Select-BRr99ja4.js";import"./InvisibleMessage-D7m3pcV6.js";import"./index-BHYssSYC.js";import"./index-kcaVuine.js";import"./index-BU1oNBi0.js";import"./index-CWV1r8Rz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Lon8PjAF.js";import"./group-2-BZgi4TVU.js";import"./sort-descending-QJbOskyY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D-5oCNyE.js";import"./utils-DGnkkiyK.js";import"./index-DML8dj0q.js";import"./index-lA_hjyPS.js";import"./index-FRr66Ky1.js";import"./navigation-down-arrow-jRSiZ6yO.js";import"./navigation-right-arrow-C-ZNhxUq.js";import"./navigation-right-arrow-BF4xw2D4.js";import"./useCurrentTheme-Cegr51cF.js";import"./index-C2Ec73XG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPDPb-rh.js";import"./paper-plane-CfvaYcji.js";import"./index-DiSuVJLn.js";import"./less-DG4BSQsl.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
