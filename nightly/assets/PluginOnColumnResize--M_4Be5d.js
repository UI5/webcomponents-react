import{j as o}from"./iframe-B8dw45Pm.js";import{useMDXComponents as r}from"./index-CDTgJgbW.js";import{I as n}from"./CommandsAndQueries-Bl0bAz-u.js";import{M as m,C as p}from"./blocks-CPHZ0sq-.js";import"./Tag-WXORlQvy.js";import"./index-D7N30NY8.js";import"./copy-KGIzxzBV.js";import{F as s}from"./Footer-DGDb1ilk.js";import"./PageNotFound-DfoC1Yw_.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-RgBDOPDd.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BB11RQL1.js";import"./index-C46a650J.js";import"./index-BGlbQvkZ.js";import"./index-QyvR-n2-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1CIx6RM.js";import"./addCustomCSSWithScoping-CsB8TxAm.js";import"./index-DOUsK0Sd.js";import"./index-6NVZEy4N.js";import"./index-DMbxZG4m.js";import"./information-SmgVOr7y.js";import"./sys-enter-2-CP5yuJAd.js";import"./alert-8CVWRnEr.js";import"./index-S966bfr_.js";import"./Illustrations-Df2_smGK.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BidkkRmv.js";import"./delete-BZJ6IUvv.js";import"./settings-B6wZytM7.js";import"./NoData-BUS2UBU9.js";import"./NoFilterResults-jB3EY9FE.js";import"./index-CsGQVrVS.js";import"./IllustratedMessage-Db95xz8S.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-zKJrkqf2.js";import"./Input-DbCtg-3t.js";import"./ResponsivePopoverCommon.css-C-gN5NTO.js";import"./ValueStateMessage.css-D9UCc8Z-.js";import"./Suggestions.css-CdKXXl_R.js";import"./ListBoxItemGroupTemplate-C-8z5r-p.js";import"./ComboBoxItemGroup-BVTa3qQ4.js";import"./ListItemBaseTemplate-F5Kzrq16.js";import"./Token-BmxSoTRq.js";import"./ScrollEnablement-D1x-dzeA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2eamaf3.js";import"./ToggleButton-D20aF6qv.js";import"./multiselect-all-DqnfVi1W.js";import"./SuggestionItem-DjkrwIhA.js";import"./index-BDSWlRed.js";import"./Option-B6Dpr6jo.js";import"./index-DCu3NKJW.js";import"./SegmentedButton-B9mtat3Y.js";import"./index-C-oOO5rJ.js";import"./Select-BCQ8hRSI.js";import"./InvisibleMessage-DbReB1VG.js";import"./index-BrzIBMwv.js";import"./index-BibcwOaq.js";import"./index-CMSw6EyH.js";import"./index-B_Jr5JgK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BUM7m7qO.js";import"./group-2-CSZUjswS.js";import"./sort-descending-CjviAhWU.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DmjBGCYy.js";import"./utils-DNuiF_K5.js";import"./index-DHfnvRLb.js";import"./index-DKSRGGEL.js";import"./index-Bjh-kMUz.js";import"./navigation-down-arrow-SQxN7jii.js";import"./navigation-right-arrow-DLo6eUJB.js";import"./navigation-right-arrow-BdBKLkX8.js";import"./useCurrentTheme-Ler3vnfg.js";import"./index-0xKDvNxf.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DwcAc9uO.js";import"./paper-plane-CkYIVFEz.js";import"./index-CO9JJlg2.js";import"./less-B347_aem.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
