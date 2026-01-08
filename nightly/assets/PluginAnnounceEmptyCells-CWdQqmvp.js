import{j as t}from"./iframe-DKMkKoYy.js";import{useMDXComponents as n}from"./index-DwgZfgb7.js";import{I as i,F as m}from"./CommandsAndQueries-BeeR2K5X.js";import{M as p,C as s}from"./blocks-Bv7S8SwX.js";import"./Tag-D068unQp.js";import"./index-CzUGd6JN.js";import"./copy-CVTfErei.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DTS4v1Wt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcV3QYUz.js";import"./index-CqkyVNU6.js";import"./index-CRYo79rH.js";import"./Link-CIhe5KM_.js";import"./index-PDOaMfc0.js";import"./index-BPsR0vSK.js";import"./index-L49eAF_T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pWZ_QRmh.js";import"./addCustomCSSWithScoping-C2Y6K5ED.js";import"./index-D_8I6ySQ.js";import"./information-B0KiP948.js";import"./sys-enter-2-CDGYtOhu.js";import"./alert-5Abv9bcB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dhra6kfr.js";import"./delete-DUix6sNt.js";import"./settings-C5OEoL5X.js";import"./NoData-Cri307Dq.js";import"./IllustratedMessage-pa4ChjKu.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BkjD5jXB.js";import"./index-CGWtwsBT.js";import"./index-BHNOKsS3.js";import"./slim-arrow-down-DFO10dQK.js";import"./Input-Bywnd_wZ.js";import"./ResponsivePopoverCommon.css-Zw-71pun.js";import"./ValueStateMessage.css-BFEz-K6y.js";import"./Suggestions.css-BCRtc5sQ.js";import"./ListBoxItemGroupTemplate-ByysvU84.js";import"./ComboBoxItemGroup-rRFO05Df.js";import"./ListItemBaseTemplate-BwdOKIzC.js";import"./Token-DUFe1ufu.js";import"./ScrollEnablement-BA4gKr9W.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CIizhTTb.js";import"./ToggleButton-CpmK1M0o.js";import"./SuggestionItem-Djy8vKSb.js";import"./index-DFZofdAc.js";import"./Option-Dn0hRlAU.js";import"./index-C-serayw.js";import"./SegmentedButton-DcdMXKYR.js";import"./index-CUSU-sZ-.js";import"./Select-DcPG7akN.js";import"./InvisibleMessage-C330TfFr.js";import"./slim-arrow-down-CvM-d2Kg.js";import"./index-CpZAh2cz.js";import"./index-CflFfJ9L.js";import"./index-C4umghHT.js";import"./index-Cuh8Cott.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYz7ywwo.js";import"./group-2-HkaDgQ8q.js";import"./sort-descending-BkrTSQR1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-iPtp8h.js";import"./utils-LZ65B1HV.js";import"./index-arX-DEe4.js";import"./index-BEbANkX4.js";import"./index-J40sace8.js";import"./navigation-down-arrow-Dw2JTRKK.js";import"./navigation-right-arrow-DcK3gcB5.js";import"./navigation-right-arrow-Da_vKVqp.js";import"./useCurrentTheme-BoX5heyU.js";import"./index-BI1bMXh-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CE4g7ZKT.js";import"./paper-plane-DZlRHob0.js";import"./index-ae933fWZ.js";import"./less-DpSPHuZK.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
