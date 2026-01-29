import{j as t}from"./iframe-CyAbfAjR.js";import{useMDXComponents as n}from"./index-06KDG4AT.js";import{I as i,F as m}from"./CommandsAndQueries-B2npLt1g.js";import{M as p,C as s}from"./blocks-D91UiS7A.js";import"./Tag-DcmGlVyp.js";import"./index-Dx49XSH_.js";import"./copy-DuIUrssG.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CduZ0bih.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_ujFW-9.js";import"./index-zvTPe1JW.js";import"./index-C2mRWa3H.js";import"./Link-Cj1yeMGo.js";import"./index-DTVJfpj2.js";import"./index-DhltPY3F.js";import"./index-CmuOjIMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyLeRq-g.js";import"./addCustomCSSWithScoping-zxsplMRu.js";import"./index-DGFLZE4P.js";import"./information-Rep9dVOS.js";import"./sys-enter-2-_ycOnn14.js";import"./alert-BWU-sYPN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJqtSdbn.js";import"./delete-DllOoAvf.js";import"./settings-wJbQBcLC.js";import"./NoData-CBuJCjQZ.js";import"./IllustratedMessage-tA6cAG-s.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Bnj3-Z8S.js";import"./index-40ttS4tt.js";import"./index-aWCb2995.js";import"./slim-arrow-down-DdNrUHXY.js";import"./Input-DdGxyUaG.js";import"./ResponsivePopoverCommon.css-BVA8ZcTn.js";import"./ValueStateMessage.css-CWyNZgk-.js";import"./Suggestions.css-YuDlW85k.js";import"./ListBoxItemGroupTemplate-CzIT6ZwA.js";import"./ComboBoxItemGroup-BwIIuCG8.js";import"./ListItemBaseTemplate-BllUB4lH.js";import"./Token-BjNM8qNb.js";import"./ScrollEnablement-_UA22n7q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-QR6pRRAu.js";import"./ToggleButton-n_dD7Tpj.js";import"./SuggestionItem-DDD35SgE.js";import"./index-ATdZ4JNt.js";import"./Option-BPW8-nZA.js";import"./index-D6n5UcXf.js";import"./SegmentedButton-CVME573C.js";import"./index-JNLd-Q23.js";import"./Select-DTuI2LUV.js";import"./InvisibleMessage-CwIIQAVa.js";import"./slim-arrow-down-BfmJQhdi.js";import"./index--lMleNuo.js";import"./index-C75xx_by.js";import"./index-DIZzn41L.js";import"./index-EwWM-M_C.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DRLptP8y.js";import"./group-2-CYDrIlQx.js";import"./sort-descending-zDD6-75v.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C9_XexGy.js";import"./utils-BwnFu7uR.js";import"./index-DM9-P2gy.js";import"./index-Bs-9er-e.js";import"./index-BEWwn3Xg.js";import"./navigation-down-arrow-CL70XcuK.js";import"./navigation-right-arrow-ChTgZnRi.js";import"./navigation-right-arrow-DpOJRghh.js";import"./useCurrentTheme-CWQeV1Cm.js";import"./index-B72PquXy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CvAdZl9h.js";import"./paper-plane-BQ2yiuh0.js";import"./index-Dc7OW__V.js";import"./less-Duojpb1N.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
