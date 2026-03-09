import{j as o}from"./iframe-1ixiCrn4.js";import{useMDXComponents as r}from"./index-2ZsnEyB9.js";import{I as n}from"./CommandsAndQueries-Bsuql65l.js";import{M as m,C as p}from"./blocks-CwvJzyWa.js";import"./Tag-DxuCzySC.js";import"./index-DCoPFbKG.js";import"./copy-D9dip1OG.js";import{F as s}from"./Footer-BCWgdeK4.js";import"./PageNotFound-C5oFz4Y3.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DTTXPI55.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-342TA0WQ.js";import"./index-D3khTefu.js";import"./index-D-IU78TD.js";import"./index-DQdp7GQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMCl2W9z.js";import"./addCustomCSSWithScoping-BlChbTB-.js";import"./index-hCYkbxY8.js";import"./index-CfOzkRmu.js";import"./index-DPL6_Akv.js";import"./information-CNHKSbA7.js";import"./sys-enter-2-0xYCNe_8.js";import"./alert-tzZ5a9nx.js";import"./index-Bwh9lIWA.js";import"./Illustrations-BCjcVikr.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dc2LjV4g.js";import"./delete-DNv5LR2n.js";import"./settings-D_ZzwQrf.js";import"./NoData-UkMzNvMr.js";import"./NoFilterResults-BS8fOWJc.js";import"./index-DLKKIsBC.js";import"./IllustratedMessage-DyJkE5qr.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-uIuwnBcp.js";import"./Input-miUO-80x.js";import"./ResponsivePopoverCommon.css-D3Qzl4EB.js";import"./ValueStateMessage.css-SCwGpz07.js";import"./Suggestions.css-BAWn6ORu.js";import"./ListBoxItemGroupTemplate-B27bwUaq.js";import"./ComboBoxItemGroup-oMx3Jr9u.js";import"./ListItemBaseTemplate-CjxCbu7-.js";import"./Token-CYS7OIdr.js";import"./ScrollEnablement-DX3vc3nf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B6T0zg5o.js";import"./ToggleButton-BlkLujuP.js";import"./multiselect-all-BVnO4P_i.js";import"./SuggestionItem-rziQH6-U.js";import"./index-CkUdH-pB.js";import"./Option-DeIIvARx.js";import"./index-CQuXwl3a.js";import"./SegmentedButton-CY93Nkda.js";import"./index-21KIPv4P.js";import"./Select-DMCAW5jj.js";import"./InvisibleMessage-DnN-q7zu.js";import"./index-Dkvo6u5N.js";import"./index-CjD9gHII.js";import"./index-C4jmqnDw.js";import"./index-Bw57cGbJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-o__c2euJ.js";import"./group-2-CLjZuTuz.js";import"./sort-descending-ykcLYXS4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D-WbRyx1.js";import"./utils-DWWruuVN.js";import"./index-BQ6RX1cg.js";import"./index-CGRE3IWk.js";import"./index-SKC0WRYy.js";import"./navigation-down-arrow-DF1AhehZ.js";import"./navigation-right-arrow-CTDnkOYS.js";import"./navigation-right-arrow-CkPlCERA.js";import"./useCurrentTheme-D1Bd3xaO.js";import"./index-qC67coWw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dhvckhyy.js";import"./paper-plane-BP_yreQZ.js";import"./index-Cob64KvX.js";import"./less-CTdolYxs.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
