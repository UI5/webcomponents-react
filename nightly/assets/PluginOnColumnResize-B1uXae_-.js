import{j as o}from"./iframe-DwrbX4RV.js";import{useMDXComponents as n}from"./index-DEV0fT-3.js";import{I as r,F as m}from"./CommandsAndQueries-33-9TCX1.js";import{M as p,C as s}from"./blocks-D-Cz54eK.js";import"./Tag-CFiS-8RZ.js";import"./index-BQbTf7k-.js";import"./copy-ZcGBB0nX.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BPiexnty.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Zv7LwxZg.js";import"./index-DcjDkGfQ.js";import"./index-C2WUwRD4.js";import"./Link-CH3IA-s_.js";import"./index-DfMLBK8G.js";import"./index-4tQAJTUd.js";import"./index-DafPGyjY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP_TNLDv.js";import"./addCustomCSSWithScoping-BNLxo1iY.js";import"./index-DLV46EWe.js";import"./information-Bbk3nBJv.js";import"./sys-enter-2-Dh-lxitt.js";import"./alert-DlEiJnhn.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHDvawwA.js";import"./delete-DcD4HBZQ.js";import"./settings-BXd4XT-i.js";import"./NoData-ByibTLi_.js";import"./IllustratedMessage-BP4eByRs.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-pczX_0-g.js";import"./index-CiWbQ0SX.js";import"./index-CaEHNGDh.js";import"./slim-arrow-down-D3ZsDLwh.js";import"./Input-DKlTLujy.js";import"./ResponsivePopoverCommon.css-C8r5-0tw.js";import"./ValueStateMessage.css-CdZTGBs2.js";import"./Suggestions.css-BXr49NFJ.js";import"./ListBoxItemGroupTemplate-Dzl2p6m5.js";import"./ComboBoxItemGroup-BSFvIoMS.js";import"./ListItemBaseTemplate-D7oB3m3T.js";import"./Token-Bx9MLKqg.js";import"./ScrollEnablement-CYy8a9iX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C7C_LUm1.js";import"./ToggleButton-BMmF2FMi.js";import"./SuggestionItem-DkdM06SJ.js";import"./index-BhGwaRmh.js";import"./Option-B-khv2Jb.js";import"./index-Bh6MarsA.js";import"./SegmentedButton-DJ9UBm4v.js";import"./index-DfbaGbYm.js";import"./Select-XgkwJ3ZO.js";import"./InvisibleMessage-bGcdvgGE.js";import"./slim-arrow-down-Bun6gyze.js";import"./index-CPtCfy3E.js";import"./index-KseHHLyP.js";import"./index-CooYNUmQ.js";import"./index-Djuxy3lm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DS1aWjfv.js";import"./group-2-CDQM5C56.js";import"./sort-descending-YAOaWHCt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DINgmDQf.js";import"./utils-Df-GzOhH.js";import"./index-BaDEpd7H.js";import"./index-B93zIJEs.js";import"./index-B99IvkHX.js";import"./navigation-down-arrow-Bf5qo7Su.js";import"./navigation-right-arrow-CK6e15pE.js";import"./navigation-right-arrow-WgjRwqCg.js";import"./useCurrentTheme-D7Gurzqj.js";import"./index-CSxQ_278.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DBK1p3l_.js";import"./paper-plane-BgIVbC40.js";import"./index-DQlMDjQF.js";import"./less-DvuWw9NE.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
