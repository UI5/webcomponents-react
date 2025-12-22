import{j as t}from"./iframe-BH4bVelf.js";import{useMDXComponents as n}from"./index-BZqT0YF1.js";import{I as i,F as m}from"./CommandsAndQueries-D9wpOiDr.js";import{M as p,C as s}from"./blocks-CeYDMKuM.js";import"./Tag-BXnIP2dS.js";import"./index-CJTqi7uU.js";import"./copy-Dqlw1cCi.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CU79LRwI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Clh4Efsf.js";import"./index-CF882nWm.js";import"./index-CaNjf1Vn.js";import"./Link-CWmFbngj.js";import"./index-BD7TNiZv.js";import"./index-BoC02bGf.js";import"./index-DwqLEbZm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C83XHNHQ.js";import"./addCustomCSSWithScoping-BSRRxoii.js";import"./index-AtaZxDlU.js";import"./information-BFXgiRFQ.js";import"./sys-enter-2-IrFhFhIl.js";import"./alert-2wR6R_Um.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5b86cogR.js";import"./delete-D4wiFYB9.js";import"./settings-CWwIQT_C.js";import"./NoData-BFhg-GG6.js";import"./IllustratedMessage-34DEvqfA.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BZAg4ngt.js";import"./index-BZGTGu9E.js";import"./index-BvDC2UXj.js";import"./slim-arrow-down-BYwdEN3E.js";import"./Input-B0gYbYgt.js";import"./ResponsivePopoverCommon.css-CkobxXTu.js";import"./ValueStateMessage.css-C6Kv6bre.js";import"./Suggestions.css-BLG2o1V5.js";import"./ListBoxItemGroupTemplate-prNPVmNr.js";import"./ComboBoxItemGroup-C29Z681b.js";import"./ListItemBaseTemplate-CxzuukWL.js";import"./Token-Ct7p5V6Z.js";import"./ScrollEnablement-Dz8a2847.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dk4MirOU.js";import"./ToggleButton-CKPPi0F4.js";import"./SuggestionItem-DTaZ3jXG.js";import"./index-B5H40sXS.js";import"./Option-D8eBTNON.js";import"./index-BqP_tsIy.js";import"./SegmentedButton-D16K0baA.js";import"./index-_nPQLI_b.js";import"./Select-5ewiLwL1.js";import"./InvisibleMessage-IGW-rAUo.js";import"./slim-arrow-down-9BYKuyUs.js";import"./index-7MRTM3HB.js";import"./index-DVGATJ5a.js";import"./index-DznWkkCi.js";import"./index-DldxGphJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXWEU5fn.js";import"./group-2-DRzez2hn.js";import"./sort-descending-C_q3rv9b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CSpNMFp0.js";import"./utils-C0YjVaw1.js";import"./index-CAeOO4wN.js";import"./index-B5eeZss-.js";import"./index-CBsiXwh_.js";import"./navigation-down-arrow-_ZsRec2W.js";import"./navigation-right-arrow-49__25dM.js";import"./navigation-right-arrow-dg6jTT0c.js";import"./useCurrentTheme-DAO2rCbm.js";import"./index-BsJLWcly.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsU26iOF.js";import"./paper-plane-CAa_-spX.js";import"./index-CROEbkYy.js";import"./less-B3ilKLXN.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
