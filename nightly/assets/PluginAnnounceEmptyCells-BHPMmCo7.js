import{j as t}from"./iframe-pGkg1yhx.js";import{useMDXComponents as n}from"./index-zZGraQiW.js";import{I as i,F as m}from"./CommandsAndQueries-0d0cMNfY.js";import{M as p,C as s}from"./blocks-h-E2EZ8G.js";import"./Tag-au1p2NGj.js";import"./index-Dhkbob0y.js";import"./copy-DnSu0Tnk.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Oube-80K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2g5O9IIc.js";import"./index-CfRPSEYz.js";import"./index-DdsduAWA.js";import"./Link-D-i4oyZF.js";import"./index-BwnLifZ4.js";import"./index-Wi1PYVS4.js";import"./index-D6ltds-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Do_htNQl.js";import"./addCustomCSSWithScoping-BX6PI_rc.js";import"./index-Bw9Ab4ZS.js";import"./information-cXVVKah4.js";import"./sys-enter-2-hj8-ImHG.js";import"./alert-B1o_Hsr7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWlEWsVg.js";import"./delete-BJZVN444.js";import"./settings-RddDjvC_.js";import"./NoData-Bvkk8sHR.js";import"./IllustratedMessage-88xSDsjF.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CmeVb1jc.js";import"./index-CWA3Y_l5.js";import"./index-CNQndJGS.js";import"./slim-arrow-down-BJgntAOe.js";import"./Input-CyCFJ6Vu.js";import"./ResponsivePopoverCommon.css-B50dxgEH.js";import"./ValueStateMessage.css-DMDkPBvl.js";import"./Suggestions.css-CtaaBT2N.js";import"./ListBoxItemGroupTemplate-CJy-Y4BI.js";import"./ComboBoxItemGroup-Qn1YbaR3.js";import"./ListItemBaseTemplate-CH22A-Ku.js";import"./Token-rXecMhab.js";import"./ScrollEnablement-Bs7uevyz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdpPPBzO.js";import"./ToggleButton-ClU9taqo.js";import"./SuggestionItem-By4CvLXk.js";import"./index-C2E1bJm1.js";import"./Option-BLkO3chh.js";import"./index-D5tpw6HZ.js";import"./SegmentedButton-CkL5eMMe.js";import"./index-DHTghqxe.js";import"./Select-C2Bt6674.js";import"./InvisibleMessage-C46p7Cuq.js";import"./slim-arrow-down-vuddRe6v.js";import"./index-FG2xjpzy.js";import"./index-DsBDhpqc.js";import"./index-Byr0e0RY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BzemDtcW.js";import"./group-2-C3xp8NlG.js";import"./sort-descending-D_cNFQo4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BOGeczJA.js";import"./utils-5Au9oy8N.js";import"./index-Dy6BbuYA.js";import"./index-hUJ8i6CB.js";import"./index-D6kseXdp.js";import"./navigation-down-arrow-B7e8SP0b.js";import"./navigation-right-arrow-DdUm1UUs.js";import"./navigation-right-arrow-B7-X8v5o.js";import"./useCurrentTheme-CY0w9NPc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-iIn9LAKY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CMMVd0W8.js";import"./paper-plane-Dh94bFtb.js";import"./index-DBNCJ5jk.js";import"./less-oxl3lbVo.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
