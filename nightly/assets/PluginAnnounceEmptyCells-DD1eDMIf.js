import{j as t}from"./iframe-CEsx9pS5.js";import{useMDXComponents as i}from"./index-gmjnJOv_.js";import{I as n}from"./CommandsAndQueries-KRiBOwvQ.js";import{M as m,C as p}from"./blocks-8Wtp1Sju.js";import"./Tag-HQWMt5YG.js";import"./index-CTv8OR9t.js";import"./copy-BKv99Y3s.js";import{F as s}from"./Footer-BzqBC082.js";import"./PageNotFound-Dm-lShwt.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DCsN8t5K.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Op-ol6Yv.js";import"./index-LEy71z39.js";import"./index-C0Wj8jmE.js";import"./index-CNLVL7wa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dF5rg7Pk.js";import"./addCustomCSSWithScoping-C93rkw8E.js";import"./index-C3LB4ZIk.js";import"./index-BUd2Yp1O.js";import"./index-CYl2KpDn.js";import"./information-BsgOGoHr.js";import"./sys-enter-2-QXPkX9VX.js";import"./alert-C6xGNNq6.js";import"./index-D0QmD1oJ.js";import"./Illustrations-B8Nne3o3.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-3jM9F0nS.js";import"./delete-DoaTIgC3.js";import"./settings-Bs-jHTmN.js";import"./NoData-DT708HZj.js";import"./NoFilterResults-DVvHy-ZN.js";import"./index-iiUTeecg.js";import"./IllustratedMessage-iOV8hNFv.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Cs69J_Tc.js";import"./Input-AKSpFtND.js";import"./ResponsivePopoverCommon.css-C3wjaSr6.js";import"./ValueStateMessage.css-CpYwQkVy.js";import"./Suggestions.css-BxYCrzla.js";import"./ListBoxItemGroupTemplate-BK_1e7Jd.js";import"./ComboBoxItemGroup-jFQBitjk.js";import"./ListItemBaseTemplate-DUd-IfCf.js";import"./Token-ClXNXVqt.js";import"./ScrollEnablement-BgQUKBhv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-COM3Y617.js";import"./ToggleButton-FTZXlhur.js";import"./multiselect-all-CFU46Wod.js";import"./SuggestionItem-BI3gNhRI.js";import"./index-BgUx6RnF.js";import"./Option-kRDMIGPk.js";import"./index-4d8vZKF5.js";import"./SegmentedButton-MdHLGjvd.js";import"./index-ZrD11qG8.js";import"./Select-CXP-jLKH.js";import"./InvisibleMessage-B3PoH58P.js";import"./index-Bdb_o1Y4.js";import"./index-DCEtf4WG.js";import"./index-ZvwKpapI.js";import"./index-BWmFDyId.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DgexCQUt.js";import"./group-2-Co1xUlm9.js";import"./sort-descending-B9xjh0QK.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVUjzMgE.js";import"./utils-DzwVL_EM.js";import"./index-CzmVoBXe.js";import"./index-h2yx8uA3.js";import"./index-BCC9jZwA.js";import"./navigation-down-arrow-voDMe6Oa.js";import"./navigation-right-arrow-ByPMDe9M.js";import"./navigation-right-arrow-BtIFfnR5.js";import"./useCurrentTheme-vsaSH-Ug.js";import"./index-CIdADm8S.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dq-8_1ru.js";import"./paper-plane-BZoVtF7s.js";import"./index-C0ZNn2ww.js";import"./less-DZRRGc_Y.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
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
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
