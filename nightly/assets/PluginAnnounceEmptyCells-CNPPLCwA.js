import{j as t}from"./iframe-B-JB9Mrg.js";import{useMDXComponents as i}from"./index-C6ab_87c.js";import{I as n}from"./CommandsAndQueries-BMpPCtQI.js";import{M as m,C as p}from"./blocks-gUSy1z8f.js";import"./Tag-rJaILc04.js";import"./index-BUD8Dloj.js";import"./copy-B23uPwnI.js";import{F as s}from"./Footer-BoXWBFNs.js";import"./PageNotFound-DwjQIJMb.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DaNK7-Ll.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CUeYoLvN.js";import"./index-UGbMf_4Y.js";import"./index-4LdkJtv9.js";import"./index-BmSIhnsV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_QxycfjS.js";import"./addCustomCSSWithScoping-DBFLD3Dt.js";import"./index-BNovRndr.js";import"./index-CxXKp92D.js";import"./index-C_JAtQ1_.js";import"./information-Bvi5gDZ4.js";import"./sys-enter-2-CDMo7mQ9.js";import"./alert-B5324jWv.js";import"./index-COHIvdEC.js";import"./Illustrations-BGg5U59s.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Be6NOHlY.js";import"./delete-3GTPVXil.js";import"./settings-DtUWdw7m.js";import"./NoData-CqmmXc4T.js";import"./NoFilterResults-BnmI-198.js";import"./index-CseK5512.js";import"./IllustratedMessage-BE_dLy6F.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-XeWxte10.js";import"./Input-DVI6zxdj.js";import"./ResponsivePopoverCommon.css-BukAVbLV.js";import"./ValueStateMessage.css-BGkMAg00.js";import"./Suggestions.css-BOQhUGDm.js";import"./ListBoxItemGroupTemplate-B5f3QW-p.js";import"./ComboBoxItemGroup-BED3ASNR.js";import"./ListItemBaseTemplate-DLFTdIKJ.js";import"./Token-BrjbTrZO.js";import"./ScrollEnablement-5XSvrzux.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Mn8j4CUx.js";import"./ToggleButton--NP7uZ1N.js";import"./multiselect-all-BkqJOriD.js";import"./SuggestionItem-BB1hjhsG.js";import"./index-CYoovnFi.js";import"./Option-hbNFYygs.js";import"./index-CIOInWay.js";import"./SegmentedButton-BUxCVNIT.js";import"./index-DQsL7B1E.js";import"./Select-CbAKq5TP.js";import"./InvisibleMessage-DXutdx3u.js";import"./index-DSKzdah0.js";import"./index-BwU-fEzR.js";import"./index-BtRXlCJP.js";import"./index-Cm1_U4l_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClesWLLH.js";import"./group-2-ClxNwCtd.js";import"./sort-descending-ig1DIecm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DrTPER5S.js";import"./utils-C0kltqQX.js";import"./index-DGnoGB6v.js";import"./index-BNBXaPeN.js";import"./index-BL0SVaRR.js";import"./navigation-down-arrow-C6vpMOiA.js";import"./navigation-right-arrow-C07xQ28g.js";import"./navigation-right-arrow-BIYn3DeP.js";import"./useCurrentTheme-CPkepCy-.js";import"./index-BvAhuiTe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ClKF0kCB.js";import"./paper-plane-DQ_mbMQX.js";import"./index-BVwW0K7f.js";import"./less-BfR-USy3.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
