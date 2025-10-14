import{j as t}from"./iframe-CEhnIlu5.js";import{useMDXComponents as n}from"./index-DvMCH85E.js";import{I as i,F as m}from"./CommandsAndQueries-COpLwEKt.js";import{M as p,C as s}from"./blocks-CzCRTnDN.js";import"./Tag-B0tBXTma.js";import"./index-BxbrXhSf.js";import"./copy-DW0z69Dv.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BRz2kd1y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8phGoz0x.js";import"./index-XtQvC7Ne.js";import"./index-djaoMR7U.js";import"./Link-Dx0jxQut.js";import"./index-BJ3Bv_1U.js";import"./index-Bjvgvr9c.js";import"./index-CmP_HbAe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8LeJtOc.js";import"./addCustomCSSWithScoping-jvTBykEZ.js";import"./index-Dgl42qdE.js";import"./information-GsMzttNM.js";import"./sys-enter-2-CRQG3vkj.js";import"./alert-C-SQT9wT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BLa75-a4.js";import"./delete-DZBn0HlY.js";import"./settings-DqBE4Yfa.js";import"./NoData-z1rscvaR.js";import"./IllustratedMessage-DLIRWhUO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-_eFO4hhR.js";import"./index-RznWYrdR.js";import"./index-jDTu_XSn.js";import"./slim-arrow-down-DCqrbNPW.js";import"./Input-Cesqog5j.js";import"./ResponsivePopoverCommon.css-CcZwtHQR.js";import"./ValueStateMessage.css-tCml9Upt.js";import"./Suggestions.css-CS6Y7lfw.js";import"./ListBoxItemGroupTemplate-gZbs6LSY.js";import"./ComboBoxItemGroup-BX8sl_PD.js";import"./ListItemBaseTemplate-Cm0NfbpL.js";import"./Token-DdBaiPI-.js";import"./ScrollEnablement-DfRZg6Dv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqKgSM5s.js";import"./ToggleButton-BrmzCsUo.js";import"./SuggestionItem-BHZcKCCP.js";import"./index-gfBCaRX1.js";import"./Option-N8h0jF1c.js";import"./index-DdzeaEd3.js";import"./SegmentedButton-BegLLxw2.js";import"./index-B5ZqyAt4.js";import"./Select-DCpGFOXx.js";import"./InvisibleMessage-B7HV_CKC.js";import"./slim-arrow-down-DYJprQ5J.js";import"./index-CF2pqHX5.js";import"./index-CrxXAlAp.js";import"./index-BmZH7-5P.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CSvmxui-.js";import"./group-2-CTVsJNx-.js";import"./sort-descending-B9sifUyq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-cqZEsl2j.js";import"./utils-gTx_8Idj.js";import"./index-CjpBStF-.js";import"./index-e-mZHuH4.js";import"./index-Dq_2j8ok.js";import"./navigation-down-arrow-B-AcI54H.js";import"./navigation-right-arrow-BOTQ_vif.js";import"./navigation-right-arrow-FWBcN_Yy.js";import"./useCurrentTheme-8m84Q5Bx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ChT8t06d.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOclZ2jB.js";import"./paper-plane-Ch-Ok7XN.js";import"./index-DySPt_hE.js";import"./less-DY5sd6NF.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
