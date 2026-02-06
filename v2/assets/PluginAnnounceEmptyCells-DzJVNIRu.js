import{j as t}from"./iframe-oB-4R5Rt.js";import{useMDXComponents as n}from"./index-CPM_KuJ1.js";import{I as i,F as m}from"./CommandsAndQueries-V7DYmci2.js";import{M as p,C as s}from"./blocks-BSJ2p1aB.js";import"./Tag-D-nP8Atk.js";import"./index-D9a9y2w1.js";import"./copy-BEsfMMdz.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-4VAmKrJC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgFkqkoM.js";import"./index-ByTtsog6.js";import"./index-QtLlbt_o.js";import"./Link-DOQS5UBs.js";import"./index-CTKLJSsf.js";import"./index-DzeBy8FO.js";import"./index-CQQbQqNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1pBRLIk.js";import"./addCustomCSSWithScoping-Bfd00zUa.js";import"./index-BRbXVYQh.js";import"./information-BRyOdl2D.js";import"./sys-enter-2-DyCH1cMA.js";import"./alert-BVT2hG_8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B85Kwi0U.js";import"./delete-DTD52Dt-.js";import"./settings-C_n4xVXc.js";import"./NoData-Cl-2h7pm.js";import"./IllustratedMessage-0CeFZb1f.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-c6iHh6_s.js";import"./index-DAe_C3xM.js";import"./index-QijUrmH0.js";import"./slim-arrow-down-CXy1laZl.js";import"./Input-CmhKXc0K.js";import"./ResponsivePopoverCommon.css-BI55EcO7.js";import"./ValueStateMessage.css-BBVlRBqU.js";import"./Suggestions.css-hXMoKZOy.js";import"./ListBoxItemGroupTemplate-M1QDvz3X.js";import"./ComboBoxItemGroup-Bx9p2mC6.js";import"./ListItemBaseTemplate-Bah4nUE4.js";import"./Token-jwxYX-yd.js";import"./ScrollEnablement-oY_T1yvo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-IaHLS1HF.js";import"./ToggleButton-DY0lb3z6.js";import"./SuggestionItem-2gqz2T4s.js";import"./index-BWPeagQl.js";import"./Option-cV3MYBFS.js";import"./index-BzBis61R.js";import"./SegmentedButton-DCb2A_xv.js";import"./index-CAA2J6fr.js";import"./Select-DmNHfi17.js";import"./InvisibleMessage-MKUVNUZM.js";import"./slim-arrow-down-enTMIpdD.js";import"./index-C_xnFlWE.js";import"./index-Cv0_3GO5.js";import"./index-BRv3mF1V.js";import"./index-Crwyz8ZA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6MPiSVH.js";import"./group-2-Cd1iqfwu.js";import"./sort-descending-B1MDHvU-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Z4g25ytt.js";import"./utils-B5Fc9P4b.js";import"./index-DpDL8a8s.js";import"./index-Ql5yF9yx.js";import"./index-BPoxwQOt.js";import"./navigation-down-arrow-Dkon3Z8u.js";import"./navigation-right-arrow-Dm6-IpRK.js";import"./navigation-right-arrow-BNSorjsP.js";import"./useCurrentTheme-CjUUgy0P.js";import"./index-D-67tr6h.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-6qlPxf.js";import"./paper-plane-B_Zq24If.js";import"./index-BeY4v2SL.js";import"./less-Bv-Ti7Zp.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
