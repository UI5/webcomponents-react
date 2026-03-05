import{j as t}from"./iframe-Dp_0Yhmg.js";import{useMDXComponents as i}from"./index-BMV3GZRz.js";import{I as n}from"./CommandsAndQueries-DDLi5yBU.js";import{M as m,C as p}from"./blocks-CKlkgOe3.js";import"./Tag-CNZu_-1j.js";import"./index-nFX3Pl_S.js";import"./copy-BMHKKbyO.js";import{F as s}from"./Footer-Pq4yDBwS.js";import"./PageNotFound-BsRlbC58.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-V88yIYjm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DcMDvp4G.js";import"./index-DzgaNcC5.js";import"./index-C5vcogVt.js";import"./index-T5J1jf5G.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCqFx9Uj.js";import"./addCustomCSSWithScoping-CZYJlNXb.js";import"./index-Cu_XsrMy.js";import"./index-DXry597q.js";import"./index-DjJhZI7Y.js";import"./information-gl9SwVgW.js";import"./sys-enter-2-0WtHGlhQ.js";import"./alert-Bcw4Fg6E.js";import"./index-DpBR8FGa.js";import"./Illustrations-bZxTgUi1.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DZlU0_nw.js";import"./delete-DqKBQPKu.js";import"./settings-O9lrexvt.js";import"./NoData-Dg0Hqj8X.js";import"./NoFilterResults-BPGK8QO_.js";import"./index-K5CBibs9.js";import"./IllustratedMessage-BMmkB-iU.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-tFfwrzuZ.js";import"./slim-arrow-down-BC4mtdbv.js";import"./Input-CRrnYeQZ.js";import"./ResponsivePopoverCommon.css-h1W8s5fZ.js";import"./ValueStateMessage.css-Bf7fXuVn.js";import"./Suggestions.css-nwnFE4qJ.js";import"./ListBoxItemGroupTemplate-BKRsXqLf.js";import"./ComboBoxItemGroup-D-EcnRF3.js";import"./ListItemBaseTemplate-BZikYPsL.js";import"./Token-BlNZY41K.js";import"./ScrollEnablement-DIUnalZp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B-TzNdgp.js";import"./ToggleButton-BjDcT3J0.js";import"./SuggestionItem-BE-Ftq-K.js";import"./index-Cfr2EVXu.js";import"./Option-DPpzprMH.js";import"./index-DrO4gkBj.js";import"./SegmentedButton-7Tky5Pfm.js";import"./index-DrYCygiX.js";import"./Select-CURJ6tOv.js";import"./InvisibleMessage-B2w_5M6j.js";import"./slim-arrow-down-CDgGjVrM.js";import"./index-CFOVWAzR.js";import"./index-DMoBwtGT.js";import"./index-CHwuhYIq.js";import"./index-cGopohf8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Da6TJjGQ.js";import"./group-2-CLfZKXSW.js";import"./sort-descending-CRkRUk04.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bql-qSdh.js";import"./utils-CxnTFJIb.js";import"./index-D8f-xZlT.js";import"./index-DovYOhn7.js";import"./index-BmzNDvvc.js";import"./navigation-down-arrow-DZaQ3Z_i.js";import"./navigation-right-arrow-CbfpzaeK.js";import"./navigation-right-arrow-CH2tup3m.js";import"./useCurrentTheme-DddtRzkQ.js";import"./index-CjzqcDm-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-anVy-FXS.js";import"./paper-plane-FPbukG19.js";import"./index-BPv30PhM.js";import"./less-CaYfSCWa.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
