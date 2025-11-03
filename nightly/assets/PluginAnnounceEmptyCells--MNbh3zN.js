import{j as t}from"./iframe-C6G8Gpme.js";import{useMDXComponents as n}from"./index-C4rJv3Nd.js";import{I as i,F as m}from"./CommandsAndQueries-CX4_ppDX.js";import{M as p,C as s}from"./blocks-C6ISP02G.js";import"./Tag-wYYkZAW5.js";import"./index-CLl--vXw.js";import"./copy-DG7SwgZt.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CFQTPpSi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MA4O1_BO.js";import"./index-DtX1Aayg.js";import"./index--EZEVYBb.js";import"./Link-B1f9egnY.js";import"./index-CNpE9-6C.js";import"./index-CYD-IelD.js";import"./index-NHF_x4Su.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2tTP6jwo.js";import"./addCustomCSSWithScoping-DkcigAPx.js";import"./index-B7V2IaSq.js";import"./information-CAQjlf4h.js";import"./sys-enter-2-CseNsjRz.js";import"./alert-C6FTsI2C.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQrAE-yM.js";import"./delete-BePcinQ6.js";import"./settings-ZIGvnodt.js";import"./NoData-f-9aMUJ4.js";import"./IllustratedMessage-BnjPNDkK.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-R36zWZeY.js";import"./index-Bw2blU0C.js";import"./index-CC4rDnzA.js";import"./slim-arrow-down-DFQVjscf.js";import"./Input-B43vXzoo.js";import"./ResponsivePopoverCommon.css-BaW35ZlT.js";import"./ValueStateMessage.css-BPXwB0kU.js";import"./Suggestions.css-D8LM2L39.js";import"./ListBoxItemGroupTemplate-C7DYeyIb.js";import"./ComboBoxItemGroup-9TKINPGh.js";import"./ListItemBaseTemplate-py1Jss2-.js";import"./Token-BESOIpLC.js";import"./ScrollEnablement-DBsQ_VBd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CbgkjpUB.js";import"./ToggleButton-DIE2_eYU.js";import"./SuggestionItem-B37H0t8o.js";import"./index-hYGTc0Ki.js";import"./Option-Dpbc4fOS.js";import"./index-BHyn0uZc.js";import"./SegmentedButton-EzvQ1TiR.js";import"./index-Bw0lSxiT.js";import"./Select-CGLg-QOl.js";import"./InvisibleMessage-Co517J8T.js";import"./slim-arrow-down-BMl0PRZy.js";import"./index-BG83xDW8.js";import"./index-v-qZ03j1.js";import"./index-DT1QmIo9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bjv4k70o.js";import"./group-2-Cd_IntO7.js";import"./sort-descending-5ABVgqX7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BG8mzTO_.js";import"./utils-BR3sGIFW.js";import"./index-BzZR18Jl.js";import"./index-B44hRY22.js";import"./index-DbddQwCa.js";import"./navigation-down-arrow-ccA23Gon.js";import"./navigation-right-arrow-RKFZneuK.js";import"./navigation-right-arrow-UKoz8H0N.js";import"./useCurrentTheme-metPpI7t.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dw6v9mL5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cf5So1HI.js";import"./paper-plane-BSvLcMlt.js";import"./index-UbolVguk.js";import"./less-o5FG2Zi-.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
