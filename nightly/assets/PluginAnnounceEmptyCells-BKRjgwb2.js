import{j as t}from"./iframe-CFFJFWfd.js";import{useMDXComponents as i}from"./index-C3RjxUM6.js";import{I as n}from"./CommandsAndQueries-F7dXP8Ck.js";import{M as m,C as p}from"./blocks-DNe1XYus.js";import"./Tag-Dq-_fpcq.js";import"./index-nJISZmsL.js";import"./copy-BWzo1FZ0.js";import{F as s}from"./Footer-DnJjuNkf.js";import"./PageNotFound-fKWlSVqv.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CdF9lylj.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DBWxZpb0.js";import"./index-BC7P3Gk3.js";import"./index-B7FuneXO.js";import"./index-CLuk8Jv1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-peyxdL93.js";import"./addCustomCSSWithScoping-VUX5a_xd.js";import"./index-CQKrmUSc.js";import"./index-IkzBWQiA.js";import"./index-Czxe8PfH.js";import"./information-WOvhwCn0.js";import"./sys-enter-2-CCYEhAsr.js";import"./alert-DdBL9zU_.js";import"./index-ElIMq8Rj.js";import"./Illustrations-DDY2i5oH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-EKfiG3Fa.js";import"./delete-DtBMPPYI.js";import"./settings-DdHa5ubw.js";import"./NoData-DyNhEZJR.js";import"./NoFilterResults-bwHu1ERi.js";import"./index-0QvQLss1.js";import"./IllustratedMessage-BkbaiACi.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CuHMS1RV.js";import"./Input-BHKuVU6t.js";import"./ResponsivePopoverCommon.css-Cveld8fW.js";import"./ValueStateMessage.css-DXT8WQZS.js";import"./Suggestions.css-Dm2tVJec.js";import"./ListBoxItemGroupTemplate-DxqqjI46.js";import"./ComboBoxItemGroup-Bku5VfH-.js";import"./ListItemBaseTemplate-9ZhEBgKt.js";import"./Token-DcXtyL6g.js";import"./ScrollEnablement-BLsPTkqE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-qwVkMKWU.js";import"./ToggleButton-D_tJ2vbW.js";import"./multiselect-all-CyxbEiBJ.js";import"./SuggestionItem-DCktFcTr.js";import"./index-B_Eo-b6w.js";import"./Option-BDyuoaZO.js";import"./index-CWc_WrrH.js";import"./SegmentedButton-B1Tohu53.js";import"./index-7J1NV0o6.js";import"./Select-Bes44jLo.js";import"./InvisibleMessage-Cy7aSRbc.js";import"./index-BgrKLYxO.js";import"./index-D15LFaL3.js";import"./index-CdhA5I3N.js";import"./index-BBFHvhOZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CoxBPUnm.js";import"./group-2-DOlXR04O.js";import"./sort-descending-z4I1bWza.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cf1nMP5r.js";import"./utils-CFkMxqYD.js";import"./index-D7w2Sj2n.js";import"./index-DAZWslzM.js";import"./index-BO89QR1s.js";import"./navigation-down-arrow-BoQioZe5.js";import"./navigation-right-arrow-Cv1wbDCF.js";import"./navigation-right-arrow-C27xMKS4.js";import"./useCurrentTheme-CQl-w7g2.js";import"./index-ONUC9f2y.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CR_KQBHD.js";import"./paper-plane-BG_-Xj9j.js";import"./index-c3HFKggR.js";import"./less-CKyJRnW1.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
