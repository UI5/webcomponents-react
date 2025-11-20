import{j as t}from"./iframe-gC-jGD3g.js";import{useMDXComponents as n}from"./index-CnyMSsHR.js";import{I as i,F as m}from"./CommandsAndQueries-ChGbNwju.js";import{M as p,C as s}from"./blocks-BnpMKK8i.js";import"./Tag-DMQgfedw.js";import"./index-vAW-FU28.js";import"./copy-BSllcJzf.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-jS1llAg6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cgw7_UVl.js";import"./index-Dyh78V3l.js";import"./index-ttP0_XR3.js";import"./Link-Cdfcmbjx.js";import"./index-DlQFiyPN.js";import"./index-BDDT0PTl.js";import"./index-DsCn_0k2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP7KFobN.js";import"./addCustomCSSWithScoping-Cg-GrC5q.js";import"./index-CHNkjAWB.js";import"./information-DRo1yGzG.js";import"./sys-enter-2-DufMiZ6b.js";import"./alert-U-kxkHRC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-LQmtlLK5.js";import"./delete--nh-W3-Q.js";import"./settings-DUXq2pKC.js";import"./NoData-vVbLZZUt.js";import"./IllustratedMessage-aNBcoDsa.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DRKx1zXM.js";import"./index-BHTZ4yDe.js";import"./index-AqAkx8om.js";import"./slim-arrow-down-DRMPXoxM.js";import"./Input-DCJKAbRS.js";import"./ResponsivePopoverCommon.css-B7TyWprV.js";import"./ValueStateMessage.css-CydKnI3y.js";import"./Suggestions.css-BrVVPmcm.js";import"./ListBoxItemGroupTemplate-CwzjGxkH.js";import"./ComboBoxItemGroup-DIhxkCFs.js";import"./ListItemBaseTemplate-Cvto1n-r.js";import"./Token-BrbWFJrM.js";import"./ScrollEnablement-FtAWAuH9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcVnTGUz.js";import"./ToggleButton-c15t9qo5.js";import"./SuggestionItem-Beu4eLam.js";import"./index-3g9KQFfJ.js";import"./Option-DZ1cZDPf.js";import"./index-DeaTVqXq.js";import"./SegmentedButton-BhdBmLvs.js";import"./index-Dfq-eLt0.js";import"./Select-hKzPoZWj.js";import"./InvisibleMessage-BJlc9Zmk.js";import"./slim-arrow-down-C9Z_Q9pC.js";import"./index-Dqb5plgn.js";import"./index-NBV4rwkS.js";import"./index-DoCANgze.js";import"./IconDesign-DXd8PPVF.js";import"./filter-f649f9Rh.js";import"./group-2-D7Gn0lkQ.js";import"./sort-descending-yfv3Cg_R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CWZ9V4Ak.js";import"./utils-BMIaq7YY.js";import"./index-CQx6TRPA.js";import"./index-DVa76Ufg.js";import"./index-mydUACZk.js";import"./navigation-down-arrow-BYIZcEhQ.js";import"./navigation-right-arrow-D6ZdUzP9.js";import"./navigation-right-arrow-B-FehG3J.js";import"./useCurrentTheme-Bf3voSYI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DYmzfp3l.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPypzMSE.js";import"./paper-plane-CI4mRr-x.js";import"./index-KUzNPbfU.js";import"./less-Do7ux1rK.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
