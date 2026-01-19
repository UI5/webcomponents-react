import{j as t}from"./iframe-CqyRxNKY.js";import{useMDXComponents as n}from"./index-CXuCYMlQ.js";import{I as i,F as m}from"./CommandsAndQueries-DLVKRV5D.js";import{M as p,C as s}from"./blocks-05z5mbmD.js";import"./Tag-DuSXABBC.js";import"./index-C2IzZWSs.js";import"./copy-B4Tt60gX.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CBm2X1QF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-H9dUlo5Q.js";import"./index-BseYaHXw.js";import"./index-4M_RVJJe.js";import"./Link-CXMFuXBh.js";import"./index-DzGBN3np.js";import"./index-CcSvXznG.js";import"./index-CwxFUtHh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bdq0yBwh.js";import"./addCustomCSSWithScoping-Bi_7urmM.js";import"./index-BymRtllO.js";import"./information-Ezgcqzkg.js";import"./sys-enter-2-5MMglnM6.js";import"./alert-BAouMQ7q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BuNqlAjt.js";import"./delete-BbGK1u87.js";import"./settings-DIlRpxvA.js";import"./NoData-BxK7Pf7G.js";import"./IllustratedMessage-DT058xfx.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-kuqPc1vX.js";import"./index-BM2t6dv5.js";import"./index-CorD3FCo.js";import"./slim-arrow-down-XrizyWJX.js";import"./Input-Btn3NqEP.js";import"./ResponsivePopoverCommon.css-BHPxlmcC.js";import"./ValueStateMessage.css-mCgjmZWa.js";import"./Suggestions.css-Ppn_4y7L.js";import"./ListBoxItemGroupTemplate-COFn4xTr.js";import"./ComboBoxItemGroup-BR6fMrLl.js";import"./ListItemBaseTemplate-DexxF4Wd.js";import"./Token-Dwa2qLYj.js";import"./ScrollEnablement-DWFfp1Ql.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDPTJ4VI.js";import"./ToggleButton-ChKD3yaL.js";import"./SuggestionItem-tcsJtTjM.js";import"./index-CLWuTNUb.js";import"./Option-CLygUspk.js";import"./index-BPBdqMTp.js";import"./SegmentedButton-DtCM4MtJ.js";import"./index-QLIu92PZ.js";import"./Select-CS7kvNev.js";import"./InvisibleMessage-fNBDK7S3.js";import"./slim-arrow-down-C6i4R0LO.js";import"./index-ByR0cNcw.js";import"./index-DGvdc7FV.js";import"./index-WMMIdr0v.js";import"./index-B3oIoIuT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CIu0BZu0.js";import"./group-2-iMc-Tv7m.js";import"./sort-descending-DV0fc1pJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KnanNVk9.js";import"./utils-D28-Pdwf.js";import"./index-DLnOQir-.js";import"./index-xFlZ9F3z.js";import"./index-C-6D1Wpo.js";import"./navigation-down-arrow-BcxM96MS.js";import"./navigation-right-arrow-rjgI-qTH.js";import"./navigation-right-arrow-CLMRBwo6.js";import"./useCurrentTheme-CtkLN-hF.js";import"./index-B2kdW0ae.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVxv5eSK.js";import"./paper-plane-DMN-jmcN.js";import"./index-TNQ5kc5_.js";import"./less-CvdXbD0I.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
