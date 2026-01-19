import{j as t}from"./iframe-CGYWU8Zw.js";import{useMDXComponents as n}from"./index-CiFONtpN.js";import{I as i,F as m}from"./CommandsAndQueries-3p6jyLf7.js";import{M as p,C as s}from"./blocks-DZmaAmAP.js";import"./Tag-DxQZH2nA.js";import"./index-C8k79uzV.js";import"./copy-ButtKxyE.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CsIPtkrn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cn68RHh4.js";import"./index-IcIo-7M4.js";import"./index-Bi-laTlO.js";import"./Link-BAlxiTXd.js";import"./index-BpDmHZtn.js";import"./index-DOxDv7Xi.js";import"./index-mH5f_RVl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRQkasjF.js";import"./addCustomCSSWithScoping-DNAczkus.js";import"./index-C1_F4VAw.js";import"./information-Dv2HF6Ui.js";import"./sys-enter-2-vy1Ip4uQ.js";import"./alert-BcA2abtX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DQJSAvK6.js";import"./delete-B6O2JaIS.js";import"./settings-SpDQw2Vq.js";import"./NoData-bysabFUy.js";import"./IllustratedMessage-CUeEBz-a.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-8dbC-gN_.js";import"./index-ot_Vs5SX.js";import"./index-DdRBnYSU.js";import"./slim-arrow-down-KrTHML7Y.js";import"./Input-3AAsME8j.js";import"./ResponsivePopoverCommon.css-4GPhK6Ks.js";import"./ValueStateMessage.css-y9BzQC21.js";import"./Suggestions.css-E_zTpNLY.js";import"./ListBoxItemGroupTemplate-CWaB1uAI.js";import"./ComboBoxItemGroup-CvF6QpNn.js";import"./ListItemBaseTemplate-BrUrTP7s.js";import"./Token-B_03GxpZ.js";import"./ScrollEnablement-SG6LJXEq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DnUU-rKN.js";import"./ToggleButton-B0JQSluf.js";import"./SuggestionItem-7QP2JsqC.js";import"./index-D2O8IK0Y.js";import"./Option-C-i06TU1.js";import"./index-D-wDCcJv.js";import"./SegmentedButton-Cj4a5li5.js";import"./index-BpQt2xX8.js";import"./Select-xEHU_Jve.js";import"./InvisibleMessage-Cry_VVZD.js";import"./slim-arrow-down-BVAuIuoE.js";import"./index-CVglYbsF.js";import"./index-C9CUNSTS.js";import"./index-DdDzQOK5.js";import"./index-DrrvpZW3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTW5WVB_.js";import"./group-2-r-nrfnRe.js";import"./sort-descending-klOkrTUA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-De8BjJaL.js";import"./utils-fPRKtnar.js";import"./index-DLgRUgqV.js";import"./index-D7n88VO3.js";import"./index-Dzq4A1VN.js";import"./navigation-down-arrow-C_PatvXC.js";import"./navigation-right-arrow-BWvpLWqD.js";import"./navigation-right-arrow-8E2izI9D.js";import"./useCurrentTheme-DWIF38NU.js";import"./index-Dk1eqQ67.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQbatNcW.js";import"./paper-plane-J4zNAVa6.js";import"./index-CpwJUAOc.js";import"./less-D6dTBaBl.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
