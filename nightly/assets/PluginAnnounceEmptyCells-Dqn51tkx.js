import{j as t}from"./iframe-CaWUkniD.js";import{useMDXComponents as n}from"./index-DfLMUe36.js";import{I as i,F as m}from"./CommandsAndQueries-Bkeh__iN.js";import{M as p,C as s}from"./blocks-BMfWNTmT.js";import"./Tag-CqIFc9Gy.js";import"./index-B-q2cOJd.js";import"./copy-CqMAivUp.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-GUBWaz4r.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tK2knsWN.js";import"./index-WiTork8k.js";import"./index-dFuotq6J.js";import"./Link-D_-jRuCf.js";import"./index-ChWdN6oy.js";import"./index-Bw4kzKrM.js";import"./index-C4konRse.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2YWTQyV.js";import"./addCustomCSSWithScoping-DbaRAaG9.js";import"./index-DN8rN30Z.js";import"./information-D2K3Dl_P.js";import"./sys-enter-2-CcH0mjP8.js";import"./alert-CyfuNqtR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BNLMWyGP.js";import"./delete-DJycwJF9.js";import"./settings-D0DUxEmW.js";import"./NoData-BQxtA4T5.js";import"./IllustratedMessage-9XpGkzs2.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-V9izGDFT.js";import"./index-z-EgR5pV.js";import"./index-BPujMNjp.js";import"./slim-arrow-down-CB7ij7Kf.js";import"./Input-BN2yOYjz.js";import"./ResponsivePopoverCommon.css-4Xg56gf5.js";import"./ValueStateMessage.css-BIWamRUp.js";import"./Suggestions.css-DWWZcteF.js";import"./ListBoxItemGroupTemplate-BVaZKClQ.js";import"./ComboBoxItemGroup-Bqkr7cfP.js";import"./ListItemBaseTemplate-B3Kokzka.js";import"./Token-BnxjjGQW.js";import"./ScrollEnablement-C2wBh3eU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKc5fhLO.js";import"./ToggleButton-TkWtjD4U.js";import"./SuggestionItem-CptvwYkF.js";import"./index-MXkAGYYf.js";import"./Option-BNo4kTf7.js";import"./index-C9vxlEk3.js";import"./SegmentedButton-BEWmD6r8.js";import"./index-BgPgtd7C.js";import"./Select-BMQA0u2O.js";import"./InvisibleMessage-DosCuqjU.js";import"./slim-arrow-down-vFoZRNj4.js";import"./index-C_KCvI3u.js";import"./index-l4j-qO6K.js";import"./index-DVZys7-W.js";import"./index-NObIppjX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-qhMCcofp.js";import"./group-2-CIA_20_o.js";import"./sort-descending-Cis9FyCm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlLi_Ygh.js";import"./utils--eOsPXAp.js";import"./index-B4567yCp.js";import"./index-h4R6a7CP.js";import"./index-D5Irx0vg.js";import"./navigation-down-arrow-C-jc4BDF.js";import"./navigation-right-arrow-BUkZPDn1.js";import"./navigation-right-arrow-C4gLCsO1.js";import"./useCurrentTheme-D0Vszlbo.js";import"./index-9DL7nPRF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-dBQdTW19.js";import"./paper-plane-DIR6AIqV.js";import"./index-D0Vb1Rdi.js";import"./less-CmPnBj1b.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
