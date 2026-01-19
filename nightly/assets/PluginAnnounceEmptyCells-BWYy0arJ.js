import{j as t}from"./iframe-DD7p555z.js";import{useMDXComponents as n}from"./index-DKhj08U7.js";import{I as i,F as m}from"./CommandsAndQueries-CKwguJVF.js";import{M as p,C as s}from"./blocks-BAWH2K4k.js";import"./Tag-YiwRoJC6.js";import"./index-iP_JBMT4.js";import"./copy-BvS2jijZ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C5pOz0ZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dl6MCkfr.js";import"./index-DNGDxbjZ.js";import"./index-CjiVltgT.js";import"./Link-CERJMGdw.js";import"./index-4YigTS5a.js";import"./index-D_31Usqf.js";import"./index-k0OzfFck.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-buNhKImf.js";import"./addCustomCSSWithScoping-rp5A8jrF.js";import"./index-Dnnz-gOR.js";import"./information-C853I-0E.js";import"./sys-enter-2-DMe79a_K.js";import"./alert-Dl3EzObX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bny1qvAq.js";import"./delete-BtGPjnXV.js";import"./settings-BhzLKQVu.js";import"./NoData-_2lOlioJ.js";import"./IllustratedMessage-Db4dYMTY.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C3tYIcQs.js";import"./index-B_lzyoDe.js";import"./index-DYHzkt2a.js";import"./slim-arrow-down-ORtmHOmj.js";import"./Input-Ei-pBwN-.js";import"./ResponsivePopoverCommon.css-B_lrtiGe.js";import"./ValueStateMessage.css-BYebuE_v.js";import"./Suggestions.css--XkU6wI1.js";import"./ListBoxItemGroupTemplate-BA8CQI5_.js";import"./ComboBoxItemGroup-amfpDGl-.js";import"./ListItemBaseTemplate-BhLhD8bb.js";import"./Token-CT7ftEMU.js";import"./ScrollEnablement-DFuXjWdf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CoZosRcD.js";import"./ToggleButton-DY3Om3L7.js";import"./SuggestionItem-K95onNiN.js";import"./index-kHhCuAsg.js";import"./Option-CnNxmnPy.js";import"./index-62qOKVOB.js";import"./SegmentedButton-DFPoBTLB.js";import"./index-BBg6UU0Y.js";import"./Select-BQbmMxfV.js";import"./InvisibleMessage-CBGNW5FA.js";import"./slim-arrow-down-Bwk9f88K.js";import"./index-BzdnDtMC.js";import"./index-Cio2hU6W.js";import"./index-DAJ5VVgK.js";import"./index-KjntBnT6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DH5ZMpfp.js";import"./group-2-Y-L0oUMk.js";import"./sort-descending-YsDgqG23.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHyUerlm.js";import"./utils-Bfnw6Lvc.js";import"./index-CPJBiYbU.js";import"./index-hyvu0X_I.js";import"./index-BtsWC2q8.js";import"./navigation-down-arrow-B6X7QWDX.js";import"./navigation-right-arrow-BJP2JOaP.js";import"./navigation-right-arrow-DgwpS7dp.js";import"./useCurrentTheme-DUXYJBGz.js";import"./index-CxpEwIF3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-O-Qg-Ti_.js";import"./paper-plane-g37kvv4L.js";import"./index-Dwp_loUQ.js";import"./less-BN_J84Q7.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
