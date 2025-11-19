import{j as t}from"./iframe-BdLp08tI.js";import{useMDXComponents as n}from"./index-L7M025bj.js";import{I as i,F as m}from"./CommandsAndQueries-A8ohCY01.js";import{M as p,C as s}from"./blocks-BcH5lj54.js";import"./Tag-BYLKYo9E.js";import"./index-C9cC8h2E.js";import"./copy-CAz8pLUN.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-yn0tvp-E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgCb8EoK.js";import"./index-6N8J-kdE.js";import"./index-bbxcO9wp.js";import"./Link-PkVO0OYZ.js";import"./index-Bq5n3ghu.js";import"./index-vBihh2Vl.js";import"./index-BjKyj7T0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oSO4QDvk.js";import"./addCustomCSSWithScoping-D7d3eFNt.js";import"./index-DEh5uPtQ.js";import"./information-BztpBEmn.js";import"./sys-enter-2-B36Zfbw2.js";import"./alert-YtyMWuog.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cc5ACQhd.js";import"./delete-C129Vo-j.js";import"./settings-CU9DNY2V.js";import"./NoData-CdpbHVsl.js";import"./IllustratedMessage-aNFXY5tv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B6AfN2ty.js";import"./index-BwfJRUg8.js";import"./index-DbJZSO19.js";import"./slim-arrow-down-Jk0gqFeP.js";import"./Input-BkxHEOLf.js";import"./ResponsivePopoverCommon.css-DUrNz7RL.js";import"./ValueStateMessage.css-KNUuhM7R.js";import"./Suggestions.css-DRL4VnmY.js";import"./ListBoxItemGroupTemplate-BswdqGi0.js";import"./ComboBoxItemGroup-DmWoR2D3.js";import"./ListItemBaseTemplate-q7lVjUmU.js";import"./Token-BUZ_-lS4.js";import"./ScrollEnablement-DKU4KjEY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-NrFCjmp4.js";import"./ToggleButton-0L16aZ13.js";import"./SuggestionItem-CvJl4nQX.js";import"./index-a4Q7iOV6.js";import"./Option-CI2Yw2KP.js";import"./index-BesWFMlT.js";import"./SegmentedButton-DezAXtzP.js";import"./index-DEdHEHwC.js";import"./Select-CgTdKzom.js";import"./InvisibleMessage-CU9pQYDF.js";import"./slim-arrow-down-VvEv069w.js";import"./index-c-nauNND.js";import"./index-B7YCk-Wu.js";import"./index-BJsU8vuH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CyqZ_FcD.js";import"./group-2-DPCLN9ms.js";import"./sort-descending-B-2HsOeS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dv6NUcfX.js";import"./utils-CB796yal.js";import"./index-DVTrGvWQ.js";import"./index-C7WwmQky.js";import"./index-Dug3C8oV.js";import"./navigation-down-arrow-BWuNqmxj.js";import"./navigation-right-arrow-DFVpmM_Z.js";import"./navigation-right-arrow-Dd0lHwSB.js";import"./useCurrentTheme-DUR02Wpt.js";import"./IndicationColor-DVw-fSM_.js";import"./index-vE2t2Hyd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C_VbuiKz.js";import"./paper-plane-CeqIEAvx.js";import"./index-mr-I5ZbO.js";import"./less-D5n1Rht5.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
