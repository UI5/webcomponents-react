import{j as t}from"./iframe-LwV4ThFO.js";import{useMDXComponents as n}from"./index-q5DcgXr2.js";import{I as i,F as m}from"./CommandsAndQueries-DPfuXfqc.js";import{M as p,C as s}from"./blocks-Dip3aHJy.js";import"./Tag-By0Vj2CL.js";import"./index-DWh2FbsL.js";import"./copy-DMZz3mt-.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-OE4IQayz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dg0Ul4LB.js";import"./index-DO4DjFA6.js";import"./index-SgnU4gKB.js";import"./Link-BYRJUWj7.js";import"./index-D33G3UXY.js";import"./index-wHmvTXkA.js";import"./index-BYce_ve5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4bciS0g0.js";import"./addCustomCSSWithScoping-d025F1t1.js";import"./index-CtGk4fFi.js";import"./information-CKI5p7Rd.js";import"./sys-enter-2-DqN3aKF8.js";import"./alert-D7vNrBhD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-UAK6cQzZ.js";import"./delete-CauzNY6s.js";import"./settings-Cbp-krdL.js";import"./NoData-CGOdrUN8.js";import"./IllustratedMessage-CFJfKJEr.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BsCD8QkQ.js";import"./index-CoSHPRLg.js";import"./index-CDMB05HS.js";import"./slim-arrow-down-WoqU4jL-.js";import"./Input-DOTZG0nG.js";import"./ResponsivePopoverCommon.css-tY7w10PH.js";import"./ValueStateMessage.css-DJKlg9Od.js";import"./Suggestions.css-DRakvl3F.js";import"./ListBoxItemGroupTemplate-milAspIm.js";import"./ComboBoxItemGroup-CrXR4k4L.js";import"./ListItemBaseTemplate-DuvtnBwJ.js";import"./Token-y8RIX3ya.js";import"./ScrollEnablement-D9Zcstlh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BtDMm1v7.js";import"./ToggleButton-RIWtYPbc.js";import"./SuggestionItem-DyYlmNjM.js";import"./index-DIRV_TxT.js";import"./Option-Dkc0uo7W.js";import"./index-DGmo98C5.js";import"./SegmentedButton-CZr2foPu.js";import"./index-C2nkR5h8.js";import"./Select-CBP2iwxK.js";import"./InvisibleMessage-BYSN34jq.js";import"./slim-arrow-down-lmv38PwW.js";import"./index-Bft62lZ1.js";import"./index-DoFC_5Xy.js";import"./index-DHEWQlqP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-_Rj7gOsX.js";import"./group-2-C4kBukdN.js";import"./sort-descending-DIujgPym.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BaXB6j-X.js";import"./utils-DK9ffFkD.js";import"./index-R07kLpjv.js";import"./index-CxDk8r6E.js";import"./index-Bi58trhw.js";import"./navigation-down-arrow-BMjcgPuL.js";import"./navigation-right-arrow-troHvNPU.js";import"./navigation-right-arrow-csDoLCuz.js";import"./useCurrentTheme-baH4C2qI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-gurjTWBv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BC_dUgj5.js";import"./paper-plane-B-mGCJfh.js";import"./index-z3X-Jjgi.js";import"./less-D7iDBJTJ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
