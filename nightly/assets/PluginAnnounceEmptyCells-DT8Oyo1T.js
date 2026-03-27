import{j as t}from"./iframe-GiALwnwk.js";import{useMDXComponents as i}from"./index-D5Br25pp.js";import{I as n}from"./CommandsAndQueries-C_IHadBx.js";import{M as m,C as p}from"./blocks-CWQEoHYq.js";import"./Tag-LkaAJwXo.js";import"./index-Df-74Kk_.js";import"./copy-BjtWQX8c.js";import{F as s}from"./Footer-CTpmUzQu.js";import"./PageNotFound-lhidYwaf.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C0drGsRM.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cl18BXak.js";import"./index-j7N-4kUz.js";import"./index-DsAl_UTx.js";import"./index-Q6Oco0u-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3O-UdkwG.js";import"./addCustomCSSWithScoping-DYkoSNAv.js";import"./index-C2OBDsL0.js";import"./index-_Dwwjvl6.js";import"./index-D48RNIki.js";import"./information-DVV2_7m2.js";import"./sys-enter-2-BLXa0HBj.js";import"./alert-C-pLX4kq.js";import"./index-DmWjxGkj.js";import"./Illustrations-OXUCAhva.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C6gOy1mt.js";import"./delete-DW7iMKa4.js";import"./settings-DhekAkc-.js";import"./NoData-Ck7AmFs7.js";import"./NoFilterResults-Bdr0pWK1.js";import"./index-CSqY6oqd.js";import"./IllustratedMessage-CWorwHI8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-XPdaETP2.js";import"./Input-CAEdEQYs.js";import"./ResponsivePopoverCommon.css-Dd9wsj0Z.js";import"./ValueStateMessage.css-CsbnVp72.js";import"./Suggestions.css-Dyj9iu2Q.js";import"./ListBoxItemGroupTemplate-D9WXmJvJ.js";import"./ComboBoxItemGroup-D_9tYabb.js";import"./ListItemBaseTemplate-GKtph4El.js";import"./Token-DqvIjy0G.js";import"./ScrollEnablement-Dfwd2yQV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CmNegGRy.js";import"./ToggleButton-CNcKoSZH.js";import"./multiselect-all-D9lBPv0A.js";import"./SuggestionItem-Cg2rZPAd.js";import"./index-CicHf-ly.js";import"./Option-BhicZcBl.js";import"./index-BbmFzA7n.js";import"./SegmentedButton-CFgw25ym.js";import"./index-COLQUQjD.js";import"./Select-wAYP5Lkd.js";import"./InvisibleMessage-C6bw_76w.js";import"./index-UQ8-K6Hp.js";import"./index-DdEYvRu2.js";import"./index-DBmUjfqO.js";import"./index-CSIhU0w2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CTpqP-um.js";import"./group-2-CYIXDJv4.js";import"./sort-descending-DYYr51Ys.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C8KGwsoJ.js";import"./utils-CfCxZg4A.js";import"./index-Bsb-fTU5.js";import"./index-CKCwf71g.js";import"./index-1SgfqZTS.js";import"./navigation-down-arrow-Dw3dfCIj.js";import"./navigation-right-arrow-CIGq5ecr.js";import"./navigation-right-arrow-C6hsZ--E.js";import"./useCurrentTheme-Bp92R9Yj.js";import"./index-BiTyXHR_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-EHylbWiC.js";import"./paper-plane-BcYb5zY2.js";import"./index-WUkGkR3K.js";import"./less-BKVo8B_X.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
