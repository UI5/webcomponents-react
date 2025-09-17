import{j as t}from"./iframe-DUkvwiCH.js";import{useMDXComponents as i}from"./index-CmOOmEq_.js";import{I as n,F as m}from"./CommandsAndQueries-PDY51fAI.js";import{M as p,C as s}from"./blocks-BEyioZmC.js";import"./Tag-DEWD3xtk.js";import"./index-mzCfuMGx.js";import"./copy-B0dtT-T1.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-7JKM5En5.js";import"./preload-helper-D9Z9MdNV.js";import"./index-B92FdrSK.js";import"./index-XPJfZ8Rp.js";import"./index-BtWSXXzR.js";import"./Link-DPkQciON.js";import"./addCustomCSSWithScoping-CPXzOUpZ.js";import"./index-_2a7rjiJ.js";import"./index-qYUxj7eK.js";import"./index-B-fuFZPz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOPJEYH-.js";import"./index-DhtGVRhj.js";import"./information-DXx8yVKj.js";import"./sys-enter-2-DohaKpz7.js";import"./alert-DS7-1sye.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-gqR0P-Wx.js";import"./delete-BdCzKGxL.js";import"./settings-2PbqmORg.js";import"./NoData-Ca0oG_JL.js";import"./IllustratedMessage-DqN1c1Zq.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B0xFtsqI.js";import"./index-CXzHH1Z3.js";import"./slim-arrow-down-xGo2jOIY.js";import"./Input-DQ5p6nKI.js";import"./ResponsivePopoverCommon.css-BoQVIvNi.js";import"./ValueStateMessage.css-Bsq6Il4y.js";import"./Suggestions.css-i3s5CWMS.js";import"./ListBoxItemGroupTemplate-DP2vsF3T.js";import"./ComboBoxItemGroup-Bt2s2r-m.js";import"./ListItemBaseTemplate-Nc_kgJrp.js";import"./Token-B0XPP79K.js";import"./ScrollEnablement-B_COiRMd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYtQ6rBD.js";import"./ToggleButton-CFoIabfN.js";import"./SuggestionItem-CKzR1LPx.js";import"./index-CdyYI52I.js";import"./Option-CDGlp-cu.js";import"./index-DoRSQu9o.js";import"./SegmentedButton-D2lnd9RP.js";import"./index-MgIz5-1O.js";import"./Select-C5SGLZaQ.js";import"./InvisibleMessage-CxWJNd19.js";import"./slim-arrow-down-CYI811l3.js";import"./useIsRTL-CJjpUbvq.js";import"./index-CfgMfPc4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DxjtuVZF.js";import"./group-2-IpJOfuC0.js";import"./sort-descending-ci6Trp1X.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmG0lqi8.js";import"./utils-BhHqIEZ6.js";import"./index-DOXiwBZC.js";import"./index-B5JDV88H.js";import"./index-veuLTP7t.js";import"./navigation-down-arrow-CI6f4P1V.js";import"./navigation-right-arrow-ChwAEYXe.js";import"./navigation-right-arrow-SID4lvJa.js";import"./useCurrentTheme-k-t9Vjzd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-RYQDkhJm.js";import"./debounce-D7W5PopO.js";import"./paper-plane-CB6ae7Yb.js";import"./index-Csbl6rAf.js";import"./less-GaIuzsTP.js";import"./index-C1SgQ07A.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,t.jsx(m,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
