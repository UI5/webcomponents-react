import{j as t}from"./iframe-gZNO6M5z.js";import{useMDXComponents as n}from"./index-C9S1zRdY.js";import{I as i,F as m}from"./CommandsAndQueries-B3SYrvAS.js";import{M as p,C as s}from"./blocks-bGe4ZsEp.js";import"./Tag-B4G2Y0SL.js";import"./index-27nnQHPg.js";import"./copy-BVrBwFXj.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D4OPLrru.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BF59Vd9o.js";import"./index-B0r-mBm2.js";import"./index-CaC9RK_F.js";import"./Link-Vq1QqGjH.js";import"./index-DGMrxJej.js";import"./index-Cp6HJT54.js";import"./index-BefwTBAQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CU06ey2h.js";import"./addCustomCSSWithScoping-BZ00kVb8.js";import"./index-CDlXZiAa.js";import"./information-DLCOf7nz.js";import"./sys-enter-2-BCk8zcst.js";import"./alert-Dzej_rV2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-QLkuJgqV.js";import"./delete-DkRHwfhX.js";import"./settings-BR8WCJ7w.js";import"./NoData--p7oPRRw.js";import"./IllustratedMessage-SXsx_nbl.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-qOumx_JC.js";import"./index-DPBbU2lN.js";import"./index-kBG2DFKE.js";import"./slim-arrow-down-Blcrq2dE.js";import"./Input-H67wDs5U.js";import"./ResponsivePopoverCommon.css-CdbcNfyO.js";import"./ValueStateMessage.css-Df8ATcbI.js";import"./Suggestions.css-C1kePIyx.js";import"./ListBoxItemGroupTemplate-C2UHPyPQ.js";import"./ComboBoxItemGroup-C3gDpf9b.js";import"./ListItemBaseTemplate-DvW_-iKE.js";import"./Token-D5EKe7A3.js";import"./ScrollEnablement-BpD4fQsi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cy6aCxAY.js";import"./ToggleButton-B5fjsmfD.js";import"./SuggestionItem-B_eDO34G.js";import"./index-B2XaTQ_o.js";import"./Option-f-tZff5I.js";import"./index-Bz429r4C.js";import"./SegmentedButton-DB_QzLE0.js";import"./index-Bl3jRPoy.js";import"./Select-DJXcsVgZ.js";import"./InvisibleMessage-Bl5nX4CD.js";import"./slim-arrow-down-CFi1WRSY.js";import"./index-62ip1J2j.js";import"./index-Drr4PQ9c.js";import"./index-CeCfeKbh.js";import"./index-EBcPMq50.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DyU52bwC.js";import"./group-2-DSB90i0B.js";import"./sort-descending-Cg6qE11j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BbtWKEmY.js";import"./utils-C3-oD3GX.js";import"./index-WCsQ6Ebz.js";import"./index-Bf1uvNUV.js";import"./index-D9BCXCjp.js";import"./navigation-down-arrow-CAmt6qbj.js";import"./navigation-right-arrow-DN-jFYY-.js";import"./navigation-right-arrow-CGQTXt6f.js";import"./useCurrentTheme-D-HaTMhl.js";import"./index-DwEdael2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B5FXU3B0.js";import"./paper-plane-DzKltC-y.js";import"./index-sEulsnhk.js";import"./less-Dl2m-ucU.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
