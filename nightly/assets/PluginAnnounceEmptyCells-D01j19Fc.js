import{j as t}from"./iframe-JepDsySv.js";import{useMDXComponents as i}from"./index-BGpK8Gfn.js";import{I as n}from"./CommandsAndQueries-BpbXUgFJ.js";import{M as m,C as p}from"./blocks-BbBU6U9u.js";import"./Tag-B5HHC3_D.js";import"./index-CgzvULcW.js";import"./copy-D2Pke32f.js";import{F as s}from"./Footer-DkGRGaaK.js";import"./PageNotFound-BYj9CuoF.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DvFdGoFq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BLuv4AbX.js";import"./index-BKoJ8bur.js";import"./index-C220bubu.js";import"./index-CcxcRSha.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzfOud-0.js";import"./addCustomCSSWithScoping-f93Oozyz.js";import"./index-Bd6WgbUi.js";import"./index-0BxTwmFy.js";import"./index-CIXtBD0J.js";import"./information-DXY6cLV_.js";import"./sys-enter-2-e1zqJEbk.js";import"./alert-BXOPntd7.js";import"./index-8tSJZtFG.js";import"./Illustrations-sShT8n29.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DB1X0-yk.js";import"./delete-BMjzJ8I_.js";import"./settings-D51mHDx-.js";import"./NoData-DTdJHQio.js";import"./NoFilterResults-Dx8L-MqR.js";import"./index-BNDpV-__.js";import"./IllustratedMessage-Dynl3KMz.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-CbxbNk1w.js";import"./slim-arrow-down-Dt-7CG4Q.js";import"./Input-f39H6uy6.js";import"./ResponsivePopoverCommon.css-BKF0yN8r.js";import"./ValueStateMessage.css-C0leCwz7.js";import"./Suggestions.css-DPwYa0Rw.js";import"./ListBoxItemGroupTemplate-DuwHciDt.js";import"./ComboBoxItemGroup-iyr2zk0K.js";import"./ListItemBaseTemplate-yAH3C8cG.js";import"./Token-Bw86fiqE.js";import"./ScrollEnablement-Bf0xODSv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DaU3lC3b.js";import"./ToggleButton-DRj1b1JE.js";import"./SuggestionItem-Db9ZyQ-5.js";import"./index-Diqc62Zx.js";import"./Option-B-qv-w1U.js";import"./index-DAt4QP07.js";import"./SegmentedButton-B71_4ItV.js";import"./index-B9-qYlKd.js";import"./Select-BmEwDHzx.js";import"./InvisibleMessage-DglvjQpx.js";import"./slim-arrow-down-DOXlkwy5.js";import"./index-BLd9zCHc.js";import"./index-BrKPVcK1.js";import"./index-DRDJaTFL.js";import"./index-Dd7JImE6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-9Jnsuke6.js";import"./group-2-CJV4M1Rl.js";import"./sort-descending-C5QauENK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-l64aeKU4.js";import"./utils-BBoBz28-.js";import"./index-CPAJ8klG.js";import"./index-Cq1parp_.js";import"./index-BjeUsn3F.js";import"./navigation-down-arrow-Csf9CClE.js";import"./navigation-right-arrow-D7m_6N7r.js";import"./navigation-right-arrow-D9pak7Fp.js";import"./useCurrentTheme-CZHOHdUN.js";import"./index-C6SVu-VQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cj9ds3Xk.js";import"./paper-plane-DwaO0bjK.js";import"./index-C8CCEPvY.js";import"./less-D8z_9I33.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(s,{})]})}function Lt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Lt as default};
