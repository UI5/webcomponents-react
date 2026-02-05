import{j as t}from"./iframe-DVaoJynC.js";import{useMDXComponents as n}from"./index-D8trWAUj.js";import{I as i,F as m}from"./CommandsAndQueries-DmxPE0MZ.js";import{M as p,C as s}from"./blocks-CrqJ-Z31.js";import"./Tag--1vn2ouf.js";import"./index-CpBbNRGM.js";import"./copy-DE_2j5FQ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DOBjcAeS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrdrDGzw.js";import"./index-xNxGNywP.js";import"./index-1ngZk4Q4.js";import"./Link-Q_Ld2CqF.js";import"./index-qrdXuh6V.js";import"./index-DDgoCywP.js";import"./index-dYIL-oMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-V3cCpaGB.js";import"./addCustomCSSWithScoping-CedcLW5T.js";import"./index-DW_Y2aM_.js";import"./information-BslaWIIc.js";import"./sys-enter-2-iJEMuBvO.js";import"./alert-DlPbm_nn.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ByjmV8TX.js";import"./delete-C5YMqpOL.js";import"./settings-d6RTuHxS.js";import"./NoData-BrDVqhYl.js";import"./IllustratedMessage-DSeDOabw.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B1sGl9VQ.js";import"./index-DIUkg0Bi.js";import"./index-DlYrVi7e.js";import"./slim-arrow-down-DblcDTH-.js";import"./Input-DJnlitcX.js";import"./ResponsivePopoverCommon.css-a0LTy8oR.js";import"./ValueStateMessage.css-CxQEDxip.js";import"./Suggestions.css-gCSTg-U6.js";import"./ListBoxItemGroupTemplate-DjbBkz5B.js";import"./ComboBoxItemGroup-BgJNW9a2.js";import"./ListItemBaseTemplate-COydBmQa.js";import"./Token-BSwTugba.js";import"./ScrollEnablement-D-0-sBKz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dJtbJvai.js";import"./ToggleButton-DtAyHkvM.js";import"./SuggestionItem-VJ7PiMQr.js";import"./index-Dv6upnSV.js";import"./Option-CxhLxOlt.js";import"./index-DXNRk6WZ.js";import"./SegmentedButton-CwKnK_Zk.js";import"./index-DUJ3en-c.js";import"./Select-DWMoFafZ.js";import"./InvisibleMessage-6n9UFl41.js";import"./slim-arrow-down-Bug18Bzw.js";import"./index-CF3T_Rux.js";import"./index-BO8JvDII.js";import"./index-A1tOTDKa.js";import"./index-D0XhROSl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-v-o7NIgL.js";import"./group-2-DFNtb2FF.js";import"./sort-descending-D8RrH-Tr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dyt-PFJH.js";import"./utils-Bi-_D6jF.js";import"./index-flUwuEIb.js";import"./index-BPU2VOiy.js";import"./index-CeHR8ypK.js";import"./navigation-down-arrow-CwSnvoD7.js";import"./navigation-right-arrow-DqGIwB48.js";import"./navigation-right-arrow-DGKZ_ZhO.js";import"./useCurrentTheme-DsBFWJ7L.js";import"./index-B3rGDK-q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BYo7ps0s.js";import"./paper-plane-Dn8GiRfM.js";import"./index-DpV1kB7w.js";import"./less-J5QHLwwU.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
