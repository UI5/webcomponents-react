import{j as t}from"./iframe-Dr24b1_2.js";import{u as i,M as n,C as m}from"./blocks-DOkdIKLK.js";import{I as p}from"./CommandsAndQueries-D2RSxAeU.js";import"./Tag-BIxdINB7.js";import"./index-CL-oiXYR.js";import"./copy-D1SgAW06.js";import{F as s}from"./Footer-B2LKGocf.js";import"./PageNotFound-t4KH-Yk6.js";import{PluginAnnounceEmptyCells as a}from"./AnalyticalTableHooks.stories-CIs8KZqZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CG4ImuUx.js";import"./index-_maGeclj.js";import"./index-aTzn3I1m.js";import"./index-B_PGO6aF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dh4aGlp7.js";import"./addCustomCSSWithScoping-BCzlWLsZ.js";import"./index-VF4msgJe.js";import"./index-CjU6u75C.js";import"./index-DrqpZzSV.js";import"./information-C20uFQS0.js";import"./sys-enter-2-CQd_0MF7.js";import"./alert-B9PmGrag.js";import"./index-DcUuq1aq.js";import"./Illustrations-Dt9P8lxH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSeDtOFY.js";import"./delete-CTuwvNwN.js";import"./settings-D2zSFUQS.js";import"./NoData-BNUq2LAg.js";import"./NoFilterResults-C3EjDsD0.js";import"./index-DMGfqErw.js";import"./IllustratedMessage-DWcP1w35.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BBfVJLgm.js";import"./Input-irtd9wft.js";import"./ResponsivePopoverCommon.css-YJ26BxS_.js";import"./ValueStateMessage.css-BS498yF4.js";import"./Suggestions.css-DByIneIP.js";import"./ListBoxItemGroupTemplate-CrWVeqtk.js";import"./ComboBoxItemGroup-DfdSfqaL.js";import"./ListItemBaseTemplate-DeSJkaWA.js";import"./Token-DUD3s9-0.js";import"./ScrollEnablement-B1S99Wzm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4U2FtO3.js";import"./ToggleButton-BV0O-OUE.js";import"./multiselect-all-BFWwGBPs.js";import"./SuggestionItem-CjMIYdHg.js";import"./index-Be2SnvPr.js";import"./Option-BNc07i1m.js";import"./index-Dhr0uby_.js";import"./SegmentedButton-DIgm-PGW.js";import"./index-AylfCAiE.js";import"./Select-DUnUQvU_.js";import"./InvisibleMessage-gZ-HYpyf.js";import"./index-CbTWmPo9.js";import"./index-BAyOZzch.js";import"./index-DCFLXB0o.js";import"./index-CJOj_130.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CRhxLA-E.js";import"./group-2-eYTtZ8kH.js";import"./sort-descending-BQ3YJIaz.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BY-GjMmR.js";import"./utils-BXYFGvnm.js";import"./index-BiTc-6U3.js";import"./index-Bm6fGbEK.js";import"./index-CvsFmqac.js";import"./navigation-down-arrow-D1eVdFYB.js";import"./navigation-right-arrow-C_zepO0v.js";import"./navigation-right-arrow-BA43J9Vq.js";import"./useCurrentTheme-DxjT-4Tb.js";import"./index-DCaFjUpe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BcSpX-QV.js";import"./paper-plane-BEsK-8Qt.js";import"./index-BjDM9IYP.js";import"./less-DrUcv7lt.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(p,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(m,{sourceState:"none",of:a}),`
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
`,t.jsx(s,{})]})}function _t(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{_t as default};
