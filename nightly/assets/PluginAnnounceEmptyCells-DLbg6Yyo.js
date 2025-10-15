import{j as t}from"./iframe-Dpln3x91.js";import{useMDXComponents as n}from"./index-BwM4zX9M.js";import{I as i,F as m}from"./CommandsAndQueries-D8ZM_J5V.js";import{M as p,C as s}from"./blocks-BU-hwsss.js";import"./Tag-CuuYxwWF.js";import"./index-gZoyk-EE.js";import"./copy-BmZL0gFG.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CDrhhElJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_G040s9.js";import"./index-R5iFeOqc.js";import"./index-B-tiWui7.js";import"./Link-B2EfPk0H.js";import"./index-BnwzWoqt.js";import"./index-BC7bHNAY.js";import"./index-C7xVtjbt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl1L_0sw.js";import"./addCustomCSSWithScoping-BEgX107E.js";import"./index-C9IWhIjk.js";import"./information-BNg_xE8V.js";import"./sys-enter-2-CRey8tmC.js";import"./alert-DebHUSqO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-dWrrqn7O.js";import"./delete-DKtOEY5u.js";import"./settings-DUogldWd.js";import"./NoData-B7KP2bRY.js";import"./IllustratedMessage-cTE9BIDm.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CQHrGMje.js";import"./index-0uDK0Vdr.js";import"./index-wbSF3N_Y.js";import"./slim-arrow-down-BxpwhQs1.js";import"./Input-B7euzJoo.js";import"./ResponsivePopoverCommon.css--1dLLGms.js";import"./ValueStateMessage.css-DTWUtWcx.js";import"./Suggestions.css-InLHnYp-.js";import"./ListBoxItemGroupTemplate-DbOWOTtN.js";import"./ComboBoxItemGroup-DTREEyXz.js";import"./ListItemBaseTemplate-DfSRrZFo.js";import"./Token-DR7cqsJm.js";import"./ScrollEnablement-DSS0lIGV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHCpwb9_.js";import"./ToggleButton-Dyi4d8KV.js";import"./SuggestionItem-C9K1LEXa.js";import"./index-D4J4Dqol.js";import"./Option-CiInW1SY.js";import"./index-CKt8E8QC.js";import"./SegmentedButton-FfaROJ8w.js";import"./index-BIF6S8BW.js";import"./Select-D4hMiJvv.js";import"./InvisibleMessage-kDq0cqsN.js";import"./slim-arrow-down-DotGOMkD.js";import"./index-DNSCkbXG.js";import"./index-ORaq6zeN.js";import"./index-DZSYYhge.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYVdaO0E.js";import"./group-2-CKHkgp4p.js";import"./sort-descending-NRuJXw_U.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEvmHykI.js";import"./utils-DqbrCZoJ.js";import"./index-CzSiOjHq.js";import"./index-CIHgB-fO.js";import"./index-vGs8Gvmn.js";import"./navigation-down-arrow-B-KwWelX.js";import"./navigation-right-arrow-BN6oWB-c.js";import"./navigation-right-arrow-auStrBJj.js";import"./useCurrentTheme-D2C-2146.js";import"./IndicationColor-DVw-fSM_.js";import"./index-eBQ2Ght0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D7wro6Bb.js";import"./paper-plane-BxXqHCwQ.js";import"./index-Bxt6ZcXW.js";import"./less-DKNEmMSk.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
