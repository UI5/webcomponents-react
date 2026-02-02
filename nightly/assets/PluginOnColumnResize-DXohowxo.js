import{j as o}from"./iframe-DW8uOQp0.js";import{useMDXComponents as n}from"./index-DjfSR8mu.js";import{I as r,F as m}from"./CommandsAndQueries-CfxeF-Et.js";import{M as p,C as s}from"./blocks-B-FDorPY.js";import"./Tag-DZD94rKb.js";import"./index-B6OSuhq3.js";import"./copy-BPjUZJw9.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Cjfv9lZ_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wMLjz3fG.js";import"./index-BIXJrD8M.js";import"./index-DHspvyEH.js";import"./Link-DBMfTmkv.js";import"./index-DCmHXknG.js";import"./index-B1HFxIWl.js";import"./index-BlVT_NLP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BqxCMWvb.js";import"./addCustomCSSWithScoping-InFg9UZ2.js";import"./index-BettgKsC.js";import"./information-Dh4y9R_M.js";import"./sys-enter-2-DblypcwG.js";import"./alert-CwT2Bhtr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ccy1h0ZZ.js";import"./delete-CAh52cIa.js";import"./settings-Bq4r6lp7.js";import"./NoData-Wb2Eh2l8.js";import"./IllustratedMessage-59yIC32s.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BanPL-9P.js";import"./index-BM97U_Id.js";import"./index-95RptXAb.js";import"./slim-arrow-down-DUDQ1G7d.js";import"./Input-BtplTNuz.js";import"./ResponsivePopoverCommon.css-BwZTAXmn.js";import"./ValueStateMessage.css-2teNoYXT.js";import"./Suggestions.css-GVLxyP7E.js";import"./ListBoxItemGroupTemplate-xi9Dai9-.js";import"./ComboBoxItemGroup-CYvZfMur.js";import"./ListItemBaseTemplate-jJed8ANY.js";import"./Token-CXlJ8X_s.js";import"./ScrollEnablement-BuIEarCH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BakyJ71F.js";import"./ToggleButton-Dmg-mtR4.js";import"./SuggestionItem-JYWpCC6O.js";import"./index-O4brpd7h.js";import"./Option-lTsEHPaz.js";import"./index-DM3wbu2J.js";import"./SegmentedButton-dnl0_LO7.js";import"./index-BW8wCqLg.js";import"./Select-B-GQjth7.js";import"./InvisibleMessage-BCjehSQX.js";import"./slim-arrow-down-Nj2WlNU_.js";import"./index-DA7mVkNb.js";import"./index-CUWHnjz1.js";import"./index-2WqQUSOe.js";import"./index-7R16Plue.js";import"./IconDesign-DXd8PPVF.js";import"./filter-xApDoQhv.js";import"./group-2-D9KCRiYo.js";import"./sort-descending-sPt6c51s.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BS_N9hv6.js";import"./utils-DCPEwa5n.js";import"./index-CX98XYz1.js";import"./index-Ci1baq6U.js";import"./index-BKui1p5j.js";import"./navigation-down-arrow-kptVdaed.js";import"./navigation-right-arrow-CDK-kpp0.js";import"./navigation-right-arrow-BRtJ_VL9.js";import"./useCurrentTheme-CXTKA9u6.js";import"./index-D4VjyumX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--X6IcLkp.js";import"./paper-plane-a-F37SE4.js";import"./index-CSdQr0-4.js";import"./less-C3jyfe8r.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
