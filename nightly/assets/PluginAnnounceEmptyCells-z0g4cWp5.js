import{j as t}from"./iframe-COnm-5Wq.js";import{useMDXComponents as n}from"./index-BScb0EKa.js";import{I as i,F as m}from"./CommandsAndQueries-fIm6tI_s.js";import{M as p,C as s}from"./blocks-DdnCkDeP.js";import"./Tag-B6PukD9x.js";import"./index-DuYLDSkg.js";import"./copy-qxwrkOPO.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BPXkUY3a.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Be7TM_X2.js";import"./index-P97YIdW0.js";import"./index-nBIeIwBJ.js";import"./Link-HYZaoUUQ.js";import"./index-B7Tpi00A.js";import"./index-AzkmjRNO.js";import"./index-D0jCTq5s.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BgIs3PmD.js";import"./addCustomCSSWithScoping-6qkiGAQG.js";import"./index-CEwTdt5x.js";import"./information-B-WRmTFj.js";import"./sys-enter-2-CoP1Serd.js";import"./alert-CyV5UnQC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZIK-Rls1.js";import"./delete-CstNP39o.js";import"./settings-B6aW8T1K.js";import"./NoData-C_Tt_a6V.js";import"./IllustratedMessage-D5qW_4Mw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BjMAgFLJ.js";import"./index-CZs2DsiV.js";import"./index-D0dk6VOY.js";import"./slim-arrow-down-3pnIuBHq.js";import"./Input-IFtsbt_3.js";import"./ResponsivePopoverCommon.css-CcP_WrIC.js";import"./ValueStateMessage.css-BFPsrOD8.js";import"./Suggestions.css-DD-tyscS.js";import"./ListBoxItemGroupTemplate-s02oSqvp.js";import"./ComboBoxItemGroup-BRC6L9Sm.js";import"./ListItemBaseTemplate-9M8GkXzY.js";import"./Token-DosFgNlL.js";import"./ScrollEnablement-DxmmW8DX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BhUgq0GU.js";import"./ToggleButton-Dgsm-QJP.js";import"./SuggestionItem-CJz2OlH9.js";import"./index-v8SH84Mn.js";import"./Option-C0Ypih71.js";import"./index-BNluZkA_.js";import"./SegmentedButton-Cl6x6Obn.js";import"./index-BpjRrguz.js";import"./Select-YsyZoFbn.js";import"./InvisibleMessage-B1Y0A4_S.js";import"./slim-arrow-down-DL9BpCuU.js";import"./index-CEB-ApWT.js";import"./index-D25d4E5j.js";import"./index-BBBvNHMK.js";import"./index-DZ_u1ZQX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D8SXkPNK.js";import"./group-2-CmBZ8zLm.js";import"./sort-descending-DqYeqtsl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Du1BrkM7.js";import"./utils-CotoRCsU.js";import"./index-Db5QhTIJ.js";import"./index-CDNkck04.js";import"./index-B5Rbqc3j.js";import"./navigation-down-arrow-BZPJPqDn.js";import"./navigation-right-arrow-BHQhwyzy.js";import"./navigation-right-arrow-B18OD9Dt.js";import"./useCurrentTheme-BcF7vgZS.js";import"./index-BmHYBzvc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CKV0TO4b.js";import"./paper-plane-B9f3FIfR.js";import"./index-BDppF75s.js";import"./less-DNrWl_5o.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
