import{j as t}from"./iframe-D-TNtC6A.js";import{useMDXComponents as i}from"./index-DDfPSZgy.js";import{I as n}from"./CommandsAndQueries-CCy8Y-No.js";import{M as m,C as p}from"./blocks-RldXLLlr.js";import"./Tag-CVmCoWT_.js";import"./index-PDZqoB_N.js";import"./copy-BJeubdCo.js";import{F as s}from"./Footer-DhOHIb5E.js";import"./PageNotFound-CRTwOHot.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C7rivsvq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BGCjF1qN.js";import"./index-C2w-vlt1.js";import"./index-BDllvg-C.js";import"./index-DbrfUFZo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CV5eSmfw.js";import"./addCustomCSSWithScoping-5_2YlXdt.js";import"./index-C4n54s66.js";import"./index-DA9C_9_K.js";import"./index-dgee814-.js";import"./information-DHrVSqd8.js";import"./sys-enter-2-B-IKKoin.js";import"./alert-COQE9Wii.js";import"./index-dI-i4srq.js";import"./Illustrations-MW4Ztj5J.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-MyDeBWpT.js";import"./delete-GPaEZE8g.js";import"./settings-Bb5Mx7xn.js";import"./NoData-B9h6w7Zz.js";import"./NoFilterResults-Bp3EjNTS.js";import"./index-BKgssG5g.js";import"./IllustratedMessage-B2Q7MVnn.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-e_Mdpfp_.js";import"./Input-BXBWRRsA.js";import"./ResponsivePopoverCommon.css-BXn4_Wc7.js";import"./ValueStateMessage.css-B4_y8RjA.js";import"./Suggestions.css-hnx4n1TH.js";import"./ListBoxItemGroupTemplate-BIw1VxCq.js";import"./ComboBoxItemGroup-aVMq34XM.js";import"./ListItemBaseTemplate-B0alOYy7.js";import"./Token-4VyHLU6r.js";import"./ScrollEnablement-D_mv-5V2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DuzTgsRf.js";import"./ToggleButton-CkF3MXn8.js";import"./multiselect-all-B9XzavJM.js";import"./SuggestionItem-COYhuiQ9.js";import"./index-BKVW7RHH.js";import"./Option-CbSicczt.js";import"./index-uAzDHEjW.js";import"./SegmentedButton-f-Cay0kn.js";import"./index-DNu777W2.js";import"./Select-DVELUtat.js";import"./InvisibleMessage-BWPPhSeN.js";import"./index-D5UP9jEd.js";import"./index-Ct1p6vuk.js";import"./index-Bb90VLCU.js";import"./index-ptWDqsta.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cfh1ZJNO.js";import"./group-2-y-iu2VRM.js";import"./sort-descending-BM0MkbBg.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BLX5GUEm.js";import"./utils-DVfFMzf7.js";import"./index-DnoKZWri.js";import"./index-pc0DCYF4.js";import"./index-BZfHb_PP.js";import"./navigation-down-arrow-B34ZUBu8.js";import"./navigation-right-arrow-BqgU6zlC.js";import"./navigation-right-arrow-CHS2kQ0a.js";import"./useCurrentTheme-BMG4HH6K.js";import"./index-BFc7Am7o.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-2x73p0EG.js";import"./paper-plane-BOmm5Qav.js";import"./index-BebXPfBu.js";import"./less-BWi_dI9N.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
