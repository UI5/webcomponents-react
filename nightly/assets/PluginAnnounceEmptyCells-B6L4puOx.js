import{j as t}from"./iframe-DYmejECO.js";import{useMDXComponents as n}from"./index-9gDZjqLB.js";import{I as i,F as m}from"./CommandsAndQueries-BUFKZ5oS.js";import{M as p,C as s}from"./blocks-WpvHKkxz.js";import"./Tag-BqbQuhLk.js";import"./index-B5pjKVih.js";import"./copy-Za-_Z-Tq.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dqndnsq3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtSXtxpp.js";import"./index-Cq6cdgcL.js";import"./index-D_-3_YTN.js";import"./Link-FVvXEWOc.js";import"./index-CQOsAJId.js";import"./index-B1aVKp_Z.js";import"./index-CHQEcSbZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6DutTHa.js";import"./addCustomCSSWithScoping-DW_smYaa.js";import"./index-E0O-rqDf.js";import"./information-DDszVPcm.js";import"./sys-enter-2-DGk9QDRk.js";import"./alert-B5ckm3Ge.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DBUOFfUF.js";import"./delete-CTZTKHWL.js";import"./settings-WjdBxW6C.js";import"./NoData-BJ0nX3_H.js";import"./IllustratedMessage-7-uYQkyZ.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CI6WTuUW.js";import"./index-B-CyWBp1.js";import"./index-CS6sH5Sy.js";import"./slim-arrow-down-BbgvtXR1.js";import"./Input-D3eSQpEN.js";import"./ResponsivePopoverCommon.css-CmjvYdZX.js";import"./ValueStateMessage.css-CUuHv4id.js";import"./Suggestions.css-CuvdJ8X6.js";import"./ListBoxItemGroupTemplate-4YjvPL6O.js";import"./ComboBoxItemGroup-CFEGhyle.js";import"./ListItemBaseTemplate-Fr0aNkev.js";import"./Token-B3KLY-_e.js";import"./ScrollEnablement-Dr9XQj7e.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-_Mx3JoTx.js";import"./ToggleButton-CXlL9fKv.js";import"./SuggestionItem-C7BSUng4.js";import"./index-B76y_UKV.js";import"./Option-Bea2riBZ.js";import"./index-DlTkKaiO.js";import"./SegmentedButton-CV7f3Z1-.js";import"./index-BZOk0oAR.js";import"./Select-B_CaPd95.js";import"./InvisibleMessage-goreZJqY.js";import"./slim-arrow-down-Ce0kb6v-.js";import"./index-DKdmNSnc.js";import"./index-D5TJ92nf.js";import"./index-cYgTFA9L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D7jAZBjp.js";import"./group-2-COqIM_cV.js";import"./sort-descending-CoPut5E-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUdvcpQW.js";import"./utils-g0fn1CkI.js";import"./index-CRr32CDK.js";import"./index-CDV5VZBY.js";import"./index-H9t-i14p.js";import"./navigation-down-arrow-C1ddotBT.js";import"./navigation-right-arrow-Ca-BUU1v.js";import"./navigation-right-arrow-D7Z03VwH.js";import"./useCurrentTheme-BGTNx-Lj.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DI1P8mhv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BWt4ksXr.js";import"./paper-plane-DMt5qfQg.js";import"./index-B8Foa8Pz.js";import"./less-D_PUL5W3.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
