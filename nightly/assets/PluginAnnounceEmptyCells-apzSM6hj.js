import{j as t}from"./iframe-DvHwewhR.js";import{useMDXComponents as n}from"./index-CLaogw5S.js";import{I as i,F as m}from"./CommandsAndQueries-BNdncSiU.js";import{M as p,C as s}from"./blocks-CB2I7-76.js";import"./Tag-CbT4PDaW.js";import"./index-Bt09l3yh.js";import"./copy-CCEG4Gow.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dd_rnw90.js";import"./preload-helper-PPVm8Dsz.js";import"./index-KqEBtHRf.js";import"./index-BPXy8zzT.js";import"./index-CdEjZa35.js";import"./Link-BbkEIv5w.js";import"./index-Dm8v7iX1.js";import"./index-BcAV-ghG.js";import"./index-BpY-7uI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoI2TKPf.js";import"./addCustomCSSWithScoping-B6Lor8tu.js";import"./index-Dxi3lBUy.js";import"./information-CIIJNTCs.js";import"./sys-enter-2-CzO95d9X.js";import"./alert-Dwvb1Up2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DiieVpdk.js";import"./delete-C50WcJDY.js";import"./settings-DvTsYRr7.js";import"./NoData-iB_8MDPa.js";import"./IllustratedMessage-oVo54I0H.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-cHrD6kwg.js";import"./index-CEYEmD8k.js";import"./index-8-MFD30_.js";import"./slim-arrow-down-BCqe8rnW.js";import"./Input-5FKrcxfj.js";import"./ResponsivePopoverCommon.css-CyL8R70X.js";import"./ValueStateMessage.css-BKuLTXW_.js";import"./Suggestions.css-Bkx-OrvG.js";import"./ListBoxItemGroupTemplate-CJ4lliK3.js";import"./ComboBoxItemGroup-4ruschY4.js";import"./ListItemBaseTemplate-T-VZoBk6.js";import"./Token-Z5rUiF0C.js";import"./ScrollEnablement-BGx-icSx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRn_nQZN.js";import"./ToggleButton-CNBbGQUy.js";import"./SuggestionItem-D9PSkBzC.js";import"./index-B_6zM4N5.js";import"./Option-B4P7V8L-.js";import"./index-D86-Sydy.js";import"./SegmentedButton-Drzzk-Ka.js";import"./index-CzCKZDhR.js";import"./Select-CiA18WXr.js";import"./InvisibleMessage-zD0IVsFW.js";import"./slim-arrow-down-DzbDBKGu.js";import"./index-BZCe37Rq.js";import"./index-pKYM4Amv.js";import"./index-Cl1O2yFh.js";import"./index-BtAgcYwE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bp1zhNyd.js";import"./group-2-CzlS2QWU.js";import"./sort-descending-B3IM8fpN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D_C7dAq5.js";import"./utils-D_wMeGo0.js";import"./index-CwfhL7TS.js";import"./index-DTHM9nkb.js";import"./index-uElYT7C3.js";import"./navigation-down-arrow-CvLDjJLV.js";import"./navigation-right-arrow-BYbNeqhe.js";import"./navigation-right-arrow-CCD3zipp.js";import"./useCurrentTheme-B8H1HpgT.js";import"./index-BOCVDdbZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C4H1iq0n.js";import"./paper-plane-DmQ3DckA.js";import"./index-DegyXyKA.js";import"./less-CIWKEBFR.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
