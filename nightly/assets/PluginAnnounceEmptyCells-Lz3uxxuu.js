import{j as t}from"./iframe-CzTCZe7v.js";import{useMDXComponents as i}from"./index-CDGFt6A1.js";import{I as n}from"./CommandsAndQueries-DvEFwabB.js";import{M as m,C as p}from"./blocks-DeBlAQEU.js";import"./Tag-Czdm_FZb.js";import"./index-C0tHrsgM.js";import"./copy-BOjVvS6l.js";import{F as s}from"./Footer-DxyUJb9o.js";import"./PageNotFound-BAD2GAcl.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-pODzDmXr.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CZjSyYly.js";import"./index-DKruw7SF.js";import"./index-DzASyxpH.js";import"./index-C8dlP9nE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DPTQrRIc.js";import"./addCustomCSSWithScoping-Cq2MgCDz.js";import"./index-DIk2IhoZ.js";import"./index-wip9afZ2.js";import"./index-CXe4MOnZ.js";import"./information-Bqvi10T6.js";import"./sys-enter-2-DyCO0gh_.js";import"./alert-9P0VyDJW.js";import"./index-B7_ymrud.js";import"./Illustrations-D7TiwfCu.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-XYq-h-xr.js";import"./delete-CJZ8jZ6-.js";import"./settings-CnlAmuLP.js";import"./NoData-Dn8JPKdK.js";import"./NoFilterResults-Ch4fK2Wx.js";import"./index-EZ4lrPcS.js";import"./IllustratedMessage-D3dYBaOA.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BcDsDQKs.js";import"./Input-uQUrQiez.js";import"./ResponsivePopoverCommon.css-DFzVVW-E.js";import"./ValueStateMessage.css-Dmls9BNj.js";import"./Suggestions.css-C-LfaUWA.js";import"./ListBoxItemGroupTemplate-CjbpLuh1.js";import"./ComboBoxItemGroup-DC7I2Gnu.js";import"./ListItemBaseTemplate-CtxRxA0S.js";import"./Token-DyMWmvtx.js";import"./ScrollEnablement-CI2_tTC7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CirnuoCn.js";import"./ToggleButton-AwQV3-nU.js";import"./multiselect-all-DRIYr1gF.js";import"./SuggestionItem-DTt93yVG.js";import"./index-Dt1pNi0E.js";import"./Option-Dyof31Hh.js";import"./index-uzkhG3jh.js";import"./SegmentedButton-CKBTvj6y.js";import"./index-hEwlQYEv.js";import"./Select-i2pvVUiG.js";import"./InvisibleMessage-hOloPGzW.js";import"./index-Ct09JLpa.js";import"./index-CD5oLMvj.js";import"./index-D9t0fsRq.js";import"./index-CnvUSw0N.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vyg3niqB.js";import"./group-2-Cnon157i.js";import"./sort-descending-BcIk7rDN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DkbCRIZN.js";import"./utils-BAjUyFPH.js";import"./index-Dbih7k0J.js";import"./index-C8pH3MqW.js";import"./index-PnqtoMqU.js";import"./navigation-down-arrow-DGwNBNUU.js";import"./navigation-right-arrow-Dz1uqIkQ.js";import"./navigation-right-arrow-Bkjp4EVA.js";import"./useCurrentTheme-QlTE88eU.js";import"./index-BsOmmnd6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DxJ1Nm0H.js";import"./paper-plane-C3ZNhKsM.js";import"./index-FT_Ukt9o.js";import"./less-Bbajs4eq.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
