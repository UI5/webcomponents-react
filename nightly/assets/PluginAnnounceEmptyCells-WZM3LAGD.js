import{j as t}from"./iframe-cRRiQYmf.js";import{useMDXComponents as n}from"./index-Bs0WiH3G.js";import{I as i,F as m}from"./CommandsAndQueries-6fQDSTza.js";import{M as p,C as s}from"./blocks-BE5V3uJk.js";import"./Tag-CfbQk3KA.js";import"./index-ByOWo14Z.js";import"./copy-B18ZHZAg.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-SnDQDGkq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DBZCyEHT.js";import"./index-DUKoRTQU.js";import"./index-BO1H95-d.js";import"./Link-CLMkrIwX.js";import"./index-BFR5idok.js";import"./index-DtECOzdu.js";import"./index-CIJf_Fw_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AOA_k-Lh.js";import"./addCustomCSSWithScoping-OHQyl5Vz.js";import"./index-CSUcx8X8.js";import"./information-De5Q3Snv.js";import"./sys-enter-2-D3hJu-L0.js";import"./alert-B4Rl3843.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BK8mUCRL.js";import"./delete-Bd7yIIZR.js";import"./settings-CkxhKC3j.js";import"./NoData-BehLBpti.js";import"./IllustratedMessage-DqABzVpa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-VL3fZtOd.js";import"./index-Bx4iySkn.js";import"./index-CY4bohbd.js";import"./slim-arrow-down-DZLbO_TY.js";import"./Input-O88X3mcn.js";import"./ResponsivePopoverCommon.css-BT4UA6Ai.js";import"./ValueStateMessage.css-C-lEZ5fy.js";import"./Suggestions.css-BtMgvrZ_.js";import"./ListBoxItemGroupTemplate-BLsE5HOe.js";import"./ComboBoxItemGroup-BaeQpQAH.js";import"./ListItemBaseTemplate-DdTsTPm6.js";import"./Token-DF7-FLbj.js";import"./ScrollEnablement-C_xMDTEO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-S4OY1eRO.js";import"./ToggleButton-CviqyRwB.js";import"./SuggestionItem-CjLVovyh.js";import"./index-CoDhBCO9.js";import"./Option-GMye3bh3.js";import"./index-D4jzIrzX.js";import"./SegmentedButton-uhejKh0q.js";import"./index-DeMEMDE-.js";import"./Select-CkiWgRnV.js";import"./InvisibleMessage-BlcyWLwi.js";import"./slim-arrow-down-C0fV2X2u.js";import"./index-Ks8eZ4TE.js";import"./index-Bo-pJJ92.js";import"./index-BoMEYoEg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcVMbh74.js";import"./group-2-BGmIa860.js";import"./sort-descending-Ce8AiZNs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWIjNCzP.js";import"./utils-CZLAE_2R.js";import"./index-DrKrZdYX.js";import"./index-BVEPWHWu.js";import"./index-CXNthmCr.js";import"./navigation-down-arrow-BxseiaEF.js";import"./navigation-right-arrow-DQ_EAbwb.js";import"./navigation-right-arrow-CpRhiy_v.js";import"./useCurrentTheme-Dho7lVR9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-GZDFVWPb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CENrkM0D.js";import"./paper-plane-BQ0EpgoV.js";import"./index-wG1F1-kD.js";import"./less-DiFkS5DT.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
