import{j as o}from"./iframe-GiALwnwk.js";import{useMDXComponents as r}from"./index-D5Br25pp.js";import{I as n}from"./CommandsAndQueries-C_IHadBx.js";import{M as m,C as p}from"./blocks-CWQEoHYq.js";import"./Tag-LkaAJwXo.js";import"./index-Df-74Kk_.js";import"./copy-BjtWQX8c.js";import{F as s}from"./Footer-CTpmUzQu.js";import"./PageNotFound-lhidYwaf.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C0drGsRM.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cl18BXak.js";import"./index-j7N-4kUz.js";import"./index-DsAl_UTx.js";import"./index-Q6Oco0u-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3O-UdkwG.js";import"./addCustomCSSWithScoping-DYkoSNAv.js";import"./index-C2OBDsL0.js";import"./index-_Dwwjvl6.js";import"./index-D48RNIki.js";import"./information-DVV2_7m2.js";import"./sys-enter-2-BLXa0HBj.js";import"./alert-C-pLX4kq.js";import"./index-DmWjxGkj.js";import"./Illustrations-OXUCAhva.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C6gOy1mt.js";import"./delete-DW7iMKa4.js";import"./settings-DhekAkc-.js";import"./NoData-Ck7AmFs7.js";import"./NoFilterResults-Bdr0pWK1.js";import"./index-CSqY6oqd.js";import"./IllustratedMessage-CWorwHI8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-XPdaETP2.js";import"./Input-CAEdEQYs.js";import"./ResponsivePopoverCommon.css-Dd9wsj0Z.js";import"./ValueStateMessage.css-CsbnVp72.js";import"./Suggestions.css-Dyj9iu2Q.js";import"./ListBoxItemGroupTemplate-D9WXmJvJ.js";import"./ComboBoxItemGroup-D_9tYabb.js";import"./ListItemBaseTemplate-GKtph4El.js";import"./Token-DqvIjy0G.js";import"./ScrollEnablement-Dfwd2yQV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CmNegGRy.js";import"./ToggleButton-CNcKoSZH.js";import"./multiselect-all-D9lBPv0A.js";import"./SuggestionItem-Cg2rZPAd.js";import"./index-CicHf-ly.js";import"./Option-BhicZcBl.js";import"./index-BbmFzA7n.js";import"./SegmentedButton-CFgw25ym.js";import"./index-COLQUQjD.js";import"./Select-wAYP5Lkd.js";import"./InvisibleMessage-C6bw_76w.js";import"./index-UQ8-K6Hp.js";import"./index-DdEYvRu2.js";import"./index-DBmUjfqO.js";import"./index-CSIhU0w2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CTpqP-um.js";import"./group-2-CYIXDJv4.js";import"./sort-descending-DYYr51Ys.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C8KGwsoJ.js";import"./utils-CfCxZg4A.js";import"./index-Bsb-fTU5.js";import"./index-CKCwf71g.js";import"./index-1SgfqZTS.js";import"./navigation-down-arrow-Dw3dfCIj.js";import"./navigation-right-arrow-CIGq5ecr.js";import"./navigation-right-arrow-C6hsZ--E.js";import"./useCurrentTheme-Bp92R9Yj.js";import"./index-BiTyXHR_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-EHylbWiC.js";import"./paper-plane-BcYb5zY2.js";import"./index-WUkGkR3K.js";import"./less-BKVo8B_X.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
