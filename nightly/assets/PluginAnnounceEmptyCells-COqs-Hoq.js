import{j as t}from"./iframe-BbmPNBZw.js";import{useMDXComponents as n}from"./index-D87-8-cY.js";import{I as i,F as m}from"./CommandsAndQueries-C-B3vcHW.js";import{M as p,C as s}from"./blocks-B7C-sP0U.js";import"./Tag-DFYl0ftZ.js";import"./index-fQ6fbGsc.js";import"./copy-BgTszgJK.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D4eIu_Ee.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dqb4-3Ox.js";import"./index-upku0ICQ.js";import"./index-DPh3hFjM.js";import"./Link-CATCrkJf.js";import"./index-BaS8undN.js";import"./index-DuOlzjbj.js";import"./index-Cj4eX-xQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRGip9L6.js";import"./addCustomCSSWithScoping-DXbMFExg.js";import"./index-CoFaLD2a.js";import"./information-BpKTV1Df.js";import"./sys-enter-2-Cjjs2hNu.js";import"./alert-DEEsEFWu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BX-2aVfx.js";import"./delete-DJaqBI2v.js";import"./settings-suPn1Nnm.js";import"./NoData-k8ylWlWP.js";import"./IllustratedMessage-QtkSWE--.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DotGN4Y7.js";import"./index-D_AKAMYV.js";import"./index-DeEkJt1e.js";import"./slim-arrow-down-BiuCGCjT.js";import"./Input-BHUHhOmz.js";import"./ResponsivePopoverCommon.css-BxaDEsUM.js";import"./ValueStateMessage.css-BYDbDg0Q.js";import"./Suggestions.css-DZfh_4W3.js";import"./ListBoxItemGroupTemplate-Ce53u2a5.js";import"./ComboBoxItemGroup-DBihqRGm.js";import"./ListItemBaseTemplate-BM3kFwkG.js";import"./Token-DflvgBUB.js";import"./ScrollEnablement-CnRiCY6V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DaqjNEkx.js";import"./ToggleButton-C3LSC9pu.js";import"./SuggestionItem-eiisW8R3.js";import"./index-DOUHh_Yk.js";import"./Option-CUrZDe04.js";import"./index-BETUsKMg.js";import"./SegmentedButton-Cux8zQoJ.js";import"./index-D3JCLYGZ.js";import"./Select-DW_EjdMU.js";import"./InvisibleMessage-C1GU6Z5A.js";import"./slim-arrow-down-DJqqQ7Uz.js";import"./index-g1hielSz.js";import"./index-BdZUY68T.js";import"./index-BhkJT34d.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DdhG93W-.js";import"./group-2-zFNxt9gh.js";import"./sort-descending-ByihN0-k.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEU0a68q.js";import"./utils-DWSip9Hp.js";import"./index-BYutBOs4.js";import"./index-Di2jtcE5.js";import"./index-CZcSTKvj.js";import"./navigation-down-arrow-DkGOKBV1.js";import"./navigation-right-arrow-BCm7Xenc.js";import"./navigation-right-arrow-C9_CN0LR.js";import"./useCurrentTheme-uuFazV9G.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bj0B-A9p.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWRMKF8W.js";import"./paper-plane-uFKcpEyA.js";import"./index-BDhMGars.js";import"./less-BjbU_0bC.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
