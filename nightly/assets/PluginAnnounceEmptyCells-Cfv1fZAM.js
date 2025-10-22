import{j as t}from"./iframe-Cs5gvioi.js";import{useMDXComponents as n}from"./index-BtKDOpat.js";import{I as i,F as m}from"./CommandsAndQueries-BdMbFe6n.js";import{M as p,C as s}from"./blocks-BcK5AE3G.js";import"./Tag-D4RJrwN-.js";import"./index-CiQvF52b.js";import"./copy-DKGYESSv.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Bah13JbR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPDq8Cwl.js";import"./index-BKjvzOpn.js";import"./index-Ccaj5Czc.js";import"./Link-EUC5ZRxP.js";import"./index-D8h8jAY6.js";import"./index-DYp5aNvA.js";import"./index-oQYl8gvD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D_r_w5Dj.js";import"./addCustomCSSWithScoping-CRaSmViC.js";import"./index-BxdMkIQq.js";import"./information-C2H5qqQk.js";import"./sys-enter-2-DnVNaHmP.js";import"./alert-Bc-gjyRb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C55QbHYW.js";import"./delete-CsuXrnL4.js";import"./settings-3bL7AxSj.js";import"./NoData-gyUpjjzs.js";import"./IllustratedMessage-BceXQMeD.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BkmX49kP.js";import"./index-CrEnkyES.js";import"./index-DygCzEx2.js";import"./slim-arrow-down-DXUzQK41.js";import"./Input-DD--HJgU.js";import"./ResponsivePopoverCommon.css-DsMB5qWp.js";import"./ValueStateMessage.css-DQ3KvLVl.js";import"./Suggestions.css-CQKPof5S.js";import"./ListBoxItemGroupTemplate-D1OUhHLE.js";import"./ComboBoxItemGroup-mjT1FhTP.js";import"./ListItemBaseTemplate-pXS2uemi.js";import"./Token-Vd3_FFDP.js";import"./ScrollEnablement-DFH5AJVi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BJ7R2iOM.js";import"./ToggleButton-DtqSYEtq.js";import"./SuggestionItem-Cy-toAYd.js";import"./index-Dn8IZjAy.js";import"./Option-CSEjJgZb.js";import"./index-B8E3208u.js";import"./SegmentedButton-BzfIjTCb.js";import"./index-CKPEe733.js";import"./Select-C34yPPyn.js";import"./InvisibleMessage-sIaY5jUe.js";import"./slim-arrow-down-Vs4ZtB-z.js";import"./index-BJpgtMTj.js";import"./index-BJuiI9q0.js";import"./index-D5YUVenJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nzG_jgzZ.js";import"./group-2-9Ba8pfXC.js";import"./sort-descending-Dk7bIx-V.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BeDU4ks0.js";import"./utils-D1ZaWfd7.js";import"./index-CfxXWdHC.js";import"./index-wq4yb3YT.js";import"./index-DD1WbCut.js";import"./navigation-down-arrow-Dnzw4uYB.js";import"./navigation-right-arrow-CsjF2Nv1.js";import"./navigation-right-arrow-CfUUtfYq.js";import"./useCurrentTheme-Dcwokryc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dypxe4oE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqvqHW8h.js";import"./paper-plane-DfliGKzl.js";import"./index-DsaE3rZW.js";import"./less-C_A2DZHR.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
