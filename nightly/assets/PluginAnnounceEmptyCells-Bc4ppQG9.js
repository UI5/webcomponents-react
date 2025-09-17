import{j as t}from"./iframe-_UyBg_Hl.js";import{useMDXComponents as i}from"./index-DEEVvvo3.js";import{I as n,F as m}from"./CommandsAndQueries-0B2XTB0a.js";import{M as p,C as s}from"./blocks-CYzyNaRH.js";import"./Tag-CQlNZs2z.js";import"./index-5woB_pVn.js";import"./copy-BX3zmcvZ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-REkTP7LB.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DpskCw-c.js";import"./index-e_5k1_Nn.js";import"./index-DXgH8OvD.js";import"./Link-5ArX67S2.js";import"./addCustomCSSWithScoping-BV_2mez6.js";import"./index-LcJnWxTb.js";import"./index-x1moOr2G.js";import"./index-CbWaderx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-SEMy8FFe.js";import"./index-CCQAf2jY.js";import"./information-DYJp_bgk.js";import"./sys-enter-2-Bc61YsW4.js";import"./alert-Vjb3s5VB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BRPDjZI-.js";import"./delete-feXjq1P0.js";import"./settings-CfbDn0b2.js";import"./NoData-KNRhNzoE.js";import"./IllustratedMessage-BS_1IYHK.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-TH_0UP1M.js";import"./index-PnFbS3U_.js";import"./slim-arrow-down-qdV-4r_r.js";import"./Input-DIEfc7NS.js";import"./ResponsivePopoverCommon.css-DjgY9XeO.js";import"./ValueStateMessage.css-xNCah7OI.js";import"./Suggestions.css-pEdA0aWG.js";import"./ListBoxItemGroupTemplate-BUTFv0ua.js";import"./ComboBoxItemGroup-BDmTUb-I.js";import"./ListItemBaseTemplate-BjR5kqUG.js";import"./Token-C36Uamaf.js";import"./ScrollEnablement-BddgiWpw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYXiefij.js";import"./ToggleButton-BBZPk2By.js";import"./SuggestionItem-CTxEE-_R.js";import"./index-CQKDXWwe.js";import"./Option-0oUm9b3Y.js";import"./index-C8GhuzMH.js";import"./SegmentedButton-D9-1cTAl.js";import"./index-D3Vrf9MZ.js";import"./Select-CFMlTJjs.js";import"./InvisibleMessage-G4E3aSXE.js";import"./slim-arrow-down-BtfHa_9S.js";import"./useIsRTL-BKJsyXLQ.js";import"./index-Q841TG4t.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BerSEzZ1.js";import"./group-2-BbIVBsLi.js";import"./sort-descending-DNDy-Ho_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DD84l_xa.js";import"./utils-DlslC0su.js";import"./index-CevzIQBH.js";import"./index-BX6O9pgn.js";import"./index-Ck9crqy1.js";import"./navigation-down-arrow-CqYoF-4_.js";import"./navigation-right-arrow-HJTsoaPp.js";import"./navigation-right-arrow-D_O0ENz8.js";import"./useCurrentTheme-BVwt7H5k.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BWBgMRln.js";import"./debounce-D7W5PopO.js";import"./paper-plane-ZhsZU26w.js";import"./index-DjxLOnDD.js";import"./less-s7L_t8AQ.js";import"./index-BCeKQLJ1.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,t.jsx(m,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
