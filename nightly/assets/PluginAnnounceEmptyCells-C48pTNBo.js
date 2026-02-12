import{j as t}from"./iframe-CeYK60h5.js";import{useMDXComponents as n}from"./index-CyuETzTv.js";import{I as i,F as m}from"./CommandsAndQueries-CFbtJHwM.js";import{M as p,C as s}from"./blocks-BIKTnw0B.js";import"./Tag-C54M4ldZ.js";import"./index-CT0V1rC-.js";import"./copy-CiRkqTCy.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-e4dPoyh1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHuebsjW.js";import"./index-DCNRybmK.js";import"./index-BQVvVbng.js";import"./Link-B2AcL4ks.js";import"./index-C-Yn0AU-.js";import"./index-CaQyDWQ7.js";import"./index-DBl_V_lR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkPy33bc.js";import"./addCustomCSSWithScoping-BSnYfvCe.js";import"./index-C9AaKYqF.js";import"./information-BkZW1INs.js";import"./sys-enter-2-Bag4B31-.js";import"./alert-q5zKag_b.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Brue9bZM.js";import"./delete-BcvtETcy.js";import"./settings-5BacSR94.js";import"./NoData-DxohvE4z.js";import"./IllustratedMessage-C5nGizD-.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DCAxNV9P.js";import"./index-BQ2ppCag.js";import"./index-DvXTSSIA.js";import"./slim-arrow-down-CVGDx6dI.js";import"./Input-Cpc3WDAD.js";import"./ResponsivePopoverCommon.css-D2Os4vPx.js";import"./ValueStateMessage.css-DygseWPv.js";import"./Suggestions.css-uPHlQ0zI.js";import"./ListBoxItemGroupTemplate-CUULFd46.js";import"./ComboBoxItemGroup-3qNTHREe.js";import"./ListItemBaseTemplate-IHDN_xws.js";import"./Token-DIiTPAFv.js";import"./ScrollEnablement-BzX8rTSh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DChf4TnK.js";import"./ToggleButton-HnifA80u.js";import"./SuggestionItem-D3x38-wF.js";import"./index-1UGQ1AHt.js";import"./Option-DheRIPLY.js";import"./index-BoIm-xs6.js";import"./SegmentedButton-C-FghxIk.js";import"./index-eQnZgMgj.js";import"./Select-EZ5UJa2T.js";import"./InvisibleMessage-BjsU8t7h.js";import"./slim-arrow-down-B3EB9Tld.js";import"./index-DGapjW98.js";import"./index-ZeQWpjUk.js";import"./index-BGapk1v_.js";import"./index-Bo5Q1SBc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DABH-sQq.js";import"./group-2-DEn7mrnO.js";import"./sort-descending-aDuCK_fE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxmDL6TA.js";import"./utils-Dlyy7SNs.js";import"./index-BO4Or_uB.js";import"./index-rmJF3f6R.js";import"./index-DsmxMPC1.js";import"./navigation-down-arrow-DKptDBWM.js";import"./navigation-right-arrow-CSc3hBqU.js";import"./navigation-right-arrow-CXkdEEUV.js";import"./useCurrentTheme-Bfgyh39P.js";import"./index-C9a6OsiH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-1HgTxzEu.js";import"./paper-plane-B0eqfuay.js";import"./index-Dg2lsmGL.js";import"./less-BaBvLqfW.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
