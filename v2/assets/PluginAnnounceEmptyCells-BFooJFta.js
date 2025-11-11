import{j as t}from"./iframe-eDai9lNh.js";import{useMDXComponents as n}from"./index-DWaT93aF.js";import{I as i,F as m}from"./CommandsAndQueries-DdbJ0tNe.js";import{M as p,C as s}from"./blocks-D3QMf_Nj.js";import"./Tag-BEY0r0J2.js";import"./index-CzhxwyLf.js";import"./copy-D01F59bh.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CWUcTBnU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cch7pNGQ.js";import"./index-lMWu8Jr6.js";import"./index-6ZlW-CM4.js";import"./Link-ZNB4Pnda.js";import"./index-DjL8CZ6c.js";import"./index--RcUy8xr.js";import"./index-asMoAFqv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbjGEabH.js";import"./addCustomCSSWithScoping-Cxdlbo61.js";import"./index-CfUZ5M--.js";import"./information-DqhxapEK.js";import"./sys-enter-2-Cyu-GNYt.js";import"./alert-p2WK74VT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8v7FfP_.js";import"./delete-CY-VLVEq.js";import"./settings-C0rZHhe-.js";import"./NoData-UN9eJyec.js";import"./IllustratedMessage-DYcYHt7h.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CD-7g8gm.js";import"./index-BTzKR5qJ.js";import"./index-go4C0tgo.js";import"./slim-arrow-down-kG6DCveM.js";import"./Input-Bqwo-D_6.js";import"./ResponsivePopoverCommon.css-Cub4Z5jf.js";import"./ValueStateMessage.css-DUX2b4_-.js";import"./Suggestions.css-CJbHgiSk.js";import"./ListBoxItemGroupTemplate-DNewmAce.js";import"./ComboBoxItemGroup-6nYAGsza.js";import"./ListItemBaseTemplate-CGHSadDi.js";import"./Token-BFth0cqr.js";import"./ScrollEnablement-CQYct29a.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D8y3n4Wp.js";import"./ToggleButton-TbU_TYbJ.js";import"./SuggestionItem-Zqcf61Si.js";import"./index-CAHo1qxD.js";import"./Option-s7hK9Co0.js";import"./index-CSrE-u2R.js";import"./SegmentedButton-CP9Hx__l.js";import"./index-Cfn4eBpH.js";import"./Select-Cggb-coC.js";import"./InvisibleMessage-CerZda4F.js";import"./slim-arrow-down-DXROzh0h.js";import"./index-IBifB5M4.js";import"./index-CCqTjS-e.js";import"./index-CUAqmRcs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-StgZWZHS.js";import"./group-2-ClC4Gayj.js";import"./sort-descending-BaJ0iwyz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BMeGntJ3.js";import"./utils-BjMUIUWP.js";import"./index-B8-6hSHC.js";import"./index-D2aXwz5o.js";import"./index-Q2bGr-fD.js";import"./navigation-down-arrow-Bsq7vo40.js";import"./navigation-right-arrow-AG7Z0JW-.js";import"./navigation-right-arrow-DCN3UIyQ.js";import"./useCurrentTheme-Bev_7rJ0.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D8QR7ZaE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BKoibY1H.js";import"./paper-plane-CUDWlEvw.js";import"./index-DbIiH5o6.js";import"./less-DMq8Sa1p.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
