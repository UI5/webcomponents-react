import{j as t}from"./iframe-DAxVciiO.js";import{useMDXComponents as n}from"./index-h_8BIj8E.js";import{I as i,F as m}from"./CommandsAndQueries-DAf-gTsq.js";import{M as p,C as s}from"./blocks-V6tY60BP.js";import"./Tag-CfpPKB5J.js";import"./index-Cl51mnxs.js";import"./copy-DS8F9wTV.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-p9nnaNLV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQeQ_3Br.js";import"./index-BTWHfyOb.js";import"./index-CXz3G2II.js";import"./Link-CPXkUhXc.js";import"./index-DtbiWkK2.js";import"./index-C2J6ydOt.js";import"./index-45VXzBs0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqjBRadn.js";import"./addCustomCSSWithScoping-B-5Zxa-U.js";import"./index-x-HMM4OA.js";import"./information-BJmehL1Z.js";import"./sys-enter-2-CCej0FVR.js";import"./alert-DT2E8uxg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CFff7xit.js";import"./delete-DbGDhc3E.js";import"./settings-BDyusSsU.js";import"./NoData-XqdFgBoh.js";import"./IllustratedMessage-Bp6_xgPq.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CHKD9vVt.js";import"./index-BkJQaYIU.js";import"./index-PApUnrQh.js";import"./slim-arrow-down-DOx_O52b.js";import"./Input-BFNvfe1M.js";import"./ResponsivePopoverCommon.css-DUa--h-C.js";import"./ValueStateMessage.css-B-JXAMRh.js";import"./Suggestions.css-l1R1Q3Wi.js";import"./ListBoxItemGroupTemplate-CKUg1mHM.js";import"./ComboBoxItemGroup-DaYPy346.js";import"./ListItemBaseTemplate-CpDt3VEY.js";import"./Token-BIrB-fXe.js";import"./ScrollEnablement-IaFlv5sG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DHZqKCWt.js";import"./ToggleButton-BXfnrvIj.js";import"./SuggestionItem-PiaokgXw.js";import"./index-BetiTQM5.js";import"./Option-BtMT1Oqj.js";import"./index-O9Cki_UE.js";import"./SegmentedButton-CsbFykOo.js";import"./index-kd3IkrmG.js";import"./Select-DQvn5TjZ.js";import"./InvisibleMessage-CJvoI51j.js";import"./slim-arrow-down-DI99uMIa.js";import"./index-DK-JaRrB.js";import"./index-LLkC_BTv.js";import"./index-B10fvOaR.js";import"./index-Bm6hAg8x.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTq-0MlA.js";import"./group-2-dlAvKLPk.js";import"./sort-descending-DS-dcpyJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_vvkfygM.js";import"./utils-BF_zpjgJ.js";import"./index-B-11WzHg.js";import"./index-Dd31BDFj.js";import"./index-D_srWwSh.js";import"./navigation-down-arrow-HO4UVtgk.js";import"./navigation-right-arrow-BINfOxqh.js";import"./navigation-right-arrow-DRlFirFz.js";import"./useCurrentTheme-C2GdyHiC.js";import"./index-CBxPLiTj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ca2uhQ15.js";import"./paper-plane-D7cPCcgX.js";import"./index-DocLDr0y.js";import"./less-CqbE9adU.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
