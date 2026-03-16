import{j as t}from"./iframe-BDg7FSoj.js";import{useMDXComponents as i}from"./index-CfS6z3MT.js";import{I as n}from"./CommandsAndQueries-BgLg0c2t.js";import{M as m,C as p}from"./blocks-D274WTCA.js";import"./Tag-D7GKpW6g.js";import"./index-BfRGPCU-.js";import"./copy-LtMPx_h3.js";import{F as s}from"./Footer-DcSScdvn.js";import"./PageNotFound-Cz7A_GPz.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CgLPWJdv.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DweKFefr.js";import"./index-YYn2-nAM.js";import"./index-Cr06KJoh.js";import"./index-Cs36UH1Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CX4riDWF.js";import"./addCustomCSSWithScoping-DjKpxhL9.js";import"./index-CtXj8tW6.js";import"./index-Ca5wJMxN.js";import"./index-DKaIOimk.js";import"./information-DD__sQ7N.js";import"./sys-enter-2-Dp2sy9f7.js";import"./alert-C6BvEboW.js";import"./index-ClFnafIK.js";import"./Illustrations-BhEYUAiS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CVFEN-wi.js";import"./delete-Djyzt4EC.js";import"./settings-CjYJ2CHk.js";import"./NoData-C5_l_MOE.js";import"./NoFilterResults-HqlK2bIf.js";import"./index-CHhs1TdG.js";import"./IllustratedMessage-BgCoMSTD.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CavH8dni.js";import"./Input-DPh2xJTy.js";import"./ResponsivePopoverCommon.css-YN2yb077.js";import"./ValueStateMessage.css-CZSQW4Xi.js";import"./Suggestions.css-CoI0xqid.js";import"./ListBoxItemGroupTemplate-DVkdxE4m.js";import"./ComboBoxItemGroup-B7lumk6S.js";import"./ListItemBaseTemplate-COnbdXmo.js";import"./Token-CyYhzpuK.js";import"./ScrollEnablement-CJNzrglF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C9BXoiP3.js";import"./ToggleButton-C756d9Qn.js";import"./multiselect-all-B_axlRDi.js";import"./SuggestionItem-DeimWAUM.js";import"./index-Cdhi9950.js";import"./Option-Dz3WWHcz.js";import"./index-BwSNURHE.js";import"./SegmentedButton-DZh5fXjg.js";import"./index-C9V-0iTY.js";import"./Select-Br85qeyo.js";import"./InvisibleMessage-DTrhxE2q.js";import"./index-lWGkx38J.js";import"./index-D8AeP6Iz.js";import"./index-DLeoOT8k.js";import"./index-XZbO5RWz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pxS513Zf.js";import"./group-2-DQqG6IcW.js";import"./sort-descending-CoH2Moiz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYaJ9Gcz.js";import"./utils-Chkhn7io.js";import"./index-_v6E_SiW.js";import"./index-Do6_Z1_e.js";import"./index-CiGBzV4y.js";import"./navigation-down-arrow-DyYI-mnK.js";import"./navigation-right-arrow-_kG0lFZX.js";import"./navigation-right-arrow-ByngEGsa.js";import"./useCurrentTheme-CSxpKvX6.js";import"./index-B7uqwTBo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQKn5Zaa.js";import"./paper-plane-DLTGccM2.js";import"./index-DPqF1ogR.js";import"./less-MXFQYBDW.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
