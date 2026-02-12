import{j as t}from"./iframe-9L5DfdAL.js";import{useMDXComponents as n}from"./index-BFOQlGJl.js";import{I as i,F as m}from"./CommandsAndQueries-BK-K5RhD.js";import{M as p,C as s}from"./blocks-BhviKO8q.js";import"./Tag-Bc-yWu1Y.js";import"./index-BfSNMryQ.js";import"./copy-B4o5kCyp.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D3bL7dyl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4W78R8l.js";import"./index-DCrnunZ9.js";import"./index-Dt7xhFDV.js";import"./Link-o-RCe_HP.js";import"./index-CCxjFqbl.js";import"./index-CFjv4LxR.js";import"./index-DNulmfCG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-d02CNbEj.js";import"./addCustomCSSWithScoping-BavaT7N2.js";import"./index-BKv2oNTW.js";import"./information-E0dtjqMz.js";import"./sys-enter-2-CWAnp9j1.js";import"./alert-krPLRZgR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-XNM9FnGm.js";import"./delete-JR2MZRfb.js";import"./settings-DxBIqKBm.js";import"./NoData-3ZcUB5Ct.js";import"./IllustratedMessage-BEdS4qmU.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C91Oik-m.js";import"./index-LeKCpS7q.js";import"./index-sAVTaYY-.js";import"./slim-arrow-down-DMCTeiC5.js";import"./Input-B_a4lk-J.js";import"./ResponsivePopoverCommon.css-DR2BAcH9.js";import"./ValueStateMessage.css-BbD6Vd04.js";import"./Suggestions.css-DgOg4FzN.js";import"./ListBoxItemGroupTemplate-QimfEu9Q.js";import"./ComboBoxItemGroup-D4VMzcBc.js";import"./ListItemBaseTemplate-CAeeqms4.js";import"./Token-sTVAKlsR.js";import"./ScrollEnablement-D6SL2uwM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-G_TCf98J.js";import"./ToggleButton-5xA1-SjB.js";import"./SuggestionItem-66Xrv75f.js";import"./index-DGOHxSTi.js";import"./Option-B5eqm6lt.js";import"./index-DD-YT-Yv.js";import"./SegmentedButton-C06xcamZ.js";import"./index-BSqaxHhQ.js";import"./Select-Bf3hq0iL.js";import"./InvisibleMessage-BFzkQW2o.js";import"./slim-arrow-down-CVQcjJXq.js";import"./index-BR-9eyJZ.js";import"./index-BNu0C3GX.js";import"./index-BHRZrxSX.js";import"./index-DFno4m6x.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DZHCNsIg.js";import"./group-2-BksPNJTz.js";import"./sort-descending-vwUdYYI9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B1B6dX5C.js";import"./utils--MAnWLXj.js";import"./index-DNleTpkO.js";import"./index-DiSDR8FZ.js";import"./index-8UpyXoAN.js";import"./navigation-down-arrow-DejdbZn2.js";import"./navigation-right-arrow-D8pf5Giz.js";import"./navigation-right-arrow-Dr_s8HRL.js";import"./useCurrentTheme-zSdIFJxn.js";import"./index-CjDsuZ3a.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZKijWM3.js";import"./paper-plane-BmU2Eq9f.js";import"./index-OapWeUnp.js";import"./less-Coam-0fQ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
