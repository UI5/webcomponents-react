import{j as t}from"./iframe-DEgT_E8s.js";import{useMDXComponents as n}from"./index-BZRAiVGZ.js";import{I as i,F as m}from"./CommandsAndQueries-BnsxTdlD.js";import{M as p,C as s}from"./blocks-B_KstB4C.js";import"./Tag-DE605aSS.js";import"./index-YPzE27b5.js";import"./copy-CnDYhLIP.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Bb_fYyk9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-q4TahdKC.js";import"./index-DdLyBjYX.js";import"./index-Dzkg0-9t.js";import"./Link-z1epMX3F.js";import"./index-DuT1R6mu.js";import"./index-5Z9enrbF.js";import"./index-C1jXIPsp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1yrXOFa.js";import"./addCustomCSSWithScoping-CGm4Cfs5.js";import"./index-BBLpbuxz.js";import"./information-r8cEHEup.js";import"./sys-enter-2-ChDTDdJ5.js";import"./alert-Dx6xYju9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CQIZa4KW.js";import"./delete-CqK8g_HQ.js";import"./settings-jSVHcypQ.js";import"./NoData-Dgjgajwh.js";import"./IllustratedMessage-WFxvN6sI.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-j_yzxESa.js";import"./index-C4ZbRrOu.js";import"./index-EzHa5_P2.js";import"./slim-arrow-down-B0naEDbF.js";import"./Input-CGH6t_eq.js";import"./ResponsivePopoverCommon.css-Dv84NKMT.js";import"./ValueStateMessage.css-CUqUPYSj.js";import"./Suggestions.css-KnKAVWRs.js";import"./ListBoxItemGroupTemplate-BmVR1VlV.js";import"./ComboBoxItemGroup-Eimfv27_.js";import"./ListItemBaseTemplate-HfAqkZ3H.js";import"./Token-C5MRXtTV.js";import"./ScrollEnablement-8BMeJMa0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-FLiQ-oOI.js";import"./ToggleButton-DMd9fH0Q.js";import"./SuggestionItem-DXBRTfNG.js";import"./index-BXlMwFJS.js";import"./Option-r28MJ-v0.js";import"./index-DAh5-UwY.js";import"./SegmentedButton-DuKNalzH.js";import"./index-7n2e9xhl.js";import"./Select-lIlAJjO9.js";import"./InvisibleMessage-DtVtDVKI.js";import"./slim-arrow-down-BCbYdXvq.js";import"./index-BekFaNX1.js";import"./index-C-dEXwCg.js";import"./index-PbfneB6M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DtNLDG1k.js";import"./group-2-TWAMSjz_.js";import"./sort-descending-gRLN52yg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5tA4rVe.js";import"./utils-XKst6eGz.js";import"./index-DEM0qvBE.js";import"./index-BHegFaBf.js";import"./index-D1vU14fq.js";import"./navigation-down-arrow-CH6c6eW9.js";import"./navigation-right-arrow-QbezwENh.js";import"./navigation-right-arrow-fC4XWoU4.js";import"./useCurrentTheme-Z5PW4JFt.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFb2J3Hx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CnhilVJw.js";import"./paper-plane-CwF1OIzX.js";import"./index-w9pnBzXO.js";import"./less-C43TjDId.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
