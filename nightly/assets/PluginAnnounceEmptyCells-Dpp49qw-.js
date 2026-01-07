import{j as t}from"./iframe-vPuL6nrR.js";import{useMDXComponents as n}from"./index-SqnB7SsH.js";import{I as i,F as m}from"./CommandsAndQueries-BhV0DcZ1.js";import{M as p,C as s}from"./blocks-CGVrLY5L.js";import"./Tag-Bv6LdF2m.js";import"./index-CrDwtJBU.js";import"./copy-DGJagZ4x.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CEd-U3Y9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MOLGybyv.js";import"./index-D8Laxk3p.js";import"./index-BrWx5AOh.js";import"./Link-eKxzOHxo.js";import"./index-C6iociGO.js";import"./index-DeGdMjr2.js";import"./index-D5bO2WHW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQtnDDkb.js";import"./addCustomCSSWithScoping-Ddp0ymp7.js";import"./index-CfldzWz8.js";import"./information-D9zj9sOE.js";import"./sys-enter-2-D6w_QQfA.js";import"./alert-C_Ss2xwM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDEYRsk7.js";import"./delete-CqW8NqGe.js";import"./settings-Cj4F-sn-.js";import"./NoData-B6dEymhk.js";import"./IllustratedMessage-fNVt6nDT.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-C4Fi4xib.js";import"./index-DXIxpdsF.js";import"./index-Bdmog3xs.js";import"./slim-arrow-down-B1T99V5w.js";import"./Input-CChiahoF.js";import"./ResponsivePopoverCommon.css-C2d2sUac.js";import"./ValueStateMessage.css-BuG0YrNm.js";import"./Suggestions.css-J9EImHe6.js";import"./ListBoxItemGroupTemplate-CJsm3Ul2.js";import"./ComboBoxItemGroup-BjhHmu1_.js";import"./ListItemBaseTemplate-DzoOxgIE.js";import"./Token-B6W6V4bM.js";import"./ScrollEnablement-DWmM35W4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CImLKtWb.js";import"./ToggleButton-DzxCPDPZ.js";import"./SuggestionItem-BEJvr8r8.js";import"./index-Bl3X3auW.js";import"./Option-BzrTRgaF.js";import"./index-ZVMZGAva.js";import"./SegmentedButton-Cbml1Wlq.js";import"./index-BHx5eP0s.js";import"./Select-CLf6VczP.js";import"./InvisibleMessage-CuC6Puks.js";import"./slim-arrow-down-C84_eyIp.js";import"./index-D6hE3GQN.js";import"./index-CbspbvB6.js";import"./index-Ct0Aq-bZ.js";import"./index-DcvU_XKJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dk9irKV0.js";import"./group-2-CzEO-tAI.js";import"./sort-descending-qZUVN4UZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UEPJgIKA.js";import"./utils-C6_g_wtf.js";import"./index-DkBbhQP-.js";import"./index-B9ZqcJIb.js";import"./index-C6AbtUGW.js";import"./navigation-down-arrow-zIYYcACt.js";import"./navigation-right-arrow-DIDO5vFl.js";import"./navigation-right-arrow-BR8wObxR.js";import"./useCurrentTheme-DG8GYF18.js";import"./index-pO-94DCY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BSPpJGW2.js";import"./paper-plane-B4zBBoau.js";import"./index-DXkaAWnQ.js";import"./less-CsKXQq_W.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
