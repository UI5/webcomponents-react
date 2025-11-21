import{j as t}from"./iframe-DM8isA9c.js";import{useMDXComponents as n}from"./index-Do0cpSGj.js";import{I as i,F as m}from"./CommandsAndQueries-DM-8oq2s.js";import{M as p,C as s}from"./blocks-Crph7jgT.js";import"./Tag-BtR3uqsq.js";import"./index-BgbeFss3.js";import"./copy-DYIgCYkz.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BU0X1VDJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C6UNmCtN.js";import"./index-BS8NgEfP.js";import"./index-FrVWogAp.js";import"./Link-j0sjRyW5.js";import"./index-B6NdOyDM.js";import"./index-Cf1wRWYr.js";import"./index-ozpDTdfP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9ZULNfD.js";import"./addCustomCSSWithScoping-AinZnCKl.js";import"./index-CNSbSmbI.js";import"./information-CLqibrfC.js";import"./sys-enter-2-COJQOFoX.js";import"./alert-WVpRlSFd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-2oOM7FJV.js";import"./delete-DcA4Uhw4.js";import"./settings-BA2hgRK4.js";import"./NoData-ARVnaWFR.js";import"./IllustratedMessage-vNT1f4yz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BGQgzr7m.js";import"./index-Dy3LU6ky.js";import"./index-DHTTyH85.js";import"./slim-arrow-down-hG7sSDos.js";import"./Input-CVhk_ZAS.js";import"./ResponsivePopoverCommon.css-puXN3fh5.js";import"./ValueStateMessage.css-C0V4czBQ.js";import"./Suggestions.css-BYf_LmQ1.js";import"./ListBoxItemGroupTemplate-5cmjEtes.js";import"./ComboBoxItemGroup-Bv2u3bQ7.js";import"./ListItemBaseTemplate-TRbY2fc8.js";import"./Token-BPCkJQrI.js";import"./ScrollEnablement-UWaMLi5d.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-I6nsPbjR.js";import"./ToggleButton-Vr7STsGZ.js";import"./SuggestionItem-BbXDukLp.js";import"./index-NSnuf4-P.js";import"./Option-CQJiT04F.js";import"./index-BX4ZAVg2.js";import"./SegmentedButton-B4cfzXrG.js";import"./index-BQBBMnNM.js";import"./Select-NIzcg6U7.js";import"./InvisibleMessage-BSV5Kw4P.js";import"./slim-arrow-down-C4n1wmA7.js";import"./index-C87A-yQY.js";import"./index-DQMuxlK5.js";import"./index-DoaqSk9p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ieaXo1Jb.js";import"./group-2-CSOTY4tP.js";import"./sort-descending-DzANS_Yh.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLiaJqlG.js";import"./utils-BnZETQEG.js";import"./index-C--tGAzN.js";import"./index-D5piz367.js";import"./index-BrgcTCqT.js";import"./navigation-down-arrow-CbZ1RQpJ.js";import"./navigation-right-arrow-C5TkdaxP.js";import"./navigation-right-arrow-DJCwyzqc.js";import"./useCurrentTheme-goNF4eXV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWyu-On_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CBtcGSGo.js";import"./paper-plane-DPYcr-IO.js";import"./index-l9sIIys5.js";import"./less-BmrMRYds.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
