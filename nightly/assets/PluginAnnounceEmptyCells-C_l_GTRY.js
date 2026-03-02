import{j as t}from"./iframe-Dp_LXyNr.js";import{useMDXComponents as n}from"./index-Du5TrOvB.js";import{I as i,F as m}from"./CommandsAndQueries-DJ070Qmg.js";import{M as p,C as s}from"./blocks-9I7fLsXi.js";import"./Tag-CUzUjb7h.js";import"./index-CMhb9NSF.js";import"./copy-Cwbx5yBu.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-sLLLanu-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlyZB9up.js";import"./index-CKcCy47r.js";import"./index-C2FHI_h3.js";import"./Link-KTjqK9wl.js";import"./index-DY9HWv06.js";import"./index-DIjOLpD2.js";import"./index-CTco0M7M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDmVKCiw.js";import"./addCustomCSSWithScoping-7CEi5oRz.js";import"./index-Bd_n1-5X.js";import"./information-KVIVt9bg.js";import"./sys-enter-2-C4zsDLSU.js";import"./alert-DWxcSCEU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-NdNm120N.js";import"./delete-Bh6rvYu4.js";import"./settings-BoxUkedg.js";import"./NoData-Itj-m_z4.js";import"./IllustratedMessage-BahKmhi1.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DtzRcyJr.js";import"./index-B1pI2LnF.js";import"./index-DXAZ5IQ3.js";import"./slim-arrow-down-Db3k0_l-.js";import"./Input-CwGD6kGS.js";import"./ResponsivePopoverCommon.css-CaIT07ea.js";import"./ValueStateMessage.css-ClqfbOtD.js";import"./Suggestions.css-iZx1rci3.js";import"./ListBoxItemGroupTemplate-DqtZVPPy.js";import"./ComboBoxItemGroup-DcXy2ln2.js";import"./ListItemBaseTemplate-Cqyd2hFY.js";import"./Token-j5u3Id6h.js";import"./ScrollEnablement-B4xK1oWi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHAirMKT.js";import"./ToggleButton-C8du3p8o.js";import"./SuggestionItem-DDXTi4_0.js";import"./index-CuctUWCD.js";import"./Option-Bkd_KNAu.js";import"./index-b5AWgmO0.js";import"./SegmentedButton-opFUZ7Oe.js";import"./index-BwGg5_P1.js";import"./Select-C8rdNxEb.js";import"./InvisibleMessage-B1fTihab.js";import"./slim-arrow-down-Cwp2cLQO.js";import"./index-NJhcgYyi.js";import"./index-C2a0yj7L.js";import"./index-BAn4ZmzK.js";import"./index--SxJFkMv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4ZmdR7v.js";import"./group-2-CCWcXYfi.js";import"./sort-descending-0Nd9Y8Ip.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D3ZD76ok.js";import"./utils-CVEijiie.js";import"./index-DjJtZJzk.js";import"./index-Bau-szwl.js";import"./index-KEvUu7xL.js";import"./navigation-down-arrow-w1mb7uJq.js";import"./navigation-right-arrow-DqPNc_S_.js";import"./navigation-right-arrow-CghgLFo5.js";import"./useCurrentTheme-Ded0Sk7M.js";import"./index-8yXidvv8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B6qg-InN.js";import"./paper-plane-Bi4wahXw.js";import"./index-BCS14kV5.js";import"./less-Dz6W6Mq4.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
