import{j as t}from"./iframe-B2FKbRyU.js";import{useMDXComponents as i}from"./index-B6nFsg5H.js";import{I as n}from"./CommandsAndQueries-Ckb11nUD.js";import{M as m,C as p}from"./blocks-D-EyJoW7.js";import"./Tag-DALomp7A.js";import"./index-DDSpbD3Z.js";import"./copy-JUMniwmI.js";import{F as s}from"./Footer-Boec_nj9.js";import"./PageNotFound-D3X2ZHIh.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CVD9cqsI.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BrDotueY.js";import"./index-DHXfA1aH.js";import"./index-C1DRCM0c.js";import"./index-jZ_VDKcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BzpFx6uj.js";import"./addCustomCSSWithScoping-DCMkWG64.js";import"./index-DS8Ies1F.js";import"./index-CKRHtWhm.js";import"./index-DKyTtykB.js";import"./information-gzDx7eZf.js";import"./sys-enter-2-C-oODT1L.js";import"./alert-dNTL_brG.js";import"./index-DCb_xP6l.js";import"./Illustrations-Bj-aY82Z.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bz8is-GI.js";import"./delete-CFesfdDG.js";import"./settings-opsmQeBR.js";import"./NoData-D2Gj788q.js";import"./NoFilterResults-B4v0K1Vp.js";import"./index-6Bhcr5l0.js";import"./IllustratedMessage-6Hb5GR5A.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-_pStiMkC.js";import"./slim-arrow-down-Ys7hMkPK.js";import"./Input-DwMU1cpj.js";import"./ResponsivePopoverCommon.css-DH0byYa1.js";import"./ValueStateMessage.css-Bw_3AW3-.js";import"./Suggestions.css-CfJP3QYm.js";import"./ListBoxItemGroupTemplate-CBBnxOdl.js";import"./ComboBoxItemGroup-pSZDcj_Y.js";import"./ListItemBaseTemplate-DbJzc3OH.js";import"./Token-BQA14vJ4.js";import"./ScrollEnablement-DwnkyfbX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7b-hnxm.js";import"./ToggleButton-DG0J_zb4.js";import"./SuggestionItem-qaKoOHF9.js";import"./index-Cp7riZA0.js";import"./Option-BFH18YB5.js";import"./index-CpfRQ6F_.js";import"./SegmentedButton-m1j72L5U.js";import"./index-DUG8asUQ.js";import"./Select-Db3yOwO_.js";import"./InvisibleMessage-BXgV0ajS.js";import"./slim-arrow-down-BTgZLJbv.js";import"./index-D-rOfIh9.js";import"./index-WUOOkN1f.js";import"./index-Bx2uhMFX.js";import"./index-s315U2R4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CONdRUGs.js";import"./group-2-B0I_ewE0.js";import"./sort-descending-5FQeQbrY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7vTuR1f.js";import"./utils-6W1b-ay8.js";import"./index-B7Ih3QbG.js";import"./index-CthcNRf4.js";import"./index-S57PoKAK.js";import"./navigation-down-arrow-Df_E19F4.js";import"./navigation-right-arrow-BDTIDVrz.js";import"./navigation-right-arrow-5aP-UFj7.js";import"./useCurrentTheme-C8c2YnJs.js";import"./index-Cc6fTIIs.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPlkBtoH.js";import"./paper-plane-SWd_61-c.js";import"./index-ZKK6l2ej.js";import"./less-ByTKGmwu.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
