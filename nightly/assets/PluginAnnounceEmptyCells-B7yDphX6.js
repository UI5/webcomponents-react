import{j as t}from"./iframe-DDMtxVo3.js";import{useMDXComponents as n}from"./index-DJVQNbCr.js";import{I as i,F as m}from"./CommandsAndQueries-GL7iyaCL.js";import{M as p,C as s}from"./blocks-CloLtOA5.js";import"./Tag-YMrSkp2O.js";import"./index-DsF6G_NH.js";import"./copy-BTGdlJRd.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BN0Ao-_m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-rp8XBFdR.js";import"./index-BHqqB-9b.js";import"./index-ayjT0mLt.js";import"./Link-D3MGth0a.js";import"./index-BbSpKNs2.js";import"./index-DIh6sAKH.js";import"./index-BeupWmR_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IIlbXN7B.js";import"./addCustomCSSWithScoping-CwVVs2bm.js";import"./index-DtIsK-ZK.js";import"./information-CyNj2j11.js";import"./sys-enter-2-Go-dkBfP.js";import"./alert-jQ4OjDPb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BF0Of00g.js";import"./delete-Is_zNJTb.js";import"./settings-DLZSygz9.js";import"./NoData-D2SWaRbW.js";import"./IllustratedMessage-Y2lySBW0.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-eecdh7SK.js";import"./index-n5WxUc-1.js";import"./index-CyCKI4kh.js";import"./slim-arrow-down-B9fX2pE_.js";import"./Input-DldSM5Dd.js";import"./ResponsivePopoverCommon.css-r6Yy0Fkp.js";import"./ValueStateMessage.css-CBQfZKeo.js";import"./Suggestions.css-Ce_nnZbO.js";import"./ListBoxItemGroupTemplate-jkoaDovc.js";import"./ComboBoxItemGroup-DEv9jHmD.js";import"./ListItemBaseTemplate-D5kLl8tB.js";import"./Token-CpnDDN9x.js";import"./ScrollEnablement-CHq8jwQp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CvaRS6qD.js";import"./ToggleButton-B8VJwrvR.js";import"./SuggestionItem-CkiJy6SK.js";import"./index-vS3KmlTg.js";import"./Option-Bmii2PEM.js";import"./index-cYHXc0IN.js";import"./SegmentedButton-Bch0JHMn.js";import"./index-Ce_ybWMS.js";import"./Select-nmxyrizQ.js";import"./InvisibleMessage-CxUh_0D_.js";import"./slim-arrow-down-C-tgvolj.js";import"./index-Dih0csuE.js";import"./index-C98BWsva.js";import"./index-DkqGVu91.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDA1WG-X.js";import"./group-2-CrgQgZu8.js";import"./sort-descending-VzaHQEUN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bk6vRLMI.js";import"./utils-cWgc0sgc.js";import"./index-D-dIkc7q.js";import"./index-WTvN1xUf.js";import"./index-Boa8xecP.js";import"./navigation-down-arrow-DhowEsmp.js";import"./navigation-right-arrow-rputrWNy.js";import"./navigation-right-arrow-BdCl3OJM.js";import"./useCurrentTheme-Cvsq9vBh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CEfFIx_c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DfGZzaea.js";import"./paper-plane-D2Eg3sKl.js";import"./index-DJj1SKu0.js";import"./less-DAJEncVK.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
