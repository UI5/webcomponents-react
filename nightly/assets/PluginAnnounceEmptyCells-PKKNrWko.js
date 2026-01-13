import{j as t}from"./iframe-BiIJdVyr.js";import{useMDXComponents as n}from"./index--rLY9036.js";import{I as i,F as m}from"./CommandsAndQueries-D08-AnOE.js";import{M as p,C as s}from"./blocks-BFHpLm1y.js";import"./Tag-Bq1oXArm.js";import"./index-e3YpZRrx.js";import"./copy-BPqkJYr8.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BcEQ8L2G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-5WE_OvnW.js";import"./index-D-2Xy6-7.js";import"./index-DvsRYyu2.js";import"./Link-Bm6hDi5n.js";import"./index-CjEEWo15.js";import"./index-NQDiuZnO.js";import"./index-D5j3aFdB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSKVbp8f.js";import"./addCustomCSSWithScoping-syEQKqx0.js";import"./index-Dh7QOf24.js";import"./information-SSL8fTlY.js";import"./sys-enter-2-DpynL0zo.js";import"./alert-Cg_jUYoP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BKcuFWs0.js";import"./delete-DU5JPvil.js";import"./settings-CAMQwqmo.js";import"./NoData-CS9d_T0F.js";import"./IllustratedMessage-DUoAl3Os.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Dhw3wtOK.js";import"./index-BrXkRr4R.js";import"./index-B_5Bk2gc.js";import"./slim-arrow-down-SFAyp675.js";import"./Input-DGQILfbB.js";import"./ResponsivePopoverCommon.css-DHGIMiJp.js";import"./ValueStateMessage.css-BxEbM0ZH.js";import"./Suggestions.css-BMP_MqwS.js";import"./ListBoxItemGroupTemplate-DIeTn5uD.js";import"./ComboBoxItemGroup-zJxojY-y.js";import"./ListItemBaseTemplate-BNaOpv56.js";import"./Token-B7UTvzfg.js";import"./ScrollEnablement-elkrwhQK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ch3b8ATr.js";import"./ToggleButton-C3ZCJHYy.js";import"./SuggestionItem-S-IdKs5T.js";import"./index-BzcV6bM9.js";import"./Option-Cz8g5WWG.js";import"./index-CMaWI52k.js";import"./SegmentedButton-B381Bdph.js";import"./index-Ckl4FRii.js";import"./Select-C-GaGD0T.js";import"./InvisibleMessage-B6Ycx_Pm.js";import"./slim-arrow-down-BYajRtDR.js";import"./index-BfmQkxfZ.js";import"./index-CpUxheOc.js";import"./index-CMdYQA8p.js";import"./index-BzF6Y4F3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CPTMokL8.js";import"./group-2-04jHDyvg.js";import"./sort-descending-Og-hQ95c.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gpTxbnHr.js";import"./utils-DhSRaKWy.js";import"./index-jP1C0Meo.js";import"./index-DQqc6G4F.js";import"./index-DQIER8Qr.js";import"./navigation-down-arrow-CM77MDkP.js";import"./navigation-right-arrow-DuT2Agvz.js";import"./navigation-right-arrow-FD0mFBSd.js";import"./useCurrentTheme-DHGbHcPn.js";import"./index-BTuni5mo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-J8i0PIKg.js";import"./paper-plane-SEQuxJaq.js";import"./index-BRiU5eaI.js";import"./less-CwBaSYHB.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
