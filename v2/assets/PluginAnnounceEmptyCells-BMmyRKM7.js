import{j as t}from"./iframe-BoiPRijN.js";import{useMDXComponents as i}from"./index-BRummw3t.js";import{I as n}from"./CommandsAndQueries-BnJUOm3t.js";import{M as m,C as p}from"./blocks-CPrA8iQB.js";import"./Tag-B1iwkrJ0.js";import"./index-BTDY8alR.js";import"./copy-Dvt_rD-U.js";import{F as s}from"./Footer-iiNA2dGD.js";import"./PageNotFound-MgXkehwz.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DejHcveP.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CFo8_Djp.js";import"./index-BQY5khtD.js";import"./index-Jd5qJzJh.js";import"./index-DlyFbgdQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpV6XLVk.js";import"./addCustomCSSWithScoping-DTHpZRZB.js";import"./index-C15uyf0A.js";import"./index-BP_Slc-J.js";import"./index-dkrwuiwP.js";import"./information-BC9xfD2K.js";import"./sys-enter-2-CswPN__J.js";import"./alert-BvdiGKEq.js";import"./index-XewTnCmy.js";import"./Illustrations-CKlojL9Q.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-K5LglML7.js";import"./delete-Dla_cBMd.js";import"./settings--JyTse2K.js";import"./NoData-CEvC9SOK.js";import"./NoFilterResults-DGK3vz5s.js";import"./index-CUqI6XWZ.js";import"./IllustratedMessage-CUsnh6ic.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DTx62md9.js";import"./Input-BAuxatca.js";import"./ResponsivePopoverCommon.css-ujru0ghE.js";import"./ValueStateMessage.css-DEzEaU54.js";import"./Suggestions.css-xOjhYq7i.js";import"./ListBoxItemGroupTemplate-CaVscpMh.js";import"./ComboBoxItemGroup-qmXelGMa.js";import"./ListItemBaseTemplate-C5eauqC9.js";import"./Token-BjoEP2YG.js";import"./ScrollEnablement-DLJduNw8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ChcK6bsg.js";import"./ToggleButton-BGrpVUlG.js";import"./multiselect-all-M_uaembb.js";import"./SuggestionItem-CSav1c2B.js";import"./index-SHA1M5Y_.js";import"./Option-ViXAl4Kq.js";import"./index-x26HLP5K.js";import"./SegmentedButton-BSG--Us7.js";import"./index-D0HvuG0E.js";import"./Select-1bH1ueYZ.js";import"./InvisibleMessage-CXpqfns1.js";import"./index-CUzGhvMq.js";import"./index-CJrY5ywd.js";import"./index-CFdQXySd.js";import"./index-CGSreYF0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BGDbGBAq.js";import"./group-2-pBllKI8s.js";import"./sort-descending-LT_QT5Pk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BfWkv8FN.js";import"./utils-Dyu_RtUB.js";import"./index-DCXSZGzE.js";import"./index-Cx95m7EI.js";import"./index-C2zlICN6.js";import"./navigation-down-arrow-BwpxFzct.js";import"./navigation-right-arrow-BOhWzFQj.js";import"./navigation-right-arrow-DU9-hztn.js";import"./useCurrentTheme-C3dnJtDI.js";import"./index-U_qmoDgq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DETi-hVj.js";import"./paper-plane-CuIzSdKp.js";import"./index-BbjXtlM4.js";import"./less-3QagZ96S.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
