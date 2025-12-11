import{j as t}from"./iframe-DM9V3iUD.js";import{useMDXComponents as n}from"./index-BQ6e0XMP.js";import{I as i,F as m}from"./CommandsAndQueries-DLgIXMfv.js";import{M as p,C as s}from"./blocks-DPjpReUC.js";import"./Tag-CDZyEpMs.js";import"./index-BrIfMidb.js";import"./copy-QNTFDBhh.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dwu_Cdgk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_fRRkTw.js";import"./index-CG9Hqh1R.js";import"./index-3ho0Fy_x.js";import"./Link-CqfS--3L.js";import"./index-D-UVDN6M.js";import"./index-DQbG0AXp.js";import"./index-Crs5q-DX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CWqaDePq.js";import"./addCustomCSSWithScoping-UQbkgHWD.js";import"./index-HLIjrNCW.js";import"./information-CYZk7_Tc.js";import"./sys-enter-2-CIB1w1Kt.js";import"./alert-bTHWJErv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-qcMscmV6.js";import"./delete-CXgeirW2.js";import"./settings-Do73Em_3.js";import"./NoData-CHhcck3e.js";import"./IllustratedMessage-BUUajOA1.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Bj8Z5qjJ.js";import"./index-D1i2VFSP.js";import"./index-B__UNfpz.js";import"./slim-arrow-down-BPvPVi4x.js";import"./Input-Cf96M2D8.js";import"./ResponsivePopoverCommon.css-Ct9-fwKq.js";import"./ValueStateMessage.css-BZpk9Qij.js";import"./Suggestions.css-CJjXKwO3.js";import"./ListBoxItemGroupTemplate-avlDP7mZ.js";import"./ComboBoxItemGroup-Dvk8bGjT.js";import"./ListItemBaseTemplate-D0OkPuPM.js";import"./Token-DuTpzyoF.js";import"./ScrollEnablement-CIbJNOf2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DoSQq3Vg.js";import"./ToggleButton-CHbSZwvK.js";import"./SuggestionItem-C9Z5Raq-.js";import"./index-dQrxQK2M.js";import"./Option-C8TUPVJx.js";import"./index-DeLMEH5a.js";import"./SegmentedButton-CFuqDO7A.js";import"./index-lWxOWiyk.js";import"./Select-CVIIIwsb.js";import"./InvisibleMessage-CuXKyopF.js";import"./slim-arrow-down-Y2ooLraA.js";import"./index-CyGN2YVR.js";import"./index-BqNainkP.js";import"./index-DU8Mj3lG.js";import"./index-D-Nv2l8Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CY3BHzDB.js";import"./group-2-DSPzZeCA.js";import"./sort-descending-CKfKVtmi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BURWi97k.js";import"./utils-YdOQYwv0.js";import"./index-DHSn19BG.js";import"./index-BpMJYg0Z.js";import"./index-BsNTCuPG.js";import"./navigation-down-arrow-i_-2Fr6I.js";import"./navigation-right-arrow-DSvn3PeJ.js";import"./navigation-right-arrow-DiiMP9RE.js";import"./useCurrentTheme-B5DxFcSp.js";import"./index-B8iQmJZm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CElufDLj.js";import"./paper-plane-DbbOBc4o.js";import"./index-DcPBFTrG.js";import"./less-DI996Bpt.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
