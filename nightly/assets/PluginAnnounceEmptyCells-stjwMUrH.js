import{j as t}from"./iframe-DHodyxHg.js";import{useMDXComponents as i}from"./index-BN78HojQ.js";import{I as n,F as m}from"./CommandsAndQueries-BJoNcE_T.js";import{M as p,C as s}from"./blocks-DRbngUD5.js";import"./Tag-AoT1Wzdr.js";import"./index-C_UZWXPq.js";import"./copy-HtbMTlWB.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CjRnrZ5o.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LizrXBCk.js";import"./index-H_vNaU3m.js";import"./index-CzYnO6dI.js";import"./Link-DVjUQMmu.js";import"./index-8C_wghAv.js";import"./index-CuoqTBPK.js";import"./index-Bf66SqZa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D26g_6Hi.js";import"./addCustomCSSWithScoping-BBYARKEG.js";import"./index-Cbt6pGSR.js";import"./information-CikfZyec.js";import"./sys-enter-2-CGw1AdWq.js";import"./alert-fS8iZOwW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Tg2_K8Hr.js";import"./delete-Zcb2vEJ9.js";import"./settings-BD-RgLuV.js";import"./NoData-ZyVsLGlx.js";import"./IllustratedMessage-DWYc-Nj8.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-C-nNTrYT.js";import"./index-B9OIuk5u.js";import"./slim-arrow-down-RUw4_20M.js";import"./Input-CPLuf8pl.js";import"./ResponsivePopoverCommon.css-acGEx8eA.js";import"./ValueStateMessage.css-DdKqUqjJ.js";import"./Suggestions.css-B9GwOVjc.js";import"./ListBoxItemGroupTemplate-DbSMHwWh.js";import"./ComboBoxItemGroup-BpKRweKF.js";import"./ListItemBaseTemplate-DgUnC3lw.js";import"./Token-CbMshDZu.js";import"./ScrollEnablement-QqZ8MTp1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ob80DdRY.js";import"./ToggleButton-BKWW76vP.js";import"./SuggestionItem-C9bc-o4q.js";import"./index-S-wdO51Z.js";import"./Option-Dgeh_gWY.js";import"./index-BtsPFHyJ.js";import"./SegmentedButton-Dgc_oaRw.js";import"./index-B1iSRk56.js";import"./Select-DZKbaPCr.js";import"./InvisibleMessage-k0Gva9XM.js";import"./slim-arrow-down-cqA_BTp3.js";import"./index-Bq3O3R5l.js";import"./index-H_BorQOy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CYwltf-g.js";import"./group-2-C2sMZn1f.js";import"./sort-descending-DrgkNws6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bo9NW1qj.js";import"./utils-BwVDplvj.js";import"./index-ja_VFHYZ.js";import"./index-BzHA07QR.js";import"./index-V-s4kElR.js";import"./navigation-down-arrow-BKyAuWCW.js";import"./navigation-right-arrow-DRM4c8S8.js";import"./navigation-right-arrow-DbKnsnOZ.js";import"./useCurrentTheme-CxvZJkfq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BUmA-QY0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2F7gVSb.js";import"./paper-plane-UC5z0UMH.js";import"./index-DRtfFjjT.js";import"./less-D8BZSXoC.js";import"./index-CurBf1wH.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(m,{})]})}function Lt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Lt as default};
