import{j as t}from"./iframe-EDZrvS0_.js";import{useMDXComponents as i}from"./index-D_Zuzn6o.js";import{I as n}from"./CommandsAndQueries-DeBGirNK.js";import{M as m,C as p}from"./blocks-CJ57z4uw.js";import"./Tag-Cv2B1DS4.js";import"./index-Bz0BV9YI.js";import"./copy-Duyva9GD.js";import{F as s}from"./Footer-BqU25DvW.js";import"./PageNotFound-BnvHWpv6.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dx5TKmet.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B5fvjtF5.js";import"./index-bU8se7-X.js";import"./index-C-NT2IXI.js";import"./index-dnOa7Ewn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_EBjNmUx.js";import"./addCustomCSSWithScoping-2V-LQLPO.js";import"./index-CZdLboFr.js";import"./index-cZywnC0F.js";import"./index-DezAYIwY.js";import"./information-CAvj8-k7.js";import"./sys-enter-2-Eez9oUbi.js";import"./alert-nmCIz_tp.js";import"./index-D6CBwRDo.js";import"./Illustrations-Cp5J5qhx.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-utPuCR04.js";import"./delete-DR6LH38W.js";import"./settings-CN-5jPNW.js";import"./NoData-Unsc7yGW.js";import"./NoFilterResults-D4Tfubhx.js";import"./index-Bd_ty2tr.js";import"./IllustratedMessage-CLWlkvw9.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BsNqwfYk.js";import"./Input-zEsdeYDW.js";import"./ResponsivePopoverCommon.css-DBFPees2.js";import"./ValueStateMessage.css-DuJxwYcD.js";import"./Suggestions.css-DnDRJwob.js";import"./ListBoxItemGroupTemplate-BZbITfG7.js";import"./ComboBoxItemGroup-DieEz9f8.js";import"./ListItemBaseTemplate-Bof6NJS5.js";import"./Token-Sn-IGO0n.js";import"./ScrollEnablement-K7_frRGH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CnWB-RIw.js";import"./ToggleButton-CVlcvDQY.js";import"./multiselect-all-evCQ6L4Y.js";import"./SuggestionItem-RdjvKtEt.js";import"./index-2B_xiOGC.js";import"./Option-HV-kXJJc.js";import"./index-BbWj_bg9.js";import"./SegmentedButton-z2Z5RFk1.js";import"./index-CA1Jh7mM.js";import"./Select-DfMov8Eu.js";import"./InvisibleMessage-Bzs3a3mB.js";import"./index-C6dZwhpH.js";import"./index-Bp2r4Kh2.js";import"./index-DEf8EDQ-.js";import"./index-jH6Hh22w.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3l8IQP2.js";import"./group-2-u8UewRr6.js";import"./sort-descending-3j3Q1XNY.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUNI2Fe2.js";import"./utils-_j2VpmWA.js";import"./index-BUog9t61.js";import"./index-BEQsTep_.js";import"./index-Bvx781mh.js";import"./navigation-down-arrow-DFC2-NJZ.js";import"./navigation-right-arrow-CG4JKzco.js";import"./navigation-right-arrow-CUEAwi3f.js";import"./useCurrentTheme-BCAEg60Z.js";import"./index-BQba1xDF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BXcDMPx8.js";import"./paper-plane-B0VM4cXi.js";import"./index-BO_w0Yy3.js";import"./less-DjhcNxVm.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
