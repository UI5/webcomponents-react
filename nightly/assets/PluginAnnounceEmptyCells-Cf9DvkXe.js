import{j as t}from"./iframe-DHpTrIAy.js";import{useMDXComponents as n}from"./index-BNdd_DZc.js";import{I as i,F as m}from"./CommandsAndQueries-D5kPRnn1.js";import{M as p,C as s}from"./blocks-81TV0E2-.js";import"./Tag-BMggxcvS.js";import"./index-o6k9VRwd.js";import"./copy-CUNi2x4z.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-12bgNQ45.js";import"./preload-helper-PPVm8Dsz.js";import"./index-w0GUVkMu.js";import"./index-DA4wHaXp.js";import"./index-DbNixw4c.js";import"./Link-DUpBHPtC.js";import"./index-DpF6uZ0K.js";import"./index-C40hnbsn.js";import"./index-CAXkJF_S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrKfdXs7.js";import"./addCustomCSSWithScoping-CHvNzWcZ.js";import"./index-rxRuTrVR.js";import"./information-D34aykIE.js";import"./sys-enter-2-ELzebk4o.js";import"./alert-8s8s7RYv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DCgPgyA-.js";import"./delete-DKrHSPz3.js";import"./settings-B6rfKHYI.js";import"./NoData-BJPeIuxS.js";import"./IllustratedMessage-DeicVa4E.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CTj596wI.js";import"./index-Dm_gfiI8.js";import"./index-CKx79arg.js";import"./slim-arrow-down-BGJA9V4H.js";import"./Input-DwdQCY2u.js";import"./ResponsivePopoverCommon.css-niQ49B26.js";import"./ValueStateMessage.css-DwB1W3lZ.js";import"./Suggestions.css-BOrRXcWN.js";import"./ListBoxItemGroupTemplate-nGZ9tTJV.js";import"./ComboBoxItemGroup-EVKWXWz8.js";import"./ListItemBaseTemplate-BXWM3mr4.js";import"./Token-y68VeFe2.js";import"./ScrollEnablement-B1igU_IO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BerdkBu5.js";import"./ToggleButton-cnwhtHLd.js";import"./SuggestionItem-jvS16M3k.js";import"./index-ezHHRlrS.js";import"./Option-Dj2PGXAN.js";import"./index-DWfWmYfQ.js";import"./SegmentedButton-DLLW2xv0.js";import"./index-Dn_pjokW.js";import"./Select-DB28s_OD.js";import"./InvisibleMessage-C3z5CeG6.js";import"./slim-arrow-down-dKp6dqzM.js";import"./index-Djnxwr7T.js";import"./index-B5z9SVI9.js";import"./index-CUCGS5XW.js";import"./index-BChvanZZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nEVcPtmr.js";import"./group-2-CQGV8bXi.js";import"./sort-descending-DD213tWy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BswnqQsD.js";import"./utils-DR3aQyQD.js";import"./index-d0itOHls.js";import"./index-CTkbrW4s.js";import"./index-DsQSOist.js";import"./navigation-down-arrow-By_eP8IV.js";import"./navigation-right-arrow-Czim4Kw8.js";import"./navigation-right-arrow-DwujKgov.js";import"./useCurrentTheme-BalyHQ7S.js";import"./index-Cmtiwzmy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CxN0R0T5.js";import"./paper-plane-DWahO4cJ.js";import"./index-CJiey5H1.js";import"./less-BDnAnuj7.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(i,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:l}),`
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
`,t.jsx(m,{})]})}function Rt(r={}){const{wrapper:o}={...n(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Rt as default};
