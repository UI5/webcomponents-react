import{j as t}from"./iframe-f3iLPpTx.js";import{useMDXComponents as n}from"./index-Cg-5LGOy.js";import{I as i,F as m}from"./CommandsAndQueries-ANshK3xd.js";import{M as p,C as s}from"./blocks-DoSJn-9n.js";import"./Tag-HMKYn_gR.js";import"./index-C4t1_KXY.js";import"./copy-BPmTOQZZ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CeGiqy_9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-TWvX3fxG.js";import"./index-oCC-c3oA.js";import"./index-DzXajydQ.js";import"./Link-EHnjrAaJ.js";import"./index-Dq8bnboK.js";import"./index-C3jxOnm0.js";import"./index-DY8Z5oY2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ce84hNWi.js";import"./addCustomCSSWithScoping-FBci05L8.js";import"./index-C81LpEbs.js";import"./information-D9tZEGE7.js";import"./sys-enter-2-DE9YD12B.js";import"./alert-BBZcuL-v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D9bzh1Z6.js";import"./delete-3k9ewCfi.js";import"./settings-C4qTrATZ.js";import"./NoData-DTrdJtGp.js";import"./IllustratedMessage-BSTzW0Sn.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BXAl_aeC.js";import"./index-D_kEJBb-.js";import"./index-Cyem6Ef9.js";import"./slim-arrow-down-BhjskzRk.js";import"./Input-BA2q8K-i.js";import"./ResponsivePopoverCommon.css-B8gBrPLb.js";import"./ValueStateMessage.css-seFb1qKi.js";import"./Suggestions.css-C81am98X.js";import"./ListBoxItemGroupTemplate-CI1tVLOZ.js";import"./ComboBoxItemGroup-BCkjIVdO.js";import"./ListItemBaseTemplate-BBr_9wKC.js";import"./Token-BzdV5wLi.js";import"./ScrollEnablement-BgAU8fOn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Czpv5A2n.js";import"./ToggleButton-CPD4HgrF.js";import"./SuggestionItem-ClSr8F10.js";import"./index-T7MLs8hf.js";import"./Option-CWKJzO5N.js";import"./index-_dyjDy1m.js";import"./SegmentedButton-BYRHNZSD.js";import"./index-8OcAdlHO.js";import"./Select-BnSQqeni.js";import"./InvisibleMessage-C0oVP_sH.js";import"./slim-arrow-down-6WKrBuBW.js";import"./index-cjK9zly0.js";import"./index-DXgYFRlO.js";import"./index-CRy0gMjM.js";import"./index-x-l5-c_J.js";import"./IconDesign-DXd8PPVF.js";import"./filter-XptaN1lH.js";import"./group-2-CObAZZZr.js";import"./sort-descending-D6cr4_48.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CFnD-yF-.js";import"./utils-BubI_VCY.js";import"./index-BUKlkCYI.js";import"./index-nGDSIC6S.js";import"./index-BRFWofe_.js";import"./navigation-down-arrow-HRklLRvN.js";import"./navigation-right-arrow-DnSqIm0M.js";import"./navigation-right-arrow-BU9xMcPj.js";import"./useCurrentTheme-CEll4Kb2.js";import"./index-u-NkBXly.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzIFx5-R.js";import"./paper-plane-ByFPrxB1.js";import"./index-DOXdSdDM.js";import"./less-Dz3GjE58.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
