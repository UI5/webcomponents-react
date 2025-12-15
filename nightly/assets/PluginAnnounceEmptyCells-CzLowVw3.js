import{j as t}from"./iframe-BVsLYlhe.js";import{useMDXComponents as n}from"./index-DavU5a3Y.js";import{I as i,F as m}from"./CommandsAndQueries-Bi9b4xK_.js";import{M as p,C as s}from"./blocks-BwdcnqOn.js";import"./Tag-CNJ-l2ra.js";import"./index-Chy_S0qP.js";import"./copy-hvSX-Foh.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DCSA0DE3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBlqkBew.js";import"./index-CppXcbvf.js";import"./index-CQv5SAoi.js";import"./Link-mimmL_0g.js";import"./index-pqTqdxQB.js";import"./index-bVRMu9zO.js";import"./index-2NXGICNv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dhuu23v1.js";import"./addCustomCSSWithScoping-CKzpaFfQ.js";import"./index-BZsG0oyU.js";import"./information-Q1gDT6BU.js";import"./sys-enter-2-CVfnD9eL.js";import"./alert-BQuV4PvU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Be_omCvA.js";import"./delete-wM7iGzUT.js";import"./settings-DUTgYsHz.js";import"./NoData-BP3lBXbm.js";import"./IllustratedMessage-DOGBzg3t.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dg1Tep4f.js";import"./index-C1WMOxlR.js";import"./index-CVk9SmTz.js";import"./slim-arrow-down-DhCWTPrz.js";import"./Input-B1h80Qke.js";import"./ResponsivePopoverCommon.css-uHz60RXl.js";import"./ValueStateMessage.css-BGnf7WuL.js";import"./Suggestions.css-BC296_76.js";import"./ListBoxItemGroupTemplate-C4BIIOjO.js";import"./ComboBoxItemGroup-CL94Ym8W.js";import"./ListItemBaseTemplate-DTp4ZwAc.js";import"./Token-D0KaAyb8.js";import"./ScrollEnablement-OBzjrUFw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MnW36ayG.js";import"./ToggleButton-CfDtgg4F.js";import"./SuggestionItem-B4pYo2Xh.js";import"./index-DtvHgBUt.js";import"./Option-BmneA1aN.js";import"./index-MoN8cciG.js";import"./SegmentedButton-CZ9H8jJT.js";import"./index-CPMcUc-n.js";import"./Select-B9O7SbWK.js";import"./InvisibleMessage-COd6vRv-.js";import"./slim-arrow-down-CyFYuexk.js";import"./index-ytFospDP.js";import"./index-MqiJoXt5.js";import"./index-CeMerd7K.js";import"./index-BSHqwN58.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CpwTCgMq.js";import"./group-2-BQbBlrd5.js";import"./sort-descending-ABbRNgKt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHnVQWJI.js";import"./utils-DKALz9nY.js";import"./index-c_PF86vB.js";import"./index-BG1NckKa.js";import"./index-JsVdJQMp.js";import"./navigation-down-arrow-BBbnWEl3.js";import"./navigation-right-arrow-Dv-Qzlpb.js";import"./navigation-right-arrow-DLSHU6Nw.js";import"./useCurrentTheme-DSoyNXre.js";import"./index-Cufgt29f.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzejkbSx.js";import"./paper-plane-CXb4AHwo.js";import"./index-DZtB4CEv.js";import"./less-8xYh8vLI.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
