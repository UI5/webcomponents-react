import{j as o}from"./iframe-BgUChC8z.js";import{useMDXComponents as n}from"./index-Bt3QSaL1.js";import{I as r,F as m}from"./CommandsAndQueries-BiCzXToa.js";import{M as p,C as s}from"./blocks-xGQg2Vw5.js";import"./Tag-C_OAQHPO.js";import"./index-Wo45_tYZ.js";import"./copy-BTfIxGSH.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CeX0Kyfe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQfpsC01.js";import"./index-BNFZf5J7.js";import"./index-D4lpRvQf.js";import"./Link-BaaJYg0_.js";import"./index-EZPmIbpG.js";import"./index-I7ioAdFJ.js";import"./index-C5F4agy_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNw7RwQP.js";import"./addCustomCSSWithScoping-CSlMgmu5.js";import"./index-DUpxdMFd.js";import"./information-B5F-s1Wz.js";import"./sys-enter-2-pPHl1vwI.js";import"./alert-C-NbCkDs.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CD6CHA-o.js";import"./delete-y5lJrBeW.js";import"./settings-Bcfleeh9.js";import"./NoData-D4-LWY5W.js";import"./IllustratedMessage-D98osn7I.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DSUueqrj.js";import"./index-BF4U7j9u.js";import"./index-CWO0kD1j.js";import"./slim-arrow-down-BZSodC91.js";import"./Input-BqX4tKYi.js";import"./ResponsivePopoverCommon.css-DQy2mY97.js";import"./ValueStateMessage.css-BQqInwWq.js";import"./Suggestions.css-CgWQiOZG.js";import"./ListBoxItemGroupTemplate-Bh0XK8An.js";import"./ComboBoxItemGroup-DBigtGMN.js";import"./ListItemBaseTemplate-Di7slU74.js";import"./Token-WW_TgQeI.js";import"./ScrollEnablement-4uXBpXRT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-J4gk5GHC.js";import"./ToggleButton-BNEU09Z3.js";import"./SuggestionItem-DWN4Mbly.js";import"./index-DUntWQ4O.js";import"./Option-Bz2fFbd9.js";import"./index-KkNhBHx0.js";import"./SegmentedButton-D_JrRdRj.js";import"./index-Db0tKTu3.js";import"./Select-DKO0kXu8.js";import"./InvisibleMessage-DzjrKdqv.js";import"./slim-arrow-down-CAVMB9Lc.js";import"./index-DUG4DuXd.js";import"./index-DybCOYZe.js";import"./index-DxWPnaPh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cf4OiQb-.js";import"./group-2-fkT5HhJb.js";import"./sort-descending-6nhlriZW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdXyFq69.js";import"./utils-aeblRDt6.js";import"./index-BpehBtsx.js";import"./index-CWGNCP4i.js";import"./index-BnZoUZkk.js";import"./navigation-down-arrow-szs85QnW.js";import"./navigation-right-arrow-Du_yn3gH.js";import"./navigation-right-arrow-B69KAuHS.js";import"./useCurrentTheme-B2EMPJa_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D7MIdb0-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuukhyP7.js";import"./paper-plane-ChG2uJSU.js";import"./index-DMT0rPiM.js";import"./less-DhsR2zRd.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
