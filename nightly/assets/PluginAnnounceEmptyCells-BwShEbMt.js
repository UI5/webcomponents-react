import{j as t}from"./iframe-JQDqhQTc.js";import{useMDXComponents as n}from"./index-SjG54pW2.js";import{I as i,F as m}from"./CommandsAndQueries-Crv-3Mfa.js";import{M as p,C as s}from"./blocks-DPmUjEjQ.js";import"./Tag-DGi-8g-u.js";import"./index-lJfxqfBt.js";import"./copy-t9TmEwA0.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-HEUlY7W4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLqk7pLq.js";import"./index-BKiGQD-R.js";import"./index-CUZKwPNc.js";import"./Link-Dpu-eDDr.js";import"./index-BFgRiJXe.js";import"./index-DcWtp55E.js";import"./index-BIpZPYH3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5_fArc3.js";import"./addCustomCSSWithScoping-c6XYl4zv.js";import"./index-BpgBwQjv.js";import"./information-DOgKPosF.js";import"./sys-enter-2-C0saRr3v.js";import"./alert-C_Y0d_GP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-fCo2PB5C.js";import"./delete-CLRGeIuZ.js";import"./settings-H07MeRfs.js";import"./NoData-DPeONLDW.js";import"./IllustratedMessage-DAIw2KHQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D-1p37yV.js";import"./index-DirchfVR.js";import"./index-D6Ko23ug.js";import"./slim-arrow-down-DtGaajwt.js";import"./Input-DzNOpfWd.js";import"./ResponsivePopoverCommon.css-uDfhSOOV.js";import"./ValueStateMessage.css-D_eI0sN-.js";import"./Suggestions.css-CHR_q4Cp.js";import"./ListBoxItemGroupTemplate-DEm09n7m.js";import"./ComboBoxItemGroup-DMLXAAki.js";import"./ListItemBaseTemplate-Dxaw3pkc.js";import"./Token-C9iKSxX5.js";import"./ScrollEnablement-CV3Pn2pj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DASuqUXG.js";import"./ToggleButton--p8Szuzt.js";import"./SuggestionItem-BAKzXr6j.js";import"./index-DvnAgan1.js";import"./Option-CEDBR-Bt.js";import"./index-eBAbrGNN.js";import"./SegmentedButton-Rqs6WWYK.js";import"./index-Y1J8yyR5.js";import"./Select-DfABSeaX.js";import"./InvisibleMessage-CFQZBAEm.js";import"./slim-arrow-down-CnNq3tWC.js";import"./index-D31LJD9X.js";import"./index-8ECVBj85.js";import"./index-BbzV54Ib.js";import"./index-CV-nf5lU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DdWNEJu_.js";import"./group-2-BZUFZ_mF.js";import"./sort-descending-BXUKtHbT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fI0mUgfo.js";import"./utils-BBO9bjZR.js";import"./index-BaCIHOce.js";import"./index-mdq0FRsA.js";import"./index-Bz-Pghpc.js";import"./navigation-down-arrow-B-pSqjVl.js";import"./navigation-right-arrow-C9hFnSZf.js";import"./navigation-right-arrow-D5ZYuJjY.js";import"./useCurrentTheme-dEMZXqrK.js";import"./index-yCViCBv9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzjLx_qb.js";import"./paper-plane-CNtGouJp.js";import"./index-C5yyMQAi.js";import"./less-CNnQlmUL.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
