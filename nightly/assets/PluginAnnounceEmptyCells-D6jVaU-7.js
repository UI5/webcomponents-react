import{j as t}from"./iframe-wbWwESAy.js";import{useMDXComponents as n}from"./index-BOBJYedV.js";import{I as i,F as m}from"./CommandsAndQueries-C1vl6z57.js";import{M as p,C as s}from"./blocks-B5IYlHFD.js";import"./Tag-BH6lPIks.js";import"./index-DQNSAqOh.js";import"./copy-sux1w53_.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-ymB0dvzI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Buwu-oqJ.js";import"./index-B81NkVkP.js";import"./index-Cupokltd.js";import"./Link-BN6Q-gzd.js";import"./index-BnSJ99QD.js";import"./index-DcmA7siw.js";import"./index-DqWD-oTo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqytePVm.js";import"./addCustomCSSWithScoping-CplaRZ4g.js";import"./index-DrYBsayo.js";import"./information-DASCm05s.js";import"./sys-enter-2-J3fKP-CE.js";import"./alert-D2qcbVgq.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CSCYBoid.js";import"./delete-CkbWcAQ8.js";import"./settings-DSjEV05c.js";import"./NoData-DSScVfbu.js";import"./IllustratedMessage-CixZtxVG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-b7Wr6axn.js";import"./index-D5jEuy6P.js";import"./index-rxWa-PP3.js";import"./slim-arrow-down-Beir7aM1.js";import"./Input-Vu44DOAo.js";import"./ResponsivePopoverCommon.css-D988s0PK.js";import"./ValueStateMessage.css-CdnX5Q24.js";import"./Suggestions.css-DzjZuQlP.js";import"./ListBoxItemGroupTemplate-CeF3Gz87.js";import"./ComboBoxItemGroup-j5CzfWaH.js";import"./ListItemBaseTemplate-BQRJYW54.js";import"./Token-Co-splGb.js";import"./ScrollEnablement-DlXiJ1Ol.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BnhmLw4e.js";import"./ToggleButton-BWLlCYgP.js";import"./SuggestionItem-BL--DX9A.js";import"./index-BuN2F6Z9.js";import"./Option-BfBV6oRK.js";import"./index-BASr6ULO.js";import"./SegmentedButton-BMoLUOOT.js";import"./index-CyJ9rJpG.js";import"./Select-C4v57l5j.js";import"./InvisibleMessage-DiUlqqZw.js";import"./slim-arrow-down-DGcq_Pe_.js";import"./index-DRSwvrEw.js";import"./index-4LVdgCdo.js";import"./index-D7tI0R5X.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CS8HWzLV.js";import"./group-2-zJzmiyTG.js";import"./sort-descending-D-FdC3xQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BtV9Msfp.js";import"./utils-CKST4OLl.js";import"./index-BZtqaS2C.js";import"./index-CxcyIJ4L.js";import"./index-DgwCbpUf.js";import"./navigation-down-arrow-Dp1eGb2c.js";import"./navigation-right-arrow-Cdr0GtsE.js";import"./navigation-right-arrow-Do0mt2Fs.js";import"./useCurrentTheme-oAkfJU9N.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BoctPpsF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Co8lcZlm.js";import"./paper-plane-CumYDqaS.js";import"./index-DIEkrnVJ.js";import"./less-DKy2uX_G.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
