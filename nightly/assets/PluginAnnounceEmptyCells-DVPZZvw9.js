import{j as t}from"./iframe-bzWujj58.js";import{useMDXComponents as n}from"./index-BCWfYBG3.js";import{I as i,F as m}from"./CommandsAndQueries-CSnnb9h_.js";import{M as p,C as s}from"./blocks-X5VJ78n5.js";import"./Tag-CVKVqceK.js";import"./index-CSD4D-IO.js";import"./copy-GDuXt_K5.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BfTucdcR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1tcJfS2t.js";import"./index-DVLKNd8I.js";import"./index-CBomhFI_.js";import"./Link-DZnymjml.js";import"./index-BfOrv2Q6.js";import"./index-CCshg6zD.js";import"./index-DD0jDMax.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BiRbi5N7.js";import"./addCustomCSSWithScoping-CWEhHtD-.js";import"./index-CUs-JjpA.js";import"./information-C9FM1h13.js";import"./sys-enter-2-BEIn8VDt.js";import"./alert-3fLrr5gT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DAnRP-h9.js";import"./delete-BQOkFj_7.js";import"./settings-xB4h6gy4.js";import"./NoData-DhYFwryF.js";import"./IllustratedMessage-Bj3RsISn.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-GOhmEK2P.js";import"./index-Bn16gfaT.js";import"./index-M_9IBZFV.js";import"./slim-arrow-down-DOFohywN.js";import"./Input-DsykwZcZ.js";import"./ResponsivePopoverCommon.css-Byd21R2h.js";import"./ValueStateMessage.css-BiINGXZV.js";import"./Suggestions.css-CWqYjdPw.js";import"./ListBoxItemGroupTemplate-_-jQCq9E.js";import"./ComboBoxItemGroup-Bl3kAabF.js";import"./ListItemBaseTemplate-DgszZIVa.js";import"./Token-Bo9P9XfT.js";import"./ScrollEnablement-DfIaDKp3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BUi3BAXQ.js";import"./ToggleButton-aItTBqg8.js";import"./SuggestionItem-BLHyZke7.js";import"./index-ocf09ezY.js";import"./Option-DIIl0zvY.js";import"./index-BltXzpxB.js";import"./SegmentedButton-CWgqCnl8.js";import"./index-BzH7jua9.js";import"./Select-DNFr47Ml.js";import"./InvisibleMessage-iKbGUbcD.js";import"./slim-arrow-down-D8yDs4Me.js";import"./index-BuV7Z7c1.js";import"./index-F3CZ5PU2.js";import"./index-BZhgR-Dt.js";import"./index-CF7Db4CN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlaD8IIA.js";import"./group-2-CpHThkVo.js";import"./sort-descending-oyA5Y4oF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hoVIfdZR.js";import"./utils-C_PlS108.js";import"./index-CYeZBUNC.js";import"./index-CQ8mgB0i.js";import"./index-DOuzQIbm.js";import"./navigation-down-arrow-3ULw9zrh.js";import"./navigation-right-arrow-CWBx1_6S.js";import"./navigation-right-arrow-C1871DiJ.js";import"./useCurrentTheme-BP7bNUlF.js";import"./index-Bp-G7IVz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BsMnXzoo.js";import"./paper-plane-DWH-h_Xo.js";import"./index-ILVay_S5.js";import"./less-BhqQM8jv.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
