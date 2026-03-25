import{j as t}from"./iframe-DDwr9UO6.js";import{useMDXComponents as i}from"./index-CQ-nOjPT.js";import{I as n}from"./CommandsAndQueries-CW-He0gJ.js";import{M as m,C as p}from"./blocks-4n5he8k4.js";import"./Tag-85Xc8Sa5.js";import"./index-Vbr96S-1.js";import"./copy-DiJyffUH.js";import{F as s}from"./Footer-DJ4mPzj6.js";import"./PageNotFound-4kcWV7p6.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D-XOdvyW.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-ioSKjh9y.js";import"./index-BlO2ebQP.js";import"./index-DBFNlRvR.js";import"./index-DlsPhuqx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B4AOINVU.js";import"./addCustomCSSWithScoping-BY1iD3uW.js";import"./index-BmgPGln0.js";import"./index-BubbpkEs.js";import"./index-CwOzyR0V.js";import"./information-B0DjFwsh.js";import"./sys-enter-2-CHn1eYD9.js";import"./alert-t6gJkZ57.js";import"./index-DJm0resn.js";import"./Illustrations-CKFjYZ6M.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DvrM5NOP.js";import"./delete-CnbCzWbj.js";import"./settings-Ch08yiWE.js";import"./NoData-4GIocKhd.js";import"./NoFilterResults-B4DPdeet.js";import"./index-D5xRes8S.js";import"./IllustratedMessage-DtlzznLL.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BXJwcQQG.js";import"./Input-DInMIBTe.js";import"./ResponsivePopoverCommon.css-DVrY-Ohc.js";import"./ValueStateMessage.css-CQmBeT7b.js";import"./Suggestions.css-BmvaYmek.js";import"./ListBoxItemGroupTemplate-B-K43gLI.js";import"./ComboBoxItemGroup-BqI4sbwM.js";import"./ListItemBaseTemplate-DYSR2mJj.js";import"./Token-DCciEgLN.js";import"./ScrollEnablement-BO8X0bLa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BWTSAHcw.js";import"./ToggleButton-BHUbnu3Z.js";import"./multiselect-all-CImnb8qK.js";import"./SuggestionItem-D3aPEE1q.js";import"./index-DeIhhhj4.js";import"./Option-jQcbOOHD.js";import"./index-BVaMi0i5.js";import"./SegmentedButton-C5-qziHY.js";import"./index-BzOkRawL.js";import"./Select--m8ZPefa.js";import"./InvisibleMessage-DCXJk4rP.js";import"./index-BN3GamvY.js";import"./index-DcZRAYxL.js";import"./index-XVwKOOTJ.js";import"./index-CgeWzUMI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-lC1PAHmf.js";import"./group-2-Bthb7zJo.js";import"./sort-descending-C-K6Ysjt.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CnRGw2Cu.js";import"./utils-DxckeIWg.js";import"./index-BD_Jst0w.js";import"./index-JNC6BieY.js";import"./index-Cx1xQlOJ.js";import"./navigation-down-arrow-CJcOr1ZL.js";import"./navigation-right-arrow-CQs_7-hB.js";import"./navigation-right-arrow-DzRJQC_-.js";import"./useCurrentTheme-6r6M5Xd5.js";import"./index-CJWNtEi-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CL5Aty9r.js";import"./paper-plane-CQwjrpMY.js";import"./index-BO23DQR-.js";import"./less-DL-_Ursx.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
