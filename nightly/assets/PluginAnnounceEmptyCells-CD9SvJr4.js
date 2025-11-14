import{j as t}from"./iframe-DytFdpZ5.js";import{useMDXComponents as n}from"./index-ClxT7adU.js";import{I as i,F as m}from"./CommandsAndQueries-LDofsUzK.js";import{M as p,C as s}from"./blocks-CgPOjV91.js";import"./Tag-wRQS4rBi.js";import"./index-C-BQbcyx.js";import"./copy-HK9b5mhG.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-dqn4eYUx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrrPqcew.js";import"./index-BWneS7co.js";import"./index-DxeYPnJs.js";import"./Link-C5pcYLCj.js";import"./index-DcBMC71h.js";import"./index-BqVVjC2y.js";import"./index-BCsSmGRP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEqUMQtt.js";import"./addCustomCSSWithScoping-DZk4ZVKY.js";import"./index-BUF8RolX.js";import"./information-QfKl2uvK.js";import"./sys-enter-2-Dtt133YD.js";import"./alert-C-riVNTC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DiOVrNXv.js";import"./delete-CwCMe2lJ.js";import"./settings-C02FaBVl.js";import"./NoData-CIyKXGIu.js";import"./IllustratedMessage-i3hYdgC6.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-2XRDHoHl.js";import"./index-DOVXgZrj.js";import"./index-CNbeNrTd.js";import"./slim-arrow-down-DwpoKzJW.js";import"./Input-OPlbUKfy.js";import"./ResponsivePopoverCommon.css-B8i1Z4Ke.js";import"./ValueStateMessage.css-NEtnmyc2.js";import"./Suggestions.css-BPTnvCTk.js";import"./ListBoxItemGroupTemplate-DcxSGtmt.js";import"./ComboBoxItemGroup-f58ZgURw.js";import"./ListItemBaseTemplate-C3JeiHkK.js";import"./Token-MZi7lvV8.js";import"./ScrollEnablement-Co0kt5Hl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXFyw4BN.js";import"./ToggleButton-CpQHTAel.js";import"./SuggestionItem-ChyX7i02.js";import"./index-BCaEmiaT.js";import"./Option-DDqoKHKt.js";import"./index-RdLvHlSh.js";import"./SegmentedButton-B2HozEUv.js";import"./index-BjzJQlM-.js";import"./Select-D_v-B_Z3.js";import"./InvisibleMessage-D5JXdltE.js";import"./slim-arrow-down-DnRA-MRh.js";import"./index-YT8VK-Rh.js";import"./index-1y0Yb24g.js";import"./index-BXQwEVRd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DF8enc35.js";import"./group-2-BR7KJ0wq.js";import"./sort-descending-hDPKa1d_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Co3wqVTT.js";import"./utils-DRDvR6oY.js";import"./index-DgKfW966.js";import"./index-Br4jLSwx.js";import"./index-DzuzVEb4.js";import"./navigation-down-arrow-P9bJyD1t.js";import"./navigation-right-arrow-BdEYw-wX.js";import"./navigation-right-arrow-mvPQojYT.js";import"./useCurrentTheme-Dvjx0PbE.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bva0tWVh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CZGC8T2o.js";import"./paper-plane-BkwdG78Z.js";import"./index-HanQhb0I.js";import"./less-DiFuB8zb.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
