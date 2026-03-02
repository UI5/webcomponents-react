import{j as t}from"./iframe-CqFnJp-S.js";import{useMDXComponents as n}from"./index-CynYu3xa.js";import{I as i,F as m}from"./CommandsAndQueries-D_WKy8dN.js";import{M as p,C as s}from"./blocks-AhMBMxUR.js";import"./Tag-Cwi_n_M2.js";import"./index-DezDvmls.js";import"./copy-B3ylxRux.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BPifQ1Ev.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BARlfa70.js";import"./index-lhl517Nj.js";import"./index-CR3t_8EC.js";import"./Link-18Y5h9Ta.js";import"./index-B8Ys29Cw.js";import"./index-CaJgjkX1.js";import"./index-B_RIKuGc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6mfgC9Q.js";import"./addCustomCSSWithScoping-Dl0yXOSQ.js";import"./index-CA0UVsfH.js";import"./information-60cadcf1.js";import"./sys-enter-2-seBR9LV9.js";import"./alert-vPdDlciv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-GQqzYq73.js";import"./delete-DVGnJKaP.js";import"./settings-C86YGrfc.js";import"./NoData-CPLwwlHF.js";import"./IllustratedMessage-D9IfNlHf.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Cf9HMdQx.js";import"./index-DsLMVCKf.js";import"./index-D5uq3pGm.js";import"./slim-arrow-down-BKovBuLa.js";import"./Input-CQNiUAP7.js";import"./ResponsivePopoverCommon.css-B_6-LLQR.js";import"./ValueStateMessage.css-BBGnGBu9.js";import"./Suggestions.css-DzKfp-Xw.js";import"./ListBoxItemGroupTemplate-B53iLlHx.js";import"./ComboBoxItemGroup-Wbjga0AQ.js";import"./ListItemBaseTemplate-BGEwTL5Q.js";import"./Token-CDAtcjpf.js";import"./ScrollEnablement-BUHldyEa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1rHJjnW.js";import"./ToggleButton-BOg-qA3G.js";import"./SuggestionItem-xIpc8qFg.js";import"./index--ZiExa_2.js";import"./Option-DIgNMlnn.js";import"./index-TPfNhAGX.js";import"./SegmentedButton-sebu1UW5.js";import"./index-eNZtFDGv.js";import"./Select-CZVbWsMp.js";import"./InvisibleMessage-CgZaFHu8.js";import"./slim-arrow-down-D6HaHOTp.js";import"./index-2-mJG5vY.js";import"./index-Dghj_1B1.js";import"./index-Mhz05_do.js";import"./index-Bau1_Q7b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwYWP051.js";import"./group-2-DlIEyGbO.js";import"./sort-descending-C24nnD91.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ril5FfjQ.js";import"./utils-D1IBIU3s.js";import"./index-4ty_Ok3T.js";import"./index-CPy012dy.js";import"./index-Dc9tpclD.js";import"./navigation-down-arrow-D8TiYLu5.js";import"./navigation-right-arrow-P2di7b2W.js";import"./navigation-right-arrow-HH0z6MpN.js";import"./useCurrentTheme-oeVWKNpy.js";import"./index-CMtyblMd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ChZZThs6.js";import"./paper-plane-Rb1O3_rk.js";import"./index-RQySdApX.js";import"./less-Dkh_-EuF.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
