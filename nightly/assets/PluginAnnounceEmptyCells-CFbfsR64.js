import{j as t}from"./iframe-DNMTfzpK.js";import{useMDXComponents as n}from"./index-BN2xRXE4.js";import{I as i,F as m}from"./CommandsAndQueries-p_oo0qut.js";import{M as p,C as s}from"./blocks-D7TGtWIi.js";import"./Tag-DMQsT8Q8.js";import"./index-T3fFkT4y.js";import"./copy-mCRNeeck.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-8GxD6bLE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-c_AmigIx.js";import"./index-B8yoe6T_.js";import"./index-3Dfb5Jbe.js";import"./Link-QK9m66TA.js";import"./index-CijDEz0A.js";import"./index-BmIqw6uo.js";import"./index-BXvVq-3Z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdXxvAEF.js";import"./addCustomCSSWithScoping-DGsOsNkK.js";import"./index-BVaTbyf5.js";import"./information-CfBdub9z.js";import"./sys-enter-2-D1yMqvha.js";import"./alert-ovSFIgO_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DVxNklXG.js";import"./delete-Bs_1Tn7y.js";import"./settings-yHuNvmRk.js";import"./NoData-CJ4fcNDV.js";import"./IllustratedMessage-DfVKbqiE.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DpgZmO3w.js";import"./index-BmyEQvU7.js";import"./index-C2f-DWtU.js";import"./slim-arrow-down-BeqBYoq7.js";import"./Input-D7FScK-r.js";import"./ResponsivePopoverCommon.css-BpovPhMy.js";import"./ValueStateMessage.css-jWH0iavP.js";import"./Suggestions.css-DVP1hS77.js";import"./ListBoxItemGroupTemplate-Ba2zWDfe.js";import"./ComboBoxItemGroup-BN1s9s3b.js";import"./ListItemBaseTemplate-mKi-cdJU.js";import"./Token-DJAtCUlu.js";import"./ScrollEnablement-eCP2Kegn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBFY19dC.js";import"./ToggleButton-DJDuyAgn.js";import"./SuggestionItem-Bgn_dqvA.js";import"./index-BYqQmGne.js";import"./Option-BWgO6mlW.js";import"./index-BwS7j3IJ.js";import"./SegmentedButton-tiebVN4C.js";import"./index-BcZz7Rtp.js";import"./Select-nYImCzGD.js";import"./InvisibleMessage-BAVpRLuQ.js";import"./slim-arrow-down-BINXR2kD.js";import"./index-DZaQ5P9X.js";import"./index-HBZBsTho.js";import"./index-B_xleZYk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCGyTjP8.js";import"./group-2-Ds3ldsuu.js";import"./sort-descending-B9wZIYmD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DrCxDrAT.js";import"./utils-PFbfoLst.js";import"./index-Cg0CgaE2.js";import"./index-Du0vGDLV.js";import"./index-B0pESpyZ.js";import"./navigation-down-arrow-B9yi9Vw4.js";import"./navigation-right-arrow-BuY4QW3G.js";import"./navigation-right-arrow-Do9NQWHs.js";import"./useCurrentTheme-CRXvomUG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ChmvSx0O.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CveHlrIa.js";import"./paper-plane-BV9fKxBA.js";import"./index-CeaY2sRv.js";import"./less-DalUIm1-.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
