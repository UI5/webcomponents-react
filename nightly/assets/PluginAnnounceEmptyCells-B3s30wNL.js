import{j as t}from"./iframe-Dx8AIwnl.js";import{useMDXComponents as n}from"./index-dcVclcbT.js";import{I as i,F as m}from"./CommandsAndQueries-DUfglqKp.js";import{M as p,C as s}from"./blocks-p2QhlYpp.js";import"./Tag-CzwecjZk.js";import"./index-CNQX-dlK.js";import"./copy-BI62_cw9.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-s17Movl1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bp4XYY8b.js";import"./index-BaN1UK0U.js";import"./index-BVmKbVfO.js";import"./Link-Br-d-ePU.js";import"./index-CPYahFg1.js";import"./index-DByobapb.js";import"./index-BwRqY3Cv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0yp5HV-.js";import"./addCustomCSSWithScoping-Bxh4uOHa.js";import"./index-C0W6hmhl.js";import"./information-0cXHjBj8.js";import"./sys-enter-2-Gb3kXppf.js";import"./alert-aIxIGm79.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DLxqbR-j.js";import"./delete-C69cbyF3.js";import"./settings-BWzqlj0G.js";import"./NoData-D5fncAkO.js";import"./IllustratedMessage-BzTSJxO9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-YgmQ2tQR.js";import"./index-Ci7qfekx.js";import"./index-DNsUAKiX.js";import"./slim-arrow-down-CyGdej7d.js";import"./Input-z0U91vlG.js";import"./ResponsivePopoverCommon.css-3lkFUcOY.js";import"./ValueStateMessage.css-DF0Hyzh1.js";import"./Suggestions.css-wt4aZj0f.js";import"./ListBoxItemGroupTemplate-Q-KeUcY6.js";import"./ComboBoxItemGroup-BSGTLThu.js";import"./ListItemBaseTemplate-DqtKzpsG.js";import"./Token-vLDA2-Jp.js";import"./ScrollEnablement-Bp2iL1fb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-hNMIOZMd.js";import"./ToggleButton-7eyAjys6.js";import"./SuggestionItem-Qf_7uMPc.js";import"./index-7cA-ux1h.js";import"./Option-DZeZ5p_t.js";import"./index-B7ZIHFQx.js";import"./SegmentedButton-BmWRNH_m.js";import"./index-Dff-sv4X.js";import"./Select-DhzR4NaB.js";import"./InvisibleMessage-DisTLAk4.js";import"./slim-arrow-down-Dqq2dwC4.js";import"./index-DVvxtB8e.js";import"./index-DCksASwl.js";import"./index-OEGwklO3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cix59-jT.js";import"./group-2-Bhc8bd2M.js";import"./sort-descending-DgOmEU3h.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHOGLY_P.js";import"./utils-DUcBANkt.js";import"./index-C3qN_Aew.js";import"./index-CBCSR7an.js";import"./index-CVsRwsda.js";import"./navigation-down-arrow-_9IZkA0g.js";import"./navigation-right-arrow-p28ybD6y.js";import"./navigation-right-arrow-Bm5goftX.js";import"./useCurrentTheme-f2z_yH-b.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DXZ8CjJT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zeVN43iZ.js";import"./paper-plane-7o4eJ6hV.js";import"./index-BYRBgKjV.js";import"./less-hBB1SYwL.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
