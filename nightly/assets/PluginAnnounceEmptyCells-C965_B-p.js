import{j as t}from"./iframe-CLRwe_KU.js";import{useMDXComponents as i}from"./index-zMDfw_hp.js";import{I as n}from"./CommandsAndQueries-Qa8JAgCb.js";import{M as m,C as p}from"./blocks-B36l4j9a.js";import"./Tag-DLCMnG64.js";import"./index-Di2mC61N.js";import"./copy-C_QN3LWn.js";import{F as s}from"./Footer-CY1WkGvT.js";import"./PageNotFound-Et84DOUJ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CImvmFCc.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CQgjpXoE.js";import"./index-BFFCZnKZ.js";import"./index-CZmIgKIQ.js";import"./index-B905PbE4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5LoBpt5.js";import"./addCustomCSSWithScoping-BmaQonB-.js";import"./index-DhQiji0Y.js";import"./index-9xLRD1c-.js";import"./index-rGV23ifs.js";import"./information-BHtbew5c.js";import"./sys-enter-2-CeQJ4tH7.js";import"./alert-DGiHprsp.js";import"./index-BqJblJml.js";import"./Illustrations-BsZAm-cT.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CjlTtlId.js";import"./delete-CzIaiG6f.js";import"./settings-DNWeAtuY.js";import"./NoData-y3OBi2YA.js";import"./NoFilterResults-DMybirIN.js";import"./index-e0pSm-iu.js";import"./IllustratedMessage-CfFP86At.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BFRB3vNn.js";import"./Input-CmThYNOy.js";import"./ResponsivePopoverCommon.css-BHdjseh5.js";import"./ValueStateMessage.css-CUkX0r6k.js";import"./Suggestions.css-DG50lbLq.js";import"./ListBoxItemGroupTemplate-RwrRGF0Y.js";import"./ComboBoxItemGroup-Bd5_N2YI.js";import"./ListItemBaseTemplate-D5tvkBEy.js";import"./Token-BfX6rrBK.js";import"./ScrollEnablement-Bh4ROjF7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BeeWpw49.js";import"./ToggleButton-C0X3Nukc.js";import"./multiselect-all-DNY9iLOO.js";import"./SuggestionItem-CCS96mKL.js";import"./index-CNxxt-Ya.js";import"./Option-rvwi6Sh1.js";import"./index-BVppQ-lw.js";import"./SegmentedButton-CR_FICCj.js";import"./index-a2MjnGAR.js";import"./Select-BRr99ja4.js";import"./InvisibleMessage-D7m3pcV6.js";import"./index-BHYssSYC.js";import"./index-kcaVuine.js";import"./index-BU1oNBi0.js";import"./index-CWV1r8Rz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Lon8PjAF.js";import"./group-2-BZgi4TVU.js";import"./sort-descending-QJbOskyY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D-5oCNyE.js";import"./utils-DGnkkiyK.js";import"./index-DML8dj0q.js";import"./index-lA_hjyPS.js";import"./index-FRr66Ky1.js";import"./navigation-down-arrow-jRSiZ6yO.js";import"./navigation-right-arrow-C-ZNhxUq.js";import"./navigation-right-arrow-BF4xw2D4.js";import"./useCurrentTheme-Cegr51cF.js";import"./index-C2Ec73XG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPDPb-rh.js";import"./paper-plane-CfvaYcji.js";import"./index-DiSuVJLn.js";import"./less-DG4BSQsl.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
