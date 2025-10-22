import{j as t}from"./iframe-Dl0DWg8M.js";import{useMDXComponents as n}from"./index-Dunz3Qkg.js";import{I as i,F as m}from"./CommandsAndQueries-DcyHQWO5.js";import{M as p,C as s}from"./blocks-z5J1zZs0.js";import"./Tag-8UYUnG7U.js";import"./index-CIa6NQE1.js";import"./copy-BhfJfLSX.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BP0LJa49.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qDCkQVmj.js";import"./index-ClreWoEe.js";import"./index-fJlTqGLz.js";import"./Link-C2qcQY2b.js";import"./index-BtW57M3z.js";import"./index-DfHOwcie.js";import"./index-D98fiUtL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8jMVyWi.js";import"./addCustomCSSWithScoping-BtXYUpmM.js";import"./index-9_QD_94O.js";import"./information-0V3r1Ig4.js";import"./sys-enter-2-CxUk-uXZ.js";import"./alert-DWaZJdGL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DBsgvEJ8.js";import"./delete-DGhfhmvk.js";import"./settings-CCzCjc89.js";import"./NoData-DT7qf48U.js";import"./IllustratedMessage-CVhrLvam.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BPMHFkT9.js";import"./index-BJ5kqzUP.js";import"./index-BM2p53hS.js";import"./slim-arrow-down-WKx_RP1p.js";import"./Input-CPjqrIGm.js";import"./ResponsivePopoverCommon.css-BqUqASX7.js";import"./ValueStateMessage.css-BGdDzFrr.js";import"./Suggestions.css-u0KnI28S.js";import"./ListBoxItemGroupTemplate-BNIvrjxP.js";import"./ComboBoxItemGroup-BW8olXBy.js";import"./ListItemBaseTemplate-B4z_JR0H.js";import"./Token-B6us6uKB.js";import"./ScrollEnablement-DpTukKXY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cdf08mTY.js";import"./ToggleButton-thsHvfvo.js";import"./SuggestionItem-DTQvckjF.js";import"./index-ELus8qX5.js";import"./Option-DXP4vaIt.js";import"./index-CFE2kaqi.js";import"./SegmentedButton-D06YwmLr.js";import"./index-DWgfJtdr.js";import"./Select-De2if4z3.js";import"./InvisibleMessage-o07I0X4N.js";import"./slim-arrow-down-0jmMhJdt.js";import"./index-CozhcB3v.js";import"./index-BZ0o2qqh.js";import"./index-CXra9vNC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dls4AF5y.js";import"./group-2-Ma5EVCia.js";import"./sort-descending-BF50DcYy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KIunXsJC.js";import"./utils-SZqKSCgS.js";import"./index-BZsvxOnv.js";import"./index-Ny09u-cK.js";import"./index-DN3Jh2GN.js";import"./navigation-down-arrow-CCcXbr-Q.js";import"./navigation-right-arrow-RU6yhQUV.js";import"./navigation-right-arrow-B-ZYLR3_.js";import"./useCurrentTheme-O1jykDcm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrYqG4yl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-a4IOgjsv.js";import"./paper-plane-C8TajgYr.js";import"./index-BGtGU4dE.js";import"./less-CbCfyPoa.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
