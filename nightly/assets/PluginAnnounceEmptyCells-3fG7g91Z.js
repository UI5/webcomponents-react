import{j as t}from"./iframe-DJeYw3_T.js";import{useMDXComponents as n}from"./index-CAoJF-Ee.js";import{I as i,F as m}from"./CommandsAndQueries-BpKCXtjf.js";import{M as p,C as s}from"./blocks-CX606tiu.js";import"./Tag-CCm379UD.js";import"./index-D_iy8XUE.js";import"./copy-DmlYE796.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B4PZ95my.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tnzxKSW0.js";import"./index-US2STizv.js";import"./index-ZZUuVpkh.js";import"./Link-D6M-iLai.js";import"./index-xs7bXSrN.js";import"./index-BldmH6cg.js";import"./index-BfDuZshB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bv4hvB9u.js";import"./addCustomCSSWithScoping-DdjgQkne.js";import"./index-ChAuXbDX.js";import"./information-CWuwvd7P.js";import"./sys-enter-2-CLYEOYwG.js";import"./alert-CTnjMkAD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Q-Qu9aPK.js";import"./delete-GyZuHggU.js";import"./settings-CSNf6lLD.js";import"./NoData-GWb7D9P8.js";import"./IllustratedMessage-CqKcL014.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-zZOIcPI-.js";import"./index-CfSZL8D6.js";import"./index-CrX_lNBL.js";import"./slim-arrow-down-Qo8He1bF.js";import"./Input-aC5IARbR.js";import"./ResponsivePopoverCommon.css-CZVnt3kp.js";import"./ValueStateMessage.css-CB2SJNwM.js";import"./Suggestions.css-CcYLfhHI.js";import"./ListBoxItemGroupTemplate-DzwM921Z.js";import"./ComboBoxItemGroup-DqY3uMDf.js";import"./ListItemBaseTemplate-BLUw0RML.js";import"./Token-hIQX68Hd.js";import"./ScrollEnablement-Dx-9KAkj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cn9vQdt7.js";import"./ToggleButton-WHvzyU1L.js";import"./SuggestionItem-CMelAZK6.js";import"./index-Ba8SHafQ.js";import"./Option-CVovyKZE.js";import"./index-zW6HzqIh.js";import"./SegmentedButton-DSaVLZ2J.js";import"./index-DP_3EnA2.js";import"./Select-BP2hTvkS.js";import"./InvisibleMessage-deXIs-B1.js";import"./slim-arrow-down-CrqglWHm.js";import"./index-vK1nVN_c.js";import"./index-DNDxQV0p.js";import"./index-B8XaOmg3.js";import"./index-DgbNo39p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CcBdfap_.js";import"./group-2-M9iAyJ2B.js";import"./sort-descending-DvSTXRI3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CtFadE48.js";import"./utils-B8eWjpJ0.js";import"./index-DYmw3Rfl.js";import"./index-kUdamL05.js";import"./index-DCI2wHY-.js";import"./navigation-down-arrow-CoZWd3Be.js";import"./navigation-right-arrow-DQBdB4vT.js";import"./navigation-right-arrow-CLYge1Io.js";import"./useCurrentTheme-ByIUAEMi.js";import"./index-CWW0jJXt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wyLkWFxP.js";import"./paper-plane-CIyPt1UE.js";import"./index-Dm0jkMUI.js";import"./less-q2GCtAl4.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
