import{j as t}from"./iframe-DwrbX4RV.js";import{useMDXComponents as n}from"./index-DEV0fT-3.js";import{I as i,F as m}from"./CommandsAndQueries-33-9TCX1.js";import{M as p,C as s}from"./blocks-D-Cz54eK.js";import"./Tag-CFiS-8RZ.js";import"./index-BQbTf7k-.js";import"./copy-ZcGBB0nX.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BPiexnty.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Zv7LwxZg.js";import"./index-DcjDkGfQ.js";import"./index-C2WUwRD4.js";import"./Link-CH3IA-s_.js";import"./index-DfMLBK8G.js";import"./index-4tQAJTUd.js";import"./index-DafPGyjY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP_TNLDv.js";import"./addCustomCSSWithScoping-BNLxo1iY.js";import"./index-DLV46EWe.js";import"./information-Bbk3nBJv.js";import"./sys-enter-2-Dh-lxitt.js";import"./alert-DlEiJnhn.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHDvawwA.js";import"./delete-DcD4HBZQ.js";import"./settings-BXd4XT-i.js";import"./NoData-ByibTLi_.js";import"./IllustratedMessage-BP4eByRs.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-pczX_0-g.js";import"./index-CiWbQ0SX.js";import"./index-CaEHNGDh.js";import"./slim-arrow-down-D3ZsDLwh.js";import"./Input-DKlTLujy.js";import"./ResponsivePopoverCommon.css-C8r5-0tw.js";import"./ValueStateMessage.css-CdZTGBs2.js";import"./Suggestions.css-BXr49NFJ.js";import"./ListBoxItemGroupTemplate-Dzl2p6m5.js";import"./ComboBoxItemGroup-BSFvIoMS.js";import"./ListItemBaseTemplate-D7oB3m3T.js";import"./Token-Bx9MLKqg.js";import"./ScrollEnablement-CYy8a9iX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C7C_LUm1.js";import"./ToggleButton-BMmF2FMi.js";import"./SuggestionItem-DkdM06SJ.js";import"./index-BhGwaRmh.js";import"./Option-B-khv2Jb.js";import"./index-Bh6MarsA.js";import"./SegmentedButton-DJ9UBm4v.js";import"./index-DfbaGbYm.js";import"./Select-XgkwJ3ZO.js";import"./InvisibleMessage-bGcdvgGE.js";import"./slim-arrow-down-Bun6gyze.js";import"./index-CPtCfy3E.js";import"./index-KseHHLyP.js";import"./index-CooYNUmQ.js";import"./index-Djuxy3lm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DS1aWjfv.js";import"./group-2-CDQM5C56.js";import"./sort-descending-YAOaWHCt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DINgmDQf.js";import"./utils-Df-GzOhH.js";import"./index-BaDEpd7H.js";import"./index-B93zIJEs.js";import"./index-B99IvkHX.js";import"./navigation-down-arrow-Bf5qo7Su.js";import"./navigation-right-arrow-CK6e15pE.js";import"./navigation-right-arrow-WgjRwqCg.js";import"./useCurrentTheme-D7Gurzqj.js";import"./index-CSxQ_278.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DBK1p3l_.js";import"./paper-plane-BgIVbC40.js";import"./index-DQlMDjQF.js";import"./less-DvuWw9NE.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
