import{j as t}from"./iframe-BBfeQq2L.js";import{useMDXComponents as n}from"./index-D1XkxxyM.js";import{I as i,F as m}from"./CommandsAndQueries-Buygq3eA.js";import{M as p,C as s}from"./blocks-CxdXAZue.js";import"./Tag-4fcKG2ic.js";import"./index-C57-wRZv.js";import"./copy-2iUWozfp.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BWy92f_G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5Wcj6ld.js";import"./index-BY7hZSSK.js";import"./index-Dh6gCloB.js";import"./Link-DOA2fpa3.js";import"./index-ChSH85IQ.js";import"./index-CB8857Gd.js";import"./index-C4_hmu2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDXTaCTd.js";import"./addCustomCSSWithScoping-_H14R7FJ.js";import"./index-H1CGp5_C.js";import"./information-BnGyGqAy.js";import"./sys-enter-2-B5N_dLso.js";import"./alert-DOI_-LG9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Du-GvtWn.js";import"./delete-Bvqg6jRy.js";import"./settings-CoYY_8Uh.js";import"./NoData-Bx94Sh8i.js";import"./IllustratedMessage-D9IVoDdQ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CkIkTlkv.js";import"./index-DJJ3Mees.js";import"./index-BxeXPALZ.js";import"./slim-arrow-down-CZafjPQk.js";import"./Input-CXTPtpQ2.js";import"./ResponsivePopoverCommon.css-DWkfvrPv.js";import"./ValueStateMessage.css-tsSH4zXZ.js";import"./Suggestions.css-DDtKdDf5.js";import"./ListBoxItemGroupTemplate-BpOyUqn0.js";import"./ComboBoxItemGroup-CIzD3AVu.js";import"./ListItemBaseTemplate-TueecYK6.js";import"./Token-D2mMU1OG.js";import"./ScrollEnablement-abBNx1nX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DyAEHiEu.js";import"./ToggleButton-D1DyhgK8.js";import"./SuggestionItem-BSBNfTEA.js";import"./index-Dj7DMCO5.js";import"./Option-CxAkegRU.js";import"./index-CWaD9nCK.js";import"./SegmentedButton--qutgauv.js";import"./index-Br3gWTFO.js";import"./Select-sqbuPb4m.js";import"./InvisibleMessage-CbEE0DqC.js";import"./slim-arrow-down-CZnzPpuX.js";import"./index-BEyFh1jo.js";import"./index-WkSHIfIf.js";import"./index-CU_KTR9v.js";import"./index-BHxHZDh8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3ZbZrr0.js";import"./group-2-D8MWVKUe.js";import"./sort-descending-No_uql7a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BPqEcmGG.js";import"./utils-CH402oqk.js";import"./index-e3s8xMkM.js";import"./index-DVRLVrIq.js";import"./index-C6Czb7vs.js";import"./navigation-down-arrow-DVtVCKgG.js";import"./navigation-right-arrow-BMpAHwE7.js";import"./navigation-right-arrow-BdeAmP2r.js";import"./useCurrentTheme-UAcQ55vR.js";import"./index-Cvb15Oog.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-T4YkLvpZ.js";import"./paper-plane-CuWPWZ2a.js";import"./index-BsfHMYWW.js";import"./less-Y04PrZ-G.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
