import{j as o}from"./iframe-aMG4Hi1W.js";import{useMDXComponents as r}from"./index-BxeVDhrM.js";import{I as n}from"./CommandsAndQueries-BfziQu2M.js";import{M as m,C as p}from"./blocks-DBdj8k-3.js";import"./Tag-DjBNrtqu.js";import"./index-BneSHkIo.js";import"./copy-WJgdbAvd.js";import{F as s}from"./Footer-CaqpNArb.js";import"./PageNotFound-BtQ0dC4g.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dbp5t2xm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CIXppVOK.js";import"./index-D79dGm1P.js";import"./index-CRZddsOj.js";import"./index-D40aHtue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NZCpAmvM.js";import"./addCustomCSSWithScoping-DZGBI863.js";import"./index-S-kDMFzJ.js";import"./index-D8GAgpXJ.js";import"./index-CkonQXRu.js";import"./information-CeS9aeh9.js";import"./sys-enter-2-qcEAkOuO.js";import"./alert-a4vfwAyT.js";import"./index-BkkgvrV5.js";import"./Illustrations-Dkeiu4Tv.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BoihuItE.js";import"./delete-Bhzd3ed8.js";import"./settings-D9jXjAvQ.js";import"./NoData-B5lI_Sae.js";import"./NoFilterResults-93txLrZv.js";import"./index-BrFjI7RY.js";import"./IllustratedMessage-AZ7xK1kI.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-1_stmY84.js";import"./Input-DMXWEknM.js";import"./ResponsivePopoverCommon.css-CysXn5xC.js";import"./ValueStateMessage.css-yHzBSpV4.js";import"./Suggestions.css-MgO-ysCw.js";import"./ListBoxItemGroupTemplate-D2YpWlf4.js";import"./ComboBoxItemGroup-CaiNesJa.js";import"./ListItemBaseTemplate-D4Q6p7GN.js";import"./Token-B3caBydG.js";import"./ScrollEnablement-CcG50b_d.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BOysNTzL.js";import"./ToggleButton-oEmebjQG.js";import"./multiselect-all-CLqAkhmq.js";import"./SuggestionItem-DSX8SwVI.js";import"./index-Dwckrray.js";import"./Option-C2UhMZDs.js";import"./index-Cv9nYKsA.js";import"./SegmentedButton-SSHoZn7s.js";import"./index-DBk_motw.js";import"./Select-DPhTn-YG.js";import"./InvisibleMessage-dc5EYpz-.js";import"./index-CATxM_c8.js";import"./index-DDx0pcjW.js";import"./index-Bz8OEacs.js";import"./index-BZDIEYti.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DSQMhsPH.js";import"./group-2-5PvLHLNv.js";import"./sort-descending-BEfEPQGH.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmpjBeDB.js";import"./utils-CLsYPiKt.js";import"./index-MCFemGTY.js";import"./index-CC_WR0o2.js";import"./index-wXOo97ET.js";import"./navigation-down-arrow-lQMnprhK.js";import"./navigation-right-arrow-CgEvW-xF.js";import"./navigation-right-arrow-Cuz2dorW.js";import"./useCurrentTheme-5CUir0cJ.js";import"./index-DEW9r0dY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2FLcBfN.js";import"./paper-plane-p0ZMvhfl.js";import"./index-CMj2nAyN.js";import"./less-CUviCfrH.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
