import{j as o}from"./iframe-DJeYw3_T.js";import{useMDXComponents as n}from"./index-CAoJF-Ee.js";import{I as r,F as m}from"./CommandsAndQueries-BpKCXtjf.js";import{M as p,C as s}from"./blocks-CX606tiu.js";import"./Tag-CCm379UD.js";import"./index-D_iy8XUE.js";import"./copy-DmlYE796.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B4PZ95my.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tnzxKSW0.js";import"./index-US2STizv.js";import"./index-ZZUuVpkh.js";import"./Link-D6M-iLai.js";import"./index-xs7bXSrN.js";import"./index-BldmH6cg.js";import"./index-BfDuZshB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bv4hvB9u.js";import"./addCustomCSSWithScoping-DdjgQkne.js";import"./index-ChAuXbDX.js";import"./information-CWuwvd7P.js";import"./sys-enter-2-CLYEOYwG.js";import"./alert-CTnjMkAD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Q-Qu9aPK.js";import"./delete-GyZuHggU.js";import"./settings-CSNf6lLD.js";import"./NoData-GWb7D9P8.js";import"./IllustratedMessage-CqKcL014.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-zZOIcPI-.js";import"./index-CfSZL8D6.js";import"./index-CrX_lNBL.js";import"./slim-arrow-down-Qo8He1bF.js";import"./Input-aC5IARbR.js";import"./ResponsivePopoverCommon.css-CZVnt3kp.js";import"./ValueStateMessage.css-CB2SJNwM.js";import"./Suggestions.css-CcYLfhHI.js";import"./ListBoxItemGroupTemplate-DzwM921Z.js";import"./ComboBoxItemGroup-DqY3uMDf.js";import"./ListItemBaseTemplate-BLUw0RML.js";import"./Token-hIQX68Hd.js";import"./ScrollEnablement-Dx-9KAkj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cn9vQdt7.js";import"./ToggleButton-WHvzyU1L.js";import"./SuggestionItem-CMelAZK6.js";import"./index-Ba8SHafQ.js";import"./Option-CVovyKZE.js";import"./index-zW6HzqIh.js";import"./SegmentedButton-DSaVLZ2J.js";import"./index-DP_3EnA2.js";import"./Select-BP2hTvkS.js";import"./InvisibleMessage-deXIs-B1.js";import"./slim-arrow-down-CrqglWHm.js";import"./index-vK1nVN_c.js";import"./index-DNDxQV0p.js";import"./index-B8XaOmg3.js";import"./index-DgbNo39p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CcBdfap_.js";import"./group-2-M9iAyJ2B.js";import"./sort-descending-DvSTXRI3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CtFadE48.js";import"./utils-B8eWjpJ0.js";import"./index-DYmw3Rfl.js";import"./index-kUdamL05.js";import"./index-DCI2wHY-.js";import"./navigation-down-arrow-CoZWd3Be.js";import"./navigation-right-arrow-DQBdB4vT.js";import"./navigation-right-arrow-CLYge1Io.js";import"./useCurrentTheme-ByIUAEMi.js";import"./index-CWW0jJXt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wyLkWFxP.js";import"./paper-plane-CIyPt1UE.js";import"./index-Dm0jkMUI.js";import"./less-q2GCtAl4.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
