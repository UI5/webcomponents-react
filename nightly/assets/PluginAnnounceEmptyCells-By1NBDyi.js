import{j as t}from"./iframe-D6FNTQkK.js";import{useMDXComponents as n}from"./index-B6bRqhkI.js";import{I as i,F as m}from"./CommandsAndQueries-BXb9AdOB.js";import{M as p,C as s}from"./blocks-CncoMbCj.js";import"./Tag-BgsP26gD.js";import"./index-TUX9UWDf.js";import"./copy-CV5IiNGP.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BOeh4XmQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTSo6gsw.js";import"./index-Cn0-2HTO.js";import"./index-C01hHOib.js";import"./Link-ECkeIbxq.js";import"./index-i5JoI6q6.js";import"./index-CEtC1hdv.js";import"./index-_w6613cy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COKdY-da.js";import"./addCustomCSSWithScoping-BKP4itiy.js";import"./index-C8Bzh-c-.js";import"./information-DX0Ia3Tr.js";import"./sys-enter-2-BXq7hn_D.js";import"./alert-Dc1BRwci.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-yi9kxnte.js";import"./delete-CFOKUYe0.js";import"./settings-CfB4e9cX.js";import"./NoData-Dq3tbyi3.js";import"./IllustratedMessage-cjkHzwDQ.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DW0YuRZ7.js";import"./index-CTZpCD3C.js";import"./index-DZv_VOFr.js";import"./slim-arrow-down-CHkc3XG4.js";import"./Input-CWaYFEE0.js";import"./ResponsivePopoverCommon.css-DwSQpbCL.js";import"./ValueStateMessage.css-B-79kasT.js";import"./Suggestions.css-BX_6fSbp.js";import"./ListBoxItemGroupTemplate-D5A0k_8G.js";import"./ComboBoxItemGroup-DgqGaLwi.js";import"./ListItemBaseTemplate-BwKCfdZC.js";import"./Token-CdK57w2s.js";import"./ScrollEnablement-BnyFUzOB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-khyxx9eu.js";import"./ToggleButton-UgNXHRCa.js";import"./SuggestionItem-DmIAT0hW.js";import"./index-Bvo9r74r.js";import"./Option-Bp3m08uY.js";import"./index-B-qqk9Qh.js";import"./SegmentedButton-WJja0alW.js";import"./index-DFLZWraU.js";import"./Select-BsOhyv3Y.js";import"./InvisibleMessage-CuNZ9Vpq.js";import"./slim-arrow-down-BcGJUmQm.js";import"./index-BgVQgXtA.js";import"./index-A1xbEiXK.js";import"./index-5wdnnntn.js";import"./index-CvdFD22I.js";import"./IconDesign-DXd8PPVF.js";import"./filter-8F6Zx2fh.js";import"./group-2-bMLqGL0E.js";import"./sort-descending-c2BT37ev.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XmEHG45R.js";import"./utils-DbT12vyG.js";import"./index-Lif6Dilg.js";import"./index-1e28FYLT.js";import"./index-D27T-mws.js";import"./navigation-down-arrow-BN5WPv52.js";import"./navigation-right-arrow-DtQeW2Tc.js";import"./navigation-right-arrow-CLKqeinu.js";import"./useCurrentTheme-DXL7KtWf.js";import"./index-CeT2M4uq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BISPhePp.js";import"./paper-plane-CZun4wFx.js";import"./index-CtNicNZp.js";import"./less-By2gp0Gl.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
