import{j as t}from"./iframe-CCKRZdbF.js";import{useMDXComponents as i}from"./index-BW1v5Z1e.js";import{I as n,F as m}from"./CommandsAndQueries-D1vMTwJ_.js";import{M as p,C as s}from"./blocks-DizR4yrp.js";import"./Tag-D_1GVpYe.js";import"./index-BXous6Vg.js";import"./copy-DCYvEQ2A.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BY_i5uVM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ppkYs0Pw.js";import"./index-TT9wAavy.js";import"./index-C4ynR4jc.js";import"./Link-DVIX6xLA.js";import"./index-Xy0A6wMV.js";import"./index-BMpz4bfD.js";import"./index-byvg7TJC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di3RALWU.js";import"./addCustomCSSWithScoping-BCWPiCrh.js";import"./index-DgC4fDU8.js";import"./information-DXZj2K0P.js";import"./sys-enter-2-_UoM3OrC.js";import"./alert-BYsKIWrN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DlXGJ_VL.js";import"./delete-D8TdfBV2.js";import"./settings-DOirttvF.js";import"./NoData-DD85yEi3.js";import"./IllustratedMessage-Clfpji7f.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-_rMq9ILm.js";import"./index-BkArYS5g.js";import"./slim-arrow-down-BZhadXVl.js";import"./Input-C5oVUkIB.js";import"./ResponsivePopoverCommon.css-Bikw0MiR.js";import"./ValueStateMessage.css-BuporDJE.js";import"./Suggestions.css-0ImH9Wru.js";import"./ListBoxItemGroupTemplate-ognKSaX6.js";import"./ComboBoxItemGroup-d7zArK7N.js";import"./ListItemBaseTemplate-BkJwMcM3.js";import"./Token-BEFr1xPt.js";import"./ScrollEnablement-BBtwJSnx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DBjVOyrh.js";import"./ToggleButton-B3jU_WZR.js";import"./SuggestionItem-CBgTR6O3.js";import"./index-BAMuu1mV.js";import"./Option-DaCvETte.js";import"./index-BrrdD8jw.js";import"./SegmentedButton-tNr2gkyL.js";import"./index-C329Ucmy.js";import"./Select-CaT0Uyc0.js";import"./InvisibleMessage-4YLx3Nor.js";import"./slim-arrow-down-CfkSdpPj.js";import"./index-CriRaI3g.js";import"./index-DYCg0rFm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-4F45alAB.js";import"./group-2-ChPXGWJ0.js";import"./sort-descending-CANJAVhZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Y-BADZTS.js";import"./utils-DSjF8HMp.js";import"./index-Cj12FuCk.js";import"./index-D6hI8QST.js";import"./index-Bk7OThpJ.js";import"./navigation-down-arrow-BqWqvXKw.js";import"./navigation-right-arrow-EEj5yORF.js";import"./navigation-right-arrow-lOLkkaQa.js";import"./useCurrentTheme-Cidp3UIH.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D1F5uvoT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dajtv9JX.js";import"./paper-plane-C6c1Gi-x.js";import"./index-DKHGOPrC.js";import"./less-TJfV8SH9.js";import"./index-X_VuPj-3.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,t.jsx(m,{})]})}function Lt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Lt as default};
