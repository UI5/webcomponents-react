import{j as t}from"./iframe-D5yYeuyx.js";import{useMDXComponents as n}from"./index-OOr887th.js";import{I as i,F as m}from"./CommandsAndQueries-CJKRIq4o.js";import{M as p,C as s}from"./blocks-BwZUgw5J.js";import"./Tag-BZtJl-N7.js";import"./index-DJODyOkI.js";import"./copy-BbBddowJ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-zKKdy0iz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cu6PwiO-.js";import"./index-CWkadQ1i.js";import"./index-BMwlOPBB.js";import"./Link-DSfaPzX5.js";import"./index-BiamOLpW.js";import"./index-n-gjro57.js";import"./index-DFcCzRoG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IcjKSza1.js";import"./addCustomCSSWithScoping-DupGCqhX.js";import"./index-pGOyFusy.js";import"./information-CqfzA4ZI.js";import"./sys-enter-2-Cgd8Rk78.js";import"./alert-uMczVQtd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DkUAlph4.js";import"./delete-CEb_JUXh.js";import"./settings-BPkYZfgY.js";import"./NoData-BiDCs0cr.js";import"./IllustratedMessage-D3a58_2V.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BgGEjG58.js";import"./index-CWuQ_FvE.js";import"./index-DDrT2lBD.js";import"./slim-arrow-down-DAbWlapP.js";import"./Input-CRG5JTiB.js";import"./ResponsivePopoverCommon.css-DosOvkrc.js";import"./ValueStateMessage.css-CmY2G9nX.js";import"./Suggestions.css-Cc7CIEcc.js";import"./ListBoxItemGroupTemplate-DfKADDdU.js";import"./ComboBoxItemGroup-Dtfv3_LL.js";import"./ListItemBaseTemplate-BYWJKvpu.js";import"./Token-KEywEoQK.js";import"./ScrollEnablement-9NyzND_c.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CXdrrYCn.js";import"./ToggleButton-ByrGi9fF.js";import"./SuggestionItem-DdDeQX3D.js";import"./index-DbKnZ7JU.js";import"./Option-CW9CutXR.js";import"./index-Cm_JNiA3.js";import"./SegmentedButton-DDilHdoL.js";import"./index-BpQt5OEf.js";import"./Select-DaSCiKmk.js";import"./InvisibleMessage-Cl3WTIpJ.js";import"./slim-arrow-down-BglCXS9Y.js";import"./index-BBvERRAI.js";import"./index-AQwE40sw.js";import"./index-Co3Z1GWi.js";import"./index-6QK4Io4Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6eoyLEr.js";import"./group-2-ATO8Q-wL.js";import"./sort-descending-BXHZWD30.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CdNe_oTn.js";import"./utils-CLQPrml8.js";import"./index-Dh_vIy7-.js";import"./index-QBbEu3vQ.js";import"./index-D4p2SSM5.js";import"./navigation-down-arrow-CLdsbi01.js";import"./navigation-right-arrow-CqvRZAjQ.js";import"./navigation-right-arrow-DgZ7r_GQ.js";import"./useCurrentTheme-Czjolaja.js";import"./index-BwEGatY_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0KPyHmS.js";import"./paper-plane-B3JfZYpI.js";import"./index-CBYgCKNh.js";import"./less-BnTb-LS4.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
