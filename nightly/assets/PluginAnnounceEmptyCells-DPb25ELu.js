import{j as t}from"./iframe-DfTuu2Qs.js";import{useMDXComponents as n}from"./index-tu9Knfll.js";import{I as i,F as m}from"./CommandsAndQueries-CbObYkDi.js";import{M as p,C as s}from"./blocks-DwvFSYgT.js";import"./Tag-a-ykqmZl.js";import"./index-D59W5J0R.js";import"./copy-CAppfZ8d.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CB5kiAXk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEqB_Mrf.js";import"./index-4cmdIwXv.js";import"./index-upgMd0Ps.js";import"./Link-DQEzecZX.js";import"./index-DV0Q9niH.js";import"./index-CHJ4eeD3.js";import"./index-B1cc6DOE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BlYlCK6x.js";import"./addCustomCSSWithScoping-l0p7E_oS.js";import"./index-D-5EknuX.js";import"./information-DFuUDpiC.js";import"./sys-enter-2-B3GhyP7w.js";import"./alert-CmUExS0E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoKMtFET.js";import"./delete-DYVw-TY0.js";import"./settings-D9nwGkWC.js";import"./NoData-DdHsrTKm.js";import"./IllustratedMessage-D0_ymalv.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Be1vXVQP.js";import"./index-Cw8YfcTi.js";import"./index-CV7e3qnP.js";import"./slim-arrow-down-Bhl2nWte.js";import"./Input-B76lxtdv.js";import"./ResponsivePopoverCommon.css-BP9K7x6e.js";import"./ValueStateMessage.css-TCHVXLEw.js";import"./Suggestions.css-Pfvf1GJg.js";import"./ListBoxItemGroupTemplate-CDN4ALTG.js";import"./ComboBoxItemGroup-BH5B9cpG.js";import"./ListItemBaseTemplate-D1uFrlaA.js";import"./Token-D4TeWFku.js";import"./ScrollEnablement-CRIFALzU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CshbuJzo.js";import"./ToggleButton-CwHG-y71.js";import"./SuggestionItem-DGN5b14S.js";import"./index-RBLRU_sl.js";import"./Option-BbQCz44h.js";import"./index-BOCJCl5X.js";import"./SegmentedButton-oliJxwDI.js";import"./index-ECWd-FKG.js";import"./Select-BLczAWPe.js";import"./InvisibleMessage-CNnUIwgG.js";import"./slim-arrow-down-yzUP4cof.js";import"./index-CAlOL0VM.js";import"./index-CQE4zKbm.js";import"./index-CZ2dIko2.js";import"./index-DzevBiS7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JkMKr1H-.js";import"./group-2-CaiuqVlS.js";import"./sort-descending-BRpdcvqz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BSnTmES7.js";import"./utils-ZLpPM_1a.js";import"./index-DQM6KvvS.js";import"./index-CRmrR_Od.js";import"./index-CTOZYk49.js";import"./navigation-down-arrow-BTOOMHmS.js";import"./navigation-right-arrow-DEKgAHUd.js";import"./navigation-right-arrow-DZaHUhdt.js";import"./useCurrentTheme-DGG68oxl.js";import"./index-gcgg4h2j.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BXblpA9j.js";import"./paper-plane-DDMey8sA.js";import"./index-D8AaX0Z0.js";import"./less-D2q1q7Ef.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
