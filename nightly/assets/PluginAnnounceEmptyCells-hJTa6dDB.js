import{j as t}from"./iframe-DsgKHrOc.js";import{useMDXComponents as n}from"./index-R1G5OZPs.js";import{I as i,F as m}from"./CommandsAndQueries-D_2jUbP4.js";import{M as p,C as s}from"./blocks-CQue4LlW.js";import"./Tag-BTAP7zi_.js";import"./index-B3N-7g7X.js";import"./copy-DlTApuN1.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-i7kpTZ_A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNMfu1Bq.js";import"./index-CnrY0exf.js";import"./index-BdUiiHhG.js";import"./Link-DoHEtv1B.js";import"./index-Dm9AGWV-.js";import"./index-BomSeR7F.js";import"./index-W4kN-wgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BfAO3hVt.js";import"./addCustomCSSWithScoping-CsuAJYaG.js";import"./index-0Q75H94O.js";import"./information-ls1iI2xZ.js";import"./sys-enter-2-BOSLgeP2.js";import"./alert-BH6ifEnA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SSqF3mYr.js";import"./delete-BXxwRw5y.js";import"./settings-BDZ662oR.js";import"./NoData-mzNWeO_R.js";import"./IllustratedMessage-CwAF6TLx.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CBmQxRIQ.js";import"./index-CO7AsHeT.js";import"./index-DPmxY5Fk.js";import"./slim-arrow-down-BFPvdtk4.js";import"./Input-CLRI9CEh.js";import"./ResponsivePopoverCommon.css-Dz_dByIm.js";import"./ValueStateMessage.css-C1b8jnbg.js";import"./Suggestions.css-Y2NBFohg.js";import"./ListBoxItemGroupTemplate-Cu8LS11Q.js";import"./ComboBoxItemGroup-zDzTNuwT.js";import"./ListItemBaseTemplate-Ch-vNojB.js";import"./Token-DNwyr1VA.js";import"./ScrollEnablement-CijCXV-f.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CPkU6wJ3.js";import"./ToggleButton-COie_AKR.js";import"./SuggestionItem-B4-4_m5w.js";import"./index-HXM5p6gS.js";import"./Option-CQ19A_kf.js";import"./index-0mAv68Ot.js";import"./SegmentedButton-h60sJA6a.js";import"./index-C8-_l6KY.js";import"./Select-MmIlw-od.js";import"./InvisibleMessage-q1FFN4_p.js";import"./slim-arrow-down-BLSo6u6P.js";import"./index-DK0w5O82.js";import"./index-Dn-44Img.js";import"./index-CUAjbgKI.js";import"./index-CLFnZnkT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DY9qOiNW.js";import"./group-2-B0_QXr5r.js";import"./sort-descending-B2J58p1j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DE-0JGpI.js";import"./utils-BcerUUFZ.js";import"./index-QVkFgjH8.js";import"./index-0oo2lNeo.js";import"./index-DaiJcS-C.js";import"./navigation-down-arrow-bXhK5skS.js";import"./navigation-right-arrow-uarvhyB4.js";import"./navigation-right-arrow-7Xw2c4NW.js";import"./useCurrentTheme-BDtdl0D9.js";import"./index-NzD9g4E3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-IwUpqcbd.js";import"./paper-plane-DoDYrXu7.js";import"./index-B6hPTyEO.js";import"./less-BPtBbolb.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
