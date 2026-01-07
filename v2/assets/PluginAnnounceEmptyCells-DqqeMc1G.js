import{j as t}from"./iframe-CfxMerL-.js";import{useMDXComponents as n}from"./index-VbSVpo3U.js";import{I as i,F as m}from"./CommandsAndQueries-Dg2B8ke5.js";import{M as p,C as s}from"./blocks-MJ_5uOZ-.js";import"./Tag-BNqMWY4P.js";import"./index-BI2nwMUJ.js";import"./copy-B6ViSnKB.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B_Wpf4B4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DP6bCfzy.js";import"./index-IP6CGDwM.js";import"./index-BYZXhHpQ.js";import"./Link-BitnWoH9.js";import"./index-BTQ4bVGw.js";import"./index-DTz3tRU0.js";import"./index-DjUM5b1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC5ToBw2.js";import"./addCustomCSSWithScoping-El6BaIIi.js";import"./index-B0xbheog.js";import"./information-V-ZI-MUr.js";import"./sys-enter-2-BPqtZ6Ae.js";import"./alert-BY-nhKm6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BsCEz7ib.js";import"./delete-D7RS9M-y.js";import"./settings-DEtPc8Wj.js";import"./NoData-B_-T5WI3.js";import"./IllustratedMessage-BZNw5Wiu.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BnYjPhI7.js";import"./index-bif26s3P.js";import"./index-Cwf7lSCC.js";import"./slim-arrow-down-d9rX3ebS.js";import"./Input-D3np0nF3.js";import"./ResponsivePopoverCommon.css-DjynAZOg.js";import"./ValueStateMessage.css-DkCKabc6.js";import"./Suggestions.css-MQWeG9TG.js";import"./ListBoxItemGroupTemplate-CM5NZpBA.js";import"./ComboBoxItemGroup-BrUfLYBK.js";import"./ListItemBaseTemplate-Cy-PquU_.js";import"./Token-ne2P8_To.js";import"./ScrollEnablement-ziMxJENG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BVYApwgA.js";import"./ToggleButton-BZRyXu7G.js";import"./SuggestionItem-BlVIKvF5.js";import"./index-BAwfKYgr.js";import"./Option-C1QKLt8h.js";import"./index-HY2ZsT1u.js";import"./SegmentedButton-B1Kk8DVS.js";import"./index-4mdijd2N.js";import"./Select-kSz6MKWU.js";import"./InvisibleMessage-et9yvTH3.js";import"./slim-arrow-down-Dqgy0Zme.js";import"./index-D8Qeadr9.js";import"./index-ri-WXBZU.js";import"./index-BKIcMWwD.js";import"./index-Cr9UVhXj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Btv3_sW8.js";import"./group-2-nZBOHX9Q.js";import"./sort-descending-BSyKh4wL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CtFTNZfH.js";import"./utils-DGabngUu.js";import"./index-BRkWBZ5K.js";import"./index-CHJ4GtUC.js";import"./index-BPqtDCmb.js";import"./navigation-down-arrow-7qCnXGQg.js";import"./navigation-right-arrow-BsRz9Oss.js";import"./navigation-right-arrow-B0sX5CVs.js";import"./useCurrentTheme-BhGBafEw.js";import"./index-C5nYMhvF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1OO3TS9.js";import"./paper-plane-CwGGMTBs.js";import"./index-BAq-T-Uj.js";import"./less-DABYie6s.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
