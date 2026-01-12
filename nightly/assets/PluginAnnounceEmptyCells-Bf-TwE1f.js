import{j as t}from"./iframe-DVF3HgbA.js";import{useMDXComponents as n}from"./index-BJ4ye1FV.js";import{I as i,F as m}from"./CommandsAndQueries-CjmWYk4A.js";import{M as p,C as s}from"./blocks-Clg7-MX4.js";import"./Tag-BOlrR2xo.js";import"./index-CZ6TSDWm.js";import"./copy-CUrqt0F6.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B6VyKVO1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B68cSDRH.js";import"./index-C50SsvCT.js";import"./index-DNsjAdVj.js";import"./Link-Cu0t9g59.js";import"./index-C1QuQKuw.js";import"./index-RU5NPQiF.js";import"./index-Dpj0MxBe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNtJiI2A.js";import"./addCustomCSSWithScoping-YxO5kK4q.js";import"./index-BBb33Sco.js";import"./information-DRqH7HSA.js";import"./sys-enter-2-DpmhEpBm.js";import"./alert-C-z3K1uA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CNuNpwJw.js";import"./delete-FIqmbs-F.js";import"./settings-ChaYvwof.js";import"./NoData-DAbRUSvi.js";import"./IllustratedMessage-Pj2qYyM1.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DWUQ4SCR.js";import"./index-C12QIudN.js";import"./index-BsuGpbOi.js";import"./slim-arrow-down-1px9VTz1.js";import"./Input-DhcX8gKW.js";import"./ResponsivePopoverCommon.css-B2o2246I.js";import"./ValueStateMessage.css-BcHvujGU.js";import"./Suggestions.css-Cp2lTwMm.js";import"./ListBoxItemGroupTemplate-Clh9M37l.js";import"./ComboBoxItemGroup-b_H895ft.js";import"./ListItemBaseTemplate-C8LHvDfc.js";import"./Token-xZkgnrp8.js";import"./ScrollEnablement-DSkvTOUi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-O-Eog0hj.js";import"./ToggleButton-GSuBcNaj.js";import"./SuggestionItem-DxCxM0yk.js";import"./index-tdNrQRr2.js";import"./Option-BMHvFChu.js";import"./index-BRpwxpNh.js";import"./SegmentedButton-BjPYlasD.js";import"./index-CMza5W0F.js";import"./Select-CiwMWeFC.js";import"./InvisibleMessage-CLNRDajy.js";import"./slim-arrow-down-BOcb4gKN.js";import"./index-U13CnHGN.js";import"./index-D_i0LdjL.js";import"./index-CB7VLmJD.js";import"./index-DXl3BA50.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DPVFS_rG.js";import"./group-2-Ds-80Bay.js";import"./sort-descending-DvN65zAq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFpTQubC.js";import"./utils-Dx_qzbNR.js";import"./index-CCv-VfNm.js";import"./index-BUFZhFxd.js";import"./index-BtJIcsH4.js";import"./navigation-down-arrow-CjSaxrf5.js";import"./navigation-right-arrow-BKG1O43Q.js";import"./navigation-right-arrow-Bh3wYE_f.js";import"./useCurrentTheme-V16yvvqz.js";import"./index-BM9_mjKd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bjbd4LnE.js";import"./paper-plane-OMmS-SvW.js";import"./index-D0P4-p7Y.js";import"./less-BIkfAwBi.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
