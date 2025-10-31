import{j as t}from"./iframe-Do6vb0_F.js";import{useMDXComponents as n}from"./index-CjAG28Zi.js";import{I as i,F as m}from"./CommandsAndQueries-DNVLBibD.js";import{M as p,C as s}from"./blocks-BSmhBV8W.js";import"./Tag-Bm_1Oa-G.js";import"./index-DFaXcVzr.js";import"./copy-CtSFAv-a.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-9e-ZuUVx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn7jdYPg.js";import"./index-CjAZJ6mP.js";import"./index-CRpB2mc_.js";import"./Link-DfSClIn0.js";import"./index-B7DmSRaZ.js";import"./index-euaiQ6-T.js";import"./index-BKzdQw4A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-x3ovOdYp.js";import"./addCustomCSSWithScoping-DMyk9VX6.js";import"./index-CziNROS9.js";import"./information-kf1Y_V0y.js";import"./sys-enter-2-Dgg9scSJ.js";import"./alert-eluNIvxZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5e1o-EBG.js";import"./delete-EOOd17FY.js";import"./settings-ChvCVI1H.js";import"./NoData-x4jRmZPJ.js";import"./IllustratedMessage-BpFZWdgz.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BSP9fDKJ.js";import"./index-TJOhQ-wF.js";import"./index-D-PQMfR1.js";import"./slim-arrow-down-BFUSO5fa.js";import"./Input-CV4am0mg.js";import"./ResponsivePopoverCommon.css-DZxesZgF.js";import"./ValueStateMessage.css-CBDkTR1J.js";import"./Suggestions.css-C6WB3Qk2.js";import"./ListBoxItemGroupTemplate-lrzGyG5S.js";import"./ComboBoxItemGroup-13V5PpfS.js";import"./ListItemBaseTemplate-9NOhdDod.js";import"./Token-DU3vF1l0.js";import"./ScrollEnablement-Bcn9GtV2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dz67dIqH.js";import"./ToggleButton-BRQRWz_K.js";import"./SuggestionItem-VOxlPlC0.js";import"./index-CRXuNHmI.js";import"./Option-CnEC2BV1.js";import"./index-DVIhR92p.js";import"./SegmentedButton-BQrBf1Xa.js";import"./index-U1Yn6qoO.js";import"./Select-CSgqeQI7.js";import"./InvisibleMessage-BMJss_kZ.js";import"./slim-arrow-down-DdXU4zZn.js";import"./index-ChvQYVHX.js";import"./index-D9aj3XtS.js";import"./index-0fgUCGZZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DAByxNhp.js";import"./group-2-V4ylj1S-.js";import"./sort-descending-CJeT2CSo.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bgdpa9Y6.js";import"./utils-CurRq_4A.js";import"./index-iowTYD53.js";import"./index-D7kd4dZQ.js";import"./index-DvB6BGuZ.js";import"./navigation-down-arrow-DUd4G2g_.js";import"./navigation-right-arrow-DMiO4jal.js";import"./navigation-right-arrow-B2BIXtfp.js";import"./useCurrentTheme-BKmE0cN8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-QvDENoWT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQccTeWy.js";import"./paper-plane-BnCgZ8Rr.js";import"./index-DmyLDLIV.js";import"./less-DarnrJ7s.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
