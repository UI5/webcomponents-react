import{j as o}from"./iframe-DHpTrIAy.js";import{useMDXComponents as n}from"./index-BNdd_DZc.js";import{I as r,F as m}from"./CommandsAndQueries-D5kPRnn1.js";import{M as p,C as s}from"./blocks-81TV0E2-.js";import"./Tag-BMggxcvS.js";import"./index-o6k9VRwd.js";import"./copy-CUNi2x4z.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-12bgNQ45.js";import"./preload-helper-PPVm8Dsz.js";import"./index-w0GUVkMu.js";import"./index-DA4wHaXp.js";import"./index-DbNixw4c.js";import"./Link-DUpBHPtC.js";import"./index-DpF6uZ0K.js";import"./index-C40hnbsn.js";import"./index-CAXkJF_S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrKfdXs7.js";import"./addCustomCSSWithScoping-CHvNzWcZ.js";import"./index-rxRuTrVR.js";import"./information-D34aykIE.js";import"./sys-enter-2-ELzebk4o.js";import"./alert-8s8s7RYv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DCgPgyA-.js";import"./delete-DKrHSPz3.js";import"./settings-B6rfKHYI.js";import"./NoData-BJPeIuxS.js";import"./IllustratedMessage-DeicVa4E.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CTj596wI.js";import"./index-Dm_gfiI8.js";import"./index-CKx79arg.js";import"./slim-arrow-down-BGJA9V4H.js";import"./Input-DwdQCY2u.js";import"./ResponsivePopoverCommon.css-niQ49B26.js";import"./ValueStateMessage.css-DwB1W3lZ.js";import"./Suggestions.css-BOrRXcWN.js";import"./ListBoxItemGroupTemplate-nGZ9tTJV.js";import"./ComboBoxItemGroup-EVKWXWz8.js";import"./ListItemBaseTemplate-BXWM3mr4.js";import"./Token-y68VeFe2.js";import"./ScrollEnablement-B1igU_IO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BerdkBu5.js";import"./ToggleButton-cnwhtHLd.js";import"./SuggestionItem-jvS16M3k.js";import"./index-ezHHRlrS.js";import"./Option-Dj2PGXAN.js";import"./index-DWfWmYfQ.js";import"./SegmentedButton-DLLW2xv0.js";import"./index-Dn_pjokW.js";import"./Select-DB28s_OD.js";import"./InvisibleMessage-C3z5CeG6.js";import"./slim-arrow-down-dKp6dqzM.js";import"./index-Djnxwr7T.js";import"./index-B5z9SVI9.js";import"./index-CUCGS5XW.js";import"./index-BChvanZZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nEVcPtmr.js";import"./group-2-CQGV8bXi.js";import"./sort-descending-DD213tWy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BswnqQsD.js";import"./utils-DR3aQyQD.js";import"./index-d0itOHls.js";import"./index-CTkbrW4s.js";import"./index-DsQSOist.js";import"./navigation-down-arrow-By_eP8IV.js";import"./navigation-right-arrow-Czim4Kw8.js";import"./navigation-right-arrow-DwujKgov.js";import"./useCurrentTheme-BalyHQ7S.js";import"./index-Cmtiwzmy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CxN0R0T5.js";import"./paper-plane-DWahO4cJ.js";import"./index-CJiey5H1.js";import"./less-BDnAnuj7.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
