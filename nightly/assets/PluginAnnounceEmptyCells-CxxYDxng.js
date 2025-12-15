import{j as t}from"./iframe-CXDBwaXf.js";import{useMDXComponents as n}from"./index-Dq-vd5Ev.js";import{I as i,F as m}from"./CommandsAndQueries-EFbMjjAa.js";import{M as p,C as s}from"./blocks-BAIBAw_h.js";import"./Tag-BGtFiUzo.js";import"./index-CdM50YVo.js";import"./copy-tKRdoNaC.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D5wWkW-F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CdFEqecu.js";import"./index-Dkyq4U7I.js";import"./index-CNRdJAzz.js";import"./Link-Cn9jKhUL.js";import"./index-Ekr32cnm.js";import"./index-BZ8xLssE.js";import"./index-C2VBEgX9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BhiljY7Y.js";import"./addCustomCSSWithScoping-DOTw8Y7k.js";import"./index-74IMF4Fu.js";import"./information-BIroKfax.js";import"./sys-enter-2-a30AyDBZ.js";import"./alert-Bp9zzpf6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dr9tof3Q.js";import"./delete-BRjSytiH.js";import"./settings-DpX9wVto.js";import"./NoData-B9OjNVXe.js";import"./IllustratedMessage-C03S7hoW.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dto9QmBi.js";import"./index-C1hX-h2_.js";import"./index-C-8V3qWU.js";import"./slim-arrow-down-ziHFyrxY.js";import"./Input-D9M-oH0b.js";import"./ResponsivePopoverCommon.css-DzYVdD7o.js";import"./ValueStateMessage.css-DY78SEwL.js";import"./Suggestions.css-D9onRGXn.js";import"./ListBoxItemGroupTemplate-BApvrnZW.js";import"./ComboBoxItemGroup-DZ-S5_KR.js";import"./ListItemBaseTemplate-Jxaz0vER.js";import"./Token-gCiCxmW0.js";import"./ScrollEnablement-CPJHMdd5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcjimPYv.js";import"./ToggleButton-CIC6sJxV.js";import"./SuggestionItem-A-OV44pz.js";import"./index-Bmc90nAd.js";import"./Option-ChH-SgHF.js";import"./index-BtgHHz7L.js";import"./SegmentedButton-pcYoHon6.js";import"./index-BTA6DMIo.js";import"./Select-Brcl3j_5.js";import"./InvisibleMessage-DHYzFVaN.js";import"./slim-arrow-down-B9i1iNEL.js";import"./index-B8i-bBM2.js";import"./index-B3Pl9APG.js";import"./index-CeSJC3hT.js";import"./index-sCYpguPS.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGg0p1p3.js";import"./group-2-Dmm7arx2.js";import"./sort-descending-BdhD77Zt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CB-rwWQs.js";import"./utils-BQINLptF.js";import"./index-XK9DUlZ3.js";import"./index-BJ0Euif2.js";import"./index-CHqwEflI.js";import"./navigation-down-arrow-sU3YCq6s.js";import"./navigation-right-arrow-DuC2PC04.js";import"./navigation-right-arrow-CglzNXCr.js";import"./useCurrentTheme-nPjRikBt.js";import"./index-FYzg_PtZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zoi03cJM.js";import"./paper-plane-DMagDmJq.js";import"./index-B5ACz2H-.js";import"./less-CUrM5DQy.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
