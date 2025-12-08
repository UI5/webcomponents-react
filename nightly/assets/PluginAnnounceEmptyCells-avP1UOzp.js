import{j as t}from"./iframe-C7GsLKpM.js";import{useMDXComponents as n}from"./index-fgJud-zp.js";import{I as i,F as m}from"./CommandsAndQueries-zRxhXSXv.js";import{M as p,C as s}from"./blocks-D2ryVNuM.js";import"./Tag-CvCDhGeJ.js";import"./index-CDhisaU5.js";import"./copy-DEZSjQMA.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B2fKbP8E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW2WjDDi.js";import"./index-B72Of-bP.js";import"./index-hUX7abRI.js";import"./Link-Bb3LeyVe.js";import"./index-Dyv0UGKb.js";import"./index-m_3CNkhb.js";import"./index-DoyP2rLL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6aw6fal.js";import"./addCustomCSSWithScoping-DxMrCFWH.js";import"./index-Bitbggm1.js";import"./information-CeT29ukt.js";import"./sys-enter-2-DX9sWARu.js";import"./alert-CEtziYy3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CAgadqAL.js";import"./delete-bz-6EPJB.js";import"./settings-DBygnMxF.js";import"./NoData-CTrYoSgm.js";import"./IllustratedMessage-BGIM0Nd-.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DaD8OOim.js";import"./index-CKlIVxrI.js";import"./index-ijI2PEj_.js";import"./slim-arrow-down-C4n298oD.js";import"./Input-9fOmwmcP.js";import"./ResponsivePopoverCommon.css-BAvtZMMP.js";import"./ValueStateMessage.css-DNVmRxxJ.js";import"./Suggestions.css-UxMCDVF9.js";import"./ListBoxItemGroupTemplate-JmLdb2e2.js";import"./ComboBoxItemGroup-jcs7SEnT.js";import"./ListItemBaseTemplate-Zu8EKxdQ.js";import"./Token-CetmLQwP.js";import"./ScrollEnablement-CT_L3ouW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BvfqPVMA.js";import"./ToggleButton-Sfk0hOkH.js";import"./SuggestionItem-DS4QbjGm.js";import"./index-MQHeIURy.js";import"./Option-BRgoDucR.js";import"./index-Df1cP14l.js";import"./SegmentedButton-CX6DYaOW.js";import"./index-Dkt3Rj2j.js";import"./Select-CacmHiKo.js";import"./InvisibleMessage-pKkBY45z.js";import"./slim-arrow-down-D1IgipIY.js";import"./index-BIzmAJhJ.js";import"./index-DAFFpok7.js";import"./index-Carv-kxu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbLf7ryM.js";import"./group-2-Cahp2hEa.js";import"./sort-descending-DDu_wB3P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-eDA8HHQT.js";import"./utils-5pKaz8Dq.js";import"./index-C_uQe8JR.js";import"./index-C3OJ4ssE.js";import"./index-L3JtXj-B.js";import"./navigation-down-arrow-B4J5Ds5O.js";import"./navigation-right-arrow-Cqg0RIxe.js";import"./navigation-right-arrow-C0UEuokw.js";import"./useCurrentTheme-yYLHFo3n.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BiZwHfQ9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xGcqCfh3.js";import"./paper-plane-DVE1JtVi.js";import"./index-uv_n3kbk.js";import"./less-BSXzHnZn.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
