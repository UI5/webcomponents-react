import{j as t}from"./iframe-Cofg3NYG.js";import{useMDXComponents as n}from"./index-IvWpiXeJ.js";import{I as i,F as m}from"./CommandsAndQueries-84NNvrTK.js";import{M as p,C as s}from"./blocks-2ghgTj-P.js";import"./Tag-BxZYpQJm.js";import"./index-DSsCdZng.js";import"./copy-CvrT2nje.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CkrLKY20.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzRl8rAY.js";import"./index-CuRMS7av.js";import"./index-CBua_waR.js";import"./Link-CQPXWWzt.js";import"./index-DF1YQmtO.js";import"./index-BRqSe85k.js";import"./index-BLGq_g5y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCAV-AOe.js";import"./addCustomCSSWithScoping-BkkC1l0R.js";import"./index-DsO0qxxT.js";import"./information-BJciHBvQ.js";import"./sys-enter-2-BCByF-gd.js";import"./alert-bPEScLdE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DMD_db3q.js";import"./delete-TL4LRMCi.js";import"./settings-C1P4No8J.js";import"./NoData-CgchvHoE.js";import"./IllustratedMessage-CMCdUK9z.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-a2MoTWEq.js";import"./index-BonMBjS3.js";import"./index--6KC0JCG.js";import"./slim-arrow-down-Df9CY41D.js";import"./Input-B-vnnKWa.js";import"./ResponsivePopoverCommon.css-9aKfGdr3.js";import"./ValueStateMessage.css-BoHhoqcx.js";import"./Suggestions.css-D5uqg1qj.js";import"./ListBoxItemGroupTemplate-CJbarH5R.js";import"./ComboBoxItemGroup-CgHhWkM2.js";import"./ListItemBaseTemplate-C6tlxy6i.js";import"./Token-D4V_lrT9.js";import"./ScrollEnablement-Bd2IYKOt.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMSXl_i-.js";import"./ToggleButton-DGX7LzLH.js";import"./SuggestionItem-BxKCWjfv.js";import"./index-ByINFavX.js";import"./Option-BcJSYqub.js";import"./index-97091ejm.js";import"./SegmentedButton-B2GitR0l.js";import"./index-B-yS9GRZ.js";import"./Select-Dl-KXknk.js";import"./InvisibleMessage-DjTJM9Zt.js";import"./slim-arrow-down-B4mJ9D12.js";import"./index-DeuDVa4c.js";import"./index-CqFtG3xH.js";import"./index-B8BWpeh3.js";import"./index-eAFdqwk5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CnPweenN.js";import"./group-2-ByJcrAU6.js";import"./sort-descending-CEF1xmWI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CW-WMzJS.js";import"./utils-wxGQZEOP.js";import"./index-ChbRKq5D.js";import"./index-nmwZf_ft.js";import"./index-NtXsw5yB.js";import"./navigation-down-arrow-z6IAtkEY.js";import"./navigation-right-arrow-jTHlmXwB.js";import"./navigation-right-arrow-E61PVxSn.js";import"./useCurrentTheme-Bn9zud42.js";import"./index-BdF0tCbe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DBrJUf6F.js";import"./paper-plane-y9qmaI4M.js";import"./index-DmRfqt3l.js";import"./less-D1DlvNUe.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
