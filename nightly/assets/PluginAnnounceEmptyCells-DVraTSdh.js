import{j as t}from"./iframe-DJaejRN_.js";import{useMDXComponents as i}from"./index-BkjBMRMv.js";import{I as n}from"./CommandsAndQueries-83bvSdoV.js";import{M as m,C as p}from"./blocks-B8-Y-Ni6.js";import"./Tag-zqqHRvHY.js";import"./index-CK92YQRu.js";import"./copy-tix8vrrW.js";import{F as s}from"./Footer-XAiTUg9G.js";import"./PageNotFound-DWPqXbgo.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-S3OMrBy1.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DT5pBXPw.js";import"./index-I-NngIql.js";import"./index-Bal_B_tE.js";import"./index-BVWvlifs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HTE3RcD3.js";import"./addCustomCSSWithScoping-BTx9ebqV.js";import"./index-MWuEJcIb.js";import"./index-D5l-jmF5.js";import"./index-B75X8BI3.js";import"./information-BX0fOOvt.js";import"./sys-enter-2-1CYV1NDA.js";import"./alert-BrdS4drn.js";import"./index-DyG0juUn.js";import"./Illustrations-Ba3wQCeI.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ic1RC2lh.js";import"./delete-B2TUGyO-.js";import"./settings-oIbW7Kic.js";import"./NoData-Byp02WJx.js";import"./NoFilterResults-DWMM6VEP.js";import"./index-bCAzbOQs.js";import"./IllustratedMessage-s2lr1q6e.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BMQ89NOj.js";import"./Input-CQcb9um5.js";import"./ResponsivePopoverCommon.css-DP4stE3l.js";import"./ValueStateMessage.css--EiJ9K55.js";import"./Suggestions.css-x42H9hm7.js";import"./ListBoxItemGroupTemplate-CI1P5CVP.js";import"./ComboBoxItemGroup-vt_nZJ4z.js";import"./ListItemBaseTemplate-tq4M4CSx.js";import"./Token-CcP7J3UG.js";import"./ScrollEnablement-BJkBQfQ1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-wGcDRCSr.js";import"./ToggleButton-Bg6zoSMg.js";import"./multiselect-all-Cfr97RyP.js";import"./SuggestionItem-CJn-zf9Z.js";import"./index-dGJDzqrP.js";import"./Option-BqthOmxs.js";import"./index-C6g94agN.js";import"./SegmentedButton-PDpQSPVH.js";import"./index-BgCVM7Zt.js";import"./Select-dEPIbNJV.js";import"./InvisibleMessage-Dz7aUwZ8.js";import"./index-DFKZ6jPd.js";import"./index-BPdG_RYR.js";import"./index-DjtZBg8h.js";import"./index-BNdX0xO5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDPJ_dAS.js";import"./group-2-CVKMzmVq.js";import"./sort-descending-Cu3NsCcr.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BmtLvC-2.js";import"./utils-TCEZc21J.js";import"./index-DhUMRh-k.js";import"./index-ClucFX_O.js";import"./index-Bfqqdgj5.js";import"./navigation-down-arrow-Bci2V2X1.js";import"./navigation-right-arrow-iEyeUQmo.js";import"./navigation-right-arrow-BSQqx-Ox.js";import"./useCurrentTheme-ywdbp9Ht.js";import"./index-_GCZfNpS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CiD1d4mj.js";import"./paper-plane-3RukpGeM.js";import"./index-BC2sgrml.js";import"./less-5TCBAmqB.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
