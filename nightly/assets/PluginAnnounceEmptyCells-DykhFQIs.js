import{j as t}from"./iframe-C7IxwDmR.js";import{useMDXComponents as n}from"./index-CbSg1oVF.js";import{I as i,F as m}from"./CommandsAndQueries-D3KUBOYC.js";import{M as p,C as s}from"./blocks-3mjErVLE.js";import"./Tag-C9e9pWXA.js";import"./index-BN5pmzGS.js";import"./copy-D-VhlFxG.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Bd0C7vts.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfKFL4Pe.js";import"./index-DScPik_c.js";import"./index-BiORqeCW.js";import"./Link-CCpfCikN.js";import"./index-CHmX3iCn.js";import"./index-DifvSs4M.js";import"./index-C1RQfiDX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-me-lZqyi.js";import"./addCustomCSSWithScoping-Ddb1r2sC.js";import"./index-Btmndd9w.js";import"./information-wiA8vfAE.js";import"./sys-enter-2-j2JxX-0l.js";import"./alert-Cm08TFjk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChqHr5wK.js";import"./delete-BSl3wy38.js";import"./settings-DGhtyKkS.js";import"./NoData-ZmM9tZ25.js";import"./IllustratedMessage-D-WEWynv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-1-g84_aS.js";import"./index-CscJ0cw_.js";import"./index-CwLFHpug.js";import"./slim-arrow-down-BNmOcvZN.js";import"./Input-zvxkPfUn.js";import"./ResponsivePopoverCommon.css-CswkUY4O.js";import"./ValueStateMessage.css--jDZnzoj.js";import"./Suggestions.css-CWsApbdF.js";import"./ListBoxItemGroupTemplate-ic-gllq_.js";import"./ComboBoxItemGroup-BgqJcjSC.js";import"./ListItemBaseTemplate-CcnlE6Sk.js";import"./Token-_905z17c.js";import"./ScrollEnablement-BD9V_oV0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BQaqKR0d.js";import"./ToggleButton-BufLqCEs.js";import"./SuggestionItem-CtttL5Nk.js";import"./index-7SdjD4wD.js";import"./Option-BM1N9G0j.js";import"./index-nWfCkMQS.js";import"./SegmentedButton-A3oHgqen.js";import"./index-DI3HfrFm.js";import"./Select-D4uOkSLO.js";import"./InvisibleMessage-3o-oW7oq.js";import"./slim-arrow-down-TXkhd4Mj.js";import"./index-Bc14vZWb.js";import"./index-DOS93QAh.js";import"./index-CR6Z_Rhf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-AZHZA8cU.js";import"./group-2-ZZFScIlf.js";import"./sort-descending-TOMxzf0j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CJRUeV6T.js";import"./utils-YyqGWE78.js";import"./index-DYQpLwRl.js";import"./index-RXV3LSnp.js";import"./index-CQqHvQDP.js";import"./navigation-down-arrow-pKD6UD3T.js";import"./navigation-right-arrow-D52cg3R3.js";import"./navigation-right-arrow-WwNAbjqy.js";import"./useCurrentTheme-3HGEU4AP.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D4AmYoSs.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DDhHKcDh.js";import"./paper-plane-zbAKlJWW.js";import"./index-CSaUThvG.js";import"./less-GzasUkSp.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
