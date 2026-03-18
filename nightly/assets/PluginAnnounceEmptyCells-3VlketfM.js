import{j as t}from"./iframe-DMsBkhV6.js";import{useMDXComponents as i}from"./index-DRmP5vAG.js";import{I as n}from"./CommandsAndQueries-DpukJ1Hp.js";import{M as m,C as p}from"./blocks-DLa5hkYX.js";import"./Tag-BmcB_JoS.js";import"./index-DCIOC28Z.js";import"./copy-CD95AZM0.js";import{F as s}from"./Footer-BOw4Z5DY.js";import"./PageNotFound-DjLaegFZ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D2IcS3ZP.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CSEVwGcN.js";import"./index-Bz_iFKqi.js";import"./index-bqOHt3_F.js";import"./index-Ct0KsXWt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSKWwKcd.js";import"./addCustomCSSWithScoping-BbL9ROxJ.js";import"./index-DsnyfM-a.js";import"./index-D8IUoaKA.js";import"./index-CsdED7a8.js";import"./information-B9kPmlYt.js";import"./sys-enter-2-DFXWrXkU.js";import"./alert-BM02Ke2L.js";import"./index-BzYJTbyT.js";import"./Illustrations-BuKaE0Lu.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ueS9H92b.js";import"./delete-CHTfP-Kt.js";import"./settings-BLF4w1HS.js";import"./NoData-DlSNP7WF.js";import"./NoFilterResults-Cjyj15R0.js";import"./index-2yg_p-0e.js";import"./IllustratedMessage-etYmXr5W.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BJqBraCz.js";import"./Input-Uf7jhdsj.js";import"./ResponsivePopoverCommon.css-BkDEP9by.js";import"./ValueStateMessage.css-BOfdrSqA.js";import"./Suggestions.css-CGPwNADp.js";import"./ListBoxItemGroupTemplate-_0Dwsw5E.js";import"./ComboBoxItemGroup-DaTElG3f.js";import"./ListItemBaseTemplate-YIQ1K6S5.js";import"./Token-ZdRf4EiI.js";import"./ScrollEnablement-COba7ibi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DrpX4RCW.js";import"./ToggleButton-CrhejzgI.js";import"./multiselect-all-D_WUNEQL.js";import"./SuggestionItem-CAv3FUFe.js";import"./index-ohvCQnZa.js";import"./Option-CaNyZKGp.js";import"./index-C3f11o7B.js";import"./SegmentedButton-B1wjIz-p.js";import"./index-B5ufxdTz.js";import"./Select-CbPjmsG8.js";import"./InvisibleMessage-DRj0d5Uv.js";import"./index-9vqhJGXS.js";import"./index-DLUlNmzM.js";import"./index-BNhRrdmr.js";import"./index-BYW_tyTv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CM4efI86.js";import"./group-2-BPP57I-Z.js";import"./sort-descending-DmVlxwNX.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAZhX22Y.js";import"./utils-DLVR_ZqH.js";import"./index-BhKQSOJa.js";import"./index-DLPYNRsQ.js";import"./index-BVEb-vDJ.js";import"./navigation-down-arrow-B5mwPXMM.js";import"./navigation-right-arrow-DD2gNJ11.js";import"./navigation-right-arrow-X6oG7L7N.js";import"./useCurrentTheme-BVLXkGO3.js";import"./index-I52ieGsq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D_v8Eyxn.js";import"./paper-plane-DZMdtTIa.js";import"./index-D8XrUqKf.js";import"./less-mQfVbBaX.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
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
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
