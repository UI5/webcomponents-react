import{j as t}from"./iframe-mz-DPMfO.js";import{useMDXComponents as n}from"./index-BQe-Y6f4.js";import{I as i,F as m}from"./CommandsAndQueries-CNdgb_xD.js";import{M as p,C as s}from"./blocks-CqHnwxUT.js";import"./Tag-mNyMFg7D.js";import"./index-wUrz4SBY.js";import"./copy-40awRikg.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B0z8hj4E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Da-CbngW.js";import"./index-D9y5V_y0.js";import"./index-BPrj4A7u.js";import"./Link-BKhYH1SV.js";import"./index-3wg9O5k7.js";import"./index-B9dZeu2z.js";import"./index-VFO9WUy1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-idDvu4gP.js";import"./addCustomCSSWithScoping-DOUHBih7.js";import"./index--R_eUibk.js";import"./information-DMiSc-jE.js";import"./sys-enter-2-Ll_1TI3l.js";import"./alert-CKymAgR2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cm2BS3GA.js";import"./delete-G5EHOAnz.js";import"./settings-CsivxwAE.js";import"./NoData-BxE6Tv_8.js";import"./IllustratedMessage-DSE8qKy3.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DxOlC27G.js";import"./index-DNTjClb-.js";import"./index-HIa2ArXa.js";import"./slim-arrow-down-D5GhCIze.js";import"./Input-DKhFBeXu.js";import"./ResponsivePopoverCommon.css-Dw0qvCvb.js";import"./ValueStateMessage.css-aIP2Mnhs.js";import"./Suggestions.css-fWWNrwHO.js";import"./ListBoxItemGroupTemplate-nanEm9hw.js";import"./ComboBoxItemGroup-Dvkzxw9l.js";import"./ListItemBaseTemplate-UDeydQID.js";import"./Token-zxfxV2UY.js";import"./ScrollEnablement-2SSah3lR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D8bDYcBG.js";import"./ToggleButton-BX6-NLYV.js";import"./SuggestionItem-D4XueI-M.js";import"./index-BT-CCgox.js";import"./Option-C3T5_tXM.js";import"./index-BfUyajly.js";import"./SegmentedButton-DllV5zlW.js";import"./index-DDRv_OXW.js";import"./Select-BdUDnM2I.js";import"./InvisibleMessage-BIbkbdCE.js";import"./slim-arrow-down-Bk0xFqDz.js";import"./index-DKMucjjn.js";import"./index-D6PoFlyg.js";import"./index-CNllsCPa.js";import"./index-CDMzJTvn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DA7T2Rl3.js";import"./group-2-Bwsdx7qx.js";import"./sort-descending-Btj6h9pS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5M6Mwa8.js";import"./utils-DCG9zNvg.js";import"./index-DIJKpGCJ.js";import"./index-DWu6poIj.js";import"./index-DiIoiFSd.js";import"./navigation-down-arrow-CBdPnBQr.js";import"./navigation-right-arrow-DIpgwEVw.js";import"./navigation-right-arrow-C1ncpOSj.js";import"./useCurrentTheme-BtI3wPUE.js";import"./index-Bi5Z9u5V.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CcIdQY8X.js";import"./paper-plane-DQSNVPXE.js";import"./index-Bv3BJuLo.js";import"./less-DD1AM41T.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
