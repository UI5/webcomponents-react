import{j as o}from"./iframe-DTHPT7iA.js";import{useMDXComponents as r}from"./index-74UlZZJj.js";import{I as n,F as m}from"./CommandsAndQueries-BD3jeLaK.js";import{M as p,C as s}from"./blocks-BEm3tjb6.js";import"./Tag-CJADm4_M.js";import"./index-C3HgU9VG.js";import"./copy-mCNoL2s6.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CR2kQPrZ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DwOvcXXK.js";import"./index-Cj0CYz_p.js";import"./index-C6-xBNa3.js";import"./Link-BbcZTKOL.js";import"./addCustomCSSWithScoping-DApCUjf-.js";import"./index-D_aw5Z2j.js";import"./index-dqQUzE09.js";import"./index-ig2sn1RW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BENd75qS.js";import"./index-t5gVEC_D.js";import"./information-DoW4IMVD.js";import"./sys-enter-2-ByI7nkKd.js";import"./alert-COIhFOls.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DnDfdHQU.js";import"./delete-BbQKzcu4.js";import"./settings-DM92s_uf.js";import"./NoData-CwHmvSdw.js";import"./IllustratedMessage-BuAwQfmL.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-WTABQdxr.js";import"./index-CXXKzpr4.js";import"./slim-arrow-down-CgABXEzJ.js";import"./Input-D-TFuZ-3.js";import"./ResponsivePopoverCommon.css-D92Yx7wX.js";import"./ValueStateMessage.css-CYayy6u-.js";import"./Suggestions.css-BicA_aUI.js";import"./ListBoxItemGroupTemplate-CdUUn9ri.js";import"./ComboBoxItemGroup-Cib3Su5_.js";import"./ListItemBaseTemplate-BiRHqJdx.js";import"./Token-BcxV0UO_.js";import"./ScrollEnablement-C6hn1rKU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CIUna04V.js";import"./ToggleButton-A9PP4M1D.js";import"./SuggestionItem-fB6YQJWQ.js";import"./index-C6IdfRzN.js";import"./Option-DNJdSQ8d.js";import"./index-DCVC7s_-.js";import"./SegmentedButton-BqpTppJT.js";import"./index-CwsyBox-.js";import"./Select-BJhEtDeN.js";import"./InvisibleMessage-CQmpcPbi.js";import"./slim-arrow-down-DiNlSlMl.js";import"./useIsRTL-DmdXpOjP.js";import"./index-CzjWFvA4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CTlYESOp.js";import"./group-2-C9oC9E8g.js";import"./sort-descending-BlC3CcR_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-QG1Rc5Hm.js";import"./utils-r_rDS61f.js";import"./index-Ci763Ceq.js";import"./index-DshYuz1G.js";import"./index-Cj0ZzoJd.js";import"./navigation-down-arrow-DhjjYCmY.js";import"./navigation-right-arrow-DQ97-1lE.js";import"./navigation-right-arrow-DJ-TiPnm.js";import"./useCurrentTheme-Dw7fW8Lu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BF_xCWgE.js";import"./debounce-D7W5PopO.js";import"./paper-plane-CgoaRieJ.js";import"./index-DaHzjs3T.js";import"./less-4irJeyAV.js";import"./index-74boIQ47.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
