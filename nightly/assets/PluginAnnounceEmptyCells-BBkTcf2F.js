import{j as t}from"./iframe-DCGZQC_C.js";import{useMDXComponents as n}from"./index-B27pjG1H.js";import{I as i,F as m}from"./CommandsAndQueries-uRcRdUvd.js";import{M as p,C as s}from"./blocks-ByOpH4Vo.js";import"./Tag-DHXPjUHZ.js";import"./index-CslrJvFJ.js";import"./copy-Dgi6mZSs.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-bNwjwoKI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LnQjqAbL.js";import"./index-CRLztu5A.js";import"./index-BSyI90IW.js";import"./Link-C5I3pPvS.js";import"./index-C7wZhEOz.js";import"./index-DsknM379.js";import"./index-BrLag0KZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClYCQmx8.js";import"./addCustomCSSWithScoping-BW6FwlJC.js";import"./index-CEF4Eds-.js";import"./information-C8TQYWMC.js";import"./sys-enter-2-CUVdfxRu.js";import"./alert-Crt2Z2f-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJGP320l.js";import"./delete-D-YXkhYz.js";import"./settings-EzBVvhXz.js";import"./NoData-d8zem7tn.js";import"./IllustratedMessage-CnKX9Tk1.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BW9Ke9jf.js";import"./index-CDOC7J2z.js";import"./index-D9AJchIM.js";import"./slim-arrow-down-_wzxHbkz.js";import"./Input-CapffHTa.js";import"./ResponsivePopoverCommon.css-BzrCML3m.js";import"./ValueStateMessage.css-6-sNBRhm.js";import"./Suggestions.css-D-dnhNOf.js";import"./ListBoxItemGroupTemplate-D5dJg0Md.js";import"./ComboBoxItemGroup-DE6F-qf6.js";import"./ListItemBaseTemplate-YV074207.js";import"./Token-DFZIaINO.js";import"./ScrollEnablement-CyCwp6Jo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C870crTF.js";import"./ToggleButton-KP9Vp9HZ.js";import"./SuggestionItem-Cg4fIDOL.js";import"./index-DGZcKhxL.js";import"./Option-DRy9pd0C.js";import"./index-CZPGpqu0.js";import"./SegmentedButton-C6NTSQG1.js";import"./index-D-t5rWMX.js";import"./Select-CUh8OEwf.js";import"./InvisibleMessage-DhB_OnV_.js";import"./slim-arrow-down-CU9tdlgh.js";import"./index-BF-MYKhN.js";import"./index-BAw1abYZ.js";import"./index-AZB0cmnA.js";import"./index-DxcbSsdx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BhdveqUE.js";import"./group-2-Bp8JlR3f.js";import"./sort-descending-dnuNk35a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DY9Skaqg.js";import"./utils-DSLZDD_H.js";import"./index-oHN5vii2.js";import"./index-BAnN4Y-3.js";import"./index-BIvqPmoD.js";import"./navigation-down-arrow-CV-2l1CK.js";import"./navigation-right-arrow-ZUNaJnHK.js";import"./navigation-right-arrow-CnOc_T30.js";import"./useCurrentTheme-GWaqzv3s.js";import"./index-BVvo881U.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-8FzRNE_C.js";import"./paper-plane-BS26Bbh6.js";import"./index-CIEm01bw.js";import"./less-b5IeAnHp.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
