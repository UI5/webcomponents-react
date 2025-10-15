import{j as t}from"./iframe-DNwXmN6w.js";import{useMDXComponents as n}from"./index-Dbs3KJZC.js";import{I as i,F as m}from"./CommandsAndQueries-BAoKQ9N_.js";import{M as p,C as s}from"./blocks-ClaQShTE.js";import"./Tag-9F78ZQdp.js";import"./index-CYGT2EhP.js";import"./copy-EN-_ABXk.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BZM3hVda.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DuyT38UB.js";import"./index-aVApIanM.js";import"./index-B8OlZcJ4.js";import"./Link-C02NJVw1.js";import"./index-BLy7Rxlq.js";import"./index-nHmWKiTx.js";import"./index-rN24S36o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNrVdT-5.js";import"./addCustomCSSWithScoping-os-Xpktn.js";import"./index-CBh039oE.js";import"./information-BcSrdT-8.js";import"./sys-enter-2-D4ODuMey.js";import"./alert-Dl0J_z1v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BcYwBA_x.js";import"./delete-Dtc6qBdo.js";import"./settings-C20orWJs.js";import"./NoData-Byql5GFI.js";import"./IllustratedMessage-C9HIxcU1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DTwOmFng.js";import"./index-BwEwheLw.js";import"./index-CxqQ6lo_.js";import"./slim-arrow-down-yZ0Tj4rx.js";import"./Input-D1jql1AB.js";import"./ResponsivePopoverCommon.css-CsNV6Vt5.js";import"./ValueStateMessage.css-BmoKZehd.js";import"./Suggestions.css-BLseB_qJ.js";import"./ListBoxItemGroupTemplate-GrRfxRtW.js";import"./ComboBoxItemGroup-DmaBTCoh.js";import"./ListItemBaseTemplate-D49sgBgx.js";import"./Token-ikM9Yg4E.js";import"./ScrollEnablement-COWapJBB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8xPVlSO.js";import"./ToggleButton-DjAWyQjE.js";import"./SuggestionItem-CApmioZF.js";import"./index-D3KttqVU.js";import"./Option-8CI-W5Cq.js";import"./index-DaNCv0Ie.js";import"./SegmentedButton-DqUwoUgZ.js";import"./index-Dk7WoR1Z.js";import"./Select-1NfyOvLt.js";import"./InvisibleMessage-R_WRhHfZ.js";import"./slim-arrow-down-DIzrL0Ja.js";import"./index-D3Y3n4MX.js";import"./index-DH1Xng6k.js";import"./index-DJpZsV5v.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4pAXERK.js";import"./group-2-FR_0GSEN.js";import"./sort-descending-DgjdOMTK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dr-gnZgG.js";import"./utils-DWArTzFQ.js";import"./index-C9vTuVR-.js";import"./index-neKxXX_y.js";import"./index-COFqXK4G.js";import"./navigation-down-arrow-D7lpxDjD.js";import"./navigation-right-arrow-BSI1uudB.js";import"./navigation-right-arrow-BqhiEzIr.js";import"./useCurrentTheme-Wc2uAQz5.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BA4HNUEX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ClLbQDrb.js";import"./paper-plane-BeRQVn6H.js";import"./index-CdrtxYXr.js";import"./less-_akB46eN.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
