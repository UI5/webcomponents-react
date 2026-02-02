import{j as t}from"./iframe-0eQE2YFm.js";import{useMDXComponents as n}from"./index-CrzDrume.js";import{I as i,F as m}from"./CommandsAndQueries-vs4Uf2fG.js";import{M as p,C as s}from"./blocks-DA7tG1fG.js";import"./Tag-D9KB_OaV.js";import"./index-CO0N_mR_.js";import"./copy-BusSvtxV.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BFUnxggX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAidMbCx.js";import"./index-nxBbAPWP.js";import"./index-DXkWzVKM.js";import"./Link-CbRTBueg.js";import"./index-CX4m4aKj.js";import"./index-DIoC19fn.js";import"./index-DCkfYqwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwbZNxPW.js";import"./addCustomCSSWithScoping-CEa4HZHN.js";import"./index-Cl7aYaAj.js";import"./information-DHaKlJ23.js";import"./sys-enter-2-CjOjN1qK.js";import"./alert-D98VDEUp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYg0i2eY.js";import"./delete-CoYQXplb.js";import"./settings-VZnwFT1a.js";import"./NoData-BQniyW5-.js";import"./IllustratedMessage-B0A1-0ks.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-teAEBMAS.js";import"./index-DB3CcisP.js";import"./index-D-LeeP8b.js";import"./slim-arrow-down-CkX7thXh.js";import"./Input-BaZHhr9A.js";import"./ResponsivePopoverCommon.css-B4yMTcW1.js";import"./ValueStateMessage.css-CDY6pP0f.js";import"./Suggestions.css-Dmp7acZ3.js";import"./ListBoxItemGroupTemplate-H0m4nnsY.js";import"./ComboBoxItemGroup-rbI26ojW.js";import"./ListItemBaseTemplate-CXUx-zU1.js";import"./Token-CIFLWQCf.js";import"./ScrollEnablement-BrxI8ufh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D9gf_cfX.js";import"./ToggleButton-CRw4HV0q.js";import"./SuggestionItem-CGZYm_I2.js";import"./index-DYuYdSg5.js";import"./Option-CJ-Q9Osb.js";import"./index-DbU22zDM.js";import"./SegmentedButton-C0dzqyrm.js";import"./index-BuNlLbX6.js";import"./Select-Dkvc-1du.js";import"./InvisibleMessage-BLfENYQH.js";import"./slim-arrow-down-BPzYFF0q.js";import"./index-CjCjG_de.js";import"./index-B6adVHqs.js";import"./index-CCMgeDTf.js";import"./index-YR2Vv4g_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYqc3-cj.js";import"./group-2-LwVDXe1y.js";import"./sort-descending-DLo-C6x1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBbdY5LP.js";import"./utils-kn_XFzdZ.js";import"./index-BynfEZ9N.js";import"./index-IPEBGIZt.js";import"./index-Drp4RYe3.js";import"./navigation-down-arrow-BlUbHMqy.js";import"./navigation-right-arrow-BiBjVNSK.js";import"./navigation-right-arrow-BWLrQnKx.js";import"./useCurrentTheme-EU1exHdB.js";import"./index-CgfgYE9g.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bhd782rf.js";import"./paper-plane-DxvI1Ia-.js";import"./index-xSCZdNeR.js";import"./less-COfx4Qkm.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
