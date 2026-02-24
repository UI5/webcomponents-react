import{j as t}from"./iframe-DT5KgGlD.js";import{useMDXComponents as n}from"./index-2sr9OpVj.js";import{I as i,F as m}from"./CommandsAndQueries-DUx0SL0h.js";import{M as p,C as s}from"./blocks-AEZCJTmh.js";import"./Tag-CrMaDk-2.js";import"./index-Il5MAk-V.js";import"./copy-Cn_--9_F.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CsveTDJU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtfaCgXN.js";import"./index-BKh4jaT0.js";import"./index-lGK2xfSC.js";import"./Link-BOLH3Y-N.js";import"./index-COS65dGe.js";import"./index-DCWap5Ti.js";import"./index-CSwD_ZHb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-gNg07s8V.js";import"./addCustomCSSWithScoping-DrxYXnwA.js";import"./index-DyR_rB-Y.js";import"./information-CjpvzeET.js";import"./sys-enter-2-CcCsly0B.js";import"./alert-Dhl1tRDJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWKoSmBW.js";import"./delete-CohcJEgP.js";import"./settings-BewuPKdX.js";import"./NoData-DltE47q7.js";import"./IllustratedMessage-BawN7Wqr.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DgTqDT0D.js";import"./index-BJ6ykXKR.js";import"./index-B8f0YgKC.js";import"./slim-arrow-down-BCtN8SJB.js";import"./Input-I-AKHfs1.js";import"./ResponsivePopoverCommon.css-BPBhFUbf.js";import"./ValueStateMessage.css-BGYmnVw2.js";import"./Suggestions.css-DA2UVS5X.js";import"./ListBoxItemGroupTemplate-Cd3zTBbN.js";import"./ComboBoxItemGroup-BpsJm26p.js";import"./ListItemBaseTemplate-C16Cppj1.js";import"./Token-DlKQA3E2.js";import"./ScrollEnablement-CAbtfiLJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-pC6bfYbG.js";import"./ToggleButton-BsvGKjKP.js";import"./SuggestionItem-Be5m2pdi.js";import"./index-BxTPhBvm.js";import"./Option-D0YYNVbE.js";import"./index-CK2Bq9ni.js";import"./SegmentedButton-CSjW8EsR.js";import"./index-JEQwvvE3.js";import"./Select-BWRVl5xO.js";import"./InvisibleMessage-Bxlb59Q-.js";import"./slim-arrow-down-CJxt2IBk.js";import"./index-BZK44fn8.js";import"./index-Cvxmvmd5.js";import"./index-1OsylIRz.js";import"./index-CyPn5paG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DqCcIIbC.js";import"./group-2-k0-NGrpU.js";import"./sort-descending-CGv5TfNy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DIGppw86.js";import"./utils-D33GDmvH.js";import"./index-Cod7H4Q4.js";import"./index-DuzRGPxi.js";import"./index-CdxdX8AI.js";import"./navigation-down-arrow-CfkoPZ7s.js";import"./navigation-right-arrow-qrJ8C8QD.js";import"./navigation-right-arrow-D4lDQVr2.js";import"./useCurrentTheme-DaZyrile.js";import"./index-z1-YLvBX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ngYbJf9G.js";import"./paper-plane-K2_yiYx7.js";import"./index-_z6JI7Dv.js";import"./less-BJWr5WMr.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
