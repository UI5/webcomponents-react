import{j as t}from"./iframe-DLRMrfR_.js";import{useMDXComponents as n}from"./index-7UnH5ZCU.js";import{I as i,F as m}from"./CommandsAndQueries-D6NirpIC.js";import{M as p,C as s}from"./blocks--r6oFhly.js";import"./Tag-zetZkNsl.js";import"./index-qvcEmQpJ.js";import"./copy-Loq6ZFpK.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DXpJF9zq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwoJQxQH.js";import"./index-D2MDEhSl.js";import"./index-tVwrcd6W.js";import"./Link-CBt9loeM.js";import"./index-kj7rqJLC.js";import"./index-DsFidw_9.js";import"./index-xtEoLRb_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMq-LIht.js";import"./addCustomCSSWithScoping-Ca5vBaM2.js";import"./index-BPd73hWD.js";import"./information-zAO2pP7J.js";import"./sys-enter-2-CCKngdgf.js";import"./alert-B3SXl-8D.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Du6F5iDJ.js";import"./delete-BwPLte86.js";import"./settings-DTgx2sz4.js";import"./NoData-D0S9YqWQ.js";import"./IllustratedMessage-Kd9xQwRs.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-sBTvjUoE.js";import"./index--m2P8UtU.js";import"./index-BotVherK.js";import"./slim-arrow-down-DNog2_xn.js";import"./Input-CcN4YVMF.js";import"./ResponsivePopoverCommon.css-h4F5UI1l.js";import"./ValueStateMessage.css-BSnO8zIp.js";import"./Suggestions.css-Cp_HsrZq.js";import"./ListBoxItemGroupTemplate-BJumqT4i.js";import"./ComboBoxItemGroup-CbKVr_4I.js";import"./ListItemBaseTemplate-Da4x_292.js";import"./Token-CW6mgtq8.js";import"./ScrollEnablement-Bz5iwlCG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Df0gJlCx.js";import"./ToggleButton-BOkY-G3n.js";import"./SuggestionItem-DaZJKeIe.js";import"./index-BErLdPcq.js";import"./Option-vNfFuRF2.js";import"./index-BBnywNed.js";import"./SegmentedButton-BaBICXYr.js";import"./index-BB-WV-go.js";import"./Select-CVNbNvaC.js";import"./InvisibleMessage-6vcGDyDm.js";import"./slim-arrow-down-B4rbpJOP.js";import"./index-FoBVlpGj.js";import"./index-CLJ5W-kZ.js";import"./index-DZE8mdic.js";import"./index-1oIhOKBZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrpZAc5e.js";import"./group-2-DOYg5UtM.js";import"./sort-descending-DC1HxPJi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BpRoThxi.js";import"./utils-CKmkWZ04.js";import"./index-OyOMojac.js";import"./index-6gZLQIzr.js";import"./index-WnnzYQ2a.js";import"./navigation-down-arrow-D-m4CbH4.js";import"./navigation-right-arrow-DHewavL_.js";import"./navigation-right-arrow-CTPwzPlI.js";import"./useCurrentTheme-BL04Ku5N.js";import"./index-Dmpy7ykn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-OpbkKVuD.js";import"./paper-plane-B2UAJbES.js";import"./index-DRoHFPpy.js";import"./less-K3WvuTue.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
