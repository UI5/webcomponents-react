import{j as t}from"./iframe-BKYtcRXv.js";import{useMDXComponents as i}from"./index-D1nSvVZo.js";import{I as n}from"./CommandsAndQueries-CUyuiRf6.js";import{M as m,C as p}from"./blocks-C1gp0dCe.js";import"./Tag-DHmTMk4C.js";import"./index-BHofxaIm.js";import"./copy-Dd5cryj7.js";import{F as s}from"./Footer-CV4xu3yB.js";import"./PageNotFound-vT0hMOra.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BgWH2hpK.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DoqDiayo.js";import"./index-C0tgyAAj.js";import"./index-BKTLLMG4.js";import"./index-Gx-AmRBv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cc6AlvW2.js";import"./addCustomCSSWithScoping-CxGG2dIU.js";import"./index-ewdSxNga.js";import"./index-CruiZV6T.js";import"./index-qZc2Xmmm.js";import"./information-xnBwopqv.js";import"./sys-enter-2-CNvKNMds.js";import"./alert-CToXuYXU.js";import"./index-BVN1tX5Y.js";import"./Illustrations-C92Wb11w.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DyjJHKas.js";import"./delete-COc--zMh.js";import"./settings-DvU655Lf.js";import"./NoData-CBJjONw5.js";import"./NoFilterResults-B1-N34A5.js";import"./index-CYseC7kl.js";import"./IllustratedMessage-Ckmzjd0E.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BgykwmTu.js";import"./Input-CO_xJZXP.js";import"./ResponsivePopoverCommon.css-BtDqVxq7.js";import"./ValueStateMessage.css-DyHSljmr.js";import"./Suggestions.css-RWTniQDi.js";import"./ListBoxItemGroupTemplate-DntWjXW-.js";import"./ComboBoxItemGroup-v3M_n_k-.js";import"./ListItemBaseTemplate-C6YXo6zR.js";import"./Token-C7dfemIx.js";import"./ScrollEnablement-DIukE-Oq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cy0XTO8n.js";import"./ToggleButton-Xk26D8Qm.js";import"./multiselect-all-DOeifjrx.js";import"./SuggestionItem-DYVKlvCS.js";import"./index-BuNPx4RW.js";import"./Option-CmPkNzZb.js";import"./index-DuMd-yrT.js";import"./SegmentedButton-sNyJwfhT.js";import"./index-C62hrUfU.js";import"./Select-DUx7KFlD.js";import"./InvisibleMessage-Rg77mpqg.js";import"./index-CNnSMZ2h.js";import"./index-DOAAzZ1m.js";import"./index-D5IYfVsF.js";import"./index-QLH2EeXs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-5ce7U-Q1.js";import"./group-2-BfFYcn7i.js";import"./sort-descending-H5QlCV5Q.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DT4jNOO9.js";import"./utils-B2f4QDq0.js";import"./index-_Eo-G0Gk.js";import"./index-CaD4IA15.js";import"./index-BNMj4fDr.js";import"./navigation-down-arrow-DeuSM8u7.js";import"./navigation-right-arrow-BMpDZDnD.js";import"./navigation-right-arrow-DHm48mV8.js";import"./useCurrentTheme-CUsmZadi.js";import"./index-FDSeTwbN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DvpK_1n5.js";import"./paper-plane-BWnAq03I.js";import"./index-atWeeP0l.js";import"./less-CROdRzuR.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,t.jsx(o.p,{children:t.jsx(o.strong,{children:"First data entry with empty values or undefined fields:"})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-js",children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
