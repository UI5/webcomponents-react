import{j as t}from"./iframe-D1Ed_P25.js";import{useMDXComponents as n}from"./index-BFLewEmr.js";import{I as i,F as m}from"./CommandsAndQueries-DkK8PXt_.js";import{M as p,C as s}from"./blocks-D0qmmV7H.js";import"./Tag-c5FmtIVB.js";import"./index-CUd6ir2B.js";import"./copy-D1Lui3xc.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DMCM_6uC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyMezxCx.js";import"./index-BiMr4Loi.js";import"./index-BiKUdEyp.js";import"./Link-Bd6EkD5P.js";import"./index-F4shrftk.js";import"./index-RNnJdIaH.js";import"./index-ClmEJuF6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJfOjK1K.js";import"./addCustomCSSWithScoping-DIxW6xjd.js";import"./index-RMrg5o5S.js";import"./information-CLHcsZFK.js";import"./sys-enter-2-uCDsFGT8.js";import"./alert-DcriM5I3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-EBNozTnx.js";import"./delete-Dk0J6CEz.js";import"./settings-D_OQdQr8.js";import"./NoData-BPkK9WTx.js";import"./IllustratedMessage-C8_Tcp5E.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-tEUMgFSt.js";import"./index-CtDslHHK.js";import"./index-CApBczn9.js";import"./slim-arrow-down-TNdCGHP4.js";import"./Input-5rI7b6hj.js";import"./ResponsivePopoverCommon.css-DU4YlHAZ.js";import"./ValueStateMessage.css-CpZa25G1.js";import"./Suggestions.css-3H0-Mr0d.js";import"./ListBoxItemGroupTemplate-CLzBP0c4.js";import"./ComboBoxItemGroup-ApNNq_Wu.js";import"./ListItemBaseTemplate-BkyyzXaB.js";import"./Token-GhjVhKgK.js";import"./ScrollEnablement-DPfv31gz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CNwMXV6a.js";import"./ToggleButton-BS5T7rCY.js";import"./SuggestionItem-DoeL3bWo.js";import"./index-BNdfddNi.js";import"./Option-CyUNWJFn.js";import"./index-CldnWdDQ.js";import"./SegmentedButton-DC3FvJhw.js";import"./index-BUEI2z_e.js";import"./Select-BMILMPUT.js";import"./InvisibleMessage-p9R4CYhZ.js";import"./slim-arrow-down-BaGZSBDW.js";import"./index-bV7fjiFL.js";import"./index-D2IOf4UP.js";import"./index-Df7H6xNj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYgtls1N.js";import"./group-2-B_pp8cML.js";import"./sort-descending-CW9bvIgk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BrqVegQT.js";import"./utils-DLeru89e.js";import"./index-BGXOG_IF.js";import"./index-B31uJoco.js";import"./index-gdwBT8aW.js";import"./navigation-down-arrow-DZXVk8IE.js";import"./navigation-right-arrow-C_fhDzfE.js";import"./navigation-right-arrow-Dqne7Ju2.js";import"./useCurrentTheme-BqKoaCVT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DOrMKtSR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DSdrd2Bt.js";import"./paper-plane-C6yqeebk.js";import"./index-DyNYfJ6H.js";import"./less-wxSG9IpH.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
