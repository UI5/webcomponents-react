import{j as t}from"./iframe-jDeV-G8S.js";import{useMDXComponents as n}from"./index-Da3DrjVc.js";import{I as i,F as m}from"./CommandsAndQueries-S46eotFY.js";import{M as p,C as s}from"./blocks-BVLmp_0m.js";import"./Tag-CoiXaVSg.js";import"./index-DNzR_fzc.js";import"./copy-DEHDDsgd.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B7xLL4Vz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYm7h2BG.js";import"./index-DJMOMMru.js";import"./index-BZOVbKF_.js";import"./Link-C8Q8wVMF.js";import"./index-DhmB-gDR.js";import"./index-GOQBvCdy.js";import"./index--p5n_M0a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeVQuTnR.js";import"./addCustomCSSWithScoping-DNXKFIA9.js";import"./index-C8jlh6dJ.js";import"./information-CBKKlcN3.js";import"./sys-enter-2-D5f8NC37.js";import"./alert-Dk2Mtfik.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BaSB_xVI.js";import"./delete-C6VclcYK.js";import"./settings-C7QaHLBi.js";import"./NoData-B5IMrlNi.js";import"./IllustratedMessage-DYUp67Ci.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BraCc1Gf.js";import"./index-D8qN7Hry.js";import"./index-CnvfagGK.js";import"./slim-arrow-down-Vg8N0Q0I.js";import"./Input-oPDKy1ol.js";import"./ResponsivePopoverCommon.css-DpB6CavY.js";import"./ValueStateMessage.css-uRbauoI5.js";import"./Suggestions.css-DiV-Lfrn.js";import"./ListBoxItemGroupTemplate-C5UVYOIE.js";import"./ComboBoxItemGroup-DdLskjQz.js";import"./ListItemBaseTemplate-DG9IXdA-.js";import"./Token--hjAUxWq.js";import"./ScrollEnablement-BysKsuQY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BiM6YtfZ.js";import"./ToggleButton-cMq8je7X.js";import"./SuggestionItem-e6KTrnLc.js";import"./index-CECiZ_Xv.js";import"./Option-CReekOMZ.js";import"./index-DgdfTx4u.js";import"./SegmentedButton-BUR6TsSQ.js";import"./index-BchHiesQ.js";import"./Select-CMirSOvH.js";import"./InvisibleMessage-CSYFI2hH.js";import"./slim-arrow-down-BnGG1iQc.js";import"./index-3NCdG4IQ.js";import"./index-CBPksq_0.js";import"./index-dvlsjgN4.js";import"./index-B7d4NHtR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CabphWI6.js";import"./group-2-YQpUAD-P.js";import"./sort-descending-DyAgXLO6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DSO1X3Eq.js";import"./utils-DijlQhLT.js";import"./index-CTR4qlZZ.js";import"./index-BGQ0DLLD.js";import"./index-CU2qxjFI.js";import"./navigation-down-arrow-CQCklFQ2.js";import"./navigation-right-arrow-BoiqaSPb.js";import"./navigation-right-arrow-Bc8erDMC.js";import"./useCurrentTheme-df9ByhFB.js";import"./index-CGu9uvTR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsxwMa2U.js";import"./paper-plane-C0TXry-l.js";import"./index-BhxN8tHb.js";import"./less-CBiR1zC0.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
