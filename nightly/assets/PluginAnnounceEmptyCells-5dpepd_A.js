import{j as t}from"./iframe-CptD6jcI.js";import{useMDXComponents as n}from"./index-fCXI9bYA.js";import{I as i,F as m}from"./CommandsAndQueries-DdKyoCdZ.js";import{M as p,C as s}from"./blocks-BIcH59f6.js";import"./Tag-BGUo9GB2.js";import"./index-iKMFJQaw.js";import"./copy-B9_rc4hl.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-v-kHc7hB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEYNy4qZ.js";import"./index-CBzPckl1.js";import"./index-Bhv4kUG7.js";import"./Link-BtaWbEJj.js";import"./index-CDMlRbU-.js";import"./index-B4fjS4Ci.js";import"./index-DUbGwyGv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqdlCgb.js";import"./addCustomCSSWithScoping-CNZcQBPm.js";import"./index-DF7XtlGw.js";import"./information-_8TOion-.js";import"./sys-enter-2-etHRmL56.js";import"./alert-DCc-ugqC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-_nfci7qO.js";import"./delete-CqONTPqs.js";import"./settings-DF-HP63C.js";import"./NoData-BQSzbPps.js";import"./IllustratedMessage-CgDjDEGv.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-hamlRjSE.js";import"./index-BD9r_une.js";import"./index-B60KVWKq.js";import"./slim-arrow-down-CjyrJWSM.js";import"./Input-uZgu1ujO.js";import"./ResponsivePopoverCommon.css-rLzLw65f.js";import"./ValueStateMessage.css-DacNSHpQ.js";import"./Suggestions.css-B1EVfhUM.js";import"./ListBoxItemGroupTemplate-BdVPyN1a.js";import"./ComboBoxItemGroup-DQ9b49px.js";import"./ListItemBaseTemplate-BppEr7SM.js";import"./Token-DpzwIFjG.js";import"./ScrollEnablement-DsrN78gg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYou9xin.js";import"./ToggleButton-BYYpa0_F.js";import"./SuggestionItem-C3L5PqbA.js";import"./index-Dah3OHlr.js";import"./Option-B6yV-Jjr.js";import"./index-C08PuBfi.js";import"./SegmentedButton-DLbXClyD.js";import"./index-BXswR0kA.js";import"./Select-Ctxh64Gj.js";import"./InvisibleMessage-F5htpLuT.js";import"./slim-arrow-down-BhV5Za_4.js";import"./index-Ci5kiTSu.js";import"./index-DbSLMhUs.js";import"./index-CTEd5I50.js";import"./index-BEEcV9zs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIq8q0V6.js";import"./group-2-CTSXlyDl.js";import"./sort-descending-D9jCbvYd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B0X8RYMV.js";import"./utils-gfG7vEZf.js";import"./index-CQoZ2SPB.js";import"./index-C5BgkxDg.js";import"./index-WVMq7O5Z.js";import"./navigation-down-arrow-DIeKF41M.js";import"./navigation-right-arrow-De_U2AQE.js";import"./navigation-right-arrow-DmOKdOeg.js";import"./useCurrentTheme-57gAgJUu.js";import"./index-uc7d53g3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-TxWHwyVI.js";import"./paper-plane-DAA1Wpfz.js";import"./index-O4n5RQLI.js";import"./less-C9e-TmeG.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
