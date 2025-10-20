import{j as t}from"./iframe-BFWc6ije.js";import{useMDXComponents as n}from"./index-DIwiR8-R.js";import{I as i,F as m}from"./CommandsAndQueries-RvyhHzLx.js";import{M as p,C as s}from"./blocks-_C0Ko-FB.js";import"./Tag-BlcbvGrz.js";import"./index-S-jzd0og.js";import"./copy-B0915CdE.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DMwZPbok.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWXRaFCB.js";import"./index-BJhTX5aa.js";import"./index-Ammjaz44.js";import"./Link-C0nE2LNS.js";import"./index-D6ti5Aap.js";import"./index-BNrsjj3y.js";import"./index-BeiCFHJ0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NyszqC-C.js";import"./addCustomCSSWithScoping-DHZr8-1Q.js";import"./index-DYh3DUHT.js";import"./information-gUiWTFs7.js";import"./sys-enter-2-Czjj6c4O.js";import"./alert-Dwrii-iz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-2a6sZTKt.js";import"./delete-GLZPXNIt.js";import"./settings-Bl3VKOzY.js";import"./NoData-D1FNpf90.js";import"./IllustratedMessage-Col1197V.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BHuYeTyV.js";import"./index-DgCS7Nk3.js";import"./index-SZqCzEgh.js";import"./slim-arrow-down-Dv1ZFOOG.js";import"./Input-BTIWHmaN.js";import"./ResponsivePopoverCommon.css-c4jpBfVX.js";import"./ValueStateMessage.css-C8t0n2is.js";import"./Suggestions.css-Cj5eaUvh.js";import"./ListBoxItemGroupTemplate--RkL3eX-.js";import"./ComboBoxItemGroup-CvfuwnhX.js";import"./ListItemBaseTemplate-DWiE6hVW.js";import"./Token-RwPCKO7L.js";import"./ScrollEnablement-BS-59KGT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-3Dr6elZ5.js";import"./ToggleButton-NLglJiSM.js";import"./SuggestionItem-B18x_0Bw.js";import"./index-_nYMLiJq.js";import"./Option-BCCI7jGA.js";import"./index-DYvMbD0V.js";import"./SegmentedButton-2c88fWgR.js";import"./index-IKSBMBYh.js";import"./Select-DGk89UWd.js";import"./InvisibleMessage-gz9Baj7W.js";import"./slim-arrow-down-DbgE6iuN.js";import"./index-RsMAEwo8.js";import"./index-DNOnKtp6.js";import"./index-fezgehlA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTa28ct7.js";import"./group-2-1vH7OeUe.js";import"./sort-descending-6IaS3sEK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8A7JpsJT.js";import"./utils-_MgrmSbV.js";import"./index-CFTVOaaJ.js";import"./index-c-viX2G1.js";import"./index-Tigp63LJ.js";import"./navigation-down-arrow-C3oL93Ku.js";import"./navigation-right-arrow-D0tZtsPJ.js";import"./navigation-right-arrow-OUJD2N61.js";import"./useCurrentTheme-BdY6233y.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bfz-LgXH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DrH-Pm0z.js";import"./paper-plane-CCOFurtH.js";import"./index-BqcaYpg7.js";import"./less-BXPL7yK5.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
