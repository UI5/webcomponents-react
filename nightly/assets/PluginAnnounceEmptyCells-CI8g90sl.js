import{j as t}from"./iframe-4qrVzB25.js";import{useMDXComponents as n}from"./index-C23NGFAV.js";import{I as i,F as m}from"./CommandsAndQueries-C8f_O47Z.js";import{M as p,C as s}from"./blocks-CyApLjCn.js";import"./Tag-DxNYrBt-.js";import"./index-BHBPbkXo.js";import"./copy-BwZFHKgv.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BGtl3UB-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cj8ZVdQX.js";import"./index-bsQInf2g.js";import"./index-MWca-2b0.js";import"./Link-Cc0E88FG.js";import"./index-CMfGGfhU.js";import"./index-Cvq3zOuj.js";import"./index-Cjln1VVF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqnCkxg.js";import"./addCustomCSSWithScoping-DQAaXiXr.js";import"./index-CU3hZFou.js";import"./information-DyICkYh-.js";import"./sys-enter-2-I-7Y6xsp.js";import"./alert-DbMRFtnZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dpm6wpGO.js";import"./delete-DFB2rKcT.js";import"./settings-P1Tu1UA2.js";import"./NoData-CAyhgKIF.js";import"./IllustratedMessage-MSluXbw5.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C7v7m6d5.js";import"./index-D7O6U1BC.js";import"./index-D-c-emv0.js";import"./slim-arrow-down-CXefVYMG.js";import"./Input-DCZqkJuY.js";import"./ResponsivePopoverCommon.css-C7ocu6v6.js";import"./ValueStateMessage.css-BkV0tb0J.js";import"./Suggestions.css-DkwtHK1N.js";import"./ListBoxItemGroupTemplate-Dx7ZVMwg.js";import"./ComboBoxItemGroup-CTcw46H9.js";import"./ListItemBaseTemplate-KBembrXH.js";import"./Token-CIWwMwgE.js";import"./ScrollEnablement-CR5txl14.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CjlAH9Fu.js";import"./ToggleButton-CVx_cCdy.js";import"./SuggestionItem-CjsbBv9j.js";import"./index-8zB2ZRqP.js";import"./Option-C10NqIPh.js";import"./index-CueD1sBZ.js";import"./SegmentedButton-D30KObWP.js";import"./index-3QlNC4k-.js";import"./Select-DOxg7abA.js";import"./InvisibleMessage-CEq_zNWh.js";import"./slim-arrow-down-HR07Gity.js";import"./index-DkDmb4j6.js";import"./index-q8cedDhq.js";import"./index-CC5rZlHP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dr0RP3gS.js";import"./group-2-CpBQCdfq.js";import"./sort-descending-BuPBBBgN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BxTTaJg9.js";import"./utils-B9_JuoKt.js";import"./index-uGUHJIW2.js";import"./index-DPoSKLzi.js";import"./index-DuUIqk7w.js";import"./navigation-down-arrow-CW_68QW5.js";import"./navigation-right-arrow-XZ7xPYvX.js";import"./navigation-right-arrow-DTS3LoQE.js";import"./useCurrentTheme-7TOMGYM8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DDFYNMIL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0uHFjA1.js";import"./paper-plane-ylHW1ldh.js";import"./index-BGEN4a8i.js";import"./less-BmzQiuIj.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
