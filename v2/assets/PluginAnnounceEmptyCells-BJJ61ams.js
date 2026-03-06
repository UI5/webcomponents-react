import{j as t}from"./iframe-Ded5Mxh2.js";import{useMDXComponents as i}from"./index-CBfl9quq.js";import{I as n}from"./CommandsAndQueries-Ddo3tZ3K.js";import{M as m,C as p}from"./blocks-wt3pPbD-.js";import"./Tag-CDOQSrMR.js";import"./index-DFifKHPS.js";import"./copy-IKAWbId8.js";import{F as s}from"./Footer-1OmcbI64.js";import"./PageNotFound-CXW0ieku.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BzxY5k0R.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DSsFOfLn.js";import"./index-jHFtLiCf.js";import"./index-BmNOE6G0.js";import"./index-BfPsTBbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DHMdvhLY.js";import"./addCustomCSSWithScoping-CBqV9zN1.js";import"./index-CU0yEW5I.js";import"./index-BiAFWhEK.js";import"./index-Cmea41Uz.js";import"./information-YHPlo4lO.js";import"./sys-enter-2-C0FqqFCv.js";import"./alert-K2R8mcWk.js";import"./index-DNd61viN.js";import"./Illustrations-Btxulb8H.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BecE1XJn.js";import"./delete-D0fZzTI7.js";import"./settings-C7B_j-Y8.js";import"./NoData-BrFbWOpJ.js";import"./NoFilterResults-DtaXtqI5.js";import"./index-b0uBMMNt.js";import"./IllustratedMessage-CuBg-vsE.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DH-ja5wq.js";import"./Input-CI6efGcd.js";import"./ResponsivePopoverCommon.css-_OfTkZKW.js";import"./ValueStateMessage.css-DG6SMCv6.js";import"./Suggestions.css-C-q057v5.js";import"./ListBoxItemGroupTemplate-Cfx7Lf4g.js";import"./ComboBoxItemGroup-BIHv5yMY.js";import"./ListItemBaseTemplate-DbmRhLb7.js";import"./Token-MKsNkpqX.js";import"./ScrollEnablement-DENm7iV6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Buphkil0.js";import"./ToggleButton-D3QrfdJw.js";import"./multiselect-all-DLY9p4ls.js";import"./SuggestionItem-Aa3qI1bT.js";import"./index-DiBTKK6u.js";import"./Option-DQV_eQib.js";import"./index-DwPUuk8S.js";import"./SegmentedButton-DuL9bfd4.js";import"./index-BvcEfRdb.js";import"./Select-Dv1RKQLj.js";import"./InvisibleMessage-B1Swz3mZ.js";import"./index-DyOFSSg-.js";import"./index-A2a3Zx38.js";import"./index-DfqEQVv9.js";import"./index-kph-pUw5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJyVYiUy.js";import"./group-2-BCj0Bybz.js";import"./sort-descending-CpxrLLEz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-9DAmB-YI.js";import"./utils-C_Aw_RzH.js";import"./index-Bh6yOWs7.js";import"./index-CkB06Bxg.js";import"./index-4J07KdAi.js";import"./navigation-down-arrow-BnonnUuZ.js";import"./navigation-right-arrow-C1kC_5OC.js";import"./navigation-right-arrow-aXOPQJFG.js";import"./useCurrentTheme-rsX3oT80.js";import"./index-CZHJXIH7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-UbDyFkqU.js";import"./paper-plane-BqlJm9UU.js";import"./index-BwAv9f_2.js";import"./less-Bo9zRhMB.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
