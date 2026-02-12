import{j as o}from"./iframe-CeYK60h5.js";import{useMDXComponents as n}from"./index-CyuETzTv.js";import{I as r,F as m}from"./CommandsAndQueries-CFbtJHwM.js";import{M as p,C as s}from"./blocks-BIKTnw0B.js";import"./Tag-C54M4ldZ.js";import"./index-CT0V1rC-.js";import"./copy-CiRkqTCy.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-e4dPoyh1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHuebsjW.js";import"./index-DCNRybmK.js";import"./index-BQVvVbng.js";import"./Link-B2AcL4ks.js";import"./index-C-Yn0AU-.js";import"./index-CaQyDWQ7.js";import"./index-DBl_V_lR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkPy33bc.js";import"./addCustomCSSWithScoping-BSnYfvCe.js";import"./index-C9AaKYqF.js";import"./information-BkZW1INs.js";import"./sys-enter-2-Bag4B31-.js";import"./alert-q5zKag_b.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Brue9bZM.js";import"./delete-BcvtETcy.js";import"./settings-5BacSR94.js";import"./NoData-DxohvE4z.js";import"./IllustratedMessage-C5nGizD-.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DCAxNV9P.js";import"./index-BQ2ppCag.js";import"./index-DvXTSSIA.js";import"./slim-arrow-down-CVGDx6dI.js";import"./Input-Cpc3WDAD.js";import"./ResponsivePopoverCommon.css-D2Os4vPx.js";import"./ValueStateMessage.css-DygseWPv.js";import"./Suggestions.css-uPHlQ0zI.js";import"./ListBoxItemGroupTemplate-CUULFd46.js";import"./ComboBoxItemGroup-3qNTHREe.js";import"./ListItemBaseTemplate-IHDN_xws.js";import"./Token-DIiTPAFv.js";import"./ScrollEnablement-BzX8rTSh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DChf4TnK.js";import"./ToggleButton-HnifA80u.js";import"./SuggestionItem-D3x38-wF.js";import"./index-1UGQ1AHt.js";import"./Option-DheRIPLY.js";import"./index-BoIm-xs6.js";import"./SegmentedButton-C-FghxIk.js";import"./index-eQnZgMgj.js";import"./Select-EZ5UJa2T.js";import"./InvisibleMessage-BjsU8t7h.js";import"./slim-arrow-down-B3EB9Tld.js";import"./index-DGapjW98.js";import"./index-ZeQWpjUk.js";import"./index-BGapk1v_.js";import"./index-Bo5Q1SBc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DABH-sQq.js";import"./group-2-DEn7mrnO.js";import"./sort-descending-aDuCK_fE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxmDL6TA.js";import"./utils-Dlyy7SNs.js";import"./index-BO4Or_uB.js";import"./index-rmJF3f6R.js";import"./index-DsmxMPC1.js";import"./navigation-down-arrow-DKptDBWM.js";import"./navigation-right-arrow-CSc3hBqU.js";import"./navigation-right-arrow-CXkdEEUV.js";import"./useCurrentTheme-Bfgyh39P.js";import"./index-C9a6OsiH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-1HgTxzEu.js";import"./paper-plane-B0eqfuay.js";import"./index-Dg2lsmGL.js";import"./less-BaBvLqfW.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
