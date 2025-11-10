import{j as t}from"./iframe-DQwRYUbX.js";import{useMDXComponents as n}from"./index-vjXmNDkF.js";import{I as i,F as m}from"./CommandsAndQueries-R5zgQe7_.js";import{M as p,C as s}from"./blocks-1vj7sSP-.js";import"./Tag-Bdxh15UZ.js";import"./index-BpYg0Kr8.js";import"./copy-f1OrbY2r.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DxmrzwBB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKyjFioH.js";import"./index-BFkPs8ZC.js";import"./index-CKWavmbi.js";import"./Link-CbfnLrLH.js";import"./index-PC8Kunji.js";import"./index-DPLN1GXU.js";import"./index-CcZnr9i8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bm5JhsBg.js";import"./addCustomCSSWithScoping-B4GQYg_M.js";import"./index-Brhb0SYT.js";import"./information-CU2Cyzgy.js";import"./sys-enter-2-BkaREG8L.js";import"./alert-BlLCWEro.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-uKpDdS3L.js";import"./delete-rnQJPOPy.js";import"./settings-BplO8nVC.js";import"./NoData-BudcZjcL.js";import"./IllustratedMessage-BDrkWOIJ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DMOQHPac.js";import"./index-BkwLtZth.js";import"./index-8rYUN_F9.js";import"./slim-arrow-down-C3zmYEnY.js";import"./Input-SpzJURTk.js";import"./ResponsivePopoverCommon.css-CkBrsDgT.js";import"./ValueStateMessage.css-PgRMx7qS.js";import"./Suggestions.css-CcojFhMW.js";import"./ListBoxItemGroupTemplate-BpQl_a-R.js";import"./ComboBoxItemGroup-CteEcdR1.js";import"./ListItemBaseTemplate-DPU_YRkw.js";import"./Token-Re46_rx8.js";import"./ScrollEnablement-DpgIweVK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cgm9Qe--.js";import"./ToggleButton-BaSVpxBV.js";import"./SuggestionItem-BX6mvv5E.js";import"./index-B1FFgBKL.js";import"./Option-DvL6van7.js";import"./index-BFXuzaYf.js";import"./SegmentedButton-BhmyYIax.js";import"./index-B0KukDf_.js";import"./Select-DsMXMd52.js";import"./InvisibleMessage-BxtAo5W7.js";import"./slim-arrow-down-DBZCUMdq.js";import"./index-CDIvwhbT.js";import"./index-DerlPBZF.js";import"./index-Ct1qWrRW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-wsvm96Md.js";import"./group-2-smWhv9vQ.js";import"./sort-descending-C26Eugr8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cgy9ImwA.js";import"./utils-CmLJbiVg.js";import"./index-C84cRBie.js";import"./index-C8IvOXFf.js";import"./index-BnWSur9b.js";import"./navigation-down-arrow-B5IuEH7K.js";import"./navigation-right-arrow-ClmouZCW.js";import"./navigation-right-arrow-DbNWGTXI.js";import"./useCurrentTheme-B0aKCv4_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CdDfKFMR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-19H7psJ7.js";import"./paper-plane-z49PxhFi.js";import"./index-B7Ag24YK.js";import"./less-BbgNbxOE.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
