import{j as t}from"./iframe-BY1BFtoq.js";import{useMDXComponents as n}from"./index-BJX8o_PY.js";import{I as i,F as m}from"./CommandsAndQueries-LexJCY9y.js";import{M as p,C as s}from"./blocks-Bfc9ghDe.js";import"./Tag-DpT3Xyfk.js";import"./index-DoP9OXws.js";import"./copy-BobpDbK0.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BJgxOLZH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cb7WjzHE.js";import"./index-odRykF4_.js";import"./index-CRXctDPP.js";import"./Link-CaG5MpgS.js";import"./index-B41LOkRR.js";import"./index-DSc6dsYM.js";import"./index-Dk5-ak7N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKdRFMC3.js";import"./addCustomCSSWithScoping-BhZcrUID.js";import"./index-7DiuorJD.js";import"./information-B4R2spf7.js";import"./sys-enter-2-HrsNxE-9.js";import"./alert-Dq9SF84g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCCC4ur2.js";import"./delete-D8zrN_sA.js";import"./settings-Bdr665rb.js";import"./NoData-BRqgG7K8.js";import"./IllustratedMessage-DPqumtU-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-Cyq1-ihj.js";import"./index-_HCPSvgc.js";import"./index-CRmM9ezH.js";import"./slim-arrow-down-DtYB0pd9.js";import"./Input-bf8JCO1U.js";import"./ResponsivePopoverCommon.css-BhNXWsd2.js";import"./ValueStateMessage.css-Dg1p_wIG.js";import"./Suggestions.css-S4z4vAmo.js";import"./ListBoxItemGroupTemplate-BHHW-U5N.js";import"./ComboBoxItemGroup-CWH9BsDg.js";import"./ListItemBaseTemplate-CTqAs3uy.js";import"./Token-q-g5A3-L.js";import"./ScrollEnablement-B_wAj3Qd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlebLaAt.js";import"./ToggleButton-CmeP7kkP.js";import"./SuggestionItem-C1WN_sCo.js";import"./index-DLBeBpmo.js";import"./Option-BbXwN-l4.js";import"./index-CfVsgWHp.js";import"./SegmentedButton-C2wGr84m.js";import"./index-Dqcyxmrt.js";import"./Select-CQ6YhMiH.js";import"./InvisibleMessage-Cm96dHRB.js";import"./slim-arrow-down-C6xEaE6E.js";import"./index-OWO7rarX.js";import"./index-Bv46zhG_.js";import"./index-BS9ow689.js";import"./IconDesign-DXd8PPVF.js";import"./filter-GHJB05Hr.js";import"./group-2-BSwplwhU.js";import"./sort-descending-DzpsEe-A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dj0e6j8A.js";import"./utils-BVTfHtc_.js";import"./index-DQ68OsPL.js";import"./index-BrYWbXY_.js";import"./index-Cji0Ug7a.js";import"./navigation-down-arrow-DoOrewxd.js";import"./navigation-right-arrow-D-L2cheh.js";import"./navigation-right-arrow-CaZt-wfz.js";import"./useCurrentTheme-3PuwnM7C.js";import"./IndicationColor-DVw-fSM_.js";import"./index-oc63bMUJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsxCqakm.js";import"./paper-plane-BTYyQoCV.js";import"./index-DwP49iU-.js";import"./less-mTodNhHV.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
