import{j as t}from"./iframe-CNlfMRh7.js";import{useMDXComponents as n}from"./index-HXyduBEt.js";import{I as i,F as m}from"./CommandsAndQueries-DPIrOVa1.js";import{M as p,C as s}from"./blocks-Dntxnfj7.js";import"./Tag-CSkrKRNp.js";import"./index-CE5EvvTL.js";import"./copy-NJiLz1Ae.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Cb0RDD3M.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bfxe_3pA.js";import"./index-BsNAKev7.js";import"./index-HOJNtIkV.js";import"./Link-DJApgqFJ.js";import"./index-CMp48S8l.js";import"./index-BZFP7GSJ.js";import"./index-BUkOiAQJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-UJ6G4FQA.js";import"./addCustomCSSWithScoping-0QMDzhQB.js";import"./index-B1BCaeBo.js";import"./information-A5dyTfTj.js";import"./sys-enter-2-Dq0W94t5.js";import"./alert-B1A4HH0Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DJf8n85N.js";import"./delete-DEXvtF94.js";import"./settings-DPUgaiHg.js";import"./NoData-DEwR0Oiz.js";import"./IllustratedMessage-D9SSX3IF.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CmruapN3.js";import"./index-BYE_WijM.js";import"./index-BLLAjhdX.js";import"./slim-arrow-down-CsKC49yD.js";import"./Input-avR_XQYF.js";import"./ResponsivePopoverCommon.css-BShgZ2fu.js";import"./ValueStateMessage.css-DvxKbQOQ.js";import"./Suggestions.css-Dxb_YfCJ.js";import"./ListBoxItemGroupTemplate-mNL0cHkG.js";import"./ComboBoxItemGroup-B3anKuMZ.js";import"./ListItemBaseTemplate-Ckm2u7Ex.js";import"./Token-DZVzBKnY.js";import"./ScrollEnablement-DGzJpPYl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CN81KWn3.js";import"./ToggleButton-yVTDYlWj.js";import"./SuggestionItem-CNQ8mpah.js";import"./index-B-Zm5ade.js";import"./Option-Bv5WbYDv.js";import"./index-hlrtbQ32.js";import"./SegmentedButton-B9G2GqCT.js";import"./index-CuTyZ9rK.js";import"./Select-D1g_uhaP.js";import"./InvisibleMessage-vJ02izGr.js";import"./slim-arrow-down-Bb-cZ27j.js";import"./index-gFi-6H_0.js";import"./index-CNmac44d.js";import"./index-Di_lVIZE.js";import"./index-CtZU6wpy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRjKMM8O.js";import"./group-2-Cv7m-_qi.js";import"./sort-descending-CKmm8A2d.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMq0_oht.js";import"./utils-BOcBU06y.js";import"./index-B6Hnq5R3.js";import"./index-B7qpoGz1.js";import"./index-DlFpWCyT.js";import"./navigation-down-arrow-BaU-bz7x.js";import"./navigation-right-arrow-lO-0Jw_9.js";import"./navigation-right-arrow-BLxb5j9t.js";import"./useCurrentTheme-DOPeTHqP.js";import"./index-CRAYMyk4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-9-bly-f7.js";import"./paper-plane--k09Sqfm.js";import"./index-FW_T7qDu.js";import"./less-BsuMuYn7.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
