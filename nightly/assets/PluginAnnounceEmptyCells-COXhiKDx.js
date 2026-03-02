import{j as t}from"./iframe-BYdzMGmT.js";import{useMDXComponents as n}from"./index-Cj6hKPa8.js";import{I as i,F as m}from"./CommandsAndQueries-B5lWQhG8.js";import{M as p,C as s}from"./blocks-Cj5RS3Jv.js";import"./Tag-DG55Z9om.js";import"./index-BhYrs86x.js";import"./copy-CWbk9K2V.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-cVssna8z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnPstsP7.js";import"./index-DjVw4D0h.js";import"./index-DAUDNesr.js";import"./Link-BofMtgPA.js";import"./index-DA47VMXK.js";import"./index-fFMR_gyI.js";import"./index-CkYce0wJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_-sXQeTV.js";import"./addCustomCSSWithScoping-Cw5UObAf.js";import"./index-DonwXZ8V.js";import"./information-BG-owH3g.js";import"./sys-enter-2-CtufiL4W.js";import"./alert-C-RhncMU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-o_uZzUjH.js";import"./delete-CRpTyT7P.js";import"./settings-DeL5SdbF.js";import"./NoData-mwJ1Waqg.js";import"./IllustratedMessage-493kKCGH.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BFX4KQZG.js";import"./index-b49JVpuf.js";import"./index-BI-zpLc6.js";import"./slim-arrow-down-EzV-h7vN.js";import"./Input-gzz4D9_r.js";import"./ResponsivePopoverCommon.css-laFt-eqF.js";import"./ValueStateMessage.css-G31DxWEi.js";import"./Suggestions.css-D0qbNHCU.js";import"./ListBoxItemGroupTemplate-fMWQr5Wn.js";import"./ComboBoxItemGroup-CNETnNZ3.js";import"./ListItemBaseTemplate-CZN1ifJG.js";import"./Token-CelvgPLW.js";import"./ScrollEnablement-C12b1B5M.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4TcI1um.js";import"./ToggleButton-muSO_ArA.js";import"./SuggestionItem-Ck_600Dg.js";import"./index-BzSXKO6G.js";import"./Option-ikxQWrXS.js";import"./index-DOxN2q1f.js";import"./SegmentedButton-D7IYgi5S.js";import"./index-Dpb_P6_i.js";import"./Select-BsZRQHw0.js";import"./InvisibleMessage-C_pu6iRf.js";import"./slim-arrow-down-ZQK8hEoe.js";import"./index-B9IEbrlj.js";import"./index-B0MOGWPf.js";import"./index-BeEOOMQe.js";import"./index-Bd3_gVkF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-3B0bMDQR.js";import"./group-2-D9EY0eAa.js";import"./sort-descending-CQfXaiJr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4vmYggie.js";import"./utils-CQvHdMQU.js";import"./index-CVdG3Tpp.js";import"./index-7KL5Sw8P.js";import"./index-W__nbP8_.js";import"./navigation-down-arrow-CgevP1zB.js";import"./navigation-right-arrow-BljO3jRm.js";import"./navigation-right-arrow-DI1UPgvk.js";import"./useCurrentTheme-D-EAbyTm.js";import"./index-BL0I7ePE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BM3Vsr1m.js";import"./paper-plane-DrlzT1LA.js";import"./index-BltXWBpk.js";import"./less-DjQ8DtUG.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
