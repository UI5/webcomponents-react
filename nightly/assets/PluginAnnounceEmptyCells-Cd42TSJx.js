import{j as t}from"./iframe-pfqRYewB.js";import{useMDXComponents as n}from"./index-DxYcUkXM.js";import{I as i,F as m}from"./CommandsAndQueries-CBK4GytM.js";import{M as p,C as s}from"./blocks-CN6sML6r.js";import"./Tag-DOr7yVDv.js";import"./index-TMKVCirT.js";import"./copy-0Cu3Y4If.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DVQ3i1IE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOCv1nQg.js";import"./index-C87hBs3b.js";import"./index-DQ0pLIsd.js";import"./Link-C4McI5Wx.js";import"./index-D05B83RK.js";import"./index-5KySo-3G.js";import"./index-BkIEU9nM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJxPXkiU.js";import"./addCustomCSSWithScoping-D2yzvGyj.js";import"./index-DQUabOTm.js";import"./information-BrehxxGu.js";import"./sys-enter-2-CTsRx7VM.js";import"./alert-qaqpTU-O.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCldNniw.js";import"./delete-HmTQ_vFj.js";import"./settings-mukY2-9u.js";import"./NoData-DDeHK4Wf.js";import"./IllustratedMessage-KYMTpTyO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-ChEYzt-h.js";import"./index-CqmZ5mGT.js";import"./index-pwjz_r8O.js";import"./slim-arrow-down-C7FQVzqZ.js";import"./Input-DFBmllhy.js";import"./ResponsivePopoverCommon.css-DZHwRQHx.js";import"./ValueStateMessage.css-CidmTEJw.js";import"./Suggestions.css-DAu3JF_J.js";import"./ListBoxItemGroupTemplate-6BxZnxDU.js";import"./ComboBoxItemGroup-BsUPI3Ww.js";import"./ListItemBaseTemplate-HUrGMPNt.js";import"./Token-B8pfMnds.js";import"./ScrollEnablement-D1lbDyHD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cohus5KX.js";import"./ToggleButton-ZQLSnveS.js";import"./SuggestionItem-Dmy_a1VU.js";import"./index-CwRuKaLk.js";import"./Option-CFDOWY6L.js";import"./index-DCK0KPlT.js";import"./SegmentedButton-B6i3WymD.js";import"./index-DevUfoIh.js";import"./Select-m-b0pWIF.js";import"./InvisibleMessage-DwveyP79.js";import"./slim-arrow-down-bCF3a_Rt.js";import"./index-Dgi4QmO9.js";import"./index-BQzry0n4.js";import"./index-DPBow1JV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-15Rm-0v2.js";import"./group-2-B1-jLB8-.js";import"./sort-descending-uWzFdjhI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWkHdUbT.js";import"./utils-DDcIz5H6.js";import"./index-D2MBzVUF.js";import"./index-8gw3xkKH.js";import"./index-DwWEOzU8.js";import"./navigation-down-arrow-C-s-4mEI.js";import"./navigation-right-arrow-C-NoESB4.js";import"./navigation-right-arrow-B9Xr6jRR.js";import"./useCurrentTheme-VDt91aLT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cp87tOSX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DTunfDpQ.js";import"./paper-plane-s_bnmj1H.js";import"./index-BUgZbWmJ.js";import"./less-Db2oPJEr.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
