import{j as t}from"./iframe-XvyKyqpc.js";import{useMDXComponents as n}from"./index-CE_ul58K.js";import{I as i,F as m}from"./CommandsAndQueries-D-JkQMzp.js";import{M as p,C as s}from"./blocks-hAblz1ET.js";import"./Tag-BEblEGCN.js";import"./index-CXUKZsMC.js";import"./copy-CAC71KE2.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CWBCe2d6.js";import"./preload-helper-PPVm8Dsz.js";import"./index--us6wF-5.js";import"./index-CP30tsdj.js";import"./index-BkdKA5kQ.js";import"./Link-DWmr0_tI.js";import"./index-DQ79lCi8.js";import"./index-BFysEZU1.js";import"./index-dfRDbF4B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-m1ntkPM9.js";import"./addCustomCSSWithScoping-B_TWNpIo.js";import"./index-Du72Y0zD.js";import"./information-CNwM68I2.js";import"./sys-enter-2-QkDyn9HM.js";import"./alert-DG7Yrkg6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CSc3e4Q2.js";import"./delete-B5OLgZyK.js";import"./settings-Dqag1I3v.js";import"./NoData-CyBr3teM.js";import"./IllustratedMessage-D_Z1qlsF.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-4b1G3hWQ.js";import"./index-BNAr3QqM.js";import"./index-DK_rKyLX.js";import"./slim-arrow-down-DK-zw0Wg.js";import"./Input-CXTsJDH8.js";import"./ResponsivePopoverCommon.css-DpCrglir.js";import"./ValueStateMessage.css-XAEG8ST6.js";import"./Suggestions.css-CIiHbc7N.js";import"./ListBoxItemGroupTemplate-BI-DM9uZ.js";import"./ComboBoxItemGroup-KzkX9_HX.js";import"./ListItemBaseTemplate-2fjL8Mbh.js";import"./Token-CnTsgTtT.js";import"./ScrollEnablement-DpQ29N-3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7uEHLD7.js";import"./ToggleButton-dSfF2CYI.js";import"./SuggestionItem-B8GSZHbf.js";import"./index-C9J1kaOU.js";import"./Option-CL9pckzb.js";import"./index-DLARPJs2.js";import"./SegmentedButton-CghOcyRS.js";import"./index-BjgTYctV.js";import"./Select-CTQ5bkNP.js";import"./InvisibleMessage-frxXXEWO.js";import"./slim-arrow-down-B4bsCSMm.js";import"./index-Cll0lnqL.js";import"./index-ZsJCbCIz.js";import"./index-DcsaMtsM.js";import"./index-DnbbOK4Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DvBdwHZ9.js";import"./group-2-DAa-UPnl.js";import"./sort-descending-ByDZzzA_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BXZXJSvV.js";import"./utils-eccEj8iF.js";import"./index-DTu7S7gE.js";import"./index-DnFcC2fY.js";import"./index-CjcCVkct.js";import"./navigation-down-arrow-CsgziDSU.js";import"./navigation-right-arrow-C0qs9ZTI.js";import"./navigation-right-arrow-B2VygeOe.js";import"./useCurrentTheme-09jbhVQN.js";import"./index-BUhgT8PM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BeXIHH0L.js";import"./paper-plane-D6Z_VCoj.js";import"./index-Bpq5Pj7e.js";import"./less-By6v1WfY.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
