import{j as t}from"./iframe-Dy0Vcyg3.js";import{useMDXComponents as n}from"./index-D0O3WS9u.js";import{I as i,F as m}from"./CommandsAndQueries-BbCratpG.js";import{M as p,C as s}from"./blocks-DQpqsYLC.js";import"./Tag-DXMLJOuX.js";import"./index-nlWOetEC.js";import"./copy-BxlHwQsP.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CYHoBY8v.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMTL_1tu.js";import"./index-BRFe_2UD.js";import"./index-0ZDpj1Mu.js";import"./Link-DNkb161-.js";import"./index-DKPC3_SO.js";import"./index-D_r2NSA0.js";import"./index-C5s5hQAS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-01L-n9vL.js";import"./addCustomCSSWithScoping-nI6ifFmX.js";import"./index-DLHjFZTm.js";import"./information-BWURtjFA.js";import"./sys-enter-2-D7LiZd3_.js";import"./alert-CoPtJvs8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-dkAXnipr.js";import"./delete-BYhpf2jF.js";import"./settings-BZhNQSdh.js";import"./NoData-BOK9z97z.js";import"./IllustratedMessage-BJD0KkWB.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-lmbuGEH-.js";import"./index-DzrRbZFE.js";import"./index-De6Jkvg9.js";import"./slim-arrow-down-KQetxSCA.js";import"./Input-DUm1g3II.js";import"./ResponsivePopoverCommon.css-0gtwTwlc.js";import"./ValueStateMessage.css-CqzpiX8G.js";import"./Suggestions.css-C-TebQWZ.js";import"./ListBoxItemGroupTemplate-Bao4syhQ.js";import"./ComboBoxItemGroup-sVlirqx1.js";import"./ListItemBaseTemplate-BQNNSgaC.js";import"./Token-DRKQmCcw.js";import"./ScrollEnablement-Ba4Wf0S8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-QXpolB0M.js";import"./ToggleButton-wPcmOR8q.js";import"./SuggestionItem-u0isYGwD.js";import"./index-BE5XNI17.js";import"./Option-DURHFvsu.js";import"./index-Dn60_PGH.js";import"./SegmentedButton--YNa3vua.js";import"./index-D3ZVC3jU.js";import"./Select-DjzM7l1z.js";import"./InvisibleMessage-DOS3eHIH.js";import"./slim-arrow-down-tdJshJ_8.js";import"./index-B6XxYOg-.js";import"./index-DihO4jCR.js";import"./index-zvcZ-4bx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-6frFTFpf.js";import"./group-2-Yb8lcurx.js";import"./sort-descending-B0xSjoj0.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UQjpo2rY.js";import"./utils-_2mEl_F_.js";import"./index-XYGDqR0-.js";import"./index-B8bpeD_U.js";import"./index-DA4_n7ku.js";import"./navigation-down-arrow-C202Rycb.js";import"./navigation-right-arrow-CK8BM-ml.js";import"./navigation-right-arrow-DGzC3PDm.js";import"./useCurrentTheme-ljABpVn3.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DfUhPIiB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-GvvBhc-H.js";import"./paper-plane-DxCnK-Wp.js";import"./index-DyLYJM1Y.js";import"./less-L4Koo52C.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
