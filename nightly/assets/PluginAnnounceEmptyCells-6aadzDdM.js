import{j as t}from"./iframe-datodc_T.js";import{useMDXComponents as n}from"./index-c_OJYfdv.js";import{I as i,F as m}from"./CommandsAndQueries-9K4be_0B.js";import{M as p,C as s}from"./blocks-C83taKT5.js";import"./Tag-aYNaIA2f.js";import"./index-BxYLcFT1.js";import"./copy-fv_X0Lju.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BaM2_rwk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaqpJvlq.js";import"./index-D2t_qzWG.js";import"./index-DHA5QYCq.js";import"./Link-CguLCm0R.js";import"./index-Dsm5uoLy.js";import"./index-Be6r5cNn.js";import"./index-D6USDY88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpNALNgF.js";import"./addCustomCSSWithScoping-DKvV4UVz.js";import"./index-CjE0y9ul.js";import"./information-BVFOZm1x.js";import"./sys-enter-2-D-jHJs9Q.js";import"./alert-Bayru5wq.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CAzHk7rR.js";import"./delete-DXGxUBFJ.js";import"./settings-CnIM11gG.js";import"./NoData-Bg_nN4Ms.js";import"./IllustratedMessage-FAiLLqQm.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-C_Ze1Ot5.js";import"./index-DL49zsqR.js";import"./index-Dm0QMFQr.js";import"./slim-arrow-down-BpOTE9Sk.js";import"./Input-CDJ2DRSv.js";import"./ResponsivePopoverCommon.css-DAKPNunD.js";import"./ValueStateMessage.css-CEIz9T_f.js";import"./Suggestions.css-ChFuC62o.js";import"./ListBoxItemGroupTemplate-xCqQRAqq.js";import"./ComboBoxItemGroup-BQPgaauk.js";import"./ListItemBaseTemplate-BzV0IEmk.js";import"./Token-CJyx5jqh.js";import"./ScrollEnablement-D4RYTcKh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6D8woMn.js";import"./ToggleButton-BVZwG_x-.js";import"./SuggestionItem-CqDeh5_U.js";import"./index-CbCR8boR.js";import"./Option-CVMzB-n9.js";import"./index-D9bgmN4m.js";import"./SegmentedButton-CtnCASEY.js";import"./index-DZXo1Lf-.js";import"./Select-K4JlHpwq.js";import"./InvisibleMessage-DefiGhym.js";import"./slim-arrow-down-CHOtDAsV.js";import"./index-DREcmMyl.js";import"./index-CeAFf5ct.js";import"./index-BcGlK5zk.js";import"./index-C_9-hdCb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BPHKdgmP.js";import"./group-2-BVTcmh9u.js";import"./sort-descending-COPXAaLI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-FSQedhzd.js";import"./utils-CpZ624O0.js";import"./index-Bxul-iwv.js";import"./index-aiYgqcNK.js";import"./index-BN9iyOuA.js";import"./navigation-down-arrow-BZsH8zxo.js";import"./navigation-right-arrow-S8XLmecj.js";import"./navigation-right-arrow-9AFNUP8t.js";import"./useCurrentTheme-D5sOw72D.js";import"./index-nqz7Kjs0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Csf7JH7H.js";import"./paper-plane-Dsk0svE7.js";import"./index-DLlxXcZX.js";import"./less-DpRUb2Cv.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
