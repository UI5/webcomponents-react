import{j as o}from"./iframe-DGliVLqx.js";import{useMDXComponents as n}from"./index-BKdQ_dPP.js";import{I as r,F as m}from"./CommandsAndQueries-DhC-K5aV.js";import{M as p,C as s}from"./blocks-DSVMoi0f.js";import"./Tag-D0qHMP--.js";import"./index-CUMj3eTR.js";import"./copy-BXMLotg5.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Di1JYyty.js";import"./preload-helper-PPVm8Dsz.js";import"./index-0zoKCck7.js";import"./index-DDYQS3It.js";import"./index-C2z7U0T0.js";import"./Link-NPuKH9vo.js";import"./index-xskusYgR.js";import"./index-usRBaxBR.js";import"./index-Bnhuo37k.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xhvQd63o.js";import"./addCustomCSSWithScoping-H3JndsVD.js";import"./index-C-ihtk73.js";import"./information-DwX5G7SH.js";import"./sys-enter-2-CLhjZKEg.js";import"./alert-D8WWgafc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPXdiIGy.js";import"./delete-VNiEmKzB.js";import"./settings-Bn4IMpxs.js";import"./NoData-CrO-Ojbp.js";import"./IllustratedMessage-CQ-pThL8.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-zmPXMY8f.js";import"./index-BPpKon_v.js";import"./index-ZlqYo9cE.js";import"./slim-arrow-down-BPCmfgSQ.js";import"./Input-B1uSH_6j.js";import"./ResponsivePopoverCommon.css-C-Hps5ad.js";import"./ValueStateMessage.css-Dg_RR3hb.js";import"./Suggestions.css-OrfoYcSp.js";import"./ListBoxItemGroupTemplate-B1B8Njil.js";import"./ComboBoxItemGroup-CFqLv33P.js";import"./ListItemBaseTemplate-BLL1fYXv.js";import"./Token-BYnYPiQ0.js";import"./ScrollEnablement-7T92gtzO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMz5O0cu.js";import"./ToggleButton-gLJIOvzQ.js";import"./SuggestionItem-B0HnLZ2a.js";import"./index-JZkeV-N1.js";import"./Option-BLZmkEGm.js";import"./index-DgRC1GtG.js";import"./SegmentedButton-BgAef3sS.js";import"./index-CDBfsg8A.js";import"./Select-DlS9_dRk.js";import"./InvisibleMessage-CRsDkV-1.js";import"./slim-arrow-down-DPwEh6bg.js";import"./index-DW5AkRqQ.js";import"./index-4N3HClhe.js";import"./index-B9jV6fm0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-iCWrcMv0.js";import"./group-2-BiBRlmiZ.js";import"./sort-descending-CwrGqsAr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BuqEh9jI.js";import"./utils-VIsRdQMv.js";import"./index-DN3oVk97.js";import"./index-mOI0MCrO.js";import"./index-DGwcjkeH.js";import"./navigation-down-arrow-Bi_8NERP.js";import"./navigation-right-arrow-CAlrOhev.js";import"./navigation-right-arrow-Cb1EEugd.js";import"./useCurrentTheme-CcMg6oDL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BUCpswoL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CbsPXVbG.js";import"./paper-plane-Czf94RLw.js";import"./index-Bl0RftRs.js";import"./less-DTZLBQaX.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
