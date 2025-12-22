import{j as t}from"./iframe-CMOSZBev.js";import{useMDXComponents as n}from"./index-BTwv99x0.js";import{I as i,F as m}from"./CommandsAndQueries-BBxM4nbH.js";import{M as p,C as s}from"./blocks-C7uNs7TS.js";import"./Tag-CqfvYh1K.js";import"./index-SUBNzPDi.js";import"./copy-CxpwRqG0.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BGGuuGm3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcSeOVwt.js";import"./index-_PRo-73t.js";import"./index-CKeepgUa.js";import"./Link-D-jONPM3.js";import"./index-kRKXYALW.js";import"./index-BG7mFBoF.js";import"./index-DnIJB1t0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkqbRy7L.js";import"./addCustomCSSWithScoping-CCFGNXq3.js";import"./index-B2Bp115n.js";import"./information-D_sfcND0.js";import"./sys-enter-2-D7lHEvN4.js";import"./alert-CMJogacJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWm8Pdnv.js";import"./delete-jqJpTe2L.js";import"./settings-1zMM0TTB.js";import"./NoData-DBuwgpdA.js";import"./IllustratedMessage-BofcQBlB.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-DWqRVxEj.js";import"./index-CKirJzli.js";import"./index-DF53ugeV.js";import"./slim-arrow-down-DAnkwZ8z.js";import"./Input-BmUNjham.js";import"./ResponsivePopoverCommon.css-BCnF-C9t.js";import"./ValueStateMessage.css-3iIUq-Eq.js";import"./Suggestions.css-BiChEPXm.js";import"./ListBoxItemGroupTemplate-CCd_4VBx.js";import"./ComboBoxItemGroup-BTATmQjz.js";import"./ListItemBaseTemplate-CCj-4nFf.js";import"./Token-Bw95vKiC.js";import"./ScrollEnablement-CZWkeAzp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZzU_GhBz.js";import"./ToggleButton-PO6AUubZ.js";import"./SuggestionItem-DGmpPMHq.js";import"./index-DErYtSvu.js";import"./Option-BASIIjCE.js";import"./index-D_1ao0HG.js";import"./SegmentedButton-Ck1jyoaW.js";import"./index-DN0A1xHB.js";import"./Select-Dl8hzlud.js";import"./InvisibleMessage-CxtLELZ9.js";import"./slim-arrow-down-D_esAgSu.js";import"./index-DXnWcts-.js";import"./index-BVDh7HGR.js";import"./index-CCryildS.js";import"./index-Cb1OiNpu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B2Cmbs5j.js";import"./group-2-CW05y1Vx.js";import"./sort-descending-BJlygo9d.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CTplp2oj.js";import"./utils-CJbFgKgb.js";import"./index-CVcS8amw.js";import"./index-CKyJB_mr.js";import"./index-BqkbFWdI.js";import"./navigation-down-arrow-ehohWkFC.js";import"./navigation-right-arrow-BbmuEJCf.js";import"./navigation-right-arrow-5URvnLbD.js";import"./useCurrentTheme-B0G4hFaD.js";import"./index-CZhfcpCP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cu0Jio6B.js";import"./paper-plane-CwtFbMNe.js";import"./index-D1fdw4IU.js";import"./less-CzDyuHok.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
