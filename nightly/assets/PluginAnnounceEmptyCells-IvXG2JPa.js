import{j as t}from"./iframe-BO0jLSss.js";import{useMDXComponents as n}from"./index-DKYRdGJC.js";import{I as i,F as m}from"./CommandsAndQueries-CgQBaZ0f.js";import{M as p,C as s}from"./blocks-B4u3eIrx.js";import"./Tag-GPe-hxqe.js";import"./index-CblgVrgk.js";import"./copy-D8dGmaRo.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D7MtjTzc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DelbaEfh.js";import"./index-ZGr5TJVA.js";import"./index-CpvGRbxq.js";import"./Link-C1ayfMxn.js";import"./index-CEuImug1.js";import"./index-MgaH4Bh7.js";import"./index-CQJ8H28h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3DyNz5yK.js";import"./addCustomCSSWithScoping-tlJvF9vw.js";import"./index-Cxn0-wv1.js";import"./information-D3uCnnkd.js";import"./sys-enter-2-wxpj1ZiR.js";import"./alert-BevRZGbf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-WOPC9WGY.js";import"./delete-CXSVZr3J.js";import"./settings-10XeLyfQ.js";import"./NoData-Bp9WgEt4.js";import"./IllustratedMessage-CkbG5ZvE.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CQFTLeWZ.js";import"./index-CCjPGqWt.js";import"./index-DSkwQ9bU.js";import"./slim-arrow-down-BTwGuTkB.js";import"./Input-BW36Az8s.js";import"./ResponsivePopoverCommon.css-JDR8aaaw.js";import"./ValueStateMessage.css-DX9Ekmj2.js";import"./Suggestions.css-BcCiMvmK.js";import"./ListBoxItemGroupTemplate-2cOZvPZ_.js";import"./ComboBoxItemGroup-CPX37NIp.js";import"./ListItemBaseTemplate-KzzU4Rx3.js";import"./Token-BbkDyfWL.js";import"./ScrollEnablement-Dc2oxzPB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dn6AUPyj.js";import"./ToggleButton-XZE7B9VL.js";import"./SuggestionItem-BfhP-dC0.js";import"./index-BzqKXdxx.js";import"./Option-CNIcjJ6X.js";import"./index-C7e3H0Lc.js";import"./SegmentedButton-u_VBq4Z5.js";import"./index-3cbxcu0U.js";import"./Select-tyOKBt9U.js";import"./InvisibleMessage-Ckou_TOv.js";import"./slim-arrow-down-BpthopxW.js";import"./index-BNFz1DGk.js";import"./index-d6hdHjrN.js";import"./index-y6EH7Axm.js";import"./index-BWlaxzMP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CKdADjSP.js";import"./group-2-BVByTZBV.js";import"./sort-descending-CAs7fCPL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BfvWHhZL.js";import"./utils-C49Mq9vB.js";import"./index-DfdAm2kH.js";import"./index-CSVJMtfx.js";import"./index-DFflxCOc.js";import"./navigation-down-arrow-rNIcSUzY.js";import"./navigation-right-arrow-B6KhF_y0.js";import"./navigation-right-arrow-BWB9l_WM.js";import"./useCurrentTheme-D2TM_kNy.js";import"./index-CFGjj6s2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BupaFKFa.js";import"./paper-plane-nEhWEkVl.js";import"./index-Buj-2QJo.js";import"./less-BZcQvZ5K.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
