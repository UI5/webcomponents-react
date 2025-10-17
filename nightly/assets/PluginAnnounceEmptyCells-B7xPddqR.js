import{j as t}from"./iframe-CYi73OmP.js";import{useMDXComponents as n}from"./index-Dt90fsaF.js";import{I as i,F as m}from"./CommandsAndQueries-BrIX07He.js";import{M as p,C as s}from"./blocks-vDcvm_c-.js";import"./Tag-CriFgWmH.js";import"./index-BBMPc3L0.js";import"./copy-LPsKpGQA.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CnnPd9hw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HYZOU_1D.js";import"./index-CZYlbhmv.js";import"./index-C4wC4Ofz.js";import"./Link-CjT6BL8J.js";import"./index-BbTynw39.js";import"./index-KAzf1qB6.js";import"./index-BaDKwi6p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWMkLVHm.js";import"./addCustomCSSWithScoping-COZN1IbI.js";import"./index-BTCXnKhc.js";import"./information-C2FlC8X_.js";import"./sys-enter-2-DuV3U0aL.js";import"./alert-CP7qxv0u.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CxYW60hZ.js";import"./delete-xFbi_-wC.js";import"./settings-0opYo2Jr.js";import"./NoData-sI1XyAen.js";import"./IllustratedMessage-CHhSpY83.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-4sLj_wxI.js";import"./index-E4itPGQP.js";import"./index-C10zcdB8.js";import"./slim-arrow-down-D0SdHrd1.js";import"./Input-CkTLFzaW.js";import"./ResponsivePopoverCommon.css-B7aCnJ_6.js";import"./ValueStateMessage.css-Kd5nnHFH.js";import"./Suggestions.css-eFUrfSNb.js";import"./ListBoxItemGroupTemplate-BSgwyZvo.js";import"./ComboBoxItemGroup-DSrVKCES.js";import"./ListItemBaseTemplate-iYm3fW7D.js";import"./Token-fT8TuGWc.js";import"./ScrollEnablement-CMSiyGPr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DvFHooIN.js";import"./ToggleButton-M9DFkWHO.js";import"./SuggestionItem-XxFpxKzR.js";import"./index-CJYGPrkA.js";import"./Option-RzwHVxqI.js";import"./index-C4WCFPR-.js";import"./SegmentedButton-BUOZ4yCF.js";import"./index-DHGFCFdp.js";import"./Select-DjRpqOSl.js";import"./InvisibleMessage-k37olEit.js";import"./slim-arrow-down-B-WSvZWG.js";import"./index-D0BFqai2.js";import"./index-BquyjLBw.js";import"./index-DzRfQBko.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6hcRg8y.js";import"./group-2-9hVkaIla.js";import"./sort-descending-BOaZ_83J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bbj4khLj.js";import"./utils-DFJ-XhsT.js";import"./index-CmHQyBLd.js";import"./index-DwCYZdGU.js";import"./index-CYe6Ma7u.js";import"./navigation-down-arrow-D9GAp0iJ.js";import"./navigation-right-arrow-BXBiRuUx.js";import"./navigation-right-arrow-BQc2k2m7.js";import"./useCurrentTheme-B3JSS_WV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-COBLEdDa.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CF7dzU0W.js";import"./paper-plane-Bv6M5PcU.js";import"./index-CtRWkyeb.js";import"./less-D2zQaX4u.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
