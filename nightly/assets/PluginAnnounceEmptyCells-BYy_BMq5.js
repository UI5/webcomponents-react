import{j as t}from"./iframe-CSs3GcCz.js";import{useMDXComponents as n}from"./index-1VYUEsB4.js";import{I as i,F as m}from"./CommandsAndQueries-Dzepq0rT.js";import{M as p,C as s}from"./blocks-DlOiJG9w.js";import"./Tag-tq7bvH7x.js";import"./index-Bv5UQAtB.js";import"./copy-A0b4Giju.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-tvuh3a0Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jfbseB2e.js";import"./index-C2PP5dg7.js";import"./index-kEy_zqDf.js";import"./Link-Bs0GSE9o.js";import"./index-CNpYG1J4.js";import"./index-C-kYIaXe.js";import"./index-BXC6vCLS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoJGLxs9.js";import"./addCustomCSSWithScoping-DvKIlldN.js";import"./index-IS643aT1.js";import"./information-AyutgqL-.js";import"./sys-enter-2-Cfi5ZTIT.js";import"./alert-CpO7ww38.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-0iXmKLmk.js";import"./delete-BC4d-M8w.js";import"./settings-DFb0bSTd.js";import"./NoData-Cj60GkAW.js";import"./IllustratedMessage-CuN3Ew7z.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DSUbnOu6.js";import"./index-J5vl0EEq.js";import"./index-C2VWI5a1.js";import"./slim-arrow-down-B7OBTn9O.js";import"./Input-DdGahQ8p.js";import"./ResponsivePopoverCommon.css-B6aP4EWz.js";import"./ValueStateMessage.css-rStVzh3o.js";import"./Suggestions.css-DVjfbfM-.js";import"./ListBoxItemGroupTemplate-DCz12Yoy.js";import"./ComboBoxItemGroup-BRoNWA4Q.js";import"./ListItemBaseTemplate-iIRKaqk5.js";import"./Token-CvT8k6R4.js";import"./ScrollEnablement-DHd31uDD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-0uLaXWUR.js";import"./ToggleButton-CKrLeVvI.js";import"./SuggestionItem-DwtoFM4A.js";import"./index-Bb7WnMUY.js";import"./Option-CfsJHbV6.js";import"./index-HkRG_gjA.js";import"./SegmentedButton-Cj_0JQrp.js";import"./index-Cijq7tDb.js";import"./Select-DCYdBJjt.js";import"./InvisibleMessage-BcP-U2lm.js";import"./slim-arrow-down-BFCOZBmI.js";import"./index-DAo-SJVY.js";import"./index-CWMZCKYl.js";import"./index-BIWIZz99.js";import"./index-D21M5qi1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CldNOsRY.js";import"./group-2-BlKb3z6k.js";import"./sort-descending-D9zZt52A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6Gtit63.js";import"./utils-D-NrFFbe.js";import"./index-BiChlU0_.js";import"./index-DjZAsHPB.js";import"./index-GjEC5C4h.js";import"./navigation-down-arrow-B5OEHJzH.js";import"./navigation-right-arrow-COj-HSTI.js";import"./navigation-right-arrow-DuUHDn6z.js";import"./useCurrentTheme-CbFE_1cS.js";import"./index-BsKxNe-0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D5q-dcwP.js";import"./paper-plane-BSVrRvcJ.js";import"./index-vOXR-MYi.js";import"./less-CZvmS1u8.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
