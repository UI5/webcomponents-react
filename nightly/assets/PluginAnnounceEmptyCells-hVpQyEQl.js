import{j as t}from"./iframe-Dn-CEP49.js";import{useMDXComponents as n}from"./index-CkYweSLX.js";import{I as i,F as m}from"./CommandsAndQueries-CJE7oJQ6.js";import{M as p,C as s}from"./blocks-CpkBRtZ8.js";import"./Tag-DCXTYexA.js";import"./index-Buh7M_8w.js";import"./copy-ZbpB2fNv.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-ztfx2-Is.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bm8hRwBU.js";import"./index-Cw6Uj_ev.js";import"./index-DzcQWg4n.js";import"./Link-CCOdGIG_.js";import"./index-BiP2f5WB.js";import"./index-DwdL8nG5.js";import"./index-pKV4gQju.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOWzKJJk.js";import"./addCustomCSSWithScoping-BIQAchjq.js";import"./index-6NbWjJvY.js";import"./information-Bo7A1j3N.js";import"./sys-enter-2-XS_2r-qd.js";import"./alert-CjMhygJT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Diqxij9B.js";import"./delete-d6bn_JDV.js";import"./settings-BIg8VPcO.js";import"./NoData-rbt8DPTL.js";import"./IllustratedMessage-B6qON00u.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B41MixxM.js";import"./index-CbLC2T1-.js";import"./index-BEgrxcfq.js";import"./slim-arrow-down-Bj4DlPa3.js";import"./Input-CxXPc-Hx.js";import"./ResponsivePopoverCommon.css-Do9Vgr3v.js";import"./ValueStateMessage.css-D9t9_AMW.js";import"./Suggestions.css-CbUz-ZGI.js";import"./ListBoxItemGroupTemplate-46_Zh3wN.js";import"./ComboBoxItemGroup-RbdF7hhc.js";import"./ListItemBaseTemplate-O3CDUooj.js";import"./Token-BLH25HvY.js";import"./ScrollEnablement-zAaUIY5k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-VFffhFve.js";import"./ToggleButton-mwmAbve5.js";import"./SuggestionItem-DOpNFTCA.js";import"./index-ClXgM0QD.js";import"./Option-BYlN-tpp.js";import"./index-BkRcZeSq.js";import"./SegmentedButton-BqQxCudY.js";import"./index-DYVv1ok6.js";import"./Select-BJT8n4vX.js";import"./InvisibleMessage-XUjgdwX9.js";import"./slim-arrow-down-C5fdvPae.js";import"./index-DL2C3Cwm.js";import"./index-D4a7uqpb.js";import"./index-BzTARrg3.js";import"./index-Ct561GKj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CH-P7ycI.js";import"./group-2-CrDDPtXD.js";import"./sort-descending-r8NGiDn9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-haQKghSk.js";import"./utils-DfQ09pUz.js";import"./index--NtLvyBH.js";import"./index-DdFdl9JW.js";import"./index-BazkfAzC.js";import"./navigation-down-arrow-CCvVF4OT.js";import"./navigation-right-arrow-BpL2A1bg.js";import"./navigation-right-arrow-jdXIwt_e.js";import"./useCurrentTheme-CTBlfWfu.js";import"./index-CTuKnf34.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C3EIIsQq.js";import"./paper-plane-6--7LTtA.js";import"./index-CbqLR4ce.js";import"./less-5cy1nyok.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
