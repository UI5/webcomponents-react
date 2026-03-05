import{j as o}from"./iframe-B2FKbRyU.js";import{useMDXComponents as r}from"./index-B6nFsg5H.js";import{I as n}from"./CommandsAndQueries-Ckb11nUD.js";import{M as m,C as p}from"./blocks-D-EyJoW7.js";import"./Tag-DALomp7A.js";import"./index-DDSpbD3Z.js";import"./copy-JUMniwmI.js";import{F as s}from"./Footer-Boec_nj9.js";import"./PageNotFound-D3X2ZHIh.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CVD9cqsI.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BrDotueY.js";import"./index-DHXfA1aH.js";import"./index-C1DRCM0c.js";import"./index-jZ_VDKcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BzpFx6uj.js";import"./addCustomCSSWithScoping-DCMkWG64.js";import"./index-DS8Ies1F.js";import"./index-CKRHtWhm.js";import"./index-DKyTtykB.js";import"./information-gzDx7eZf.js";import"./sys-enter-2-C-oODT1L.js";import"./alert-dNTL_brG.js";import"./index-DCb_xP6l.js";import"./Illustrations-Bj-aY82Z.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bz8is-GI.js";import"./delete-CFesfdDG.js";import"./settings-opsmQeBR.js";import"./NoData-D2Gj788q.js";import"./NoFilterResults-B4v0K1Vp.js";import"./index-6Bhcr5l0.js";import"./IllustratedMessage-6Hb5GR5A.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-_pStiMkC.js";import"./slim-arrow-down-Ys7hMkPK.js";import"./Input-DwMU1cpj.js";import"./ResponsivePopoverCommon.css-DH0byYa1.js";import"./ValueStateMessage.css-Bw_3AW3-.js";import"./Suggestions.css-CfJP3QYm.js";import"./ListBoxItemGroupTemplate-CBBnxOdl.js";import"./ComboBoxItemGroup-pSZDcj_Y.js";import"./ListItemBaseTemplate-DbJzc3OH.js";import"./Token-BQA14vJ4.js";import"./ScrollEnablement-DwnkyfbX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7b-hnxm.js";import"./ToggleButton-DG0J_zb4.js";import"./SuggestionItem-qaKoOHF9.js";import"./index-Cp7riZA0.js";import"./Option-BFH18YB5.js";import"./index-CpfRQ6F_.js";import"./SegmentedButton-m1j72L5U.js";import"./index-DUG8asUQ.js";import"./Select-Db3yOwO_.js";import"./InvisibleMessage-BXgV0ajS.js";import"./slim-arrow-down-BTgZLJbv.js";import"./index-D-rOfIh9.js";import"./index-WUOOkN1f.js";import"./index-Bx2uhMFX.js";import"./index-s315U2R4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CONdRUGs.js";import"./group-2-B0I_ewE0.js";import"./sort-descending-5FQeQbrY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7vTuR1f.js";import"./utils-6W1b-ay8.js";import"./index-B7Ih3QbG.js";import"./index-CthcNRf4.js";import"./index-S57PoKAK.js";import"./navigation-down-arrow-Df_E19F4.js";import"./navigation-right-arrow-BDTIDVrz.js";import"./navigation-right-arrow-5aP-UFj7.js";import"./useCurrentTheme-C8c2YnJs.js";import"./index-Cc6fTIIs.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPlkBtoH.js";import"./paper-plane-SWd_61-c.js";import"./index-ZKK6l2ej.js";import"./less-ByTKGmwu.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(s,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
