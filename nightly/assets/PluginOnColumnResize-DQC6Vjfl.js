import{j as o}from"./iframe-Cr6oQmRd.js";import{useMDXComponents as n}from"./index-evhaF9WH.js";import{I as r,F as m}from"./CommandsAndQueries-DyaEp24s.js";import{M as p,C as s}from"./blocks-BuJgXu1r.js";import"./Tag-BQohtkMw.js";import"./index-C0N3ti0U.js";import"./copy-CZb07l2e.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CNSO2-Yr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-TJ6Pynu-.js";import"./index-ClHBD-hy.js";import"./index-D3MvNgPx.js";import"./Link-Zz-QOIrn.js";import"./index-DcIQ9jq2.js";import"./index-D6mcpJOs.js";import"./index-L71irp-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN2SmbWo.js";import"./addCustomCSSWithScoping-zjLKSZUa.js";import"./index-1zaXUkR9.js";import"./information-ClN6WTRB.js";import"./sys-enter-2-Bqn_SCi3.js";import"./alert-D5OzLbEL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHLyNJm_.js";import"./delete-Pbj3X59-.js";import"./settings-DaBUhecZ.js";import"./NoData-8f9QU6Au.js";import"./IllustratedMessage-DEbMLr2Z.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-DPPo2QH7.js";import"./index-lGIOGYW2.js";import"./index-dhnNfvqN.js";import"./slim-arrow-down-DRXwOi-S.js";import"./Input-Cdi1ONYj.js";import"./ResponsivePopoverCommon.css-Cg9mOybv.js";import"./ValueStateMessage.css-D7Snw4FC.js";import"./Suggestions.css-BnQBqKbG.js";import"./ListBoxItemGroupTemplate-BTBetl9N.js";import"./ComboBoxItemGroup-CF3RQPEz.js";import"./ListItemBaseTemplate-FGeazb6H.js";import"./Token-D3W6Bsly.js";import"./ScrollEnablement-C96PrwAf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BQbeSHYY.js";import"./ToggleButton-BFkiT8DZ.js";import"./SuggestionItem-D8JUaK4y.js";import"./index-CsZ3MJDk.js";import"./Option-BERpoTxk.js";import"./index-CPNpM3Gi.js";import"./SegmentedButton-DDXJEdiY.js";import"./index-D88oWc7K.js";import"./Select-CcNl591L.js";import"./InvisibleMessage-thzwE5Eq.js";import"./slim-arrow-down-ZsLuCJkq.js";import"./index-D70zfhH1.js";import"./index-DMCKlwNV.js";import"./index-BzN4d7ds.js";import"./index-DZthy7eH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJexQfFb.js";import"./group-2-D4WjFEWb.js";import"./sort-descending-BRWVpkHW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CdzFZllT.js";import"./utils-CrX1fJt7.js";import"./index-BhnnBVTO.js";import"./index-dB9wQJYj.js";import"./index-BxkOh5-O.js";import"./navigation-down-arrow-LQ6wC2gk.js";import"./navigation-right-arrow-Bc2pAact.js";import"./navigation-right-arrow-BKMtPJeS.js";import"./useCurrentTheme-C8QQj4mW.js";import"./index-C8SRQwYw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-V7dBuQmF.js";import"./paper-plane-B_bfz4Lw.js";import"./index-D-Sc7kHv.js";import"./less-oIZYDRMd.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
