import{j as t}from"./iframe-CDzsgyAV.js";import{useMDXComponents as n}from"./index-DP2UBTat.js";import{I as i,F as m}from"./CommandsAndQueries-CpE7A47V.js";import{M as p,C as s}from"./blocks-CJQxsMoI.js";import"./Tag-CH-8xgRY.js";import"./index-B8A9WhwY.js";import"./copy-DpKoQtQP.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Kp7F4hlK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CLSChxqE.js";import"./index-C2LW5088.js";import"./index-2og1ClCO.js";import"./Link-Dp8FrNqY.js";import"./index-Df65psIj.js";import"./index-CiXhxUFY.js";import"./index-BToOU55N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_XXs48A.js";import"./addCustomCSSWithScoping-B27SJBwy.js";import"./index-spzGnsRF.js";import"./information-DHwZAzkU.js";import"./sys-enter-2-DVWP7zgo.js";import"./alert-Fp8ziM7f.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqJHcQPH.js";import"./delete-B-gvuqdd.js";import"./settings-Cbcjyv0Y.js";import"./NoData-BVNfqJsM.js";import"./IllustratedMessage-BN1Iq_3M.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-1Ys1t75g.js";import"./index-CocUjDH_.js";import"./index-BfKLxC4E.js";import"./slim-arrow-down-DLRwTtbe.js";import"./Input-8H7TX9aj.js";import"./ResponsivePopoverCommon.css-C3wd2k-W.js";import"./ValueStateMessage.css-By_XiJ9I.js";import"./Suggestions.css-DDpMPLES.js";import"./ListBoxItemGroupTemplate-C8MMY61P.js";import"./ComboBoxItemGroup-PpcOoMvo.js";import"./ListItemBaseTemplate-CpMpzE59.js";import"./Token-jxrfpM-J.js";import"./ScrollEnablement-BI3MOl7l.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ByK6mU7F.js";import"./ToggleButton-B4Zc3HFl.js";import"./SuggestionItem-DkSNk8yh.js";import"./index-B4Od3Z_Y.js";import"./Option-NU9oW0-i.js";import"./index-BCP42iFG.js";import"./SegmentedButton-BqnPadO7.js";import"./index-BEm3lM4_.js";import"./Select-DJG9BRVU.js";import"./InvisibleMessage-D6G5X2tZ.js";import"./slim-arrow-down-DSlsBY-p.js";import"./index-CuyuI2Pj.js";import"./index-C1m5zeZ5.js";import"./index-DnHq6C4h.js";import"./IconDesign-DXd8PPVF.js";import"./filter-YSMvOGtw.js";import"./group-2-BwQpX0hB.js";import"./sort-descending-Blt3aqTU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BiSHSe0e.js";import"./utils-Cd-ANK3A.js";import"./index-DenP7o8A.js";import"./index-BE-YPQF4.js";import"./index-8HAhpbda.js";import"./navigation-down-arrow-DYP-nqAT.js";import"./navigation-right-arrow-CKdG0KzH.js";import"./navigation-right-arrow-Cx1TVxnH.js";import"./useCurrentTheme-LfUWuXTs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Y04S_ZXo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Do2kY7uP.js";import"./paper-plane-TdqVc7nZ.js";import"./index-CZeAmPhe.js";import"./less-Xdu5yIez.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
