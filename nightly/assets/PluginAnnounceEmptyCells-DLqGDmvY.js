import{j as t}from"./iframe-DjjZnZd-.js";import{useMDXComponents as n}from"./index-CHlimz1C.js";import{I as i,F as m}from"./CommandsAndQueries-WOCJDSHC.js";import{M as p,C as s}from"./blocks-BmkOoUGB.js";import"./Tag-CUGM_Neu.js";import"./index-CA-PQGxD.js";import"./copy-ZK04gjjU.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Bifb3c2A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CT-jhGw4.js";import"./index-BgVmtdEP.js";import"./index-BFZ4A4pM.js";import"./Link-DOn3kiwy.js";import"./index-DmOXd_eL.js";import"./index-nsJY5Xz1.js";import"./index-BB6l50am.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B12gaSwN.js";import"./addCustomCSSWithScoping-vHMhzzpD.js";import"./index-BcQoqGu9.js";import"./information-DMdo7dcL.js";import"./sys-enter-2-CptPzh8p.js";import"./alert-CrXk_arY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vqAtxyOw.js";import"./delete-Bebt7tCf.js";import"./settings-uRQQ-qnc.js";import"./NoData-DF1OdlTc.js";import"./IllustratedMessage-D_G1HSBE.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BmB2bMcc.js";import"./index-CM7JCb8T.js";import"./index-DvsJxwXk.js";import"./slim-arrow-down-CxXp2snF.js";import"./Input-B-umR_e1.js";import"./ResponsivePopoverCommon.css-C4iintSn.js";import"./ValueStateMessage.css-Cunvc68_.js";import"./Suggestions.css-Ci8_31Vi.js";import"./ListBoxItemGroupTemplate-GVKfLp8U.js";import"./ComboBoxItemGroup-CQl8BqG8.js";import"./ListItemBaseTemplate-6SXMeQ_0.js";import"./Token-CKE3PZz5.js";import"./ScrollEnablement-C0m6jxeW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRQF6RVv.js";import"./ToggleButton-B90-JE9y.js";import"./SuggestionItem-DW58jthD.js";import"./index-DmUR5SWR.js";import"./Option-DqRKlcDR.js";import"./index-CH77s4oW.js";import"./SegmentedButton-ChMyKVb2.js";import"./index-BkRDr5FS.js";import"./Select-5vzl-izW.js";import"./InvisibleMessage-8UwgTYD7.js";import"./slim-arrow-down-DPNABw5m.js";import"./index-Cl5F4XUs.js";import"./index-CbGzdtcY.js";import"./index-BRl60Xfr.js";import"./index-Beu0nm3Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMkv1rya.js";import"./group-2-CoGriti5.js";import"./sort-descending-DD-b124P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8m0ILQH8.js";import"./utils-BXT1KgTI.js";import"./index-Dra2atL0.js";import"./index-BZLP_aSQ.js";import"./index-ntFKxsdS.js";import"./navigation-down-arrow-augm2Glo.js";import"./navigation-right-arrow-CJ9-VHOj.js";import"./navigation-right-arrow-CXx-Foq7.js";import"./useCurrentTheme-BtKqULF1.js";import"./index-C9h2pwj1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sDVY4Y6h.js";import"./paper-plane-BKN_YByQ.js";import"./index-B7Qlr8h8.js";import"./less-wFiAvfcX.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
