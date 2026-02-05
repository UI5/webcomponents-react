import{j as t}from"./iframe-BTfUB26H.js";import{useMDXComponents as n}from"./index-D3NtTefK.js";import{I as i,F as m}from"./CommandsAndQueries-BWcq9mTF.js";import{M as p,C as s}from"./blocks-AWBgpAl3.js";import"./Tag-BGFP3IN9.js";import"./index-B9IZul2P.js";import"./copy-D6Vht5qr.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BDMm55id.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlJoRRYt.js";import"./index-BBFhDjTC.js";import"./index-Cuze-7Fn.js";import"./Link-BMxWJfW1.js";import"./index-BzZqyp7s.js";import"./index-BgDIorry.js";import"./index-BtUK59WI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-nj-G9WCr.js";import"./addCustomCSSWithScoping-BuL6JqQV.js";import"./index-F0g47Tza.js";import"./information-CLBM1nY5.js";import"./sys-enter-2-BbIZ6tOc.js";import"./alert-Dqm1dR2l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DdxJ9ktW.js";import"./delete-CosJh4Wr.js";import"./settings-CrkRTssd.js";import"./NoData-CrPB3Etw.js";import"./IllustratedMessage-Dp_vq7kO.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DAE0PvWS.js";import"./index-G7JGBkSp.js";import"./index-Pc-tL94R.js";import"./slim-arrow-down-CkCy067l.js";import"./Input-CWdJBATj.js";import"./ResponsivePopoverCommon.css-C6uEz5Dl.js";import"./ValueStateMessage.css-Bm4czFd-.js";import"./Suggestions.css-jfF4NP-_.js";import"./ListBoxItemGroupTemplate-Cxw4j-yj.js";import"./ComboBoxItemGroup-DsBDLMFu.js";import"./ListItemBaseTemplate-rG4H0Nai.js";import"./Token-peOfkrul.js";import"./ScrollEnablement-BXX9C0K8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BeqJjBCf.js";import"./ToggleButton-CSUeQtqf.js";import"./SuggestionItem-DzkIs1mi.js";import"./index-0LZOa3fr.js";import"./Option-BzMwM8BQ.js";import"./index-BhAUVSXr.js";import"./SegmentedButton-8xKdGXJZ.js";import"./index-B3gpN7Aw.js";import"./Select-wjPPEddq.js";import"./InvisibleMessage-D6rgIzPo.js";import"./slim-arrow-down-COQfF4eP.js";import"./index-C0hZMZOj.js";import"./index-DSWytDHX.js";import"./index-BV2bpcIG.js";import"./index-kc3KkV9f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-r6JXO5z-.js";import"./group-2-Cie4H57f.js";import"./sort-descending-bkkz2k_R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-b_pilGpL.js";import"./utils-DHZMQwFC.js";import"./index-Bx4wP1U8.js";import"./index-Cy-22xtZ.js";import"./index-CcPafi79.js";import"./navigation-down-arrow-DMFBeJkE.js";import"./navigation-right-arrow-B_x4oAAg.js";import"./navigation-right-arrow-ycb02zKK.js";import"./useCurrentTheme-CD8arqKb.js";import"./index-CwyI01PI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-b3M525lM.js";import"./paper-plane-BssdKFPE.js";import"./index-CsvZqpSl.js";import"./less-CyWGcd4R.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
