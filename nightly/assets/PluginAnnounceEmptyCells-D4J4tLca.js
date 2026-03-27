import{j as t}from"./iframe-DNoxABv1.js";import{useMDXComponents as i}from"./index-DQAMMhq5.js";import{I as n}from"./CommandsAndQueries-DUw_qZ-D.js";import{M as m,C as p}from"./blocks-CIhTxD7j.js";import"./Tag-C_8TAHAf.js";import"./index-I7XZadEI.js";import"./copy-BoMvLlry.js";import{F as s}from"./Footer-CRUbKNtZ.js";import"./PageNotFound-DExHfP7X.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BooCYcav.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-4KtEWIlR.js";import"./index-KaiTFuVE.js";import"./index-BEeVgB1o.js";import"./index-DVs60LFY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQViNCUD.js";import"./addCustomCSSWithScoping-CvyaWJf_.js";import"./index-DAoAOn92.js";import"./index-BfoP-fai.js";import"./index-Kl-B_MHz.js";import"./information-BBbHiJJj.js";import"./sys-enter-2-CL00FEGT.js";import"./alert-8k6AaqYY.js";import"./index-B0My9-lL.js";import"./Illustrations-eHdiuTwk.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BuQN5VCp.js";import"./delete-B_HGMo5o.js";import"./settings-BVsnDJhd.js";import"./NoData-BDxdgXKC.js";import"./NoFilterResults-B4fzW4Bb.js";import"./index-uo-jBSXF.js";import"./IllustratedMessage--JR8YmB3.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Crw8GZKM.js";import"./Input-DodynmuQ.js";import"./ResponsivePopoverCommon.css-DNwar9Nr.js";import"./ValueStateMessage.css-C9tLT3FD.js";import"./Suggestions.css-j42Uy4I4.js";import"./ListBoxItemGroupTemplate-CaBpClID.js";import"./ComboBoxItemGroup-D9NPBzFd.js";import"./ListItemBaseTemplate-D2CXTOkT.js";import"./Token-B_icrH04.js";import"./ScrollEnablement-DC8Xkk42.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CyfYcvu_.js";import"./ToggleButton-BFMYqKc3.js";import"./multiselect-all-DhBlC6xq.js";import"./SuggestionItem-DoJAxpnk.js";import"./index-BhKgk6Th.js";import"./Option-i3C7vusI.js";import"./index-BJH5L08b.js";import"./SegmentedButton-2tS_gLdU.js";import"./index-Syrnzfof.js";import"./Select-C3Bj0U0O.js";import"./InvisibleMessage-Dg53Ylmh.js";import"./index-B9ganokt.js";import"./index-39LBFfZg.js";import"./index-zLrKzjmr.js";import"./index-bQ5qgXmV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BI3J0iq7.js";import"./group-2-CxloLV0V.js";import"./sort-descending-BmcZdk1d.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5nwUFBQ.js";import"./utils-R3d4ZCnY.js";import"./index-CrXubLA8.js";import"./index-DY-INShE.js";import"./index-Bv7nOmmV.js";import"./navigation-down-arrow-D0ahPAv-.js";import"./navigation-right-arrow-CfNNKs_J.js";import"./navigation-right-arrow-DDYfThNP.js";import"./useCurrentTheme-C87angth.js";import"./index-CwMCTdJZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CcuZOG76.js";import"./paper-plane-LU-kIQ7l.js";import"./index-C-ToTZn7.js";import"./less-DlcEGwfo.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
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
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
