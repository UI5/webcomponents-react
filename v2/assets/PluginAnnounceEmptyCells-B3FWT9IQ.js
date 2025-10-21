import{j as t}from"./iframe-BOeFyVYO.js";import{useMDXComponents as n}from"./index-CHR9lzRO.js";import{I as i,F as m}from"./CommandsAndQueries-B3uiYPSD.js";import{M as p,C as s}from"./blocks-DZQepsVR.js";import"./Tag-B2OWKeSz.js";import"./index-CPvTgMMp.js";import"./copy-BJhtqyDJ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BNASTJ6e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BA2TdYHr.js";import"./index-C7pCL8XU.js";import"./index-BJHUXRax.js";import"./Link-gq5MBZLl.js";import"./index-BVr_O3zx.js";import"./index-CFpQMsbP.js";import"./index-XsNappkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuyMWw-2.js";import"./addCustomCSSWithScoping-5MrgBdkN.js";import"./index-BcGyynfr.js";import"./information-23pj5EQa.js";import"./sys-enter-2-DAsPAd7c.js";import"./alert-CPkxh21N.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DjAUfTN5.js";import"./delete-CWJoMoJg.js";import"./settings-Bfit3oG9.js";import"./NoData-BscmLJLH.js";import"./IllustratedMessage-Dd93Yl2Q.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D3nzv2ZG.js";import"./index-DzkoDE5b.js";import"./index-DeACGhE8.js";import"./slim-arrow-down-CWRIGuGt.js";import"./Input-Df8o9ujM.js";import"./ResponsivePopoverCommon.css-CrPsreP2.js";import"./ValueStateMessage.css-D0I7pT5V.js";import"./Suggestions.css-CJA5EYur.js";import"./ListBoxItemGroupTemplate-DnOVXK1l.js";import"./ComboBoxItemGroup-CPuvIbWZ.js";import"./ListItemBaseTemplate-Cj1nOoXc.js";import"./Token-BAqMUyIJ.js";import"./ScrollEnablement-C6K7-lBE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BvObX3eg.js";import"./ToggleButton-DprkIF_5.js";import"./SuggestionItem-CKRLTHHj.js";import"./index-D5TJuk4k.js";import"./Option-BLl2Q7AB.js";import"./index-BtvD0QZf.js";import"./SegmentedButton-BeE07OxI.js";import"./index-BrMZtkt6.js";import"./Select-DqU5okXE.js";import"./InvisibleMessage-tWO1LuD6.js";import"./slim-arrow-down-XGqqmupf.js";import"./index-C1FVPsyk.js";import"./index-DBDN__0v.js";import"./index-C3vfrSiy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BrlNUypU.js";import"./group-2-BA5x23BP.js";import"./sort-descending-BCAq_Q0J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ikPuGIDZ.js";import"./utils-C8gBHpV1.js";import"./index-Sk78W01U.js";import"./index-DES0lnez.js";import"./index-BpGUb5zM.js";import"./navigation-down-arrow-Df9I5Mue.js";import"./navigation-right-arrow-Bjlzjx0_.js";import"./navigation-right-arrow-Dm_S70wW.js";import"./useCurrentTheme-Uxgw71xd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CtzTOU32.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVnkc0v4.js";import"./paper-plane-C_JViswO.js";import"./index-B7oLkWTs.js";import"./less-Cb2GPmNz.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
