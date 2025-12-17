import{j as t}from"./iframe-CGBVIl7z.js";import{useMDXComponents as n}from"./index-BD_J3XGh.js";import{I as i,F as m}from"./CommandsAndQueries-C4N9Si-I.js";import{M as p,C as s}from"./blocks-amwX2WGZ.js";import"./Tag-CKuoT6Wf.js";import"./index-Bflw6F-3.js";import"./copy-C7UfB3Pq.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-93nu5OR0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BpPbjuIA.js";import"./index-BSuCMsLZ.js";import"./index-CohLls_f.js";import"./Link-7Pc42Mkn.js";import"./index-DdaBmZIy.js";import"./index-739hgjkB.js";import"./index-DSjZIl8t.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bhku-quN.js";import"./addCustomCSSWithScoping-BVpL9dRN.js";import"./index-DBko667H.js";import"./information-RMMgKPqE.js";import"./sys-enter-2-CjQpGHgC.js";import"./alert-B45RxjKS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BbZZNUsr.js";import"./delete-C3rYTSL-.js";import"./settings-CKuItMTt.js";import"./NoData-Dm6kMAy2.js";import"./IllustratedMessage-CTltc4_9.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CpKRdgwe.js";import"./index-BZjO0-60.js";import"./index-5iKNMBkt.js";import"./slim-arrow-down-DSmgoUyO.js";import"./Input-Cur_CxV7.js";import"./ResponsivePopoverCommon.css-CCcFdLcp.js";import"./ValueStateMessage.css-ZMC4oIfX.js";import"./Suggestions.css-Dz1M5Owd.js";import"./ListBoxItemGroupTemplate-dm5g8U8i.js";import"./ComboBoxItemGroup-BIxiJRMG.js";import"./ListItemBaseTemplate-BaXxQQnP.js";import"./Token-CE1htzEf.js";import"./ScrollEnablement--aZEG85r.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DiNPNXGG.js";import"./ToggleButton-CVtQcDrs.js";import"./SuggestionItem-Df3g5KQn.js";import"./index-DpM-2fz6.js";import"./Option-CvdkhOTv.js";import"./index-DV-PpZP-.js";import"./SegmentedButton-DBCXGQvu.js";import"./index-TJX9m1a2.js";import"./Select-D5t1jG8r.js";import"./InvisibleMessage-DctrIzSe.js";import"./slim-arrow-down-BaoK7UDp.js";import"./index-BSrWHRA1.js";import"./index-emiTK6If.js";import"./index-CSp7PIo2.js";import"./index-DMJbwVLL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BSZDY7W6.js";import"./group-2-D1Tb-82k.js";import"./sort-descending-Cm59fUND.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-lmEdkW8S.js";import"./utils-B949wPYJ.js";import"./index-CitGks-I.js";import"./index-Dij-55P_.js";import"./index-CMkS8dBX.js";import"./navigation-down-arrow-Bb7YkKYC.js";import"./navigation-right-arrow-D7n-L5RI.js";import"./navigation-right-arrow-DwW5Vw29.js";import"./useCurrentTheme-Dy8jCwh1.js";import"./index-CVZ8d7gP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuSadHsH.js";import"./paper-plane-DGK7y6EI.js";import"./index-UFJ9xqAU.js";import"./less-VoFt1pb9.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
