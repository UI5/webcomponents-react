import{j as t}from"./iframe-a0uMhM0K.js";import{useMDXComponents as i}from"./index-BsqnGYZV.js";import{I as n}from"./CommandsAndQueries-Daj0tnDY.js";import{M as m,C as p}from"./blocks-GWXZJNmq.js";import"./Tag-BaNCkHdE.js";import"./index-BfgNdjah.js";import"./copy-Ba79n2H6.js";import{F as s}from"./Footer-UprvpWI8.js";import"./PageNotFound-C4t5kuHt.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-YpZ0GhC2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-C9XRs14a.js";import"./index-BwlpwmJL.js";import"./index-1tRSjVgF.js";import"./index-CSZ4nu-Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-F25ehqhC.js";import"./addCustomCSSWithScoping-DssrUnNY.js";import"./index-BsmCDa7r.js";import"./index-CqObD5eZ.js";import"./index-C3E6FzVb.js";import"./information-DnAoFJ5t.js";import"./sys-enter-2-DG20pJAR.js";import"./alert-CaXXBJy4.js";import"./index-Dk4guAK8.js";import"./Illustrations-Do7SV7fL.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DI7as0nc.js";import"./delete-CHUFQ_Wx.js";import"./settings-0W4GYaRC.js";import"./NoData-C84zCcIQ.js";import"./NoFilterResults-CalnQnoH.js";import"./index-C3VG9dWs.js";import"./IllustratedMessage-6HZ5lnOp.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CQrOQkiM.js";import"./Input-cpApaPQM.js";import"./ResponsivePopoverCommon.css-CmTsDlHw.js";import"./ValueStateMessage.css-BRKXcIHj.js";import"./Suggestions.css-COVTnGJE.js";import"./ListBoxItemGroupTemplate-BmSBtRf2.js";import"./ComboBoxItemGroup-B5J72oZn.js";import"./ListItemBaseTemplate-Bvq28n1p.js";import"./Token-BTe6Dqe3.js";import"./ScrollEnablement-BVy3cq7b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B1cxGoSI.js";import"./ToggleButton-CDAZTyeN.js";import"./multiselect-all-BBXS-Ub9.js";import"./SuggestionItem-_JxlPU60.js";import"./index-D9Od-yF4.js";import"./Option-BcWQble4.js";import"./index-CO9KWXos.js";import"./SegmentedButton-BBAnOIL_.js";import"./index-aqjhKmIi.js";import"./Select-Dh14rH5k.js";import"./InvisibleMessage-izuFC8Iy.js";import"./index-BLYN_WbG.js";import"./index-yNBIcJ04.js";import"./index-DELXSaBp.js";import"./index-CDAiDCq4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BceI_bVx.js";import"./group-2-Dc2Sp64W.js";import"./sort-descending-uLy3-9KR.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DsvBCAhC.js";import"./utils-CPpPlE2x.js";import"./index-DsURjSQ9.js";import"./index-Cma-sbNZ.js";import"./index-C-nOKAHu.js";import"./navigation-down-arrow-KRMhOoWK.js";import"./navigation-right-arrow-DlOUO2TW.js";import"./navigation-right-arrow-DE4TJjHn.js";import"./useCurrentTheme-Bd3jJx1F.js";import"./index-BuPDweMG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-9TsxZjtE.js";import"./paper-plane-B5upeV1m.js";import"./index-BD5Z38ff.js";import"./less-DeRh0NtQ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
