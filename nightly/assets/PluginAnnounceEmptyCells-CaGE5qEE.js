import{j as t}from"./iframe-CqN2ZhBf.js";import{useMDXComponents as i}from"./index-l_k7HiPu.js";import{I as n}from"./CommandsAndQueries-BzSACk84.js";import{M as m,C as p}from"./blocks-D3fE08ja.js";import"./Tag-DaK0HZJI.js";import"./index-BQSixcl8.js";import"./copy-BMnDsiBX.js";import{F as s}from"./Footer-DTH9quFy.js";import"./PageNotFound-DDb6UcXH.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-wIwPshJ2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-sJNkb0O1.js";import"./index-C_OjFqiG.js";import"./index-BmfFKSeY.js";import"./index-C6JiuDE8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1eKis37g.js";import"./addCustomCSSWithScoping-DCGf9rRA.js";import"./index-ClO4sXRT.js";import"./index-BLwcEe9O.js";import"./index-BZ-8NUw-.js";import"./information-D6BYlg7t.js";import"./sys-enter-2-DctZJMGf.js";import"./alert-CXFO2CkX.js";import"./index-x-vR1nJy.js";import"./Illustrations-CQ3hDVBV.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories--txPoGWe.js";import"./delete-h2XdaitH.js";import"./settings-CV6KCmeb.js";import"./NoData-C6Sl59W9.js";import"./NoFilterResults-_LAkR6Uq.js";import"./index-BScT3cos.js";import"./IllustratedMessage-ClWQ7sf8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CjGTJ4y2.js";import"./Input-3bofm7YI.js";import"./ResponsivePopoverCommon.css-BNkBTrbu.js";import"./ValueStateMessage.css-rci_AzRX.js";import"./Suggestions.css-s0E0RINe.js";import"./ListBoxItemGroupTemplate-Bn09u9FB.js";import"./ComboBoxItemGroup-B1knsw1Z.js";import"./ListItemBaseTemplate-6JC-rm6u.js";import"./Token-BHS6Qknj.js";import"./ScrollEnablement-B4APcJGh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D5MRk4wr.js";import"./ToggleButton-CXDSYRUx.js";import"./multiselect-all-Bj3dWoCm.js";import"./SuggestionItem-uNJHrwE9.js";import"./index-CEbPyYrY.js";import"./Option-DMa1oTmd.js";import"./index-C403r3c5.js";import"./SegmentedButton-DKhXYk1S.js";import"./index-M_ILyq9S.js";import"./Select-C0_CyldT.js";import"./InvisibleMessage-BYqXJDe3.js";import"./index-B6LH8klQ.js";import"./index-BPeJ1ib5.js";import"./index-BLglrg0-.js";import"./index-B2BYcUEV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbiJbucS.js";import"./group-2-E6ze7SLh.js";import"./sort-descending-DDk2sEof.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4NWRO4be.js";import"./utils-DlysuV-i.js";import"./index-uzSXEkPm.js";import"./index-BIMeoTS_.js";import"./index-C3YYhu2K.js";import"./navigation-down-arrow-BLAd6_UK.js";import"./navigation-right-arrow-CER8vNPc.js";import"./navigation-right-arrow-Dzk8mzqX.js";import"./useCurrentTheme-C2V2IWtp.js";import"./index-CUOgXW1b.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C9HJPlj_.js";import"./paper-plane-_ZQb1tQs.js";import"./index-0rrPHm6J.js";import"./less-BaKkSfRH.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
