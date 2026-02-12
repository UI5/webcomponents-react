import{j as t}from"./iframe-5IjhfTrO.js";import{useMDXComponents as n}from"./index-DX6MuGUF.js";import{I as i,F as m}from"./CommandsAndQueries-Cp1HBFGN.js";import{M as p,C as s}from"./blocks-CjIjNIVl.js";import"./Tag-DKhe7Llj.js";import"./index-7iKYLPe5.js";import"./copy-BcUsFLyb.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CNWtG6P5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DsJOnmXi.js";import"./index-C0Y9mFvG.js";import"./index-gs9VdEEm.js";import"./Link-D3EHIZv0.js";import"./index-B1bhMGiO.js";import"./index-CZf_ilO1.js";import"./index-Dlo4vTaU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-FOiwvzqu.js";import"./addCustomCSSWithScoping-DinQav34.js";import"./index-DXwYC06A.js";import"./information-CE4MPASh.js";import"./sys-enter-2-B35dOLRE.js";import"./alert-DzX-q61q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-GE08y6_n.js";import"./delete-TDZixyFf.js";import"./settings-Bh7T3Aa4.js";import"./NoData-Bt-daU8p.js";import"./IllustratedMessage-Si1uDDrI.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-bdIH5t39.js";import"./index-o-VfODOS.js";import"./index-NaVgwK4T.js";import"./slim-arrow-down-BxfuL-xs.js";import"./Input-BjA9iDS-.js";import"./ResponsivePopoverCommon.css-EJi8Nc2N.js";import"./ValueStateMessage.css-DkQrLy80.js";import"./Suggestions.css-N3zEGQC3.js";import"./ListBoxItemGroupTemplate-Bgeu1wE-.js";import"./ComboBoxItemGroup-CVa1qtfW.js";import"./ListItemBaseTemplate-DhbOBe-8.js";import"./Token-BHuXs6MO.js";import"./ScrollEnablement-CWoktJAU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bqb-MqKL.js";import"./ToggleButton-CYehuNUj.js";import"./SuggestionItem-CF5WoXJt.js";import"./index-BxhVAhSv.js";import"./Option-owItQ9u6.js";import"./index-B_MsBPhq.js";import"./SegmentedButton-CMfQs4cN.js";import"./index-Dp3YThp5.js";import"./Select-CquxZ4Yo.js";import"./InvisibleMessage-B4iVYYKg.js";import"./slim-arrow-down-DyuT9wxt.js";import"./index-DgMIVDzd.js";import"./index-0aeZ3IYW.js";import"./index-CMqt-nBZ.js";import"./index--WdbnVMu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ZqboP92g.js";import"./group-2-CwAhtfHQ.js";import"./sort-descending-Z5P70oJL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1_zmeRhs.js";import"./utils-BwxVe_F4.js";import"./index-CpQToSwa.js";import"./index-CHozFaoZ.js";import"./index-B4R63qeo.js";import"./navigation-down-arrow-uPQicAfY.js";import"./navigation-right-arrow-DcPCFKfd.js";import"./navigation-right-arrow-C41To8WY.js";import"./useCurrentTheme-DOrA3ijw.js";import"./index-DRFZPeLn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zhcrMbzG.js";import"./paper-plane-BsliF2P0.js";import"./index-BVmETlAW.js";import"./less-CYPzWn_X.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
