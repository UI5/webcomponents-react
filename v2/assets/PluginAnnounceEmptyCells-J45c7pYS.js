import{j as t}from"./iframe-Dt3EMGkV.js";import{useMDXComponents as n}from"./index-B20WHrxF.js";import{I as i,F as m}from"./CommandsAndQueries-B8G4x6Z0.js";import{M as p,C as s}from"./blocks-BHc609zj.js";import"./Tag-BlFr4TrL.js";import"./index-4o5lIxTZ.js";import"./copy-CTtd4S6z.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DlmuqfHS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwsDjCru.js";import"./index-DYPFLkL0.js";import"./index-B13Eko7E.js";import"./Link-BFnbyO9N.js";import"./index-3ZVLHlpm.js";import"./index-ChSomlCw.js";import"./index-CGnaTP2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DIflbpx1.js";import"./addCustomCSSWithScoping--L6xjApc.js";import"./index-BTxuEF3n.js";import"./information-CdIvcuNT.js";import"./sys-enter-2-DUO5Ca52.js";import"./alert-AiSO8uTO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BXYYz_X6.js";import"./delete-CvK1FKxI.js";import"./settings-CVPUgzNe.js";import"./NoData-JwmSOzMe.js";import"./IllustratedMessage-CAmtVAA-.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B__4zQr4.js";import"./index-CYj9BOV8.js";import"./index-DNYTFpAf.js";import"./slim-arrow-down-pu6c9dFU.js";import"./Input-B3RJG3gm.js";import"./ResponsivePopoverCommon.css-aexR0yTU.js";import"./ValueStateMessage.css-yur_ejCi.js";import"./Suggestions.css-CLQcfKgH.js";import"./ListBoxItemGroupTemplate-CJgkBchq.js";import"./ComboBoxItemGroup-BSH89920.js";import"./ListItemBaseTemplate-BkUkk_X3.js";import"./Token-_e7dShod.js";import"./ScrollEnablement-CiA5ZjlZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dag2Pm4v.js";import"./ToggleButton-CebUIFNy.js";import"./SuggestionItem-4j5PUDIr.js";import"./index-By_4N1WL.js";import"./Option-C4-0WVuO.js";import"./index-C_4eaVm1.js";import"./SegmentedButton-Mnc5qxs7.js";import"./index-Z3zYgv8B.js";import"./Select-mMA7a--l.js";import"./InvisibleMessage-IeyuxUiP.js";import"./slim-arrow-down-BCpPF8dH.js";import"./index-CgfRqUmo.js";import"./index-2aEaKjNa.js";import"./index-BBLdtj_k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DvZOI5Qd.js";import"./group-2-CGfMPej9.js";import"./sort-descending-CrdG7dJf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D_NFJJg0.js";import"./utils-Dc3BExB0.js";import"./index-0ObJ8zA9.js";import"./index-DeXKqVJU.js";import"./index-CCZOqJvN.js";import"./navigation-down-arrow-CM9oa_p2.js";import"./navigation-right-arrow-DgXFepz4.js";import"./navigation-right-arrow-BkvomJoX.js";import"./useCurrentTheme-BjJaTJFz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DmvUDyzO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CtE2suF5.js";import"./paper-plane-LVrZWN71.js";import"./index-BKPK1xED.js";import"./less-DwozNvkG.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
