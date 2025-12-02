import{j as t}from"./iframe-BN0GWVQe.js";import{useMDXComponents as n}from"./index-BLbTpX55.js";import{I as i,F as m}from"./CommandsAndQueries-C4w7BIRn.js";import{M as p,C as s}from"./blocks-D3wn40tr.js";import"./Tag-CZAeCV6F.js";import"./index-Bxb5YZWP.js";import"./copy-B0NSZ-1k.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-7de-hSrh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BEhXLrZk.js";import"./index-Dt-X_HjL.js";import"./index-BtPW2b7B.js";import"./Link-Br_XV4sE.js";import"./index-BqPBCR84.js";import"./index-BQ2VPUfC.js";import"./index-CGlofGT5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Du_vcu6e.js";import"./addCustomCSSWithScoping-D2hXBZmk.js";import"./index-BaX--um2.js";import"./information-b87QwzTv.js";import"./sys-enter-2-C5oyesud.js";import"./alert-DOWzv_2H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-BtNJyH.js";import"./delete-B-dRIfah.js";import"./settings-O_gAmrE7.js";import"./NoData-B6r5wtfr.js";import"./IllustratedMessage-CHylU20L.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BD6ty48g.js";import"./index-D6WGsm7x.js";import"./index-CS6KO8cx.js";import"./slim-arrow-down-xoHclsMi.js";import"./Input-BT1uTnSo.js";import"./ResponsivePopoverCommon.css-DtFcvyzi.js";import"./ValueStateMessage.css-DGbWuuCH.js";import"./Suggestions.css-BeDi0pBK.js";import"./ListBoxItemGroupTemplate-Dzhkqyak.js";import"./ComboBoxItemGroup-KbV6i136.js";import"./ListItemBaseTemplate-BfCP6G70.js";import"./Token-C1ZTtDz_.js";import"./ScrollEnablement-iDo916Z3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6-433jt.js";import"./ToggleButton-ybF8gCpz.js";import"./SuggestionItem-Bgm-HNu4.js";import"./index-DW2XUEdT.js";import"./Option-B9k-7Ahv.js";import"./index-D8K4Qq5D.js";import"./SegmentedButton-C7VWunBd.js";import"./index-DNhI0FWS.js";import"./Select-CJ0wONEr.js";import"./InvisibleMessage-CRMlkkCP.js";import"./slim-arrow-down-B5np2n8S.js";import"./index-C4H-ZzEe.js";import"./index-92cS-QUv.js";import"./index-D6tqan70.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CEM9HxMz.js";import"./group-2-BMZwrYYd.js";import"./sort-descending-BlHz6r-B.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CsK0f-Ik.js";import"./utils-ChyEe21I.js";import"./index-Lp9IxDFm.js";import"./index-CojJHUo4.js";import"./index-DUZ2D5ri.js";import"./navigation-down-arrow-2gSQh0oE.js";import"./navigation-right-arrow-BLvXVY5g.js";import"./navigation-right-arrow-X8mU-9lc.js";import"./useCurrentTheme-BB3WFm2v.js";import"./IndicationColor-DVw-fSM_.js";import"./index-As2m_wDV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgYFYmB4.js";import"./paper-plane-vPmlwkwT.js";import"./index-B4Hn3DKa.js";import"./less-rqU1UIrN.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
