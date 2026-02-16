import{j as t}from"./iframe-DD3khz8t.js";import{useMDXComponents as n}from"./index-CHFjnrWX.js";import{I as i,F as m}from"./CommandsAndQueries-DsVeZAZ7.js";import{M as p,C as s}from"./blocks-ibeWpSZJ.js";import"./Tag-Ngk_8fKi.js";import"./index-BQH8_ZBk.js";import"./copy-BSvcS0vC.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-5_I1cyxV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvVzwHKX.js";import"./index-BVYBIT27.js";import"./index-BHPH6hXB.js";import"./Link-p7O4byri.js";import"./index-DddTN1yz.js";import"./index-INxWrkzg.js";import"./index-BddI7Cdl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgRC_ctT.js";import"./addCustomCSSWithScoping-BX6ct4xq.js";import"./index-w-lQea0z.js";import"./information-DqXpZV5n.js";import"./sys-enter-2-BQ568DSo.js";import"./alert-CH5Zr4v2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories--alj2jOK.js";import"./delete-Ct8xiXlx.js";import"./settings-B1teuJ2R.js";import"./NoData-DvZhvA8J.js";import"./IllustratedMessage-CShEbWRz.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-6kBWV_FC.js";import"./index-Cj2HP5zh.js";import"./index-BRxYB2Dw.js";import"./slim-arrow-down-5-78CQg2.js";import"./Input-CzY57eje.js";import"./ResponsivePopoverCommon.css-DtiXOolb.js";import"./ValueStateMessage.css-BAlZcm0o.js";import"./Suggestions.css-wNpJO5EP.js";import"./ListBoxItemGroupTemplate-CQk5fTJS.js";import"./ComboBoxItemGroup-TwWewYqC.js";import"./ListItemBaseTemplate-Dy5bCQYp.js";import"./Token-a3MWAMbv.js";import"./ScrollEnablement-B0G1MDOV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CcQmaiD_.js";import"./ToggleButton-CSRLBrRn.js";import"./SuggestionItem-CBBezjnP.js";import"./index-D3LDGHoT.js";import"./Option-i4_4pLmE.js";import"./index-D02z_BNZ.js";import"./SegmentedButton-BGocngUd.js";import"./index-DNXbXPty.js";import"./Select-NIA1LFcO.js";import"./InvisibleMessage-DD1Ev_vZ.js";import"./slim-arrow-down-D0mEITot.js";import"./index-BITmfB0x.js";import"./index-myUsI4jx.js";import"./index-DquhQeMg.js";import"./index-CM02EC77.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3GrU4Ss.js";import"./group-2-1rPdh5F3.js";import"./sort-descending-DgjPPaFB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbBNQQRY.js";import"./utils-DdRAkXpa.js";import"./index-B_XYOqNE.js";import"./index-BIIPEOn-.js";import"./index-CDwMQpv5.js";import"./navigation-down-arrow-YqNslUL9.js";import"./navigation-right-arrow-CxeAemfg.js";import"./navigation-right-arrow-Bq-pkXdO.js";import"./useCurrentTheme-C2JP9KVd.js";import"./index-CT5LP0kS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CAOBRXTB.js";import"./paper-plane-CrMU2hg6.js";import"./index-C3tzgyPK.js";import"./less-CSsjRXW_.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
