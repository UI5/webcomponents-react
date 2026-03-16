import{j as t}from"./iframe-BVmbmlmH.js";import{useMDXComponents as i}from"./index-BayNuhgZ.js";import{I as n}from"./CommandsAndQueries-HKIzYk5f.js";import{M as m,C as p}from"./blocks-DMMtyDnL.js";import"./Tag-CX0-uTWT.js";import"./index-DLhdihT5.js";import"./copy-GT2usG3-.js";import{F as s}from"./Footer-jyZDOgk8.js";import"./PageNotFound-Bx-Sm5Da.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D8OC8vxI.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-mk6Fv6C7.js";import"./index-BxRkRPbG.js";import"./index-BJnbAjLN.js";import"./index-DOsMkDHm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY1Um-8U.js";import"./addCustomCSSWithScoping-BGYdQCs4.js";import"./index-B9kq_n6z.js";import"./index-hq6INLou.js";import"./index-BCEgOOyQ.js";import"./information-BShnHlGL.js";import"./sys-enter-2-I6roqntb.js";import"./alert-D_-PGSyq.js";import"./index-CGmvxCgE.js";import"./Illustrations-CSa63wVD.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bwe8i4C1.js";import"./delete-Cf2eCD6q.js";import"./settings-A4VPhZbf.js";import"./NoData-0i2pf3q4.js";import"./NoFilterResults-CH6rLyMe.js";import"./index-qGKOQq_Z.js";import"./IllustratedMessage-CE_fHqrV.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-NhJPhk66.js";import"./Input-BkR7wprP.js";import"./ResponsivePopoverCommon.css-CxapldGD.js";import"./ValueStateMessage.css-B-Atw3u2.js";import"./Suggestions.css-BaRcEW8S.js";import"./ListBoxItemGroupTemplate-DkFqFIv-.js";import"./ComboBoxItemGroup-CId5vra8.js";import"./ListItemBaseTemplate-BJdRA9m9.js";import"./Token-B76AWz4_.js";import"./ScrollEnablement-yNv_w-S6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CD5pumRX.js";import"./ToggleButton-DMuM4WHg.js";import"./multiselect-all-ioniiqjx.js";import"./SuggestionItem-DvZGJLTk.js";import"./index-C6E_dfSH.js";import"./Option-CjVbj-vV.js";import"./index-DRVa_8i1.js";import"./SegmentedButton-DpKA1VVa.js";import"./index-C-VIxdSF.js";import"./Select-CTiG6N7Z.js";import"./InvisibleMessage-CFEC6mIV.js";import"./index-OS6XWPB1.js";import"./index-CTdTtt2e.js";import"./index-vcnJyRT4.js";import"./index-CNlu7VXT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CDmAuvPv.js";import"./group-2-fyvVFRtM.js";import"./sort-descending-B1icyYsO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFtwu3lL.js";import"./utils-juR4U1ZI.js";import"./index-Gfu7Ktfz.js";import"./index-CAyHYrEC.js";import"./index-B3Eg-2Xl.js";import"./navigation-down-arrow-CRpQ5yDC.js";import"./navigation-right-arrow-VmHT47vc.js";import"./navigation-right-arrow-aqMR-wNy.js";import"./useCurrentTheme-DSO3zaUO.js";import"./index-D-UcUp0F.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BtJvBTrm.js";import"./paper-plane-q0zDJ9Ps.js";import"./index-BplB5G32.js";import"./less-BUs157s7.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
