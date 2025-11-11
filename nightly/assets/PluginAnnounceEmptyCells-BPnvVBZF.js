import{j as t}from"./iframe-Djuy8UzU.js";import{useMDXComponents as n}from"./index-CgJpCImo.js";import{I as i,F as m}from"./CommandsAndQueries-DtRiB_cH.js";import{M as p,C as s}from"./blocks-Phup9Acl.js";import"./Tag-B73vgZIB.js";import"./index-Da0VpmUz.js";import"./copy-YJEoppKk.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-pXNMhsUR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrSO2QY2.js";import"./index-DRZrAGbU.js";import"./index-CLO3npv1.js";import"./Link-BtCtR7u3.js";import"./index-CAq-HQ8b.js";import"./index-B4ZMGb2N.js";import"./index-CgYDTHag.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYVpCo3h.js";import"./addCustomCSSWithScoping-JvBMAy04.js";import"./index-DedsmHJ0.js";import"./information-CINaYo8g.js";import"./sys-enter-2-BqczY9Tp.js";import"./alert-BZgl_BE3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Tm5sN1Cz.js";import"./delete-D5ga1RS3.js";import"./settings-OocRSNxu.js";import"./NoData-BJvGJO6C.js";import"./IllustratedMessage-DT3sEaH3.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CS7LznOo.js";import"./index-Bg9deP-k.js";import"./index-BZ9EzmYc.js";import"./slim-arrow-down-CLg0Y-Da.js";import"./Input-DFpAAFjs.js";import"./ResponsivePopoverCommon.css-DOPzCxi3.js";import"./ValueStateMessage.css-BY9H75Zk.js";import"./Suggestions.css-DHOGHYV0.js";import"./ListBoxItemGroupTemplate-Bgj9qNs1.js";import"./ComboBoxItemGroup-Hz1udBKa.js";import"./ListItemBaseTemplate-YNfLoN64.js";import"./Token-CUzjxjIL.js";import"./ScrollEnablement-Bx2z7UGn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zVS7M5ZO.js";import"./ToggleButton-cXtGqYVJ.js";import"./SuggestionItem-lRSTXW-R.js";import"./index-CYksY84A.js";import"./Option-BHogyT1E.js";import"./index-C7Gh1DFG.js";import"./SegmentedButton-DHr4aC0S.js";import"./index-Crtuxpn7.js";import"./Select-BCrzSCH2.js";import"./InvisibleMessage-DlMsZ0UK.js";import"./slim-arrow-down-DfwEriIC.js";import"./index-Bn5IRh8r.js";import"./index-BvL5iwzQ.js";import"./index-Cv13D_Xn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Hbu-1YdU.js";import"./group-2-zKTXtqcT.js";import"./sort-descending-DrmqyO1p.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk5C2Trt.js";import"./utils-Ds_Qdonj.js";import"./index-Bkm_aMWw.js";import"./index-Cn1i3TVp.js";import"./index-C0EeSQjI.js";import"./navigation-down-arrow-B0vTzU2n.js";import"./navigation-right-arrow-BxQGxPzo.js";import"./navigation-right-arrow-Ce-NM_S4.js";import"./useCurrentTheme-CPdf3rwy.js";import"./IndicationColor-DVw-fSM_.js";import"./index-tatqfUOn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqdL_3q4.js";import"./paper-plane-CJJNV6_c.js";import"./index-D-SZa65e.js";import"./less-CCZmshD0.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
