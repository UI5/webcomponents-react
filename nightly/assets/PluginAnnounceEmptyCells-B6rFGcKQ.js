import{j as t}from"./iframe-BgKk_cUP.js";import{useMDXComponents as n}from"./index-DBhkOYZa.js";import{I as i,F as m}from"./CommandsAndQueries-DJU-Boml.js";import{M as p,C as s}from"./blocks-Cov5-UrV.js";import"./Tag-14MrIsbi.js";import"./index-DoylA-Ui.js";import"./copy-DsJBCyL-.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-V4gZ8sle.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMckAL-E.js";import"./index-vrGX3w6P.js";import"./index-z-eYGt9k.js";import"./Link-CwQGN6kV.js";import"./index-DJcJ5x0R.js";import"./index-DtnoyOys.js";import"./index-DMwqR4Ak.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3WrIRKs.js";import"./addCustomCSSWithScoping-CEnWQwWy.js";import"./index-C-jp63Tn.js";import"./information-BIRyoqcd.js";import"./sys-enter-2--x49A3Er.js";import"./alert-ClVMPYjY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DuxFNycy.js";import"./delete-BP-q6TjY.js";import"./settings-CeZ1opbS.js";import"./NoData-DLJjXucd.js";import"./IllustratedMessage-DdywEZQM.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Bi6pL2a9.js";import"./index-DojJqyn3.js";import"./index-BKqTR2vl.js";import"./slim-arrow-down-Dj1qt3me.js";import"./Input-iPtOW5TT.js";import"./ResponsivePopoverCommon.css-DfgdvEyA.js";import"./ValueStateMessage.css-DV3WCU4W.js";import"./Suggestions.css-BI-9sbpu.js";import"./ListBoxItemGroupTemplate-BHdhNjf-.js";import"./ComboBoxItemGroup-DH85X82N.js";import"./ListItemBaseTemplate-D1hxivPJ.js";import"./Token-DcRokTWN.js";import"./ScrollEnablement-DdsHIuJL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CnthNkAX.js";import"./ToggleButton-UcqKBq2y.js";import"./SuggestionItem-C26y-fs0.js";import"./index-hzVrXnb0.js";import"./Option-DJMHyqaM.js";import"./index-Dhq0PQAW.js";import"./SegmentedButton-DdF3sP2l.js";import"./index-BbzooXyV.js";import"./Select-CsJgWia_.js";import"./InvisibleMessage-ped4udrK.js";import"./slim-arrow-down-DklNCilI.js";import"./index-DwVvMTsB.js";import"./index-RMLfsLiL.js";import"./index-bEFqPgvm.js";import"./index-DMnT_E-9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CW2uVyW2.js";import"./group-2-AoEknzVg.js";import"./sort-descending-CCp7iCJm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DRCX3BDW.js";import"./utils-BzD9qn-t.js";import"./index-GcGiJc-e.js";import"./index-DAx9tP-t.js";import"./index-HFoflSp7.js";import"./navigation-down-arrow-DW5vPyKC.js";import"./navigation-right-arrow-De8vjbS4.js";import"./navigation-right-arrow-DXKcG20K.js";import"./useCurrentTheme-BVrxJiy7.js";import"./index-C-S-N3mF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bcixplcr.js";import"./paper-plane-2-5UQC1A.js";import"./index-FZ4e72eA.js";import"./less-jXtBnPYa.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
