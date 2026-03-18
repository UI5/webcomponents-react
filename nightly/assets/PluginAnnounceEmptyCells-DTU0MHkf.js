import{j as t}from"./iframe-yI-Wg8Yu.js";import{useMDXComponents as i}from"./index-CxvvrXjD.js";import{I as n}from"./CommandsAndQueries-DwKUywP6.js";import{M as m,C as p}from"./blocks-HNp4GQzu.js";import"./Tag-Br4lHrdC.js";import"./index-CrEz3lFQ.js";import"./copy-CzvsuiXE.js";import{F as s}from"./Footer-BemjN3C9.js";import"./PageNotFound-CBU2IUWB.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DX9fjdm3.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-C6y8N-8D.js";import"./index-D8b50e5F.js";import"./index-xjCs2iot.js";import"./index-J93pLR5V.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZnAazyk.js";import"./addCustomCSSWithScoping-BNZ7UTaQ.js";import"./index-DzsGzp3s.js";import"./index-Bdq6p_tF.js";import"./index-B7JluNCD.js";import"./information-BheeN2Jq.js";import"./sys-enter-2-Cz9qa-qG.js";import"./alert-CEw8OaPM.js";import"./index-CVU3jLpA.js";import"./Illustrations-CgcUDXre.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ch_l4A71.js";import"./delete-BKIa5Inl.js";import"./settings-BcO7jpsd.js";import"./NoData-ddeZ4ZzU.js";import"./NoFilterResults-CLt_pcJr.js";import"./index-D4zEeQxJ.js";import"./IllustratedMessage-C-jaf42F.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-C6zym0cc.js";import"./Input-BUGKz_Lc.js";import"./ResponsivePopoverCommon.css-BNW7Lf7K.js";import"./ValueStateMessage.css-CsVqWCnq.js";import"./Suggestions.css-CiLhqI_s.js";import"./ListBoxItemGroupTemplate-DuN5V80J.js";import"./ComboBoxItemGroup-BDZf4X_E.js";import"./ListItemBaseTemplate-C-EP-_9g.js";import"./Token-C7sAHdda.js";import"./ScrollEnablement-CooVjliK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ukU4a9WM.js";import"./ToggleButton-B8x_Ly1G.js";import"./multiselect-all-D-0oG0IX.js";import"./SuggestionItem-DVm2dPtw.js";import"./index-DcLk1pTn.js";import"./Option-Bszoi-kz.js";import"./index-AdZo8yaG.js";import"./SegmentedButton-DEpOrwoF.js";import"./index-DQXdXHie.js";import"./Select-B3y19PJu.js";import"./InvisibleMessage-CYdYwTWM.js";import"./index-C7F5crtR.js";import"./index-CPDkMcuG.js";import"./index-D0ugXmVP.js";import"./index-BvAWjuf0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdQ7f2b4.js";import"./group-2-DuaaGf8G.js";import"./sort-descending-C7lARj89.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-IBNXnUtg.js";import"./utils-D_ECpqQL.js";import"./index-DPRhzH27.js";import"./index-BgWJyTu-.js";import"./index-BpMYt18L.js";import"./navigation-down-arrow-BuFUK5Hw.js";import"./navigation-right-arrow-BH82ZZ1S.js";import"./navigation-right-arrow-B2TA0-_n.js";import"./useCurrentTheme-ChdRBpiw.js";import"./index-CIBb-yD5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B54Bx3mH.js";import"./paper-plane-B0LEVO2L.js";import"./index-CemenA4y.js";import"./less-B-s43OsD.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
