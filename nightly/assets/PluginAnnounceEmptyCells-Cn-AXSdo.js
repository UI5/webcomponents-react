import{j as t}from"./iframe-BgUChC8z.js";import{useMDXComponents as n}from"./index-Bt3QSaL1.js";import{I as i,F as m}from"./CommandsAndQueries-BiCzXToa.js";import{M as p,C as s}from"./blocks-xGQg2Vw5.js";import"./Tag-C_OAQHPO.js";import"./index-Wo45_tYZ.js";import"./copy-BTfIxGSH.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CeX0Kyfe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQfpsC01.js";import"./index-BNFZf5J7.js";import"./index-D4lpRvQf.js";import"./Link-BaaJYg0_.js";import"./index-EZPmIbpG.js";import"./index-I7ioAdFJ.js";import"./index-C5F4agy_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNw7RwQP.js";import"./addCustomCSSWithScoping-CSlMgmu5.js";import"./index-DUpxdMFd.js";import"./information-B5F-s1Wz.js";import"./sys-enter-2-pPHl1vwI.js";import"./alert-C-NbCkDs.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CD6CHA-o.js";import"./delete-y5lJrBeW.js";import"./settings-Bcfleeh9.js";import"./NoData-D4-LWY5W.js";import"./IllustratedMessage-D98osn7I.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DSUueqrj.js";import"./index-BF4U7j9u.js";import"./index-CWO0kD1j.js";import"./slim-arrow-down-BZSodC91.js";import"./Input-BqX4tKYi.js";import"./ResponsivePopoverCommon.css-DQy2mY97.js";import"./ValueStateMessage.css-BQqInwWq.js";import"./Suggestions.css-CgWQiOZG.js";import"./ListBoxItemGroupTemplate-Bh0XK8An.js";import"./ComboBoxItemGroup-DBigtGMN.js";import"./ListItemBaseTemplate-Di7slU74.js";import"./Token-WW_TgQeI.js";import"./ScrollEnablement-4uXBpXRT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-J4gk5GHC.js";import"./ToggleButton-BNEU09Z3.js";import"./SuggestionItem-DWN4Mbly.js";import"./index-DUntWQ4O.js";import"./Option-Bz2fFbd9.js";import"./index-KkNhBHx0.js";import"./SegmentedButton-D_JrRdRj.js";import"./index-Db0tKTu3.js";import"./Select-DKO0kXu8.js";import"./InvisibleMessage-DzjrKdqv.js";import"./slim-arrow-down-CAVMB9Lc.js";import"./index-DUG4DuXd.js";import"./index-DybCOYZe.js";import"./index-DxWPnaPh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cf4OiQb-.js";import"./group-2-fkT5HhJb.js";import"./sort-descending-6nhlriZW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdXyFq69.js";import"./utils-aeblRDt6.js";import"./index-BpehBtsx.js";import"./index-CWGNCP4i.js";import"./index-BnZoUZkk.js";import"./navigation-down-arrow-szs85QnW.js";import"./navigation-right-arrow-Du_yn3gH.js";import"./navigation-right-arrow-B69KAuHS.js";import"./useCurrentTheme-B2EMPJa_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D7MIdb0-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuukhyP7.js";import"./paper-plane-ChG2uJSU.js";import"./index-DMT0rPiM.js";import"./less-DhsR2zRd.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
