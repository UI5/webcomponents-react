import{j as t}from"./iframe-D8qIAX_f.js";import{useMDXComponents as i}from"./index-DiTh5Uxf.js";import{I as n}from"./CommandsAndQueries-KW_TEdhO.js";import{M as m,C as p}from"./blocks-CdiMt6d7.js";import"./Tag-DNk7gwKS.js";import"./index-CUBI-ScP.js";import"./copy-B-3EcH3S.js";import{F as s}from"./Footer-CDmCmrx9.js";import"./PageNotFound-DinCfZiZ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DWxML14G.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-sqVv97Mp.js";import"./index-BFvnR1Pd.js";import"./index-D5GeJD0z.js";import"./index-DHpssY4F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5egdqPD.js";import"./addCustomCSSWithScoping-Dd8DeQed.js";import"./index-BWh6tnxq.js";import"./index-isyxk5XI.js";import"./index-D_VELT5i.js";import"./information-BSkhwjAM.js";import"./sys-enter-2-DXbxqs0w.js";import"./alert-D1bzSBmg.js";import"./index-CaB62qmL.js";import"./Illustrations-CZMe32im.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bnfme1CR.js";import"./delete-DKzsPxV3.js";import"./settings-Co-dt12h.js";import"./NoData-CnuitWCi.js";import"./NoFilterResults-B0VftMR5.js";import"./index-BZjfN2bH.js";import"./IllustratedMessage-D4OKg0ld.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BycYSYli.js";import"./Input-D0_UTDDL.js";import"./ResponsivePopoverCommon.css-BtulJSvz.js";import"./ValueStateMessage.css-BIixIGY4.js";import"./Suggestions.css-BhNcBbmQ.js";import"./ListBoxItemGroupTemplate-BJn4gBeU.js";import"./ComboBoxItemGroup-ezj5F7ji.js";import"./ListItemBaseTemplate-riJMQTas.js";import"./Token-BcYmw9w_.js";import"./ScrollEnablement-BgCuAdCA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DALcwdap.js";import"./ToggleButton-C3jU9kII.js";import"./multiselect-all-CaYmyguO.js";import"./SuggestionItem-_h5nzTSK.js";import"./index-0yjrcroP.js";import"./Option-DpFSS1nL.js";import"./index-SMtvyjeP.js";import"./SegmentedButton-D8_R1Jby.js";import"./index-BPpdvqUC.js";import"./Select-1OmCgp3X.js";import"./InvisibleMessage-B7bFjCnk.js";import"./index-IudE1LKk.js";import"./index-BGEKXSC0.js";import"./index-CT5M-svC.js";import"./index-DjTGYXxN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3JrpZ6b.js";import"./group-2-WoDpIjlk.js";import"./sort-descending-B4RgaCGU.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-p_9aB8wm.js";import"./utils-BRwctz-8.js";import"./index-DW0jnqVx.js";import"./index-BSeapbsT.js";import"./index-Dm1qzLAZ.js";import"./navigation-down-arrow-BKjF3iRZ.js";import"./navigation-right-arrow-HHGkA-Ie.js";import"./navigation-right-arrow-BMk4pdcr.js";import"./useCurrentTheme-DWdXkjvV.js";import"./index-D-H2QYf3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NNdXKXQ8.js";import"./paper-plane-D1mqNsgN.js";import"./index-Brr52Ff4.js";import"./less-DV5NSC93.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
