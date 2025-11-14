import{j as t}from"./iframe-CDMw3QW7.js";import{useMDXComponents as n}from"./index-B1OHiQPx.js";import{I as i,F as m}from"./CommandsAndQueries-DKYp_Jx5.js";import{M as p,C as s}from"./blocks-CUd96uRM.js";import"./Tag-CRCkHgPM.js";import"./index-BFHtg5w_.js";import"./copy-4Dlt6M0w.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CzQ3gixW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjzhAhn4.js";import"./index-QTO9fIyh.js";import"./index-y4pjeQFW.js";import"./Link-fH9wonJ-.js";import"./index-CFg6tGep.js";import"./index-zPaFBXP5.js";import"./index-NVXyFLUS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzgD7Za_.js";import"./addCustomCSSWithScoping-DWGH2XNZ.js";import"./index-CEKogKIQ.js";import"./information-DcnFOD7I.js";import"./sys-enter-2-Bq9738ZR.js";import"./alert-DgZ_z3Yp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-_qD1WAd3.js";import"./delete-DNEaNq2f.js";import"./settings-BzU3TjJh.js";import"./NoData-DO1SL0Xr.js";import"./IllustratedMessage-BJlEMque.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-D7b8dZpx.js";import"./index-CynnG9Ci.js";import"./index-BYJZ9-3j.js";import"./slim-arrow-down-BVsyizBr.js";import"./Input-De2rvuDr.js";import"./ResponsivePopoverCommon.css-D0k6m-Zp.js";import"./ValueStateMessage.css-Bv8RNI0z.js";import"./Suggestions.css-DMqc0-b9.js";import"./ListBoxItemGroupTemplate-8qDrl8tU.js";import"./ComboBoxItemGroup-D_qJnzJt.js";import"./ListItemBaseTemplate-BYc7j03k.js";import"./Token-CNf8IzFD.js";import"./ScrollEnablement-CTahNy0C.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C-68iD6i.js";import"./ToggleButton-mgZ_PBA1.js";import"./SuggestionItem-BerFBPyF.js";import"./index-B39rHfMI.js";import"./Option-DvZvNvkk.js";import"./index-Du2TWHEP.js";import"./SegmentedButton-Bc6T5ns7.js";import"./index-D7WlgBg9.js";import"./Select-DYlZ5_OK.js";import"./InvisibleMessage-B9339qwC.js";import"./slim-arrow-down-BSiLed2R.js";import"./index-QjSsixDk.js";import"./index-2tw6FyW6.js";import"./index-DU7qbp-g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CbmUmzER.js";import"./group-2-vVU2oJMN.js";import"./sort-descending-BzMUOuiJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-jYJsNqp7.js";import"./utils-ebGiQ-Xy.js";import"./index-D5bKrwpZ.js";import"./index-DTK7HHyN.js";import"./index-BEQ_zuJ6.js";import"./navigation-down-arrow-ZN-BcGN6.js";import"./navigation-right-arrow-DJvSCvps.js";import"./navigation-right-arrow-CnrgcZ8b.js";import"./useCurrentTheme-C7nv2rCg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrIDs3N6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dg3vz_6v.js";import"./paper-plane-SFR-N42C.js";import"./index-wyxekrjG.js";import"./less-CfFvE_i7.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
