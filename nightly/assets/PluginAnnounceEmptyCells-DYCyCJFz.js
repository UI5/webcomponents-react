import{j as t}from"./iframe-CISvTVNI.js";import{useMDXComponents as n}from"./index-bSkbOjqc.js";import{I as i,F as m}from"./CommandsAndQueries-CBtnfpxG.js";import{M as p,C as s}from"./blocks-B14xai8l.js";import"./Tag-C1M5Bqsq.js";import"./index-DomH80TU.js";import"./copy-DUVHDUg7.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CSObzMGr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3k5G3FE.js";import"./index-CTfs7RBW.js";import"./index-DqP6b12u.js";import"./Link-B3c0gcH0.js";import"./index-BNjAQDaE.js";import"./index-BZLJStFD.js";import"./index-4s-xol72.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D02o7Sag.js";import"./addCustomCSSWithScoping-B4qcl2al.js";import"./index-CE7xV3os.js";import"./information-B2fXauVA.js";import"./sys-enter-2-BkEj79Au.js";import"./alert-Cia20ulM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DV4j1UI6.js";import"./delete-7JFBm1Tm.js";import"./settings-kgiPQv_V.js";import"./NoData-DUEfNRQo.js";import"./IllustratedMessage-BlLIGWpl.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-ByS1wDeQ.js";import"./index-Bq6YA1OZ.js";import"./index-BWvn97oh.js";import"./slim-arrow-down-D3jugRKw.js";import"./Input-BXkax4Ai.js";import"./ResponsivePopoverCommon.css-DLVAVBHO.js";import"./ValueStateMessage.css-MWCPl9eb.js";import"./Suggestions.css-mYcKBr3o.js";import"./ListBoxItemGroupTemplate-Cq7WxQEJ.js";import"./ComboBoxItemGroup-Dt8qMQbh.js";import"./ListItemBaseTemplate-C6SuP-30.js";import"./Token-DTyOAcLh.js";import"./ScrollEnablement-DgFk1_fj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dtqu1SWh.js";import"./ToggleButton-DkGlogzG.js";import"./SuggestionItem-3yI78rM6.js";import"./index-C-QW4iFF.js";import"./Option--Q44HJGH.js";import"./index-BGo3CCkY.js";import"./SegmentedButton-G6ESX7bA.js";import"./index-DYcBIjee.js";import"./Select-BUoOKAbj.js";import"./InvisibleMessage-D74Q5wYE.js";import"./slim-arrow-down-BCtidmgu.js";import"./index-C__maydq.js";import"./index-DdNorZl8.js";import"./index-TfXtv-kl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-IUv5q-Nd.js";import"./group-2-pZ5u8b6c.js";import"./sort-descending-DeiY6LR9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DwAWNqSH.js";import"./utils-BVswc758.js";import"./index-DmEszc9N.js";import"./index-CTSNUJ9h.js";import"./index-CP1wr9dJ.js";import"./navigation-down-arrow-DmaxrwH-.js";import"./navigation-right-arrow-CpRUuEp7.js";import"./navigation-right-arrow-BJIZXTFA.js";import"./useCurrentTheme-B4X-989J.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CMsN1t2K.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CTE_y8fW.js";import"./paper-plane-BzsW306U.js";import"./index-DsfN-T3H.js";import"./less-CH3mR01q.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
