import{j as t}from"./iframe-DBAXgyPJ.js";import{useMDXComponents as n}from"./index-DeQCSiR4.js";import{I as i,F as m}from"./CommandsAndQueries-Cf1MLqXD.js";import{M as p,C as s}from"./blocks-DNEJwZiK.js";import"./Tag-BnY7EcLs.js";import"./index-BcpDNXQJ.js";import"./copy-Be-lNgbc.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Bt31hbU3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iFpZKkV_.js";import"./index-DBjIxNL0.js";import"./index-DtoZ2Fe-.js";import"./Link-CKvSDmqR.js";import"./index-Duoz4br-.js";import"./index-DQ_Wvw6H.js";import"./index-BPy_kvjb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlXvTyjP.js";import"./addCustomCSSWithScoping-BR1T3wHP.js";import"./index-CYYeCl2u.js";import"./information-DLrkR3Ug.js";import"./sys-enter-2-6buniplq.js";import"./alert-C9HPjUKN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChrpHlfC.js";import"./delete-BSkNZk9a.js";import"./settings-BZAstzzV.js";import"./NoData-B7Xju4kG.js";import"./IllustratedMessage-DukG7yhw.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BbeE78Q0.js";import"./index-x_xy1BHi.js";import"./index-H8rccFLG.js";import"./slim-arrow-down-BHYnj_Rv.js";import"./Input-DoLfEvYS.js";import"./ResponsivePopoverCommon.css-Dicr_wKa.js";import"./ValueStateMessage.css-xifZGn5p.js";import"./Suggestions.css-jnqUGd09.js";import"./ListBoxItemGroupTemplate-Br9ejLAN.js";import"./ComboBoxItemGroup-CUEsofUs.js";import"./ListItemBaseTemplate-DOEQQMA6.js";import"./Token-D5BZ8KYH.js";import"./ScrollEnablement-CAGdg6Bw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZE_TKuw.js";import"./ToggleButton-gKHZK2VB.js";import"./SuggestionItem-DbqPCxiF.js";import"./index-NVwWghin.js";import"./Option-CxVq6N4O.js";import"./index-BYQIMVDt.js";import"./SegmentedButton-BKvVXXll.js";import"./index-C-F46hMK.js";import"./Select-BT7URQFg.js";import"./InvisibleMessage-K9tj7mDD.js";import"./slim-arrow-down-D1JBPt11.js";import"./index-z2bdi1aG.js";import"./index-BrTp8toc.js";import"./index-D5hGOmgy.js";import"./index-DXiNIq2l.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DVRvHvKO.js";import"./group-2-CUJNm4aZ.js";import"./sort-descending-pwGpDMpi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BQLAXfyy.js";import"./utils-CrwBT7wM.js";import"./index-CksZPEzU.js";import"./index-DWNu3BWC.js";import"./index-DVt-pam0.js";import"./navigation-down-arrow-DfpRpy8j.js";import"./navigation-right-arrow-B83gJnhp.js";import"./navigation-right-arrow-BXtSSW1B.js";import"./useCurrentTheme-B1tmSyF5.js";import"./index-CwLMJfdZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-eqRVZ4IM.js";import"./paper-plane-CA-wmpkx.js";import"./index-vSaJtfoQ.js";import"./less-BVu6NBS-.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
