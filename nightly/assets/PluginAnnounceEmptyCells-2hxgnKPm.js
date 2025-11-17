import{j as t}from"./iframe-dY_MtB0H.js";import{useMDXComponents as n}from"./index-lTaYTAxK.js";import{I as i,F as m}from"./CommandsAndQueries-BmTyHFa7.js";import{M as p,C as s}from"./blocks-Cb83AQYu.js";import"./Tag-CxsGqX-Z.js";import"./index-Bn3aq9YQ.js";import"./copy-D63JhW9h.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DIrstwVo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3rLokAO.js";import"./index-SPIujRFM.js";import"./index-CvfG5erE.js";import"./Link-CVqB5eeU.js";import"./index-B-7UltV5.js";import"./index-DLNzTjP4.js";import"./index-Bzi9OmH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xawsFKB1.js";import"./addCustomCSSWithScoping-Dwp_g_5J.js";import"./index-C_5JPwqD.js";import"./information-D5v06NEv.js";import"./sys-enter-2-Db0ak0Nd.js";import"./alert-BFAYnF-v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DaLQSA0E.js";import"./delete-g2CuJ_wb.js";import"./settings-DAd_6mYH.js";import"./NoData-Blv8I7YQ.js";import"./IllustratedMessage-BLDDWSdA.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CaqiHixB.js";import"./index-qJBtItPV.js";import"./index-CWiSxvhn.js";import"./slim-arrow-down-CKBotrxy.js";import"./Input-DxE4TE5M.js";import"./ResponsivePopoverCommon.css-BS9wczML.js";import"./ValueStateMessage.css-CwzPbVeu.js";import"./Suggestions.css-BjOM4Zj7.js";import"./ListBoxItemGroupTemplate-DFxbQhuY.js";import"./ComboBoxItemGroup-DkBoYEbS.js";import"./ListItemBaseTemplate-Yzd_BkA_.js";import"./Token-BIFWvplK.js";import"./ScrollEnablement-D1kjFpjc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-5edM-Bva.js";import"./ToggleButton-TjzAbPq5.js";import"./SuggestionItem-C57ebMKU.js";import"./index-CaPdWPLL.js";import"./Option-C1ySdqTY.js";import"./index-zXzmY2rb.js";import"./SegmentedButton-Jhgj92Ar.js";import"./index-DTHWpZOl.js";import"./Select-AWtqTVOK.js";import"./InvisibleMessage-B3-0tvhv.js";import"./slim-arrow-down-BOfgu5aU.js";import"./index-DYbah51H.js";import"./index-CP0kb2RZ.js";import"./index-CfFSy1iK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DUmJLfmv.js";import"./group-2-1jf4JmlH.js";import"./sort-descending-Dm9j_ynP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B-5V9EsP.js";import"./utils-BWRe96GN.js";import"./index-DEtQnl29.js";import"./index-DQ1x_Uk-.js";import"./index-CPn1OsK-.js";import"./navigation-down-arrow-Di7D0dyJ.js";import"./navigation-right-arrow-Ds1fXGh0.js";import"./navigation-right-arrow-BZlFav50.js";import"./useCurrentTheme-D3zL71pS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IWQOu6Ty.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D5nyE8Ez.js";import"./paper-plane-CAK1tVhg.js";import"./index-Dp-bSeZB.js";import"./less-Djd8oRMN.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
