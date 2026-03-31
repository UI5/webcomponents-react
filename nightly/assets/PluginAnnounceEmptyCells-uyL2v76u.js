import{j as t}from"./iframe-GXp7lrSQ.js";import{u as i,M as n,C as m}from"./blocks-XkJ722q3.js";import{I as p}from"./CommandsAndQueries-CVcJVi5r.js";import"./Tag-CUfffkkD.js";import"./index-D9hIm448.js";import"./copy-_WAqiJ1e.js";import{F as s}from"./Footer-uVHBRSQb.js";import"./PageNotFound-VnOdSsgo.js";import{PluginAnnounceEmptyCells as a}from"./AnalyticalTableHooks.stories-CCSynAfm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B8HUwSLv.js";import"./index-BLkFX4jD.js";import"./index-C-99lkBL.js";import"./index-CrV5gfjE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHLtduuY.js";import"./addCustomCSSWithScoping-lRpYguTz.js";import"./index-CMKcbagv.js";import"./index-CmMI2aTL.js";import"./index-BXKqqHdE.js";import"./information-CwevoeOo.js";import"./sys-enter-2-BSdQUe02.js";import"./alert-Ds801M6U.js";import"./index-TceWecEs.js";import"./Illustrations-C-7wSXd8.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-VX4Vhqj7.js";import"./delete-B8zG0JxE.js";import"./settings-DnQ-nfdc.js";import"./NoData-AnHrsfo0.js";import"./NoFilterResults--i8J2M-o.js";import"./index-CERoqhvX.js";import"./IllustratedMessage--eZuDK_7.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CNbkdYFu.js";import"./Input-KO3l8Brk.js";import"./ResponsivePopoverCommon.css-Bc1a9KNA.js";import"./ValueStateMessage.css-D80lJWSa.js";import"./Suggestions.css-Ahw1quaz.js";import"./ListBoxItemGroupTemplate-DZFQ85cg.js";import"./ComboBoxItemGroup-ChKegmig.js";import"./ListItemBaseTemplate-XA1LRcK1.js";import"./Token-DR2_YNLL.js";import"./ScrollEnablement-BbZ7dfG4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B3m1DJEV.js";import"./ToggleButton-DwOQOQFC.js";import"./multiselect-all-TGdLhybc.js";import"./SuggestionItem-DQ4y2WD-.js";import"./index-DvYiMBT8.js";import"./Option-Dny_IhR6.js";import"./index-D9qCtwZi.js";import"./SegmentedButton-eU4n5SAR.js";import"./index-BHKTmJbu.js";import"./Select-CBTMV-I6.js";import"./InvisibleMessage-B-Rt2GQk.js";import"./index-fq_8vrBy.js";import"./index-CCgw5w5e.js";import"./index-Dhtc0t_i.js";import"./index-IufG6BAY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DQv9rnJ_.js";import"./group-2-CF9rBu8z.js";import"./sort-descending-8sFhQ0eM.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-mb2VS-jK.js";import"./utils-DMvTp3cY.js";import"./index-17IJ72DP.js";import"./index-D6OX3dYP.js";import"./index-i-wVs0AQ.js";import"./navigation-down-arrow-C9-QFAwk.js";import"./navigation-right-arrow-dF8lHbv3.js";import"./navigation-right-arrow-yvrVO2q2.js";import"./useCurrentTheme-cF8gI2uX.js";import"./index-B9tnRND4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZHvydOv.js";import"./paper-plane-AB8Tri35.js";import"./index-Btq87WCk.js";import"./less-DUrSicmG.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(p,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(m,{sourceState:"none",of:a}),`
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
`,t.jsx(s,{})]})}function _t(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{_t as default};
