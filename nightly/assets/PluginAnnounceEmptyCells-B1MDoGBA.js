import{j as t}from"./iframe-D_U86qCv.js";import{useMDXComponents as n}from"./index-Bg9tEBEE.js";import{I as i,F as m}from"./CommandsAndQueries-TugN8T6l.js";import{M as p,C as s}from"./blocks-D61FyfHK.js";import"./Tag-B3d92F0E.js";import"./index-DY3WUczD.js";import"./copy-Crjp4Ac1.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DRRPD7pH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfxZA3Js.js";import"./index-DQ8_SEuH.js";import"./index-D9Q3nud9.js";import"./Link-Cw10wX3R.js";import"./index-hUHwRYTv.js";import"./index-BgwtpBeW.js";import"./index-DjRObmYp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AccWPG8C.js";import"./addCustomCSSWithScoping-peiruV29.js";import"./index-WEtnzuU5.js";import"./information-DVWvWtO-.js";import"./sys-enter-2-CVo9vLlV.js";import"./alert-Dk_EKidz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXaLMGH1.js";import"./delete-C65oQeOP.js";import"./settings-DvNN523n.js";import"./NoData-Btj1TuE6.js";import"./IllustratedMessage-C4Y-hPy7.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BCXv8K85.js";import"./index-BUDr-hLX.js";import"./index-Bf2DNKb6.js";import"./slim-arrow-down-B1jwB_te.js";import"./Input-CTjAUWZQ.js";import"./ResponsivePopoverCommon.css-C8oO5Lyh.js";import"./ValueStateMessage.css-D9qc5lXt.js";import"./Suggestions.css-DEpz1xYL.js";import"./ListBoxItemGroupTemplate-5NLZSPWt.js";import"./ComboBoxItemGroup--dcncB9c.js";import"./ListItemBaseTemplate-mePDBDU1.js";import"./Token-dW6lMRFw.js";import"./ScrollEnablement-Bn4R2vMs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BF_-X6-h.js";import"./ToggleButton-C4w5EmKQ.js";import"./SuggestionItem-BOJBp7v0.js";import"./index-CCRGNalr.js";import"./Option-CpNbPgV2.js";import"./index-C1qDCxNA.js";import"./SegmentedButton-Bsj8EgI0.js";import"./index-B88wz0zx.js";import"./Select-akqe93gn.js";import"./InvisibleMessage-9g7oEz5f.js";import"./slim-arrow-down-DuNkCtSe.js";import"./index-T9m1HJoc.js";import"./index-Bm-mIndo.js";import"./index-DR6xeV5u.js";import"./index-D3NSTpXZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dl4bKezQ.js";import"./group-2-CRRiEe8O.js";import"./sort-descending-BsGiYaME.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYjXc6T7.js";import"./utils-PdXjpojR.js";import"./index-D2qUqIHh.js";import"./index-MdW3w5l9.js";import"./index-BsoVNeMU.js";import"./navigation-down-arrow-044as9EH.js";import"./navigation-right-arrow-5uKL9NHQ.js";import"./navigation-right-arrow-yNY1bh5s.js";import"./useCurrentTheme-Bhf-1e6-.js";import"./index-DUww4q61.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sMcBz9Ie.js";import"./paper-plane-DE2vkKLc.js";import"./index-D-Hqwhy7.js";import"./less-CRStbIYd.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
