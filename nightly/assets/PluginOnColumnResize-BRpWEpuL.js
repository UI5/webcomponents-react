import{j as o}from"./iframe-lqcNyI1T.js";import{useMDXComponents as r}from"./index-B0DX3imF.js";import{I as n,F as m}from"./CommandsAndQueries-DzJmAZem.js";import{M as p,C as s}from"./blocks-BpHyZEcb.js";import"./Tag-gBw-lmpH.js";import"./index-CZPzb4BW.js";import"./copy-CC4Y44ID.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-4PBPCegN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dd_PfWwN.js";import"./index-DgG0lX0j.js";import"./index-D-4WJNaw.js";import"./Link-1aRA3aDD.js";import"./index-DHQLUBCy.js";import"./index-B4-GBSDE.js";import"./index-CiJkSLrj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D20vcD6H.js";import"./addCustomCSSWithScoping-CSRUaJeQ.js";import"./index-BwE7J1MZ.js";import"./information-04kgllMP.js";import"./sys-enter-2-DUAlyrLn.js";import"./alert-BKOHJXpG.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C23xYIkD.js";import"./delete-BW14U-oh.js";import"./settings-C_Arqzcj.js";import"./NoData-BWB1BeqC.js";import"./IllustratedMessage-mqMlzviO.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-ClaLYbCr.js";import"./index-CrdqdyqA.js";import"./slim-arrow-down-BdAy8DJu.js";import"./Input-BosrlKUD.js";import"./ResponsivePopoverCommon.css-rVzp8R0x.js";import"./ValueStateMessage.css-DgSFjqSc.js";import"./Suggestions.css-CwUuZGb0.js";import"./ListBoxItemGroupTemplate-CFQN3b19.js";import"./ComboBoxItemGroup-vbV7jSGm.js";import"./ListItemBaseTemplate-9qWHR6_L.js";import"./Token-C1zBJwar.js";import"./ScrollEnablement-BXvjXYp4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DubsfjRL.js";import"./ToggleButton-BdlhECZc.js";import"./SuggestionItem-C3flXLvO.js";import"./index-DEefWD7h.js";import"./Option-B2iZldHA.js";import"./index-DbQw4X54.js";import"./SegmentedButton-I26Ed474.js";import"./index-Dvv9BM37.js";import"./Select-hm_HJkmj.js";import"./InvisibleMessage-DZjX4vEQ.js";import"./slim-arrow-down-D04fAz1I.js";import"./index-CAnVov9v.js";import"./IconDesign-DXd8PPVF.js";import"./filter-bcHOcALN.js";import"./group-2-C-sqScKq.js";import"./sort-descending-CIWa4L55.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DLalqhgy.js";import"./utils-BDJXQz-M.js";import"./index-6hZ21krh.js";import"./index-Csa8MFf6.js";import"./index-C7HMOshY.js";import"./navigation-down-arrow-BIjWvyvQ.js";import"./navigation-right-arrow-Ds7jKwyc.js";import"./navigation-right-arrow-rMJaXdAW.js";import"./useCurrentTheme-JW54ydGk.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BTa33zaZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjl42E3c.js";import"./paper-plane-34M37_jm.js";import"./index-D6UWP29d.js";import"./less-TeO93Nja.js";import"./index-B8H-Ih5E.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
