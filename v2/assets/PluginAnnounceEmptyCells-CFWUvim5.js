import{j as t}from"./iframe-CLqwDYWN.js";import{useMDXComponents as n}from"./index-cmVK5yXJ.js";import{I as i,F as m}from"./CommandsAndQueries-DltB0UQf.js";import{M as p,C as s}from"./blocks-Ua2ef061.js";import"./Tag-D4gpwYXq.js";import"./index-BLABW-V6.js";import"./copy-BFTyEUOW.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-hZOyNi4-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BAe0MMci.js";import"./index-dDRjuikd.js";import"./index-DbDqFPhM.js";import"./Link-CWlOLLsT.js";import"./index-Em70_hTG.js";import"./index-CZj6k55a.js";import"./index-Ddq0Vtwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Clukjtst.js";import"./addCustomCSSWithScoping-CDaW4Lcf.js";import"./index-BkxNRgLP.js";import"./information-yMtkqf_-.js";import"./sys-enter-2-DLul5qw8.js";import"./alert-BH_ko6Mf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYcEpgcd.js";import"./delete-AfqY1m-P.js";import"./settings-DbFb6seN.js";import"./NoData-Cht9VzEL.js";import"./IllustratedMessage-CDCtcvSa.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BMtskUoL.js";import"./index-Bg1HDO25.js";import"./index-CJ4By0nc.js";import"./slim-arrow-down-C22iVcoT.js";import"./Input-DXVKLo07.js";import"./ResponsivePopoverCommon.css-wZUp9iaM.js";import"./ValueStateMessage.css-D4s1Xohy.js";import"./Suggestions.css-DBdM4e2n.js";import"./ListBoxItemGroupTemplate-P6s8PqVr.js";import"./ComboBoxItemGroup-kZhQKBRF.js";import"./ListItemBaseTemplate-DOFjZ7UC.js";import"./Token-oKWILUju.js";import"./ScrollEnablement-BX1GdvuZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_pITSM2.js";import"./ToggleButton-CZWRO_uA.js";import"./SuggestionItem-CyojvZx5.js";import"./index-DwSivuZ5.js";import"./Option-BC429w4c.js";import"./index-DkRMg_n1.js";import"./SegmentedButton-DVrshPel.js";import"./index-DSXAZtDg.js";import"./Select-BR_Ti_op.js";import"./InvisibleMessage-DRB-gK4Q.js";import"./slim-arrow-down-BIHU5bm6.js";import"./index-CWDxWYIq.js";import"./index-BE3ugTFz.js";import"./index-BXY3diBI.js";import"./index-DiK104TW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCPxxjXq.js";import"./group-2-BJfUB2fk.js";import"./sort-descending-B2qNBOis.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BMP6kCoe.js";import"./utils-RGutoP-Y.js";import"./index-BJqt4hz8.js";import"./index-CF_2Gmzg.js";import"./index-CxjQeiDR.js";import"./navigation-down-arrow-DeQyn301.js";import"./navigation-right-arrow-Dei2x-FV.js";import"./navigation-right-arrow-Dtl4aa4d.js";import"./useCurrentTheme-DFPeZZlw.js";import"./index-oS5lCLsv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BnOr2gHb.js";import"./paper-plane-C4dG94mO.js";import"./index-DFRNsF2S.js";import"./less-DCuw3qxw.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
