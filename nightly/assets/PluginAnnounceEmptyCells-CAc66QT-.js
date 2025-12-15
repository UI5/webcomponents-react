import{j as t}from"./iframe-B1ai2N1H.js";import{useMDXComponents as n}from"./index-QfN2DAp7.js";import{I as i,F as m}from"./CommandsAndQueries-DatNYL2t.js";import{M as p,C as s}from"./blocks-B9fqlxEZ.js";import"./Tag-EPgIaOhk.js";import"./index-BtwVlylG.js";import"./copy-BJY5YA9D.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BAh5Qb7e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DIMi93Lv.js";import"./index-BqK1QrYY.js";import"./index-B8JztijY.js";import"./Link-DxXALuG4.js";import"./index-BD5BVNKc.js";import"./index-Dq21p-7K.js";import"./index-BL80uiBy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3b7w9-j.js";import"./addCustomCSSWithScoping-BigzftYf.js";import"./index-BZxParGj.js";import"./information-qjJpsO9c.js";import"./sys-enter-2-DLuIUMMQ.js";import"./alert-DxSQeXz_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Xy6kKlpD.js";import"./delete-CKMfo4Xk.js";import"./settings-CsC-4hiH.js";import"./NoData-BVmLwkSE.js";import"./IllustratedMessage-Nr6Didoc.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-4ep3HbjN.js";import"./index-DCqGCf08.js";import"./index-TntUiIag.js";import"./slim-arrow-down-DYHZJ5LG.js";import"./Input-CCHdc6OX.js";import"./ResponsivePopoverCommon.css-_wb5Prd4.js";import"./ValueStateMessage.css-QQOrZXwg.js";import"./Suggestions.css-ya0SvWRa.js";import"./ListBoxItemGroupTemplate-CC17eT-H.js";import"./ComboBoxItemGroup-BvdFX-vq.js";import"./ListItemBaseTemplate-GHiTWt4_.js";import"./Token-DWQMxVAt.js";import"./ScrollEnablement-CYJKPk5p.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1Y3dmb5L.js";import"./ToggleButton-C38IUONv.js";import"./SuggestionItem-BbC6S69Q.js";import"./index-B2SJJBw5.js";import"./Option-CMzgQwF2.js";import"./index-DOw9MRWj.js";import"./SegmentedButton-DzQuajPs.js";import"./index-DxT3UJLK.js";import"./Select-CLe5Ufw3.js";import"./InvisibleMessage-B9fg8eZE.js";import"./slim-arrow-down-xtIJDA6K.js";import"./index-BKQwlKuo.js";import"./index-AEFVkwvL.js";import"./index-CIaszeCC.js";import"./index-CEbRZ6tf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CO5NKowA.js";import"./group-2-DPXkxppB.js";import"./sort-descending-r_07bhB8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bs-IgX_t.js";import"./utils-COwwDed4.js";import"./index-sS2AOrHh.js";import"./index-D59qyDlq.js";import"./index-CyY2pIYt.js";import"./navigation-down-arrow-BVW_sj_7.js";import"./navigation-right-arrow-C1avA-LC.js";import"./navigation-right-arrow-H_C30T42.js";import"./useCurrentTheme-Ckxn_kwO.js";import"./index-DJ2gVxdV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlOSzz73.js";import"./paper-plane-C_dmmjbE.js";import"./index-C6bXNW4U.js";import"./less-DT3uITo0.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
