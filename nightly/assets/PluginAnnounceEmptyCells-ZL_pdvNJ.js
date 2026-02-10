import{j as t}from"./iframe-DmoM9f-3.js";import{useMDXComponents as n}from"./index-B20arXE0.js";import{I as i,F as m}from"./CommandsAndQueries-D46yw8vq.js";import{M as p,C as s}from"./blocks-BpV1oLoN.js";import"./Tag-C5kFbKbl.js";import"./index-BLNEyCKE.js";import"./copy-CLLjPrKq.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BA-x-C0f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BsxZ4Cqo.js";import"./index-C9RFs9lp.js";import"./index-CwkZexmy.js";import"./Link-CJAlKdXH.js";import"./index-BS6TqzQW.js";import"./index-DEJMdS-B.js";import"./index--5fdhH7F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvwMzl7A.js";import"./addCustomCSSWithScoping-CrnVfoLT.js";import"./index-D10NIdcs.js";import"./information-DFrNJXON.js";import"./sys-enter-2-97edjggS.js";import"./alert-DFs18VX5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bxmd5KNC.js";import"./delete-BafmMaQL.js";import"./settings-DABExvul.js";import"./NoData-BgI5Fxj4.js";import"./IllustratedMessage-jY-A97pw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D-fU_rFE.js";import"./index-DKnHiKv6.js";import"./index-C5zCfksZ.js";import"./slim-arrow-down-D9YsUWAc.js";import"./Input-YzFTUt5T.js";import"./ResponsivePopoverCommon.css-CYbIQSV_.js";import"./ValueStateMessage.css-Bt2Hz2Bm.js";import"./Suggestions.css-CF_t5b_V.js";import"./ListBoxItemGroupTemplate-CO5gMWQe.js";import"./ComboBoxItemGroup-CUCxyYDG.js";import"./ListItemBaseTemplate-CnPU8rrX.js";import"./Token-ERY8FHBV.js";import"./ScrollEnablement-C3qwFx38.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BJDVbUng.js";import"./ToggleButton-DEiEgDU3.js";import"./SuggestionItem-B2lniP2C.js";import"./index-CVEhOAGU.js";import"./Option-Bl_cRkCF.js";import"./index-D_A_mIMd.js";import"./SegmentedButton-BJxy3Jl0.js";import"./index-Bc77BXWZ.js";import"./Select-CuAVIuQe.js";import"./InvisibleMessage-DxxG7hrg.js";import"./slim-arrow-down-CR7ZcCgm.js";import"./index-CmHMrHW6.js";import"./index-lVw2qlav.js";import"./index-C3g1EMi_.js";import"./index-hwt2sM8N.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dm4NGm5T.js";import"./group-2-BKpf1dk-.js";import"./sort-descending-BLlJfs1C.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CfmXpjSG.js";import"./utils-CX26tpMm.js";import"./index-C5hbXSHM.js";import"./index-4PnBH_j5.js";import"./index-CCKJVryI.js";import"./navigation-down-arrow-raxqbgPM.js";import"./navigation-right-arrow-j_ofrPu8.js";import"./navigation-right-arrow-Bc7TH_0C.js";import"./useCurrentTheme-xHMJsLTO.js";import"./index-CQscq9AO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bl9d5JMP.js";import"./paper-plane-D5XrZk42.js";import"./index-CF4Usvtu.js";import"./less-BemCrw5W.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
