import{j as t}from"./iframe-Ba5ZQio8.js";import{useMDXComponents as i}from"./index-rp1O3cN1.js";import{I as n}from"./CommandsAndQueries-Bbpx9ls1.js";import{M as m,C as p}from"./blocks-CO8PFwMs.js";import"./Tag-U7nVfWIj.js";import"./index-P8tdEHaz.js";import"./copy-B4CpXR8v.js";import{F as s}from"./Footer-C-jjr1fr.js";import"./PageNotFound-lWhn0Z7P.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CH2vUjVf.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BJPm0pTR.js";import"./index-CFpPfuDn.js";import"./index-D3zw9ZHH.js";import"./index-R7gtGlkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCyzTRrI.js";import"./addCustomCSSWithScoping-CUMS_4o0.js";import"./index-CQozdAin.js";import"./index-B2oTG2Uf.js";import"./index-DqQH8U51.js";import"./information-CmnD_cte.js";import"./sys-enter-2-a4cBCFrc.js";import"./alert-Zv2opSBs.js";import"./index-DW1zzZuq.js";import"./Illustrations-wmNg3JaM.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C6sFKivB.js";import"./delete-DpWoY4bq.js";import"./settings-2UoQFdLZ.js";import"./NoData-C27xDPCX.js";import"./NoFilterResults-BtdJqq3e.js";import"./index-CwYz5hj_.js";import"./IllustratedMessage-C8ShJTV8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-dZHfBDTm.js";import"./Input-DbuY-azO.js";import"./ResponsivePopoverCommon.css-Bx66l35z.js";import"./ValueStateMessage.css-Boe-nBHn.js";import"./Suggestions.css-DFdNzV6n.js";import"./ListBoxItemGroupTemplate-CWYgi82N.js";import"./ComboBoxItemGroup-CVco4pgy.js";import"./ListItemBaseTemplate-BwquVXRI.js";import"./Token-CMMQoehc.js";import"./ScrollEnablement-BrHNAnnn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Hwq3GH-8.js";import"./ToggleButton-By3KpJ3s.js";import"./multiselect-all-DAiXU-2t.js";import"./SuggestionItem-BPsWjU3E.js";import"./index-Bvh25QxP.js";import"./Option-qCFpPnNQ.js";import"./index-CMV_Yh7r.js";import"./SegmentedButton-4h52fUiV.js";import"./index-BdKH8mcH.js";import"./Select-BH5YNkkz.js";import"./InvisibleMessage-CV0WJIpw.js";import"./index-BpioeH42.js";import"./index-OMiO6QEU.js";import"./index-BdEsij6A.js";import"./index-DCLHA3aG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CvHE1b-Q.js";import"./group-2-JUxYdBxp.js";import"./sort-descending-BAVyXJMs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BoBNl2fW.js";import"./utils-BoIL1l7W.js";import"./index-DUksDTzt.js";import"./index-Bm8kf-zB.js";import"./index-Dvc5W7Lw.js";import"./navigation-down-arrow-CJVUiRV4.js";import"./navigation-right-arrow-C5ox3WV8.js";import"./navigation-right-arrow-BGQ1zxrV.js";import"./useCurrentTheme-Dl168NmZ.js";import"./index-B3SL5VMB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CIPw2XHC.js";import"./paper-plane-CvFEKYP7.js";import"./index-DidCFfMi.js";import"./less-DPv56Ll-.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
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
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
