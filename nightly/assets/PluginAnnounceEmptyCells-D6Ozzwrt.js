import{j as t}from"./iframe-CXQAdbiu.js";import{useMDXComponents as n}from"./index-B53u5pzW.js";import{I as i,F as m}from"./CommandsAndQueries-aoDJK_rZ.js";import{M as p,C as s}from"./blocks-CqzuTWcZ.js";import"./Tag-BVaaDNuO.js";import"./index-B7B2Licm.js";import"./copy-DcVZp789.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BRSknd15.js";import"./preload-helper-PPVm8Dsz.js";import"./index-529wBAr6.js";import"./index-f6kmMniG.js";import"./index-ULIsdIj2.js";import"./Link-BM2g4e1S.js";import"./index-BdQ3exsp.js";import"./index-DaUVwWua.js";import"./index-BjLlWCaV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cah1_bVk.js";import"./addCustomCSSWithScoping-CF9FJk9W.js";import"./index-t0QN6j1g.js";import"./information-ATIM8RIH.js";import"./sys-enter-2-4FUXKSMu.js";import"./alert-DgUa0xxC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1bs8kF-.js";import"./delete-DowHx4wk.js";import"./settings-CVVvFOe0.js";import"./NoData-q7wNzTiS.js";import"./IllustratedMessage-DKb8AtT2.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-B1CzrmOX.js";import"./index-bP1_QBvP.js";import"./index-DY3B7_kM.js";import"./slim-arrow-down-hLmi3DGr.js";import"./Input-CYD0qtkC.js";import"./ResponsivePopoverCommon.css-WfYGUFrq.js";import"./ValueStateMessage.css-CgsW_nz6.js";import"./Suggestions.css-BBvTA_r8.js";import"./ListBoxItemGroupTemplate-D-dkO2pM.js";import"./ComboBoxItemGroup-DHkKBduU.js";import"./ListItemBaseTemplate-BonfCIkK.js";import"./Token-BIdC5wJi.js";import"./ScrollEnablement-CJADfPLf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CfwHGGPG.js";import"./ToggleButton-BmbPwfk7.js";import"./SuggestionItem-gfvdLHYr.js";import"./index-BuXBJAJ4.js";import"./Option-giAR4PyV.js";import"./index-V5sVuIkU.js";import"./SegmentedButton-BPwflYvL.js";import"./index-CTuyF3LD.js";import"./Select-CP65qCm6.js";import"./InvisibleMessage-YSIBfych.js";import"./slim-arrow-down-DaR9tdKT.js";import"./index-Bl8oHxhy.js";import"./index-CBZrs3cq.js";import"./index-C7FokFlZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrdHcgRL.js";import"./group-2-C3eZD9xi.js";import"./sort-descending-bTZCRpky.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CaHCE1NB.js";import"./utils-Ds3TVJbz.js";import"./index-DyB1YbCe.js";import"./index-DAvw1qwV.js";import"./index-D4Ka0onQ.js";import"./navigation-down-arrow-Ba-PmlVo.js";import"./navigation-right-arrow-COX7_ak2.js";import"./navigation-right-arrow-DRoaRB41.js";import"./useCurrentTheme-Drr0Li3b.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BoLqpInx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-FsmN4cF6.js";import"./paper-plane-BcVanBNt.js";import"./index-CeFcuoyl.js";import"./less-DYN9Hj3m.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
