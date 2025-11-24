import{j as t}from"./iframe-OLMvr6Lt.js";import{useMDXComponents as n}from"./index-CdriUjbp.js";import{I as i,F as m}from"./CommandsAndQueries-CxvYWHkR.js";import{M as p,C as s}from"./blocks-CZhft-YU.js";import"./Tag-isczvwSi.js";import"./index-DNJgsZvx.js";import"./copy-CFwp5FgG.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Cy3cyHhy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbPvBsUu.js";import"./index-D6OGtnN7.js";import"./index-3TabIQwt.js";import"./Link-B3ocEkmU.js";import"./index-D7Vb79r0.js";import"./index-C0KzuGfV.js";import"./index-DP7V--vt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-8TAtZbXi.js";import"./addCustomCSSWithScoping-D8XhS4Ox.js";import"./index-DCyx6v--.js";import"./information-CW-9LDCP.js";import"./sys-enter-2-8-HPbBwq.js";import"./alert-Bd52_kq-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWywr3TW.js";import"./delete-CCzy9s8b.js";import"./settings-D42fuJuX.js";import"./NoData-Bup5hrqa.js";import"./IllustratedMessage-CHTeCatA.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-ZuFlFv1T.js";import"./index-Dc9B5nZG.js";import"./index-JF5_76ci.js";import"./slim-arrow-down-ySZlwq-q.js";import"./Input-D4ca9rAR.js";import"./ResponsivePopoverCommon.css-BRrcd20a.js";import"./ValueStateMessage.css-Bk812_Kf.js";import"./Suggestions.css-BjM9wydn.js";import"./ListBoxItemGroupTemplate-AWhndfnj.js";import"./ComboBoxItemGroup-DoFoxDi9.js";import"./ListItemBaseTemplate-CpLLHa4Z.js";import"./Token-MTCn4enU.js";import"./ScrollEnablement-94tHLG88.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-vQZi_1g2.js";import"./ToggleButton-DDwhnOd_.js";import"./SuggestionItem-DsV9yF55.js";import"./index-sE10V8UB.js";import"./Option-B-1m3Lan.js";import"./index-Cb21HCJZ.js";import"./SegmentedButton-DsUwene6.js";import"./index-CL538puJ.js";import"./Select-eKqLtCSY.js";import"./InvisibleMessage-B_prVgph.js";import"./slim-arrow-down-CMbdHuJl.js";import"./index-xGnKXygx.js";import"./index-CRmylG0z.js";import"./index-u1rNC7Bo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMM6dyNf.js";import"./group-2-B4FdXRJU.js";import"./sort-descending-DvUEcM1R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-jICxCRW9.js";import"./utils-P9HcUQzN.js";import"./index-DDWpxtlc.js";import"./index-Wbk_vv3N.js";import"./index-AlbH3iGp.js";import"./navigation-down-arrow-IShY2WyB.js";import"./navigation-right-arrow-DzbnPaXu.js";import"./navigation-right-arrow-BxL2ijuh.js";import"./useCurrentTheme-DHVnEAWK.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4pyhN2Y.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-PfY8la.js";import"./paper-plane-BZiyZUyR.js";import"./index-CXSg-hiw.js";import"./less-DNufAwmk.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
