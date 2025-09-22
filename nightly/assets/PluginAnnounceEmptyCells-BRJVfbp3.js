import{j as t}from"./iframe-43wlDzrj.js";import{useMDXComponents as i}from"./index-XbeLC3PN.js";import{I as n,F as m}from"./CommandsAndQueries-BVePbTmS.js";import{M as p,C as s}from"./blocks-VCr_TDgJ.js";import"./Tag-DvuRdu_J.js";import"./index-D_51MvSW.js";import"./copy-CHCJaVsW.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D10oF3Zp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeIthXDN.js";import"./index-NATKJxhC.js";import"./index-CYHyRuCO.js";import"./Link-N85W-l5g.js";import"./addCustomCSSWithScoping-iHDWQtL_.js";import"./index-DHTRveDi.js";import"./index-C_V3uMP5.js";import"./index-Cx3qav0q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D888T4vP.js";import"./index-CNoVY_XQ.js";import"./information-CaFqdV1q.js";import"./sys-enter-2-C8G6jLKW.js";import"./alert-Id5Wcp3M.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGgp7AI6.js";import"./delete-CGKk-GHt.js";import"./settings-azhe1KGA.js";import"./NoData-BUEDhyou.js";import"./IllustratedMessage-DI5ozM4h.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B47dMSPk.js";import"./index-DLDDGmPM.js";import"./slim-arrow-down-C0QargdW.js";import"./Input-BgaYHg51.js";import"./ResponsivePopoverCommon.css-CvwmGqLs.js";import"./ValueStateMessage.css-BHLQ2DbP.js";import"./Suggestions.css-BTUxUlaU.js";import"./ListBoxItemGroupTemplate-_jq9N5mv.js";import"./ComboBoxItemGroup-BnIMpk3_.js";import"./ListItemBaseTemplate-BNZLQVJb.js";import"./Token-DoODEqch.js";import"./ScrollEnablement-Cm1ZvOJx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1ufjNVS.js";import"./ToggleButton-DZrdfmOA.js";import"./SuggestionItem-5jEGmJUe.js";import"./index-D_dLm55z.js";import"./Option-CJ58wD00.js";import"./index-wy3OMWOb.js";import"./SegmentedButton-B-jkLKht.js";import"./index-t8OF5k03.js";import"./Select-BntRU9MY.js";import"./InvisibleMessage-CWwBH76X.js";import"./slim-arrow-down-CeCiJzmU.js";import"./useIsRTL-DZbwhoX7.js";import"./index-BzUhYjna.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CBaC_AY2.js";import"./group-2-BtuK6gfj.js";import"./sort-descending-upcXrfhH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ds45T-GS.js";import"./utils-BQmyXk_Q.js";import"./index-DI_L1vtw.js";import"./index-BVV-gDdT.js";import"./index-C73gXked.js";import"./navigation-down-arrow-CE61iwfG.js";import"./navigation-right-arrow-Dd3smTto.js";import"./navigation-right-arrow-WYE_8Vwt.js";import"./useCurrentTheme-B63DugkT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-cIZdWKhJ.js";import"./debounce-D7W5PopO.js";import"./paper-plane-xHzyfFIj.js";import"./index-Cz9Roaqc.js";import"./less-D_D0iQDA.js";import"./index-Cb6A3wNx.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,t.jsx(m,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
