import{j as t}from"./iframe-CFWpN4R7.js";import{useMDXComponents as i}from"./index-dB03iz0B.js";import{I as n}from"./CommandsAndQueries-CCwXwUid.js";import{M as m,C as p}from"./blocks-Aj9mLxPA.js";import"./Tag-B06DXZI6.js";import"./index-BhKFh4UU.js";import"./copy-DSqUQhHe.js";import{F as s}from"./Footer-DJewOY_X.js";import"./PageNotFound-CLSfRNnq.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-AwnbcJJV.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-RyF9dh8t.js";import"./index-D83xFEsI.js";import"./index-4-t9AGVk.js";import"./index-DnsyYKyj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_Q3wyl1.js";import"./addCustomCSSWithScoping-CJGgSOK2.js";import"./index-lnQyu4TM.js";import"./index-CeR8RWqv.js";import"./index-nHUwJst8.js";import"./information-CkAnn-lR.js";import"./sys-enter-2-D36-WSJV.js";import"./alert-CoDmVWPa.js";import"./index-B803YP9c.js";import"./Illustrations-dv6stKlC.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJYrTbxl.js";import"./delete-oYHX6VFJ.js";import"./settings-BtBp-qQy.js";import"./NoData-C4imxIub.js";import"./NoFilterResults-Bz2MhsDC.js";import"./index-04ZJmerE.js";import"./IllustratedMessage-Bc8Qdoe-.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CUlUYk0a.js";import"./Input-C-H0NyPN.js";import"./ResponsivePopoverCommon.css-gi_-nTdf.js";import"./ValueStateMessage.css-BXLDmzuy.js";import"./Suggestions.css-DHcwzhot.js";import"./ListBoxItemGroupTemplate-CAS_Tv3n.js";import"./ComboBoxItemGroup-DaaAJODI.js";import"./ListItemBaseTemplate-YeqUv09f.js";import"./Token-BsUCyecE.js";import"./ScrollEnablement-CctUY57C.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-R5Hu6p8-.js";import"./ToggleButton-DAqs2wKA.js";import"./multiselect-all-BoxtuGn8.js";import"./SuggestionItem-CemVcQIM.js";import"./index-CSrNgzI2.js";import"./Option-DnxME5E6.js";import"./index-ZLzfsPTb.js";import"./SegmentedButton-S5xAWCiq.js";import"./index-C017xkvz.js";import"./Select-Ck1JeGEi.js";import"./InvisibleMessage-Be8DiyGj.js";import"./index-B1fSu1UB.js";import"./index-Km-Z_irJ.js";import"./index-Bj-bvpZw.js";import"./index-DBJSqui-.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CK6IqeE4.js";import"./group-2-DzMEyvAW.js";import"./sort-descending-C0_8q9F0.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-xOdXlKkx.js";import"./utils-BncuNKD7.js";import"./index-Gpnmba2H.js";import"./index-DOMLuM49.js";import"./index-DZN-dGo_.js";import"./navigation-down-arrow-CrgxLPHm.js";import"./navigation-right-arrow-B7tVG0rj.js";import"./navigation-right-arrow-BAsSc-Qi.js";import"./useCurrentTheme-kT0-U9p_.js";import"./index-DSCaE3Mt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CXZT-kLk.js";import"./paper-plane-CC1wCXgi.js";import"./index-BM3hZRzv.js";import"./less-BZ4m5AVI.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
