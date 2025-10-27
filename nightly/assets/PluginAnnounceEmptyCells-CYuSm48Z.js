import{j as t}from"./iframe-B7JRtnJ_.js";import{useMDXComponents as n}from"./index-BPvgxWCZ.js";import{I as i,F as m}from"./CommandsAndQueries-Q6uRMqWv.js";import{M as p,C as s}from"./blocks-De_aBrmo.js";import"./Tag-BKx3QN9f.js";import"./index-D4cnUaLM.js";import"./copy-C1tv-pSG.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DXu8cpTj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bxt1rtVG.js";import"./index-DptOKZBu.js";import"./index-DoEzIHzx.js";import"./Link-CTrIksmS.js";import"./index-Ch21QDGf.js";import"./index-B10alG5K.js";import"./index-DCbqd4CK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CpyU0bSl.js";import"./addCustomCSSWithScoping-COHCvbrD.js";import"./index-VZQHlfm7.js";import"./information-CsJaoifg.js";import"./sys-enter-2-ZCQT486r.js";import"./alert-B325SdK2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CDBgji9G.js";import"./delete-B3tuR7-p.js";import"./settings-D5gHcoOg.js";import"./NoData-D9ka5VCC.js";import"./IllustratedMessage-BJKH4F_T.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DEpwK6Ta.js";import"./index-DTKzGQ6P.js";import"./index-CsB4ym8b.js";import"./slim-arrow-down-BzVC3qLM.js";import"./Input-BYPwe2OS.js";import"./ResponsivePopoverCommon.css-D4L-fz7S.js";import"./ValueStateMessage.css-Da6bxDPp.js";import"./Suggestions.css-D7e9g6wi.js";import"./ListBoxItemGroupTemplate-i04jvwvt.js";import"./ComboBoxItemGroup-35_A61aK.js";import"./ListItemBaseTemplate-zRKoETe6.js";import"./Token-DavucC3B.js";import"./ScrollEnablement-De2yMTO7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DOEa2jCy.js";import"./ToggleButton-DUnpLraq.js";import"./SuggestionItem-cFLHLZrB.js";import"./index-CqtNJPl5.js";import"./Option-KMv42Mqm.js";import"./index-Ca9erLwf.js";import"./SegmentedButton-BR2WkUo4.js";import"./index-Dq1tb5Fi.js";import"./Select-BM-L4rd4.js";import"./InvisibleMessage-BnecaueW.js";import"./slim-arrow-down-BF5Yax_r.js";import"./index-DeNJuL6H.js";import"./index-Jqh8kZ4Z.js";import"./index-SAfhucJr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-mXBC9qtL.js";import"./group-2-C1w6MKqp.js";import"./sort-descending-D7Gnpxkd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-e_OfuZeF.js";import"./utils-B0P9OHGE.js";import"./index-ntbAsQ4L.js";import"./index-DYX22vMe.js";import"./index-BH2TLEnM.js";import"./navigation-down-arrow-BNouF3FU.js";import"./navigation-right-arrow-CwzVtkMG.js";import"./navigation-right-arrow-BWpP7Omt.js";import"./useCurrentTheme-C1kqmVty.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BtJSqTjG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRx_4vwg.js";import"./paper-plane-B06jmj5a.js";import"./index-Ch7LJGDA.js";import"./less-Dzjv4OdC.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
