import{j as t}from"./iframe-B8dw45Pm.js";import{useMDXComponents as i}from"./index-CDTgJgbW.js";import{I as n}from"./CommandsAndQueries-Bl0bAz-u.js";import{M as m,C as p}from"./blocks-CPHZ0sq-.js";import"./Tag-WXORlQvy.js";import"./index-D7N30NY8.js";import"./copy-KGIzxzBV.js";import{F as s}from"./Footer-DGDb1ilk.js";import"./PageNotFound-DfoC1Yw_.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-RgBDOPDd.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BB11RQL1.js";import"./index-C46a650J.js";import"./index-BGlbQvkZ.js";import"./index-QyvR-n2-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1CIx6RM.js";import"./addCustomCSSWithScoping-CsB8TxAm.js";import"./index-DOUsK0Sd.js";import"./index-6NVZEy4N.js";import"./index-DMbxZG4m.js";import"./information-SmgVOr7y.js";import"./sys-enter-2-CP5yuJAd.js";import"./alert-8CVWRnEr.js";import"./index-S966bfr_.js";import"./Illustrations-Df2_smGK.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BidkkRmv.js";import"./delete-BZJ6IUvv.js";import"./settings-B6wZytM7.js";import"./NoData-BUS2UBU9.js";import"./NoFilterResults-jB3EY9FE.js";import"./index-CsGQVrVS.js";import"./IllustratedMessage-Db95xz8S.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-zKJrkqf2.js";import"./Input-DbCtg-3t.js";import"./ResponsivePopoverCommon.css-C-gN5NTO.js";import"./ValueStateMessage.css-D9UCc8Z-.js";import"./Suggestions.css-CdKXXl_R.js";import"./ListBoxItemGroupTemplate-C-8z5r-p.js";import"./ComboBoxItemGroup-BVTa3qQ4.js";import"./ListItemBaseTemplate-F5Kzrq16.js";import"./Token-BmxSoTRq.js";import"./ScrollEnablement-D1x-dzeA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2eamaf3.js";import"./ToggleButton-D20aF6qv.js";import"./multiselect-all-DqnfVi1W.js";import"./SuggestionItem-DjkrwIhA.js";import"./index-BDSWlRed.js";import"./Option-B6Dpr6jo.js";import"./index-DCu3NKJW.js";import"./SegmentedButton-B9mtat3Y.js";import"./index-C-oOO5rJ.js";import"./Select-BCQ8hRSI.js";import"./InvisibleMessage-DbReB1VG.js";import"./index-BrzIBMwv.js";import"./index-BibcwOaq.js";import"./index-CMSw6EyH.js";import"./index-B_Jr5JgK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BUM7m7qO.js";import"./group-2-CSZUjswS.js";import"./sort-descending-CjviAhWU.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DmjBGCYy.js";import"./utils-DNuiF_K5.js";import"./index-DHfnvRLb.js";import"./index-DKSRGGEL.js";import"./index-Bjh-kMUz.js";import"./navigation-down-arrow-SQxN7jii.js";import"./navigation-right-arrow-DLo6eUJB.js";import"./navigation-right-arrow-BdBKLkX8.js";import"./useCurrentTheme-Ler3vnfg.js";import"./index-0xKDvNxf.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DwcAc9uO.js";import"./paper-plane-CkYIVFEz.js";import"./index-CO9JJlg2.js";import"./less-B347_aem.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
