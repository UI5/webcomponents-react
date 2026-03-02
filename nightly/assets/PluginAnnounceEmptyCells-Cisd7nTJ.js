import{j as t}from"./iframe-CajBfwIr.js";import{useMDXComponents as n}from"./index-C7bmLKAS.js";import{I as i,F as m}from"./CommandsAndQueries-BsF9_wDx.js";import{M as p,C as s}from"./blocks-DZo8LX6f.js";import"./Tag-BvqWkn4s.js";import"./index-EXDQ2t-0.js";import"./copy-n5aHnb96.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BX-Qb4Eb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBQApe_5.js";import"./index-els7k0UY.js";import"./index-sgQ15IT-.js";import"./Link-CQWL02fV.js";import"./index-Dqx8EP_w.js";import"./index-BAV33GIB.js";import"./index-BRmuq6Qh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vf8J9lvz.js";import"./addCustomCSSWithScoping-DTh894zV.js";import"./index-Bn2EsG13.js";import"./information-CcxBY03f.js";import"./sys-enter-2-tMwqxxGo.js";import"./alert-BiYc5KCB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYQNfvQa.js";import"./delete-CCuVV0JW.js";import"./settings-VA6JmB84.js";import"./NoData-iT2o0x8b.js";import"./IllustratedMessage-CiDyguLB.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C5LtRG52.js";import"./index-DC_WMaBG.js";import"./index-BPddPJMw.js";import"./slim-arrow-down-BshNdOqW.js";import"./Input-dSa06VPG.js";import"./ResponsivePopoverCommon.css-C3cJZdrp.js";import"./ValueStateMessage.css-CGvtMuKA.js";import"./Suggestions.css-BFVZkioL.js";import"./ListBoxItemGroupTemplate-DTiKs43B.js";import"./ComboBoxItemGroup-yVlezM04.js";import"./ListItemBaseTemplate-CBK-GT0A.js";import"./Token-Bm3GR7k3.js";import"./ScrollEnablement-DdM6D9rL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-imw798Pk.js";import"./ToggleButton-CxavjS9K.js";import"./SuggestionItem-C7YoTGLy.js";import"./index-OCdqEgk9.js";import"./Option-DahgSlps.js";import"./index-rD753xq2.js";import"./SegmentedButton-BVRS-zKD.js";import"./index-B2fDwDbY.js";import"./Select-BZ8C6uzA.js";import"./InvisibleMessage-DpVgh8EW.js";import"./slim-arrow-down-mNMzuL2_.js";import"./index-D2eo9c2Y.js";import"./index-BZf8tZXo.js";import"./index-DJJlm084.js";import"./index-CAXhGnio.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DZU39gPI.js";import"./group-2-DjP3uRq3.js";import"./sort-descending-Blrb7yMn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DL5AZoqB.js";import"./utils-ycTXtqIu.js";import"./index-Cp7syuca.js";import"./index-BQlFLyzK.js";import"./index-DJeNmhDh.js";import"./navigation-down-arrow-D2HQUBIe.js";import"./navigation-right-arrow-BCdzHFKq.js";import"./navigation-right-arrow-6Ga1AUU-.js";import"./useCurrentTheme-c1_0W5Iy.js";import"./index-C-m1BXWQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BJg_JlUg.js";import"./paper-plane-D3vk--cn.js";import"./index-Bgp5-0LC.js";import"./less-XlNrQzlF.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
