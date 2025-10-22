import{j as t}from"./iframe-BFGaT_FV.js";import{useMDXComponents as n}from"./index-CnhfjtvF.js";import{I as i,F as m}from"./CommandsAndQueries-B8JKM3km.js";import{M as p,C as s}from"./blocks-Dayk-WJV.js";import"./Tag-B8YEukqj.js";import"./index-DAwrSR1M.js";import"./copy-AGelM_Ll.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BerL1zlH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvUgbQCZ.js";import"./index-BlQFkuHY.js";import"./index-BZnNWwSk.js";import"./Link-BBvAtJ6F.js";import"./index-B9hLr1Bv.js";import"./index-Bf-TRwAv.js";import"./index-CaRZdhen.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYVZjLb4.js";import"./addCustomCSSWithScoping-B8FWovV5.js";import"./index-1UQ-4lhS.js";import"./information-Bz11YhFZ.js";import"./sys-enter-2-BSVZTuif.js";import"./alert-BaGtUWxL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DTmyScv0.js";import"./delete-v-dXAAIl.js";import"./settings-BOscvD9f.js";import"./NoData-gDQFgR3G.js";import"./IllustratedMessage-CDHVVzlP.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DA9fHCLR.js";import"./index-vKbE8tbN.js";import"./index-D7iYQuDO.js";import"./slim-arrow-down-Dd8YkBw-.js";import"./Input-Bmjprhie.js";import"./ResponsivePopoverCommon.css-6c8XaA5C.js";import"./ValueStateMessage.css-Bh1E9Ghj.js";import"./Suggestions.css-BTwMp3YW.js";import"./ListBoxItemGroupTemplate-undkDWdm.js";import"./ComboBoxItemGroup-OfkHN57U.js";import"./ListItemBaseTemplate-SnpzLXKW.js";import"./Token-CMJi_Rys.js";import"./ScrollEnablement-cAwpl98b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ccu5KVL2.js";import"./ToggleButton-CRoHXs7m.js";import"./SuggestionItem-DGnZQlbw.js";import"./index-Du7xx1dp.js";import"./Option-CdFGI1PC.js";import"./index-B0eNO-0P.js";import"./SegmentedButton-DCEuTMnH.js";import"./index-DKtUZxqJ.js";import"./Select-c6jnMs-7.js";import"./InvisibleMessage-CbPZDP3-.js";import"./slim-arrow-down-BdvQ_s0T.js";import"./index-jrrMCwgY.js";import"./index-Dl1PX_Mb.js";import"./index-Bs16yVYB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C7e9On5N.js";import"./group-2-Dl113zhQ.js";import"./sort-descending-qVZJ1324.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DJcIUy6q.js";import"./utils-B6_SaaJR.js";import"./index-DMziRRZN.js";import"./index-DyXpRQb6.js";import"./index-BH-J8zHs.js";import"./navigation-down-arrow-DItIrMRs.js";import"./navigation-right-arrow-CKSHLqK6.js";import"./navigation-right-arrow-C4wfpKAx.js";import"./useCurrentTheme-C8SqHROD.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bn2vXSX1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hb1ZDPhU.js";import"./paper-plane-DJjUVXFe.js";import"./index-DlH340EZ.js";import"./less-CUu-6yGw.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
