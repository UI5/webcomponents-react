import{j as t}from"./iframe-RmeQ8XGC.js";import{useMDXComponents as n}from"./index-kR0XEGhk.js";import{I as i,F as m}from"./CommandsAndQueries-C1TIWg_l.js";import{M as p,C as s}from"./blocks-DaxiJjGb.js";import"./Tag-SV0H5ODo.js";import"./index-1jGrAlxH.js";import"./copy-Bxjpqlrz.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CvNR8_-Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIaOPhno.js";import"./index-CaXdH-JM.js";import"./index-Dg9UiDQJ.js";import"./Link-DiD1re6X.js";import"./index-P4hNb3E_.js";import"./index-BzAkCwZQ.js";import"./index-ICvStq6z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCSTig2E.js";import"./addCustomCSSWithScoping-D6LA06yL.js";import"./index-Dn-It_jb.js";import"./information-BGE1sBpB.js";import"./sys-enter-2-CFWWj7rX.js";import"./alert-DOCQy2rj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DrNrrQBn.js";import"./delete-Bgpt9UL9.js";import"./settings-B6qHIMc_.js";import"./NoData-DvirCjMy.js";import"./IllustratedMessage-NOwzz5-E.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-B1RZxKut.js";import"./index-DymmdOGk.js";import"./index-BrNhwdfa.js";import"./slim-arrow-down-BfDEZlhi.js";import"./Input-C0RQAQ_K.js";import"./ResponsivePopoverCommon.css-Bb2CDDwj.js";import"./ValueStateMessage.css-A-AQ78Le.js";import"./Suggestions.css-DQpTb0pt.js";import"./ListBoxItemGroupTemplate-DmRiL6u4.js";import"./ComboBoxItemGroup-TUyXkEDW.js";import"./ListItemBaseTemplate-D6x618bx.js";import"./Token-3IndTOm3.js";import"./ScrollEnablement-ZXEMw5No.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZLNiFs4r.js";import"./ToggleButton-hyvWFxwf.js";import"./SuggestionItem-Yq1R2rBr.js";import"./index-BvRfALoj.js";import"./Option-BYnx9qqz.js";import"./index-CvMS_bDE.js";import"./SegmentedButton-CXxD3ML7.js";import"./index-DWwQPCDK.js";import"./Select-GO81chS2.js";import"./InvisibleMessage-CAjaGHoP.js";import"./slim-arrow-down-DL7OQOka.js";import"./index-BuooPs5O.js";import"./index-Df3zkpR1.js";import"./index-h9khwDpH.js";import"./index-B6z1BRDU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BAP8GeEZ.js";import"./group-2-SSe9KuRV.js";import"./sort-descending-C38OTzhL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-FUSiAWga.js";import"./utils-Dh_E7hqa.js";import"./index-CwAKKYUu.js";import"./index-DyPtDivo.js";import"./index-D1RAxoJs.js";import"./navigation-down-arrow-CSBNkbSa.js";import"./navigation-right-arrow-ZQL6lSfa.js";import"./navigation-right-arrow-BTS_mzJX.js";import"./useCurrentTheme-D5tplJAn.js";import"./index-Ys9BGoGM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BCtUW8tC.js";import"./paper-plane-Dj0V2el6.js";import"./index-CKSnoblL.js";import"./less-CVIXlP33.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
