import{j as o}from"./iframe-BYdzMGmT.js";import{useMDXComponents as n}from"./index-Cj6hKPa8.js";import{I as r,F as m}from"./CommandsAndQueries-B5lWQhG8.js";import{M as p,C as s}from"./blocks-Cj5RS3Jv.js";import"./Tag-DG55Z9om.js";import"./index-BhYrs86x.js";import"./copy-CWbk9K2V.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-cVssna8z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnPstsP7.js";import"./index-DjVw4D0h.js";import"./index-DAUDNesr.js";import"./Link-BofMtgPA.js";import"./index-DA47VMXK.js";import"./index-fFMR_gyI.js";import"./index-CkYce0wJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_-sXQeTV.js";import"./addCustomCSSWithScoping-Cw5UObAf.js";import"./index-DonwXZ8V.js";import"./information-BG-owH3g.js";import"./sys-enter-2-CtufiL4W.js";import"./alert-C-RhncMU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-o_uZzUjH.js";import"./delete-CRpTyT7P.js";import"./settings-DeL5SdbF.js";import"./NoData-mwJ1Waqg.js";import"./IllustratedMessage-493kKCGH.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BFX4KQZG.js";import"./index-b49JVpuf.js";import"./index-BI-zpLc6.js";import"./slim-arrow-down-EzV-h7vN.js";import"./Input-gzz4D9_r.js";import"./ResponsivePopoverCommon.css-laFt-eqF.js";import"./ValueStateMessage.css-G31DxWEi.js";import"./Suggestions.css-D0qbNHCU.js";import"./ListBoxItemGroupTemplate-fMWQr5Wn.js";import"./ComboBoxItemGroup-CNETnNZ3.js";import"./ListItemBaseTemplate-CZN1ifJG.js";import"./Token-CelvgPLW.js";import"./ScrollEnablement-C12b1B5M.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4TcI1um.js";import"./ToggleButton-muSO_ArA.js";import"./SuggestionItem-Ck_600Dg.js";import"./index-BzSXKO6G.js";import"./Option-ikxQWrXS.js";import"./index-DOxN2q1f.js";import"./SegmentedButton-D7IYgi5S.js";import"./index-Dpb_P6_i.js";import"./Select-BsZRQHw0.js";import"./InvisibleMessage-C_pu6iRf.js";import"./slim-arrow-down-ZQK8hEoe.js";import"./index-B9IEbrlj.js";import"./index-B0MOGWPf.js";import"./index-BeEOOMQe.js";import"./index-Bd3_gVkF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-3B0bMDQR.js";import"./group-2-D9EY0eAa.js";import"./sort-descending-CQfXaiJr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4vmYggie.js";import"./utils-CQvHdMQU.js";import"./index-CVdG3Tpp.js";import"./index-7KL5Sw8P.js";import"./index-W__nbP8_.js";import"./navigation-down-arrow-CgevP1zB.js";import"./navigation-right-arrow-BljO3jRm.js";import"./navigation-right-arrow-DI1UPgvk.js";import"./useCurrentTheme-D-EAbyTm.js";import"./index-BL0I7ePE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BM3Vsr1m.js";import"./paper-plane-DrlzT1LA.js";import"./index-BltXWBpk.js";import"./less-DjQ8DtUG.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
