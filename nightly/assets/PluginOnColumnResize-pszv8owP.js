import{j as o}from"./iframe-DGnDchDQ.js";import{useMDXComponents as n}from"./index-gqhlbnnP.js";import{I as r,F as m}from"./CommandsAndQueries-nFfK_W-O.js";import{M as p,C as s}from"./blocks-CpnEbXW7.js";import"./Tag-Bqlxcgw6.js";import"./index-ab40gpM3.js";import"./copy-DiOqbFXx.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BTvfSlOu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8BbDNnv.js";import"./index-C1Lkwl5k.js";import"./index-DBMKQPCi.js";import"./Link-DlCRMPDC.js";import"./index--LdK-cim.js";import"./index-DwBLo3Dd.js";import"./index-CHVAkMFk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKYdG7d4.js";import"./addCustomCSSWithScoping-loT15OrI.js";import"./index-BpzOuhJc.js";import"./information-C_x76Wro.js";import"./sys-enter-2-C7D1DjDO.js";import"./alert-Bv5R7OxS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DdqJa0mU.js";import"./delete-BE1PBYXz.js";import"./settings-BAjMM07B.js";import"./NoData-RpKJOQtT.js";import"./IllustratedMessage-BUXdJOQa.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-COZ-85wq.js";import"./index-DDW91UyV.js";import"./index-DU55bLzP.js";import"./slim-arrow-down-co0mwyOK.js";import"./Input-CaqdVj6e.js";import"./ResponsivePopoverCommon.css-Br3rrJZc.js";import"./ValueStateMessage.css-CHKpDORf.js";import"./Suggestions.css-DqURt6WR.js";import"./ListBoxItemGroupTemplate-B26xTI50.js";import"./ComboBoxItemGroup-CoPptm90.js";import"./ListItemBaseTemplate-BVD1phCE.js";import"./Token-BF1rX6rG.js";import"./ScrollEnablement-CKB2L65n.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-9i9lbvrA.js";import"./ToggleButton-CWVqj_J_.js";import"./SuggestionItem-DRXtzHoL.js";import"./index-BYs6kOFB.js";import"./Option-kCDR0Dm6.js";import"./index-DiHvbKWq.js";import"./SegmentedButton-7ThStUDC.js";import"./index-Bf5jvAmF.js";import"./Select-rYtMqXh7.js";import"./InvisibleMessage-BzbFhHWs.js";import"./slim-arrow-down-CnIeCsYc.js";import"./index-BWAWA91T.js";import"./index-C_6mlYi2.js";import"./index-Bk6kEH1k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrOZNGpr.js";import"./group-2-BkKxU7TT.js";import"./sort-descending-BfKrVPDc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CRICYRQq.js";import"./utils-C0I-T_5s.js";import"./index-Dr0nkd7d.js";import"./index-KV9RZy53.js";import"./index-D808ykgs.js";import"./navigation-down-arrow-BwWk1dVU.js";import"./navigation-right-arrow-BBaPKo9n.js";import"./navigation-right-arrow-DV_J89S_.js";import"./useCurrentTheme-LA5drGg4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-AvaiyNj6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-KjkI_mtd.js";import"./paper-plane-jT_LadMY.js";import"./index-BiBB6OBn.js";import"./less-De-Tz2uD.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
