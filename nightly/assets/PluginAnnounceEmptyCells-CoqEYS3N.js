import{j as t}from"./iframe-DxaU3ukP.js";import{useMDXComponents as n}from"./index-Bu64E7xz.js";import{I as i,F as m}from"./CommandsAndQueries-CWzmGACf.js";import{M as p,C as s}from"./blocks-shsJXsJu.js";import"./Tag-HWB4mzIK.js";import"./index-BuSb9dlo.js";import"./copy-iAtgzS7e.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CvnNq-Rx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCr6QTyS.js";import"./index-4KyKvZuP.js";import"./index-DJhOYGHM.js";import"./Link-B8iiEW6g.js";import"./index-wIV-Jx7Q.js";import"./index-B4KIHpYZ.js";import"./index-CCQGvtXt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-P9_4H6jZ.js";import"./addCustomCSSWithScoping-DcrmHllZ.js";import"./index-DBN874s0.js";import"./information-Y-FlrSb9.js";import"./sys-enter-2-Cl_Hs57G.js";import"./alert-xbLWAWtw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYhdiQD5.js";import"./delete-BS7GLbbQ.js";import"./settings-BAtFRTLl.js";import"./NoData-P0aiFWNe.js";import"./IllustratedMessage-b_ym9Hb3.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BjgjNlcX.js";import"./index-DmQ0Wp9f.js";import"./index-DQK5zeFS.js";import"./slim-arrow-down-fGj_LI5J.js";import"./Input-D_YVohIg.js";import"./ResponsivePopoverCommon.css-DNS4oV3Y.js";import"./ValueStateMessage.css-DpHhcDZf.js";import"./Suggestions.css-CaY-hH4G.js";import"./ListBoxItemGroupTemplate-BajDE4jz.js";import"./ComboBoxItemGroup-CSbTFdho.js";import"./ListItemBaseTemplate-Dhr4Rhd3.js";import"./Token-C4NZa-ox.js";import"./ScrollEnablement-DfjnlUNY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-FvkwmzYL.js";import"./ToggleButton-CzTCoMTN.js";import"./SuggestionItem-CRPTOIvP.js";import"./index-ngowydBr.js";import"./Option-C0Uvoc7q.js";import"./index-tLjFiak6.js";import"./SegmentedButton-BrZOqfR3.js";import"./index-DMRgWmpo.js";import"./Select-B8Q3fF-g.js";import"./InvisibleMessage-Vimf6Y5N.js";import"./slim-arrow-down-DRqlReJZ.js";import"./index-BVH6V1yj.js";import"./index-B8fGZl2t.js";import"./index-rAT2WEiI.js";import"./index-C3UD1Hqj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DB4Xqkcu.js";import"./group-2-JYhBavgn.js";import"./sort-descending-BWym6GfS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hJi7DpYf.js";import"./utils-rEWueUxT.js";import"./index-DPFDbPpv.js";import"./index-C4sy8ZPw.js";import"./index-0BAFT4SC.js";import"./navigation-down-arrow-Bb0q6ooJ.js";import"./navigation-right-arrow-agwdLGP0.js";import"./navigation-right-arrow-DxjP7dnY.js";import"./useCurrentTheme-bdMlbWTW.js";import"./index-Dd-sbQ45.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-TKZ3-owy.js";import"./paper-plane-GGpDAgH5.js";import"./index-CTUD2-bS.js";import"./less-Bd6W-74P.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
