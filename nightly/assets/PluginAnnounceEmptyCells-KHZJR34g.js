import{j as t}from"./iframe-QfBB5oxv.js";import{u as i,M as n,C as m}from"./blocks-BNoxk89Z.js";import{I as p}from"./CommandsAndQueries-CHXq-8GX.js";import"./Tag-jV4rQ7he.js";import"./index-CXwzMtEr.js";import"./copy-Ddev0qyd.js";import{F as s}from"./Footer-Djb8KmT2.js";import"./PageNotFound-BF3CKwDf.js";import{PluginAnnounceEmptyCells as a}from"./AnalyticalTableHooks.stories-B6o6xcm7.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CjKrRSzJ.js";import"./index-CKPcWxBG.js";import"./index-qK3ZRsrU.js";import"./index-mR2WMj9r.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4b8nEvCn.js";import"./addCustomCSSWithScoping-BzEIPtCm.js";import"./index-BP6rOJzd.js";import"./index-CMW9Znni.js";import"./index-C23APlHe.js";import"./information-DnhNkDB3.js";import"./sys-enter-2-BMzcK94M.js";import"./alert-Djbx4OhD.js";import"./index-B0PZpUdZ.js";import"./Illustrations-B1Eex0pq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNErvuHa.js";import"./delete-ChbxvCaX.js";import"./settings-BJf-PQsO.js";import"./NoData-DgG04WAC.js";import"./NoFilterResults-BU08mcFJ.js";import"./index-BW8anNwZ.js";import"./IllustratedMessage-B0tuKdc_.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CzounWiX.js";import"./Input-Dq7YMe08.js";import"./ResponsivePopoverCommon.css-CNHfRjyj.js";import"./ValueStateMessage.css-D6MJ9XHs.js";import"./Suggestions.css-DuOxNvnL.js";import"./ListBoxItemGroupTemplate-KaiE3Akg.js";import"./ComboBoxItemGroup-BYlx2q4W.js";import"./ListItemBaseTemplate-Dh63WkMo.js";import"./Token-bE2o3WQc.js";import"./ScrollEnablement-D9-XNTBn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYJdKcUD.js";import"./ToggleButton-BzWglLQm.js";import"./multiselect-all-DvkYK6cA.js";import"./SuggestionItem-BX-RC-Ep.js";import"./index-DxqVVwu_.js";import"./Option-PTtFyRUo.js";import"./index-D6pqZsOu.js";import"./SegmentedButton-ChlAck0v.js";import"./index-Dvo2DlNr.js";import"./Select-DcyuEmeq.js";import"./InvisibleMessage-B3q_stCZ.js";import"./index-CNet7Rn8.js";import"./index-BhwDH-EY.js";import"./index-ChcMW--M.js";import"./index-CEP4QNMA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Duv1kUg0.js";import"./group-2-DOvkGS22.js";import"./sort-descending-ARK23MyZ.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cpx9pvDO.js";import"./utils-Gg7Ythg5.js";import"./index-eHKj1k2p.js";import"./index-_er2dUIp.js";import"./index-COg9gy3g.js";import"./navigation-down-arrow-DINT9BlU.js";import"./navigation-right-arrow-Ce-DclTe.js";import"./navigation-right-arrow-C22SmqFg.js";import"./useCurrentTheme-CclwzgwB.js";import"./index-ClULG3sl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPTRgBT8.js";import"./paper-plane-BEUN1GKr.js";import"./index-CB8cZ3hf.js";import"./less-Bm7RlntL.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(p,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(m,{sourceState:"none",of:a}),`
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
`,t.jsx(s,{})]})}function _t(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{_t as default};
