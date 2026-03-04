import{j as t}from"./iframe-CLKwUGEX.js";import{useMDXComponents as n}from"./index-DCuwspND.js";import{I as i,F as m}from"./CommandsAndQueries-dz6NHoyr.js";import{M as p,C as s}from"./blocks-Dh7hbfcJ.js";import"./Tag-CfLVXJVc.js";import"./index-h52TWGHx.js";import"./copy-BrK10eH_.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DdSElbyf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Veg9_1qu.js";import"./index-ZH4BIl7e.js";import"./index-CkL1gWNe.js";import"./Link-Bqvbz9lT.js";import"./index-CL8a7czm.js";import"./index-CRtbNwl1.js";import"./index-BIRKClWd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYpAqTMA.js";import"./addCustomCSSWithScoping-Ckj5BS6-.js";import"./index-CuwqMzEM.js";import"./information-D0EfmlkL.js";import"./sys-enter-2-CbYR1yRQ.js";import"./alert-B6Esz0N1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cq8bkL-u.js";import"./delete-zgSUoyOg.js";import"./settings-CBLLXz6N.js";import"./NoData-DSW01fss.js";import"./IllustratedMessage-DAmuZ2UN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BA9ELEvi.js";import"./index-ka-ToCm_.js";import"./index-BHjhclkw.js";import"./slim-arrow-down-fLJI98pt.js";import"./Input-gdpdxYMJ.js";import"./ResponsivePopoverCommon.css-DtENZeG8.js";import"./ValueStateMessage.css-B4kKha1P.js";import"./Suggestions.css-BCv_xKxV.js";import"./ListBoxItemGroupTemplate-9TRbrDJ2.js";import"./ComboBoxItemGroup-P9iDEYGv.js";import"./ListItemBaseTemplate-CXA-fGl_.js";import"./Token-BM0X9bQT.js";import"./ScrollEnablement-DHvtGpUc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYUOfpyN.js";import"./ToggleButton-rcmCnfHw.js";import"./SuggestionItem-IrwYDQ3Z.js";import"./index--P7kWLvm.js";import"./Option-CAO0eJwC.js";import"./index-BgqJi3Py.js";import"./SegmentedButton-Du7zSbut.js";import"./index-DcGyQm7o.js";import"./Select-Cy1yC1om.js";import"./InvisibleMessage-DsuuJ4si.js";import"./slim-arrow-down-NfxAXgq9.js";import"./index-7v9TUzFY.js";import"./index-u6yZ5lZT.js";import"./index-D_cyz0Cs.js";import"./index-FsTUQbBQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcOrZlNJ.js";import"./group-2-Cx0jhwyi.js";import"./sort-descending-BL8Dl8a2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D85Rx8La.js";import"./utils-Bfz42nTV.js";import"./index-Z-BdczqP.js";import"./index-Dq44XCib.js";import"./index-B31IT1af.js";import"./navigation-down-arrow-Dx9epi_Y.js";import"./navigation-right-arrow-Dk1AH9Ft.js";import"./navigation-right-arrow-BcI6851b.js";import"./useCurrentTheme-BkslSs8D.js";import"./index-BvhjsuIG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-YHsws3VW.js";import"./paper-plane-C2yCzXa-.js";import"./index-CPp6j0v_.js";import"./less-BUl18ff9.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
