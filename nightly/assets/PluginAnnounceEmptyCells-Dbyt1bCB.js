import{j as t}from"./iframe-DGliVLqx.js";import{useMDXComponents as n}from"./index-BKdQ_dPP.js";import{I as i,F as m}from"./CommandsAndQueries-DhC-K5aV.js";import{M as p,C as s}from"./blocks-DSVMoi0f.js";import"./Tag-D0qHMP--.js";import"./index-CUMj3eTR.js";import"./copy-BXMLotg5.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Di1JYyty.js";import"./preload-helper-PPVm8Dsz.js";import"./index-0zoKCck7.js";import"./index-DDYQS3It.js";import"./index-C2z7U0T0.js";import"./Link-NPuKH9vo.js";import"./index-xskusYgR.js";import"./index-usRBaxBR.js";import"./index-Bnhuo37k.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xhvQd63o.js";import"./addCustomCSSWithScoping-H3JndsVD.js";import"./index-C-ihtk73.js";import"./information-DwX5G7SH.js";import"./sys-enter-2-CLhjZKEg.js";import"./alert-D8WWgafc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPXdiIGy.js";import"./delete-VNiEmKzB.js";import"./settings-Bn4IMpxs.js";import"./NoData-CrO-Ojbp.js";import"./IllustratedMessage-CQ-pThL8.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-zmPXMY8f.js";import"./index-BPpKon_v.js";import"./index-ZlqYo9cE.js";import"./slim-arrow-down-BPCmfgSQ.js";import"./Input-B1uSH_6j.js";import"./ResponsivePopoverCommon.css-C-Hps5ad.js";import"./ValueStateMessage.css-Dg_RR3hb.js";import"./Suggestions.css-OrfoYcSp.js";import"./ListBoxItemGroupTemplate-B1B8Njil.js";import"./ComboBoxItemGroup-CFqLv33P.js";import"./ListItemBaseTemplate-BLL1fYXv.js";import"./Token-BYnYPiQ0.js";import"./ScrollEnablement-7T92gtzO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMz5O0cu.js";import"./ToggleButton-gLJIOvzQ.js";import"./SuggestionItem-B0HnLZ2a.js";import"./index-JZkeV-N1.js";import"./Option-BLZmkEGm.js";import"./index-DgRC1GtG.js";import"./SegmentedButton-BgAef3sS.js";import"./index-CDBfsg8A.js";import"./Select-DlS9_dRk.js";import"./InvisibleMessage-CRsDkV-1.js";import"./slim-arrow-down-DPwEh6bg.js";import"./index-DW5AkRqQ.js";import"./index-4N3HClhe.js";import"./index-B9jV6fm0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-iCWrcMv0.js";import"./group-2-BiBRlmiZ.js";import"./sort-descending-CwrGqsAr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BuqEh9jI.js";import"./utils-VIsRdQMv.js";import"./index-DN3oVk97.js";import"./index-mOI0MCrO.js";import"./index-DGwcjkeH.js";import"./navigation-down-arrow-Bi_8NERP.js";import"./navigation-right-arrow-CAlrOhev.js";import"./navigation-right-arrow-Cb1EEugd.js";import"./useCurrentTheme-CcMg6oDL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BUCpswoL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CbsPXVbG.js";import"./paper-plane-Czf94RLw.js";import"./index-Bl0RftRs.js";import"./less-DTZLBQaX.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
