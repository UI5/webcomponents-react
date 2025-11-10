import{j as t}from"./iframe-DwaN3YOb.js";import{useMDXComponents as n}from"./index-DJkPMHl0.js";import{I as i,F as m}from"./CommandsAndQueries-celHgEKj.js";import{M as p,C as s}from"./blocks-VOPJhWRb.js";import"./Tag-CvvDTrwW.js";import"./index-CeIuBzgz.js";import"./copy-CKG1fqk8.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D8qv-qyc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVTJV5Os.js";import"./index-DjYkOeBC.js";import"./index-CUaYuXp6.js";import"./Link-DCuWG7Zr.js";import"./index-C3ayLo5Y.js";import"./index-Bi8h6EAq.js";import"./index-D4NPnlzD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pPwV4WuA.js";import"./addCustomCSSWithScoping-CDiHCMLw.js";import"./index-DTu_z_3g.js";import"./information-DlBGosYj.js";import"./sys-enter-2-D6KHkFFC.js";import"./alert-CbpKaM9g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BvknPgOG.js";import"./delete-oCNE_JQh.js";import"./settings-DEs1Fc49.js";import"./NoData-DAYfBbqK.js";import"./IllustratedMessage-wzKYdU_-.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Cb_5cmEk.js";import"./index-BcPBHQ-Q.js";import"./index-Bke4YviU.js";import"./slim-arrow-down-CRaneK80.js";import"./Input-CLIZhDum.js";import"./ResponsivePopoverCommon.css-CJC70dmu.js";import"./ValueStateMessage.css-DJT3AHT7.js";import"./Suggestions.css-CeDH46KQ.js";import"./ListBoxItemGroupTemplate-BQ-rC9oN.js";import"./ComboBoxItemGroup-mMihpAIY.js";import"./ListItemBaseTemplate-CRnzAUDY.js";import"./Token-Bw2wQhOZ.js";import"./ScrollEnablement-lcRjFW01.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2rgfoOK.js";import"./ToggleButton-Cp7FiFLg.js";import"./SuggestionItem-CXEUnxx9.js";import"./index-BeETY4Un.js";import"./Option-DpzRHCg2.js";import"./index-BaS94csF.js";import"./SegmentedButton-Bs4JK4vg.js";import"./index-CdGoTqGJ.js";import"./Select-DP-woAt8.js";import"./InvisibleMessage-C38-tOeF.js";import"./slim-arrow-down-CCRASHHL.js";import"./index-YBse5kfL.js";import"./index-CB8IrRkr.js";import"./index-xilM6z0g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CPVva38y.js";import"./group-2-CSHzsICd.js";import"./sort-descending-CWc_CsJd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KwF5pWQ5.js";import"./utils-CwcFpu02.js";import"./index-De37CZAE.js";import"./index-CjVizb-b.js";import"./index-ClYWh6yw.js";import"./navigation-down-arrow-DKN53QTj.js";import"./navigation-right-arrow-z9S6-sIY.js";import"./navigation-right-arrow-DD3mtqXo.js";import"./useCurrentTheme-Wde8txbg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D_nGAcEA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DjGMBWnz.js";import"./paper-plane-Dc6cZlTV.js";import"./index-D10CmlMt.js";import"./less-BhgjPFtm.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
