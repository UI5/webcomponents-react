import{j as t}from"./iframe-BcULqSVx.js";import{useMDXComponents as n}from"./index-DimjqcOY.js";import{I as i,F as m}from"./CommandsAndQueries-Bjxahy8c.js";import{M as p,C as s}from"./blocks-SeGv6FI8.js";import"./Tag-DE8sZ6fR.js";import"./index-CMCy2tRg.js";import"./copy-DrZjSCYt.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CwfhnBHr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfNAKNyC.js";import"./index-Bht3WMEt.js";import"./index-CEmXgIma.js";import"./Link-D2-7Bb71.js";import"./index-Cd7o7phm.js";import"./index-nOLHZmf_.js";import"./index-72f5Qi1p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYesK5yK.js";import"./addCustomCSSWithScoping-DZ8lcGy4.js";import"./index-D0A2Ruup.js";import"./information-C0qTg3A6.js";import"./sys-enter-2-hVsohqhg.js";import"./alert-CRlYmZ6n.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DjsLDXTt.js";import"./delete-D4gojdJ3.js";import"./settings-DQ2ylyfP.js";import"./NoData-BqgAG3sz.js";import"./IllustratedMessage-9FLylkPF.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BL1qCewm.js";import"./index-i0HUbk-Q.js";import"./index-BeV7o16d.js";import"./slim-arrow-down-hE2EqBiC.js";import"./Input-DbwFVhoi.js";import"./ResponsivePopoverCommon.css-Cwh624CK.js";import"./ValueStateMessage.css-d2Jp-8qc.js";import"./Suggestions.css-DvUhQ2oV.js";import"./ListBoxItemGroupTemplate-CPRrFJXE.js";import"./ComboBoxItemGroup-wocKQbDo.js";import"./ListItemBaseTemplate-C9iGViqU.js";import"./Token-BmuMUgzL.js";import"./ScrollEnablement-Bz7jmoT9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BtQP2CZp.js";import"./ToggleButton-l4zYl7a2.js";import"./SuggestionItem-BvM1s-Ep.js";import"./index-BKB4sp5j.js";import"./Option-CnCNxHHl.js";import"./index-6IYiZanH.js";import"./SegmentedButton-CsKBwiEG.js";import"./index-DiH1WLgS.js";import"./Select-Kk-2dMK4.js";import"./InvisibleMessage-DxnWWDzY.js";import"./slim-arrow-down-2dLbZhMa.js";import"./index-DN80B9hU.js";import"./index-ClrkJCXk.js";import"./index-D0znPBId.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B6gmJJpm.js";import"./group-2-kiGo_aBB.js";import"./sort-descending-DO-3UGP3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CyfGHOa1.js";import"./utils-B0S858C0.js";import"./index-ANJkbmQy.js";import"./index-Dp7rxzF-.js";import"./index-DbHuW_um.js";import"./navigation-down-arrow-0PRVlgRF.js";import"./navigation-right-arrow-OtK-3m38.js";import"./navigation-right-arrow-BxINGnO8.js";import"./useCurrentTheme-C4hYD1x7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BzQU3Sud.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B93fOd8S.js";import"./paper-plane-rcdV2FrJ.js";import"./index-RdWEGO-1.js";import"./less-DFYHTHFm.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
