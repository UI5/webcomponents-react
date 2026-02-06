import{j as t}from"./iframe-D_72XrxV.js";import{useMDXComponents as n}from"./index-66RF5jzG.js";import{I as i,F as m}from"./CommandsAndQueries-B5MqblA3.js";import{M as p,C as s}from"./blocks-Cdh_AmAk.js";import"./Tag-FVV8VuJS.js";import"./index-CeLdj5R8.js";import"./copy-jn1S9mhy.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CDy71CRU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtHwk6MR.js";import"./index-B5YLKK6V.js";import"./index-DC83-RSZ.js";import"./Link-BEWshBTo.js";import"./index-DhXDNTqP.js";import"./index-CawoDp7x.js";import"./index-DXJ6eoJD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jUCNgYAQ.js";import"./addCustomCSSWithScoping-CVFgCYWk.js";import"./index-DkMaspDs.js";import"./information-C_2BZUqW.js";import"./sys-enter-2-C5Wnyt7l.js";import"./alert-CbokyiOI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Csj2HO8L.js";import"./delete-CeOcUIER.js";import"./settings-Cn5wwyPF.js";import"./NoData-PopUoBYo.js";import"./IllustratedMessage-DZ41JI5v.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CTXQ89WT.js";import"./index-Bu9F4FMc.js";import"./index-BXLU2QyI.js";import"./slim-arrow-down-4pwOw1KN.js";import"./Input-ctWP6EpA.js";import"./ResponsivePopoverCommon.css-CXO0egQQ.js";import"./ValueStateMessage.css-BtHvb9Z3.js";import"./Suggestions.css-Dcnh6jB1.js";import"./ListBoxItemGroupTemplate-DHFu76gC.js";import"./ComboBoxItemGroup-CZO-aXf1.js";import"./ListItemBaseTemplate-DCTXILqJ.js";import"./Token-CAt0kzvm.js";import"./ScrollEnablement-yQTiHpLV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DNgCtY9E.js";import"./ToggleButton-BNhJm5oM.js";import"./SuggestionItem-B4SVsFoO.js";import"./index-BXyhN-98.js";import"./Option-BNEZgQiG.js";import"./index-CQ46V3BB.js";import"./SegmentedButton-BDhAyQvz.js";import"./index-Cz4hAL11.js";import"./Select-CdrF46G-.js";import"./InvisibleMessage-DtML4eYo.js";import"./slim-arrow-down-CwKrWZlT.js";import"./index-CGCbfSVl.js";import"./index-rD0q-lzh.js";import"./index-CeS7n61h.js";import"./index-DGCvl-Xm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BH8RStDa.js";import"./group-2-ep49yjAi.js";import"./sort-descending-DxUdn13J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZ2gbzTy.js";import"./utils-BWLKg-TT.js";import"./index-BHGBSUlQ.js";import"./index-GvIpKsjG.js";import"./index-5Qz0hHSk.js";import"./navigation-down-arrow-B9jvvqZn.js";import"./navigation-right-arrow-BfmQEaOh.js";import"./navigation-right-arrow-IOAC3A0T.js";import"./useCurrentTheme-B97NpVFX.js";import"./index-BUtpH4Q1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DwZ1F38u.js";import"./paper-plane-Dv362znJ.js";import"./index-DPiIKAxE.js";import"./less-C7rJWOWo.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
