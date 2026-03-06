import{j as t}from"./iframe-BsLeblbZ.js";import{useMDXComponents as i}from"./index-SmDsT-ZV.js";import{I as n}from"./CommandsAndQueries-BIrmUykn.js";import{M as m,C as p}from"./blocks-MuC3nZ17.js";import"./Tag-YXcZfnM7.js";import"./index-RHsqj3O6.js";import"./copy-D-f_NdBO.js";import{F as s}from"./Footer-Bbw4uFwB.js";import"./PageNotFound-DD-eOCZR.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-0t2926fT.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CBQ0neVT.js";import"./index-B-MH-ZOH.js";import"./index-B9PkCo2j.js";import"./index-Hl67y25M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtKzQDtt.js";import"./addCustomCSSWithScoping-BnenMixx.js";import"./index-Xah-ddNA.js";import"./index-BxpRwQAU.js";import"./index-B-umVgsK.js";import"./information-CyWeW3Ip.js";import"./sys-enter-2-0MhMJNjS.js";import"./alert-CqXBa80-.js";import"./index-DOfJ-lzX.js";import"./Illustrations-BpmOpW1L.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-QeeLFXcn.js";import"./delete-H1wy-dws.js";import"./settings-BRGEmTQw.js";import"./NoData-B8XN3MPs.js";import"./NoFilterResults-DI880b84.js";import"./index-CZvIeLL2.js";import"./IllustratedMessage-CH-k7_PO.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-NHMxkGm6.js";import"./Input-DlcD5Uyx.js";import"./ResponsivePopoverCommon.css-BnR9PF5c.js";import"./ValueStateMessage.css-DaaMCoGD.js";import"./Suggestions.css-B26HkXef.js";import"./ListBoxItemGroupTemplate-sBYZNQZ5.js";import"./ComboBoxItemGroup-CuM1vEgu.js";import"./ListItemBaseTemplate-BujdvxYW.js";import"./Token-BR8sMvH4.js";import"./ScrollEnablement-B2JTzChl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BbebGmy4.js";import"./ToggleButton-Bl3lFzoi.js";import"./multiselect-all-BD4wic1E.js";import"./SuggestionItem-vuP3MGZZ.js";import"./index-BvwE5Rkd.js";import"./Option-DZ9JQFne.js";import"./index-CQYX8dtL.js";import"./SegmentedButton-BbLb6Y2D.js";import"./index-YCEkTVk1.js";import"./Select-ogMEAbmp.js";import"./InvisibleMessage-BLe6-QWs.js";import"./index-DGD-6Hrk.js";import"./index-BkVdLcoI.js";import"./index-DSLM2F3N.js";import"./index-dvi0XJ6b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Q5KFLZa5.js";import"./group-2-C_-z-OIk.js";import"./sort-descending-B6mPd9eW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B918Q3Uk.js";import"./utils-B5VYX2T8.js";import"./index-tW-oUBSO.js";import"./index-DyHDKnOu.js";import"./index-CRwwj1G-.js";import"./navigation-down-arrow-C2Qg1J8L.js";import"./navigation-right-arrow-Br3RPqB8.js";import"./navigation-right-arrow-CO2v9vy4.js";import"./useCurrentTheme-BggGoIM4.js";import"./index-D0RBnp-L.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BkunmVQ4.js";import"./paper-plane-iOffuwQ2.js";import"./index-CIjtFDg8.js";import"./less-e75wAmAF.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
