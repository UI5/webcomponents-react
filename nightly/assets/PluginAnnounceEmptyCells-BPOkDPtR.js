import{j as t}from"./iframe-BsBPxA6U.js";import{useMDXComponents as n}from"./index-C_R4y4V0.js";import{I as i,F as m}from"./CommandsAndQueries-DGdgKo6k.js";import{M as p,C as s}from"./blocks-CEOEebKO.js";import"./Tag-DSoKri1G.js";import"./index-Doky9Mkb.js";import"./copy-CRGjVpRv.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dz_KgCtN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAH0250y.js";import"./index-Dmhochbe.js";import"./index-gPsABUAK.js";import"./Link-BHFGfTB0.js";import"./index-Cihbk1NA.js";import"./index-BLjU5XqX.js";import"./index-DNCqkTDx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmx-BJlM.js";import"./addCustomCSSWithScoping-DbsNQuuI.js";import"./index-CNyanKq8.js";import"./information-Bj9U_7MQ.js";import"./sys-enter-2-C6mBZBNJ.js";import"./alert-Y2sfMbhe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C4DK1I8l.js";import"./delete-C6tWuqNf.js";import"./settings-BUVkF3or.js";import"./NoData-DPwuC6Ww.js";import"./IllustratedMessage-It4mX3AQ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DhRkh9dN.js";import"./index-BtadPSsW.js";import"./index-BfYOfOm3.js";import"./slim-arrow-down-BaJTeNEG.js";import"./Input-CZwakjm4.js";import"./ResponsivePopoverCommon.css-hQ9zDC9y.js";import"./ValueStateMessage.css-BaLdzHVw.js";import"./Suggestions.css-BqCzwqUI.js";import"./ListBoxItemGroupTemplate-IGzCyZVh.js";import"./ComboBoxItemGroup-SG-_g7dw.js";import"./ListItemBaseTemplate-k46UOCLs.js";import"./Token-4ELyI29f.js";import"./ScrollEnablement-B0j5N4_F.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-kYAT9Ja4.js";import"./ToggleButton-KhlEWnLT.js";import"./SuggestionItem-DsimlpEO.js";import"./index-B7yLONbc.js";import"./Option-MDNU8gos.js";import"./index-BkljQy5l.js";import"./SegmentedButton-Khrwb6vJ.js";import"./index-ClW9_Eny.js";import"./Select-C61ga_69.js";import"./InvisibleMessage-BwHxjeMJ.js";import"./slim-arrow-down-DFzi0AoL.js";import"./index-VtRttBiA.js";import"./index-DXUdswCl.js";import"./index-CW8aTQPD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D_shFmJq.js";import"./group-2-Da-lZ-6m.js";import"./sort-descending-CyfD2MR5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CrbezpGL.js";import"./utils-D0C3Iy2F.js";import"./index-BRI8OzSg.js";import"./index-IBVyyHs_.js";import"./index-CNoWV0dk.js";import"./navigation-down-arrow-BpmVanxM.js";import"./navigation-right-arrow-CWj3M1Tb.js";import"./navigation-right-arrow-BGWB-c0_.js";import"./useCurrentTheme-BPpHV_8o.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CrP7PNSA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C1Y1l0w-.js";import"./paper-plane-cf9bL5y_.js";import"./index-BFI-nP8P.js";import"./less-DicCpNe9.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
