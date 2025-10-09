import{j as t}from"./iframe-D7FikSiu.js";import{useMDXComponents as n}from"./index-BenG4a-h.js";import{I as i,F as m}from"./CommandsAndQueries-DD_YKX8j.js";import{M as p,C as s}from"./blocks-Yxlvk0d_.js";import"./Tag-CPn9c9wp.js";import"./index-C7R8Sd2K.js";import"./copy-BeTo-Yk5.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Uzzik8A7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3kgqoQY.js";import"./index-BmpVzGJg.js";import"./index-DD0ZDplT.js";import"./Link-VxMUEtoN.js";import"./index-BlrcmYdd.js";import"./index-BWKg7Ny9.js";import"./index-sclNFwhc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DXj9DeaS.js";import"./addCustomCSSWithScoping-qQ8FRtdZ.js";import"./index--O96gYhw.js";import"./information-uIClPmp3.js";import"./sys-enter-2-CoINRXQ6.js";import"./alert-C1AwfvUs.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cjeu2iUC.js";import"./delete-BXFFeGva.js";import"./settings-Bhg9hIqQ.js";import"./NoData-8lo0EfIA.js";import"./IllustratedMessage-B5ILd7Ma.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D2FL1NIC.js";import"./index-D5KmdhfP.js";import"./index-BHdGppro.js";import"./slim-arrow-down-BjtIk1Vi.js";import"./Input-C3GQwp16.js";import"./ResponsivePopoverCommon.css-B-7xEFrO.js";import"./ValueStateMessage.css-Bp6Kzpn5.js";import"./Suggestions.css-C4deLYKC.js";import"./ListBoxItemGroupTemplate-CulA1MXP.js";import"./ComboBoxItemGroup-Ybx5jZca.js";import"./ListItemBaseTemplate-CbRHzmQ9.js";import"./Token-lKzfIqgl.js";import"./ScrollEnablement-Bra0pK8m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CSDUnyyJ.js";import"./ToggleButton-Kp4VbK29.js";import"./SuggestionItem-CDgnoOkn.js";import"./index-BAC7wPZF.js";import"./Option-DjNP2NBe.js";import"./index-g5ankLTt.js";import"./SegmentedButton-DsD65c1s.js";import"./index-BLAF6B_L.js";import"./Select-DFH78pAA.js";import"./InvisibleMessage-CE6DvnfR.js";import"./slim-arrow-down-Cck_1u4G.js";import"./index-DPXWYJb-.js";import"./index-BS9hfto9.js";import"./index-BzlJw7GH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJs2hvRJ.js";import"./group-2-B__7xwg1.js";import"./sort-descending-Bt7-iKHQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5trjv0F.js";import"./utils-D4gyi2F6.js";import"./index-DUVjrMwJ.js";import"./index-Bp47sPZA.js";import"./index-C0B2CC00.js";import"./navigation-down-arrow-CBaTncM0.js";import"./navigation-right-arrow-r_WuPSCR.js";import"./navigation-right-arrow-BiAQ_euc.js";import"./useCurrentTheme-gi6l8GiI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_vb2NYJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C49MPlLC.js";import"./paper-plane-DDXSGztm.js";import"./index-7ywSorqo.js";import"./less-Bg7OXZ8n.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
