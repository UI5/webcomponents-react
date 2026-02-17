import{j as t}from"./iframe-utVLPk6_.js";import{useMDXComponents as n}from"./index-_7Ivp6Lr.js";import{I as i,F as m}from"./CommandsAndQueries-BVodeffY.js";import{M as p,C as s}from"./blocks-CRxaTikh.js";import"./Tag-LOOaBowr.js";import"./index-CJmgWra1.js";import"./copy-lkIY5Hce.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BDsnXMC6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5CeUqLr.js";import"./index-vwTPEa24.js";import"./index-w9tOLOey.js";import"./Link-BwFR1FvL.js";import"./index-CQTFiQOO.js";import"./index-BNJRxg3C.js";import"./index-Bt2MbZdo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP35uBwA.js";import"./addCustomCSSWithScoping-ByL_YC7i.js";import"./index-B4YNNEZt.js";import"./information-D-kuCoWP.js";import"./sys-enter-2-ClJM_7Cf.js";import"./alert-CrgSVEE-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D9p4z9Ic.js";import"./delete-DU934BZr.js";import"./settings-DNYW2Yi4.js";import"./NoData-DnrO3Jwz.js";import"./IllustratedMessage-DRvKcE8V.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DuJYHUBv.js";import"./index-DR6xJv6H.js";import"./index-C1CQn4Ke.js";import"./slim-arrow-down-CGFNdOyS.js";import"./Input-tiP9VWUa.js";import"./ResponsivePopoverCommon.css-B57nbVdH.js";import"./ValueStateMessage.css-JwjTw4R6.js";import"./Suggestions.css-CCPLE5i3.js";import"./ListBoxItemGroupTemplate-Ck1u2roF.js";import"./ComboBoxItemGroup-C0T7EKNO.js";import"./ListItemBaseTemplate-C2vXW6Ud.js";import"./Token-DQU0dq_y.js";import"./ScrollEnablement-CN5L_Azg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BjnDf0fW.js";import"./ToggleButton-C4-LaA2x.js";import"./SuggestionItem-DboqQoqi.js";import"./index-F4xTZLhy.js";import"./Option-sIfC3W_q.js";import"./index-BtNFNoxA.js";import"./SegmentedButton-vHAZ21UT.js";import"./index-SO2G2vA7.js";import"./Select-DZIQ9ThU.js";import"./InvisibleMessage-CxrOCkfz.js";import"./slim-arrow-down-BfxVVO5J.js";import"./index-B6DVqkRr.js";import"./index-DqzlYh_H.js";import"./index-DGUOU9Dg.js";import"./index-BIVITqPd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B_SeQI6p.js";import"./group-2-DwYUID86.js";import"./sort-descending-s-9kbj_2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CReDoCO5.js";import"./utils-CKyuyf9p.js";import"./index-DIwmFcHk.js";import"./index-Bs3vKR02.js";import"./index-zHNwrOOb.js";import"./navigation-down-arrow-CSxEN5wN.js";import"./navigation-right-arrow-CElFKq2C.js";import"./navigation-right-arrow-Dfc9Wtwu.js";import"./useCurrentTheme-DctUO6zQ.js";import"./index-EZDuqYef.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DR6ovS2D.js";import"./paper-plane-BTVeyq21.js";import"./index-B60t1jRe.js";import"./less-Bc9CIIDh.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
