import{j as t}from"./iframe-DMCuegit.js";import{u as i,M as n,C as m}from"./blocks-_hT2CGz-.js";import{I as p}from"./CommandsAndQueries-C9E2MGX7.js";import"./Tag-DKKBiDqY.js";import"./index-eKDFsa2E.js";import"./copy-CPtUp5y0.js";import{F as s}from"./Footer-0Wa-LUTc.js";import"./PageNotFound-BG19bJbD.js";import{PluginAnnounceEmptyCells as a}from"./AnalyticalTableHooks.stories-D-i6P8d2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CmPTNs7p.js";import"./index-C9z-ZS1p.js";import"./index-C1STFZgh.js";import"./index-Di3QE5re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5tqyg7w.js";import"./addCustomCSSWithScoping-C0Smz55A.js";import"./index-otx7j-A2.js";import"./index-Dzpyi8IH.js";import"./index-D62lIz3L.js";import"./information-5_fbL55R.js";import"./sys-enter-2-Dil9t1r8.js";import"./alert-D7vPLYbi.js";import"./index-DEoJMyHo.js";import"./Illustrations-bTO4h7is.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CPITllAz.js";import"./delete-90NTeC2G.js";import"./settings-BG5LV0dM.js";import"./NoData-DxVxgFNc.js";import"./NoFilterResults-DMxlrcRZ.js";import"./index-63F5wA8L.js";import"./IllustratedMessage-ChulAt0j.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D-POlRPn.js";import"./Input-DirUDi6l.js";import"./ResponsivePopoverCommon.css-MXP7eeX6.js";import"./ValueStateMessage.css-D7j-2cj5.js";import"./Suggestions.css-Dvj1z-OQ.js";import"./ListBoxItemGroupTemplate-DOKgNhxC.js";import"./ComboBoxItemGroup-2Q_3jSBR.js";import"./ListItemBaseTemplate-BtXEjops.js";import"./Token-Dnuzgc0h.js";import"./ScrollEnablement-CBsMaVqO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DPUfNWM3.js";import"./ToggleButton-CVG3irva.js";import"./multiselect-all-BNqAQuwc.js";import"./SuggestionItem-CyvdCOt4.js";import"./index-DxWvkwco.js";import"./Option-K8omM4DC.js";import"./index-OeONlChn.js";import"./SegmentedButton-Bb6xVT4r.js";import"./index-DCMtMQFC.js";import"./Select-47892hrl.js";import"./InvisibleMessage-C3Ae3U1K.js";import"./index-Bl1X9PN5.js";import"./index-DBNpGVow.js";import"./index-BhAgdMmO.js";import"./index-CFS5q5jB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1hkl8V2.js";import"./group-2-CV4D2AOR.js";import"./sort-descending-BHZhyBvt.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DyUeQWg1.js";import"./utils-C6QaWlgq.js";import"./index-Cr983ZDU.js";import"./index-D4mlnoSI.js";import"./index-C773jyxg.js";import"./navigation-down-arrow-DVefUV5T.js";import"./navigation-right-arrow-DcZIB6we.js";import"./navigation-right-arrow-DoT4kgVk.js";import"./useCurrentTheme-D1A3ODx0.js";import"./index-E66unuDm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D9xi9QIt.js";import"./paper-plane-DLKkAQKF.js";import"./index-GAFO2n_O.js";import"./less-BieZFKIn.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(p,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(m,{sourceState:"none",of:a}),`
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
`,t.jsx(s,{})]})}function _t(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{_t as default};
