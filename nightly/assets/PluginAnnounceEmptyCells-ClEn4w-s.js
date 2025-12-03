import{j as t}from"./iframe-CJRlzZgA.js";import{useMDXComponents as n}from"./index-CbUzkcD0.js";import{I as i,F as m}from"./CommandsAndQueries-BJK9fmCd.js";import{M as p,C as s}from"./blocks-QclREKVQ.js";import"./Tag-D6uzQqkN.js";import"./index-B3EVM4WW.js";import"./copy-Dm16cUhk.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DW5PTlme.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLQSfTW2.js";import"./index-CEHRPvSv.js";import"./index-CgUHdFlG.js";import"./Link-0WAKzVuH.js";import"./index-DNJOtG7U.js";import"./index-B-KWFPaJ.js";import"./index-DBGTLlVz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckhrx5tI.js";import"./addCustomCSSWithScoping-CXI5gvd5.js";import"./index-CEi9QmXA.js";import"./information-CTfPsGYk.js";import"./sys-enter-2-DT64nekl.js";import"./alert-D_x5VnX_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B3AIhspr.js";import"./delete-ydvJCLPE.js";import"./settings-CwGuwL1v.js";import"./NoData-fDkpn7tb.js";import"./IllustratedMessage-QOrTuGKl.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BDYYJsa3.js";import"./index-BRkvunxZ.js";import"./index-ekmQbjwp.js";import"./slim-arrow-down-DiV8d_6M.js";import"./Input-C30iTws-.js";import"./ResponsivePopoverCommon.css-C_a-qh6P.js";import"./ValueStateMessage.css-C9MjG1UC.js";import"./Suggestions.css-BN5UKDJ_.js";import"./ListBoxItemGroupTemplate-gk9whGYw.js";import"./ComboBoxItemGroup-C468Z6Iw.js";import"./ListItemBaseTemplate-DnIFmn4i.js";import"./Token-BD4i_ui4.js";import"./ScrollEnablement-C7OtmXds.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-e2XpTMq4.js";import"./ToggleButton-B58O1JBR.js";import"./SuggestionItem-BhyM5wBT.js";import"./index-DMNOa0He.js";import"./Option-Bpa9ANqG.js";import"./index-D1wEGHKD.js";import"./SegmentedButton-SYhHQ9Ej.js";import"./index-Bxs6OwGY.js";import"./Select-OuFKxvFI.js";import"./InvisibleMessage-CDDqZbGd.js";import"./slim-arrow-down-BXVf3KJB.js";import"./index-Bb37Af0B.js";import"./index-CJGz6QVU.js";import"./index-C5HXwY5m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrOoWNgu.js";import"./group-2-MVpHsjQq.js";import"./sort-descending-nGGv56wH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DICMjLbX.js";import"./utils-7UT6I4G8.js";import"./index-FDtWMB9q.js";import"./index-qQGf4ufv.js";import"./index-Dw_yibZ5.js";import"./navigation-down-arrow-DkHsoxHK.js";import"./navigation-right-arrow-Qe6XxWFz.js";import"./navigation-right-arrow-SD2DKsNp.js";import"./useCurrentTheme-DEkoUSWw.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cbymz11o.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C7Tcv1Md.js";import"./paper-plane-Bz4OZEc2.js";import"./index-D0vK_QOP.js";import"./less-Dd1e4dTk.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
