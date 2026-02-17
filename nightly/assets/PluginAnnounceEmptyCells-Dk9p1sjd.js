import{j as t}from"./iframe-Cs-5LFqP.js";import{useMDXComponents as n}from"./index-4_wYEVSM.js";import{I as i,F as m}from"./CommandsAndQueries-pWQonQL4.js";import{M as p,C as s}from"./blocks-Ml05RtQw.js";import"./Tag-ChHbpWGO.js";import"./index-Bj7p5WqA.js";import"./copy-DN4ABQ_i.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DLd06CvB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tt3zNDS3.js";import"./index-DkXjtxgK.js";import"./index-B7_af3sB.js";import"./Link-DZfJcWGy.js";import"./index-k6loN7up.js";import"./index-CHkORph3.js";import"./index-CmIMKxCO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Oma2N1kf.js";import"./addCustomCSSWithScoping-BCQiyr6x.js";import"./index-BUJAXr9p.js";import"./information-CG8AIpkm.js";import"./sys-enter-2-DunLLOB1.js";import"./alert-IqDG9ylo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CS-8nJYw.js";import"./delete-CLlnG484.js";import"./settings-envYxgNe.js";import"./NoData-MpM1Hboz.js";import"./IllustratedMessage-XiOi_O98.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CjSiJYQm.js";import"./index-Dkiu8AdL.js";import"./index-C0ZKe89Q.js";import"./slim-arrow-down-BP1y9etM.js";import"./Input-1lNxvEmx.js";import"./ResponsivePopoverCommon.css-Dby6EGP2.js";import"./ValueStateMessage.css-CRvqrXXK.js";import"./Suggestions.css-BOY3IfAD.js";import"./ListBoxItemGroupTemplate-r8OAnwHN.js";import"./ComboBoxItemGroup-B3ytlzdg.js";import"./ListItemBaseTemplate-D4Nb1LoU.js";import"./Token-DcgVtbgs.js";import"./ScrollEnablement-GTlRH6tE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DxclopY-.js";import"./ToggleButton-QtBZvedq.js";import"./SuggestionItem-D5nxLtbB.js";import"./index-Tx9ELn6M.js";import"./Option-CoAxKOIy.js";import"./index-y6qVrFsN.js";import"./SegmentedButton-xuXIvZlA.js";import"./index-BIsBvoOA.js";import"./Select-BEsYKhUS.js";import"./InvisibleMessage-CFCay4kG.js";import"./slim-arrow-down-Bbv1i9W9.js";import"./index-T4Qk8jiD.js";import"./index-plyixF0d.js";import"./index-DsJZZm7i.js";import"./index-h8anB-3B.js";import"./IconDesign-DXd8PPVF.js";import"./filter-TDf9rbaD.js";import"./group-2-BvoDnCtF.js";import"./sort-descending-FS751uDv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D06_Ki1H.js";import"./utils-C4L1GQet.js";import"./index-DuIEmgl0.js";import"./index-DD9TQMUS.js";import"./index-D8PWKVzq.js";import"./navigation-down-arrow-BLqwS3WT.js";import"./navigation-right-arrow-MiZu20cu.js";import"./navigation-right-arrow-mkQxvhCZ.js";import"./useCurrentTheme-Db8jJ0JU.js";import"./index-DPB7aPUP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzZietn_.js";import"./paper-plane-CXGOFY1-.js";import"./index-C53XJ8_2.js";import"./less-bilrATQD.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
