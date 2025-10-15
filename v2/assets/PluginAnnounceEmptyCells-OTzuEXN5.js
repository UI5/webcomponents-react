import{j as t}from"./iframe-BV6MX4jP.js";import{useMDXComponents as n}from"./index-BBPLoQd2.js";import{I as i,F as m}from"./CommandsAndQueries-B_NVK97H.js";import{M as p,C as s}from"./blocks-ButdG5ct.js";import"./Tag-DqTS_NIk.js";import"./index-D61UH3oK.js";import"./copy-BuKjNY_z.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-T_cM7jH3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn23lh4B.js";import"./index-BIn6vsDV.js";import"./index-5lJ63Ggw.js";import"./Link-CQBQGD-K.js";import"./index-BeBg5nKE.js";import"./index-BAeh9ZRA.js";import"./index-pEzZy3XJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJJJ49N9.js";import"./addCustomCSSWithScoping-BAR7O9dV.js";import"./index-B6xBDYCv.js";import"./information-D4lwDDvQ.js";import"./sys-enter-2-CNNlkaec.js";import"./alert-D9QVBDgC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DluWfdk1.js";import"./delete-D-tF1QFK.js";import"./settings-nj9vexJs.js";import"./NoData-DatsDwUA.js";import"./IllustratedMessage-wCVUZOEy.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DlJ2uOES.js";import"./index-W67I1HN2.js";import"./index-DzPicj6D.js";import"./slim-arrow-down-CsSTo7HV.js";import"./Input-ChW7yv3W.js";import"./ResponsivePopoverCommon.css-ClpZBCpz.js";import"./ValueStateMessage.css-C_M3aJzp.js";import"./Suggestions.css-CSkW4QfO.js";import"./ListBoxItemGroupTemplate-CRxGMHEE.js";import"./ComboBoxItemGroup-Crq8AFMp.js";import"./ListItemBaseTemplate-BgQ118Dh.js";import"./Token-DBSnoolZ.js";import"./ScrollEnablement-CUGdZ0ua.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C95WGA7x.js";import"./ToggleButton-DZW5zV-q.js";import"./SuggestionItem-D06YVUYK.js";import"./index-stG37gxE.js";import"./Option-CLVxZm0T.js";import"./index-CPiHE6HM.js";import"./SegmentedButton-w_O6Zr0R.js";import"./index-DpOA1UAF.js";import"./Select-8EQsIG3h.js";import"./InvisibleMessage-DDCSdyz6.js";import"./slim-arrow-down-m4nfpNWT.js";import"./index-ConqiMdG.js";import"./index-Teu4gKwB.js";import"./index-Cel48Hnh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-YqAR--zG.js";import"./group-2-sFLuQe_k.js";import"./sort-descending-D51ek0j-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bAeuC6z7.js";import"./utils-DdwGETq3.js";import"./index-CZ32PpE2.js";import"./index-Btqqk8wD.js";import"./index-CcZrpUmm.js";import"./navigation-down-arrow-e2PgOWNG.js";import"./navigation-right-arrow-Bh7h-vAT.js";import"./navigation-right-arrow-Dd5t9QGM.js";import"./useCurrentTheme-CNfb1pjw.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0G7QBXN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CTyFJzVy.js";import"./paper-plane-BI7RDtZg.js";import"./index-De8-qQne.js";import"./less-DfVJl5W-.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
