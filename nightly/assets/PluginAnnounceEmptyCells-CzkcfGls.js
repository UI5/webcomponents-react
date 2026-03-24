import{j as t}from"./iframe-D3LJsbiF.js";import{useMDXComponents as i}from"./index-CyzPa2YT.js";import{I as n}from"./CommandsAndQueries-ZyWBFV72.js";import{M as m,C as p}from"./blocks-C17hS1H0.js";import"./Tag-DEA3QTbc.js";import"./index-DQRzxDSe.js";import"./copy-CVdXx4M8.js";import{F as s}from"./Footer-BXlDlrd5.js";import"./PageNotFound-BgagSqcc.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-cQu6qAck.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DcTIU4K2.js";import"./index-BCAZlXLW.js";import"./index-N6F2Hon5.js";import"./index-CQnpN8bu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CgFvj6Uo.js";import"./addCustomCSSWithScoping-DIPZZBkR.js";import"./index-GY8piuJS.js";import"./index-Do3YGvBX.js";import"./index-CukaHHo2.js";import"./information-Pe11Evj5.js";import"./sys-enter-2-nzdqIN1z.js";import"./alert-8s9TsqZs.js";import"./index-Bs-GzB5h.js";import"./Illustrations-DV_KfhEH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DAB0X6cx.js";import"./delete-Cpf3YRTH.js";import"./settings-lg9V2mku.js";import"./NoData-DvxUgMOg.js";import"./NoFilterResults-CC3r0rI0.js";import"./index-C8hyEamZ.js";import"./IllustratedMessage-DksfyZ_X.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-C8XemuHR.js";import"./Input-B1OANMVL.js";import"./ResponsivePopoverCommon.css-Qeab4xYL.js";import"./ValueStateMessage.css-D70pJEyG.js";import"./Suggestions.css-Cmes9Jc-.js";import"./ListBoxItemGroupTemplate-DVrCYXQC.js";import"./ComboBoxItemGroup-zlmutFOl.js";import"./ListItemBaseTemplate-CcljlKh6.js";import"./Token-CaO8U0-1.js";import"./ScrollEnablement-B33zvDKT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2Jwg-e3.js";import"./ToggleButton-D0CBxY4k.js";import"./multiselect-all-C06PVQU1.js";import"./SuggestionItem-DE4exilg.js";import"./index-_QaCRpys.js";import"./Option-Cvor7pOw.js";import"./index-Dxm8KCWK.js";import"./SegmentedButton-DC_KjHbJ.js";import"./index-ljAkd_sM.js";import"./Select-B5-sFuNB.js";import"./InvisibleMessage-DC6HuNZv.js";import"./index-YzRzwEXC.js";import"./index-dHcELO_g.js";import"./index-BEv2rjMA.js";import"./index-Z6SBhAE6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CTFabBVw.js";import"./group-2-ByNcReFF.js";import"./sort-descending-CLKt-Lxc.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BB12PM0T.js";import"./utils-CJzxWqZp.js";import"./index-tyc9vWGE.js";import"./index-GLEKcSdk.js";import"./index-Btil1byA.js";import"./navigation-down-arrow-DArhHMwd.js";import"./navigation-right-arrow-OIapqFf7.js";import"./navigation-right-arrow-DyYqnXMq.js";import"./useCurrentTheme-C5F3jg4u.js";import"./index-DwfXPZsw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjwt-38Z.js";import"./paper-plane-Ce8u-ijT.js";import"./index-C_UElvqa.js";import"./less-CDY1RD56.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
