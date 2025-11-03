import{j as o}from"./iframe-Xz6qaemo.js";import{useMDXComponents as n}from"./index-BLh1nTrf.js";import{I as r,F as m}from"./CommandsAndQueries-oG0MSLdr.js";import{M as p,C as s}from"./blocks-_9vvjoio.js";import"./Tag-B2Pydg-J.js";import"./index-_ZnAwLWJ.js";import"./copy-de1br5ux.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Cr2R-Mua.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnWkVA6r.js";import"./index-AGYmHzMg.js";import"./index-CxA_57ir.js";import"./Link-H0aejI1H.js";import"./index-DlKRlgNQ.js";import"./index-CDFp-rVG.js";import"./index-B7c7-SiX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2LdFPij.js";import"./addCustomCSSWithScoping-DGLLVgG9.js";import"./index-BtaCUQLs.js";import"./information-UOioa2-U.js";import"./sys-enter-2-03pme12N.js";import"./alert-BPtSnw9a.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYNlcEMB.js";import"./delete-C5Afcmz_.js";import"./settings-DsuqLvMX.js";import"./NoData-BX0HAX4c.js";import"./IllustratedMessage-r6efCPOB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CmEzTzKT.js";import"./index-Bo6AI3A0.js";import"./index-ByQ70acs.js";import"./slim-arrow-down-kuRpxWkz.js";import"./Input-BsnqiEQ7.js";import"./ResponsivePopoverCommon.css-gF0WoKZh.js";import"./ValueStateMessage.css-bt6X1_t1.js";import"./Suggestions.css-9dRS8B2y.js";import"./ListBoxItemGroupTemplate-RPkQEUFS.js";import"./ComboBoxItemGroup-uYagQgUR.js";import"./ListItemBaseTemplate-Cqk-eK-r.js";import"./Token-BXAB4gvC.js";import"./ScrollEnablement-BYIXzTaU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cv-glKj0.js";import"./ToggleButton-B0n92tMf.js";import"./SuggestionItem-BhiiFS2M.js";import"./index-DwqlJH6F.js";import"./Option-CUa_Ltzi.js";import"./index-CD5txzhS.js";import"./SegmentedButton-ZAk0VihI.js";import"./index-BAFzivYh.js";import"./Select-Dn1X-1Tb.js";import"./InvisibleMessage-zP1bmMm8.js";import"./slim-arrow-down-DITXjxiP.js";import"./index-Ds3SKLSX.js";import"./index-C9RuyfPL.js";import"./index-ClQp6b9m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CluGEagr.js";import"./group-2-BxBgglbL.js";import"./sort-descending-lD1YgKhD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DZINQXwv.js";import"./utils-_BVayb1h.js";import"./index-BX-N77aH.js";import"./index-CqNjI8pt.js";import"./index-BaPIYtFn.js";import"./navigation-down-arrow-CgS7x-g2.js";import"./navigation-right-arrow-KPChvtX3.js";import"./navigation-right-arrow-DhEgrzw3.js";import"./useCurrentTheme-CuRUX4rr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Ga4iz5tb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOxscssR.js";import"./paper-plane-DKmOT4rW.js";import"./index-TaZnrIva.js";import"./less-C2rIQ98G.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
