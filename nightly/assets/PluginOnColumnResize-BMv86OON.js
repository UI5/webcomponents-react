import{j as o}from"./iframe-Djuy8UzU.js";import{useMDXComponents as n}from"./index-CgJpCImo.js";import{I as r,F as m}from"./CommandsAndQueries-DtRiB_cH.js";import{M as p,C as s}from"./blocks-Phup9Acl.js";import"./Tag-B73vgZIB.js";import"./index-Da0VpmUz.js";import"./copy-YJEoppKk.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-pXNMhsUR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrSO2QY2.js";import"./index-DRZrAGbU.js";import"./index-CLO3npv1.js";import"./Link-BtCtR7u3.js";import"./index-CAq-HQ8b.js";import"./index-B4ZMGb2N.js";import"./index-CgYDTHag.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYVpCo3h.js";import"./addCustomCSSWithScoping-JvBMAy04.js";import"./index-DedsmHJ0.js";import"./information-CINaYo8g.js";import"./sys-enter-2-BqczY9Tp.js";import"./alert-BZgl_BE3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Tm5sN1Cz.js";import"./delete-D5ga1RS3.js";import"./settings-OocRSNxu.js";import"./NoData-BJvGJO6C.js";import"./IllustratedMessage-DT3sEaH3.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CS7LznOo.js";import"./index-Bg9deP-k.js";import"./index-BZ9EzmYc.js";import"./slim-arrow-down-CLg0Y-Da.js";import"./Input-DFpAAFjs.js";import"./ResponsivePopoverCommon.css-DOPzCxi3.js";import"./ValueStateMessage.css-BY9H75Zk.js";import"./Suggestions.css-DHOGHYV0.js";import"./ListBoxItemGroupTemplate-Bgj9qNs1.js";import"./ComboBoxItemGroup-Hz1udBKa.js";import"./ListItemBaseTemplate-YNfLoN64.js";import"./Token-CUzjxjIL.js";import"./ScrollEnablement-Bx2z7UGn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zVS7M5ZO.js";import"./ToggleButton-cXtGqYVJ.js";import"./SuggestionItem-lRSTXW-R.js";import"./index-CYksY84A.js";import"./Option-BHogyT1E.js";import"./index-C7Gh1DFG.js";import"./SegmentedButton-DHr4aC0S.js";import"./index-Crtuxpn7.js";import"./Select-BCrzSCH2.js";import"./InvisibleMessage-DlMsZ0UK.js";import"./slim-arrow-down-DfwEriIC.js";import"./index-Bn5IRh8r.js";import"./index-BvL5iwzQ.js";import"./index-Cv13D_Xn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Hbu-1YdU.js";import"./group-2-zKTXtqcT.js";import"./sort-descending-DrmqyO1p.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk5C2Trt.js";import"./utils-Ds_Qdonj.js";import"./index-Bkm_aMWw.js";import"./index-Cn1i3TVp.js";import"./index-C0EeSQjI.js";import"./navigation-down-arrow-B0vTzU2n.js";import"./navigation-right-arrow-BxQGxPzo.js";import"./navigation-right-arrow-Ce-NM_S4.js";import"./useCurrentTheme-CPdf3rwy.js";import"./IndicationColor-DVw-fSM_.js";import"./index-tatqfUOn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqdL_3q4.js";import"./paper-plane-CJJNV6_c.js";import"./index-D-SZa65e.js";import"./less-CCZmshD0.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
