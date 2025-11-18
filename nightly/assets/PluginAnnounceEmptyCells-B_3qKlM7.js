import{j as t}from"./iframe-C_ZjSpvw.js";import{useMDXComponents as n}from"./index-D99mDNJl.js";import{I as i,F as m}from"./CommandsAndQueries-DoIIg28U.js";import{M as p,C as s}from"./blocks-DhOgu6aS.js";import"./Tag-BTyw-Q9o.js";import"./index-CFaSARe7.js";import"./copy-o8vYo4aG.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-1KeWr361.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BT7ySl7f.js";import"./index-Cj8N_CMD.js";import"./index-uA7KkxCs.js";import"./Link-DjlLuVoY.js";import"./index-B7Kpc4-r.js";import"./index-Arj44yrL.js";import"./index-xyj4veU8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dvgs_TOk.js";import"./addCustomCSSWithScoping-Bja_IMOg.js";import"./index-CQkucwsg.js";import"./information-DjWFOZk0.js";import"./sys-enter-2-Bcyd_2Ym.js";import"./alert-D6bEf6aa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CBfXQqOD.js";import"./delete-UPYhhS75.js";import"./settings-BQIQCw26.js";import"./NoData-B27ZHA1s.js";import"./IllustratedMessage-CXJqRBtz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CHoVY10U.js";import"./index-ZdNquEyn.js";import"./index-CG20QFYC.js";import"./slim-arrow-down-DNm_LgPO.js";import"./Input-BsSjRDM5.js";import"./ResponsivePopoverCommon.css-CYgfaUoK.js";import"./ValueStateMessage.css-CpqZ_gjF.js";import"./Suggestions.css-QPEItX3L.js";import"./ListBoxItemGroupTemplate-C6jRHMwF.js";import"./ComboBoxItemGroup-CCSovVR5.js";import"./ListItemBaseTemplate-u7wLHgK7.js";import"./Token-CTyid79H.js";import"./ScrollEnablement-W5Wf5RR3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7bHN0O3.js";import"./ToggleButton-DeV44AnW.js";import"./SuggestionItem-CSPEj_XQ.js";import"./index-G1G_Ul-v.js";import"./Option-BHttWL89.js";import"./index-D07NgyYx.js";import"./SegmentedButton-DhoFROJQ.js";import"./index-HJOD6t4r.js";import"./Select-BxgNjt9h.js";import"./InvisibleMessage-CugcSZE6.js";import"./slim-arrow-down-Df8hY_AN.js";import"./index-D0AP3dKj.js";import"./index-CqRYtRVu.js";import"./index-D1q_umKP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BlHrl19O.js";import"./group-2-FzrtZoEx.js";import"./sort-descending-DZyRlpy5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHLokQSX.js";import"./utils-D23r6WGI.js";import"./index-DEf-xWsx.js";import"./index-D88YKGSw.js";import"./index-DsLljGL1.js";import"./navigation-down-arrow-BbdKFfmI.js";import"./navigation-right-arrow-Bw3RXKs8.js";import"./navigation-right-arrow-C6IZxjIu.js";import"./useCurrentTheme-CVvxYTRR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ZaQ1AkQI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-H9_uEIIc.js";import"./paper-plane-DhjbkpKT.js";import"./index-Byl3jNPv.js";import"./less-D_TW91Ya.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
