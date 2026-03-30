import{j as t}from"./iframe-C-8CikNF.js";import{useMDXComponents as i}from"./index-Cw4SbHnF.js";import{I as n}from"./CommandsAndQueries-CurTw3Lj.js";import{M as m,C as p}from"./blocks-BmssVOG3.js";import"./Tag-MEJh1Ko9.js";import"./index-hi0bZbmw.js";import"./copy-CzzG0WN_.js";import{F as s}from"./Footer-DRQAPrhO.js";import"./PageNotFound-5CESdk48.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-nZEoohGM.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-xVMMn3oU.js";import"./index-H3f20a9K.js";import"./index-BGM8gXjK.js";import"./index-02sMf1JQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEjyiyGF.js";import"./addCustomCSSWithScoping-iAIUxvTa.js";import"./index-DH3Cr8HB.js";import"./index-C39Oe1_-.js";import"./index-CaBNGx_8.js";import"./information-0aMtiy50.js";import"./sys-enter-2-grGMmfr8.js";import"./alert-sWw94Nn1.js";import"./index-knQkJN_L.js";import"./Illustrations-2Vhs9c3z.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CeZRXVtI.js";import"./delete-B0CQH0j2.js";import"./settings-BNA1mWt_.js";import"./NoData-DMCS5Vz4.js";import"./NoFilterResults-Bt4mVsHw.js";import"./index-DNtZAHXL.js";import"./IllustratedMessage-3NhY3KHW.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BxgPMGl5.js";import"./Input-CjfkHsNs.js";import"./ResponsivePopoverCommon.css-DmWEYKaX.js";import"./ValueStateMessage.css-1Br4XeI3.js";import"./Suggestions.css-C3zAGvC_.js";import"./ListBoxItemGroupTemplate-BTrvVHjp.js";import"./ComboBoxItemGroup-Bpj0Uiax.js";import"./ListItemBaseTemplate-D-6s2YQ8.js";import"./Token-Bhsr7kcp.js";import"./ScrollEnablement-CUpc0mcF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3jDGq2u.js";import"./ToggleButton-D5zExb4V.js";import"./multiselect-all-C59dWexR.js";import"./SuggestionItem-C1Ega4dM.js";import"./index-BTuv7LqQ.js";import"./Option-COlVveIk.js";import"./index-CNSy6tjm.js";import"./SegmentedButton-DGDitfbf.js";import"./index-C4LEWr2J.js";import"./Select-v-QOwdxL.js";import"./InvisibleMessage-B79dV3sk.js";import"./index-CWsH9Itz.js";import"./index-BR9SVpEM.js";import"./index-D5wXhC2X.js";import"./index-DcOtFncG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DYWin5du.js";import"./group-2-CaV5CvR6.js";import"./sort-descending-DGpVCv8O.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGWYkQPr.js";import"./utils-DpuRRaMs.js";import"./index-CCC96T7R.js";import"./index-DB7mThPO.js";import"./index-uevVwIJI.js";import"./navigation-down-arrow-BhJhAQY_.js";import"./navigation-right-arrow-BQ-rP2XP.js";import"./navigation-right-arrow-UOcapVb1.js";import"./useCurrentTheme-DNZb_fAn.js";import"./index-s1hOd9kk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sTzpNQ4b.js";import"./paper-plane-C9ax1T8B.js";import"./index-2SjK2Mh1.js";import"./less-CIKLJJJe.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
