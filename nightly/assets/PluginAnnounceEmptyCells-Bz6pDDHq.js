import{j as t}from"./iframe-geaynzT-.js";import{useMDXComponents as i}from"./index-Dy0P-MTk.js";import{I as n}from"./CommandsAndQueries-B6i0zlBz.js";import{M as m,C as p}from"./blocks-DvwiWHqk.js";import"./Tag-B3QRrnQ_.js";import"./index-D-nFJC4E.js";import"./copy-ww3KL2rX.js";import{F as s}from"./Footer-BsbiOiC7.js";import"./PageNotFound-BfSR_Vk2.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DjpnOgbB.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-nEWS4oVx.js";import"./index-D5uUZfuG.js";import"./index-CG-HWMDU.js";import"./index-CKM0CrDr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HivzyS7T.js";import"./addCustomCSSWithScoping-xbUSRjKw.js";import"./index-Bp_EOu-Q.js";import"./index-CTwiS7Jw.js";import"./index-sZJqmiwE.js";import"./information-BPLaT9Ap.js";import"./sys-enter-2-BM-hyHpl.js";import"./alert-BbpVY6El.js";import"./index-_qPK30Mb.js";import"./Illustrations-Da51eylt.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CvV10EhM.js";import"./delete-wfRZqLc2.js";import"./settings-CvCMUxfs.js";import"./NoData-r4RJuD6g.js";import"./NoFilterResults-Brt2dGQf.js";import"./index-C3GLDV3Z.js";import"./IllustratedMessage-DTZGdweY.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-ClFOA2Te.js";import"./Input-D718yOxL.js";import"./ResponsivePopoverCommon.css-BNVSGncI.js";import"./ValueStateMessage.css-BCq31M5q.js";import"./Suggestions.css-B2NS7aEt.js";import"./ListBoxItemGroupTemplate-CaN9gZpp.js";import"./ComboBoxItemGroup-Cc09CfZv.js";import"./ListItemBaseTemplate-B-UBUhMu.js";import"./Token-B-DIQD6O.js";import"./ScrollEnablement-DPeWyNUe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrjdizTB.js";import"./ToggleButton-CXmo7_Af.js";import"./multiselect-all-BOi-ndht.js";import"./SuggestionItem-C_3zoX6X.js";import"./index-C8LuF1Bv.js";import"./Option-BZsuWY7l.js";import"./index-DPfU6hxd.js";import"./SegmentedButton-CiK9dfWD.js";import"./index-Dwqy5Aze.js";import"./Select--P873eyr.js";import"./InvisibleMessage-CbKTPW6d.js";import"./index-BUI55KcM.js";import"./index-DlPKLGff.js";import"./index-CV_2N-M1.js";import"./index-vaOvjXNl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-be4ddmTM.js";import"./group-2-DID5u7R4.js";import"./sort-descending-B504Ry9y.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3_V7TUA.js";import"./utils-Dzhppj39.js";import"./index-BYmoNn4O.js";import"./index-BY9yrlLW.js";import"./index-BW0Q-ohg.js";import"./navigation-down-arrow-gLMgLysX.js";import"./navigation-right-arrow-hDy11WuW.js";import"./navigation-right-arrow-DK5EYtwV.js";import"./useCurrentTheme-CdjoVC5_.js";import"./index-DrHoGjWG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D19__XCT.js";import"./paper-plane-CFu3e08q.js";import"./index-CfLv6iWt.js";import"./less-DLnKLgv5.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
