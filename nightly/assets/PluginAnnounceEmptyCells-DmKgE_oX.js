import{j as t}from"./iframe-_dkm4-lx.js";import{useMDXComponents as n}from"./index-DAI4KLq-.js";import{I as i,F as m}from"./CommandsAndQueries-BqJjwTMw.js";import{M as p,C as s}from"./blocks-Bs8u5Nl3.js";import"./Tag-BrrbDF8k.js";import"./index-BnWTzbqn.js";import"./copy-CdpHOxV4.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories--cyb8K2N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bo-JlDoR.js";import"./index-oGo7hVYD.js";import"./index-S8RgegHO.js";import"./Link-DtN5ZiM1.js";import"./index-DAd7Ps1Q.js";import"./index-DGmq0M6J.js";import"./index-D5ljwTMv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di5ZUlIH.js";import"./addCustomCSSWithScoping-BWn-VVtx.js";import"./index-Dr4umyr0.js";import"./information-BDRRh1Am.js";import"./sys-enter-2-BupypyQm.js";import"./alert-C9P72ihW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-8I7EMud0.js";import"./delete-BFlU4n88.js";import"./settings-DKHpvx8J.js";import"./NoData-C-NDq2fS.js";import"./IllustratedMessage-dVg4D6z8.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C43Z122v.js";import"./index-mDQ8kmFF.js";import"./index-fE5L-wmg.js";import"./slim-arrow-down-YnD0B6qq.js";import"./Input-CQoBJCT1.js";import"./ResponsivePopoverCommon.css-BWtbIU1l.js";import"./ValueStateMessage.css-D3oaOmzE.js";import"./Suggestions.css-DqTbturi.js";import"./ListBoxItemGroupTemplate-CxBSymlc.js";import"./ComboBoxItemGroup-BMTZSRsg.js";import"./ListItemBaseTemplate-C3bTchJi.js";import"./Token-B8wGSQWQ.js";import"./ScrollEnablement-mXNeOQwW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BATgW0iD.js";import"./ToggleButton-CXXLlraY.js";import"./SuggestionItem-Cz-SyCva.js";import"./index-BYeZEBFK.js";import"./Option-DDmpArcW.js";import"./index-BvjAbd4X.js";import"./SegmentedButton-CI86rvUG.js";import"./index-DiofpmJR.js";import"./Select-B68-6Rcp.js";import"./InvisibleMessage-Cuby5-08.js";import"./slim-arrow-down-Ds2hHePS.js";import"./index-DCZEipB7.js";import"./index-Da0p86mA.js";import"./index-BZMYVf63.js";import"./index-B0FAyyCx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCgM0xcn.js";import"./group-2-_TbX78jG.js";import"./sort-descending-BrpD4Gn1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BzuvpoLd.js";import"./utils-CQKL6wZL.js";import"./index-Fh8qLzQn.js";import"./index-CfwLt2JK.js";import"./index-DmEe1OQb.js";import"./navigation-down-arrow-DiwCzOiQ.js";import"./navigation-right-arrow-aREcauxn.js";import"./navigation-right-arrow-BNytRyk2.js";import"./useCurrentTheme-CvQCpiy2.js";import"./index-ClgSKDC6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CFHyUMry.js";import"./paper-plane-C9QCx50u.js";import"./index-NxLhfNzK.js";import"./less-DqBn0nny.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
