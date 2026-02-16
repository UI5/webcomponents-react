import{j as o}from"./iframe-e2ulr1yw.js";import{useMDXComponents as n}from"./index-PtYZPZtM.js";import{I as r,F as m}from"./CommandsAndQueries-Do207XX8.js";import{M as p,C as s}from"./blocks-Cdk7qnv2.js";import"./Tag-CbLqF2IE.js";import"./index-Eon1qDJA.js";import"./copy-CcaF1jLX.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B5IJLmV9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-svxMDckn.js";import"./index-DgxvJH02.js";import"./index-Cqf-Pfp_.js";import"./Link-CLFq5zdq.js";import"./index-DYD2ksj7.js";import"./index-CEhzVLt4.js";import"./index-BfxPgEEU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ri6qBofk.js";import"./addCustomCSSWithScoping-I9DyZrRa.js";import"./index-BSw3xQau.js";import"./information-BWwLhz3O.js";import"./sys-enter-2-gpB0Ga9p.js";import"./alert-DlKAiOO0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-3jDDYMp1.js";import"./delete-gpEUb-9D.js";import"./settings-6a9Tcwi4.js";import"./NoData-Bc7e_DmL.js";import"./IllustratedMessage-wF_b0eFg.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BnS8M7QN.js";import"./index-COvdbf1_.js";import"./index-C4o8tm0a.js";import"./slim-arrow-down-87FbM80e.js";import"./Input-BV-MxHCg.js";import"./ResponsivePopoverCommon.css-Bd-J_F0o.js";import"./ValueStateMessage.css-DtD4vioP.js";import"./Suggestions.css-CgOY0hpB.js";import"./ListBoxItemGroupTemplate-DF9OoaBX.js";import"./ComboBoxItemGroup-DyFNSY0u.js";import"./ListItemBaseTemplate-DnwALruD.js";import"./Token-Mt_jrKze.js";import"./ScrollEnablement-DRdFoZEe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Zbea8WPI.js";import"./ToggleButton-Cdb7GkdR.js";import"./SuggestionItem-D97oFBk5.js";import"./index-DHKaLTeQ.js";import"./Option-iPEJaQYF.js";import"./index-BN3IxYuD.js";import"./SegmentedButton-Bp3L8kza.js";import"./index-3C9SeEbV.js";import"./Select-C17UaO3k.js";import"./InvisibleMessage-C7K7N7yp.js";import"./slim-arrow-down-BTy2_7_G.js";import"./index-C4YzeeGG.js";import"./index-C-0YmZNW.js";import"./index-DRgjkRpO.js";import"./index-QUiaryyk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-dc6_3EFU.js";import"./group-2-Bdgfi4eM.js";import"./sort-descending-C3r-uppm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UzExfabf.js";import"./utils-93MrREGq.js";import"./index-DX7sH2kB.js";import"./index-BEEBpZeh.js";import"./index-BYqC9MtK.js";import"./navigation-down-arrow-CmGlfloc.js";import"./navigation-right-arrow-Dwj_O4Hl.js";import"./navigation-right-arrow-BzujGep6.js";import"./useCurrentTheme-Bu36broM.js";import"./index-BplRAEow.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cmkb72EN.js";import"./paper-plane-DnlmvP9j.js";import"./index-Bz4A25sA.js";import"./less-WXggIQVd.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
