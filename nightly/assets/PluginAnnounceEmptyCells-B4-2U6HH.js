import{j as t}from"./iframe-DrPmn2Fl.js";import{useMDXComponents as n}from"./index-D0JiuHQ4.js";import{I as i,F as m}from"./CommandsAndQueries-DJtqUE3T.js";import{M as p,C as s}from"./blocks-BjYhsAle.js";import"./Tag-DTGJG_3A.js";import"./index-D7exUdgR.js";import"./copy-BYLHU9Z4.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D7tDF3LC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcboqTLf.js";import"./index-7KEOFJG9.js";import"./index-pqPyLDtB.js";import"./Link-DpbM7hv-.js";import"./index-CSSeCaDH.js";import"./index-BDgABtQ5.js";import"./index-CsBAZiQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D8f6CQWY.js";import"./addCustomCSSWithScoping-Dp7JQ0AP.js";import"./index-BryeGZHH.js";import"./information-B3e_XIJr.js";import"./sys-enter-2-BzGI5wIC.js";import"./alert-k9YiTQ21.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B6X-Ca7e.js";import"./delete-CetONo-j.js";import"./settings-ue12HTO0.js";import"./NoData-CWzySvQc.js";import"./IllustratedMessage-D0tB0cmi.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BPl5eSyH.js";import"./index-kY9ogU97.js";import"./index-D_3vZ1qW.js";import"./slim-arrow-down-BIYWTMM9.js";import"./Input-CpYyucC6.js";import"./ResponsivePopoverCommon.css-aFKlRj1z.js";import"./ValueStateMessage.css-B2kFKHCy.js";import"./Suggestions.css-BixA8_8b.js";import"./ListBoxItemGroupTemplate-DQIXrV5Z.js";import"./ComboBoxItemGroup-Dvg2tB_d.js";import"./ListItemBaseTemplate-B7R8y6E8.js";import"./Token-DhrdJ1Sg.js";import"./ScrollEnablement-DEcYIeHm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlHk0Rap.js";import"./ToggleButton-B5bHIjtc.js";import"./SuggestionItem-IqbCPKbs.js";import"./index-CL7xnthF.js";import"./Option-BkGTUapV.js";import"./index-Dc1nuJIz.js";import"./SegmentedButton-Bp7GzNGY.js";import"./index-CYkhTtIe.js";import"./Select-DFfAQ4b9.js";import"./InvisibleMessage-CRnN6wGW.js";import"./slim-arrow-down-ESf62i2o.js";import"./index-Bgu519fZ.js";import"./index-XZB3isdK.js";import"./index-Bo9OnBPA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYqChTor.js";import"./group-2-BSQvkUDM.js";import"./sort-descending-Dpcy382o.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C2pRBdY7.js";import"./utils-KyGbIlyC.js";import"./index-D_tUOp4t.js";import"./index-exVXgT8C.js";import"./index-CmB-uMll.js";import"./navigation-down-arrow-CwSBl4bt.js";import"./navigation-right-arrow-F8wuOD05.js";import"./navigation-right-arrow-lRMX6PjY.js";import"./useCurrentTheme-C35ceZMU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B3w1bjpQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CO6iPAax.js";import"./paper-plane-BAOIGT1i.js";import"./index-D4uoRC6c.js";import"./less-B5N43rAu.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
